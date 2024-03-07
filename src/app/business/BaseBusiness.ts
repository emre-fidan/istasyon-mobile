import { HttpClient } from "@angular/common/http";
import { Injector } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable } from "rxjs";
import config from "../../config.json"

export abstract class BaseBusiness {

    private baseUrl = config.baseUrl;

    constructor(protected httpClient:HttpClient, protected injector: Injector) {
    }

    postRequest<T>(apiUrl: string, parameter: any): Observable<any> {
        var result = this.httpClient.post<T>(this.baseUrl + apiUrl, parameter,{withCredentials:true});
        return result.pipe(catchError(
            (err, caught) => {

                var httpError: any = {};
                httpError.data = err;

                if (httpError.data.status === 401 || 403) {

                    httpError.message = "Yetkisiz Erisim"

                    this.injector.get(Router).navigate(['/login']);

                    // return throwError(()=>err);
                    return;
                }

                return err;
            })
        );
    }

    getRequest<T>(apiUrl: string): Observable<any> {
        var result = this.httpClient.get<T>(this.baseUrl + apiUrl,{withCredentials:true, headers:{"":""}});
        return result.pipe(catchError(
            (err, caught) => {
                

                var httpError: any = {};
                httpError.data = err;

                if (httpError.data.status === 401 || 403) {

                    httpError.message = "Oturumunuz sonlandırıldı."
                    this.injector.get(Router).navigate(['/login']);
                    

                    return ;
                }

                return err;
            })
        );
    }

}