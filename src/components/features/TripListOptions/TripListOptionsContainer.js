import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, durationFrom, durationTo, addTags, removeTags} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  durationFrom: phrase => dispatch(durationFrom(phrase)),
  durationTo: phrase => dispatch(durationTo(phrase)),
  addTags: phrase => dispatch(addTags(phrase)),
  removeTags: phrase => dispatch(removeTags(phrase)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
