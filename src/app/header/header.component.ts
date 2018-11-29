import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(private autService: AutenticacionService,
                private router: Router,
                private activatedRouter: ActivatedRoute) { }

  ngOnInit() {

        this.onLogout();

        if (this.autService.isLogged()){
            console.log("si");
        }else{
            console.log("no")
        }

  }

    isAuth() {
        return this.autService.isLogged();
    }

    onLogout() {
        // console.log("Cerrando...");
        this.autService.logout()
        .then(
            res=>{
                this.router.navigate(['/inicio']);
            }
        )
        .catch(
            err=>{
                console.log(err);
            }
        );
    }




}
