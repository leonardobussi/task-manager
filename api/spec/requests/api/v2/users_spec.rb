require 'rails_helper'


RSpec.describe "Api::V1::Users", type: :request do
  let!(:user) {create(:user)}
  let(:user_id) { user.id }
  let(:headers) do 
    {
      "Accept" => "application/vnd.taskmanager.v2",
      "Content-Type" => Mime[:json].to_s,
      "Authorization" => user.auth_token
    }
  end

  before { host! "localhost:3000/api/v2" }


  # esse é o get ----------------------------------------------------------------------------------------
  describe "get /users/:id" do 
    before do 
      get "/users/#{user_id}", params: {}, headers: headers
    end

    context "when the user exists" do 
      it "returns the user" do 
        # user_response = JSON.parse(response.body,  symbolize_names: true)

        expect(json_body['data']['id'].to_i).to eq(user_id)
      end
      
      it "returns status code 200" do 
        expect(response).to have_http_status(200)
      end
    end

    context "when the user does not exists" do 
      let!(:user_id) {1000}
      it "returns status code 404" do 
        expect(response).to have_http_status(404)
      end
    end

  end


  # esee é post -----------------------------------------------------------------------------------
  describe "post for /users"  do 
    before do 
      post "/users", params: { user: user_params }.to_json, headers: headers
    end

    context "when the request params are valid" do 
      let!(:user_params) { attributes_for(:user) }

      it 'return status code 201' do 
        expect(response).to have_http_status(201)
      end
      it 'retorn json data the of user created' do 
        # user_response = JSON.parse(response.body,  symbolize_names: true)
        expect(json_body['data']['attributes']['email']).to eq(user_params[:email])
      end

    end
    # context "when the request params are is not valid" do 
    #   let(:user_params) { attributes_for(:user, email: 'limi@') }

    #   it 'return status code 422' do 
    #     expect(response).to have_http_status(422)
    #   end

    #   it 'retorn json data for the errors' do 
    #     #user_response = JSON.parse(response.body,  symbolize_names: true)
    #     expect(json_body).to have_key(:errors)
    #   end

    # end

  end



  # # esse é put ---------------------------------------------------------------------------------------------------
  describe "PUT for /users/:id" do 

    before do 
      put "/users/#{user_id}", params: {user: user_params}.to_json, headers: headers
    end


    context "when the request params are valid" do 

      let(:user_params) { {email: 'leonardo@bussi5.com'} }
      #let(:user_params) { 'leonardo@bussi5.com' }
     
      it "returns status code 200" do 
        expect(response).to have_http_status(200)
      end

      it "returns requests of data in json that if success it the update" do 
        #user_response = JSON.parse(response.body,  symbolize_names: true)
        # puts "----------------------------------------\n#{json_body['data']['attributes']['email']}\n#{user_params[:email]}\n---------------------------------------"

        expect(json_body['data']['attributes']['email']).to eq(user_params[:email])
      end

    end

    # context "when the request params are is not valid" do 

    #   # let(:user_params) { {email: 'leonardo@bussi5.com'} }
    #   # let(:user_params) { 'ussb' }
     
    #   # it "returns status code 422" do 
    #   #   expect(response).to have_http_status(422)
    #   # end

    #   # it 'retorn json data for the errors' do 
    #   #   #user_response = JSON.parse(response.body,  symbolize_names: true)
    #   #   expect(json_body).to have_key(:errors)
    #   # end

    # end

  end

  # # esse é o delete ---------------------------------------------------------------------------------------
  describe "DELETE for /user/:id" do  
    before do 
      delete "/users/#{user_id}", params: {}, headers: headers
    end


 
      it "returns status code 204" do 
        expect(response).to have_http_status(204)
      end

      it "return user be removed from Database" do 
        expect(User.find_by(id: user_id)).to be_nil
      end

  end


end
