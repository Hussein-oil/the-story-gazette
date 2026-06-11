/** @file Blog page behaviour: dark/light theme toggle. */
(function(){
  var btn=document.getElementById("themeToggle");
  if(!btn)return;
  var html=document.documentElement;
  setTimeout(function(){html.classList.add('theme-ready');},40);
  btn.onclick=function(){
    var dark=html.dataset.theme==='dark';
    html.dataset.theme=dark?'':'dark';
    localStorage.setItem('nh-theme',dark?'light':'dark');
  };
})();
