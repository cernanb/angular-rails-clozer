class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.string :body
      t.integer :opportunity_id

      t.timestamps null: false
    end
  end
end
