const { Device } = require("../models");
const Devices = require('../repositories/Devices');
const Responder = require('../helpers/responder.js');

module.exports = {

  async index(req, res) {
    try {
      const devices = await Devices.findAll();
      res.send(devices);
    } catch (error) {
      console.log(error);
      Responder.internal(res, 'An error occurred while retrieving list of devices.');
    }
  },

  async show(req, res) {
    try {
      const device = await Devices.findById(req.params.id);

      if (!device) Responder.resource_not_found(res, 'device');
      else res.send(device);

    } catch (error) {
      console.log(error);
      Responder.internal(res, 'An error occurred while retrieving device info.');
    }
  },

};
