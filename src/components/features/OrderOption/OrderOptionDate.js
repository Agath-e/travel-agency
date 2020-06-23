import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';


class OrderOptionDate extends React.Component {
  static propTypes = {
    setOptionValue: PropTypes.func,
  };
  state = {
    startDate: new Date(),
  };

  handleChange = date => {
    this.setState({
      startDate: date,
    });
    this.props.setOptionValue(this.state.startDate);
  };
  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        dateFormat="dd/MM/yyyy"
      />
    );
  }
}


export default OrderOptionDate;