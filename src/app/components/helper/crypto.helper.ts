import {Injectable} from '@angular/core';
import crypto from 'crypto-js';

@Injectable({
    providedIn: 'root'
})
export class CryptoHelper {
    private _key: string = '$2y$10$Fnu8aZYxFNenSTZr18D36.DkjOEmCOpARwL0xUH0RXpaXyjZDNGgm';

    encrypt(item: any): string {
        return crypto.AES.encrypt(JSON.stringify(item), this._key).toString();
    }

    decrypt(item: string): any {
        return JSON.parse(crypto.AES.decrypt(item.toString(), this._key).toString(crypto.enc.Utf8));
    }
}
