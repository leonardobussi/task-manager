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
  email: string = ''
  
  public is_open: boolean = true

  constructor(private service: SignService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token')
    this.email = localStorage.getItem('email')

    if(typeof this.token !== typeof '' ){
     
      this.is_open = false
    }
    else {
      this.is_open = true
    }
  }
  
  deslogar(){
    this.service.deslogar(this.token).subscribe((data: any)=>{
      localStorage.removeItem('token')
      localStorage.removeItem('email')
      this.ngOnInit()
      this.router.navigate(["/sign_in"])
    }, (error)=> {
      console.log(error)
    })
  }
  

}
