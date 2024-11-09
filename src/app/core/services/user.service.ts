import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../../shared/interfaces/user.interface";

@Injectable({ providedIn: 'root' })
export class UserService {
    private httpClient = inject(HttpClient)

    getUsers(): Observable<Array<User>> {
        return this.httpClient.get<Array<User>>('https://63bd718118bc301c0267e1e0.mockapi.io/api/users')
    }

    getUser(userId: string): Observable<User> {
        return this.httpClient.get<User>(`https://63bd718118bc301c0267e1e0.mockapi.io/api/users/${userId}`)
    }
}