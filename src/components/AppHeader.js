import { h } from 'preact';
import styled from 'styled-components';
import { Link } from 'preact-router/match';

const HeaderLink = styled(Link)`
	color: red;
`;
const HeaderNavigation = styled.nav`
color: blue;
`;
const HeaderTitle = styled.h1`
color: green;
`;
const Header = styled.header`
color: gray;
`;
// const HeaderLink = styled(Link)`
// 	display: inline-block;
// 	height: 56px;
// 	line-height: 56px;
// 	padding: 0 15px;
// 	min-width: 50px;
// 	text-align: center;
// 	background: rgba(255,255,255,0);
// 	text-decoration: none;
// 	color: #FFF;
// 	will-change: background-color;

// 	&:hover, &:active {
// 		background: rgba(0,0,0,0.2);
// 	}
// 	.active {
// 		background: rgba(0,0,0,0.4);
// 	}
// `;


// const HeaderNavigation = styled.nav`
// 	float: right;
// 	font-size: 100%;
// `;

// const HeaderTitle = styled.h1`
// 	float: left;
// 	margin: 0;
// 	padding: 0 15px;
// 	font-size: 24px;
// 	line-height: 56px;
// 	font-weight: 400;
// 	color: #FFF;
// `;

// const Header = styled.header`
// 	position: fixed;
// 	left: 0;
// 	top: 0;
// 	width: 100%;
// 	height: 56px;
// 	padding: 0;
// 	background: ${props => props.theme.bgHeader};
// 	box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
// 	z-index: 50;
// `;
const AppHeader = () => (
	<Header>
		<HeaderTitle>Random Number</HeaderTitle>
		<HeaderNavigation>
			<HeaderLink href="/">Home</HeaderLink>
			{/* <Link href="/profile"></Link>
			<Link href="/profile/john">John</Link> */}
		</HeaderNavigation>
	</Header>
);

export { Header, HeaderTitle, HeaderNavigation, HeaderLink };

export default styled(AppHeader)``;