# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

stores = ["Target", "Trader Joes", "Costco"]

user = User.find(1)

3.times.with_index do |i|
    Vendor.create(
        name: "#{stores[i]}",
        website: "#{stores[i]}.com",
        user_id: user.id
    )
end

vendors = Vendor.all

users = ["eric", "kate"]

9.times.with_index do |i|
    Block.create(
        name: "Block #{i}",
        creator: users.sample(1).first,
        vendor: vendors.sample(1).first
    )
end

blocks = Block.all

50.times.with_index do |i|
    block = blocks.sample(1).first
    Item.create(
        name: "#{Faker::Food.dish}",
        brand: "#{Faker::Lorem.word}",
        description: "#{Faker::Lorem.sentence}",
        quantity: rand(1...30),
        active: [true, false].sample(1),
        block: block,
        vendor: block.vendor
    )
end