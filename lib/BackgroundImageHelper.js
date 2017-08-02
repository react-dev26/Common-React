export default class BackgroundImageHelper {
  constructor(photo) {
    if (typeof document !== 'undefined') {
      this.style = {
        backgroundImage: `url('${photo.oneXPhoto.url}')`
      }
      if (this.cssPropertyValueSupported('background-image', `-webkit-image-set(url("${photo.oneXPhoto.url}") 1x)`) && photo.twoXPhoto && photo.twoXPhoto.url) {
        this.style.backgroundImage = `-webkit-image-set(url("${photo.oneXPhoto.url}") 1x, url("${photo.twoXPhoto.url}") 2x)`
      }
    }
  }
  cssPropertyValueSupported(prop, value) {
    const element = document.createElement('div');
    element.style[prop] = value;
    return element.style[prop] === value;
  }
}
