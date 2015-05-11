var Equilateral = (function() {
  "use strict";
  function Equilateral(sides) {
    this.sides = sides;
  }
  return ($traceurRuntime.createClass)(Equilateral, {
    is: function() {
      return this.sides[0] == this.sides[1] && this.sides[0] == this.sides[2];
    },
    define: function() {
      return "equilateral";
    }
  }, {});
}());
var Isosceles = (function() {
  "use strict";
  function Isosceles(sides) {
    this.sides = sides;
  }
  return ($traceurRuntime.createClass)(Isosceles, {
    is: function() {
      return (this.sides[0] == this.sides[1] && this.sides[0] != this.sides[2]) || (this.sides[0] == this.sides[2] && this.sides[0] != this.sides[1]) || (this.sides[1] == this.sides[2] && this.sides[1] != this.sides[0]);
    },
    define: function() {
      return "isosceles";
    }
  }, {});
}());
var Scalene = (function() {
  "use strict";
  function Scalene(sides) {
    this.sides = sides;
  }
  return ($traceurRuntime.createClass)(Scalene, {
    is: function() {
      return this.sides[0] != this.sides[1] && this.sides[1] != this.sides[2];
    },
    define: function() {
      return "scalene";
    }
  }, {});
}());
var TriangleChecker = (function() {
  "use strict";
  function TriangleChecker(sides) {
    this.sides = sides;
  }
  return ($traceurRuntime.createClass)(TriangleChecker, {run: function() {
      var equilateral = new Equilateral(sides);
      var isosceles = new Isosceles(sides);
      var scalene = new Scalene(sides);
      var definitions = [equilateral, isosceles, scalene];
      for (var i = 0; i < definitions.length; i++) {
        if (definitions[i].is() == true) {
          return definitions[i].define();
          break;
        }
      }
      ;
    }}, {});
}());
