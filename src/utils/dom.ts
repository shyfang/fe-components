export const isBrowser = !!(
  typeof window !== 'undefined' &&
  window &&
  typeof document !== 'undefined'
);

const cssRegex = /\.css$/i;
const resourceRegex = /\.(css|js)$/i;
const resourceLoadedList = new Set<string>();

export const loadResource = (
  url: string,
  attrs: any = {},
): Promise<void> | void => {
  if (resourceRegex.test(url)) {
    if (!resourceLoadedList.has(url)) {
      resourceLoadedList.add(url);
      return new Promise((resolve, reject) => {
        let el: any;
        const isCss = cssRegex.test(url);
        if (isCss) {
          el = document.createElement('link');
          Object.keys(attrs).forEach((key) => {
            el.setAttribute(key, attrs[key]);
          });
          el.rel = 'stylesheet';
          el.href = url;
        } else {
          el = document.createElement('script');
          el.setAttribute('data-namespace', url);
          Object.keys(attrs).forEach((key) => {
            el.setAttribute(key, attrs[key]);
          });
          el.src = url;
        }

        el.onload = resolve;
        el.onerror = reject;

        if (isCss) {
          const head = document.getElementsByTagName('head')[0];
          head.appendChild(el);
        } else {
          document.body.appendChild(el);
        }
      });
    } else {
      Promise.resolve();
    }
  } else {
    Promise.reject('请输入js/css文件地址');
  }
};
