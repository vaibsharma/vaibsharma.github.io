import React, { Component } from 'react';
import {Grid} from "semantic-ui-react";

export default class SubHeader extends Component {

    static defaultProps = {
        style: {}
    };

    render() {
        const { mobile, tablet, computer, style } = this.props;
        return (
            <Grid.Column
                mobile={mobile}
                tablet={tablet}
                computer={computer}
                style={{
                    ...styles.grid,
                    ...style
                }}>
                {this.props.children}
            </Grid.Column>
        );
    }
}

const styles = {
    grid:{
        marginTop: '1em'
    }
};