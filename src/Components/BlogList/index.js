import React, { Component } from 'react';
import Parser from 'rss-parser';
import PropTypes from 'prop-types';
import {Header, Label} from "semantic-ui-react";

import {Row, Column, Space } from "./../";
const RSSParser = new Parser({
	headers: {
		"Access-Control-Allow-Origin": "*",
		"ContentType": "application /rss+xml"
	},
	defaultRSS: 2.0
});


export default class BlogList extends Component{
	constructor(props){
		super(props);
		this.state = {
			items: []
		};
	}

	static propTypes = {
		url: PropTypes.string.isRequired
	};

	componentDidMount() {
		console.log("BlogList are rendering");
		(async () => {
			const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
			const feed = await RSSParser.parseURL(CORS_PROXY+this.props.url);
			const items = feed.items.slice(0,6);

			this.setState({
				items: items
			}, () => {
				console.log(this.state);
			})
		})();
	}

	renderCategories(categories) {
		return (
			<div>
				<Row style={{marginLeft: 0}}>
					{categories.map((value, key) => (
						<Label key={key} size={"medium"} style={{marginBottom: 5}}>
							{value}
						</Label>
					))}
				</Row>
			</div>
		)
	}

	render(){
		return(
			<div>
				{this.state.items.map(({title, link, pubDate, categories}, key) => (
					<Row key={key}>
						<Column mobile={12} tablet={6} computer={6}>
							<Header size={"medium"}>
								<a href={link}>{title}</a>
							</Header>
						</Column>
						<Column mobile={12} tablet={6} computer={6}>
							{this.renderCategories(categories)}
						</Column>
						<Column mobile={12} tablet={6} computer={6}>
							<Header size={"medium"}>{pubDate}</Header>
						</Column>
					</Row>
				))}
			</div>
		)
	}
}