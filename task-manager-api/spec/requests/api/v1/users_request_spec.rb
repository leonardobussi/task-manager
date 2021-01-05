require 'rails_helper'


RSpec.describe "Api::V1::Users", type: :request do
  let!(:user) {create(:user)}
  let(:user_id) { user.id }

  before { host! "localhost:3000/api/v1" }

  # describe "get /users/:id" do 
  #   before do 
  #     headers = { "Accept" => "application/vnd.taskmanager.v1" }
  #     get "/users/#{user_id}", params: {}, headers: headers
  #   end

  #   context "when the user exists" do 
  #     it "returns the user" do 
  #       user_response = JSON.parse(response.body)
  #       expect(user_response["id"]).to eq(user_id)
  #     end
      
  #     it "returns status code 200" do 
  #       expect(user_response).to have_http_status(200)
  #     end
  #   end

  #   context "when the user does not exists" do 
  #     let!(:user_id) {1000}
  #     it "returns status code 404" do 
  #       expect(user_response).to have_http_status(404)
  #     end
  #   end

  # end

  describe "post for /users"  do 
    before do 
      headers = { 'accept'  => 'application/vnd.taskmanager.v1'}
      post "/users", params: { user: user_params }, headers: headers
    end

    context "when the request params are valid" do 
      let!(:user_params) { attributes_for(:user) }

      it 'return status code 201' do 
        expect(response).to have_http_status(201)
      end
      it 'retorn json data the of user created' do 
        user_response = JSON.parse(response.body)
        expect(user_response["email"]).to eq(user_params[:email])
      end

    end
    context "when the request params are is not valid" do 
      let(:user_params) { attributes_for(:user, email: 'invalid_email@') }

      it 'return status code 422' do 
        expect(response).to have_http_status(200)
      end

      it 'retorn json data for the errors' do 
        user_response = JSON.parse(response.body)
        expect(user_response).to have_key('errors')
      end

    end

  end

end
