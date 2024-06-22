import { Component, OnInit } from '@angular/core';
  
import {Router} from '@angular/router';
import * as $ from 'jquery'


@Component({
  selector: 'app-our-projects',
  templateUrl: './our-projects.component.html',
  styleUrls: ['./our-projects.component.scss']
})
export class OurProjectsComponent implements OnInit {

  constructor(private _router: Router) { }
  
  ngOnInit() {
  }


  logOut(){
    localStorage.removeItem('token-teamMI')
    this._router.navigate(['']);
  }
  
  openPageDart_client(){
    window.open('http://169.255.178.189:8083');
  }

  openPageDart_agent(){
    window.open('http://169.255.178.189:8083/partner');
  }

  openPageDart_agency(){
    window.open('https://mokau-dev-srv2.mor01.cloudapp.onecloud.ma/daretAgency');
  }

  openFacebookPageDeigu(){
    window.open('https://www.facebook.com/DeiguGuide/?ref=bookmarks');
  }
  
  openDatumLabVersionOne(){
    window.open('http://169.255.178.183:8081/');
  }
  openDatumLabVersionTwo(){
    window.open('https://mokau-dev-srv.mor01.cloudapp.onecloud.ma/datumlab');
  }

  openCaronaeSys(){
    window.open('https://caronaesystems.com/');
  }

  openSiftlia(){
    window.open('http://siftlia.com/');
  }
  openFacebookPagesiftlia(){
    window.open('https://www.facebook.com/Siftlia-114543456753258/?ref=your_pages');
  }

  togglePopUpLogOut(){
    $(".container-popUp").toggle();
  }




}

