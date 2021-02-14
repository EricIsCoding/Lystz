class AddGroupInviteToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :group_invite, :string, :default => "none"
  end
end
