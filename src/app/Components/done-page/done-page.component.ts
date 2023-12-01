import { Component, OnInit } from '@angular/core';
import { Listitem } from 'src/app/models/listitem';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-done-page',
  templateUrl: './done-page.component.html',
  styleUrls: ['./done-page.component.scss'],
})
export class DonePageComponent implements OnInit {
  items: Listitem[] = [];
  constructor(private serv: ListService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.items = this.serv.todoList;
    }, 2000);
  }
}
