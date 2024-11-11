import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../../../shared/interfaces/photo.interface';
import { ItemComponent } from './components/item/item.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ItemComponent, NgClass],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  private route = inject(ActivatedRoute);
  photos!: Photo[];
  cart = []


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
  }
}
