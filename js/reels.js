document.querySelectorAll('video').forEach(v=>{
const o=new IntersectionObserver(e=>{
e.forEach(x=>x.isIntersecting?v.play():v.pause())
},{threshold:.75});
o.observe(v);
});