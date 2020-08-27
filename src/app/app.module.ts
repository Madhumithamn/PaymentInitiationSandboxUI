import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentInitiationComponent } from './payment-initiation/payment-initiation.component';
import { HttpClientModule } from '@angular/common/http';
import { PaymentServiceService } from './payment-service.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PaymentInitiationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [PaymentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
