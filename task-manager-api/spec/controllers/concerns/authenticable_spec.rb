require 'rails_helper'

RSpec.describe Authenticable do 
  controller(ApplicationController) do 
    include Authenticable
  end

  let(:app_controller) { subject }
  
  describe '#current_user' do
    let(:user) {create(:user)}

    before do
      req = double(:headers => { 'Authorization' => user.auth_token})
      allow(app_controller).to receive(:request).and_return(req)
    end

    it 'retorna o usuario pelo token enviado no header' do
      expect(app_controller.current_user).to eq(user)
    end

  end

  describe '#authenticate_with_token!' do
    controller do 
      before_action :authenticate_with_token!

      def restricted_action; end

    end


    before do 
      allow(app_controller).to receive(:current_user).and_return(nil) 
      routes.draw { get 'restricted_action' => 'anonymous#restricted_action'}
      get :restricted_action
    end

    context 'quando não estiver nenhum usuario logado no sistema' do 


      it 'retorna o status code 401' do
        expect(response).to have_http_status(401)
      end

      it 'retorna o dados em json para os erros' do 
        expect(json_body).to have_key('errors')
      end

    end

  end

  describe '#user_logged_in?' do 

  context 'qual é o usuario logado' do
    before do 
      user = create(:user)
      allow(app_controller).to receive(:current_user).and_return(user)
    end

    it { expect(app_controller.user_logged_in?).to be true }

  end

  context 'quando não ouver usuario logado' do end
    before do 

      allow(app_controller).to receive(:current_user).and_return(nil)
    end
    it { expect(app_controller.user_logged_in?).to be false }  
  end

end