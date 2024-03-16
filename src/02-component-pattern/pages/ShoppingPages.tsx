import {
  ProductButtons,
  ProductImage,
  ProductTitle,
  ProductCard,
} from '../components';

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
        <ProductCard product={product}>
          <ProductCard.Image imgs='' />
          <ProductCard.Title title='hola wey' />
          <ProductCard.Buttons />
        </ProductCard>
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
