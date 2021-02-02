import React from 'react';
import { fetchProducts, addProduct, deleteProduct, updateProduct } from '../redux/actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import editIcon from '../assets/icons - edit.svg';
import deleteIcon from '../assets/icons - delete.svg';

class ProductsComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      price: '',
      editedProductName: '',
      editedPrice: '',
      editItemIndex: '',
    }
  }

  componentDidMount() {
    this.props.fetchProducts()
  }

  handleAddProduct = () => {
    this.props.addProduct({
      name: this.state.productName,
      price: this.state.price,
    })
  }

  saveUpdated = (product) => {
    this.props.updateProduct({...product, name: this.state.editedProductName || product.name, price: this.state.editedPrice || product.price})
    this.setState({
      editedProductName: '',
      editedPrice: '',
      editItemIndex: '',
    })
  }

  render(){
    const { products } = this.props.products;

    return (
      <>
        <h1>Products</h1>
        <div className="app-container">
          <div className="products-container">
            {
              products.length > 0 &&
              products.slice(0,10).map((product,i)=>{
                return (
                  <div key={i} className="each-post">
                    {this.state.editItemIndex === i ?
                      <span>
                    <input type='text' defaultValue={product.name} onChange={(e) => this.setState({editedProductName: e.target.value})} placeholder='Product Name'/>
                    <input type='text' defaultValue={product.price} onChange={(e) => this.setState({editedPrice: e.target.value})} placeholder='Price'/>
                    <button
                      onClick={() => this.saveUpdated(product)}
                    >
                      Save
                    </button>
                    <button onClick={() => this.setState({editItemIndex: ''})}>Cancel</button>
                  </span> :
                      <span><b>{product.name}</b> - {product.price} $</span>
                    }
                    <img src={editIcon} className='edit-icon' onClick={() => this.setState({editItemIndex: i})}/>
                    <img src={deleteIcon} onClick={() => this.props.deleteProduct(product.id)}/>
                  </div>
                )
              })
            }
          </div>
          <div className='add-product'>
            <div>
              <div>Product Name</div>
              <input type='text' onChange={(e) => this.setState({productName: e.target.value})} />
              <div>($) Price</div>
              <input type='text' onChange={(e) => this.setState({price: e.target.value})} />
            </div>
            <div className="products-button-container">
              <div className="button_cont" align="center">
                <a className="example_a" onClick={this.handleAddProduct} >
                  Add Product
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const structuredSelector = createStructuredSelector({
  products: state => state.products,
})

const mapDispatchToProps = { fetchProducts, addProduct, deleteProduct, updateProduct }
export default connect(structuredSelector, mapDispatchToProps)(ProductsComponent)