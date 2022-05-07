const initialState = {
  cart: {
    counter: 0,
    products: [],
   },
}

const cart = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TO_CART': {
      const isHas = state.cart.products.find(el => el.id === action.payload.id)
      if (!!isHas) {
        state.cart.products.forEach(el => {
          if (el.id === action.payload.id) el.quantity = el.quantity + 1
        })
      }
      return {
        ...state,
        cart: {
          ...state.cart,
          counter: state.cart.counter + 1,
          products: isHas ? [...state.cart.products] : [...state.cart.products, action.payload]
        }
      }
    }
    case 'DELETE_FROM_CART': {

      const element = state.cart.products.find(el => el.id === action.payload)
      console.log('ELEMENT', element);
      let helper = null
      if (element.quantity > 1) {
        
        element.quantity = element.quantity - 1
      } else {
        helper = state.cart.products.filter(el => el.id !== action.payload)

        console.log('isHas.quantity', helper);
      }

      return {
        ...state,
        cart: {
          ...state.cart,
          counter: state.cart.counter - 1,
          products: helper != null ? [...helper] : [...state.cart.products]
        }
      }
    }
    default: return state
  }
}

export default cart