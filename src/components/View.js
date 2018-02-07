import { h } from 'preact';
// import styled from 'styled-components';

const View = ({ className, children, ...props }) => (
	<div className={className}>
		{children}
	</div>
);

export default View;
