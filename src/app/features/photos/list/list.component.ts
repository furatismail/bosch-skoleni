import { NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartSharingService } from '../../../core/services/cart-sharing.service';
import { Photo } from '../../../shared/interfaces/photo.interface';
import { ItemComponent } from './components/item/item.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ItemComponent, NgClass],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  photos!: Photo[];
  cart = []
  private route = inject(ActivatedRoute);
  private cartSharingService = inject(CartSharingService)

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.photos = data?.['photos'];
    })
  }
  onSelectPhotoId(photoId: number): void {
    if (this.cart.includes(photoId)) {
      this.cart = this.cart.filter((id) => id !== photoId);
    } else {
      this.cart = [...this.cart, photoId];
    }

    this.cartSharingService.changeState(this.cart)
  }
}
