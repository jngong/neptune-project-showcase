class Api::StudentsController < ApplicationController
  before_action :set_student, only: [:show, :update, :add_project]

  # GET /students
  def index
    @students = Student.all

    render json: @students, include: :projects
  end

  # GET /students/1
  def show
    render json: @student, include: :projects 
  end

  # GET /students/1/projects/1
  def add_project
    @project = Project.find(params[:project_id])
    @student.projects << @project 

    render json: @student, include: :projects
  end


  # PATCH/PUT /students/1
  def update
    if @student.update(student_params)
      render json: @student
    else
      render json: @student.errors, status: :unprocessable_entity
    end
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_student
      @student = Student.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def student_params
      params.require(:student).permit(:full_name, :linkedin_url)
    end
end
