module.exports = function clientToEmpty(src) {
  return src.replace(/require\((?:'|")[^'"]*\/client\/[^'"]*(?:'|").*/g, '{};');
};
