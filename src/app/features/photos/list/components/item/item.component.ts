import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Photo } from '../../../../../shared/interfaces/photo.interface';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [RouterLink, JsonPipe],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input({ required: true }) photo: Photo;
  @Output() selectPhotoId = new EventEmitter<number>()

  getPhoto(photoId: number): void {
    this.selectPhotoId.emit(photoId)
  }
}
