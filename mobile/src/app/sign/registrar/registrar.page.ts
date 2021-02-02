import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignService } from 'src/app/service/sign.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  email: string = ''
  password: string = ''
  loading: boolean = false
  is_message: string = ''
  is_msg: boolean = false

  constructor(private service: SignService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }


  is_check(){
    this.is_msg = false
  }

  submit_salva(){
    this.loading = true
    this.service.register({"user":{"email": this.email, "password": this.password}}).subscribe((data: any) => {
      localStorage.setItem('token', data.data.attributes.token)
  //     this.ngOnInit()
        this.is_message = ''
        this.is_msg = false
        this.loading = false
        this.router.navigate(["/tasks"])
    }, (error)=>{
        this.is_message = 'O email e senha inserido não não são aceitos'
        this.is_msg = true
        this.loading = false
        this.router.navigate(["/registrar"])
    })
  }

}
