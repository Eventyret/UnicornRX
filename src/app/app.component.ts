import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'UnicornRX';
  constructor(private afs: AngularFirestore) {}
  ngOnInit(): void {
    this.afs
      .collection('test')
      .snapshotChanges()
      .subscribe((data) => {
        console.log(data);
      });
  }
}
