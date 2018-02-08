import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Header from './common/Header';
import Routes from './../routes';
import ReduxToastr from 'react-redux-toastr';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <ReduxToastr />
                <Header loading={this.props.loading} />
                <Routes />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ loading: state.ajaxCallsInProgress > 0 });

App.propTypes = {
    loading: PropTypes.bool,
};

// You need to wrap 'connected' components with 'withRouter' or else routing will not work
export default withRouter(connect(mapStateToProps)(App));
