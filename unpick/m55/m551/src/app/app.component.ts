import { Component } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: FirebaseListObservable<any[]>;
  item: FirebaseObjectObservable<any>;

  constructor(db: AngularFireDatabase) {
    this.items = db.list('/item');
    this.item = db.object('/item');

  }
  saveFirstName(firstName: string) {
    this.item.set({ firstname: firstName });
  }
  saveLastName(lastName: string) {
    this.item.set({ lastname: lastName });
  }
  delete() {
    this.item.remove();
  }
}
