import React, {Component} from 'react'
import {getIn} from 'timm';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
//import {faStar} from '@fortawesome/fontawesome-free-solid'
import {faStar} from '@fortawesome/fontawesome-free-regular'

import utils from '../../utils'
import {DropDown} from '../dropDown'

import './index.scss'

const Search = ({searchPlaceholder}) => {
    return (
        <div className="filter-search-wrapper">
            <input type="search" placeholder={searchPlaceholder}/>
        </div>
    )
}

const Rating = ({label, payload}) => {
    return (
        <div className="filter-rating-wrapper">
            {label}
            {payload && payload.map(variant => {
                return (
                    <div className="filter-rating-variant" key={variant}>
                        <input type="checkbox"/> {variant}
                        <FontAwesomeIcon icon={'star'}/>
                    </div>
                )
            })}
        </div>
    )
}

export class Filters extends Component {
    constructor(props) {
        super(props);
    }

    handleGroupByChange = (variant) => {
        console.log(variant);
    }
    render() {
        const {groupBy, orderBy, ratingBy} = getIn(utils, ['filters']) || false;
        const {variants, placeholder: groupByplaceholder} = groupBy;
        const {placeholder: orderByPlaceholder, variants: orderByVariants} = orderBy;
        const {label: ratingLabel, variants: ratingVariants} = ratingBy;

        const searchPlaceholderText = getIn(utils, ['filters', 'search', 'placeholder']) || false;

        return (
            <div className="filter">
                <form>
                    <Search className="filter-search" searchPlaceholder={searchPlaceholderText}/>
                    <div className="filter-dropDown">
                    <DropDown
                    key={1}
                        className="filter-groupBy"
                        label={groupByplaceholder}
                        payload={variants}/>
                    <DropDown
                    key={2}
                        className="filter-orderBy"
                        label={orderByPlaceholder}
                        payload={orderByVariants}/>
                        </div>
                    <Rating className="filter-rating" label={ratingLabel} payload={ratingVariants}/>
                </form>
            </div>
        )
    }
}
