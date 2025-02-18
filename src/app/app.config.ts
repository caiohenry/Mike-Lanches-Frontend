import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { MessageService } from 'primeng/api';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideLottieOptions } from 'ngx-lottie';
import { authInterceptor } from './interceptors/auth.interceptor';
import { loadingInterceptor } from './interceptors/loading.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: MessageService },
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([loadingInterceptor, authInterceptor])),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideHttpClient(),
    provideEnvironmentNgxMask(),
    provideAnimations(),
    provideAnimationsAsync(),
    importProvidersFrom(
      JwtModule.forRoot({
        config: {
          tokenGetter: () => {
            return localStorage.getItem('access');
          },
        },
      })
    ),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideLottieOptions({
      player: () => import('lottie-web'),
    }),
  ]
};
