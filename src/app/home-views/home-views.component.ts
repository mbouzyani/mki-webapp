import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import * as AOS from "aos";

$(window).on("scroll", function() {
  if($(window).scrollTop() > 20) {
    $("#header").addClass("withScroll");
    $('.line-menu').addClass("bgOrange");
    
    
  } else {
    $("#header").removeClass("withScroll");
    $('.line-menu').removeClass("bgOrange");
  }
});

// $(document).scroll(function() {
//   var y = $(this).scrollTop();
//   if (y > 900) {
//     $('#scroll-top-container').show();
//   } else {
//     $('#scroll-top-container').hide();
//   }
// });

$(window).click(function(e) {
  if($(e.target).closest('#itm-signin').length == 0) {
    if($(e.target).closest('#container-signIn').length == 0) {
      console.log('event clicked e:', e);
        if( $('#itm-signin').hasClass("action-signin")){
          $('#itm-'+this.lastSelectedItm).removeClass("action");
          $('#itm-signin').toggleClass("action-signin");
          $('#container-signIn').toggle();
          this.lastSelectedItm="signin";
          console.log('in')
        }
   }
  }
});

@Component({
  selector: 'app-home-views',
  templateUrl: './home-views.component.html',
  styleUrls: ['./home-views.component.css']
})


  


export class HomeViewsComponent implements OnInit {

  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  lastSelectedItm:string='home';



  ngOnInit() {
      AOS.init({
        // offset: 200,
        // duration: 600,
        // easing: 'ease-in-sine',
        // delay: 100,
      });
      this.myStyle = {
          'position': 'absolute',
          'width': '100%',
          'min-height': '91vh',
          'background': 'linear-gradient(161deg, #ff572261, #f06548, #f06548)',
          'z-index': -1,
          'top': 0,
          'left': 0,
          'right': 0,
          'bottom': 0,
      };
      this.myParams = {
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 1000
            }
          },
          "color": {
            "value": "#fff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#fff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 140,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }
  }

  navigate(itm){
    let clsOne = itm === "signin" ? "action-signin" : "action";
    let clsTwo = this.lastSelectedItm ===  "signin" ? "action-signin" : "action";
    $('#itm-'+this.lastSelectedItm).removeClass(clsTwo);
    $('#itm-'+itm).addClass(clsOne);
    $('#container-signIn').hide();


    this.lastSelectedItm ===  "signin" ?   $('#container-signIn').hide() : '';
    this.lastSelectedItm ===  "signin" && itm === "signin" ? $('#container-signIn').hide() : '';
    
    this.lastSelectedItm = itm;
    var width = $( window ).width();
    console.log(width)
    if ( width < 916) return this.showMenu();
  }

  showMenu(){
    $('#container-signIn').hide();
    $('.line-menu').toggleClass("small");
    // $('#menu').toggleClass("menu-toggle close-menu");
    $('nav').toggle();
    $('header').toggleClass("bgWhite");
    $('#menu').toggleClass("show close");
    // $('#container-signIn').toggle();

  //   // $('#menu').toggle(function () {
  //     $(".example2 span").before({'margin-top': "0px"});
  //   // }, function () {
  // //     $("#example2 span:before").css({marginTop: "-12px"});
  // //     $(".example2 span:after").css({marginTop: "12px"});
  // // });

  }

  showFormSignIn(){
    // this.navigate('signin');
    $('#itm-'+this.lastSelectedItm).removeClass("action");
    $('#itm-signin').toggleClass("action-signin");
    $('#container-signIn').toggle();
    this.lastSelectedItm="signin";
  }
}
