var posts=["2026/06/23/hello-world/","2025/04/06/markdown语法/","2026/06/23/hexo部署/","2026/06/23/git/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };