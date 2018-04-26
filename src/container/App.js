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
        const {data: reviewData} = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Amazon Challenge</h1>
                </header>
                <div className="reviews">
                    {reviewData && reviewData.map(review => {
                        return <ReviewCard data={review} key={review.reviewId}/>
                    })
}
                </div>
            </div>
        );
    }
}

const mapToStateToProps = state => {
    return {isLoading: state.isLoading, data: state.reviews, hasMore: state.hasMore};
};

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchData
}, dispatch);

const appVisibility = connect(mapToStateToProps, mapDispatchToProps)(App);

export default appVisibility;
