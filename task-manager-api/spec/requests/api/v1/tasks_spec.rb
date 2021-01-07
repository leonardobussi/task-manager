require 'rails_helper'

RSpec.describe "Task Api", type: :request do 
  before { host! "localhost:3000/api/v1" }

  let!(:user) { create(:user) }
  let(:headers) do 
    {
      "Accept" => "application/vnd.taskmanager.v1",
      "Content-Type" => Mime[:json].to_s,
      "Authorization" => user.auth_token
    }
  end


  describe "Get /tasks/" do 
    before do 
      create_list(:task, 5, user_id: user.id)
      get "/tasks", params: {}, headers: headers
    end

    it 'status code 200' do
      expect(response).to have_http_status(200)
    end

    it 'retornar 5 tasks' do
      expect(json_body["tasks"].count).to eq(5)
    end
  end

end