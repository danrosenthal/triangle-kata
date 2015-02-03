class Triangle

attr_accessor :sides, :a, :b, :c
  
  def initialize(a, b, c)
    @sides = [a, b, c].sort
    @a = sides[0]
    @b = sides[1]
    @c = sides[2]
    raise TriangleError, "That's not a triangle, dude." if invalid?
  end
  
  def equilateral
    :equilateral if a==b && a==c
  end
  
  def isosceles
    :isosceles if (a==b && a!=c) || (a==c && a!=b) || (b==c && b!=a)
  end
  
  def scalene
    :scalene if a!=b && b!=c
  end
  
  def invalid?
    a <= 0 || a + b <= c
  end

  class TriangleError < StandardError
  end
end



