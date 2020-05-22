import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { BehaviorSubject } from "rxjs/index";
import { pluck, tap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class UtilHelper {
    private apis = environment.APIS;
    menuClickBehaviorSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

    constructor(private httpClinet: HttpClient) {
    }

    splitMoney(money: string): { value: string, decimal: string } {
        let values = money.split(',');
        values[0] = values[0].replace('R$', '');

        return {
            value: values[0],
            decimal: values[1] || '00'
        };
    }

    getLocation(callback: (position: Position) => void) {
        if (navigator.geolocation) {
            return navigator.geolocation.getCurrentPosition(callback);
        } else {
            alert("Geolocation is not supported by this browser.");
            return null;
        }
    }

    removeAccent(text: string): string {
        let modifiedText = text.toLowerCase().trim();
        modifiedText = modifiedText.replace(new RegExp('\\s', 'g'), '');
        modifiedText = modifiedText.replace(new RegExp('[àáâãäå]', 'g'), 'a');
        modifiedText = modifiedText.replace(new RegExp('æ', 'g'), 'ae');
        modifiedText = modifiedText.replace(new RegExp('ç', 'g'), 'c');
        modifiedText = modifiedText.replace(new RegExp('[èéêë]', 'g'), 'e');
        modifiedText = modifiedText.replace(new RegExp('[ìíîï]', 'g'), 'i');
        modifiedText = modifiedText.replace(new RegExp('ñ', 'g'), 'n');
        modifiedText = modifiedText.replace(new RegExp('[òóôõö]', 'g'), 'o');
        modifiedText = modifiedText.replace(new RegExp('œ', 'g'), 'oe');
        modifiedText = modifiedText.replace(new RegExp('[ùúûü]', 'g'), 'u');
        modifiedText = modifiedText.replace(new RegExp('[ýÿ]', 'g'), 'y');
        modifiedText = modifiedText.replace(new RegExp('\\W', 'g'), '');
        return modifiedText;
    }
}
