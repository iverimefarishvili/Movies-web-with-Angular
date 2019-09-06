import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  isLoading = false;
  error: string = null;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    this.store.dispatch(
      new AuthActions.LoginStart({ email: email, password: password })
    );
  }

}
