// loading.interceptor.ts
import { inject, Injectable } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../../services/loading.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);

  // Mostra o indicador de carregamento
  loadingService.show();

  // Continua a cadeia de interceptors e esconde o indicador de carregamento quando a requisição é concluída
  return next(req).pipe(
    finalize(() => {
      loadingService.hide();
    })
  );
};