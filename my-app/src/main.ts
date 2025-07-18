import Aurelia from 'aurelia';
import { MyApp } from './my-app';
import { TodoList } from './todo-list';

import './app.css'; // 引入 CSS 檔案

Aurelia
  .app(MyApp)
  .register(TodoList)
  .start();
