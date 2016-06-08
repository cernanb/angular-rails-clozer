class Api::NotesController < ApplicationController
  skip_before_filter :verify_authenticity_token
  respond_to :json

  def show
    respond_with(Note.find(params[:id]))
  end

  def create
    @note = Note.new(note_params)
    if @note.save
      respond_to do |f|
        f.json {render json: @note}
      end
    end
  end

  def destroy
    
  end
end
