// Generated by CoffeeScript 1.8.0
(function() {
  var main;

  main = function(game) {
    var idx, page;
    page = function(idx) {
      var I, t;
      I = texts.length;
      idx = Math.max(idx, 0);
      idx = Math.min(idx, I - 1);
      t = texts[idx];
      if (t.image != null) {
        if (typeof console !== "undefined" && console !== null ? console.log : void 0) {
          console.log(t.image);
        }
        game.ctx.drawImage(t.image, 0, 0, W, H);
        return game.box.style.display = 'none';
      } else {
        if (t === '') {
          t = '...';
        }
        game.box.innerHTML = t;
        game.box.style.color = random_color();
        return game.box.style.display = 'block';
      }
    };
    game.ctx.clearRect(0, 0, W, H);
    page(0);
    idx = 0;
    return game._element.addEventListener('click', function(e) {
      ++idx;
      return page(idx);
    });
  };

  window.main = main;

}).call(this);
