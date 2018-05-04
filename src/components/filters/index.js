import React, {Component} from 'react'
import {getIn} from 'timm';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
//import {faStar} from '@fortawesome/fontawesome-free-solid'
import {faStar} from '@fortawesome/fontawesome-free-solid'

import Select from 'material-ui/Select';
import {MenuItem} from 'material-ui/Menu';
import {InputLabel} from "material-ui/Input";
import {FormControl, FormHelperText} from "material-ui/Form";

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
        this.state = {
            groupBy: ''
        }
    }

    handleGroupBySelect = (e) => {
        const {name, value} = getIn(e, ['target']);
        this.setState({[name]: value})
    }
    render() {
        const {groupBy, orderBy, ratingBy} = getIn(utils, ['filters']) || false;
        const {variants: groupByVariants, placeholder: groupByplaceholder} = groupBy;
        const {placeholder: orderByPlaceholder, variants: orderByVariants} = orderBy;
        const {label: ratingLabel, variants: ratingVariants} = ratingBy;

        const searchPlaceholderText = getIn(utils, ['filters', 'search', 'placeholder']) || false;

        const groupByOptions = groupByVariants.map(variant => {
            return <MenuItem value={variant} key={variant}>{variant}</MenuItem>
        })

        return (
            <div className="filter">
                <form>
                    <Search className="filter-search" searchPlaceholder={searchPlaceholderText}/>
                    <div className="filter-dropDown">
                        <FormControl className="filter-dropDown-groupBy">
                            <InputLabel htmlFor="groupBy-Simple">{groupByplaceholder}</InputLabel>
                            <Select
                                value={this.state.groupBy}
                                onChange={this.handleGroupBySelect}
                                inputProps={{
                                name: 'groupBy',
                                id: 'groupBy-Simple'
                            }}>
                                {groupByOptions}
                            </Select>
                        </FormControl>
                    </div>
                    <Rating className="filter-rating" label={ratingLabel} payload={ratingVariants}/>
                </form>
            </div>
        )
    }
}
