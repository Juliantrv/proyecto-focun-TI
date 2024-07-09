import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class NewProductService {

    token = sessionStorage.getItem('token')
    // token = localStorage.getItem('token')

    constructor(
        private httpClient: HttpClient
    ){}

    convertToBase64(file: File): Promise<string | ArrayBuffer | null> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                resolve(reader.result ?? null);
            };
            reader.onerror = (error) => {
                reject(error);
            };
            reader.readAsDataURL(file);
        });
    }

    getManufacturers():Observable<any>{
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${this.token}`
        });
        return this.httpClient.get<any>(`https://12gzzj80-8010.use2.devtunnels.ms/inventario/fabricantes/`, {headers})
    }

    getClients():Observable<any>{
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${this.token}`
        });
        return this.httpClient.get<any>(`https://12gzzj80-8010.use2.devtunnels.ms/inventario/clientes/`, {headers})
    }
}