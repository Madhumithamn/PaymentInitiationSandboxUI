export class PaymentIniationRequest{
    constructor(
        public debtorIBAN: string,
        public creditorIBAN: string,
        public amount: string
        
    ) {}
}