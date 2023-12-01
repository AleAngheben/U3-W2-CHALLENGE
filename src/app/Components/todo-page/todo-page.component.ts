import { Component, OnInit } from '@angular/core';
import { Listitem } from 'src/app/models/listitem';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
})
export class TodoPageComponent implements OnInit {
  inputValue: string = '';

  counter: number = 0;

  newItem: Listitem = {
    id: 1,
    title: '',
    completed: false,
  };

  items: Listitem[] = [];

  constructor(private serv: ListService) {}

  async addElement() {
    this.newItem.title = this.inputValue;
    this.newItem.id = this.newItem.id += this.counter;

    await this.serv.addElement(this.newItem);
    this.items = this.serv.todoList;

    console.log(this.newItem);
    console.log(this.serv.todoList);

    this.counter++;

    this.inputValue = '';
    this.newItem = { id: 1, title: '', completed: false };
  }

  changeStatus(item: Listitem) {
    item.completed = !item.completed;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.items = this.serv.todoList;
    }, 2000);
  }
}
