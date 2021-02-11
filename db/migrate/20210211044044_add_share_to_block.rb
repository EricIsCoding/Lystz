class AddShareToBlock < ActiveRecord::Migration[6.0]
  def change
    add_column :blocks, :share, :boolean
  end
end