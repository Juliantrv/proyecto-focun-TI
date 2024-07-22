import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Api } from "../model/api.model.local";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SearchService{
    
    constructor(
        private _httpClient: HttpClient
    ){ }

    token = sessionStorage.getItem('token')

    searchProducts(search: string): Observable<any>{
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${this.token}`
        });
        return this._httpClient.get(`${Api.products}/?search=${search}`,{headers})
    }
    
}