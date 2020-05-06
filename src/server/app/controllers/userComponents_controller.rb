class UserComponentsController < ApplicationController
  # skip_before_action :require_login, only: [:index]

  def index
    @userComponents = UserComponent.all
    render json: @userComponents
  end

  def show
    @userComponent = UserComponent.find(params[:id])
    render json: @userComponent
  end

  def create
    @userComponent = UserComponent.create(component_params)
    render json: @userComponent
  end

  def destroy
    @userComponent = UserComponent.find(params[:id])
    @userComponent.destroy
    render json: @userComponent
  end

  private

  def component_params
    params.permit(:name, :html_code, :css_code, :js_code, :img_src, :user_id);
  end

end
