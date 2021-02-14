class AddGroupstoBlocks < ActiveRecord::Migration[6.0]
  def change
    add_column :blocks, :group_id, :bigint, reference: true
  end
end
