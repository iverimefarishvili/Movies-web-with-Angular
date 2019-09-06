import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule} from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import { StoreModule} from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreRouterConnectingModule.forRoot(),
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
