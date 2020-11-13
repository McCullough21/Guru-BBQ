class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.string :content
      t.integer :user_id
      t.string :user_username
      t.string :meatType
      t.timestamps
    end
  end
end
