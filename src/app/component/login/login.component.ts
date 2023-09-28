import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  users: any = [];
  loginForm = this.formbuilder.group({
    email: [''],
    password: [''],
  });
  constructor(private formbuilder: FormBuilder,private service:AuthService,private router:Router,private toastr: ToastrService) {}
  ngOnInit(): void {
    
  }

  onSubmit() {
      const isValidUser = this.service.sendvalue(this.loginForm.value)
      if(isValidUser){
        this.toastr.success('Successfully Login!');
        this.router.navigate(['/home'])
    // this.users.push({ ...this.loginForm.value });
    // localStorage.setItem('users', JSON.stringify(this.users));
  }else{
    this.toastr.error('Invalid Information!');

  }
  this.loginForm.reset()
} 
}
