import { SaleDetail } from "./sale-detail";

export class Sale {
    id: string;
    saleDetail: SaleDetail[];
    clientName: string;
    clientIdentification: string;
    clientAddress: string;
    clientPhoneNumber: string;
    stateId: string;
    date: Date; 
}
