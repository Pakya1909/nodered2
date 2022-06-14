import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nodered';

  input = [
    'inject' ,'catch','mqtt','http','websocket','tcp','udp','serial'
  ]

  output = [
    'inject' ,'catch','mqtt'
  ]

  function = [
    'function','exec'
  ]
 
  social = [
    'catch','mqtt','http','websocket','tcp','udp'
  ]

  storage = [
    'websocket','tcp','udp','serial'
  ]

  analysis = [
    'inject' ,'catch','udp','serial'
  ]

  advanced = [
    'http','websocket','tcp','udp','serial'
  ]

  nameofthefillernode : string = ''

  nameoftheitem(item:string)
  {
    this.nameofthefillernode = item
  }

  tabs = ['flow-1'];
  selected = new FormControl(0);

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('Flow-'+ this.tabs.length);

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}
