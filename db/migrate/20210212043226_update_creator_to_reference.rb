class UpdateCreatorToReference < ActiveRecord::Migration[6.0]
  def change
    remove_column :blocks, :creator, :string
    add_column :blocks, :user_id, :bigint, reference: true
  end
end
