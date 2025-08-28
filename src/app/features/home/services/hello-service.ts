import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  private readonly _http: HttpClient = inject(HttpClient);
  private readonly _apiUrl: string = environment.API_URL + "/hello";

  hello(): Observable<{content: string}> {
    return this._http.get<{content: string}>(this._apiUrl);
  }
}
