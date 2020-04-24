class LibraryComponentsController < ApplicationController
  skip_before_action :require_login, only: [:index, :show]

  def index
    @libraryComponents = LibraryComponent.all
    render json: @libraryComponents
  end

  def show
    @libraryComponent = LibraryComponent.find(params[:id])
    render json: @libraryComponent
  end

  def create
    @libraryComponent = LibraryComponent.create(component_params)
    render json: @libraryComponent
  end

  def destroy
    @libraryComponent = LibraryComponent.find(params[:id])
    @libraryComponent.destroy
    render json: @libraryComponent
  end

  private

  def component_params
    params.permit(:name, :html_code, :css_code, :js_code, :img_src, :user_id);
  end

end
