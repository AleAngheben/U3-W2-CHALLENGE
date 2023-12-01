import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { TodoPageComponent } from './Components/todo-page/todo-page.component';
import { DonePageComponent } from './Components/done-page/done-page.component';

const routes: Route[] = [
  { path: '', component: TodoPageComponent },
  {
    path: 'done-page',
    component: DonePageComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodoPageComponent,
    DonePageComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
