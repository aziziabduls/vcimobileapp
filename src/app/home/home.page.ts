import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { CupertinoPane } from 'cupertino-pane';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user: any;
  homePane: any;


  slideOpts = {
    slidesPerView: 1.3
  }

  constructor(public router: Router) {

    this.user = {
      'name': 'Abdul Azizi',
      'title': 'IT Programmer Staff'
    }

  }

  openPane(){
    this.homePane = new CupertinoPane(
      '.cupertino-pane', // Pane container selector
      { 
        parentElement: 'body', // Parent container
        breaks: {
            top: { enabled: true, height: 600, bounce: true },
            middle: { enabled: true, height: 400, bounce: true },
            bottom: { enabled: true, height: 200, bounce: true },
        },
        backdrop: true,
        initialBreak: 'middle',
        // onDrag: () => console.log('Drag event')
        onBackdropTap: () => {
          this.homePane.destroy({animate: true});
        }
      }
    );
    this.homePane.present({animate: true}).then(res => {
      // console.log('pane')
    });
  }

  goToProfilePage(){
    // console.log(this.user.name)
    // let navigationExtras: NavigationExtras = {
    //   state: {
    //     user: this.user.name
    //   }
    // };
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.user)
      }
    };
    // this.router.navigate(['/profile']);
    this.router.navigate(['/profile'], navigationExtras)
    // this.homePane.destroy({animate: true});

  }
  

}
