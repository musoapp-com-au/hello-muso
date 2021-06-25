import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

//Intercepts HTTP requests and sets a base url based on an environment variable.

@Injectable()
export class ApiClientInterceptor implements HttpInterceptor {

    constructor(@Inject('BASE_API_URL') private baseUrl: string){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const apiReq = request.clone({ url: `${this.baseUrl}/${request.url}` });
        return next.handle(apiReq);
    }
}