module.exports = {
  validate: function(schema, target) {
    return (req, res, next) => {

      const { error, value } = schema.validate(req[target], {abortEarly: false});
  
      if (error) {
        const extractedErrors = []
        error.details.map(err => extractedErrors.push({ [err.context.label]: err.message }))
  
        res.status(422).send({
          label: `Invalid ${target} data`,
          errors: extractedErrors
        });
      } else {
        next();
      }
    }
  },

  body: function(schema) {
    return this.validate(schema, 'body');
  },

  query: function(schema) {
    return this.validate(schema, 'query');
  },

}
