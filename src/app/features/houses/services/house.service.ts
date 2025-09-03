import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HouseDto} from '../models/house-dto';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  private readonly _http: HttpClient = inject(HttpClient);
  private readonly _url: string = environment.API_URL + "/house";

  getHouses() {
    return this._http.get<HouseDto[]>(this._url);
  }

  addHouse(houseForm: any) {
    return this._http.post<void>(this._url, houseForm);
  }
}
