import { HttpClient } from "@angular/common/http"
import { BaseBusiness } from "./BaseBusiness";
import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";
import { ServiceResult } from "../common/ServiceResult";
import { UserDto } from "../entities/DTO/UserDto";
import { RegisterRequestDto } from "../entities/DTO/RegisterRequestDto";
import { RegisterDTO } from "../entities/DTO/RegisterDto";

@Injectable({
    providedIn: 'root'
  })
export class LoginBusiness extends BaseBusiness{

    constructor(http: HttpClient, injector: Injector) {
        super(http,injector);
    }

    LoginRequest(request:UserDto):Observable<ServiceResult<UserDto>>{
        return this.postRequest('/login', request); 
    }

    RegisterRequest(request:RegisterDTO):Observable<ServiceResult<object>>{
        return this.postRequest('/user/register', request); 
    }
}