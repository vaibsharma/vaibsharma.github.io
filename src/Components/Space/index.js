import React, { Component } from 'react';

export default class Space extends Component {

    static defaultProps = {
        style:{}
    };

    render() {
        const { style } = this.props;
        return (
            <div style={{...styles, ...style}}>
                {this.props.children}
            </div>
        );
    }
}


const styles = {
    height: "1em"
};