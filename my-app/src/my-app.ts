export class MyApp {
  public message = 'Aurelia 資料綁定練習';
  public name = '開發者';
  public showGreeting = true;

  public clearName(): void {
    this.name = '';
  }

  public toggleGreeting(): void {
    this.showGreeting = !this.showGreeting;
  }
}
