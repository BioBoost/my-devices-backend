module.exports = {

  ok: (res, result) => {
    res.status(200).send(result);
  },

  created: (res, result) => {
    res.status(201).send(result);
  },

  resource_not_found: (res, resource) => {
    res.status(404).send({
      error: `Requested ${resource} could not be found.`
    })
  },

  conflict: (res, message) => {
    res.status(409).send({
      error: `${message}`
    })
  },

  unknown: (res, message) => {
    res.status(400).send({
      error: `${message}`
    })
  },

  internal: (res, message) => {
    res.status(500).send({
      error: `${message}`
    })
  },

  unauthorized: (res) => {
    res.status(401).send({
      error: `You are not authorized to access this resource.`
    })
  },

  unprocessable: (res, resource) => {
    res.status(422).send({
      error: `The supplied resource ${resource} is invalid and could not be processed.`
    })
  },
}