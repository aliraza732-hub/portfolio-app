"use client";

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      style={{ position: "absolute", left: "-9999px", top: "auto", width: "1px", height: "1px", overflow: "hidden" }}
      onFocus={e => {
        e.currentTarget.style.cssText =
          "position:fixed;top:16px;left:16px;z-index:9999;padding:12px 20px;" +
          "background:var(--gold);color:var(--bg);border-radius:8px;" +
          "font-weight:500;text-decoration:none;width:auto;height:auto;overflow:visible;";
      }}
      onBlur={e => {
        e.currentTarget.style.cssText =
          "position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden;";
      }}
    >
      Skip to content
    </a>
  );
}