class AddMeatTypeToComments < ActiveRecord::Migration[6.0]
  def change
    add_column :comments, :meatType, :string
  end
end
