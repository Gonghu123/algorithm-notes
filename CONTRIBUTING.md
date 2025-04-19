# 💡 如何参与贡献：算法笔记网页项目说明

欢迎参与维护和扩展这个算法题笔记网站！本项目用于整理各类算法题目的题解和笔记，便于自己回顾，也便于他人参考。

---

## 📁 项目结构说明

---
📁 根目录/ ├── index.html 👉 首页，题目导航页面 ├── script.js 👉 可选脚本，用于交互或增强功能 ├── style.css 👉 网页样式 └── 📁 notes/ 👉 存放每一道题的 HTML 笔记 ├── leetcode11.html ├── leetcode70.html └── ...
## ✍ 如何添加一个新题目的笔记

请按照以下步骤进行：

1. **进入 `notes/` 文件夹**
   - 文件命名格式：`leetcode题号.html`
   - 例子：`leetcode122.html`

2. **复制并修改以下 HTML 模板：**

```html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <title>Leetcode 题号 题目名</title>
  <link rel="stylesheet" href="../style.css">
   <!-- 引入 highlight.js 样式（你也可以换其它主题） -->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css">

   <!-- 引入 highlight.js 脚本 -->
   <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>

   <!-- 自动初始化高亮 -->
   <script>hljs.highlightAll();</script>

</head>
<body>
  <h1>Leetcode 题号 题目名</h1>
  <p><strong>题目分类：</strong>（如：动态规划、贪心）</p>
  <p><strong>题目描述：</strong>（可以粘贴题目内容）</p>
  <p><strong>解题思路：</strong>（简要说明你的思路）</p>

  <h2>💻 代码示例：</h2>
  <pre><code class="language-python">
# 你的代码（例如 Python/C++）
  </code></pre>

  <p><a href="../index.html">⬅ 返回首页</a></p>
</body>
</html>

<ul>
  <li><a href="notes/leetcode122.html">Leetcode 122 买卖股票的最佳时机</a></li>
</ul>
3.编辑 index.html，添加链接到新笔记：在合适位置添加一行链接，例如：
<ul>
  <li><a href="notes/leetcode122.html">Leetcode 122 买卖股票的最佳时机</a></li>
</ul>

