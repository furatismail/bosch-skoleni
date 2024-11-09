// delayed-preloading-strategy.ts
import { Injectable, Type } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";
import { delay, switchMap } from "rxjs/operators";

@Injectable({ providedIn: "root" })
// route: The route to be preloaded.
// load: A function that returns an observable which performs the actual loading.
export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<Type<any>>): Observable<null | Type<any>> {
    const preloadDelay = route.data?.['preloadDelay'] ?? 0;
    console.log(route, 'route')
    console.log(preloadDelay, 'preloadDelay')
    return route.data?.['preload'] === true ? of(null).pipe(
      delay(preloadDelay),
      switchMap(load)
    ) : of(null);
  }
}
