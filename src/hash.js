const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      console.log(parts)
    }
    return initial;
  }, {});
window.location.hash = "";

export default hash;