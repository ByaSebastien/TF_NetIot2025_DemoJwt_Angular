import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {providePrimeNG} from 'primeng/config';

import Aura from '@primeuix/themes/aura'
import {jwtInterceptor} from './features/auth/interceptors/jwt-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        jwtInterceptor
      ]),
    ),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),
  ]
};
