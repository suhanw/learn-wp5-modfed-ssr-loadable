import React from 'react';
import ReactDOM from 'react-dom';
import { loadableReady } from '@loadable/component'
import App from './components/App';

// window.addEventListener('DOMContentLoaded', () => { // no need to listen to DOMContentLoaded, cos this executes on next tick
	// ReactDOM.hydrate(
	// 	<App />,
	// 	document.getElementById('ssr-app')
	// ); 
// }); 

loadableReady(() => {
	ReactDOM.hydrate(
		<App />,
		document.getElementById('ssr-app')
	); 
})