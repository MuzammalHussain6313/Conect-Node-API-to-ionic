import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.data = this.http.get('https://jsonplaceholder.typicode.com/posts');
    this.data.subscribe(data => {
      this.result = data;
    });
  }

  result: any = [];
  data: Observable<any>;
  clicked() {
    this.data = this.http.get('https://jsonplaceholder.typicode.com/posts');
    this.data.subscribe(data => {
      console.log(data);
    });
  }
}
