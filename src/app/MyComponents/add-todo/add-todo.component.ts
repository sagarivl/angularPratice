import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  title: any;
  desc: any;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    const todo = {
      id: new Date().getTime(),
      title: this.title,
      desc: this.desc,
      active: true,
    };
    this.todoAdd.emit(todo);
    this.title = '';
    this.desc = '';
  }
}
