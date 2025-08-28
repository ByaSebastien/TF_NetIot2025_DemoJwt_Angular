import { HttpInterceptorFn } from '@angular/common/http';
import {AuthService} from '../services/auth.service';
import {inject} from '@angular/core';
import {UserTokenDto} from '../models/user-dto';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {

  const authService: AuthService = inject(AuthService);

  let currentUser: UserTokenDto | undefined = authService.currentUser();

  if(currentUser) {
    let token: string = currentUser.token;

    if(token) {
      let clone = req.clone({
        headers: req.headers.append('Authorization', `Bearer ${token}`),
      });
      return next(clone);
    }
  }

  return next(req);
};
