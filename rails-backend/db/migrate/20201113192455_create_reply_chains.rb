class CreateReplyChains < ActiveRecord::Migration[6.0]
  def change
    create_table :reply_chains do |t|
      t.string :content
      t.integer :user_id
      t.string :user_username
      t.integer :comment_id
      t.timestamps
    end
  end
end
