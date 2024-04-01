import { CSSProperties, useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export interface PropsButtons {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: PropsButtons) => {
  const { counter, increaseBy, maxCount } = useContext(ProductContext);

  const isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount]
  );

  const isMinReached = useCallback(() => counter < 1, [counter]);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button
        className={`${styles.buttonMinus} ${
          isMinReached() && styles.disable__right
        }`}
        onClick={() => increaseBy(-1)}
        disabled={isMinReached()}
      >
        -
      </button>
      <div className={styles.countLabel}> {counter} </div>
      <button
        className={`${styles.buttonAdd} ${
          isMaxReached() && styles.disable__left
        }`}
        onClick={() => increaseBy(1)}
        disabled={isMaxReached()}
      >
        +
      </button>
    </div>
  );
};
