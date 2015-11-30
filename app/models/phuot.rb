class Phuot < ActiveRecord::Base
  belongs_to :user
  has_many :posts
  has_many :tasks
  has_many :agendars
end
