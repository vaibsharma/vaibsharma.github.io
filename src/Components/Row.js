import React, { Component } from 'react';
import {Grid} from "semantic-ui-react";

export default class Row extends Component {

    static defaultProps = {
        style: {},
        columns: 2
    };

    render() {
        const { textAlign, style, columns } = this.props;
        return (
            <Grid
                textAlign={textAlign}
                columns={columns}
                style={style}
            >
                <Grid.Row>
                    {this.props.children}
                </Grid.Row>
            </Grid>
        );
    }
}