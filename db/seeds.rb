# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


20.times do
  Opportunity.create(client_name: Faker::Name.name, product: Faker::Commerce.product_name, amount: Faker::Commerce.price.to_i * 10)
end
