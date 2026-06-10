/**
 * Inline, render-blocking script that applies the saved theme BEFORE first
 * paint so there is no flash of the wrong theme.
 *
 * Pharmacy sites read best light: LIGHT is the default for everyone.
 * Dark applies only when the visitor explicitly chose it via the toggle
 * (stored preference) — we intentionally ignore the OS preference.
 */
export default function ThemeScript() {
  const code = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`;
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
