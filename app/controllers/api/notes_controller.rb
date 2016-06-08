class Api::NotesController < ApplicationController
  skip_before_filter :verify_authenticity_token
  respond_to :json

  def show
    respond_with(Note.find(params[:id]))
  end

  def create
    @opportunity = Opportunity.find(params[:opportunity_id])
    @note = @opportunity.notes.build(note_params)
    if @note.save
      respond_to do |f|
        f.json {render json: @note}
      end
    end
  end

  private
    def note_params
      params.require(:note).permit(:body)
    end

end
