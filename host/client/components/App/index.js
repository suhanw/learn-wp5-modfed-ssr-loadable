import React, { useEffect } from 'react';
import loadable from '@loadable/component';
import style from './style';
// import Footer from '../Footer';
const Footer = loadable(() => import('../Footer'));
// import TopNav from 'remote/top-nav';
const TopNav = loadable(() => import('remote/top-nav'), { ssr: false });

const App = () => {
	useEffect(() => {
		console.log('useEffect')
	}, [])
	
	return (
		<div className={style.app}>
			<TopNav />
			Hello World from HOST
			<Footer />
		</div>
	);
}

export default App; 
