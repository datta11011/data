import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from '@angular/fire/auth';
import { from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  login(arg0: string, arg1: string) {
    throw new Error('Method not implemented.');
  }
  currentUser$ = authState(this.auth);
  constructor( private auth: Auth ) {}

    customlogin(username:string, password: string) {
      return from(signInWithEmailAndPassword(this.auth, username, password));
    }


    logout() {
      return from(this.auth.signOut());
    }

}
