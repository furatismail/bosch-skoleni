import { Component, inject, OnInit } from '@angular/core';
import { CartSharingService } from '../../../core/services/cart-sharing.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [JsonPipe, AsyncPipe],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent implements OnInit {
  private cartSharingService = inject(CartSharingService)
  cart$: Observable<Array<string>>

  ngOnInit() {
    this.cart$ = this.cartSharingService.cartSource$
  }
}
