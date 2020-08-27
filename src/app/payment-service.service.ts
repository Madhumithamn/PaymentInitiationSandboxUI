import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PaymentIniationRequest } from './PaymentInitiationRequest';
import { PaymentInitiationResponse } from './PaymentInitiationResponse';

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {

  constructor( private http : HttpClient) { }

  public paymentintiation(paymentintiation : PaymentIniationRequest){
    //const headers = new HttpHeaders().set("X-Request-Id","29318e25-cebd-498c-888a-f77672f66449");
    let headers = new HttpHeaders().set("Signature-Certificate","LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUR3akNDQXFvQ0NRRHhWYkNqSUt5blFqQU5CZ2txaGtpRzl3MEJBUXNGQURDQm9qRUxNQWtHQTFVRUJoTUMKVGt3eEVEQU9CZ05WQkFnTUIxVjBjbVZqYUhReEVEQU9CZ05WQkFjTUIxVjBjbVZqYUhReEVUQVBCZ05WQkFvTQpDRkpoWW05aVlXNXJNUk13RVFZRFZRUUxEQXBCYzNObGMzTnRaVzUwTVNJd0lBWURWUVFEREJsVFlXNWtZbTk0CkxWUlFVRHBsZUdObGJHeGxiblFnVkZCUU1TTXdJUVlKS29aSWh2Y05BUWtCRmhSdWJ5MXlaWEJzZVVCeVlXSnYKWW1GdWF5NXViREFlRncweU1EQXhNekF4TXpJeU5EbGFGdzB5TVRBeE1qa3hNekl5TkRsYU1JR2lNUXN3Q1FZRApWUVFHRXdKT1RERVFNQTRHQTFVRUNBd0hWWFJ5WldOb2RERVFNQTRHQTFVRUJ3d0hWWFJ5WldOb2RERVJNQThHCkExVUVDZ3dJVW1GaWIySmhibXN4RXpBUkJnTlZCQXNNQ2tGemMyVnpjMjFsYm5ReElqQWdCZ05WQkFNTUdWTmgKYm1SaWIzZ3RWRkJRT21WNFkyVnNiR1Z1ZENCVVVGQXhJekFoQmdrcWhraUc5dzBCQ1FFV0ZHNXZMWEpsY0d4NQpRSEpoWW05aVlXNXJMbTVzTUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROEFNSUlCQ2dLQ0FRRUFyeUx5Cm91VFFyMWR2TVQ0cXZlazBlWnNoOGcwRFFRTGxPZ0J6Wnd4N2lJbnhZRUFnTU54Q0tYaVpDYm1XSEJZcWg2bHAKUGgrQkJtcm5CUXpCK3FyU05JeWQ0YkZoZlVsUStodEswOHl5TDlnNG55THQwTGVLdXhvYVZXcEluckI1RlJ6bwpFWTVQUHBjRVhTT2JncitwTTcxQXZ5SnRRTHhaYnFUYW80UzdUUktlY1VtMzJXd2crRldZL1N0U0tsb3gzUW1FCmF4RUdVN2FQa2FRZlFzNGhydHVVZVB3S3Jia1EyaFFkTXB2STVvWFJXelRxYWZ2RVF2TkQrSXlMdlpScWYwVFMKdkl3c2d0SmQydGNoMmtxUG9Vd25nM0FtVUZsZUpiTWpGTnpyV003VEg5TGtLUEl0WXRTdU1UemVTZTlvMFNtWApaRmdjRUJoNURuRVRacUlWdVFJREFRQUJNQTBHQ1NxR1NJYjNEUUVCQ3dVQUE0SUJBUUFTRk9rSmlLUXVMN2ZTCkVySDZ5NVV3ajlXbW1RTEZuaXQ4NXRqYm8yMGpzcXNlVHVacUxkcHdCT2JpSHhuQno3bzNNNzNQSkFYZG9Ya3cKaU1WeWtacmxVU0V5NytGc05aNGlGcHBvRmFwSERiZkJnTTJXTVY3VlM2TksxN2UwelhjVEd5U1NSelhzeHcweQpFUUdhT1U4UkozUnJ5MEhXbzlNL0ptWUZyZEJQUC8zc1dBdC8rTzR0aDVKeWs4UmFqTjNmSEZDQW9VejRyWHhoClVaa2YvOXUzUTAzOHJSQnZxYUErNmMwdVc1OFhxRi9ReVV4dVRENGVyOXZlQ25pVWh3SVg0WEJzRE54SVcvcncKQlJBeE9Va0c0VitYcXJCYjc1bEN5ZWExby85SElhcTFpSUtJNERheTBwaU1PZ3dQRWcxd0YzODN5ZDB4OGhSVwo0enh5SGNFUgotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0t");
    headers = headers.append("X-Request-Id","29318e25-cebd-498c-888a-f77672f66449");
    console.log(headers.get("X-Request-Id"));
    console.log(headers.get("Signature-Certificate"));
   // return this.http.post<PaymentInitiationResponse>("http://localhost:8080/v1.0.0/initiate-payment",paymentintiation,{headers,responseType: 'text' as 'json'});
    return this.http.post<PaymentInitiationResponse>("http://localhost:8080/v1.0.0/initiate-payment",paymentintiation,{headers});

  }
}