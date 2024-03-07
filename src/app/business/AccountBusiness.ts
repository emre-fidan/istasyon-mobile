import { HttpClient } from "@angular/common/http"
import { LoginRequestDto } from "../entities/DTO/LoginRequestDto";
import { BaseBusiness } from "./BaseBusiness";
import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";
import { ServiceResult } from "../common/ServiceResult";
import { UserDto } from "../entities/DTO/UserDto";
import { VerifyMailRequest } from "../entities/DTO/VerifyMailRequest";

@Injectable({
    providedIn: 'root'
  })
export class AccountBusiness extends BaseBusiness{

    constructor(http: HttpClient, injector: Injector) {
        super(http,injector);
    }

    GetDashboard():Observable<ServiceResult<Boolean>>{
        return this.getRequest('/dashboard'); 
    }
}