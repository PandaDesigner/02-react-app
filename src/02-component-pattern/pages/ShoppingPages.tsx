import { ProductCard } from '../components';
import { products } from '../data/products';
import '../styles/custom-styles.css';

const product = products[0];

export const ShoppingPages = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div>
        <ProductCard
          key={product.id}
          product={product}
          className='bg-dark text-white'
          initialValues={{ count: 4, maxCount: 10 }}
        >
          {({ count, isMaxCountReached, maxCount, increaseBy, reset }) => (
            <>
              <ProductCard.Image imgs='' className='custom-image' />
              <ProductCard.Title className='text-bold' />
              <ProductCard.Buttons className='custom-buttons' />
              <button onClick={() => reset()}>Reset</button>
              <span>{count}</span>
              <button onClick={() => increaseBy(-2)}>-2</button>
              {!isMaxCountReached && (
                <button onClick={() => increaseBy(2)}> +2 </button>
              )}
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};
