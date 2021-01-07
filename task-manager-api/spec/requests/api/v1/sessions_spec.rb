require 'rails_helper'


RSpec.describe "Sessions API", type: :request do 
  before { host! "localhost:3000/api/v1" }

  let(:user) {create(:user)}
  let(:headers) do 
    {
      "Accept" => "application/vnd.taskmanager.v1",
      "Content-Type" => Mime[:json].to_s
    }
  end

  describe 'POST /sessions' do
    before do 
      post '/sessions', params: { session: credentials }.to_json, headers: headers
    end

    context 'when the credentials are correct' do 
      let(:credentials) { { email: user.email, password: '123456789'} }


      it "returns status 200" do 
        expect(response).to have_http_status(200)
      end

      it 'retorn json with are data at the user with auth token' do
        expect(json_body['auth_token']).to  eq(user.auth_token)
      end

    end




  end

end