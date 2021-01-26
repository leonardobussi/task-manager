import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignService } from "../../../services/sign.service"
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

  

export class NavbarComponent implements OnInit {

  token: any
  email: any

  constructor(private service: SignService, private route: ActivatedRoute, private router: Router ) { }

  public async ngOnInit() {
    this.token = await localStorage.getItem('token')
    this.email = await localStorage.getItem('email')
  }



  
  
  deslogar(){
     this.service.deslogar(this.token).subscribe(async( data: any)=>{
      await localStorage.removeItem('token')
      await localStorage.removeItem('email')
      this.ngOnInit()
      await this.router.navigate(["/sign_in"])
    }, (error)=> {
      console.log(error)
    })
  }

  
  

}
