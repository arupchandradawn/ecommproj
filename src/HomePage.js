import Brand from './Brand';
import './HomePage.css';
import Product from './Product';

function HomePage() {
    return (
      <div className="HomePage">
        {/* Caraousel of latest products */}
        {/* Grid view for on sale product */}
        <div className='productSpace'>
            <Product name="Redmi Note7" />
            <Product name="Redmi Note8" />
            <Product name="Redmi Note9" />
            <Product name="Redmi Note10" />
            <Product name="Redmi Note11" />
        </div>


        <div className='brandSpace'>
            <Brand name="Redmi"/>
            <Brand name="SAMSUNG"/>
            <Brand name="ONEPLUS"/>
            <Brand name="Iqoo"/>
        </div>
      </div>
    );
}
  
export default HomePage;