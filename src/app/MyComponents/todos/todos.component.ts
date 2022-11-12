import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  localItem: any;
  tasks: Todo[] = [];
  constructor(private taskService: TaskService) {
    this.localItem = localStorage.getItem('todos');
    if (this.localItem == null) {
      this.tasks = [];
    } else {
      this.tasks = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTodo(todo: Todo) {
    this.taskService
      .deleteTask(todo)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== todo.id))
      );

    console.log(todo);
    //const index = this.tasks.indexOf(todo);
    //this.todos.splice(index, 1);
    this.tasks = this.tasks.filter((item) => item.id != todo.id);
    console.log('delete trigger', todo);
    localStorage.setItem('todos', JSON.stringify(this.tasks));
  }
  addTodo(todo: Todo) {
    console.log(todo);
    this.taskService.addTask(todo).subscribe((todo) => this.tasks.push(todo));
    //this.tasks.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.tasks));
  }
  toggleTodo(todo: Todo) {
    const index = this.tasks.indexOf(todo);
    console.log(index);
    this.tasks[index].active = !this.tasks[index].active;
    localStorage.setItem('todos', JSON.stringify(this.tasks));

    console.log(todo);
    // }
  }
}
