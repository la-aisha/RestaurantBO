import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';



@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.body instanceof FormData) {
      req = req.clone({
        headers: req.headers.delete('Content-Type', 'application/json')
      });
    } else {
      req = req.clone({
        headers: req.headers.set('Content-Type', 'application/json')
      });
    }

    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        console.log('error ', error.status)
        return throwError(error);
      }));
  }
}