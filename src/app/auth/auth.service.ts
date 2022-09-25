import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { loginFrom, passwordFrom } from 'src/Types/auht';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;
  isLoading: boolean = false;

  login(form: loginFrom){
    if (this.isLoading)
      return;

      this.isLoading = true;
    const auth = getAuth();
      signInWithEmailAndPassword(auth, form.email, form.password)
        .then((userCredential) => {
         this.isAuthenticated = true;
         this.router.navigate(['']);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          this.isAuthenticated = false;
        })
        .finally(() => (this.isLoading = false));

  }

  passwordMatch: boolean = true;
  register(form: passwordFrom){
    if (this.isLoading)
    return;
    
    this.isLoading = true;

    if(form.password !== form.confirmpassword){
      this.passwordMatch = false;
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.isAuthenticated = true;
        
        alert('Register Succesfully');
      })
      .catch((error) => {
        this.isAuthenticated = false;
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Register Unccesfully');
        
      })
      .finally(() => (this.isLoading = false));

  }

  logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      this.router.navigate(['login']);
      this.isAuthenticated = false;
      }).catch((error) => {
  // An error happened.
});
  }
  constructor(private router: Router) { }
}
