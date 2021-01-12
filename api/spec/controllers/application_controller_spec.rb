require 'rails_helper'
#RSpec.describe Api::V1::ApplicationController, type: :controller do 

RSpec.describe ApplicationController, type: :controller do 

  describe 'includes concers correct' do
      it { expect(controller.class.ancestors).to include(Authenticable) }
  end

end