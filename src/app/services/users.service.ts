import { HttpClient } from "@angular/common/http";
import { Injectable} from "@angular/core";
import { LoginRequest } from "../interfaces/loginRequest.interface";
import { Observable } from "rxjs";
import { Api } from "../model/api.model.local"

@Injectable({
    providedIn: 'root'
})
export class UsersService{

    constructor(
        private httpClient: HttpClient
    ){}

    login(credenciales: LoginRequest):Observable<any>{
        return this.httpClient.post(Api.token,credenciales)
    }

    signOut(){
        sessionStorage.removeItem("token")
        // localStorage.removeItem("token");
    }

    isAuth(){
        return sessionStorage.getItem("token") && sessionStorage.getItem("token") != ''
        // return localStorage.getItem('token') && localStorage.getItem('token') != ''
    }
}