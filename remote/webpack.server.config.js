'use strict';

const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const { ModuleFederationPlugin } = webpack.container;
const sharedConfig = require('./webpack.shared.config.js');

let config = {
	target: 'node',

	node: {
		__filename: true,
		__dirname: true,
	},

	entry: './server/index.js',

	output: {
		path: path.join(__dirname, './build/server'),
		filename: 'bundle.js',
	},

	externals: [webpackNodeExternals()],

	plugins: [
		new ModuleFederationPlugin({
			name: 'remote',
			library: { type: 'commonjs-module' },
			filename: 'container.js',
			exposes: {
				'./top-nav': './client/components/top-nav/index.js',
			}, 
			// shared: require("./package.json").dependencies,
		}),
	],

	module: {
		rules: [
			{
				test: /\.less$/,
				use: [
					{
						loader: 'css-loader',
						options: {
							modules: {
								exportOnlyLocals: true,
								exportLocalsConvention: 'camelCase',
								localIdentName: '[local]_[hash:base64:5]'
							},
						}
					},
				]
			},
		],
	},
};

module.exports = merge(sharedConfig, config);
