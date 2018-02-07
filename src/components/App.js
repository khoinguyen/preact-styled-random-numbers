import { h, Component } from 'preact';
import { Router } from 'preact-router';

// import AppHeader from './AppHeader';
import { HeaderNavigation, Header, HeaderLink, HeaderTitle } from './AppHeader';
import Home from '../routes/Home';
import Profile from '../routes/profile';
import { Provider } from 'rebass';
import theme  from './theme';

// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

if (module.hot) {
	require('preact/debug');
}
export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<Provider theme={theme}>
				<div id="app">
					<Header>
						<HeaderTitle>Vietlott Assistant</HeaderTitle>
						<HeaderNavigation>
							<HeaderLink href="/">Home</HeaderLink>
							{/* <Link href="/profile"></Link>
			<Link href="/profile/john">John</Link> */}
						</HeaderNavigation>
					</Header>
					<Router onChange={this.handleRoute}>
						<Home path="/" />
						<Profile path="/profile/" user="me" />
						<Profile path="/profile/:user" />
					</Router>
				</div>
			</Provider>
		);
	}
}