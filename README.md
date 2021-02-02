# README


* meu site top

![cell](https://user-images.githubusercontent.com/54999837/106644054-58c1cf00-6569-11eb-8931-eb433eb283b7.gif)
![web](https://user-images.githubusercontent.com/54999837/106645050-a25ee980-656a-11eb-9d05-ccc49c5e1039.gif)




[https://taskks.herokuapp.com/tasks](https://taskks.herokuapp.com/tasks)
## routes (api versao 1) 

**observação** --> essa documentarção é sobre a versão v1 da api

### users
* post(add user) => [http://localhost:3000/api/v1/users/](http://localhost:3000/api/v1/users/)
* show(show user) => [http://localhost:3000/api/v1/users/:id](http://localhost:3000/api/v1/users/:id)
* put(update user) => [http://localhost:3000/api/v1/users/:id](http://localhost:3000/api/v1/users/:id)

* delete(destroy user) => [http://localhost:3000/api/v1/users/:id](http://localhost:3000/api/v1/users/:id)




<br/>

## exemple
* exemple of url using for at requests [http://localhost:3000/api/v1/users/](http://localhost:3000/api/v1/users/)

## observable

* project rails 
  * config/application.br =>  config.hosts << "api.task-manager.test"

* archive hosts (operational system)
  * linux => `etc/hosts`
    * exemple => `127.0.0.1      api.task-manager.test`
<br/>

`error, not exist route /users at the using the subdomain api.name-application.test`

<br/>
## params for request at the postman

when requesting via post, add in the body form-data field <br/>
`user[email]` `email@emailcom` <br/>
`user[password]` `senha` <br/>
`user[password_confirmation]` `senha` <br/>

<br/>

## api versao 2

* estou com preguiça para documentar
## description

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions


--> feito por `leonardobussi`
