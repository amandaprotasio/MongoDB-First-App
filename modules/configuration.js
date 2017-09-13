/*************************
*	Configuracoes gerais
**************************/

const express = require('express')
const handlebars = require('express-handlebars')

let _app

const setConfiguration = (app) => {

	// Captura app express para reutilizar nas funcoes _auxiliares
	_app = app

	_setRouting()
	_setHandlebars()

	return app
}

const _setRouting = () => {
	// Configuracao das rotas case sensitive

	_app.enable('case sensitive routing')

}

/**
* Configuracao do Template Engine Handlebars
*/
const _setHandlebars = () => {
	_app.engine('handlebars', handlebars({
		defaultLayout: 'main',
	}))
	_app.set('view engine', 'handlebars')
}

module.exports = setConfiguration
