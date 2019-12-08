import React from 'react';
import { connect } from 'react-redux'
import { fetchArticles } from '../store/actions/fetch-articles';
import ArticleList from './ArticleList';
import Loading from './Loading';

const mapStateToProps = state => ({
	isLoading: state.isLoading
});

export class App extends React.Component {

	componentDidMount() {
		this.props.fetchArticles();
	}

	render() {
		const body = this.props.isLoading ?
			<Loading message="Your articles are loading" /> :
			<ArticleList/>;

		return (
			<div>
				{ body }
			</div>
		);
	}
}

export default connect(mapStateToProps, { fetchArticles })(App);