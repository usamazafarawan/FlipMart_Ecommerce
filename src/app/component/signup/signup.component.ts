import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  bool: boolean = false;
  users: any = [];
  loginForm = this.formbuilder.group({
    user: [''],
    email: [''],
    password: [''],
  });
  constructor(private formbuilder: FormBuilder, private service: AuthService) {}
  ngOnInit(): void {
    const data = localStorage.getItem('users');
    if (data) {
      this.users = JSON.parse(data);
      console.log('this.users: ', this.users);
    }
  }

  onSubmit() {
    this.users.push(this.loginForm.value);
    localStorage.setItem('users', JSON.stringify(this.users));
    this.loginForm.reset()

  }
}
