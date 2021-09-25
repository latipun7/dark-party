'use strict';

require('eslint-config-ruppy-node/patch');

module.exports = {
  extends: ['ruppy-node/common'],
  rules: { 'import/no-extraneous-dependencies': 'off' },
};
