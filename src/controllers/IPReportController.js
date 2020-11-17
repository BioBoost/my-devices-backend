const { IPReport } = require("../models");
const IPReports = require('../repositories/IPReports');
const Responder = require('../helpers/responder.js');
const Devices = require("../repositories/Devices");

module.exports = {

  async orphaned(req, res) {
    try {
      const ipreports = await IPReports.findOrphaned();
      res.send(ipreports);
    } catch (error) {
      console.log(error);
      Responder.internal(res, 'An error occurred while retrieving list of IP Reports.');
    }
  },

  async create(req, res) {
    try {
      const device = await Devices.findByMAC(req.body.mac);
      
      let report = { 
        ip: req.body.ip,
        mac: req.body.mac,
        DeviceId: null
      };

      if (device) {
        report.DeviceId = device.id;
      }

      let ipReport = await IPReport.create(report);

      res.status(201).send(ipReport);
    } catch (error) {
      console.log(error);
      Responder.internal(res, 'An unknown error has occurred while creating the IP Report.');
    }
  },


};
