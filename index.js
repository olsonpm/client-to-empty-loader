module.exports = function clientToEmpty(src, srcMap) {
  src = src.replace(/require\((?:'|")[^'"]*\/client\/[^'"]*(?:'|").*/g, '{};');

  this.callback(null, src, srcMap);
};
