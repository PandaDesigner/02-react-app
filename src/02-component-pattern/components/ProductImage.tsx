import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export const ProductImage = ({ imgs = '' }) => {
  const { product } = useContext(ProductContext);

  let imgToShow: string;

  if (imgs) {
    imgToShow = imgs;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }

  return (
    // eslint-disable-next-line jsx-a11y/img-redundant-alt
    <img className={styles.productImg} src={imgToShow} alt='Prooduct Image' />
  );
};
