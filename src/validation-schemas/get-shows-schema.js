const schema = {
  type: { type: 'string', enum: ['movie', 'tvshow'] },
  limit: {
    type: 'number', convert: true, optional: true, integer: true, positive: true, default: 10,
  },
  offset: {
    type: 'number', convert: true, optional: true, integer: true, positive: true, default: 0,
  },
  search: { type: 'string', optional: true },
};

module.exports = schema;
