import React from 'react';
import ReactDom from 'react-dom';

import './App.css';

import Tickers from './components/Tickers.js'

export class Container extends React.Component {
	render() {
		return (
			<div className="App">
                    <div className="App-header">
                        <h2>Cryptocurrency Ticker</h2>
                    </div>
                    <Tickers />
                </div>
		);
	}
}

export default Container;	

ReactDom.render(
	<Container />,
	document.getElementById('root'),
);