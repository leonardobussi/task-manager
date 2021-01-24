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

  constructor(private service: SignService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  submit_salva(){
    this.service.register({user:{"email": this.email, "password": this.password}}).subscribe(async (data:any) => {
      this.is_message = ''
      this.is_msg = false
      console.log(data)
      await this.router.navigate(["/sign_in"])

    },
    async (error)=>{
      console.log(error)

      this.is_message = 'Erro ao registrar - se'
      this.is_msg = true
      await this.router.navigate(["/sign_up"])
      
    })
  }

}
