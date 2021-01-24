class Api::V2::TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :user, :done, 
          :deadline, :shortdescription,
          :islate, :update, :create

  def shortdescription 
    shortdescription = object.description[0..40]  if object.description.present?
  end

  def islate 
    islate = Time.current > object.deadline if object.deadline.present?
  end

  # def deadlinetobr 
  #   deadlinetobr = I18n.l(object.deadline, format: datetime) if object.deadline.present?
  # end

  def update 
    update = object.updated_at
  end

  def create 
    create = object.created_at
  end

  def user 
    user = object.user_id
  end


  belongs_to :user
end
