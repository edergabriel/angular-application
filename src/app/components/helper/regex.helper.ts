import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RegexHelper {
    letterNumberPattern: RegExp = /^[a-zA-Z0-9áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
    passwordPattern: RegExp = /^(?=.*[0-9])(?=.*[a-z])([a-zA-Z0-9]{0,})$/;
    cpfCnpjPattern: RegExp = /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/;
    hourPattern: RegExp = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

    maskCep: (string | RegExp)[] = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
    maskPhone: (string | RegExp)[] = ['(', /[0-9]/, /[0-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    maskCellPhone: (string | RegExp)[] = ['(', /[0-9]/, /[0-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/];
    maskCpf: (string | RegExp)[] = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
    maskCnpj: (string | RegExp)[] = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
    maskYear: (string | RegExp)[] = [/\d/, /\d/, /\d/, /\d/];
    maskDate: (string | RegExp)[] = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
    maskHouseNumber: (string | RegExp)[] = [/\d/, /\d/, /\d/, /\d/, /\d/];
    maskHour: (string | RegExp)[] = [/\d/, /\d/, ':', /\d/, /\d/];
    maskPassword: (string | RegExp)[] = [/[A-Za-z0-9]/, /[A-Za-z0-9]/, /[A-Za-z0-9]/, /[A-Za-z0-9]/, /[A-Za-z0-9]/, /[A-Za-z0-9]/, /[A-Za-z0-9]/, /[A-Za-z0-9]/];

}