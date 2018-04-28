import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchData} from '../actions';
import './App.scss';

import {ReviewCard} from '../components/reviewCard'

class App extends Component {
    componentDidMount = () => {
        this
            .props
            .fetchData('FETCH_DATA', 1);
    };

    render() {
        const {isLoading, reviews: reviewData, hasMore, loadingMsg} = this.props;
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
                        <div className="App-loader-msg">Important:{" "}<a className="App-loader-a" href={loadingMsg.pluginLink}>{loadingMsg.importantMsg}</a>
                        </div>
                    </div>
                )}
                <div className="reviews">
                    {reviewData && reviewData.map(review => {
                        return <ReviewCard data={review} key={review.reviewId}/>
                    })}
                </div>
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
