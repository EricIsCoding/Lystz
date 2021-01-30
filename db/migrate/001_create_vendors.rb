class CreateVendors < ActiveRecord::Migration[6.0]
  def change
    create_table :vendors do |t|
      t.string :name
      t.string :website
      t.belongs_to :user

      t.timestamps
    end
  end
end
