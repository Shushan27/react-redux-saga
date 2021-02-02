import { Products } from './constants'

const initialState = {
  products: []
}

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Products.fetchProducts:
      return state
    case Products.fetchProductsSuccess:
      return {
        ...state,
        products: action.payload
      }
    case Products.addProduct:
      return state
    case Products.addProductSuccess:
      return {
        ...state,
        products: [
          action.payload,
          ...state.products,
        ]
      }
    case Products.deleteProduct:
      return state
    case Products.deleteProductSuccess:
      return {
        ...state,
        products: state.products.filter((prod) => prod.id !== action.payload),
      }
    case Products.updateProduct:
      return state
    case Products.updateProductSuccess:
      const products = [...state.products];
      const index = products.findIndex(p => p.id === action.payload.id)
      if(index === -1) {
        products.push(action.payload);
      } else {
        products[index] = action.payload;
      }
      return {
        ...state,
        products,
      }
    default:
      return initialState
  }
}