import { connect } from 'react-redux';
import OrderForm from './OrderForm';
import {getOrderOptions} from '../../../redux/orderRedux';

const mapStateToProps = (state, props) => ({
  options: getOrderOptions(state , props.id),
});



export default connect(mapStateToProps)(OrderForm);