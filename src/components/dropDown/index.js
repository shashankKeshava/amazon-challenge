import React, {Component} from 'react';
import {getIn} from 'timm';

import './index.scss';

export class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            value: false
        };
    }

    closeMenu = () => {
        this.setState({show: false});
    };
    toggleOptions = event => {
        event.preventDefault();
        const {show: status} = this.state;

        //Show menu based on click and hide menu if clicked anywhere on screen
        this.setState({
            show: !status
        }, () => {
            document.addEventListener('click', this.closeMenu);
        });

        const {payload} = this.props;

        const option = getIn(event, ['target', 'innerHTML']) || false;
        if (payload.indexOf(option) > -1)
            this.handleSelectedVariant(option);
        };

    handleSelectedVariant = variant => {
        this.setState({value: variant});
    };

    render() {
        const {payload, label} = this.props;
        const {show, value} = this.state;
        const options = payload.map((variant, index) => {
            return (
                <div className="dropDown-options" key={index}>
                    {variant}
                </div>
            );
        });

        return (
            <div className="dropDown-wrapper">
                <div className="dropDown-label" onClick={this.toggleOptions}>
                    <div className="dropDown-select">
                        <span>{value || label}</span>
                        <p>&#x25B2;</p>
                    </div>
                </div>
                <div>{show
                        ? options
                        : ''}</div>
            </div>
        );
    }
}
