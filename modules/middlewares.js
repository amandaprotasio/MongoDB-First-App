/*************************
*	Middlewares
**************************/

const express = require('express')
const bodyParser = require('body-parser')

let _app

const defineMiddlewares = (app) => {

	// Captura app express para reutilizar nas funcoes _auxiliares
	_app = app

	_setAssets()
	_setBodyParser()

	return app
}

const _setAssets = () => {
	_app.use(express.static('public'))
}

const _setBodyParser = () => {
  _app.use(bodyParser.urlencoded());
  _app.use(bodyParser.json());

}

module.exports = defineMiddlewares
