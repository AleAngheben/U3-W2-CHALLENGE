import { Injectable } from '@angular/core';
import { Listitem } from '../models/listitem';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  todoList: Listitem[] = [];

  // addElement(item: Listitem) {
  //   this.todoList.push(item);
  // }
  addElement(item: Listitem): Promise<Listitem> {
    return new Promise<Listitem>((resolve, reject) => {
      setTimeout(() => {
        this.todoList.push(item);
        resolve(item);
      }, 2000);
    });
    this.todoList.push(item);
  }

  constructor() {}
}
