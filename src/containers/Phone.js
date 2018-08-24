// ./phone_list_app/src/containers/Phone.js
import { connect } from 'react-redux';
import * as phoneActions from '../actions/phoneActions';
import PhoneItem from '../components/PhoneItem/PhoneItem';

// map state from store to props
const mapStateToProps = (state) => {
  return {
    selected: state.phonesState.selected
  }
}
  
// map actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        selectPhone: id => dispatch(phoneActions.selectPhone(id)),
        unselectPhone: () => dispatch(phoneActions.unselectPhone())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PhoneItem);