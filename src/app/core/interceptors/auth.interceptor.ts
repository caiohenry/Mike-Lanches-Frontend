import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../../modules/login/services/auth.service';


export const authInterceptor: HttpInterceptorFn = (req, next) => {
  let token = inject(AuthService).access;

  if (req.headers.has('skip-auth')) {
    return next(req);
  }

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return next(req)

};