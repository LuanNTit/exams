import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const token = inject(TokenStorageService);
  const router = inject(Router);
  const expectedRole = route.data['roles'] as string;
  const isLoggedIn = !!token.getToken();
  const roles = token.getUser()['roles'];

  if (isLoggedIn && roles.includes(expectedRole) || '') {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
