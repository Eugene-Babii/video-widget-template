export const styles = `
@font-face {
  font-family: 'swiper-icons';
  src: url('data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA');
  font-weight: 400;
  font-style: normal;
}
/* FONT_END */
:root {
  --swiper-theme-color: #007aff;
  /*
  --swiper-preloader-color: var(--swiper-theme-color);
  --swiper-wrapper-transition-timing-function: initial;
  */
}
.swiper,
swiper-container {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  /* Fix of Webkit flickering */
  z-index: 1;
  display: block;
}
.swiper-vertical > .swiper-wrapper {
  flex-direction: column;
}
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);
  box-sizing: content-box;
}
.swiper-android .swiper-slide,
.swiper-wrapper {
  transform: translate3d(0px, 0, 0);
}
.swiper-horizontal {
  touch-action: pan-y;
}
.swiper-vertical {
  touch-action: pan-x;
}
.swiper-slide,
swiper-slide {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  transition-property: transform;
  display: block;
}
.swiper-slide-invisible-blank {
  visibility: hidden;
}
/* Auto Height */
.swiper-autoheight,
.swiper-autoheight .swiper-slide {
  height: auto;
}
.swiper-autoheight .swiper-wrapper {
  align-items: flex-start;
  transition-property: transform, height;
}
.swiper-backface-hidden .swiper-slide {
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
}
/* 3D Effects */
.swiper-3d.swiper-css-mode .swiper-wrapper {
  perspective: 1200px;
}
.swiper-3d .swiper-wrapper {
  transform-style: preserve-3d;
}
.swiper-3d {
  perspective: 1200px;
}
.swiper-3d .swiper-slide,
.swiper-3d .swiper-slide-shadow,
.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right,
.swiper-3d .swiper-slide-shadow-top,
.swiper-3d .swiper-slide-shadow-bottom,
.swiper-3d .swiper-cube-shadow {
  transform-style: preserve-3d;
}
.swiper-3d .swiper-slide-shadow,
.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right,
.swiper-3d .swiper-slide-shadow-top,
.swiper-3d .swiper-slide-shadow-bottom {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
}
.swiper-3d .swiper-slide-shadow {
  background: rgba(0, 0, 0, 0.15);
}
.swiper-3d .swiper-slide-shadow-left {
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
.swiper-3d .swiper-slide-shadow-right {
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
.swiper-3d .swiper-slide-shadow-top {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
.swiper-3d .swiper-slide-shadow-bottom {
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
/* CSS Mode */
.swiper-css-mode > .swiper-wrapper {
  overflow: auto;
  scrollbar-width: none;
  /* For Firefox */
  -ms-overflow-style: none;
  /* For Internet Explorer and Edge */
}
.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {
  display: none;
}
.swiper-css-mode > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: start start;
}
.swiper-horizontal.swiper-css-mode > .swiper-wrapper {
  scroll-snap-type: x mandatory;
}
.swiper-vertical.swiper-css-mode > .swiper-wrapper {
  scroll-snap-type: y mandatory;
}
.swiper-centered > .swiper-wrapper::before {
  content: '';
  flex-shrink: 0;
  order: 9999;
}
.swiper-centered > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: center center;
  scroll-snap-stop: always;
}
.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {
  margin-inline-start: var(--swiper-centered-offset-before);
}
.swiper-centered.swiper-horizontal > .swiper-wrapper::before {
  height: 100%;
  min-height: 1px;
  width: var(--swiper-centered-offset-after);
}
.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {
  margin-block-start: var(--swiper-centered-offset-before);
}
.swiper-centered.swiper-vertical > .swiper-wrapper::before {
  width: 100%;
  min-width: 1px;
  height: var(--swiper-centered-offset-after);
}
.swiper-lazy-preloader {
  width: 42px;
  height: 42px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -21px;
  margin-top: -21px;
  z-index: 10;
  transform-origin: 50%;
  box-sizing: border-box;
  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));
  border-radius: 50%;
  border-top-color: transparent;
}
.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,
swiper-container:not(.swiper-watch-progress) .swiper-lazy-preloader,
.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader {
  animation: swiper-preloader-spin 1s infinite linear;
}
.swiper-lazy-preloader-white {
  --swiper-preloader-color: #fff;
}
.swiper-lazy-preloader-black {
  --swiper-preloader-color: #000;
}
@keyframes swiper-preloader-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.swiper-virtual .swiper-slide {
  -webkit-backface-visibility: hidden;
  transform: translateZ(0);
}
.swiper-virtual.swiper-css-mode .swiper-wrapper::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
}
.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after {
  height: 1px;
  width: var(--swiper-virtual-size);
}
.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after {
  width: 1px;
  height: var(--swiper-virtual-size);
}
:root {
  --swiper-navigation-size: 44px;
  /*
  --swiper-navigation-top-offset: 50%;
  --swiper-navigation-sides-offset: 10px;
  --swiper-navigation-color: var(--swiper-theme-color);
  */
}
.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: var(--swiper-navigation-top-offset, 50%);
  width: calc(var(--swiper-navigation-size) / 44 * 27);
  height: var(--swiper-navigation-size);
  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--swiper-navigation-color, var(--swiper-theme-color));
}
.swiper-button-prev.swiper-button-disabled,
.swiper-button-next.swiper-button-disabled {
  opacity: 0.35;
  cursor: auto;
  pointer-events: none;
}
.swiper-button-prev.swiper-button-hidden,
.swiper-button-next.swiper-button-hidden {
  opacity: 0;
  cursor: auto;
  pointer-events: none;
}
.swiper-navigation-disabled .swiper-button-prev,
.swiper-navigation-disabled .swiper-button-next {
  display: none !important;
}
.swiper-button-prev:after,
.swiper-button-next:after {
  font-family: swiper-icons;
  font-size: var(--swiper-navigation-size);
  text-transform: none !important;
  letter-spacing: 0;
  font-variant: initial;
  line-height: 1;
}
.swiper-button-prev,
.swiper-rtl .swiper-button-next {
  left: var(--swiper-navigation-sides-offset, 10px);
  right: auto;
}
.swiper-button-prev:after,
.swiper-rtl .swiper-button-next:after {
  content: 'prev';
}
.swiper-button-next,
.swiper-rtl .swiper-button-prev {
  right: var(--swiper-navigation-sides-offset, 10px);
  left: auto;
}
.swiper-button-next:after,
.swiper-rtl .swiper-button-prev:after {
  content: 'next';
}
.swiper-button-lock {
  display: none;
}
:root {
  /*
  --swiper-pagination-color: var(--swiper-theme-color);
  --swiper-pagination-left: auto;
  --swiper-pagination-right: 8px;
  --swiper-pagination-bottom: 8px;
  --swiper-pagination-top: auto;
  --swiper-pagination-fraction-color: inherit;
  --swiper-pagination-progressbar-bg-color: rgba(0,0,0,0.25);
  --swiper-pagination-progressbar-size: 4px;
  --swiper-pagination-bullet-size: 8px;
  --swiper-pagination-bullet-width: 8px;
  --swiper-pagination-bullet-height: 8px;
  --swiper-pagination-bullet-inactive-color: #000;
  --swiper-pagination-bullet-inactive-opacity: 0.2;
  --swiper-pagination-bullet-opacity: 1;
  --swiper-pagination-bullet-horizontal-gap: 4px;
  --swiper-pagination-bullet-vertical-gap: 6px;
  */
}
.swiper-pagination {
  position: absolute;
  text-align: center;
  transition: 300ms opacity;
  transform: translate3d(0, 0, 0);
  z-index: 10;
}
.swiper-pagination.swiper-pagination-hidden {
  opacity: 0;
}
.swiper-pagination-disabled > .swiper-pagination,
.swiper-pagination.swiper-pagination-disabled {
  display: none !important;
}
/* Common Styles */
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal {
  bottom: var(--swiper-pagination-bottom, 8px);
  top: var(--swiper-pagination-top, auto);
  left: 0;
  width: 100%;
}
/* Bullets */
.swiper-pagination-bullets-dynamic {
  overflow: hidden;
  font-size: 0;
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  transform: scale(0.33);
  position: relative;
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {
  transform: scale(1);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {
  transform: scale(1);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {
  transform: scale(0.66);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {
  transform: scale(0.33);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {
  transform: scale(0.66);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {
  transform: scale(0.33);
}
.swiper-pagination-bullet {
  width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));
  height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));
  display: inline-block;
  border-radius: 50%;
  background: var(--swiper-pagination-bullet-inactive-color, #000);
  opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);
}
button.swiper-pagination-bullet {
  border: none;
  margin: 0;
  padding: 0;
  box-shadow: none;
  -webkit-appearance: none;
          appearance: none;
}
.swiper-pagination-clickable .swiper-pagination-bullet {
  cursor: pointer;
}
.swiper-pagination-bullet:only-child {
  display: none !important;
}
.swiper-pagination-bullet-active {
  opacity: var(--swiper-pagination-bullet-opacity, 1);
  background: var(--swiper-pagination-color, var(--swiper-theme-color));
}
.swiper-vertical > .swiper-pagination-bullets,
.swiper-pagination-vertical.swiper-pagination-bullets {
  right: var(--swiper-pagination-right, 8px);
  left: var(--swiper-pagination-left, auto);
  top: 50%;
  transform: translate3d(0px, -50%, 0);
}
.swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet {
  margin: var(--swiper-pagination-bullet-vertical-gap, 6px) 0;
  display: block;
}
.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
}
.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,
.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  display: inline-block;
  transition: 200ms transform, 200ms top;
}
.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);
}
.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
}
.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  transition: 200ms transform, 200ms left;
}
.swiper-horizontal.swiper-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet,
:host(.swiper-horizontal.swiper-rtl) .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  transition: 200ms transform, 200ms right;
}
/* Fraction */
.swiper-pagination-fraction {
  color: var(--swiper-pagination-fraction-color, inherit);
}
/* Progress */
.swiper-pagination-progressbar {
  background: var(--swiper-pagination-progressbar-bg-color, rgba(0, 0, 0, 0.25));
  position: absolute;
  /*ADD_HOST*/
}
.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  background: var(--swiper-pagination-color, var(--swiper-theme-color));
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform: scale(0);
  transform-origin: left top;
}
.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  transform-origin: right top;
}
.swiper-horizontal > .swiper-pagination-progressbar,
.swiper-pagination-progressbar.swiper-pagination-horizontal,
.swiper-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,
.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite {
  width: 100%;
  height: var(--swiper-pagination-progressbar-size, 4px);
  left: 0;
  top: 0;
}
.swiper-vertical > .swiper-pagination-progressbar,
.swiper-pagination-progressbar.swiper-pagination-vertical,
.swiper-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,
.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite {
  width: var(--swiper-pagination-progressbar-size, 4px);
  height: 100%;
  left: 0;
  top: 0;
}
.swiper-pagination-lock {
  display: none;
}
:root {
  /*
  --swiper-scrollbar-border-radius: 10px;
  --swiper-scrollbar-top: auto;
  --swiper-scrollbar-bottom: 4px;
  --swiper-scrollbar-left: auto;
  --swiper-scrollbar-right: 4px;
  --swiper-scrollbar-sides-offset: 1%;
  --swiper-scrollbar-bg-color: rgba(0, 0, 0, 0.1);
  --swiper-scrollbar-drag-bg-color: rgba(0, 0, 0, 0.5);
  --swiper-scrollbar-size: 4px;
  */
}
.swiper-scrollbar {
  border-radius: var(--swiper-scrollbar-border-radius, 10px);
  position: relative;
  -ms-touch-action: none;
  background: var(--swiper-scrollbar-bg-color, rgba(0, 0, 0, 0.1));
}
.swiper-scrollbar-disabled > .swiper-scrollbar,
.swiper-scrollbar.swiper-scrollbar-disabled {
  display: none !important;
}
.swiper-horizontal > .swiper-scrollbar,
.swiper-scrollbar.swiper-scrollbar-horizontal {
  position: absolute;
  left: var(--swiper-scrollbar-sides-offset, 1%);
  bottom: var(--swiper-scrollbar-bottom, 4px);
  top: var(--swiper-scrollbar-top, auto);
  z-index: 50;
  height: var(--swiper-scrollbar-size, 4px);
  width: calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%));
}
.swiper-vertical > .swiper-scrollbar,
.swiper-scrollbar.swiper-scrollbar-vertical {
  position: absolute;
  left: var(--swiper-scrollbar-left, auto);
  right: var(--swiper-scrollbar-right, 4px);
  top: var(--swiper-scrollbar-sides-offset, 1%);
  z-index: 50;
  width: var(--swiper-scrollbar-size, 4px);
  height: calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%));
}
.swiper-scrollbar-drag {
  height: 100%;
  width: 100%;
  position: relative;
  background: var(--swiper-scrollbar-drag-bg-color, rgba(0, 0, 0, 0.5));
  border-radius: var(--swiper-scrollbar-border-radius, 10px);
  left: 0;
  top: 0;
}
.swiper-scrollbar-cursor-drag {
  cursor: move;
}
.swiper-scrollbar-lock {
  display: none;
}
.swiper-zoom-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.swiper-zoom-container > img,
.swiper-zoom-container > svg,
.swiper-zoom-container > canvas {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.swiper-slide-zoomed {
  cursor: move;
  touch-action: none;
}
/* a11y */
.swiper .swiper-notification,
swiper-container .swiper-notification {
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  opacity: 0;
  z-index: -1000;
}
.swiper-free-mode > .swiper-wrapper {
  transition-timing-function: ease-out;
  margin: 0 auto;
}
.swiper-grid > .swiper-wrapper {
  flex-wrap: wrap;
}
.swiper-grid-column > .swiper-wrapper {
  flex-wrap: wrap;
  flex-direction: column;
}
.swiper-fade.swiper-free-mode .swiper-slide {
  transition-timing-function: ease-out;
}
.swiper-fade .swiper-slide {
  pointer-events: none;
  transition-property: opacity;
}
.swiper-fade .swiper-slide .swiper-slide {
  pointer-events: none;
}
.swiper-fade .swiper-slide-active,
.swiper-fade .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}
.swiper-cube {
  overflow: visible;
}
.swiper-cube .swiper-slide {
  pointer-events: none;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  z-index: 1;
  visibility: hidden;
  transform-origin: 0 0;
  width: 100%;
  height: 100%;
}
.swiper-cube .swiper-slide .swiper-slide {
  pointer-events: none;
}
.swiper-cube.swiper-rtl .swiper-slide {
  transform-origin: 100% 0;
}
.swiper-cube .swiper-slide-active,
.swiper-cube .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}
.swiper-cube .swiper-slide-active,
.swiper-cube .swiper-slide-next,
.swiper-cube .swiper-slide-prev,
.swiper-cube .swiper-slide-next + .swiper-slide {
  pointer-events: auto;
  visibility: visible;
}
.swiper-cube .swiper-slide-shadow-top,
.swiper-cube .swiper-slide-shadow-bottom,
.swiper-cube .swiper-slide-shadow-left,
.swiper-cube .swiper-slide-shadow-right {
  z-index: 0;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
}
.swiper-cube .swiper-cube-shadow {
  position: absolute;
  left: 0;
  bottom: 0px;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  z-index: 0;
}
.swiper-cube .swiper-cube-shadow:before {
  content: '';
  background: #000;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  filter: blur(50px);
}
.swiper-flip {
  overflow: visible;
}
.swiper-flip .swiper-slide {
  pointer-events: none;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  z-index: 1;
}
.swiper-flip .swiper-slide .swiper-slide {
  pointer-events: none;
}
.swiper-flip .swiper-slide-active,
.swiper-flip .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}
.swiper-flip .swiper-slide-shadow-top,
.swiper-flip .swiper-slide-shadow-bottom,
.swiper-flip .swiper-slide-shadow-left,
.swiper-flip .swiper-slide-shadow-right {
  z-index: 0;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
}
.swiper-creative .swiper-slide {
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  overflow: hidden;
  transition-property: transform, opacity, height;
}
.swiper-cards {
  overflow: visible;
}
.swiper-cards .swiper-slide {
  transform-origin: center bottom;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  overflow: hidden;
}




body.lock {
  overflow: hidden;
  width: calc(100% - 15px);
}
@media (max-width: 992px) {
  body.lock {
    width: 100%;
  }
}

.pp-video-widget {
  width: 180px;
  height: 320px;
  margin: 20px 0;
  overflow: hidden;
  box-shadow: 10px 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: transparent;
  position: fixed;
  bottom: 2%;
  left: 2%;
  z-index: 100;
  border: 1px solid #413f3f;
}
@media (max-width: 768px) {
  .pp-video-widget {
    position: fixed;
    margin: 0;
    bottom: 2%;
    left: 2%;
    height: 174px;
    width: 98px;
  }
}
.pp-video-widget .floating-card-video {
  overflow: hidden;
  background-color: #fff;
  box-shadow: 10px 5px 15px rgba(0, 0, 0, 0.2);
  width: 180px;
  height: 320px;
  border-radius: 10px;
  margin: 0 0;
}
@media (max-width: 768px) {
  .pp-video-widget .floating-card-video {
    margin: 0;
    height: 174px;
    width: 98px;
  }
}
.pp-video-widget .floating-card-video .swiper-slide {
  position: relative;
}
.pp-video-widget .floating-card-video .swiper-slide .video-card {
  background: transparent;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: #000;
  z-index: 16;
}
@media (max-width: 768px) {
  .pp-video-widget .floating-card-video .swiper-slide .video-card {
    max-width: 100%;
  }
}
.pp-video-widget .floating-card-video .swiper-slide .video-card .video-container {
  position: relative;
  padding-bottom: 177.78%;
  height: 0;
}
@media (max-width: 768px) {
  .pp-video-widget .floating-card-video .swiper-slide .video-card .video-container {
    max-width: 100%;
  }
}
.pp-video-widget .floating-card-video .swiper-slide .video-card .video-container .video {
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
@media (max-width: 768px) {
  .pp-video-widget .floating-card-video .swiper-slide .video-card .video-container .video {
    max-width: 100%;
  }
}
.pp-video-widget .floating-card-video .video-overlay {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 101;
  cursor: pointer;
  overflow: hidden;
}
.pp-video-widget .floating-card-video .video-overlay .video-hover-area {
  height: 95%;
}
.pp-video-widget .floating-card-video .video-overlay .video-hover-area .button-mute {
  position: absolute;
  top: 1%;
  right: 5%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  z-index: 103;
}
@media (max-width: 768px) {
  .pp-video-widget .floating-card-video .video-overlay .video-hover-area .button-mute {
    width: 20px;
    height: 20px;
    top: 3%;
  }
}
@media (hover: hover) {
  .pp-video-widget .floating-card-video .video-overlay .video-hover-area .button-mute:hover {
    cursor: pointer;
    border: 2px solid white;
    border-radius: 50%;
  }
}
.pp-video-widget .floating-card-video .video-overlay .video-hover-area .button-mute .sound-on {
  display: none;
}
.pp-video-widget .floating-card-video .video-overlay .video-product-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.4);
  color: rgba(0, 0, 0, 0.4);
  padding: 8px 10px;
  height: 15%;
  text-decoration: none;
}
@media (max-width: 768px) {
  .pp-video-widget .floating-card-video .video-overlay .video-product-info {
    padding: 5px 10px;
  }
}
.pp-video-widget .floating-card-video .video-overlay .video-product-info .icon {
  width: 11px;
  height: 14px;
}
@media (max-width: 768px) {
  .pp-video-widget .floating-card-video .video-overlay .video-product-info .icon {
    display: none;
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.pp-video-widget .floating-card-video .video-overlay .video-product-info .btn-view-deal {
  font-size: 10px;
  padding: 4px;
  width: 40%;
  border-radius: 6px;
  background-color: #4288f0;
  color: #fff;
  text-align: center;
  transition: all 0.2s ease-out;
  max-height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0;
}
@media (max-width: 768px) {
  .pp-video-widget .floating-card-video .video-overlay .video-product-info .btn-view-deal {
    width: 100%;
    padding: 2px;
    max-height: 20px;
  }
}
@media (hover: hover) {
  .pp-video-widget .floating-card-video .video-overlay .video-product-info .btn-view-deal:hover {
    opacity: 0.7;
  }
}
.pp-video-widget .floating-card-video .video-overlay .video-product-info .product-title {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: white;
  word-wrap: normal;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-transform: capitalize;
  white-space: nowrap;
  width: 40%;
  text-decoration: none;
}
@media (max-width: 768px) {
  .pp-video-widget .floating-card-video .video-overlay .video-product-info .product-title {
    display: none;
  }
}
.pp-video-widget .floating-card-video .video-overlay .video-product-info .product-title span {
  display: inline-block;
  padding-left: 100%;
  -webkit-animation: scroll 10s infinite linear;
  -moz-animation: scroll 10s infinite linear;
  animation: scroll 10s infinite linear;
}
@-webkit-keyframes scroll {
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  100% {
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
  }
}
@-moz-keyframes scroll {
  0% {
    -moz-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  100% {
    -moz-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
  }
}
@keyframes scroll {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}
.pp-video-widget .floating-card-video.moved .video-card .video-container .video {
  cursor: move;
}

.pp-gallery-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 0;
}
.pp-gallery-container .gallery .gallery-media .content #icon-cross-desktop {
  display: none;
}
.pp-gallery-container .gallery-sidebar {
  display: none;
}
.pp-gallery-container .pop-up-mobile-widget-container {
  display: none;
  font-style: normal;
  background: #ffffff;
  height: 100%;
  z-index: 20001;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-header {
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid #b6c2c5;
  padding: 20px;
  margin-bottom: 25px;
  justify-content: space-between;
}
@media (max-height: 740px) {
  .pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-header {
    padding: 15px;
  }
}
@media (min-height: 740px) {
  .pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-header {
    padding: 16px;
  }
}
.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-header .product-image {
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
  max-width: 60px;
  max-height: 60px;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  box-shadow: 0 5px 20px rgba(21, 30, 34, 0.03);
}
.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-header .product-image img {
  width: 100%;
  height: 100%;
}
.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-header .product-title-container {
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  color: #060f14;
  word-wrap: normal;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-transform: capitalize;
  padding: 10px 0;
}
@media (max-height: 740px) {
  .pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-header .product-title-container {
    padding: 0;
    font-size: 14px;
  }
}
.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-header .product-title-container .product-title {
  max-height: 38px;
  overflow: hidden;
  height: 100%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-header .product-title-container .brand-name {
  display: flex;
  align-items: center;
  gap: 3px;
}
.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-header .product-title-container .brand-name .verified-icon-container {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #62d294;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-header .product-title-container .brand-name .verified-icon-container .verified-icon {
  height: 60%;
  width: 60%;
}
.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-header .product-title-container .brand-name .brand {
  font-weight: 400;
  font-size: 13px;
  line-height: 190%;
  color: #58717f;
}
.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-header .button-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
}
.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-header .button-container .widget-arrow-icon {
  transform: rotate(180deg);
}
.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-header .button-container .btn-shop {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 5px 15px;
  background: #ffae3c;
  border-radius: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 121%;
  color: #0d0d0d;
  text-decoration: none;
  text-align: center;
  max-height: 30px;
  margin-top: 5px;
}
.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-header .button-container .btn-shop p {
  margin-bottom: 0;
}
@media (max-height: 740px) {
  .pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-header .button-container .btn-shop {
    padding: 5px 10px;
  }
}
.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content {
  display: flex;
  flex-direction: column;
  padding: 0 20px 20px;
}
.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .rating {
  display: flex;
  align-items: end;
  gap: 8px;
  padding-bottom: 25px;
  margin-bottom: 20px;
  color: #214254;
  border-bottom: 1px solid #b6c2c5;
}
.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .rating .rating-icon {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #ffd645;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .rating .rating-title {
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #060f14;
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
}
.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .rating .rating-count {
  font-weight: 400;
  font-size: 12px;
  line-height: 120%;
  opacity: 0.5;
  margin-left: auto;
}
.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .brand-logo {
  display: flex;
  align-items: center;
  gap: 3px;
}
.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .brand-logo .logo-container {
  width: 40px;
  height: 40px;
}
.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .brand-logo .logo-container .logo {
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
}
.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .brand-logo .verified-icon-container {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #62d294;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .brand-logo .verified-icon-container .verified-icon {
  height: 60%;
  width: 60%;
}
.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .product-text {
  font-weight: 400;
  font-size: 14px;
  line-height: 155%;
  padding-bottom: 25px;
  margin-bottom: 25px;
  color: #214254;
  border-bottom: 1px solid #b6c2c5;
}
.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .product-text:last-of-type {
  border-bottom: 0;
}
.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .review-text {
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 155%;
  padding-bottom: 25px;
  margin-bottom: 25px;
  overflow: hidden;
  color: #214254;
  border-bottom: 1px solid #b6c2c5;
  padding: 0 20px;
}
.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .review-text:last-of-type {
  border-bottom: 0;
}
.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .pros-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 25px;
}
.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .pros-wrapper .pros-title {
  font-weight: 500;
  font-size: 15px;
  line-height: 165.02%;
  color: #060f14;
  margin-bottom: 10px;
}
.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .pros-wrapper .pros {
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: #58717f;
}
.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .pros-wrapper .pros li {
  margin-bottom: 10px;
  min-height: 15px;
  padding-left: 25px;
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik03LjQ0NjUzIDE0LjA3MDhDMy43MzY5OCAxNC4wNzA4IDAuNzI5OTggMTEuMDYzOCAwLjcyOTk4IDcuMzU0MjVDMC43Mjk5OCAzLjY0NDcgMy43MzY5OCAwLjYzNzY5NSA3LjQ0NjUzIDAuNjM3Njk1QzExLjE1NjEgMC42Mzc2OTUgMTQuMTYzMSAzLjY0NDcgMTQuMTYzMSA3LjM1NDI1QzE0LjE2MzEgMTEuMDYzOCAxMS4xNTYxIDE0LjA3MDggNy40NDY1MyAxNC4wNzA4Wk03LjQ0NjUzIDEyLjcyNzVDOC44NzE2MSAxMi43Mjc1IDEwLjIzODMgMTIuMTYxNCAxMS4yNDYgMTEuMTUzN0MxMi4yNTM3IDEwLjE0NiAxMi44MTk4IDguNzc5MzIgMTIuODE5OCA3LjM1NDI1QzEyLjgxOTggNS45MjkxOCAxMi4yNTM3IDQuNTYyNDcgMTEuMjQ2IDMuNTU0NzlDMTAuMjM4MyAyLjU0NzExIDguODcxNjEgMS45ODEwMSA3LjQ0NjUzIDEuOTgxMDFDNi4wMjE0NiAxLjk4MTAxIDQuNjU0NzYgMi41NDcxMSAzLjY0NzA4IDMuNTU0NzlDMi42Mzk0IDQuNTYyNDcgMi4wNzMyOSA1LjkyOTE4IDIuMDczMjkgNy4zNTQyNUMyLjA3MzI5IDguNzc5MzIgMi42Mzk0IDEwLjE0NiAzLjY0NzA4IDExLjE1MzdDNC42NTQ3NiAxMi4xNjE0IDYuMDIxNDYgMTIuNzI3NSA3LjQ0NjUzIDEyLjcyNzVaTTYuNzc2ODkgMTAuMDQwOUwzLjkyNzA2IDcuMTkxMDRMNC44NzY3OCA2LjI0MTMyTDYuNzc2ODkgOC4xNDE0M0wxMC41NzU4IDQuMzQxODdMMTEuNTI2MiA1LjI5MTU5TDYuNzc2ODkgMTAuMDQwOVoiIGZpbGw9IiM0Mjg4RjAiLz4NCjwvc3ZnPg0K) left 3px no-repeat;
  overflow: hidden;
}
.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .btn-link {
  font-size: 15px;
  padding: 9px 0;
  width: 65%;
  height: 30px;
  border: none;
  color: #ffffff;
  background-color: #4288f0;
  border-radius: 6px;
  margin-bottom: 15px;
  transition: all 0.2s ease-out;
  cursor: pointer;
  text-decoration: none;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .btn-link:active {
  opacity: 0.7;
}
.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .on-amazon-text {
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  text-align: center;
  color: rgba(70, 90, 102, 0.75);
}
.pp-gallery-container .swiper-button-next {
  display: none;
}
.pp-gallery-container .swiper-button-prev {
  display: none;
}

.pp-gallery-container.active {
  position: fixed;
  z-index: 20000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #060f14;
}
.pp-gallery-container.active .gallery {
  box-shadow: 2px 2px 9px rgba(84, 84, 84, 0.5);
  left: 0;
  height: 100vh;
  transition: opacity 0.4s ease-in-out;
  overflow: hidden;
  display: flex;
}
.pp-gallery-container.active .gallery .pop-up-mobile-widget-container {
  display: none;
}
.pp-gallery-container.active .gallery .gallery-media {
  flex: 3;
}
.pp-gallery-container.active .gallery .gallery-media .content {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
}
.pp-gallery-container.active .gallery .gallery-media .content #icon-cross-desktop {
  cursor: pointer;
  width: 40px;
  min-height: 40px;
  height: 40px;
  background: rgba(84, 84, 84, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 35px;
  top: 35px;
  z-index: 16;
}
.pp-gallery-container.active .gallery .gallery-media .content #icon-cross-desktop:hover {
  background: rgba(37, 37, 37, 0.6);
  opacity: 0.7;
}
.pp-gallery-container.active .gallery .gallery-media .content #icon-cross-desktop img {
  width: 20px;
  height: 20px;
}
.pp-gallery-container.active .gallery .gallery-media .content .gallery-background-container {
  position: absolute;
  right: 0;
  width: 100%;
  height: 100%;
  filter: blur(40px);
  -webkit-filter: blur(40px);
  opacity: 0.2;
  z-index: 1;
}
.pp-gallery-container.active .gallery .gallery-media .content .gallery-background-container .gallery-background {
  width: 100%;
  height: 100%;
}
.pp-gallery-container.active .gallery .gallery-media .content .gallery-background-container .gallery-background .video-thumb {
  height: 100%;
  width: 100%;
}
.pp-gallery-container.active .gallery .gallery-media .content .gallery-background-container .gallery-background .video-thumb img {
  display: none;
}
.pp-gallery-container.active .gallery .gallery-media .content .gallery-background-container .gallery-background .video-thumb video {
  height: 100%;
  width: 100%;
  object-fit: fill;
}
.pp-gallery-container.active .gallery .gallery-media .content .gallery-background-container .gallery-background .background-image {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper {
  height: 100%;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .thumbs-swiper-container {
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .thumbs-swiper-container .swiper.thumbs-swiper {
  height: 300px;
  width: 50%;
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .thumbs-swiper-container .swiper.thumbs-swiper .swiper-slide {
  width: 100%;
  height: 100%;
  opacity: 0.4;
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .thumbs-swiper-container .swiper.thumbs-swiper .swiper-slide .thumb-icon {
  position: absolute;
  top: 35%;
  left: 45%;
  height: 16px;
  width: 14px;
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .thumbs-swiper-container .swiper.thumbs-swiper .swiper-slide .video-thumb {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .thumbs-swiper-container .swiper.thumbs-swiper .swiper-slide .video-thumb:hover {
  cursor: pointer;
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .thumbs-swiper-container .swiper.thumbs-swiper .swiper-slide .video-thumb video {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .thumbs-swiper-container .swiper.thumbs-swiper .swiper-slide .image-progress-container {
  visibility: hidden;
  position: absolute;
  top: 20%;
  left: 30%;
  height: 40px;
  width: 40px;
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .thumbs-swiper-container .swiper.thumbs-swiper .swiper-slide .image-progress-container .image-progress {
  width: 100%;
  height: 100%;
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .thumbs-swiper-container .swiper.thumbs-swiper .swiper-slide .image-progress-container .image-progress .image-progress-circle {
  fill: transparent;
  stroke-width: 20px;
  stroke-dasharray: 62.8;
  stroke-dashoffset: 62.8;
  transform: rotate(-90deg);
  transform-origin: center;
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .thumbs-swiper-container .swiper.thumbs-swiper .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .thumbs-swiper-container .swiper.thumbs-swiper .swiper-slide-thumb-active {
  opacity: 1;
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container {
  width: 85%;
  height: 100%;
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .swiper-pagination-fraction {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 121%;
  text-align: center;
  color: #ffffff;
  position: absolute;
  top: 30%;
  left: -43.5%;
  z-index: 16;
  height: 20px;
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-mobile-header {
  display: none;
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container #mobile-swiper-buttons {
  display: none;
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper {
  height: 100vh;
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide {
  width: 100%;
  height: 100vh;
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-card {
  background: transparent;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  z-index: 16;
}
@media (max-width: 768px) {
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-card {
    max-width: 100%;
  }
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-card .video-container {
  background: transparent;
  position: relative;
  padding-bottom: 177.78%;
  height: 0;
}
@media (max-width: 768px) {
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-card .video-container {
    max-width: 100%;
  }
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-card .video-container .video {
  background: transparent;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
}
@media (max-width: 768px) {
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-card .video-container .video {
    max-width: 100%;
  }
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .gallery-image-container {
  width: 100%;
  height: 100%;
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .gallery-image-container .gallery-image {
  display: flex;
  align-items: center;
  max-height: 100vh;
  height: 100%;
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .gallery-image-container .gallery-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-card-text-container {
  position: absolute;
  bottom: 10%;
  left: 40%;
  z-index: 16;
  width: 80%;
  color: #ffffff;
  font-style: normal;
  line-height: 150%;
  transform: translate(-40%, 10%);
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  border-radius: 10px;
}
@media (max-width: 768px) {
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-card-text-container {
    display: none;
  }
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-card-text-container .video-card-text-wrapper .brand {
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 5px;
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-card-text-container .video-card-text-wrapper .title {
  font-weight: 400;
  font-size: 16px;
  opacity: 0.75;
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-card-text-container .video-card-button-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-card-text-container .video-card-button-wrapper a:hover {
  border-bottom-color: transparent;
  color: white !important;
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-card-text-container .video-card-button-wrapper .video-card-button {
  background-color: #4288f0;
  color: white;
  text-decoration: none;
  border-bottom-color: transparent;
  padding: 4px 8px;
  border-radius: 5px;
  min-width: 83px;
  text-align: center;
  border: 1px solid white;
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-card-text-container .video-card-button-wrapper .video-card-button:hover {
  background-color: #000;
  border: 1px solid white;
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container {
  position: absolute;
  bottom: 3.7%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  z-index: 16;
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-button-play {
  width: 40px;
  height: 40px;
  cursor: pointer;
  background: rgba(84, 84, 84, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-button-play .play {
  width: 29px;
  height: 24px;
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-button-play .pause {
  width: 29px;
  height: 24px;
  display: none;
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-button-play:hover {
  background: rgba(37, 37, 37, 0.6);
  opacity: 0.7;
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-progress-bar {
  width: 350px;
  height: 5px;
  border-radius: 10px;
  background: #a5a5a5;
  cursor: pointer;
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-progress-bar .progress-fill {
  background: #ffffff;
  border-radius: inherit;
  height: 100%;
  width: 0;
}
@media (max-width: 1690px) {
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-progress-bar {
    width: 300px;
  }
}
@media (max-width: 1536px) {
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-progress-bar {
    width: 250px;
  }
}
@media (max-width: 1440px) {
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-progress-bar {
    width: 230px;
  }
}
@media (max-width: 1260px) {
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-progress-bar {
    width: 200px;
  }
}
@media (max-width: 992px) {
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-progress-bar {
    width: 130px;
  }
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-button-mute {
  width: 40px;
  height: 40px;
  cursor: pointer;
  background: rgba(84, 84, 84, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-button-mute .sound-on {
  width: 29px;
  height: 24px;
  display: none;
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-button-mute .sound-off {
  width: 29px;
  height: 24px;
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-button-mute:hover {
  background: rgba(37, 37, 37, 0.6);
  opacity: 0.7;
}
.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.pp-gallery-container.active .gallery .gallery-media .content .controls {
  width: 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px 0;
  z-index: 1;
}
.pp-gallery-container.active .gallery .gallery-media .content .controls .swiper-buttons {
  width: 10%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  gap: 50px;
  justify-content: center;
  align-items: center;
}
.pp-gallery-container.active .gallery .gallery-media .content .controls .swiper-buttons .gallery-swiper-button-next {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: rgba(84, 84, 84, 0.5);
  border-radius: 50%;
}
.pp-gallery-container.active .gallery .gallery-media .content .controls .swiper-buttons .gallery-swiper-button-next img {
  width: 20px;
  height: 20px;
  transform: rotate(180deg);
}
.pp-gallery-container.active .gallery .gallery-media .content .controls .swiper-buttons .gallery-swiper-button-next:hover {
  cursor: pointer;
  background: rgba(37, 37, 37, 0.6);
  opacity: 0.7;
}
.pp-gallery-container.active .gallery .gallery-media .content .controls .swiper-buttons .gallery-swiper-button-prev {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: rgba(84, 84, 84, 0.5);
  border-radius: 50%;
}
.pp-gallery-container.active .gallery .gallery-media .content .controls .swiper-buttons .gallery-swiper-button-prev img {
  width: 20px;
  height: 20px;
}
.pp-gallery-container.active .gallery .gallery-media .content .controls .swiper-buttons .gallery-swiper-button-prev:hover {
  cursor: pointer;
  background: rgba(37, 37, 37, 0.6);
  opacity: 0.7;
}
.pp-gallery-container.active .gallery .gallery-media .content .controls .icon-share {
  cursor: pointer;
  width: 40px;
  min-height: 40px;
  height: 40px;
  background: rgba(84, 84, 84, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pp-gallery-container.active .gallery .gallery-media .content .controls .icon-share:hover {
  background: rgba(37, 37, 37, 0.6);
  opacity: 0.7;
}
.pp-gallery-container.active .gallery .gallery-sidebar {
  display: flex;
  flex: 1;
}
.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button {
  border: none;
}
.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container {
  display: flex;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  width: 420px;
  padding-bottom: 20px;
}
.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container .product-button-expandable {
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 20px;
  width: 90%;
  padding: 1px;
  text-decoration: none;
  color: white;
}
@media (max-width: 576px) {
  .pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container .product-button-expandable {
    gap: 10px;
    padding: 20px 15px;
  }
}
.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container .product-button-expandable .product-image-container {
  box-shadow: 0px 2.78195px 11.1278px rgba(21, 30, 34, 0.03);
  width: 100%;
  height: 60px;
  width: 60px;
}
@media (max-width: 576px) {
  .pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container .product-button-expandable .product-image-container {
    height: 30px;
    max-width: 30px;
  }
}
.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container .product-button-expandable .product-image-container .product-image {
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
  width: 100%;
  height: 100%;
}
.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container .product-button-expandable .title-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 170px;
  max-width: 170px;
  min-width: 170px;
  font-style: normal;
}
@media (max-width: 576px) {
  .pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container .product-button-expandable .title-container {
    max-width: 140px;
  }
}
.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container .product-button-expandable .title-container .product-title {
  text-align: start;
  font-weight: 500;
  font-size: 18px;
  line-height: 125%;
  color: #060f14;
  word-wrap: normal;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-transform: capitalize;
  text-decoration: none;
}
.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container .product-button-expandable .title-container .product-title:hover {
  color: #4288f0;
}
@media (max-width: 576px) {
  .pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container .product-button-expandable .title-container .product-title {
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container .product-button-expandable .title-container .brand-title {
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #58717f;
}
.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container .product-button-expandable .title-container .brand-title:hover {
  color: #4288f0;
}
@media (max-width: 576px) {
  .pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container .product-button-expandable .title-container .brand-title {
    font-size: 12px;
  }
}
.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container .product-button-expandable .btn-link {
  width: 140px;
  height: 30px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 121%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ffffff;
  background: #4288f0;
  border-radius: 6px;
  cursor: pointer;
  margin-left: auto;
  transition: all 0.2s ease-out;
  text-decoration: none;
}
@media (max-width: 576px) {
  .pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container .product-button-expandable .btn-link {
    width: 95px;
  }
}
@media (hover: hover) {
  .pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container .product-button-expandable .btn-link:hover {
    opacity: 0.7;
  }
}
.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container .show-content-icon-container {
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left: none;
  background-color: #fff;
}
.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container .show-content-icon-container .show-content-icon {
  transition: all 0.2s;
  transform: rotate(270deg);
}
.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container .show-content-icon-container .show-content-icon.active {
  transform: rotate(360deg);
}
.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container.active {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  margin-bottom: 0;
  padding-bottom: 0;
  text-decoration: none;
}
.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-content {
  display: none;
}
.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-content.active {
  display: flex;
  flex-direction: column;
  font-style: normal;
  border: none;
  padding: 0;
  gap: 0;
}
.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-content.active .rating {
  padding-top: 25px;
}
.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-content.active .pros-wrapper {
  width: 100%;
}
@media (max-width: 576px) {
  .pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-content.active .pros-wrapper {
    width: 100%;
    padding: 0 0 18px;
  }
}
.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-content.active .pros-wrapper .pros {
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: #58717f;
}
.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-content.active .pros-wrapper .pros li {
  margin-bottom: 10px;
  min-height: 15px;
  padding-left: 25px;
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik03LjQ0NjUzIDE0LjA3MDhDMy43MzY5OCAxNC4wNzA4IDAuNzI5OTggMTEuMDYzOCAwLjcyOTk4IDcuMzU0MjVDMC43Mjk5OCAzLjY0NDcgMy43MzY5OCAwLjYzNzY5NSA3LjQ0NjUzIDAuNjM3Njk1QzExLjE1NjEgMC42Mzc2OTUgMTQuMTYzMSAzLjY0NDcgMTQuMTYzMSA3LjM1NDI1QzE0LjE2MzEgMTEuMDYzOCAxMS4xNTYxIDE0LjA3MDggNy40NDY1MyAxNC4wNzA4Wk03LjQ0NjUzIDEyLjcyNzVDOC44NzE2MSAxMi43Mjc1IDEwLjIzODMgMTIuMTYxNCAxMS4yNDYgMTEuMTUzN0MxMi4yNTM3IDEwLjE0NiAxMi44MTk4IDguNzc5MzIgMTIuODE5OCA3LjM1NDI1QzEyLjgxOTggNS45MjkxOCAxMi4yNTM3IDQuNTYyNDcgMTEuMjQ2IDMuNTU0NzlDMTAuMjM4MyAyLjU0NzExIDguODcxNjEgMS45ODEwMSA3LjQ0NjUzIDEuOTgxMDFDNi4wMjE0NiAxLjk4MTAxIDQuNjU0NzYgMi41NDcxMSAzLjY0NzA4IDMuNTU0NzlDMi42Mzk0IDQuNTYyNDcgMi4wNzMyOSA1LjkyOTE4IDIuMDczMjkgNy4zNTQyNUMyLjA3MzI5IDguNzc5MzIgMi42Mzk0IDEwLjE0NiAzLjY0NzA4IDExLjE1MzdDNC42NTQ3NiAxMi4xNjE0IDYuMDIxNDYgMTIuNzI3NSA3LjQ0NjUzIDEyLjcyNzVaTTYuNzc2ODkgMTAuMDQwOUwzLjkyNzA2IDcuMTkxMDRMNC44NzY3OCA2LjI0MTMyTDYuNzc2ODkgOC4xNDE0M0wxMC41NzU4IDQuMzQxODdMMTEuNTI2MiA1LjI5MTU5TDYuNzc2ODkgMTAuMDQwOVoiIGZpbGw9IiM0Mjg4RjAiLz4NCjwvc3ZnPg0K) left 3px no-repeat;
  overflow: hidden;
}
.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .similar-products-wrapper {
  display: flex;
  flex-direction: column;
}
.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .similar-products-wrapper .title {
  margin-bottom: 10px;
}
.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .similar-products-wrapper .product-button-expandable-container {
  display: flex;
  border: 1px solid #e0e9ec;
  border-radius: 6px;
  margin-bottom: 10px;
  padding-bottom: 0;
}
.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .similar-products-wrapper .product-button-expandable-container .product-button-expandable {
  gap: 20px;
  padding: 15px;
}
.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .similar-products-wrapper .product-button-expandable-container .product-button-expandable .product-image-container {
  height: 50px;
  width: 50px;
  min-width: 50px;
  max-width: 50px;
}
.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .similar-products-wrapper .product-button-expandable-container .product-button-expandable .title-container {
  max-height: 50px;
  max-width: none;
  width: 80%;
}
.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .similar-products-wrapper .product-button-expandable-container .product-button-expandable .title-container .product-title {
  line-height: 125%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 15px;
  text-decoration: none;
}
.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .similar-products-wrapper .product-button-expandable-container .show-content-icon-container {
  border-left: 1px solid #e0e9ec;
  background-color: #fafafa;
}
.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .similar-products-wrapper .product-button-expandable-container.active {
  margin-bottom: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .similar-products-wrapper .product-content {
  display: none;
}
.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .similar-products-wrapper .product-content.active {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 15px;
  border-left: 1px solid #e0e9ec;
  border-right: 1px solid #e0e9ec;
  border-bottom: 1px solid #e0e9ec;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  margin-bottom: 10px;
}
.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .similar-products-wrapper .product-content.active .pros-wrapper {
  border-bottom: 0;
  padding-bottom: 0;
}
.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .similar-products-wrapper .product-content.active .btn-link {
  font-size: 15px;
  padding: 9px 0;
  width: 100%;
  height: 30px;
  border: none;
  color: #ffffff;
  background-color: #4288f0;
  border-radius: 6px;
  transition: all 0.2s ease-out;
  cursor: pointer;
  text-decoration: none;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .similar-products-wrapper .product-content.active .btn-link:hover {
  opacity: 0.7;
}
.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .similar-products-wrapper .product-content.active .on-amazon-text {
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  text-align: center;
  color: rgba(70, 90, 102, 0.75);
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar {
  display: flex;
  font-style: normal;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  padding: 35px 30px 10px;
  gap: 10px;
  overflow-y: auto;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar::-webkit-scrollbar {
  visibility: visible;
  background-color: white;
  width: 4px;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar::-webkit-scrollbar-thumb {
  background-color: #4288f0;
  border-radius: 10px;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 25px;
  border-bottom: 1px solid #b6c2c5;
  margin-bottom: 20px;
  cursor: pointer;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .header .product-image-container {
  display: flex;
  align-items: center;
  gap: 20px;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .header .product-image-container .product-image {
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
  max-width: 60px;
  max-height: 60px;
  height: 100%;
  width: auto;
  background-color: #ffffff;
  box-shadow: 0 5px 20px rgba(21, 30, 34, 0.03);
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .header .product-image-container .product-image img {
  width: 100%;
  height: 100%;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .header .product-image-container .product-title-container {
  font-weight: 500;
  font-size: 18px;
  line-height: 125%;
  color: #060f14;
  word-wrap: normal;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-transform: capitalize;
  text-decoration: none;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .header .close-sidebar-icon {
  height: 15px;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .brand-name {
  display: flex;
  align-items: center;
  gap: 3px;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .brand-name .verified-icon-container {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #62d294;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .brand-name .verified-icon-container .verified-icon {
  height: 60%;
  width: 60%;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .brand-name .brand {
  font-weight: 400;
  font-size: 13px;
  line-height: 190%;
  color: #58717f;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .rating {
  display: flex;
  align-items: end;
  gap: 8px;
  padding-bottom: 25px;
  margin-bottom: 20px;
  color: #214254;
  border-bottom: 1px solid #b6c2c5;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .rating .rating-icon {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #ffd645;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .rating .rating-title {
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #060f14;
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .rating .rating-count {
  font-weight: 400;
  font-size: 12px;
  line-height: 120%;
  opacity: 0.5;
  margin-left: auto;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .title {
  font-weight: 500;
  font-size: 16px;
  line-height: 165.02%;
  color: #060f14;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .product-text {
  font-weight: 400;
  font-size: 14px;
  line-height: 155%;
  padding-bottom: 25px;
  margin-bottom: 20px;
  color: #214254;
  border-bottom: 1px solid #b6c2c5;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .product-text:last-of-type {
  border-bottom: 0;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .review-text {
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 155%;
  padding-bottom: 25px;
  margin-bottom: 20px;
  color: #214254;
  border-bottom: 1px solid #b6c2c5;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .review-text:last-of-type {
  border-bottom: 0;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .pros-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-bottom: 1px solid #b6c2c5;
  margin-bottom: 20px;
  padding-bottom: 25px;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .pros-wrapper .pros {
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: #58717f;
  margin-top: 10px;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .pros-wrapper .pros li {
  margin-bottom: 10px;
  min-height: 15px;
  padding-left: 25px;
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik03LjQ0NjUzIDE0LjA3MDhDMy43MzY5OCAxNC4wNzA4IDAuNzI5OTggMTEuMDYzOCAwLjcyOTk4IDcuMzU0MjVDMC43Mjk5OCAzLjY0NDcgMy43MzY5OCAwLjYzNzY5NSA3LjQ0NjUzIDAuNjM3Njk1QzExLjE1NjEgMC42Mzc2OTUgMTQuMTYzMSAzLjY0NDcgMTQuMTYzMSA3LjM1NDI1QzE0LjE2MzEgMTEuMDYzOCAxMS4xNTYxIDE0LjA3MDggNy40NDY1MyAxNC4wNzA4Wk03LjQ0NjUzIDEyLjcyNzVDOC44NzE2MSAxMi43Mjc1IDEwLjIzODMgMTIuMTYxNCAxMS4yNDYgMTEuMTUzN0MxMi4yNTM3IDEwLjE0NiAxMi44MTk4IDguNzc5MzIgMTIuODE5OCA3LjM1NDI1QzEyLjgxOTggNS45MjkxOCAxMi4yNTM3IDQuNTYyNDcgMTEuMjQ2IDMuNTU0NzlDMTAuMjM4MyAyLjU0NzExIDguODcxNjEgMS45ODEwMSA3LjQ0NjUzIDEuOTgxMDFDNi4wMjE0NiAxLjk4MTAxIDQuNjU0NzYgMi41NDcxMSAzLjY0NzA4IDMuNTU0NzlDMi42Mzk0IDQuNTYyNDcgMi4wNzMyOSA1LjkyOTE4IDIuMDczMjkgNy4zNTQyNUMyLjA3MzI5IDguNzc5MzIgMi42Mzk0IDEwLjE0NiAzLjY0NzA4IDExLjE1MzdDNC42NTQ3NiAxMi4xNjE0IDYuMDIxNDYgMTIuNzI3NSA3LjQ0NjUzIDEyLjcyNzVaTTYuNzc2ODkgMTAuMDQwOUwzLjkyNzA2IDcuMTkxMDRMNC44NzY3OCA2LjI0MTMyTDYuNzc2ODkgOC4xNDE0M0wxMC41NzU4IDQuMzQxODdMMTEuNTI2MiA1LjI5MTU5TDYuNzc2ODkgMTAuMDQwOVoiIGZpbGw9IiM0Mjg4RjAiLz4NCjwvc3ZnPg0K) left 3px no-repeat;
  overflow: hidden;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .gallery-widget {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-style: normal;
  font-weight: 400;
  padding: 15px 20px;
  border: 1px solid #e0e9ec;
  border-radius: 10px;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .gallery-widget .gallery-widget-title {
  font-size: 10px;
  line-height: 165.02%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #58717f;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .gallery-widget .gallery-widget-image {
  height: 200px;
  width: 100%;
  border-radius: 8px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .gallery-widget .gallery-widget-text-title {
  font-weight: 500;
  font-size: 17px;
  line-height: 165.02%;
  color: #060f14;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .gallery-widget .gallery-widget-text {
  font-size: 12px;
  line-height: 165.02%;
  color: #214254;
  max-height: 80px;
  overflow: hidden;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .gallery-widget .gallery-widget-text-review {
  font-size: 18px;
  line-height: 155%;
  color: #13163a;
  max-height: 220px;
  overflow: hidden;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .gallery-widget .read-more {
  font-size: 12px;
  line-height: 180%;
  text-align: center;
  color: #4288f0;
  cursor: pointer;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .bottom-section {
  position: sticky;
  background: white;
  bottom: 0;
  right: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px 0;
  border-radius: 10px;
  border: 1px solid #e0e9ec;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .bottom-section .btn-link {
  font-size: 15px;
  padding: 9px 0;
  width: 85%;
  height: 30px;
  border: none;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4288f0;
  border-radius: 6px;
  margin-bottom: 15px;
  transition: all 0.2s ease-out;
  cursor: pointer;
  text-decoration: none;
  align-self: center;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .bottom-section .btn-link:hover {
  opacity: 0.7;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .bottom-section .on-amazon-text {
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  text-align: center;
  color: rgba(70, 90, 102, 0.75);
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .product-button {
  display: flex;
  align-items: center;
  border: 1px solid #e7f2f7;
  border-radius: 5px;
  padding: 11px 14px;
  width: 100%;
  text-decoration: none;
  color: white;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .product-button:hover {
  cursor: pointer;
  border: 1px solid #4288f0;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .product-button .product-image {
  min-width: 27px;
  height: 27px;
  margin-right: 15px;
  background-color: #ffffff;
  box-shadow: 0 5px 20px rgba(21, 30, 34, 0.03);
  border-radius: 3px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .product-button .product-title-container {
  display: flex;
  flex-direction: column;
  text-decoration: none;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .product-button .product-title-container .product-title {
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 150%;
  color: #060f14;
  word-wrap: normal;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-transform: capitalize;
  text-decoration: none;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .product-button .product-title-container .brand-title {
  font-size: 12px;
  color: #58717f;
  font-weight: 400;
  line-height: 150%;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .product-button .btn-link {
  font-size: 12px;
  font-weight: 500;
  padding: 9px 0;
  width: 40%;
  height: 30px;
  border: none;
  color: #ffffff;
  text-align: center;
  background-color: #4288f0;
  border-radius: 6px;
  transition: all 0.2s ease-out;
  cursor: pointer;
  text-decoration: none;
  align-self: center;
  margin-left: auto;
}
.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .product-button .btn-link:hover {
  opacity: 0.7;
}

@media (max-width: 768px) {
  .pp-gallery-container.active .gallery {
    height: 100%;
    flex-direction: column;
  }
  .pp-gallery-container.active .gallery .pop-up-mobile-widget-container {
    display: block;
  }
  .pp-gallery-container.active .gallery .gallery-sidebar {
    display: none;
  }
  .pp-gallery-container.active .gallery .gallery-media {
    display: block;
    height: 100%;
  }
  .pp-gallery-container.active .gallery .gallery-media .content {
    display: block;
    position: relative;
    padding-right: 0;
    padding-left: 0;
  }
  .pp-gallery-container.active .gallery .gallery-media .content #icon-cross-desktop {
    display: none;
  }
  .pp-gallery-container.active .gallery .gallery-media .content .gallery-bakcground-container {
    display: none;
  }
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper {
    width: 100%;
    display: block;
  }
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container {
    width: 100%;
  }
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .swiper-pagination-fraction {
    left: 0;
    top: 3.5%;
  }
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-mobile-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    z-index: 16;
    position: absolute;
    top: 2%;
    left: 0;
    right: 0;
  }
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-mobile-header .icon-cross {
    width: 40px;
    height: 40px;
    background: rgba(84, 84, 84, 0.5);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-mobile-header .icon-cross:active {
    background: rgba(37, 37, 37, 0.6);
    opacity: 0.7;
  }
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-mobile-header .icon-cross img {
    width: 15px;
  }
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-mobile-header .icon-share {
    width: 40px;
    height: 40px;
    background: rgba(84, 84, 84, 0.5);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-mobile-header .icon-share:active {
    background: rgba(37, 37, 37, 0.6);
    opacity: 0.7;
  }
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .swiper-buttons#mobile-swiper-buttons {
    display: flex;
    flex-direction: column-reverse;
    gap: 50px;
    position: relative;
    bottom: 60%;
    left: 82%;
    z-index: 16;
  }
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .swiper-buttons#mobile-swiper-buttons .gallery-swiper-button-next {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    background: rgba(84, 84, 84, 0.5);
    border-radius: 50%;
  }
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .swiper-buttons#mobile-swiper-buttons .gallery-swiper-button-next img {
    width: 25px;
    height: 25px;
    transform: rotate(180deg);
  }
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .swiper-buttons#mobile-swiper-buttons .gallery-swiper-button-next:hover {
    cursor: pointer;
    background: rgba(37, 37, 37, 0.6);
    opacity: 0.7;
  }
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .swiper-buttons#mobile-swiper-buttons .gallery-swiper-button-prev {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    background: rgba(84, 84, 84, 0.5);
    border-radius: 50%;
  }
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .swiper-buttons#mobile-swiper-buttons .gallery-swiper-button-prev img {
    width: 25px;
    height: 25px;
  }
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .swiper-buttons#mobile-swiper-buttons .gallery-swiper-button-prev:hover {
    cursor: pointer;
    background: rgba(37, 37, 37, 0.6);
    opacity: 0.7;
  }
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .swiper-buttons.widget-open#mobile-swiper-buttons {
    bottom: 72%;
  }
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .swiper-buttons.widget-open#mobile-swiper-buttons .gallery-swiper-button-next {
    width: 40px;
    height: 40px;
  }
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .swiper-buttons.widget-open#mobile-swiper-buttons .gallery-swiper-button-next img {
    width: 20px;
    height: 20px;
  }
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .swiper-buttons.widget-open#mobile-swiper-buttons .gallery-swiper-button-prev {
    width: 40px;
    height: 40px;
  }
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .swiper-buttons.widget-open#mobile-swiper-buttons .gallery-swiper-button-prev img {
    width: 20px;
    height: 20px;
  }
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper {
    height: 100%;
  }
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-card .video-container {
    position: static;
  }
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-card .video-container .video {
    height: 100%;
    top: 5%;
  }
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .gallery-image-container .gallery-image {
    position: relative;
    display: block;
    max-height: none;
    width: 100%;
  }
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-card-text-container {
    bottom: 11%;
    left: 5%;
    right: 0;
  }
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-card-text-container .brand {
    font-size: 16px;
  }
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container {
    bottom: 5%;
    left: 0;
    right: 0;
    justify-content: center;
    width: 100%;
    gap: 25px;
  }
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-button-play {
    width: 35px;
    height: 35px;
  }
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-button-play .play {
    width: 24px;
    height: 19px;
  }
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-button-play .pause {
    width: 24px;
    height: 19px;
  }
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-button-play:active {
    background: rgba(37, 37, 37, 0.6);
    opacity: 0.7;
  }
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-progress-bar {
    height: 3px;
    width: 250px;
  }
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-button-mute {
    width: 35px;
    height: 35px;
  }
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-button-mute .sound-on {
    width: 24px;
    height: 24px;
  }
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-button-mute .sound-off {
    width: 24px;
    height: 24px;
  }
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-button-mute:active {
    background: rgba(37, 37, 37, 0.6);
    opacity: 0.7;
  }
  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .thumbs-swiper-container {
    display: none;
  }
  .pp-gallery-container.active .gallery .gallery-media .content .controls {
    display: none;
  }
}
`;