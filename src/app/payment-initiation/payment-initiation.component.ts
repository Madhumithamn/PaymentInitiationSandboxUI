import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaymentServiceService } from '../payment-service.service';
import { PaymentIniationRequest } from '../PaymentInitiationRequest';
import { PaymentInitiationResponse } from '../PaymentInitiationResponse';


@Component({
  selector: 'app-payment-initiation',
  templateUrl: './payment-initiation.component.html',
  styleUrls: ['./payment-initiation.component.css']
})
export class PaymentInitiationComponent implements OnInit {

  
  paymentIntiationResponse = new PaymentInitiationResponse;
  submitted = false;
  errorMsg = '';
  paymentInitiationRequest = new PaymentIniationRequest('', '', '');

  responseStatusCode : any;

  constructor(private service: PaymentServiceService) { }

  ngOnInit() {
            
  }

  onSubmit() {
    this.submitted = true;    
    this.initiatePayment(this.paymentInitiationRequest);
    this.submitted = false;
    // this.paymentInitiationRequest.debtorIBAN=null;
    
    
  }
  public initiatePayment(paymentInitiationRequest){
    let response = this.service.paymentintiation(paymentInitiationRequest);
    response.subscribe(
    data => {
        console.log(data);
        this.paymentIntiationResponse = data;        
     },
           
      error => {
        console.log(error);
      });

  }

}
