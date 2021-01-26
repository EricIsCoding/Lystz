class AddColumnsToItems < ActiveRecord::Migration[6.0]
  def change
    add_column :items, :brand, :string
    add_column :items, :description, :string
    add_column :items, :quantity, :integer
    add_column :items, :active, :boolean
  end
end
