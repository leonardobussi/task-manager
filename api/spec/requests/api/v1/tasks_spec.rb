require 'rails_helper'

RSpec.describe "Task Api", type: :request do 
  before { host! "localhost:3000/api/v1" }

  let!(:user) { create(:user) }
  let(:headers) do 
    {
      "Accept" => "application/vnd.taskmanager.v1",
      "Content-Type" => Mime[:json].to_s,
      "Authorization" => user.auth_token
    }
  end


  describe "Get /tasks/" do 
    before do 
      create_list(:task, 5, user_id: user.id)
      get "/tasks", params: {}, headers: headers
    end

    it 'status code 200' do
      expect(response).to have_http_status(200)
    end

    it 'retornar 5 tasks' do
      expect(json_body["tasks"].count).to eq(5)
    end
  end

  describe 'GET /tasks/:id' do
      let(:task) { create(:task, user_id: user.id) }

      before { get "/tasks/#{task.id}", params: {}, headers: headers}

      it 'status code 200' do
        expect(response).to have_http_status(200)
      end

      it 'retorna as tasks' do
        expect(json_body["title"]).to eq(task.title)
      end
  end

  describe 'POST /tasks' do 
    before do 
      post "/tasks", params: { task: task_params}.to_json, headers: headers
    end

    context 'quando os parametros são validos' do 

      let(:task_params) { attributes_for(:task) }
      
      it 'retorna status code 201' do
        expect(response).to have_http_status(201)
      end

      it 'se esta salvando as tasks no banco de dados' do
        expect(Task.find_by(title: task_params[:title])).not_to  be_nil
      end

      it 'does retorna o json do usuario criado' do
        expect(json_body['title']).to  eq(task_params[:title])
      end

      it 'associando as task ao usuario atual' do
        expect(json_body['user_id']).to  eq(user.id)
      end

    end

    context 'quano os parametros forem invalidos' do
      let(:task_params) { attributes_for(:task, title: '') }

      it 'retorna status code 402' do
        expect(response).to have_http_status(402)
      end

      it 'verifica se os dados não estão sendo salvo no banco de dados' do
        expect( Task.find_by(title: task_params[:title])).to be_nil
      end

      it 'retorna erro para o titulo' do
        expect(json_body['errors.title']).to eq(nil)
      end

    end

  end

  describe 'PUT /tasks/:id' do 
    let!(:task) { create(:task, user_id: user.id)}

    before do 
      put "/tasks/#{task.id}", params: { task: task_params }.to_json, headers: headers
    end

    context 'quando o params for valido' do

      let(:task_params) { { title: 'titulo novo' } }

      it 'retorna status code 200' do
        expect(response).to have_http_status(200)
      end


      it 'retorna o json com os dados da tarefa atualizado' do
        expect(json_body['title']).to eq(task_params[:title])
      end

      it 'atualizar os dados no banco de dados' do
        expect( Task.find_by(title: task_params[:title])).not_to be_nil
      end


    end

    context 'quando os parametros não for valido' do

      let(:task_params) { { title: ' ' } }

      it 'retorna status code 422' do
        expect(response).to have_http_status(422)
      end


      it 'retorna o json com os dados da tarefa atualizado' do
        expect(json_body['errors.title']).to eq(nil)
      end

      it 'atualizar os dados no banco de dados' do
        expect( Task.find_by(title: task_params[:title])).to be_nil
      end

    end


  end

  describe 'DELETE /tasks/:id' do
    let!(:task) { create(:task, user_id: user.id)}

    before do 
      delete "/tasks/#{task.id}", params: {}, headers: headers
    end

      it 'retorna status code 204' do
        expect(response).to have_http_status(204)
      end


      it 'retorna o json com os dados da tarefa atualizado' do
        expect( Task.find_by(id: task.id) ).to be_nil
      end

      # it 'retorna status code 422' do
      #   expect(response).to have_http_status(422)
      # end


      # it 'retorna o json com os dados da tarefa atualizado' do
      #   expect(json_body['errors.title']).to eq(nil)
      # end

  end

end