/*
 * File Created: Saturday, 8th June 2019 23:16:13
 * Author: Dieter Martens (dieter.martens@adser.be)
 * -----
 * Last Modified: Saturday, 8th June 2019 23:28:19
 * Modified By: Dieter Martens <dieter.martens@adser.be>
 * -----
 * Copyright 2019 Dieter Martens, Adser BVBA
 */

const withPlugins = require('next-compose-plugins')
const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css')
const withReactSvg = require('next-react-svg')
const path = require('path')

const reactSvgConfig = { include: path.join(__dirname, 'static') }

module.exports = withPlugins([
	[withTypescript],
	[withSass],
	[withCss],
	[withReactSvg, reactSvgConfig],
])
