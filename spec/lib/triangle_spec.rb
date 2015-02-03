require "spec_helper"
require "triangle"

describe Triangle do
  it "put its sides into an array" do 
    expect(Triangle.new(3, 3, 3).sides).to be == [3, 3, 3]
  end
  
  it "is not a triangle" do
    expect { Triangle.new(1, 2, 3) }.to raise_error(Triangle::TriangleError)
    expect { Triangle.new(0, 0, 3) }.to raise_error(Triangle::TriangleError)
  end
  
  it "is an equilateral triangle" do
    expect(Triangle.new(3, 3, 3).equilateral).to be == :equilateral
  end
  
  it "is an isosceles triangle" do
    expect(Triangle.new(3, 4, 4).isosceles).to be == :isosceles
  end
  
  it "is an scalene triangle" do
    expect(Triangle.new(3, 4, 5).scalene).to be == :scalene
  end
  
end

