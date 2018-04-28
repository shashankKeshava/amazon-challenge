import React, {PureComponent} from 'react';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/fontawesome-free-solid'
// import {fas} from '@fortawesome/fontawesome-free-solid/fas' import {far} from
// '@fortawesome/fontawesome-free-solid/far'

import './index.scss'

fontawesome
    .library
    .add(faStar);

const DateSection = ({date}) => {
    return (
        <div className="reviewCard-Head-data">
            <div className="reviewCard-Head-data-title">
                {"DATE"}
            </div>
            <div className="reviewCard-Head-data-content">
                {date}
            </div>
        </div>
    )
}

const StarsSection = ({numStars}) => {
    let i = 1;
    let stars = [];
    while (i <= numStars || i <= 5) {
        if (i <= numStars) {
            stars.push(<FontAwesomeIcon key={i} icon={'star'}/>);
        } else {
            stars.push(<FontAwesomeIcon key={i} icon={['far', 'star']}/>);
        }
        i++;
    }
    return (
        <div className="reviewCard-Head-data">
            <div className="reviewCard-Head-data-title">
                {"STARS"}
            </div>
            <div className="reviewCard-Head-data-content">
                {stars}
            </div>
        </div>
    )
}

export const CustomerSection = ({cId, authorId}) => {
    return (
        <div className="reviewCard-Head-data">
            <div className="reviewCard-Head-data-title">
                {cId}
            </div>
            <div className="reviewCard-Head-data-content">
                {authorId || "Sellics Customer"}
            </div>
        </div>
    )
}

export class ReviewCard extends PureComponent {
    render() {
        const {
            title,
            created,
            content,
            stars,
            childAsin,
            authorId
        } = this.props.data;;
        const timeStamp = new Date(created);
        const regex = new RegExp('/', 'g');
        const date = (timeStamp.toLocaleDateString()).replace(regex, '.')
        return (
            <div className="reviewCard">
                <div className="reviewCard-Head">
                    <div className="reviewCard-Head-img"></div>
                    <DateSection date={date}/>
                    <StarsSection numStars={stars}/>
                    <CustomerSection cId={childAsin} authorId={authorId}/>
                </div>
                <div className="reviewCard-Title">
                    {title}
                </div>
                <div className="reviewCard-Content">
                    {content}
                </div>

            </div>

        )
    }
}
