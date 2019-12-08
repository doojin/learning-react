import React from 'react';

class Loading extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			dotsCount: 0
		};

		const maxDotsCount = this.props.maxDots || 3;
		const dotsIncreaseInterval = 150;

		setInterval(() => {
			const dotsCount = this.state.dotsCount + 1;

			this.setState(Object.assign({}, this.state, {
				dotsCount: dotsCount > maxDotsCount ? 0 : dotsCount
			}));
		}, dotsIncreaseInterval);
	}

	render() {
		return (
			<div>
				{ this.props.message }
				{ '.'.repeat(this.state.dotsCount) }
			</div>
		);
	}
}

export default Loading;
