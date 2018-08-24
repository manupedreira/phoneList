// ./phone_list_app/src/containers/App.js
import { connect } from 'react-redux';
import * as phonesActions from '../actions/phonesActions';
import App from '../components/App/App';

// map state from store to props
const mapStateToProps = (state) => {
  return {
    //you can now say this.props.mappedAppSate
    loading: state.appState.loading,
    error: state.appState.error,
    phones: state.appState.phones
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    fetchPhones: () => dispatch(phonesActions.fetchPhones())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);