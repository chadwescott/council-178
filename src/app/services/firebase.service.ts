import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface User {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
}

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {
    private usersCollection: AngularFirestoreCollection<User>;
    public users: Observable<User[]>;

    constructor(private firestore: AngularFirestore) {
        this.usersCollection = firestore.collection('users', ref => ref.orderBy('lastName'));
        this.users = this.usersCollection.valueChanges();
    }
}