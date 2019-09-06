import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as fromApp from '../../store/app.reducer';
import * as AuthActions from '../store/auth.actions';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  isLoading = false;
  error: string = null;


  private closeSub: Subscription;
  private storeSub: Subscription;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.storeSub = this.store.select('auth').subscribe(authState => {
      this.isLoading = authState.loading;
      this.error = authState.authError;
      if (this.error) {
        console.log(this.error);
      }
    });
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    this.store.dispatch(
      new AuthActions.SignupStart({ email: email, password: password })
    );
  }

  ngOnDestroy() {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }
  }


  

}
