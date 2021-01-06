require 'rails_helper'

RSpec.describe User, type: :model do
  let!(:user) {build(:user)}
  
  it { is_expected.to validate_presence_of(:email)   }
  it { is_expected.to validate_uniqueness_of(:email).case_insensitive   }
  it { is_expected.to validate_confirmation_of(:password)   }
  it { is_expected.to allow_value("leonardo@bussi.com").for(:email)   }
  it { is_expected.to validate_uniqueness_of(:auth_token)   }

  describe "#info" do 
    it "retornar o email, created_at e o token" do 
      user.save!
      allow(Devise).to receive(:friendly_token).and_return('wNDqryugpFxsmNZShBiF')
      expect(user.info).to eq("#{user.email} - #{user.created_at} - Token: #{Devise.friendly_token}")
    end
  end

end
