import { Component, OnInit } from '@angular/core';
import emailjs from 'emailjs-com'
import * as $ from 'jquery'
 
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  loading:boolean=false;
  displayMsgSend:boolean=false;
  constructor() { }

  ngOnInit() {

    const form = document.querySelector('.contact-form')
    form.addEventListener('submit',this.sendEmail)
  }

  sendEmail = e => {
    let firstName =  $('#firstName').val();
    let lastName = $('#lastName').val();
    let email = $('#email').val();
    let phone =  $('#phone').val();
    let textForm = $('#textForm').val();
    if(firstName !=='' && lastName !=='' && email !=='' && textForm !=='' ){
      this.loading=true;
      // console.log(e.target);
      // alert(JSON.stringify(e.target));
      e.preventDefault()
      setTimeout(() => {
        this.loading=false;
        this.displayMsgSend=true;
        $('#firstName').val('');
        $('#lastName').val('');
        $('#email').val('');
        $('#phone').val('');
        $('#textForm').val('');
        setTimeout(() => {
          this.displayMsgSend=false;
        }, 3000);
      }, 4000);
      emailjs.sendForm('gmail', "supportcontactmoakauinvest", e.target, "user_VawAdKcxamSMaN4y7gv6f")
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
    }else{
      console.log('some fields are empty')
    }
  }

}
