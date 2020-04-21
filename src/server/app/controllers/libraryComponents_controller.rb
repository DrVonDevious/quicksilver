class LibraryComponentsController < ApplicationController

  def index
    @libraryComponents = LibraryComponent.all
    render json: @libraryComponents
  end

end
