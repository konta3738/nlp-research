// lang-switch.js

// 1. 言語リスト（ファイル名と表示名）
const LANGUAGES = [
  { file: "index.html", code: "ja", label: "日本語" },
  { file: "en.html",    code: "en", label: "English" },
  { file: "de.html",    code: "de", label: "Deutsch" },
  { file: "fr.html",    code: "fr", label: "Français" },
  { file: "es.html",    code: "es", label: "Español" },
  { file: "pt.html",    code: "pt", label: "Português" },
  { file: "nl.html",    code: "nl", label: "Nederlands" },
  { file: "it.html",    code: "it", label: "Italiano" },
  { file: "da.html",    code: "da", label: "Dansk" },
  { file: "no.html",    code: "no", label: "Norsk" },
  { file: "sv.html",    code: "sv", label: "Svenska" },
  { file: "tr.html",    code: "tr", label: "Türkçe" },
  { file: "ru.html",    code: "ru", label: "Русский" },
  { file: "id.html",    code: "id", label: "Bahasa Indonesia" },
  { file: "ko.html",    code: "ko", label: "한국어" },
  { file: "zh.html",    code: "zh", label: "中文" },
  { file: "tl.html",    code: "tl", label: "Tagalog" },
];

// 2. 今開いているページのファイル名を取得
function getCurrentFileName() {
  const path = window.location.pathname;
  const last = path.split("/").filter(Boolean).pop() || "";
  // ルート / のときは index.html とみなす
  if (last === "" || !last.includes(".")) {
    return "index.html";
  }
  return last;
}

// 3. メニューHTMLを生成して挿入
(function initLangSwitch() {
  const container = document.getElementById("lang-switch");
  if (!container) return;

  const currentFile = getCurrentFileName();

  // aタグを全部くっつけて1個のHTML文字列にする
  const linksHtml = LANGUAGES.map(lang => {
    const isActive = (lang.file === currentFile);
    const activeClass = isActive ? " active-lang" : "";
    return `<a href="${lang.file}" class="lang-link${activeClass}">${lang.label}</a>`;
  }).join("\n");

  container.innerHTML = linksHtml;
})();
