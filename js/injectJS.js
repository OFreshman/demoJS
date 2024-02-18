const headDom = document.getElementsByTagName("head")[0];

const randomTime = new Date().getTime();

// 添加 env.js
const js1 = document.createElement("script");
// js1.src = `./js/es01.js?v=${randomTime}`;
js1.src = `https://gitee.com/Yqt_18/Learn/blob/master/Test/js/es01.js?v=${randomTime}`;
headDom.appendChild(js1);

// 添加 request.js
const js2 = document.createElement("script");
// js2.src = `./js/es02.js?v=${randomTime}`;
js2.src = `https://gitee.com/Yqt_18/Learn/blob/master/Test/js/es02.js?v=${randomTime}`;

headDom.appendChild(js2);


// 添加 api.js
const js3 = document.createElement("script");
// js3.src = `./js/es03.js?v=${randomTime}`;
js3.src = `https://gitee.com/Yqt_18/Learn/blob/master/Test/js/es03.js?v=${randomTime}`;
headDom.appendChild(js3);


window.onload = function () {
  const bodyDom = document.getElementsByTagName("body")[0];
  // 添加 index.js
  const js4 = document.createElement("script");
  // js4.src = `./js/es02.js?v=${randomTime}`;
  js4.src = `https://gitee.com/Yqt_18/Learn/blob/master/Test/js/index.js?v=${randomTime}`;
  bodyDom.appendChild(js4);
};


/**
 * 动态注入脚本，并监听执行完毕事件
 * @param {string} src 
 * @param {() => void} onload 
 */
 function injectJS(src, onload) {
  var loaded = Array.from(document.scripts).some(it => it.getAttribute('src') === src); // Warn：script.src !== script.getAttribute('src')
  if (loaded) {
      typeof onload === 'function' && onload();
      return;
  }
  var script = document.createElement('script');
  script.src = src;
  document.head.insertBefore(script, document.head.firstElementChild);
  script.addEventListener('load', (ev) => {
      typeof onload === 'function' && onload();
  });
}