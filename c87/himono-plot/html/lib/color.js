// Generated by CoffeeScript 1.8.0
(function() {
  var random_color;

  random_color = function() {
    var list;
    list = ['#702020', 'black', '#007070', 'blue', 'green'];
    return list[list.length * Math.random() | 0];
  };

  window.random_color = random_color;

}).call(this);
