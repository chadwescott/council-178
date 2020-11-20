import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";

interface User {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
}

@Injectable({
  providedIn: "root",
})
export class FirebaseService {
  private usersCollection: AngularFirestoreCollection<User>;
  public users: Observable<User[]>;

  readonly usersKey = "users";

  constructor(private firestore: AngularFirestore) {
    this.usersCollection = firestore.collection(this.usersKey, (ref) =>
      ref.orderBy("lastName")
    );
    this.users = this.usersCollection.valueChanges();
  }

  public addUser(user: User): void {
    this.firestore
      .collection(this.usersKey)
      .add(user)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
