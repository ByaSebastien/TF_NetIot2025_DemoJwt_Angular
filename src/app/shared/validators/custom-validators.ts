import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {
    static comparePasswords(form: AbstractControl) : ValidationErrors|null {
      if(form.get('password')!.value !== form.get('confirmPassword')!.value) {
        return { compare: { field1: 'password', field2: 'comparePassword' } };
      }
      return null;
    }
}

// export const CustomValidators = {
//     comparePasswords: () => {}
// }