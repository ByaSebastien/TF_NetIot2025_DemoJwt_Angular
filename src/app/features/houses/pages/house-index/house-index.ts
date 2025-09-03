import {Component, inject, Signal} from '@angular/core';
import {HouseService} from '../../services/house.service';
import {HttpClient} from '@angular/common/http';
import {HouseDto} from '../../models/house-dto';
import {toSignal} from '@angular/core/rxjs-interop';
import { Button } from "primeng/button";
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddHouse } from '../add-house/add-house';
import { BehaviorSubject, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-house-index',
  imports: [Button],
  templateUrl: './house-index.html',
  styleUrl: './house-index.scss'
})
export class HouseIndex {
  
  private readonly _houseService = inject(HouseService);
  private readonly _dialogService = inject(DialogService);
  
  houses: Signal<HouseDto[] | undefined>;
  reload$ = new BehaviorSubject<any>(true);
  
  constructor() {
    this.houses = toSignal(this.reload$.pipe(switchMap(() =>this._houseService.getHouses())));
    
  }

  openAddHouse() {
    const ref = this._dialogService.open(AddHouse, {
      closable: true,
      maximizable: true,
      width: '70vw',
      resizable: true,
      draggable: true,
      modal: true,
      dismissableMask: true,
    });

    ref.onClose.subscribe(result => {
      if(result) {
        this.reload$.next(true);
      }
    })
  }
}
