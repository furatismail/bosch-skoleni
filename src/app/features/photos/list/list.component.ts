import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartSharingService } from '../../../core/services/cart-sharing.service';
import { Photo } from '../../../shared/interfaces/photo.interface';
import { ItemComponent } from './components/item/item.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  photos: Photo[] = [];
  cart = []
  private route = inject(ActivatedRoute);
  private cartSharingService = inject(CartSharingService)
  private cd = inject(ChangeDetectorRef)

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      setTimeout(() => {
        this.photos = data?.['photos']
        this.cd.detectChanges()
      }, 100);
    });
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
