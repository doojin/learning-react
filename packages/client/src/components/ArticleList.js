import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
	articles: state.articles
});

export const ArticleList = props => (
	<ul>
		{
			props.articles.map(article => (
				<li key={ article.id }>
					<table border="1">
						<tbody>
							<tr>
								<td>ID</td>
								<td>{ article.id }</td>
							</tr>
							<tr>
								<td>Title</td>
								<td>{ article.title }</td>
							</tr>
						</tbody>
					</table>
				</li>
			))
		}
	</ul>
);

export default connect(mapStateToProps)(ArticleList);