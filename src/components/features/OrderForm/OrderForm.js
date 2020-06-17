import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import { Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption.js';
import { setOrderOption } from '../../../redux/orderRedux.js';

const OrderForm = (props) => (
  <Row>
    {pricing.map(option => (
      <Col md={4} key={option.id}>
        <OrderOption {...option} currentValue={props.options[option.id]} />
      </Col> 
    ))}
    <Col xs={12}>
      <OrderSummary tripCost={props.tripCost} options={props.options} setOrderOption={setOrderOption}/>
    </Col>
  </Row>
);
OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderForm;