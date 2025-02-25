import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../../modules/login/services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  let auth$ = inject(AuthService);

  if (!auth$.isUserLogged()) {
    return false;
  }

  return true;
};