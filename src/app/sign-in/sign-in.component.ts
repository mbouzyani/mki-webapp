import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {

  errLogin:boolean=false;
  typePassWord:string="password";

  constructor( private _router: Router) { }

  ngOnInit() {
    // this.errLogin=false;
    this.typePassWord="password";
  }


  toggleIconPassword(){
    $('#icon-password').toggleClass('fa-eye fa-eye-slash');
    this.typePassWord = this.typePassWord==="password" ? "text" : "password";
  }
   
  connexion(){
    // this.errLogin=false;
    let username = $('#username').val();
    let password = $('#password').val();
    console.log('connexion', username, password);
    if(username==='MokauInvest' && password==="P@s$20**.!"){
      localStorage.setItem('token-teamMI','9-QCsjE1Xg:^GZaX>#}@,~JTpRyG~[MFZ.ji:j..^|l3[6Fg8Hw{)3S4{##>2%]D');
      this._router.navigate(['/Projects']);
    }else{
      // this.errLogin=true;
    }
  }

}
