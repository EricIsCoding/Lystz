class AddVendorsToBlocks < ActiveRecord::Migration[6.0]
  def change
    add_reference :blocks, :vendor, foreign_key: true
  end
end
