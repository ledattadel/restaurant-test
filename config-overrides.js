module.exports = function override(config, env) {
  // do stuff with the webpack config...
  return config;
};

const { override, useBabelRc } = require("customize-cra");
const path = require("path");

module.exports = override(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc()
);
