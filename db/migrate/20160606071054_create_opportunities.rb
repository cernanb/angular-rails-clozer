class CreateOpportunities < ActiveRecord::Migration
  def change
    create_table :opportunities do |t|
      t.string :product
      t.integer :amount
      t.string :client_name
      t.boolean :won, default: false

      t.timestamps null: false
    end
  end
end
