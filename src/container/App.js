import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import utils from '../utils'

import {fetchData} from '../actions';
import './App.scss';

import {ReviewCard} from '../components/reviewCard'
import {Filters} from '../components/filters'

class App extends Component {
    componentDidMount = () => {
        this
            .props
            .fetchData('FETCH_DATA', 1);
    };

    render() {
        const {isLoading, reviews: reviewData, hasMore} = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Amazon Challenge</h1>
                </header>
                {isLoading && (
                    <div className="App-loader">
                        <div className="container">
                            <div className="lds-ring">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div className="App-loader-msg">Note:{" "}
                            <a className="App-loader-a" href={utils.loadingMsg.pluginLink}>{utils.loadingMsg.importantMsg}</a>
                        </div>
                    </div>
                )}
                {!isLoading && (
                    <div className="App-body">
                        <div className="App=body-filters">
                            <Filters/>
                        </div>
                        <div className="reviews">
                            {reviewData && reviewData.map(review => {
                                return <ReviewCard data={review} key={review.reviewId}/>
                            })}
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

const mapToStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchData
}, dispatch);

const appVisibility = connect(mapToStateToProps, mapDispatchToProps)(App);

export default appVisibility;
