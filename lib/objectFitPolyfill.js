export default () => {
  if (typeof document !== 'undefined' && !('objectFit' in document.documentElement.style)) {
    document.addEventListener('DOMContentLoaded', function () {
      Array.prototype.forEach.call(document.getElementsByClassName('object-fit'), (element) => {
        if (!element.src) {
          return;
        }
        const source = element.src;
        element.removeAttribute('src'); 
        element.removeAttribute('srcset');
        element.style.background = `url("${source}") no-repeat 50% / cover`;
        element.style.color = 'transparent'; 
      })
    });
  }
}