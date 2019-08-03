// JavaScript Document
var animData = {
        container: document.getElementById('bm'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'image/render/asia/data.json'
    };
    var anim = bodymovin.loadAnimation(animData);;
window.onresize = anim.resize.bind(anim);


var animData = {
        container: document.getElementById('bm2'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'image/render/africa/data.json'
    };
    var anim = bodymovin.loadAnimation(animData);;
window.onresize = anim.resize.bind(anim);




var animData = {
        container: document.getElementById('bm3'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'image/render/australia/data.json'
    };
    var anim = bodymovin.loadAnimation(animData);;
window.onresize = anim.resize.bind(anim);

var animData = {
        container: document.getElementById('bm4'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'image/render/antractica/data.json'
    };
    var anim = bodymovin.loadAnimation(animData);;
window.onresize = anim.resize.bind(anim);



var animData = {
        container: document.getElementById('bm5'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'image/render/america/data.json'
    };
    var anim = bodymovin.loadAnimation(animData);;
window.onresize = anim.resize.bind(anim);



var animData = {
        container: document.getElementById('bm6'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'image/render/europe/data.json'
    };
    var anim = bodymovin.loadAnimation(animData);;
window.onresize = anim.resize.bind(anim);
