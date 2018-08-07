class Person
  def initialize(name)
    @name = name
  end
  def show_name
    puts @name
  end

  def say_hi
    puts hi
  end
end

person1 = Person.new("andrew")
person2 = Person.new("Long")
person1.show_name
person2.show_name
