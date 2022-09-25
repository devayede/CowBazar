import { Component, OnInit } from '@angular/core';
import { loginFrom } from 'src/Types/auht';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: loginFrom = {
    email:'',
    password:'', 
  };

 

    submit(){
      

      this.authService.login(this.form);
      
    }

    isLoading(){
      return this.authService.isLoading;
    }
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
 
}
