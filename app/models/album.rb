class Album < ActiveRecord::Base
  belongs_to :user
  belongs_to :phuot

  has_many :videos
  has_many :pictures
end
