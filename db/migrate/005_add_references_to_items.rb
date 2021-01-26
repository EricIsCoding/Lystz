class AddReferencesToItems < ActiveRecord::Migration[6.0]
  def change
    add_reference :items, :block, foreign_key: true
    add_reference :items, :vendor, foreign_key: true
  end
end
