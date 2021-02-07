# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

vendor_names = ["Target", "Trader Joes", "Costco", "Albertsons", "Ralphs", "Costco"]


# Create Users
user = [User.create(first_name: "Bob", last_name: "Test", email: "bob@fake.com", password: "pass1234", password_confirmation: "pass1234"), User.create(first_name: "Sarah", last_name: "Test", email: "sarah@fake.com", password: "pass1234", password_confirmation: "pass1234")]

# Create Vendors and Assign to Users
vendor_names.count.times.with_index do |i|
    #Give each User 3 Vendors
    if (1..3).include?(i)
        user = User.first
    else
        user = User.last
    end

    Vendor.create(
        name: "#{vendor_names[i]}",
        website: "#{vendor_names[i]}.com",
        user: user
    )
end

# Create Blocks and assign to Vendors
20.times.with_index do |i|
    vendor = Vendor.all.sample(1).first
    Block.create(
        name: "Block #{i}",
        creator: vendor.user.name,
        vendor: vendor
    )
end

#Create Items and assign to Blocks
50.times do 
    block = Block.all.sample(1).first

    Item.create(
        name: "#{Faker::Food.dish}",
        brand: "#{Faker::Lorem.word}",
        description: "#{Faker::Lorem.sentence}",
        quantity: rand(1...30),
        active: true,
        block: block,
        vendor: block.vendor
    )
end