import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { store } from './redux/store'
import ProductsComponent from "./components/products-component";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ProductsComponent/>
        </div>
      </Provider>
    )
  }
}
export default App