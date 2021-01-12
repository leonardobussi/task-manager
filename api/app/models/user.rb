class User < ApplicationRecord
 
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable


  validates_uniqueness_of :auth_token
  before_create :generate_authentication_token!

  has_many :tasks, dependent: :destroy

  def info 
    "#{email} - #{created_at} - Token: #{Devise.friendly_token}"
  end

  def generate_authentication_token! 
    # self.auth_token = Devise.friendly_token
    # "#{Devise.friendly_token}"
    begin
    self.auth_token = Devise.friendly_token
    end while User.exists?(auth_token: self.auth_token)
  end
end
