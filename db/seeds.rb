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

    vendor = Vendor.create(
        name: "#{vendor_names[i]}",
        website: "#{vendor_names[i]}.com",
        user: user
    )

    # Create Blocks and assign to Vendors
    3.times  do
        block = Block.create(
            name: Faker::Commerce.department,
            vendor: vendor,
            share: [false, true].sample(1).first, 
            user_id: vendor.user.id
        )

        #Create Items and assign to Blocks
        5.times do 
            Item.create(
                name: Faker::Commerce.product_name,
                brand: "#{Faker::Lorem.word}",
                description: "#{Faker::Lorem.sentence}",
                quantity: rand(1..30),
                active: true,
                block: block,
                vendor: vendor
            )
        end
    end
end