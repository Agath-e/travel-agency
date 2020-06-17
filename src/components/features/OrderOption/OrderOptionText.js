import React from 'react';
import styles from './OrderOption.scss';

const OrderOptionText = () => (
  <div className={styles.text}>
    <input
      className={styles.input}
      type="text" 
    ></input>
  </div>
);

export default OrderOptionText;