import { h, Component } from 'preact';
import styled from 'styled-components';
import { Group, Input, Button } from 'rebass';
// import style from './style';
import Page from '../../components/Page';
import linkState from 'linkstate';

export const NumberOne = styled.li`
	display: inline-block;
	margin: 5px;
	border: 1px solid #000;
	padding: 0px 5px;
	width: 40px;
	height: 40px;
	border-radius: 40px;
	text-align: center;
	line-height: 40px;
`;

export const NumberLine = styled(({ className, numbers }) => {
	const lines = numbers.map( number => {
		const display = `${number}`.padStart(2, '0');

		return (<NumberOne>{display}</NumberOne>);
	});
	return (
		<ul className={className}>
			{lines}
		</ul>
	);
})`
	color: #994;
`;


export const VietlottRandom = ({ className, numbers }) => {
	const lines = numbers.map( numbers => <NumberLine numbers={numbers} />);
	
	return (
		<div className={className}>
			{lines}
		</div>
	);
};
class Home extends Component {
	
	state = {
		numbers: 5,
		generated: []
	}
	onClick = e => {
		const numbers = this.state.numbers;
		let generated = [];
		for (let i = 0; i < numbers; i++) {
			generated[i] = [];
			let j = 0;
			while (j < 6) {
				let newNumber = parseInt(Math.random() * 44, 10) + 1;
				if (generated[i].indexOf(newNumber) === -1) {
					generated[i][j] = newNumber;
					j++;
				}
			}
		}
		
		this.setState({ generated });
	}
	render({ className, children, ...props }, { generated }) {
		return (
			<Page className={className}>
				<Group>
					<Input w={2/3} onInput={linkState(this, 'numbers')} />
					<Button children="Random!" w={1/3} onClick={this.onClick} />
				</Group>
				<VietlottRandom numbers={generated} />
			</Page>
		);
	}
}
export default styled(Home)`
	& Input {
		height: 32px;
	}
`;