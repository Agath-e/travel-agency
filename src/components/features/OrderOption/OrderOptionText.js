import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionText = ({name, setOptionValue}) => (
  <div className={styles.component}>
    <input className={styles.imput} type='text' placeholder={name}
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
  </div>
);

OrderOptionText.propTypes = {
  name: PropTypes.string,
  setOptionValue: PropTypes.func,
  limits: PropTypes.object,
};

export default OrderOptionText;