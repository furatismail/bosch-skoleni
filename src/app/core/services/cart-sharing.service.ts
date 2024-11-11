import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartSharingService {
    private cartSubject = new BehaviorSubject<string[]>([]);
    public cartSource$ = this.cartSubject.asObservable();

    constructor() { }

    changeState(cart: string[]) {
        this.cartSubject.next(cart);
    }
}
