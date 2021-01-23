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

  constructor(private service: SignService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  submit_salva(){
    this.service.login({"email": this.email, "password": this.password}).subscribe((data:any) => {
      // this.router.navigate(["/tasks/visualizar", data.data.id])
      localStorage.setItem('token', data.data.attributes.token)
      localStorage.setItem('email', data.data.attributes.email)
      this.router.navigate(["/tasks"])
      console.log(data)
    },
    (error)=>{
      console.log(error)
    })
  }
  
}
