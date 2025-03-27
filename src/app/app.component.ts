import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiFileService } from './shared/api-file.service';
import { CommonModule, ViewportScroller } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { userInfo } from 'os';
import { UserinfoComponent } from './userinfo/userinfo.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Api';
  recipes : any[] = [];

  constructor (public apifileservice : ApiFileService){
 
  }

    ngOnInit() : void {
      this.apifileservice.getData().subscribe({
            next : (response : any )=> {
              console.log("data" ,response )
              this.recipes = response.recipes
            },
            error : (error : any ) => {
              console.log("Error", error)
            },
            complete : () => {
              console.log("complete")
            }
      })
    }

  }