describe("Equilateral", function() {
  var equilateral;
  var sides = [2, 2, 2];

  beforeEach(function() {
     equilateral = new Equilateral(sides);
  });

  it("should return true for a triangle with all sides equal", function() {
    
    expect(equilateral.is()).toEqual(true);
  });
});

describe("Isosceles", function() {
  var isosceles;
  var sides = [2, 2, 3];

  beforeEach(function() {
     isosceles = new Isosceles(sides);
  });

  it("should return true for a triangle with two sides equal", function() {
    
    expect(isosceles.is()).toEqual(true);
  });
});

describe("Scalene", function() {
  var scalene;
  var sides = [1, 2, 3];

  beforeEach(function() {
     scalene = new Scalene(sides);
  });

  it("should return true for a triangle with no sides equal", function() {
    
    expect(scalene.is()).toEqual(true);
  });
});

