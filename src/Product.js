import './Product.css';

function Product(props) {
    return (
      <div className="product">
        {props.name}
      </div>
    );
  }
  
  export default Product;