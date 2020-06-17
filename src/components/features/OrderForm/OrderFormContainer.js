import { connect } from 'react-redux';
import OrderForm from './OrderForm';
import {getOrderOptions, setOrderOption} from '../../../redux/orderRedux';

const mapStateToProps = (state, props) => ({
  options: getOrderOptions(state , props.id),
});
const mapDispatchToProps = dispatch => ({
  setOrderOption: option => dispatch(setOrderOption(option)),
});


export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);