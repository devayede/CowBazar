import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CowComponent } from './cows/cow/cow.component';
import { CowsComponent } from './cows/cows.component';
import { CowsModule } from './cows/cows.module';
import { CowsService } from './cows/cows.service';
import { CartComponent } from './cart/cart.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CowsModule,
    AuthModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
