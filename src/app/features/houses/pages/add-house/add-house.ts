import { Component, inject } from '@angular/core';
import { FloatLabel } from "primeng/floatlabel";
import { InputText } from "primeng/inputtext";
import { Button } from "primeng/button";
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HouseService } from '../../services/house.service';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-house',
  imports: [FloatLabel, InputText, Button, ReactiveFormsModule],
  templateUrl: './add-house.html',
  styleUrl: './add-house.scss'
})
export class AddHouse {
  // gérer la contruction des formulaire
  private readonly _formBuilder = inject(FormBuilder);
  // pour se connecter à l'api
  private readonly _houseService = inject(HouseService);
  // pour afficher des messages
  private readonly _messageService = inject(MessageService);

  // pour fermer la boite de dialog
  private readonly _dialogRef = inject(DynamicDialogRef)

  addHouseForm = this._formBuilder.group({
    name: ['', [Validators.required]]
  })

  submit() {
    if(this.addHouseForm.invalid) {
      return;
    }
    this._houseService.addHouse(this.addHouseForm.value).subscribe({
      // si ok
      next: () => {
        this._messageService.add({severity: 'success', detail: 'Enregistrement OK'});
        this._dialogRef.close(true);
      },
      // si pas ok
      error: _ => {
        this._messageService.add({severity: 'error', detail: 'Enregistrement pas OK'});
      }
    })
  }
  cancel() { this._dialogRef.close(false); }
}
