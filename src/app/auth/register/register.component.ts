import { Component, OnInit } from '@angular/core';
import { passwordFrom } from 'src/Types/auht';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: passwordFrom = {
    email:'',
    password:'',
    confirmpassword:''
    
  };

   

  

  register(){

    this.authServce.register(this.form);
  }

  isLoading(){
    return this.authServce.isLoading;
  }
  constructor(private authServce: AuthService) { }

  ngOnInit(): void {
  }

}
