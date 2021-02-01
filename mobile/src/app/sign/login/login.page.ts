import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignService } from 'src/app/service/sign.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = ''
  password: string = ''
  // is_message: string = ''
  // is_msg: boolean = false
  // token: any
  // loading: boolean = false

  constructor(
      private service: SignService,
      private route: ActivatedRoute,
       private router: Router,
        private storage: Storage) { }

  ngOnInit(): void {
  }


  // is_check(){
  //   this.is_msg = false
  // }

  submit_salva(){
    this.service.login({"email": this.email, "password": this.password}).subscribe((data: any) => {
      // this.loading = true
      localStorage.setItem('token', data.data.attributes.token)
  //     // await localStorage.setItem('email', data.data.attributes.email)
  //     this.ngOnInit()
  //     // this.is_message = ''
  //     // this.is_msg = false
  //     // this.loading = false
        this.router.navigate(["/tasks"])
    }, (error)=>{
  //     // this.is_message = 'O email e senha inserido não corresponde a nenhuma conta'
  //     // this.is_msg = true
  //     // this.loading = false
      this.router.navigate(["/login"])
    })
  }

}
