class CreateSharedBlocks < ActiveRecord::Migration[6.0]
  def change
    create_table :shared_blocks do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :block, null: false, foreign_key: true
    end
  end
end
