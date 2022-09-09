const initialState = {
  cart: {
    counter: 0,
    products: [],
   },
}

const cart = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TO_CART': {
      const helper = state.cart.products.map(product => { return {...product }})
      const product = helper.find(el => el.id === action.payload.id)
      if (!!product) {
        product.quantity = product.quantity + 1
      }
      return {
        ...state,
        cart: {
          ...state.cart,
          counter: state.cart.counter + 1,
          products: product ? [...helper] : [...helper, action.payload]
        }
      }
    }
    case 'DELETE_FROM_CART': {
      const helper = state.cart.products.map(product => { return {...product }})
      const product = helper.find(el => el.id === action.payload)
      let filteredArray = null
      if (product.quantity > 1) {

        product.quantity = product.quantity - 1
      } else {
        filteredArray = helper.filter(el => el.id !== action.payload)
      }

      return {
        ...state,
        cart: {
          ...state.cart,
          counter: state.cart.counter - 1,
          products: filteredArray != null ? [...filteredArray] : [...helper]
        }
      }
    }
    default: return state
  }
}

export default cart
