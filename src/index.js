/**
 * @param {object|array} current
 * @param {function} updater
 */
function update(current, updater) {
  if (
    Object.prototype.toString.call(current) === "[object Object]" ||
    Array.isArray(current)
  ) {
    var draft = JSON.parse(JSON.stringify(current));
    updater(draft);
    return draft;
  }
}

if (module) {
  module.exports = update;
}
