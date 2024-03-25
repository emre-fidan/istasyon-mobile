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
export class JobAdBusiness extends BaseBusiness{

    constructor(http: HttpClient, injector: Injector) {
        super(http,injector);
    }

    GetJobAd():Observable<ServiceResult<Object>>{
        return this.getRequest('job/view'); 
    }
}