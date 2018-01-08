module.exports = function mixin (app) {
  app.loopback.modelBuilder.mixins.define('ShortId', require('./short-id'));
};