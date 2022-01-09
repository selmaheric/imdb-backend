const schema = {
  type: { type: 'string', enum: ['movie', 'tv_show'] },
  limit: {
    type: 'number', convert: true, optional: true, integer: true, positive: true, default: 10,
  },
  offset: {
    type: 'number', convert: true, optional: true, integer: true, positive: true, default: 0,
  },
  search: { type: 'string', optional: true },
  searchByPhrase: {
    type: 'boolean', convert: true, optional: true, default: false,
  },
};

module.exports = schema;
