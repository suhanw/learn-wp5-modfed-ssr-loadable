import React, { useEffect } from 'react';
import loadable from '@loadable/component';
import style from './style';
import TopNav from 'remote/top-nav';
// const TopNav = loadable(() => import('remote/top-nav'), { ssr: true });

const App = () => {
	useEffect(() => {
		console.log('useEffect')
	}, [])
	
	return (
		<div className={style.app}>
			<TopNav />
			Hello World
		</div>
	);
}

export default App; 
