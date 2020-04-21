class UserComponentsController < ApplicationController
  skip_before_action :require_login, only: [:index]

  def index
    @userComponents = UserComponent.all
    render json: @userComponents
  end

end
