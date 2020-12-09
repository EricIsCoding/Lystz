class CreateCollaborations < ActiveRecord::Migration[6.0]
  def change
    create_table :collaborations do |t|
      t.string :collaborator
      t.string :piece
      t.string :format
      t.json :information, default: {}

      t.timestamps
    end
  end
end
