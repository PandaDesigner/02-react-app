import { ProductCard } from '../components';
import { products } from '../data/products';
import { useShoppingCard } from '../hooks/useShoppingCard';

import '../styles/custom-styles.css';

export const ShoppingPages = () => {
  const { onProductCoutChange, shoppingCart } = useShoppingCard();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className='bg-dark text-white'
            onChange={onProductCoutChange}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductCard.Image imgs='' className='custom-image' />
            <ProductCard.Title title='hola wey' className='text-bold' />
            <ProductCard.Buttons className='custom-buttons' />
          </ProductCard>
        ))}
      </div>

      <div className='shopping-cart'>
        {Object.entries(shoppingCart).map(([key, product]) => {
          return (
            <ProductCard
              product={product}
              className='bg-dark text-white'
              style={{ width: '100px' }}
              key={key}
              value={product.count}
              onChange={onProductCoutChange}
            >
              <ProductCard.Image imgs='' className='custom-image' />
              <ProductCard.Buttons className='custom-buttons' />
            </ProductCard>
          );
        })}
      </div>
    </div>
  );
};
