// src/app/photo-resolver.ts
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Photo } from '../../shared/interfaces/photo.interface';
import { PhotoService } from '../services/photo.service';

export const photosResolver: ResolveFn<Observable<Photo[]>> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    const photoService = inject(PhotoService);
    return photoService.getAll();
};


export const photoByIdResolver: ResolveFn<Observable<Photo>> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    const photoService = inject(PhotoService);
    const photoId = route.paramMap.get('photoId');
    if (photoId) {
        return photoService.get(photoId);
    }

    return of(null as any); // or handle appropriately
};
