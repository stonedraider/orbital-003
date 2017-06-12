import React, { Component } from 'react';
import reactCSS from 'reactcss';

import Button from '../Button';

import * as constants from '../../constants/constants.js';

const PATH_BASE = 'https://api.nasa.gov/planetary/apod';

const PARAM_API_KEY = 'api_key=';
const PARAM_DATE = 'date=';
const PARAM_HD = 'hd=';

// const VALUE_API_KEY = 'DEMO_KEY';
const VALUE_API_KEY = 'Yxi6hdd2U4X9odDq25r8ppGeeKz0I8zkFV8GiQU0';
const VALUE_DATE = '2017-01-01';
const VALUE_HD = 'false';

const DAYS = 3;
const FETCH_SIZE = 1;

class Body extends Component {

    constructor(props) {
        super(props);

        var date = new Date();

        this.state = {
            isLoading: false,
            results: null,
            currentDate: new Date(date.setDate(date.getDate() - DAYS))
        }

        this.onSwitchStyle = this.onSwitchStyle.bind(this);
    }
    render() {
        console.log(this.state);

        const theme = constants.THEME_ID;

        const styles = reactCSS({
            'black': {
                Body: {
                    background: 'black',
                },
            },
            'white': {
                Body: {
                    background: 'white',
                },
            },
        }, {
                'black': this.props.theme === theme.BLACK,
                'white': this.props.theme === theme.WHITE,
            });

        return (
            <div className="Body" style={styles.Body}>
                <Button
                    className="btn btn-default active"
                    onClick={() => this.onSwitchStyle(theme.BLACK)}
                >
                    Black Theme
                </Button>
                <Button
                    className="btn btn-default active"
                    onClick={() => this.onSwitchStyle(theme.WHITE)}
                >
                    White Theme
                </Button>
                {/*<Button
                    className="btn btn-default active"
                    onClick={() => this.fetchNextData()}
                >
                    Load APOD
                </Button>*/}
                <hr></hr>
                <div>
                    <div>
                    </div>
                </div>
            </div >
        );
    }

    onSwitchStyle(theme) {
        this.props.switchTheme({
            theme: theme
        });
    }

    fetchNextData() {
        for (let i = 0; i < FETCH_SIZE; i++) {
            this.decrementDate();
            this.fetchApod(this.formatDate(this.state.currentDate));
        }
    }

    fetchApod(date) {
        this.setState({ isLoading: true });

        fetch(`${PATH_BASE}?${PARAM_API_KEY}${VALUE_API_KEY}&${PARAM_DATE}${date}&${PARAM_HD}${VALUE_HD}`)
            .then(response => response.json())
            .then(result => this.setApodResult(result));
    }

    setApodResult(result) {
        const updatedResults = this.state.results ? this.state.results : [];
        updatedResults.push(result);

        this.setState({
            isLoading: false,
            results: updatedResults
        });
    }

    decrementDate() {
        this.setState({
            currentDate: new Date(this.state.currentDate.setDate(this.state.currentDate.getDate() - 1))
        })
    }

    formatDate(date) {
        return date.toISOString().substring(0, 10);
    }
}

export default Body;