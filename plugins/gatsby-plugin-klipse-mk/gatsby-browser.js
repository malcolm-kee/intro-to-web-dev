/* global klipse */

exports.onRouteUpdate = function({ location }) {
  if (
    typeof klipse !== `undefined` &&
    window.klipse.plugin &&
    typeof window.klipse.plugin.init === `function`
  ) {
    setTimeout(
      () => window.klipse.plugin.init(klipse.run.plugin.plugin.settings()),
      0
    );
  }
};
