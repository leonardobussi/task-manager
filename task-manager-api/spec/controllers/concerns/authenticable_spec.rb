require 'rails_helper'

Rspec.describe Authenticable do 
  controller(ApplicationController) do 
    include Authenticable
  end

  let(:app_controller) { subject }
  
  describe '#current_user' do
    let(:user) {create(:user)}

    before do
      
    end

    it 'retorna o usuario pelo token enviado no header' do
      expect(app_controller.current_user).to eq(user)
    end

  end

end

def current_user
  User.find_by(auth_token: request.headers['Authorization'])
end