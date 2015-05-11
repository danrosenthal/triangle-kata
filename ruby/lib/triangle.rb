class Triangle
  def initialize(a,b,c)
    check(a,b,c)
  end
  
  def check(a,b,c)
    equilateral = Equilateral.new
    isosceles = Isosceles.new
    scalene = Scalene.new
    non = NotATriangle.new
    
    [non, equilateral, isosceles, scalene].each do |check|
      return check.define() if check.is?(a,b,c)
    end
  end
  
end

class Equilateral
  def is?(a,b,c)
    a==b && a==c
  end
  def define
    :equilateral
  end
end

class Isosceles
  def is?(a,b,c)
    (a==b && a!=c) || (a==c && a!=b) || (b==c && b!=a)
  end
  def define
    :isosceles
  end
end

class Scalene
  def is?(a,b,c)
    a!=b && b!=c
  end
  def define
    :scalene
  end
end

class NotATriangle
  def is?(a,b,c)
    a <= 0 || a + b <= c
  end
  def define
    raise TriangleError, "That's not a triangle, dude."
  end
end

class TriangleError < StandardError
end