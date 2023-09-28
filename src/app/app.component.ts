import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecomerce';
  navItems:any[]=[
    {
      title:"App",
      path:"",
      active: false,
      
    },
    {
      title:"Home",
      path:"/home",
      active: false,
      
    },
    {
      title:"Login",
      path:"/login",
      active: false,
      
    },
    {
      title:"Signup",
      path:"/signup",
      active: false,
      
    },
    
    {
      title:"Info",
      path:"/info",
      active: false,
      
    },
    
  ]
   
  onActive(item:any) {
    item.active = true;
  }
}
