import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MessageHelper {
    constructor() {
    }

    success(title: string, message: string, ok?: () => void) {
        alert("title");
    }

    error(title: string, message: string, ok?: () => void, close: () => void = () => {}) {
        alert("aa");
    }
}