class CreateGroupInvites < ActiveRecord::Migration[6.0]
  def change
    create_table :group_invites do |t|
      t.belongs_to :user
      t.string :status
      t.string :group_id
      t.string :invited_by

      t.timestamps
    end
  end
end
