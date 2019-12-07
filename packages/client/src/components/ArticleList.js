import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
	articles: state.articles
});

const ArticleList = props => (
	<ul>
		{
			props.articles.map(article => (
				<li>
					<table border="1">
						<tr>
							<td>ID</td>
							<td>{ article.id }</td>
						</tr>
						<tr>
							<td>Title</td>
							<td>{ article.title }</td>
						</tr>
					</table>
				</li>
			))
		}
	</ul>
);

export default connect(mapStateToProps)(ArticleList);