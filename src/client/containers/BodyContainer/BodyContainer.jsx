import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Body from '../../components/Body/index.js';
import Button from '../../components/Button/index.js'

import * as SwitchThemeActions from '../../actions/switch-theme-actions';
import * as FetchApodActions from '../../actions/fetch-apod-actions';
import * as constants from '../../constants/constants.js';

class BodyContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };

    }
    render() {

        const { theme } = this.props;

        // console.log(this.state);
        // console.log(this.props);

        return (
            <Body
                theme={theme}
                switchTheme={this.props.switchThemeActions.switchTheme}
                fetchApod={this.props.fetchApodActions.fetchApod}
            />
        );
    }
}

BodyContainer.propTypes = {
    switchThemeActions: PropTypes.object.isRequired,
    fetchApodActions: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
    return {
        theme: state.SwitchThemeReducer.theme,
        date: state.FetchApodReducer.date
    };
}

function mapDispatchToProps(dispatch) {
    return {
        switchThemeActions: bindActionCreators(SwitchThemeActions, dispatch),
        fetchApodActions: bindActionCreators(FetchApodActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer);