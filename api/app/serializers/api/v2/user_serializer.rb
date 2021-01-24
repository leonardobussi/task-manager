class Api::V2::UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :created_at, :updated_at, :token
end

def token 
  token = auth_token
end
