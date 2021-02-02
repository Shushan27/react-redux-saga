import { Products } from './constants'

// *********************************
// NOTE: Fetch Posts
// *********************************

export const fetchProductsSuccess = (data) => {
  return {
    type: Products.fetchProductsSuccess,
    payload: data
  };
}

export const fetchProducts = (data) => {
  return {
    type: Products.fetchProducts,
    payload: data
  }
}

export const fetchProductsError = (data) => {
  return {
    type: Products.fetchProductsError,
    payload: data
  }
}

export const addProduct = (data) => {
  return {
    type: Products.addProduct,
    payload: data
  }
}

export const addProductSuccess = (data) => {
  return {
    type: Products.addProductSuccess,
    payload: data
  };
}

export const deleteProduct = (data) => {
  return {
    type: Products.deleteProduct,
    payload: data
  }
}

export const deleteProductSuccess = (data) => {
  return {
    type: Products.deleteProductSuccess,
    payload: data
  };
}

export const updateProduct = (data) => {
  return {
    type: Products.updateProduct,
    payload: data
  }
}

export const updateProductSuccess = (data) => {
  return {
    type: Products.updateProductSuccess,
    payload: data
  };
}