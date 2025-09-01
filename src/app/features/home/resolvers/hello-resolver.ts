import { ResolveFn } from '@angular/router';
import {HelloService} from '../services/hello-service';
import {inject} from '@angular/core';

export const helloResolver: ResolveFn<{content: string}> = (route, state) => {
  const helloService: HelloService = inject(HelloService);
  return helloService.hello();
};
