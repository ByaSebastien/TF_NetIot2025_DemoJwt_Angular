import {Component, inject, Signal} from '@angular/core';
import {HouseService} from '../../services/house.service';
import {HttpClient} from '@angular/common/http';
import {HouseDto} from '../../models/house-dto';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-house-index',
  imports: [],
  templateUrl: './house-index.html',
  styleUrl: './house-index.scss'
})
export class HouseIndex {

  private readonly _houseService: HouseService = inject(HouseService);

  houses: Signal<HouseDto[] | undefined>;

  constructor() {
    this.houses = toSignal(this._houseService.getHouses());
  }
}
