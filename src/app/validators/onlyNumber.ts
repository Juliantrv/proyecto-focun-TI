import {AbstractControl, ValidatorFn, Validators} from '@angular/forms';

export function onlyNumbers(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        if (Validators.required(control)) {
            return null;
        }
        const onlyNumbersRegex = /^[0-9]*$/;
        if (!onlyNumbersRegex.test(control.value)) {
            return {onlyNumbers: true};
        }
        return null;
    };
}