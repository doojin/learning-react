import React from 'react';
import ArticleList from './ArticleList';
import { fetchArticles } from '../store/actions/fetch-articles';
import { connect } from 'react-redux'

class App extends React.Component {

	componentDidMount() {
		this.props.fetchArticles();
	}

	render() {
		return (
			<div>
				<ArticleList/>
			</div>
		);
	}
}

export default connect(null, { fetchArticles })(App);