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

**核心概念:**
*   `repeat.for="item of items"`: 列表渲染。為 `items` 陣列中的每一個 `item`，重複渲染其所在的 HTML 元素。

## 練習 5: 列表項目刪除 (List Item Deletion)

**核心概念:**
*   `$index`: 在 `repeat.for` 循環中，Aurelia 提供的一個特殊變數，代表當前循環項目的索引值。

## 練習 6: 樣式美化 (Styling)

這個練習透過新增 CSS 檔案並引入，來改善應用程式的視覺外觀。

**變更檔案:**
1.  **`src/app.css`**: 
    *   新增 `app.css` 檔案，包含基本的樣式設定，例如字體、背景、按鈕、輸入框和列表項目的樣式。

2.  **`src/main.ts`**: 
    *   在應用程式的進入點引入 `app.css` 檔案，使其樣式生效。
    ```typescript
    import Aurelia from 'aurelia';
    import { MyApp } from './my-app';

    import './app.css'; // 引入 CSS 檔案

    Aurelia
      .app(MyApp)
      .start();
    ```

3.  **`index.html`**: 
    *   在 `<body>` 標籤內，將 `<my-app></my-app>` 包裹在一個 `id="app"` 的 `div` 中，以便 CSS 選擇器更精確地應用樣式。
    ```html
    <body>
      <div id="app">
        <my-app></my-app>
      </div>
    </body>
    ```

**核心概念:**
*   **CSS 引入**: 透過 `import './your-style.css';` 在 TypeScript/JavaScript 檔案中引入 CSS，Vite 等打包工具會處理它。
*   **結構化 CSS**: 使用 ID 或 Class 選擇器來針對特定元素應用樣式，保持 CSS 的可維護性。