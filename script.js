// Program Dark / Light Mode Theme Switcher interactivity from scratch
const btn = document.getElementById('themeBtn');
if (localStorage.getItem('demoTheme') === 'dark') {
  document.body.classList.add('dark');  
}
btn.addEventListener('click', () => {
document.body.classList.toggle('dark');
const mode = document.body.classList.contains('dark') ? 'dark' : 'light';
localStorage.setItem('demoTheme', mode);
});
