import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignService } from 'src/app/services/sign.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email: string = ''
  password: string = ''
  is_message: string = ''
  is_msg: boolean = false
  is_messageSuccess: string;
  is_msgSuccess: boolean;
  loading: boolean = false

  constructor(private service: SignService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  is_check(){
    this.is_msg = false
    this.is_msgSuccess = false
  }

  submit_salva(){
    this.loading = true
    this.service.register({user:{"email": this.email, "password": this.password}}).subscribe(async (data:any) => {
      this.is_message = ''
      this.is_msg = false

      this.is_messageSuccess = 'Usuário registrado com sucesso!'
      this.is_msgSuccess = true
      this.loading = false


      
      await this.router.navigate(["/sign_up"])

    },
    async (error)=>{
      console.log(error)

      this.is_message = 'erro ao registrar usuário!'
      this.is_msg = true

      this.is_messageSuccess = ''
      this.is_msgSuccess = false
      this.loading = false
      await this.router.navigate(["/sign_up"])
    })
  }

}
