import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { sign } from '../../../models/sign.model'
import { SignService } from '../../../services/sign.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = ''
  password: string = ''
  is_message: string = ''
  is_msg: boolean = false
  token: any

  constructor(private service: SignService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }


  is_check(){
    this.is_msg = false
  }

  submit_salva(){
    this.service.login({"email": this.email, "password": this.password}).subscribe(async (data:any) => {
      await localStorage.setItem('token', data.data.attributes.token)
      await localStorage.setItem('email', data.data.attributes.email)
      this.ngOnInit()
      this.is_message = ''
      this.is_msg = false

      await this.router.navigate(["/tasks"])

    },
    async (error)=>{
      console.log(error)

      this.is_message = 'O email e senha inserido não corresponde a nenhuma conta'
      this.is_msg = true
     await this.router.navigate(["/sign_in"])
      
    })
  }
  
}
