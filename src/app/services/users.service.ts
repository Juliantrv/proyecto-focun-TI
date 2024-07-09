import { HttpClient } from "@angular/common/http";
import { Injectable} from "@angular/core";
import { LoginRequest } from "./loginRequest";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UsersService{

    constructor(
        private httpClient: HttpClient
    ){}

    login(credenciales: LoginRequest):Observable<any>{
        return this.httpClient.post('https://12gzzj80-8010.use2.devtunnels.ms/principal/api/token/',credenciales)
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