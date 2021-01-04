require 'rails_helper'

RSpec.describe User, type: :model do
  #pending "add some examples to (or delete) #{__FILE__}"
  # before { @user = FactoryGirl.build(:user) }

  # it { expect(@user).to respond_to(:email)  }

  # subject { build(:user) } 
  # it { expect(subject).to respond_to(:email)  }
  # it { expect(subject).to be_valid  }


  it { is_expected.to respond_to(:email)  }
end
