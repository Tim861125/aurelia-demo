export class TodoList {
  public tasks: string[] = ['學習 Aurelia', '建立一個專案', '喝杯咖啡'];
  public newTask = '';

  public addTask(): void {
    if (this.newTask) {
      this.tasks.push(this.newTask);
      this.newTask = ''; // 清空輸入框
    }
  }

  public removeTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}
