import {
  ProductButtons,
  ProductImage,
  ProductTitle,
  ProductCard,
} from '../components';

import '../styles/custom-styles.css';

const product = {
  id: '1',
  img: './coffee-mug.png',
  title: 'Coffee Mug - Card',
};

export const ShoppingPages = () => {
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
        <ProductCard product={product} className='bg-dark text-white'>
          <ProductCard.Image imgs='' className='custom-image' />
          <ProductCard.Title title='hola wey' className='text-bold' />
          <ProductCard.Buttons className='custom-buttons' />
        </ProductCard>
        <ProductCard product={product} className='bg-dark text-white'>
          <ProductImage className='custom-image' />
          <ProductTitle className='text-bold' />
          <ProductButtons className='custom-buttons' />
        </ProductCard>
      </div>
    </div>
  );
};
