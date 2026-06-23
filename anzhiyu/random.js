var posts=["2026/06/23/git/","2026/06/23/hello-world/","2026/06/23/hexo部署/","2025/04/06/markdown语法/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };