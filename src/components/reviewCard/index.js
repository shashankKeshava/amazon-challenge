import React, {PureComponent} from 'react';

import './index.scss'

const DateSection = ({date}) => {
    return (
        <div className="reviewCard-data">
            <div class="reviewCard-data-title">
                {"DATE"}
            </div>
            {date}
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
                    <DateSection date={date}/> {title}
                </div>
            </div>

        )
    }
}
