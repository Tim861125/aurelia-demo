# Aurelia 前端框架介紹

Aurelia 是一個現代化、開源的 JavaScript 前端框架，可用於建構網頁、桌面和行動應用程式。它的設計哲學是**以標準為基礎、優雅且不造成干擾**。

---

# Aurelia 專案 (`my-app`)

## 如何執行專案

此專案使用 **Yarn** 作為套件管理器。

1.  **進入專案資料夾:**
    ```bash
    cd my-app
    ```

2.  **啟動開發伺服器:**
    ```bash
    yarn start
    ```
    執行後，終端機會顯示應用程式運行的網址（通常是 `http://localhost:5173`）。

## 專案架構解析

*   **`src/`**: **主要工作目錄**，應用程式的原始碼都存放在此。
    *   `main.ts`: 應用程式的**進入點**。
    *   `my-app.ts`: 根元件的**邏輯**檔案 (TypeScript)。
    *   `my-app.html`: 根元件的**視圖**檔案 (HTML)。
*   **`package.json`**: Node.js 的**設定檔**，定義專案依賴和可執行的 `scripts` 指令。
*   **`yarn.lock`**: 鎖定專案依賴的確切版本，確保團隊開發環境一致。

---

# 練習紀錄

## 練習 1: 資料綁定 (Data Binding)

**核心概念:**
*   `value.bind="..."`: 雙向綁定。UI 的變動會更新 ViewModel，反之亦然。
*   `${...}`: 單向綁定 (插值)。用於從 ViewModel 讀取值並顯示在 View 中。

## 練習 2: 事件綁定 (Event Binding)

**核心概念:**
*   `event.trigger="..."`: 事件綁定。監聽指定的 `event` (如 `click`, `submit`, `input` 等)，並在事件觸發時執行對應的 ViewModel 方法。

## 練習 3: 條件渲染 (Conditional Rendering)

**核心概念:**
*   `if.bind="..."`: 條件渲染。只有當綁定的運算式結果為 `true` 時，元素才會被渲染到 DOM 中。

## 練習 4: 列表渲染 (List Rendering)

這個練習展示了如何根據一個陣列來渲染一個列表。

**變更檔案:**
1.  **`src/my-app.ts`**: 
    *   新增 `tasks` 陣列來存放待辦事項。
    *   新增 `newTask` 字串來綁定輸入框的值。
    *   新增 `addTask()` 方法來處理新增邏輯。
    ```typescript
    export class MyApp {
      // ... (其他屬性)
      public tasks: string[] = ['學習 Aurelia', '建立一個專案', '喝杯咖啡'];
      public newTask = '';

      // ... (其他方法)
      public addTask(): void {
        if (this.newTask) {
          this.tasks.push(this.newTask);
          this.newTask = ''; // 清空輸入框
        }
      }
    }
    ```

2.  **`src/my-app.html`**: 
    *   使用 `repeat.for="task of tasks"` 來遍歷 `tasks` 陣列並渲染 `<li>` 元素。
    *   新增一個表單，其 `submit` 事件綁定到 `addTask()` 方法。
    ```html
    <h3>待辦事項列表</h3>

    <ul>
      <li repeat.for="task of tasks">${task}</li>
    </ul>

    <form submit.trigger="addTask()">
      <input type="text" value.bind="newTask" placeholder="新增一個任務">
      <button type="submit">新增</button>
    </form>
    ```

**核心概念:**
*   `repeat.for="item of items"`: 列表渲染。為 `items` 陣列中的每一個 `item`，重複渲染其所在的 HTML 元素。