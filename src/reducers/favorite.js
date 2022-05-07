const initialState = {
  favorite: {
    counter: 0,
    products: [],
   },
  cart: { }
}

const favorite = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TO_FAVORITE': {
      return {
        ...state,
        favorite: {
          ...state.favorite,
          counter: state.favorite.counter + 1,
          products: [...state.favorite.products, action.payload]
        }
      }
    }
    case 'DELETE_FAVORITE': {
      return {
        ...state,
        favorite: {
          ...state.favorite,
          counter: state.favorite.counter - 1,
          products: state.favorite.products.filter(el => el.id !== action.payload)
        }
      }
    }
    default: return state
  }
}

export default favorite