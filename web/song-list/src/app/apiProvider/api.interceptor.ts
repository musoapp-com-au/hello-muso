import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import urljoin  from "url-join";


//Intercepts HTTP requests and sets a base url based on an environment variable.

@Injectable()
export class ApiClientInterceptor implements HttpInterceptor {

    constructor(@Inject('BASE_API_URL') private baseUrl: string){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const requestUrl =  urljoin(this.baseUrl, request.url);
        const apiReq = request.clone({ url: requestUrl });
        return next.handle(apiReq);
    }
}
