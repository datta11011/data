import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpSentEvent,
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpUserEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError as observableThrowError, Subscription, interval, timer, throwError } from 'rxjs';
import { catchError, tap, take } from 'rxjs/operators';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

  event: Observable<any>;

  constructor(private router: Router) {   }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

    const headers = req.headers
    .set( 'Cache-Control', 'no-cache')
    .set( 'Pragma', 'no-cache')
    .set( 'Expires', 'Sat, 01 Jan 2000 00:00:00 GMT');

    const adalRequest = req.clone({ headers });

    return next.handle(adalRequest).pipe(
      tap(event => {
       
        if (event instanceof HttpResponse) {
          if (event.status === 200) {
           }
         }
      },          
   
    ),  
    catchError(
      
      (error: HttpErrorResponse)=>{
       // debugger;
       if (error.status === 401) { 
        this.router.navigate(['/shared/access-denied']);
        return;
      } else if (error.status === 403) {        
        this.router.navigate(['/shared/access-denied']);
        return;
      } else if (error.status === 500) { 
        this.router.navigate(['/shared/error'], {
        });
        return;
      } else if (error.status === 404) {         
        this.router.navigate(['/shared/page-not-found']);
        return;
     }
    return throwError(error);
  
  })
    );    
  }
}
