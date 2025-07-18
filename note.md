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

這個練習展示了 ViewModel (TS) 和 View (HTML) 之間的雙向資料同步。

**變更檔案:**
1.  **`src/my-app.ts`**: 
    *   新增一個 `name` 屬性來儲存使用者輸入。
    ```typescript
    export class MyApp {
      public message = 'Aurelia 資料綁定練習';
      public name = '開發者';
    }
    ```

2.  **`src/my-app.html`**: 
    *   新增一個 `<input>`，並使用 `value.bind="name"` 將其值與 `name` 屬性進行**雙向綁定**。
    *   新增一個 `<h2>`，使用 `${name}` **單向綁定**來顯示 `name` 的值。
    ```html
    <h1>${message}</h1>

    <input type="text" value.bind="name">

    <h2>你好, ${name}!</h2>
    ```

**核心概念:**
*   `value.bind="..."`: 雙向綁定。UI 的變動會更新 ViewModel，反之亦然。
*   `${...}`: 單向綁定 (插值)。用於從 ViewModel 讀取值並顯示在 View 中。
