const schema = {
  rating: {
    type: 'number', integer: true, positive: true, min: 1, max: 5,
  },
};

module.exports = schema;
