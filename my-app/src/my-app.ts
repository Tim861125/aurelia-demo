export class MyApp {
  public message = 'Aurelia 資料綁定練習';
  public name = '開發者';
  public showGreeting = true;

  public tasks: string[] = ['學習 Aurelia', '建立一個專案', '喝杯咖啡'];
  public newTask = '';

  public clearName(): void {
    this.name = '';
  }

  public toggleGreeting(): void {
    this.showGreeting = !this.showGreeting;
  }

  public addTask(): void {
    if (this.newTask) {
      this.tasks.push(this.newTask);
      this.newTask = ''; // 清空輸入框
    }
  }
}
