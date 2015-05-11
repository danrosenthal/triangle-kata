class Equilateral {
  constructor(sides) {
    this.sides = sides;
  }
  is() {
    return this.sides[0] == this.sides[1] && this.sides[0] == this.sides[2];
  }
  define() {
    return "equilateral";
  }
}

class Isosceles {
  constructor(sides) {
    this.sides = sides;
  }
  is() {
    return (this.sides[0] == this.sides[1] && this.sides[0] != this.sides[2]) || (this.sides[0] == this.sides[2] && this.sides[0] != this.sides[1]) || (this.sides[1] == this.sides[2] && this.sides[1] != this.sides[0]);
  }
  define() {
    return "isosceles";
  }
}

class Scalene {
  constructor(sides) {
    this.sides = sides;
  }
  is() {
    return this.sides[0] != this.sides[1] && this.sides[1] != this.sides[2];
  }
  define() {
    return "scalene";
  }
}

class TriangleChecker {
  constructor(sides) {
    this.sides = sides;
  }
  run() {
    var equilateral = new Equilateral(sides);
    var isosceles = new Isosceles(sides);
    var scalene = new Scalene(sides);
    var definitions = [equilateral, isosceles, scalene];

    for (var i = 0; i < definitions.length; i++) {
      if (definitions[i].is() == true) {
        return definitions[i].define();
        break;
      }
    };
  };
}