import {Injectable} from '@angular/core';
import {AbstractControl, FormGroup, ValidationErrors} from '@angular/forms';
import {ValidatorFn} from '@angular/forms';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import {RegexHelper} from './regex.helper';


@Injectable({
    providedIn: 'root'
})
export class ValidationFormHelper extends RegexHelper {
    form: FormGroup;

    constructor() {
        super();
    }

    checkValidTouched(field: string): boolean {
        return !this.form.get(field).valid &&
            (this.form.get(field).touched || this.form.get(field).dirty);
    }

    applyCssError(field: string):
        { 'parsley-error': boolean, 'parsley-success': boolean } {
        return {
            'parsley-error': this.checkValidTouched(field),
            'parsley-success': this.form.get(field).valid
        };
    }

    checkValidationsForm(formGroup: FormGroup): void {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            control.markAsDirty();
            if (control instanceof FormGroup) {
                this.checkValidationsForm(control);
            }
        });
    }

    applyCssEqualError(parent: string, field: string): { 'parsley-error': boolean } {
        return {
            'parsley-error': (this.checkValidTouched(parent + '.' + field) || (!this.checkValidTouched(parent + '.' + field) &&
                this.form.get(parent).hasError('notEqual')) && this.form.get(parent + '.' + field).value)
        };
    }

    checkPasswordEqual(c: AbstractControl): ValidationErrors | null {
        if (c.get('password').value !== c.get('confirmPassword').value) {
            return {notEqual: true};
        }
    }

    checkEmailEqual(c: AbstractControl): ValidationErrors | null {
        if (c.get('email').value !== c.get('confirmEmail').value) {
            return {notEqual: true};
        }
    }

    applyCssCheck(has: number, value: number):
        { 'button-radio-disabled': boolean, 'button-radio-checked': boolean } {
        return {
            'button-radio-disabled': (has === value || has <= -1),
            'button-radio-checked': has === ((value === 0) ? 1 : 0)
        };
    }

    checkCpfCnpj(cpfFunc, cnpjFunc): ValidatorFn | null {
        return (c: AbstractControl) => {
            if (!cpfFunc(c).cpfInvalid && !cnpjFunc(c).cnpjInvalid) {
                return {cpfCnpjInvalid: true};
            }
        };

    }

    checkYear(c: AbstractControl): ValidationErrors | null {
        const year = new Date().getFullYear();

        if (c.value < 1900 || c.value > year) {
            return {notValid: true};
        }
    }


    checkBranch(c: AbstractControl): ValidationErrors | null {      
        const selectedOrderIds = c.value
        .filter(v => v == true);
        
        if (selectedOrderIds.length == 0) {
            return {branchInvalid: false};
        }
    }

    checkWallet(c: AbstractControl): ValidationErrors | null {      
        const selectedOrderIds = c.value
        .filter(v => v == true);

        if (selectedOrderIds.length == 0) {
            return {branchInvalid: false};
        }
    }

    checkInsuranceType(c: AbstractControl): ValidationErrors | null {
        if (c.value.auto == false && c.value.property == false) {
            return {insuranceTypeInvalid: false};
        }
    }

    checkHour(c: AbstractControl): ValidationErrors | null {
        const hourPattern: RegExp = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
        if (!hourPattern.test(c.value)) {
            return {notValid: true};
        }
    }



    checkDateWithHour(date:string): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      
        const hourPattern: RegExp = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
        if (!hourPattern.test(c.value)) {
            return {notValid: true};
        }

        moment.locale('pt-BR');
        let inputDate = moment(date + ' ' + c.value, 'DD/MM/YYYY HH:mm');
        let actualDate = moment(moment().format('DD/MM/YYYY HH:mm'),'DD/MM/YYYY HH:mm');

        if (inputDate.isAfter(actualDate)) {
            return {notValidFutureDate: true};
        }

    };
}



    // checkDateWithHour(c: AbstractControl, date: string): ValidationErrors | null {
    //     const hourPattern: RegExp = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    //     if (!hourPattern.test(c.value)) {
    //         return {notValid: true};
    //     }

    //     moment.locale('pt-BR');
    //     let actualDate = moment(moment(), 'DD/MM/YYYY HH:mm');
    //     let inputDate = moment(date + ' ' + c.value, 'DD/MM/YYYY HH:mm');

    //     console.log(actualDate);
    //     console.log(inputDate);

    // }

    checkDate(c: AbstractControl): ValidationErrors | null {
        const regex = /(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/;

        if (!regex.test(c.value)) {
            return {notValid: true};
        }
        else {
            moment.locale('pt-BR');
            let inputDate = moment(c.value, 'DD/MM/YYYY');

            if (inputDate.isAfter(moment(), 'day')) {
                return {notValidFutureDate: true};
            }

        }
    }

    checkOverEighteen(c: AbstractControl): ValidationErrors | null {
        const regex = /(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/;

        if (!regex.test(c.value)) {
            return {notValid: true};
        }
        else {
            moment.locale('pt-BR');
            const inputDate = moment(c.value, 'DD/MM/YYYY');

            if (inputDate.isAfter(moment().add(-18, 'years'), 'day')) {
                return {notValidOverEighteen: true};
            }

        }
    }

    checkLetterNumber(c: AbstractControl | string): ValidationErrors | string | null {
        const regex: RegExp = /^[a-zA-Z0-9áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;

        const value = c instanceof AbstractControl ? c.value : c;
        if (!regex.test(value.substr(-1))) {
            if (c instanceof AbstractControl) {
                return {notValid: true};
            }

            return value
                .toString()
                .replace(value.substr(-1).toString(), '');
        }
    }

    checkCpf(c: AbstractControl): ValidationErrors | null {
        if (c.value) {
            const cpf = c.value.replace(/[^\d]+/g, '');
            let add = 0;
            let i;

            if ('' === cpf) {
                return {cpfInvalid: !1};
            }

            if (11 !== cpf.length || '00000000000' === cpf || '11111111111' === cpf || '22222222222' === cpf || '33333333333' === cpf || '44444444444' === cpf || '55555555555' === cpf || '66666666666' === cpf || '77777777777' === cpf || '88888888888' === cpf || '99999999999' === cpf) {
                return {cpfInvalid: !1};
            }
            for (add = 0, i = 0; i < 9; i++) {
                add += parseInt(cpf.charAt(i)) * (10 - i);
            }
            let rev = 11 - add % 11;
            if ((10 === rev || 11 === rev) && (rev = 0), rev !== parseInt(cpf.charAt(9))) {
                return {cpfInvalid: !1};
            }
            for (add = 0, i = 0; i < 10; i++) {
                add += parseInt(cpf.charAt(i)) * (11 - i);
            }

            return {cpfInvalid: (rev = 11 - add % 11, (10 === rev || 11 === rev) && (rev = 0), rev !== parseInt(cpf.charAt(10)) ? !1 : !0)};
        }
        return {cpfInvalid: true};
    }

    checkCnpj(c: AbstractControl): ValidationErrors | null {
        var cnpj = c.value.replace(/[^0-9]/g, '')
            , len = cnpj.length - 2
            , numbers = cnpj.substring(0, len)
            , digits = cnpj.substring(len)
            , add = 0
            , pos = len - 7
            , invalidCNPJ = [
                '00000000000000',
                '11111111111111',
                '22222222222222',
                '33333333333333',
                '44444444444444',
                '55555555555555',
                '66666666666666',
                '77777777777777',
                '88888888888888',
                '99999999999999'
            ]
            , result
        ;
        var i = 0;

        if (cnpj.length < 11 || invalidCNPJ.indexOf(cnpj) !== -1) {
            return {cnpjInvalid: false};
        }

        for (i = len; i >= 1; i--) {
            add = add + parseInt(numbers.charAt(len - i)) * pos--;
            if (pos < 2) {
                pos = 9;
            }
        }

        result = (add % 11) < 2 ? 0 : 11 - (add % 11);
        if (result != digits.charAt(0)) {
            return {cnpjInvalid: false};
        }

        len = len + 1;
        numbers = cnpj.substring(0, len);
        add = 0;
        pos = len - 7;

        for (i = 13; i >= 1; i--) {
            add = add + parseInt(numbers.charAt(len - i)) * pos--;
            if (pos < 2) {
                pos = 9;
            }
        }

        result = (add % 11) < 2 ? 0 : 11 - (add % 11);
        if (result != digits.charAt(1)) {
            return {cnpjInvalid: false};
            ;
        }

        return {cnpjInvalid: true};
    }
}