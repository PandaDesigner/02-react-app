import { useState } from 'react';
import { Product } from '../interfaces/interfaces';

interface PoductInCart extends Product {
  count: number;
}

export const useShoppingCard = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: PoductInCart;
  }>({});

  const onProductCoutChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((oldShoppingCart) => {
      const productInCart: PoductInCart = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCart,
        };
      }
      const { [product.id]: toDelet, ...rest } = oldShoppingCart;
      return rest;

      /*
      if (count === 0) {
        const { [product.id]: toDelet, ...rest } = oldShoppingCart;
        return rest;
      }

      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count },
      };
      */
    });
  };

  return {
    shoppingCart,
    onProductCoutChange,
  };
};
