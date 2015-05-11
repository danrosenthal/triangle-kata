require 'spec_helper'
require 'triangle'

describe Triangle do
  context "when checking a new triangle" do
    Triangle.new(3,3,3)
    
    it "returns equilateral" do
      expect(subject).to eq(:equilateral)
    end
  end
end

