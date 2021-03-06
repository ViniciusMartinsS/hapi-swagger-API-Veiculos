'use strict'

const {
  selectVehicleData,
  createVehicleData,
  updateVehicleData,
  removeVehicleData
 } = require('../model/vehicles')

module.exports.show = async request =>
  selectVehicleData(request)

module.exports.create = async request =>
  createVehicleData(request)

module.exports.update = async request =>
  updateVehicleData(request)

module.exports.remove = async request =>
  removeVehicleData(request)
