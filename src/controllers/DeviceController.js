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

  async create(req, res) {
    try {
      let deviceDetails = req.body;
      deviceDetails.DeviceInterfaces = deviceDetails.interfaces;
      const device = await Devices.create(req.body);
      res.status(201).send(device);
    } catch (error) {
      console.log(error);
      if (error.name === "SequelizeUniqueConstraintError") {
        Responder.conflict(res, "The interface mac has already been used");
      } else {
        Responder.internal(res, 'An unknown error has occurred while creating the device.');
      }
    }
  },

  async claim(req, res) {
    try {
      let device = await Devices.findById(req.params.id);

      if (!device) Responder.resource_not_found(res, 'device');
      else if (device.User) Responder.conflict(res, 'Device has already been claimed');
      else {

        await device.update({
          UserId: req.user.id
        })

        device = await Devices.findById(req.params.id);
        Responder.ok(res, device);
      }
    } catch (error) {
      console.log(error);
      Responder.internal(res, 'An unknown error has occurred while updating the device.');
    }
  },

  async release(req, res) {
    try {
      let device = await Devices.findById(req.params.id);

      if (!device) Responder.resource_not_found(res, 'device');
      else if (!device.User) Responder.conflict(res, 'Device has no owner');
      else if (device.User.id !== req.user.id) Responder.conflict(res, 'You do not own this device');
      else {

        await device.update({
          UserId: null
        })

        device = await Devices.findById(req.params.id);
        Responder.ok(res, device);
      }
    } catch (error) {
      console.log(error);
      Responder.internal(res, 'An unknown error has occurred while updating the device.');
    }
  },

};
