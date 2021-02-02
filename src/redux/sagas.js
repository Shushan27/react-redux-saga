import { put, takeLatest, all } from 'redux-saga/effects';
import { Products } from './constants';
import {
  fetchProductsSuccess,
  addProductSuccess,
  deleteProductSuccess,
  updateProductSuccess,
} from './actions'
import {firebase_app} from '../api/firebase'

function* getProducts() {
  const products = yield firebase_app
    .firestore()
    .collection('products')
    .get().then(querySnapshot => {
      const prods = [];
      querySnapshot.forEach(doc => {
        prods.push({...doc.data(), id: doc.id})
      });
      return prods;
    });
  yield put(fetchProductsSuccess(products))
}

function* addProduct(action) {
  const productId = yield firebase_app
    .firestore()
    .collection('products')
    .add(action.payload).then(querySnapshot => {
     return querySnapshot.id
    });
  yield put(addProductSuccess({...action.payload, id: productId}))
}

function* deleteProduct(action) {
  yield firebase_app
    .firestore()
    .collection('products')
    .doc(action.payload)
    .delete();
  yield put(deleteProductSuccess(action.payload))
}

function* updateProduct(action) {
  yield firebase_app
    .firestore()
    .collection('products')
    .doc(action.payload.id)
    .set(action.payload);
  yield put(updateProductSuccess(action.payload))
}

export default function* rootSaga() {
  yield all([
    yield takeLatest(Products.fetchProducts, getProducts),
    yield takeLatest(Products.addProduct, addProduct),
    yield takeLatest(Products.deleteProduct, deleteProduct),
    yield takeLatest(Products.updateProduct, updateProduct),
  ])
}