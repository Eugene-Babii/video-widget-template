import Swiper from "swiper/bundle";
import { styles } from "./styles.js";
import { video } from "./mock-data.js";

// const dataJsonString = `{{__VIDEO_JSON__}}`;
// const videos = JSON.parse(dataJsonString);

const videos = video.jewelryStorageBox;

const containerVideoCardDynamic = "video-card-dynamic";
const containerGallery = "gallery";

//detect browser
var isChrome =
  /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
// var isFirefox = typeof InstallTrigger !== "undefined"; // Firefox 1.0+
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
// var isEdge = /\bEdg/.test(navigator.userAgent);
// var isIE = /Trident/.test(navigator.userAgent);

// log browser to console
// if (isChrome) {
//   console.log("Chrome");
// } else if (isFirefox) {
//   console.log("Firefox");
// } else if (isSafari) {
//   console.log("Safari");
// } else if (isEdge) {
//   console.log("Edge");
// } else if (isIE) {
//   console.log("Internet Explorer");
// } else {
//   console.log("Unknown browser");
// }

const addStyle = () => {
  const style = document.createElement("style");
  style.textContent = styles;
  document.head.appendChild(style);
};

const createButtonMute = (container) => {
  const buttonMute = document.createElement("div");
  buttonMute.classList.add("button-mute");
  buttonMute.id = `${container}-button-mute-desktop`;

  const soundOff = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  soundOff.classList.add("sound-off");
  soundOff.setAttribute("id", `${container}-sound-off-desktop`);
  soundOff.setAttribute("width", "24");
  soundOff.setAttribute("height", "24");
  soundOff.setAttribute("viewBox", "0 0 48 48");
  soundOff.setAttribute("fill", "#fff");
  soundOff.setAttribute("xmlns", "http://www.w3.org/2000/svg");

  const pathSoundOff = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  pathSoundOff.setAttribute("fill-rule", "evenodd");
  pathSoundOff.setAttribute("clip-rule", "evenodd");
  pathSoundOff.setAttribute(
    "d",
    "M25 10.8685C25 8.47242 22.3296 7.04325 20.3359 8.37236L10.3944 15H6C4.34315 15 3 16.3431 3 18V30C3 31.6568 4.34314 33 6 33H10.3944L20.3359 39.6276C22.3296 40.9567 25 39.5276 25 37.1315V10.8685ZM29.2929 18.1213L35.1716 24L29.2929 29.8787C28.9024 30.2692 28.9024 30.9024 29.2929 31.2929L30.7071 32.7071C31.0976 33.0976 31.7308 33.0976 32.1213 32.7071L38 26.8284L43.8787 32.7071C44.2692 33.0976 44.9024 33.0976 45.2929 32.7071L46.7071 31.2929C47.0976 30.9024 47.0976 30.2692 46.7071 29.8787L40.8284 24L46.7071 18.1213C47.0976 17.7308 47.0976 17.0976 46.7071 16.7071L45.2929 15.2929C44.9024 14.9024 44.2692 14.9024 43.8787 15.2929L38 21.1716L32.1213 15.2929C31.7308 14.9024 31.0976 14.9024 30.7071 15.2929L29.2929 16.7071C28.9024 17.0976 28.9024 17.7308 29.2929 18.1213Z"
  );

  soundOff.appendChild(pathSoundOff);

  const soundOn = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  soundOn.classList.add("sound-on");
  soundOn.setAttribute("id", `${container}-sound-on-desktop`);
  soundOn.setAttribute("width", "24");
  soundOn.setAttribute("height", "24");
  soundOn.setAttribute("viewBox", "0 0 48 48");
  soundOn.setAttribute("fill", "#fff");
  soundOn.setAttribute("xmlns", "http://www.w3.org/2000/svg");

  const pathSoundOn = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  pathSoundOn.setAttribute("fill-rule", "evenodd");
  pathSoundOn.setAttribute("clip-rule", "evenodd");
  pathSoundOn.setAttribute(
    "d",
    "M20.3359 8.37236C22.3296 7.04325 25 8.47242 25 10.8685V37.1315C25 39.5276 22.3296 40.9567 20.3359 39.6276L10.3944 33H6C4.34314 33 3 31.6568 3 30V18C3 16.3431 4.34315 15 6 15H10.3944L20.3359 8.37236ZM21 12.737L12.1094 18.6641C11.7809 18.8831 11.3948 19 11 19H7V29H11C11.3948 29 11.7809 29.1169 12.1094 29.3359L21 35.263V12.737ZM32.9998 24C32.9998 21.5583 32.0293 19.3445 30.4479 17.7211C30.0625 17.3255 29.9964 16.6989 30.3472 16.2724L31.6177 14.7277C31.9685 14.3011 32.6017 14.2371 33.0001 14.6195C35.4628 16.9832 36.9998 20.3128 36.9998 24C36.9998 27.6872 35.4628 31.0168 33.0001 33.3805C32.6017 33.7629 31.9685 33.6989 31.6177 33.2724L30.3472 31.7277C29.9964 31.3011 30.0625 30.6745 30.4479 30.2789C32.0293 28.6556 32.9998 26.4418 32.9998 24ZM37.0144 11.05C36.6563 11.4705 36.7094 12.0995 37.1069 12.4829C40.1263 15.3951 42.0002 19.4778 42.0002 23.9999C42.0002 28.522 40.1263 32.6047 37.1069 35.5169C36.7094 35.9003 36.6563 36.5293 37.0144 36.9498L38.3109 38.4727C38.6689 38.8932 39.302 38.9456 39.7041 38.5671C43.5774 34.9219 46.0002 29.7429 46.0002 23.9999C46.0002 18.2569 43.5774 13.078 39.7041 9.43271C39.302 9.05421 38.6689 9.10664 38.3109 9.52716L37.0144 11.05Z"
  );

  soundOn.appendChild(pathSoundOn);

  buttonMute.appendChild(soundOff);
  buttonMute.appendChild(soundOn);

  return buttonMute;
};

const createSlide = (video, index, container) => {
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide");
  slide.classList.add("swiper-slide-dynamic");

  const videoCard = document.createElement("div");
  videoCard.classList.add("video-card");
  videoCard.setAttribute("data-index", index);

  const videoContainer = document.createElement("div");
  videoContainer.classList.add("video-container");

  const videoEl = document.createElement("video");

  videoEl.classList.add("video");
  videoEl.setAttribute("data-index", index);
  videoEl.setAttribute("data-dynamic", `dynamic-video-${index}`);
  videoEl.setAttribute("data-container", container);
  videoEl.setAttribute("type", "video/mp4");
  videoEl.id = `video-dynamic-${index}`;
  videoEl.src = video.src;
  videoEl.autoplay = true;

  if (isSafari) {
    videoEl.preload = "auto";
    videoEl.setAttribute("muted", "");
    // videoEl.setAttribute("allowInlineMediaPlayback", "true");
    // videoEl.setAttribute("webkit-playsinline", "");
    videoEl.setAttribute("playsinline", "");

    // videoEl.setAttribute("allowfullscreen", "false");
    // videoEl.setAttribute("allow", "autoplay; encrypted-media; picture-in-picture");
  } else {
    videoEl.preload = "metadata";
    videoEl.muted = true;
    videoEl.playsinline = true;
  }

  const span = document.createElement("span");
  span.innerText = "Your browser does not support the video tag.";
  videoEl.appendChild(span);

  videoContainer.appendChild(videoEl);
  videoCard.appendChild(videoContainer);
  slide.appendChild(videoCard);

  return slide;
};

const createVideoWidget = (videos) => {
  const videoWidget = document.createElement("div");
  videoWidget.classList.add("pp-video-widget");

  const floatingCardVideo = document.createElement("div");
  floatingCardVideo.classList.add("floating-card-video");

  const swiper = document.createElement("div");
  swiper.classList.add("swiper");
  swiper.classList.add("dynamic-video-slider");

  const swiperWrapper = document.createElement("div");
  swiperWrapper.classList.add("swiper-wrapper");

  videos.forEach((video, index) => {
    const slide = createSlide(video, index, containerVideoCardDynamic);
    swiperWrapper.appendChild(slide);
  });

  swiper.appendChild(swiperWrapper);

  const videoOverlay = document.createElement("div");
  videoOverlay.classList.add("video-overlay");

  const videoHoverArea = document.createElement("div");
  videoHoverArea.classList.add("video-hover-area");

  if (isChrome) {
    const buttonMute = createButtonMute(containerVideoCardDynamic);
    videoHoverArea.appendChild(buttonMute);
  }

  const videoProductInfo = document.createElement("a");
  videoProductInfo.classList.add("video-product-info");
  videoProductInfo.classList.add("pp-video-widget-track-link");
  videoProductInfo.setAttribute("href", videos[0].product.url);
  videoProductInfo.setAttribute("target", "_blank");

  const productImg = document.createElement("img");
  productImg.classList.add("icon");
  productImg.setAttribute(
    "src",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAOCAYAAAD5YeaVAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC3SURBVHgBtVFREcIwDE12FTAHrQRwAA5wAEhAARKwABJQMAubAuqAOigvXXrketw4Pnh3b2nfXl7ajcgg59yDF3DQ2tv33JgfKAm8g3tZM/OaWsB4EHNN0ylPcFM9nfEHcEJSKiPnOqpe4NC5QpU0Pwe+k1QPqiXWcwb6juh0sQWl22P80dxjQLnp9uxM5/VD2kkSwV05c1WRGFsntFEnlH1HP+B/Zja/OC34gjzkgvJpPC0jgtMLROtWQ7Jq9xYAAAAASUVORK5CYII="
  );
  productImg.setAttribute("alt", "bag icon");

  const productTitle = document.createElement("div");
  productTitle.classList.add("product-title");

  const titleSpan = document.createElement("span");
  titleSpan.innerText = videos[0].product.title;
  productTitle.appendChild(titleSpan);

  const btnViewDeal = document.createElement("div");
  btnViewDeal.classList.add("btn-view-deal");
  btnViewDeal.innerText = "View deal";

  videoProductInfo.appendChild(productImg);
  videoProductInfo.appendChild(productTitle);
  videoProductInfo.appendChild(btnViewDeal);

  videoOverlay.appendChild(videoHoverArea);
  videoOverlay.appendChild(videoProductInfo);

  swiper.appendChild(videoOverlay);

  floatingCardVideo.appendChild(swiper);
  videoWidget.appendChild(floatingCardVideo);

  return videoWidget;
};

const createThumb = (video, index, container) => {
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide");

  const thumb = document.createElement("div");
  thumb.classList.add("video-thumb");

  const imgEl = document.createElement("img");
  imgEl.classList.add("thumb-icon");
  imgEl.src =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxMCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0wLjc1IDAuOTY2MjY4TDguODE1NDggNS41TDAuNzUgMTAuMDMzN1YwLjk2NjI2OFoiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41Ii8+DQo8L3N2Zz4NCg==";

  const videoEl = document.createElement("video");
  videoEl.classList.add(`${container}-video-thumb`);
  videoEl.setAttribute("data-index", `${container}-${index}`);
  videoEl.setAttribute("id", `${container}-video-thumb-${index}`);
  videoEl.src = video.src;

  thumb.appendChild(videoEl);
  slide.appendChild(thumb);

  return slide;
};

const createVideoControls = (container) => {
  //button play/pause

  const buttonPlay = document.createElement("div");
  buttonPlay.classList.add(`video-controls-button-play`);
  buttonPlay.classList.add(`${container}-button-play`);

  const svgPlay = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgPlay.setAttribute("class", `play ${container}-play`);
  svgPlay.setAttribute("viewBox", "0 0 9 12");
  svgPlay.setAttribute("fill", "none");
  svgPlay.setAttribute("xmlns", "http://www.w3.org/2000/svg");

  const pathPlay = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  pathPlay.setAttribute("stroke", "white");
  pathPlay.setAttribute("stroke-width", "1.5");
  pathPlay.setAttribute(
    "d",
    "M 0.754 1.462 L 9.387 5.996 L 0.754 10.53 L 0.754 1.462 Z"
  );

  svgPlay.appendChild(pathPlay);

  const svgPause = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  svgPause.classList.add(`pause`);
  svgPause.classList.add(`${container}-pause`);
  svgPause.setAttribute("viewBox", "0 0 500 500");
  svgPause.setAttribute("fill", "none");
  svgPause.setAttribute("xmlns", "http://www.w3.org/2000/svg");

  const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path1.setAttribute("style", "fill: rgb(255, 255, 255);");
  path1.setAttribute(
    "d",
    "M224,435.8V76.1c0-6.7-5.4-12.1-12.2-12.1h-71.6c-6.8,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6   C218.6,448,224,442.6,224,435.8z"
  );

  const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path2.setAttribute("style", "fill: rgb(255, 255, 255);");
  path2.setAttribute(
    "d",
    "M371.8,64h-71.6c-6.7,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6c6.7,0,12.2-5.4,12.2-12.2V76.1   C384,69.4,378.6,64,371.8,64z"
  );

  const path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path3.setAttribute("stroke", "white");
  path3.setAttribute("stroke-width", "1.5");
  path3.setAttribute("transform", "matrix(1, 0, 0, 1, 494.591288, 244.413555)");
  path3.setAttribute(
    "d",
    "M0.822266 1.05269L8.88774 5.58643L0.822266 10.1202V1.05269Z"
  );

  svgPause.appendChild(path1);
  svgPause.appendChild(path2);
  svgPause.appendChild(path3);

  buttonPlay.appendChild(svgPlay);
  buttonPlay.appendChild(svgPause);

  //progressbar

  const progressBar = document.createElement("div");
  progressBar.classList.add(`video-controls-progress-bar`);
  progressBar.classList.add(`${container}-progress-bar`);

  const progressFill = document.createElement("div");
  progressFill.classList.add(`progress-fill`);
  progressFill.classList.add(`${container}-progress-fill`);

  progressBar.appendChild(progressFill);

  //button mute

  const buttonMute = document.createElement("div");
  buttonMute.classList.add(`video-controls-button-mute`);
  buttonMute.classList.add(`${container}-button-mute`);

  const svgSoundOff = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  svgSoundOff.classList.add(`sound-off`);
  svgSoundOff.classList.add(`${container}-sound-off`);
  svgSoundOff.setAttribute("viewBox", "0 0 19 14");
  svgSoundOff.setAttribute("fill", "none");
  svgSoundOff.setAttribute("xmlns", "http://www.w3.org/2000/svg");

  const pathSoundOff = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  pathSoundOff.setAttribute("fill-rule", "evenodd");
  pathSoundOff.setAttribute("clip-rule", "evenodd");
  pathSoundOff.setAttribute(
    "d",
    "M7.10619 3.3169L4.44187 5.45654H1.61599V8.53516H4.44187L7.10619 10.6748V3.3169ZM3.88187 10.0745H0.831677C0.623664 10.0745 0.424171 9.99338 0.277083 9.84905C0.129996 9.70471 0.0473633 9.50894 0.0473633 9.30482V4.68688C0.0473633 4.48276 0.129996 4.28699 0.277083 4.14265C0.424171 3.99832 0.623664 3.91723 0.831677 3.91723H3.88187L8.03403 0.583078C8.09148 0.536858 8.16113 0.507603 8.23487 0.498718C8.3086 0.489834 8.3834 0.501686 8.45053 0.532894C8.51767 0.564103 8.5744 0.613384 8.6141 0.675C8.65381 0.736616 8.67486 0.808032 8.67481 0.880934V13.1108C8.67486 13.1837 8.65381 13.2551 8.6141 13.3167C8.5744 13.3783 8.51767 13.4276 8.45053 13.4588C8.3834 13.49 8.3086 13.5019 8.23487 13.493C8.16113 13.4841 8.09148 13.4548 8.03403 13.4086L3.88266 10.0745H3.88187ZM15.274 6.99585L18.0474 9.71735L16.9383 10.8056L14.165 8.08414L11.3917 10.8056L10.2827 9.71735L13.056 6.99585L10.2827 4.27435L11.3917 3.18605L14.165 5.90756L16.9383 3.18605L18.0474 4.27435L15.274 6.99585Z"
  );
  pathSoundOff.setAttribute("fill", "white");

  svgSoundOff.appendChild(pathSoundOff);

  const svgSoundOn = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  svgSoundOn.classList.add(`sound-on`);
  svgSoundOn.classList.add(`${container}-sound-on`);
  svgSoundOn.setAttribute("viewBox", "0 0 19 14");
  svgSoundOn.setAttribute("fill", "none");
  svgSoundOn.setAttribute("xmlns", "http://www.w3.org/2000/svg");

  const pathGroupSound1 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  pathGroupSound1.setAttribute("style", "fill: rgb(255, 255, 255);");
  pathGroupSound1.setAttribute(
    "d",
    "M 15.076 0.393 C 16.917 1.99 18.061 4.366 18.061 7.009 C 18.061 9.652 16.917 12.027 15.076 13.625 L 14.517 13.055 C 16.207 11.616 17.271 9.438 17.271 7.008 C 17.271 4.58 16.207 2.401 14.517 0.961 L 15.076 0.393 Z M 12.757 2.746 C 13.962 3.758 14.718 5.293 14.718 7.008 C 14.718 8.723 13.962 10.257 12.757 11.27 L 12.2 10.702 C 13.252 9.848 13.926 8.506 13.926 7.009 C 13.926 5.511 13.252 4.174 12.197 3.316 L 12.757 2.746 Z"
  );

  const pathGroupSound2 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  pathGroupSound2.setAttribute("style", "fill: white;");
  pathGroupSound2.setAttribute(
    "d",
    "M 7.089 3.271 L 4.425 5.411 L 1.599 5.411 L 1.599 8.49 L 4.425 8.49 L 7.089 10.629 L 7.089 3.271 Z M 3.865 10.029 L 0.814 10.029 C 0.606 10.029 0.407 9.948 0.26 9.803 C 0.113 9.659 0.03 9.463 0.03 9.259 L 0.03 4.641 C 0.03 4.437 0.113 4.241 0.26 4.097 C 0.407 3.953 0.606 3.872 0.814 3.872 L 3.865 3.872 L 8.017 0.537 C 8.074 0.491 8.144 0.462 8.218 0.453 C 8.291 0.444 8.366 0.456 8.433 0.487 C 8.5 0.518 8.557 0.568 8.597 0.629 C 8.636 0.691 8.657 0.762 8.657 0.835 L 8.657 13.065 C 8.657 13.138 8.636 13.209 8.597 13.271 C 8.557 13.333 8.5 13.382 8.433 13.413 C 8.366 13.444 8.291 13.456 8.218 13.447 C 8.144 13.438 8.074 13.409 8.017 13.363 L 3.865 10.029 Z"
  );

  const pathGroupSound3 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  pathGroupSound3.setAttribute(
    "style",
    "fill: rgb(255, 253, 253); stroke: rgb(255, 253, 253);"
  );
  pathGroupSound3.setAttribute(
    "d",
    "M 7.192 2.924 C 6.91 3.005 6.472 3.442 6.322 3.668 C 6.275 3.738 6.022 3.785 5.957 3.85 C 5.44 4.368 4.712 4.702 4.218 5.197 C 4.16 5.255 3.855 5.225 3.755 5.225 C 3.459 5.225 3.078 5.239 2.745 5.239 C 2.555 5.239 1.925 5.46 1.805 5.281 C 1.784 5.249 1.466 5.264 1.441 5.281 C 1.292 5.38 1.225 5.595 1.09 5.73 C 1.027 5.793 1.187 5.967 1.202 5.982 C 1.228 6.008 1.202 6.206 1.202 6.249 C 1.202 6.501 1.202 6.753 1.202 7.006 C 1.202 7.432 1.134 8.186 1.371 8.423 C 1.459 8.511 1.38 8.769 1.469 8.857 C 1.489 8.878 1.847 8.872 1.862 8.857 C 1.994 8.725 2.659 8.717 2.9 8.717 C 3.278 8.717 3.657 8.717 4.036 8.717 C 4.1 8.717 4.337 8.64 4.386 8.689 C 4.552 8.855 4.671 9.029 4.849 9.208 C 4.912 9.271 5.053 9.257 5.116 9.32 C 5.54 9.744 5.974 10.084 6.49 10.428 C 6.576 10.485 6.953 10.639 6.995 10.723 C 7.004 10.741 7.262 10.899 7.262 10.863 C 7.262 10.782 7.414 10.458 7.472 10.4 C 7.511 10.362 7.455 10.159 7.444 10.148 C 7.258 9.961 7.29 9.461 7.29 9.11 C 7.29 8.887 7.276 8.269 7.402 8.142 C 7.417 8.127 7.417 7.793 7.402 7.777 C 7.349 7.724 7.29 7.487 7.29 7.399 C 7.29 7.282 7.216 6.743 7.29 6.669 C 7.415 6.545 7.402 5.854 7.402 5.645 C 7.402 5.12 7.458 4.709 7.458 4.215 C 7.458 4.126 7.515 3.697 7.458 3.64 C 7.281 3.462 7.3 3.24 7.178 2.994 C 7.163 2.965 7.009 2.96 7.009 2.924"
  );

  svgSoundOn.appendChild(pathGroupSound1);
  svgSoundOn.appendChild(pathGroupSound2);
  svgSoundOn.appendChild(pathGroupSound3);

  buttonMute.appendChild(svgSoundOff);
  buttonMute.appendChild(svgSoundOn);

  return { buttonPlay, progressBar, buttonMute };
};

const createVideoCard = (video, index, container) => {
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide");
  slide.classList.add("swiper-slide-gallery-video");
  slide.setAttribute("data-hash", `video-${index}`);

  const videoCard = document.createElement("div");
  videoCard.classList.add("video-card");
  videoCard.setAttribute("data-container", container);

  const videoContainer = document.createElement("div");
  videoContainer.classList.add("video-container");

  const videoEl = document.createElement("video");
  videoEl.classList.add("video");
  videoEl.classList.add(`${container}-video`);
  videoEl.setAttribute("id", `${container}-video-${index}`);
  videoEl.setAttribute("data-container", `${container}`);
  videoEl.src = video.src;
  videoEl.type = "video/mp4";
  // videoEl.preload = "metadata";
  // videoEl.muted = true;
  // videoEl.playsinline = true;

  if (isSafari) {
    videoEl.preload = "auto";
    videoEl.setAttribute("muted", "");
    videoEl.setAttribute("playsinline", "");
  } else {
    videoEl.preload = "metadata";
    videoEl.muted = true;
    videoEl.playsinline = true;
  }

  const span = document.createElement("span");
  span.innerText = "Your browser does not support the video tag.";

  videoEl.appendChild(span);
  videoContainer.appendChild(videoEl);
  videoCard.appendChild(videoContainer);
  slide.appendChild(videoCard);

  const videoCardTextContainer = document.createElement("div");
  videoCardTextContainer.classList.add("video-card-text-container");

  const videoCardTextWrapper = document.createElement("div");
  videoCardTextWrapper.classList.add("video-card-text-wrapper");

  const brand = document.createElement("div");
  brand.classList.add("brand");
  brand.innerText = video.product.brand;

  const title = document.createElement("div");
  title.classList.add("title");
  title.innerText = video.product.title;

  videoCardTextWrapper.appendChild(brand);
  videoCardTextWrapper.appendChild(title);
  videoCardTextContainer.appendChild(videoCardTextWrapper);

  const videoCardButtonWrapper = document.createElement("div");
  videoCardButtonWrapper.classList.add("video-card-button-wrapper");

  const videoCardButton = document.createElement("a");
  videoCardButton.classList.add("video-card-button");
  videoCardButton.classList.add("pp-video-widget-track-link");
  videoCardButton.setAttribute("href", video.product.url);
  videoCardButton.setAttribute("target", "_blank");
  videoCardButton.innerText = "Vew deal";

  videoCardButtonWrapper.appendChild(videoCardButton);
  videoCardTextContainer.appendChild(videoCardButtonWrapper);
  slide.appendChild(videoCardTextContainer);

  const videoControlsContainer = document.createElement("div");
  videoControlsContainer.classList.add("video-controls-container");

  const { buttonPlay, progressBar, buttonMute } =
    createVideoControls(container);

  videoControlsContainer.appendChild(buttonPlay);
  videoControlsContainer.appendChild(progressBar);
  videoControlsContainer.appendChild(buttonMute);

  slide.appendChild(videoControlsContainer);

  return slide;
};

const createProductButtonExpandable = (
  product,
  containerName,
  ...$elements
) => {
  const productButtonExpandableContainer = document.createElement("div");
  productButtonExpandableContainer.classList.add(
    "product-button-expandable-container"
  );
  productButtonExpandableContainer.setAttribute(
    "id",
    `${containerName}-product-button-expandable-container`
  );

  const productButtonExpandable = document.createElement("a");
  productButtonExpandable.classList.add("product-button-expandable");
  productButtonExpandable.classList.add("pp-video-widget-track-link");
  productButtonExpandable.setAttribute("href", `${product.url}`);
  productButtonExpandable.setAttribute("target", "_blank");

  const productImageContainer = document.createElement("div");
  productImageContainer.classList.add("product-image-container");

  const productImage = document.createElement("div");
  productImage.classList.add("product-image");
  productImage.setAttribute("style", `background-image: url("${product.img}")`);

  productImageContainer.appendChild(productImage);
  productButtonExpandable.appendChild(productImageContainer);

  const titleContainer = document.createElement("div");
  titleContainer.classList.add("title-container");

  const productTitle = document.createElement("div");
  productTitle.classList.add("product-title");
  productTitle.innerText = product.title;
  titleContainer.appendChild(productTitle);

  const brandName = document.createElement("div");
  brandName.classList.add("brand-name");

  const verifiedIconContainer = document.createElement("div");
  verifiedIconContainer.classList.add("verified-icon-container");

  const verifiedIcon = document.createElement("img");
  verifiedIcon.classList.add("verified-icon");
  verifiedIcon.src =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSI2IiB2aWV3Qm94PSIwIDAgOSA2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZD0iTTMuNTgxODMgMy45ODU3MUw3LjQyNSAwLjE0MTg0Nkw4LjQwMzkgMS4xMjAwNUwzLjU4MTgzIDUuOTQyMTJMMC44NTY0NDUgMy4yMTY3M0wxLjgzNDY1IDIuMjM4NTNMMy41ODE4MyAzLjk4NTcxWiIgZmlsbD0id2hpdGUiLz4NCjwvc3ZnPg0K";
  verifiedIcon.setAttribute("alt", "verified icon");
  verifiedIconContainer.appendChild(verifiedIcon);
  brandName.appendChild(verifiedIconContainer);

  const brandTitle = document.createElement("div");
  brandTitle.classList.add("brand-title");
  brandTitle.innerText = product.brand;
  brandName.appendChild(brandTitle);

  titleContainer.appendChild(brandName);
  productButtonExpandable.appendChild(titleContainer);

  const btnLink = document.createElement("div");
  btnLink.classList.add("btn-link");
  btnLink.innerText = "View Deal";
  productButtonExpandable.appendChild(btnLink);
  productButtonExpandableContainer.appendChild(productButtonExpandable);

  const showContentIconContainer = document.createElement("div");
  showContentIconContainer.classList.add("show-content-icon-container");
  showContentIconContainer.setAttribute(
    "id",
    `${containerName}-show-content-icon-container`
  );

  const showContentIcon = document.createElement("img");
  showContentIcon.classList.add("show-content-icon");
  showContentIcon.setAttribute("id", `${containerName}-show-content-icon`);
  showContentIcon.setAttribute("alt", `arrow icon`);
  showContentIcon.src =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDE0IDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNNy4yNTE3MiA1LjU3MTA5TDEyLjIwMTcgMC42MjEwOTRMMTMuNjE1NyAyLjAzNTA5TDcuMjUxNzIgOC4zOTkwOUwwLjg4NzcyMiAyLjAzNTA5TDIuMzAxNzIgMC42MjEwOTNMNy4yNTE3MiA1LjU3MTA5WiIgZmlsbD0iIzA5MTIxRiIvPg0KPC9zdmc+DQo=";

  showContentIconContainer.appendChild(showContentIcon);
  productButtonExpandableContainer.appendChild(showContentIconContainer);

  const productContent = document.createElement("div");
  productContent.classList.add("product-content");
  productContent.setAttribute("id", `${containerName}-product-content`);

  $elements.forEach(($element) => {
    productContent.appendChild($element);
  });

  const script = document.createElement("script");
  script.textContent = `
  function showContent() {
    document.getElementById(\`${containerName}-product-button-expandable-container\`).classList.toggle("active");
    document.getElementById(\`${containerName}-show-content-icon\`).classList.toggle("active");
    document.getElementById(\`${containerName}-product-content\`).classList.toggle("active");
  }
  document.getElementById(\`${containerName}-show-content-icon-container\`).addEventListener("click", showContent);
	`;
  productContent.appendChild(script);

  return { productButtonExpandableContainer, productContent };
};

const createRating = (rating, rating_count) => {
  const $rating = document.createElement("div");
  $rating.classList.add("rating");

  [1, 2, 3, 4, 5].forEach(() => {
    const ratingIcon = document.createElement("div");
    ratingIcon.classList.add("rating-icon");

    const ratingIconImg = document.createElement("img");
    ratingIconImg.src =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI3IiB2aWV3Qm94PSIwIDAgOCA3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZD0iTTMuMTUzMDkgNC4yMjQzMUw2LjY3MjYxIDAuNzA0MTAyTDcuNjQ3MDcgMS42Nzc4N0wzLjE1MzA5IDYuMTcxODRMMC4xNzU3ODEgMy4xOTQ1M0wxLjE0OTU1IDIuMjIwNzZMMy4xNTMwOSA0LjIyNDMxWiIgZmlsbD0iIzQ2NUE2NiIvPg0KPC9zdmc+DQo=";
    ratingIconImg.setAttribute("alt", "rating icon");

    ratingIcon.appendChild(ratingIconImg);
    $rating.appendChild(ratingIcon);
  });

  const ratingTitle = document.createElement("div");
  ratingTitle.classList.add("rating-title");
  ratingTitle.setAttribute("id", "info-sidebar-rating-title");
  ratingTitle.innerText = rating;
  $rating.appendChild(ratingTitle);

  const ratingCount = document.createElement("div");
  ratingCount.classList.add("rating-count");
  ratingCount.setAttribute("id", "info-sidebar-rating-count");
  ratingCount.innerText = "Based on " + rating_count + " reviews";
  $rating.appendChild(ratingCount);

  return $rating;
};

const createPros = (pros) => {
  const prosWrapper = document.createElement("div");
  prosWrapper.classList.add("pros-wrapper");

  const prosTitle = document.createElement("h4");
  prosTitle.classList.add("title");
  prosTitle.innerText = "Pros";
  prosWrapper.appendChild(prosTitle);

  const ulPros = document.createElement("ul");
  ulPros.classList.add("pros");
  ulPros.setAttribute("id", "info-sidebar-pros");

  pros.forEach((p) => {
    const li = document.createElement("li");
    li.innerText = p;
    ulPros.appendChild(li);
  });
  prosWrapper.appendChild(ulPros);

  return prosWrapper;
};

const createProductButton = (product) => {
  const productButton = document.createElement("div");
  productButton.classList.add("product-button");

  const productImage = document.createElement("div");
  productImage.classList.add("product-image");
  productImage.setAttribute("style", `background-image: url("${product.img}")`);
  productButton.appendChild(productImage);

  const productTitleContainer = document.createElement("div");
  productTitleContainer.classList.add("product-title-container");

  const productTitle = document.createElement("div");
  productTitle.classList.add("product-title");
  productTitle.innerText = product.title;
  productTitleContainer.appendChild(productTitle);

  productButton.appendChild(productTitleContainer);

  return productButton;
};

const createGalleryWidget = (
  title,
  text,
  textTitle = "",
  isReview = true,
  product
) => {
  const galleryWidget = document.createElement("div");
  galleryWidget.classList.add("gallery-widget");

  const galleryWidgetTitle = document.createElement("div");
  galleryWidgetTitle.classList.add("gallery-widget-title");
  galleryWidgetTitle.innerText = title;
  galleryWidget.appendChild(galleryWidgetTitle);

  if (isReview) {
    const galleryWidgetTextRreview = document.createElement("div");
    galleryWidgetTextRreview.classList.add("gallery-widget-text-review");
    galleryWidgetTextRreview.innerText = text;
    galleryWidget.appendChild(galleryWidgetTextRreview);
  } else {
    const galleryWidgetTextTitle = document.createElement("div");
    galleryWidgetTextTitle.classList.add("gallery-widget-text-title");
    galleryWidgetTextTitle.innerText = textTitle;
    galleryWidget.appendChild(galleryWidgetTextTitle);

    const galleryWidgetText = document.createElement("div");
    galleryWidgetText.classList.add("gallery-widget-text");
    galleryWidgetText.innerText = text;
    galleryWidget.appendChild(galleryWidgetText);
  }

  const productLink = document.createElement("a");
  productLink.setAttribute("href", product.url);
  productLink.setAttribute("target", "_blank");
  productLink.setAttribute("style", "text-decoration: none; color: white;");
  productLink.classList.add("pp-video-widget-track-link");

  const productButton = createProductButton(product);
  productLink.appendChild(productButton);

  galleryWidget.appendChild(productLink);

  return galleryWidget;
};

const createGallerySidebar = (video) => {
  const gallerySidebar = document.createElement("div");
  gallerySidebar.classList.add("gallery-sidebar");

  const infoSidebar = document.createElement("div");
  infoSidebar.classList.add("info-sidebar");

  const productInfoButton = document.createElement("div");
  productInfoButton.classList.add("product-info-button");

  const rating = createRating(video.product.rating, video.product.rating_count);

  const title = document.createElement("h4");
  title.classList.add("title");
  title.innerText = "About product";

  const productText = document.createElement("div");
  productText.classList.add("product-text");
  productText.setAttribute("id", "info-sidebar-product-text");
  productText.innerText = video.product.summary;

  const pros = createPros(video.product.pros);

  const similarProductsWrapper = document.createElement("div");
  similarProductsWrapper.classList.add("similar-products-wrapper");

  if (video.similar_products && video.similar_products.length) {
    const similarTitle = document.createElement("h4");
    similarTitle.classList.add("title");
    similarTitle.innerText = "Similar products";
    similarProductsWrapper.appendChild(similarTitle);

    video.similar_products.forEach((product, index) => {
      const rating = createRating(product.rating, product.rating_count);

      const title = document.createElement("h4");
      title.classList.add("title");
      title.innerText = "About product";

      const productText = document.createElement("div");
      productText.classList.add("product-text");
      productText.setAttribute("id", "info-sidebar-product-text");
      productText.innerText = product.summary;

      const pros = createPros(product.pros);

      const btnLink = document.createElement("a");
      btnLink.classList.add("btn-link");
      btnLink.classList.add("pp-video-widget-track-link");
      btnLink.setAttribute("href", `${product.url}`);
      btnLink.setAttribute("target", "_blank");
      btnLink.innerText = "View Deal";

      const onAmazonText = document.createElement("div");
      onAmazonText.classList.add("on-amazon-text");
      onAmazonText.innerText = "On Amazon";

      const { productButtonExpandableContainer, productContent } =
        createProductButtonExpandable(
          product,
          `info-sidebar-${index}`,
          rating,
          title,
          productText,
          pros,
          btnLink,
          onAmazonText
        );

      similarProductsWrapper.appendChild(productButtonExpandableContainer);
      similarProductsWrapper.appendChild(productContent);
    });
  }

  const { productButtonExpandableContainer, productContent } =
    createProductButtonExpandable(
      video.product,
      `info-sidebar-header`,
      rating,
      title,
      productText,
      pros,
      similarProductsWrapper
    );

  productInfoButton.appendChild(productButtonExpandableContainer);
  productInfoButton.appendChild(productContent);
  infoSidebar.appendChild(productInfoButton);

  const reviewGalleryWidget = createGalleryWidget(
    "Latest Review",
    video.product.review,
    null,
    true,
    video.product
  );
  infoSidebar.appendChild(reviewGalleryWidget);

  const faqGalleryWidget = createGalleryWidget(
    "FAQ",
    video.product.faq.answer,
    video.product.faq.question,
    false,
    video.product
  );
  infoSidebar.appendChild(faqGalleryWidget);

  const bottomSection = document.createElement("div");
  bottomSection.classList.add("bottom-section");

  const btnLink = document.createElement("a");
  btnLink.classList.add("btn-link");
  btnLink.classList.add("pp-video-widget-track-link");
  btnLink.setAttribute("href", `${video.product.url}`);
  btnLink.setAttribute("target", "_blank");
  btnLink.innerText = "View Deal";
  bottomSection.appendChild(btnLink);

  const onAmazonText = document.createElement("div");
  onAmazonText.classList.add("on-amazon-text");
  onAmazonText.innerText = "On Amazon";
  bottomSection.appendChild(onAmazonText);

  infoSidebar.appendChild(bottomSection);

  gallerySidebar.appendChild(infoSidebar);

  return gallerySidebar;
};

const createPopUpMobileWidget = (product) => {
  const popUpMobileWidgetContainer = document.createElement("div");
  popUpMobileWidgetContainer.classList.add("pop-up-mobile-widget-container");

  const popUpMobileWidgetHeader = document.createElement("div");
  popUpMobileWidgetHeader.classList.add("pop-up-mobile-widget-header");

  const productImage = document.createElement("img");
  productImage.classList.add("product-image");
  productImage.src = product.img;
  popUpMobileWidgetHeader.appendChild(productImage);

  const productTitleContainer = document.createElement("div");
  productTitleContainer.classList.add("product-title-container");

  const productTitle = document.createElement("div");
  productTitle.classList.add("product-title");
  productTitle.innerText = product.title;
  productTitleContainer.appendChild(productTitle);

  const brandName = document.createElement("div");
  brandName.classList.add("brand-name");

  const verifiedIconContainer = document.createElement("div");
  verifiedIconContainer.classList.add("verified-icon-container");

  const verifiedIcon = document.createElement("img");
  verifiedIcon.classList.add("verified-icon");
  verifiedIcon.src =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSI2IiB2aWV3Qm94PSIwIDAgOSA2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZD0iTTMuNTgxODMgMy45ODU3MUw3LjQyNSAwLjE0MTg0Nkw4LjQwMzkgMS4xMjAwNUwzLjU4MTgzIDUuOTQyMTJMMC44NTY0NDUgMy4yMTY3M0wxLjgzNDY1IDIuMjM4NTNMMy41ODE4MyAzLjk4NTcxWiIgZmlsbD0id2hpdGUiLz4NCjwvc3ZnPg0K";
  verifiedIcon.setAttribute("alt", "verified icon");
  verifiedIconContainer.appendChild(verifiedIcon);
  brandName.appendChild(verifiedIconContainer);

  const brand = document.createElement("div");
  brand.classList.add("brand");
  brand.innerText = product.brand;
  brandName.appendChild(brand);

  productTitleContainer.appendChild(brandName);

  popUpMobileWidgetHeader.appendChild(productTitleContainer);

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  const widgetArrowIcon = document.createElement("div");
  widgetArrowIcon.classList.add("widget-arrow-icon");

  const widgetArrowIconImg = document.createElement("img");
  widgetArrowIconImg.src =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDE0IDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNNy4yNTE3MiA1LjU3MTA5TDEyLjIwMTcgMC42MjEwOTRMMTMuNjE1NyAyLjAzNTA5TDcuMjUxNzIgOC4zOTkwOUwwLjg4NzcyMiAyLjAzNTA5TDIuMzAxNzIgMC42MjEwOTNMNy4yNTE3MiA1LjU3MTA5WiIgZmlsbD0iIzA5MTIxRiIvPg0KPC9zdmc+DQo=";
  widgetArrowIconImg.setAttribute("alt", "arrow icon");
  widgetArrowIcon.appendChild(widgetArrowIconImg);
  buttonContainer.appendChild(widgetArrowIcon);

  const btnShop = document.createElement("a");
  btnShop.classList.add("btn-shop");
  btnShop.classList.add("pp-video-widget-track-link");
  btnShop.setAttribute("href", product.url);
  btnShop.setAttribute("target", "_blank");

  const btnShopImg = document.createElement("img");
  btnShopImg.src =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNyAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNi41MDcgMTIuOTU1OUMxNi41MDcgMTMuNTUxMSAxNi4xNzU0IDE0LjY5NzMgMTUuNDMxMiAxNS4zMjdDMTUuMjgyMSAxNS40NDE2IDE1LjEzMjMgMTUuMzc2OSAxNS4xOTc4IDE1LjIwOTlDMTUuNDE0OCAxNC42NzkzIDE1LjkxMTggMTMuNDUyIDE1LjY3ODQgMTMuMTY5NkMxNS41MTQ3IDEyLjk1NSAxNC44MzUxIDEyLjk3MDYgMTQuMjU1NCAxMy4wMjA1QzEzLjk5MDIgMTMuMDU0MSAxMy43NTg1IDEzLjA2OTcgMTMuNTc3NSAxMy4xMDY1QzEzLjQxMTMgMTMuMTIwNCAxMy4zNzY5IDEyLjk3MzEgMTMuNTQzOSAxMi44NTg0QzEzLjc1ODUgMTIuNzA3IDEzLjk5MDIgMTIuNTkyMyAxNC4yNTYzIDEyLjUwOEMxNS4xOTc4IDEyLjIyNjQgMTYuMjg2OCAxMi4zOTU4IDE2LjQ0MjMgMTIuNTc2QzE2LjQ3MTggMTIuNjEwMyAxNi41MDc4IDEyLjcwNyAxNi41MDc4IDEyLjk1NUwxNi41MDcgMTIuOTU1OVpNMTQuOTM0MiAxNC4wMTUzQzE0LjcxOCAxNC4xODA1IDE0LjQ5MSAxNC4zMzA5IDE0LjI1NDYgMTQuNDY1NkMxMi41MTcyIDE1LjUwOTUgMTAuMjY3MyAxNi4wNTY1IDguMzEyMTUgMTYuMDU2NUM1LjE2NTcgMTYuMDU2NSAyLjM1MTY2IDE0Ljg5NjMgMC4yMTYzNjUgMTIuOTU1QzAuMDMzNzg0MSAxMi44MDYgMC4xODUyNTMgMTIuNTg5OSAwLjM5ODk0NiAxMi43MDdDMi42OTk2MyAxNC4wNDk3IDUuNTQ3MjMgMTQuODYxOSA4LjQ5NTU1IDE0Ljg2MTlDMTAuMzUgMTQuODYxOSAxMi4zNTAyIDE0LjUxNDggMTQuMjU1NCAxMy43NjgxQzE0LjM4ODEgMTMuNzE4MSAxNC41MzcxIDEzLjY1MDIgMTQuNjY3MyAxMy42MDI3QzE0Ljk2NzcgMTMuNDY3NiAxNS4yMzIyIDEzLjgwMTYgMTQuOTM0MiAxNC4wMTUzWk05Ljg4MjUgNC45ODQ1M0M5Ljg4MjUgNC4xMzIyMSA5LjkxNjA3IDMuNjMwMzIgOS42MzM2IDMuMTk5NjZDOS4zODMwNyAyLjg0NTE0IDguOTUxNTkgMi42MzIyNyA4LjM0OTgxIDIuNjY1ODRDNy42OTY0NSAyLjcwMTg2IDYuOTk0NzggMy4xMzAwNyA2LjgxNTQ3IDMuOTE1MjRDNi43ODEwOSA0LjA5NTM3IDYuNjc1NDcgNC4yNzIyMiA2LjQ1ODUgNC4zMTA3TDQuNDY0MDMgNC4wNTY4OUM0LjMyMTU3IDQuMDI0MTQgNC4xMDU0MiAzLjkxNTI0IDQuMTc1ODMgMy42MzAzMkM0LjYwNDA0IDEuMzc3MTMgNi41Mjk3MyAwLjU5MTk0NyA4LjM0OTgxIDAuNDg2MzI4SDguNzc4MDFDOS43NzY4OSAwLjQ4NjMyOCAxMS4wNTk5IDAuNzcyMDcxIDExLjg4MTEgMS41MjEyM0MxMi44Nzc1IDIuNDUxMzIgMTIuNzcxOSAzLjcwMDczIDEyLjc3MTkgNS4wNTgyMlY4LjI3MzQ0QzEyLjc3MTkgOS4yMzc5MyAxMy4xNjI0IDkuNjY1MzEgMTMuNTU2MiAxMC4xNjhDMTMuNjYyNyAxMC4zNDczIDEzLjY5ODcgMTAuNTU4NiAxMy41MTk0IDEwLjcwNDNDMTMuMTI2NCAxMS4wNjA1IDEyLjM3OCAxMS43MDI0IDExLjk0OTggMTIuMDU4NUMxMS44MDc0IDEyLjE2NzQgMTEuNTUwMyAxMi4xNzg5IDExLjQ1MDQgMTIuMDk1NEMxMC44MiAxMS41NjczIDEwLjY2NiAxMS4yNzQyIDEwLjI3NTUgMTAuNzM3OUM5LjU5NTk0IDExLjQ1MSA5LjAyNjA5IDExLjg0NDggOC4zNDczNSAxMi4wNTg1QzcuODcwMDMgMTIuMTc5NyA3LjM3OTE1IDEyLjIzOTEgNi44ODY3MSAxMi4yMzU0QzUuMTc1NTIgMTIuMjM1NCAzLjgxOTY3IDExLjE2ODUgMy44MTk2NyA5LjA1ODYyQzMuODE5NjcgNy4zODEwMSA0LjcxMjExIDYuMjQwNDkgNi4wMzAyOSA1LjcwMDkzQzcuMzQ4NDggNS4xNjA1NiA5LjI2NDM1IDQuOTg4NjIgOS44ODE2OSA0Ljk4NTM1TDkuODgyNSA0Ljk4NDUzWk05LjQ5MTE0IDkuMjM1NDdDOS45MTY4OSA4LjUyMTUyIDkuODgxNjkgNy45MzY5NCA5Ljg4MTY5IDYuNjI3NzZDOS4zNDg2OCA2LjYyNzc2IDguODEyNCA2LjY2NDYgOC4zNDk4MSA2Ljc3MzQ5QzcuNDk0MjIgNy4wMjE1NyA2LjgxNTQ3IDcuNTYwMzEgNi44MTU0NyA4LjcwMTY1QzYuODE1NDcgOS41OTQwOCA3LjI3OTcgMTAuMjAxNiA4LjA2NDA2IDEwLjIwMTZDOC4xNzIxNCAxMC4yMDE2IDguMjY3MTEgMTAuMTg4NSA4LjM0OTgxIDEwLjE2NDdDOC44OTgzNyAxMC4wMTI1IDkuMjQwNjEgOS43MzczNiA5LjQ5MTE0IDkuMjM1NDdaIiBmaWxsPSIjMEQwRDBEIi8+DQo8L3N2Zz4NCg==";
  btnShopImg.setAttribute("alt", "amazon logo");
  btnShop.appendChild(btnShopImg);

  const btnShopText = document.createElement("p");
  btnShopText.innerText = "Shop";
  btnShop.appendChild(btnShopText);

  buttonContainer.appendChild(btnShop);
  popUpMobileWidgetHeader.appendChild(buttonContainer);
  popUpMobileWidgetContainer.appendChild(popUpMobileWidgetHeader);

  const popUpMobileWidgetContent = document.createElement("div");
  popUpMobileWidgetContent.classList.add("pop-up-mobile-widget-content");

  const rating = createRating(product.rating, product.rating_count);
  popUpMobileWidgetContent.appendChild(rating);

  const productText = document.createElement("div");
  productText.classList.add("product-text");
  productText.innerText = product.summary;
  popUpMobileWidgetContent.appendChild(productText);

  const pros = createPros(product.pros);
  popUpMobileWidgetContent.appendChild(pros);

  const btnLink = document.createElement("a");
  btnLink.classList.add("btn-link");
  btnLink.classList.add("pp-video-widget-track-link");
  btnLink.setAttribute("href", `${product.url}`);
  btnLink.setAttribute("target", "_blank");
  btnLink.innerText = "View Deal";
  popUpMobileWidgetContent.appendChild(btnLink);

  const onAmazonText = document.createElement("div");
  onAmazonText.classList.add("on-amazon-text");
  onAmazonText.innerText = "On Amazon";
  popUpMobileWidgetContent.appendChild(onAmazonText);

  popUpMobileWidgetContainer.appendChild(popUpMobileWidgetContent);

  return popUpMobileWidgetContainer;
};

const createGallery = () => {
  const galleryContainer = document.createElement("div");
  galleryContainer.classList.add("pp-gallery-container");

  const gallery = document.createElement("div");
  gallery.classList.add("gallery");

  const galleryMedia = document.createElement("div");
  galleryMedia.classList.add("gallery-media");

  const content = document.createElement("div");
  content.classList.add("content");

  const iconCross = document.createElement("div");
  iconCross.classList.add("icon-cross");
  iconCross.setAttribute("id", "icon-cross-desktop");

  const iconCrossImg = document.createElement("img");
  iconCrossImg.src =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xMC45NTkgOC43NTMzTDE5LjYyNTkgMC4wODY0MjU4TDIwLjk1OSAxLjQxOTU1TDEyLjI5MjEgMTAuMDg2NEwyMC45NTkgMTguNzUzM0wxOS42MjU5IDIwLjA4NjRMMTAuOTU5IDExLjQxOTVMMi4yOTIxMSAyMC4wODY0TDAuOTU4OTg0IDE4Ljc1MzNMOS42MjU4NiAxMC4wODY0TDAuOTU4OTg0IDEuNDE5NTVMMi4yOTIxMSAwLjA4NjQyNThMMTAuOTU5IDguNzUzM1oiIGZpbGw9IndoaXRlIi8+DQo8L3N2Zz4NCg==";

  iconCross.appendChild(iconCrossImg);
  content.appendChild(iconCross);

  const galleryBackgroundContainer = document.createElement("div");
  galleryBackgroundContainer.classList.add("gallery-background-container");

  const swiperGalleryBackground = document.createElement("div");
  swiperGalleryBackground.classList.add("swiper");
  swiperGalleryBackground.classList.add("gallery-background");

  const swiperWrapperGalleryBackground = document.createElement("div");
  swiperWrapperGalleryBackground.classList.add("swiper-wrapper");

  videos.forEach((video, index) => {
    const thumb = createThumb(video, index, containerGallery);
    swiperWrapperGalleryBackground.appendChild(thumb);
  });

  swiperGalleryBackground.appendChild(swiperWrapperGalleryBackground);
  galleryBackgroundContainer.appendChild(swiperGalleryBackground);
  content.appendChild(galleryBackgroundContainer);

  const contentSwiper = document.createElement("div");
  contentSwiper.classList.add("content-swiper");

  const thumbsSwiperContainer = document.createElement("div");
  thumbsSwiperContainer.classList.add("thumbs-swiper-container");

  const thumbsSwiper = document.createElement("div");
  thumbsSwiper.classList.add("swiper");
  thumbsSwiper.classList.add("thumbs-swiper");

  const thumbsSwiperWrapper = document.createElement("div");
  thumbsSwiperWrapper.classList.add("swiper-wrapper");

  videos.forEach((video, index) => {
    const thumb = createThumb(video, index, containerGallery);
    thumbsSwiperWrapper.appendChild(thumb);
  });

  thumbsSwiper.appendChild(thumbsSwiperWrapper);
  thumbsSwiperContainer.appendChild(thumbsSwiper);
  contentSwiper.appendChild(thumbsSwiperContainer);

  const gallerySwiperContainer = document.createElement("div");
  gallerySwiperContainer.classList.add("gallery-swiper-container");

  const gallerySwiper = document.createElement("div");
  gallerySwiper.classList.add("swiper");
  gallerySwiper.classList.add("gallery-swiper");

  const gallerySwiperWrapper = document.createElement("div");
  gallerySwiperWrapper.classList.add("swiper-wrapper");

  videos.forEach((video, index) => {
    const slide = createVideoCard(video, index, containerGallery);
    gallerySwiperWrapper.appendChild(slide);
  });

  gallerySwiper.appendChild(gallerySwiperWrapper);
  gallerySwiperContainer.appendChild(gallerySwiper);

  const gallerySwiperPaginationFraction = document.createElement("div");
  gallerySwiperPaginationFraction.classList.add("swiper-pagination-fraction");

  gallerySwiperContainer.appendChild(gallerySwiperPaginationFraction);

  const galleryMobileHeader = document.createElement("div");
  galleryMobileHeader.classList.add("gallery-mobile-header");

  const galleryIconCross = document.createElement("div");
  galleryIconCross.classList.add("icon-cross");

  const galleryIconCrossImg = document.createElement("img");
  galleryIconCrossImg.src =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xMC45NTkgOC43NTMzTDE5LjYyNTkgMC4wODY0MjU4TDIwLjk1OSAxLjQxOTU1TDEyLjI5MjEgMTAuMDg2NEwyMC45NTkgMTguNzUzM0wxOS42MjU5IDIwLjA4NjRMMTAuOTU5IDExLjQxOTVMMi4yOTIxMSAyMC4wODY0TDAuOTU4OTg0IDE4Ljc1MzNMOS42MjU4NiAxMC4wODY0TDAuOTU4OTg0IDEuNDE5NTVMMi4yOTIxMSAwLjA4NjQyNThMMTAuOTU5IDguNzUzM1oiIGZpbGw9IndoaXRlIi8+DQo8L3N2Zz4NCg==";

  galleryIconCross.appendChild(galleryIconCrossImg);
  galleryMobileHeader.appendChild(galleryIconCross);

  gallerySwiperContainer.appendChild(galleryMobileHeader);

  const gallerySwiperButtons = document.createElement("div");
  gallerySwiperButtons.classList.add("swiper-buttons");
  gallerySwiperButtons.setAttribute("id", "mobile-swiper-buttons");

  const gallerySwiperButtonNext = document.createElement("div");
  gallerySwiperButtonNext.classList.add("gallery-swiper-button-next");

  const gallerySwiperButtonNextImg = document.createElement("img");
  gallerySwiperButtonNextImg.src =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iNyIgdmlld0JveD0iMCAwIDExIDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNNS4zNjg2OCAyLjI5NDk4TDEuMzY1MzIgNi4yOTgzNEwwLjIyMTczNyA1LjE1NDc2TDUuMzY4NjggMC4wMDc4MTIyOEwxMC41MTU2IDUuMTU0NzZMOS4zNzIwNCA2LjI5ODM0TDUuMzY4NjggMi4yOTQ5OFoiIGZpbGw9IndoaXRlIi8+DQo8L3N2Zz4NCg==";

  gallerySwiperButtonNext.appendChild(gallerySwiperButtonNextImg);

  const gallerySwiperButtonPrev = document.createElement("div");
  gallerySwiperButtonPrev.classList.add("gallery-swiper-button-prev");

  const gallerySwiperButtonPrevImg = document.createElement("img");
  gallerySwiperButtonPrevImg.src =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iNyIgdmlld0JveD0iMCAwIDExIDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNNS4zNjg2OCAyLjI5NDk4TDEuMzY1MzIgNi4yOTgzNEwwLjIyMTczNyA1LjE1NDc2TDUuMzY4NjggMC4wMDc4MTIyOEwxMC41MTU2IDUuMTU0NzZMOS4zNzIwNCA2LjI5ODM0TDUuMzY4NjggMi4yOTQ5OFoiIGZpbGw9IndoaXRlIi8+DQo8L3N2Zz4NCg==";

  gallerySwiperButtonPrev.appendChild(gallerySwiperButtonPrevImg);

  gallerySwiperButtons.appendChild(gallerySwiperButtonNext);
  gallerySwiperButtons.appendChild(gallerySwiperButtonPrev);

  gallerySwiperContainer.appendChild(gallerySwiperButtons);

  contentSwiper.appendChild(gallerySwiperContainer);

  content.appendChild(contentSwiper);

  const controls = document.createElement("div");
  controls.classList.add("controls");

  const controlsSwiperButtons = document.createElement("div");
  controlsSwiperButtons.classList.add("swiper-buttons");

  // const controlsSwiperButtonNext = document.createElement("div");
  // controlsSwiperButtonNext.classList.add("gallery-swiper-button-next");

  // const controlsSwiperButtonNextImg = document.createElement("img");
  // controlsSwiperButtonNextImg.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iNyIgdmlld0JveD0iMCAwIDExIDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNNS4zNjg2OCAyLjI5NDk4TDEuMzY1MzIgNi4yOTgzNEwwLjIyMTczNyA1LjE1NDc2TDUuMzY4NjggMC4wMDc4MTIyOEwxMC41MTU2IDUuMTU0NzZMOS4zNzIwNCA2LjI5ODM0TDUuMzY4NjggMi4yOTQ5OFoiIGZpbGw9IndoaXRlIi8+DQo8L3N2Zz4NCg==";

  // controlsSwiperButtonNext.appendChild(controlsSwiperButtonNextImg);

  // const controlsSwiperButtonPrev = document.createElement("div");
  // controlsSwiperButtonPrev.classList.add("gallery-swiper-button-prev");

  // const controlsSwiperButtonPrevImg = document.createElement("img");
  // controlsSwiperButtonPrevImg.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iNyIgdmlld0JveD0iMCAwIDExIDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNNS4zNjg2OCAyLjI5NDk4TDEuMzY1MzIgNi4yOTgzNEwwLjIyMTczNyA1LjE1NDc2TDUuMzY4NjggMC4wMDc4MTIyOEwxMC41MTU2IDUuMTU0NzZMOS4zNzIwNCA2LjI5ODM0TDUuMzY4NjggMi4yOTQ5OFoiIGZpbGw9IndoaXRlIi8+DQo8L3N2Zz4NCg==";

  // controlsSwiperButtonPrev.appendChild(controlsSwiperButtonPrevImg);

  controlsSwiperButtons.appendChild(gallerySwiperButtonNext);
  controlsSwiperButtons.appendChild(gallerySwiperButtonPrev);

  controls.appendChild(controlsSwiperButtons);

  content.appendChild(controls);

  galleryMedia.appendChild(content);
  gallery.appendChild(galleryMedia);

  const gallerySidebar = createGallerySidebar(videos[0]);
  gallery.appendChild(gallerySidebar);

  const popUpMobileWidget = createPopUpMobileWidget(videos[0].product);
  gallery.appendChild(popUpMobileWidget);

  galleryContainer.appendChild(gallery);

  return galleryContainer;
};

const addVideoWidget = () => {
  addStyle();

  const body = document.querySelector("body");

  const videoWidget = createVideoWidget(videos);
  body.appendChild(videoWidget);

  const gallery = createGallery();
  body.appendChild(gallery);
};

addVideoWidget();

window.addEventListener("load", () => {
  class Components {
    constructor(selector) {
      this.$elements = document.querySelectorAll(selector);
    }
  }

  class Video {
    static CONTAINER_GALLERY = "gallery";
    static CONTAINER_DYNAMIC = "video-card-dynamic";

    constructor(container, index, currentTime = 0) {
      this.container = container;
      this.index = index;
      this.currentTime = currentTime;
      this.$playButtons = new Components(`.${this.container}-play`);
      this.$pauseButtons = new Components(`.${this.container}-pause`);
      this.$soundOffButtons = new Components(`.${this.container}-sound-on`);
      this.$soundOnButtons = new Components(`.${this.container}-sound-off`);
      this.$videos = new Components(
        `.video[data-container="${this.container}"]`
      );
      this.$video = this.$videos.$elements[this.index];
    }

    startPlay() {
      if (this.$video) {
        this.$video.currentTime = this.currentTime;
        let promise = this.$video.play();
        if (promise !== undefined) {
          promise
            .then(() => {
              if (this.$playButtons.$elements[this.index]) {
                this.$playButtons.$elements[this.index].style.display = "none";
              }
              if (this.$pauseButtons.$elements[this.index]) {
                this.$pauseButtons.$elements[this.index].style.display =
                  "block";
              }
            })
            .catch((error) => {
              console.log("Auto-play was prevented:", error);
            });
        }
      }
    }

    stop() {
      if (this.$video) {
        this.$video.pause();
        this.$video.currentTime = 0;
      }

      if (this.$playButtons.$elements[this.index]) {
        this.$playButtons.$elements[this.index].style.display = "block";
      }

      if (this.$pauseButtons.$elements[this.index]) {
        this.$pauseButtons.$elements[this.index].style.display = "none";
      }
    }

    stopAll() {
      this.$videos.$elements.forEach((video) => {
        video.pause();
        video.muted = true;
        video.currentTime = 0;
      });

      if (this.$playButtons.$elements) {
        this.$playButtons.$elements.forEach(
          (btn) => (btn.style.display = "block")
        );
      }

      if (this.$pauseButtons.$elements) {
        this.$pauseButtons.$elements.forEach(
          (btn) => (btn.style.display = "none")
        );
      }

      if (this.$soundOffButtons.$elements) {
        this.$soundOffButtons.$elements.forEach(
          (btn) => (btn.style.display = "none")
        );
      }

      if (this.$soundOnButtons.$elements) {
        this.$soundOnButtons.$elements.forEach(
          (btn) => (btn.style.display = "block")
        );
      }
    }
  }

  let currentTimeDynamic = 0;
  let widgetIsOpen = false;
  let galleryIsActive = false;

  const gallery = document.querySelector(".pp-gallery-container");
  const bannerContentWrapper = document.querySelector(
    ".banner-content-wrapper"
  );
  const crossIcons = document.querySelectorAll(".icon-cross");

  const galleryVideos = document.querySelectorAll(
    `.video[data-container="${Video.CONTAINER_GALLERY}"]`
  );

  const playVideoBtns = document.querySelectorAll(
    `.${Video.CONTAINER_GALLERY}-button-play`
  );
  const playIcons = document.querySelectorAll(
    `.${Video.CONTAINER_GALLERY}-play`
  );
  const pauseIcons = document.querySelectorAll(
    `.${Video.CONTAINER_GALLERY}-pause`
  );

  const muteBtns = document.querySelectorAll(
    `.${Video.CONTAINER_GALLERY}-button-mute`
  );
  const soundOnIcons = document.querySelectorAll(
    `.${Video.CONTAINER_GALLERY}-sound-on`
  );
  const soundOffIcons = document.querySelectorAll(
    `.${Video.CONTAINER_GALLERY}-sound-off`
  );

  const progressBars = document.querySelectorAll(
    `.${Video.CONTAINER_GALLERY}-progress-bar`
  );
  const progressFill = document.querySelectorAll(
    `.${Video.CONTAINER_GALLERY}-progress-fill`
  );

  const widgetContainer = document.querySelector(
    ".pop-up-mobile-widget-container"
  );
  const widgetHeader = document.querySelector(".pop-up-mobile-widget-header");
  const galleryMediaMobile = document.querySelector(".gallery-media");
  const arrowIcon = document.querySelector(".widget-arrow-icon");
  const videoText = document.querySelectorAll(".video-card-text-container");
  const swiperButtons = document.getElementById("mobile-swiper-buttons");

  const screenWidth = window.screen.width;
  let floatingVideos = false;
  if (document.querySelector(".floating-card-video")) floatingVideos = true;

  galleryVideos.forEach((galleryVideo, i) => {
    galleryVideo.addEventListener("timeupdate", updateVideoProgress);
    galleryVideo.paramIndex = i;
    galleryVideo.paramVideos = galleryVideos;
    galleryVideo.paramProgressBars = progressBars;
    galleryVideo.paramProgressFill = progressFill;
    progressBars[i].addEventListener("click", skipAhead);
    progressBars[i].paramIndex = i;
    progressBars[i].paramVideos = galleryVideos;
    progressBars[i].paramProgressFill = progressFill;
  });

  playVideoBtns.forEach((btn, i) => {
    btn.addEventListener("click", playCurrentVideo);
    btn.paramIndex = i;
    btn.paramVideos = galleryVideos;
    btn.paramPlayIcons = playIcons;
    btn.paramPauseIcons = pauseIcons;
  });

  galleryVideos.forEach((video, i) => {
    video.addEventListener("click", playCurrentVideo);
    video.paramIndex = i;
    video.paramVideos = galleryVideos;
    video.paramPlayIcons = playIcons;
    video.paramPauseIcons = pauseIcons;
  });

  muteBtns.forEach((btn, i) => {
    btn.addEventListener("click", muteVideo);
    btn.paramIndex = i;
    btn.paramVideos = galleryVideos;
    btn.paramSoundOnIcons = soundOnIcons;
    btn.paramSoundOffIcons = soundOffIcons;
  });

  function updateVideoProgress(e) {
    const index = e.currentTarget.paramIndex;
    const videos = e.currentTarget.paramVideos;
    const progressBars = e.currentTarget.paramProgressBars;
    const progressFill = e.currentTarget.paramProgressFill;
    const progressBarWidth = progressBars[index].offsetWidth;
    const video = videos[index];
    let progressValue = Math.round(
      (video.currentTime / video.duration) * progressBarWidth
    );
    if (progressValue) {
      progressFill[index].style.width = `${progressValue}px`;
    }
  }

  function skipAhead(e) {
    const index = e.currentTarget.paramIndex;
    const videos = e.currentTarget.paramVideos;
    const progressFill = e.currentTarget.paramProgressFill;
    const video = videos[index];
    const skipTo = (e.offsetX / e.currentTarget.offsetWidth) * video.duration;
    video.currentTime = skipTo;
    progressFill[index].style.width = `${skipTo}`;
  }

  function playCurrentVideo(e) {
    const index = e.currentTarget.paramIndex;
    const playIcons = e.currentTarget.paramPlayIcons;
    const pauseIcons = e.currentTarget.paramPauseIcons;
    const videos = e.currentTarget.paramVideos;
    let video = videos[index];
    if (video.paused) {
      video.play();
      playIcons[index].style.display = "none";
      pauseIcons[index].style.display = "block";
    } else {
      video.pause();
      playIcons[index].style.display = "block";
      pauseIcons[index].style.display = "none";
    }
  }

  function muteVideo(e) {
    const index = e.currentTarget.paramIndex;
    const soundOnIcons = e.currentTarget.paramSoundOnIcons;
    const soundOffIcons = e.currentTarget.paramSoundOffIcons;
    const videos = e.currentTarget.paramVideos;
    let video = videos[index];
    if (video.muted) {
      video.muted = false;
      soundOnIcons[index].style.display = "block";
      soundOffIcons[index].style.display = "none";
    } else {
      video.muted = true;
      soundOffIcons[index].style.display = "block";
      soundOnIcons[index].style.display = "none";
    }
  }
  const playVideo = (
    video,
    _currentTime = 0,
    playButton = null,
    pauseButton = null,
    soundOffButton = null,
    soundOnButton = null,
    unmuteVideo = false
  ) => {
    if (video != null || video != undefined) {
      video.currentTime = _currentTime;
      let promise = video.play();
      if (promise !== undefined) {
        promise
          .then(() => {
            if (playButton) {
              playButton.style.display = "none";
            }
            if (pauseButton) {
              pauseButton.style.display = "block";
            }
            if (unmuteVideo) {
              video.muted = false;
              if (soundOffButton) {
                soundOffButton.style.display = "none";
              }
              if (soundOnButton) {
                soundOnButton.style.display = "block";
              }
            }
          })
          .catch((error) => {
            console.log("Auto-play was prevented:", error);
          });
      }
    }
  };

  const thumbsSwiper = new Swiper(".thumbs-swiper", {
    direction: "vertical",
    spaceBetween: 10,
    slidesPerView: 4,
    watchSlidesProgress: true,
    mousewheel: {
      sensitivity: 3,
    },
  });

  const galleryBackgroundSwiper = new Swiper(".gallery-background", {
    direction: "vertical",
    enabled: false,
  });

  const gallerySwiper = new Swiper(".gallery-swiper", {
    direction: "vertical",
    loop: true,
    enabled: false,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination-fraction",
      type: "fraction",
    },
    navigation: {
      nextEl: ".gallery-swiper-button-next",
      prevEl: ".gallery-swiper-button-prev",
    },
    thumbs: {
      multipleActiveThumbs: true,
      swiper: thumbsSwiper,
    },
    hashNavigation: {
      watchState: true,
    },
    on: {
      slideChange: function () {
        new Video(Video.CONTAINER_GALLERY, 0).stopAll();
        let index = this.realIndex;
        galleryBackgroundSwiper.slideTo(index);

        if (this.slides[index]) {
          history.replaceState(
            null,
            null,
            `${window.location.pathname}${window.location.search}` +
              "#" +
              this.slides[this.activeIndex].dataset.hash
          );
        }

        const currentVideoSlides = document.querySelectorAll(
          `.swiper-slide-gallery-video[data-swiper-slide-index="${index}"]`
        );
        currentVideoSlides.forEach((slide) => {
          let video = slide.querySelector("video");
          playVideo(
            video,
            currentTimeDynamic,
            playIcons[index],
            pauseIcons[index],
            soundOffIcons[index],
            soundOnIcons[index],
            true
          );
          currentTimeDynamic = 0;
        });
      },
    },
  });

  if (galleryVideos.length > 0) {
    galleryVideos.forEach((v) => {
      v.addEventListener("ended", () => {
        gallerySwiper.slideNext();
      });
    });
  }

  if (screenWidth <= 768 && widgetContainer) {
    galleryMediaMobile.style.height = "87%";
    widgetHeader.style.border = "none";

    const deviceHeight = document.documentElement.clientHeight;
    const maxSlideThreshold = deviceHeight * 0.45;

    widgetContainer.style.transform = "translateY(0)";
    widgetContainer.style.transition = "transform .3s";

    widgetHeader.addEventListener("touchstart", slideStart);
    widgetHeader.addEventListener("mousedown", slideStart);

    let posInit = 0;
    let posY1 = 0;
    let posY2 = 0;
    let posFinal = 0;
    let posThreshold = deviceHeight / 2;
    let allowSlide = true;

    function getEvent() {
      return event.type.search("touch") !== -1 ? event.touches[0] : event;
    }

    function slideAction() {
      arrowIcon.style.transform = "rotate(0deg)";
      galleryMediaMobile.style.transition = "none";
      widgetHeader.style.border = "1px solid #b6c2c5";

      let evt = getEvent();

      let transformValue = widgetContainer.style.transform;
      let transform = +transformValue.match(/([-0-9.]+(?=px))/)[0];

      let galleryMediaHeightValue = galleryMediaMobile.style.height;
      let galleryMediaHeight =
        galleryMediaHeightValue.match(/([-0-9.]+(?=%))/)[0];

      posY2 = posY1 - evt.clientY;
      posY1 = evt.clientY;

      if (posInit >= deviceHeight) {
        if (posInit < posY1) {
          allowSlide = false;
          slideEnd();
          return;
        } else {
          allowSlide = true;
        }
      }

      if (posInit > posY1 && !widgetIsOpen) {
        if (posY1 <= maxSlideThreshold) {
          allowSlide = false;
          slideEnd();
          return;
        } else {
          allowSlide = true;
        }
      } else if (posInit > posY1 && widgetIsOpen) {
        allowSlide = false;
        slideEnd();
        return;
      } else {
        allowSlide = true;
      }

      let newTransformValue = transform - posY2 * 0.1;
      let newGalleryHeight = galleryMediaHeight - posY2 * 0.1;

      widgetContainer.style.transform = `translateY(${newTransformValue}px)`;
      galleryMediaMobile.style.height = `${newGalleryHeight}%`;
    }

    function slideEnd() {
      posFinal = posInit - posY1;

      if (posY1 < posThreshold) {
        openWidget();
      } else {
        closeWidget();
      }

      if (posFinal === 0 && widgetIsOpen) {
        closeWidget();
      } else if (posFinal === 0 && !widgetIsOpen) {
        openWidget();
      }

      function openWidget() {
        arrowIcon.style.transform = "rotate(0deg)";
        widgetHeader.style.border = "1px solid #b6c2c5";
        widgetContainer.style.transform = "translateY(0)";
        galleryMediaMobile.style.transition = "height .3s ease-out";
        galleryMediaMobile.style.height = "34%";
        videoText.forEach((text) => (text.style.bottom = "18%"));
        galleryVideos.forEach((v) => (v.style.top = "0"));
        swiperButtons.classList.add("widget-open");
        widgetContainer.style.overflowY = "scroll";
        widgetIsOpen = true;
      }

      function closeWidget() {
        arrowIcon.style.transform = "rotate(180deg)";
        widgetHeader.style.border = "none";
        widgetContainer.style.transform = "translateY(0)";
        galleryMediaMobile.style.transition = "height .3s ease out";
        galleryMediaMobile.style.height = "87%";
        videoText.forEach((text) => (text.style.bottom = "11%"));
        galleryVideos.forEach((v) => (v.style.top = "5%"));
        swiperButtons.classList.remove("widget-open");
        widgetContainer.style.overflowY = "";
        widgetIsOpen = false;
      }

      document.removeEventListener("touchmove", slideAction);
      document.removeEventListener("mousemove", slideAction);
      document.removeEventListener("touchend", slideEnd);
      document.removeEventListener("mouseup", slideEnd);
    }

    function slideStart() {
      let evt = getEvent();

      posInit = posY1 = evt.clientY;

      document.addEventListener("touchmove", slideAction);
      document.addEventListener("mousemove", slideAction);
      document.addEventListener("touchend", slideEnd);
      document.addEventListener("mouseup", slideEnd);
    }
  }

  const dynamicVideos = document.querySelectorAll(".video[data-dynamic]");

  const dynamicPlayVideoBtns = document.querySelectorAll(
    `.${Video.CONTAINER_DYNAMIC}-button-play`
  );
  const dynamicPlayIcons = document.querySelectorAll(
    `.${Video.CONTAINER_DYNAMIC}-play`
  );
  const dynamicPauseIcons = document.querySelectorAll(
    `.${Video.CONTAINER_DYNAMIC}-pause`
  );
  const dynamicProgressBars = document.querySelectorAll(
    `.${Video.CONTAINER_DYNAMIC}-progress-bar`
  );
  const dynamicProgressFill = document.querySelectorAll(
    `.${Video.CONTAINER_DYNAMIC}-progress-fill`
  );

  dynamicVideos.forEach((dynamicVideo, i) => {
    if (!floatingVideos) {
      dynamicVideo.addEventListener("timeupdate", updateVideoProgress);
      dynamicVideo.paramIndex = i;
      dynamicVideo.paramVideos = dynamicVideos;
      dynamicVideo.paramProgressBars = dynamicProgressBars;
      dynamicVideo.paramProgressFill = dynamicProgressFill;
      dynamicProgressBars[i].addEventListener("click", skipAhead);
      dynamicProgressBars[i].paramIndex = i;
      dynamicProgressBars[i].paramVideos = dynamicVideos;
      dynamicProgressBars[i].paramProgressFill = dynamicProgressFill;
    }
  });

  let dynamicMuteBtnsMobile = [];
  let dynamicSoundOnIconsMobile = [];
  let dynamicSoundOffIconsMobile = [];

  let dynamicMuteBtnDesktop;
  let dynamicSoundOnIconDesktop;
  let dynamicSoundOffIconDesktop;
  let videoHoverArea;
  let toggleSoundOnHover;
  let videosIsMutedDynamic;
  let videoHoverAreaEvents;

  dynamicMuteBtnDesktop = document.getElementById(
    `${Video.CONTAINER_DYNAMIC}-button-mute-desktop`
  );
  dynamicSoundOnIconDesktop = document.getElementById(
    `${Video.CONTAINER_DYNAMIC}-sound-on-desktop`
  );
  dynamicSoundOffIconDesktop = document.getElementById(
    `${Video.CONTAINER_DYNAMIC}-sound-off-desktop`
  );
  videoHoverArea = document.querySelector(".video-hover-area");
  const videoOverlay = document.querySelector(".video-overlay");

  videosIsMutedDynamic = true;
  videoHoverAreaEvents = true;

  let userInteracted = false;
  ["click", "tap", "keydown"].forEach((evt) => {
    document.addEventListener(evt, () => (userInteracted = true));
  });
  toggleSoundOnHover = () => {
    if (userInteracted) toggleSoundDynamicDesktop();
  };

  const productDetailReviewPage = document.querySelector(
    ".product-detail-review-page"
  );

  videoHoverArea?.addEventListener("click", (e) => {
    if (productDetailReviewPage) return;
    videoHoverArea?.removeEventListener("mouseover", toggleSoundOnHover);
    videoHoverArea?.removeEventListener("mouseout", toggleSoundOnHover);
    videoHoverAreaEvents = false;
    videoOverlay.style.display = "none";
    const x = e.clientX;
    const y = e.clientY;
    document.elementFromPoint(x, y).click();
    videoOverlay.style.display = "flex";
  });
  videoHoverArea?.addEventListener("mouseover", toggleSoundOnHover);
  videoHoverArea?.addEventListener("mouseout", toggleSoundOnHover);
  dynamicMuteBtnDesktop?.addEventListener("click", (e) => {
    e.stopPropagation();
    videoHoverArea?.removeEventListener("mouseover", toggleSoundOnHover);
    videoHoverArea?.removeEventListener("mouseout", toggleSoundOnHover);
    videoHoverAreaEvents = false;
    toggleSoundDynamicDesktop();
  });

  function toggleSoundDynamicDesktop() {
    if (isSafari) {
      return;
    } else {
      if (videosIsMutedDynamic) {
        dynamicVideos.forEach((v) => (v.muted = false));
        dynamicSoundOnIconDesktop.style.display = "block";
        dynamicSoundOffIconDesktop.style.display = "none";
        videosIsMutedDynamic = false;
      } else {
        dynamicVideos.forEach((v) => (v.muted = true));
        dynamicSoundOffIconDesktop.style.display = "block";
        dynamicSoundOnIconDesktop.style.display = "none";
        videosIsMutedDynamic = true;
      }
    }
  }

  dynamicPlayVideoBtns.forEach((btn, i) => {
    btn.addEventListener("click", playCurrentVideo);
    btn.paramIndex = i;
    btn.paramVideos = dynamicVideos;
    btn.paramPlayIcons = dynamicPlayIcons;
    btn.paramPauseIcons = dynamicPauseIcons;
  });

  const dynamicSwiper = new Swiper(".dynamic-video-slider", {
    loop: true,
    direction: floatingVideos ? "horizontal" : "vertical",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      576: {
        direction: "horizontal",
        spaceBetween: 10,
      },
    },
    on: {
      slideChange: function () {
        new Video(Video.CONTAINER_DYNAMIC, 0).stopAll();
        const currentSlides = document.querySelectorAll(
          `.swiper-slide-dynamic[data-swiper-slide-index="${this.realIndex}"]`
        );
        currentSlides.forEach((slide) => {
          if (screenWidth <= 768) {
            playVideo(
              slide.querySelector("video"),
              0,
              dynamicPlayIcons[this.realIndex],
              dynamicPauseIcons[this.realIndex]
            );
          } else {
            playVideo(slide.querySelector("video"));
          }
        });
      },
    },
  });

  if (floatingVideos) {
    dynamicSwiper.allowTouchMove = false;
  }

  if (dynamicVideos.length > 0) {
    dynamicVideos.forEach((v) => {
      v.addEventListener("ended", () => {
        dynamicSwiper.slideNext();
      });
    });
  }

  if (
    (screenWidth <= 768 && !dynamicVideos.length) ||
    (screenWidth <= 768 && floatingVideos)
  ) {
    bannerContentWrapper?.classList.add("mobile-image");
  }

  function triggerMedia(e) {
    let trigger = e.target;
    let targetIndex = trigger.dataset.index;
    let mediaType = trigger.classList.contains("image") ? "image" : "video";

    if (
      trigger.classList.contains("btn-mute") ||
      trigger.classList.contains("brand-logo") ||
      trigger.classList.contains("button") ||
      trigger.tagName === "svg" ||
      trigger.tagName === "path"
    )
      return;

    let currentDynamicVideo = dynamicVideos[dynamicSwiper.realIndex];
    if (mediaType === "video") {
      currentTimeDynamic = currentDynamicVideo.currentTime;
    }

    new Video(Video.CONTAINER_DYNAMIC, 0).stopAll();
    if (dynamicMuteBtnDesktop) {
      dynamicSoundOnIconDesktop.style.display = "none";
      dynamicSoundOffIconDesktop.style.display = "block";
      videosIsMutedDynamic = true;
    }
    if (
      dynamicMuteBtnsMobile.length &&
      dynamicMuteBtnsMobile[dynamicSwiper.realIndex]
    ) {
      dynamicSoundOnIconsMobile[dynamicSwiper.realIndex].style.display = "none";
      dynamicSoundOffIconsMobile[dynamicSwiper.realIndex].style.display =
        "block";
    }

    let hash = "#" + mediaType + "-" + targetIndex;
    gallerySwiper.enable();
    galleryBackgroundSwiper.enable();
    galleryIsActive = true;
    gallerySwiper.emit("slideChange");
    window.location = `${window.location.origin}${window.location.pathname}${window.location.search}${hash}`;
    gallery.classList.add("active");
    document.querySelector("body").classList.add("lock");
  }

  let videoTriggers = document.querySelectorAll(".video-card[data-index]");
  if (videoTriggers.length > 0) {
    videoTriggers.forEach((videoTrigger) => {
      videoTrigger.addEventListener("click", triggerMedia);
    });
  }

  document.onmouseover = function () {
    window.innerDocClick = true;
  };

  document.onmouseleave = function () {
    window.innerDocClick = false;
  };

  let historyButtonClick = false;

  onpopstate = function () {
    historyButtonClick = true;
  };

  onload = function () {
    history.pushState(
      null,
      null,
      `${window.location.pathname}${window.location.search}`
    );
  };

  onhashchange = function () {
    if (!window.innerDocClick && historyButtonClick && galleryIsActive) {
      showPage();
      historyButtonClick = false;
    } else if (
      !window.innerDocClick &&
      historyButtonClick &&
      !galleryIsActive
    ) {
      showMedia();
      historyButtonClick = false;
    }
  };

  crossIcons.forEach((icon) => icon.addEventListener("click", showPage));

  function showMedia() {
    gallerySwiper.enable();
    galleryBackgroundSwiper.enable();
    gallery.classList.add("active");
    galleryIsActive = true;
    gallerySwiper.emit("slideChange");
    document.querySelector("body").classList.add("lock");
    dynamicVideos.forEach((v) => {
      v.muted = true;
      v.pause();
    });
    if (dynamicMuteBtnDesktop) {
      dynamicSoundOnIconDesktop.style.display = "none";
      dynamicSoundOffIconDesktop.style.display = "block";
      videosIsMutedDynamic = true;
    }
  }

  function showPage() {
    gallerySwiper.disable();
    galleryBackgroundSwiper.disable();
    gallery.classList.remove("active");
    galleryIsActive = false;
    document.querySelector("body").classList.remove("lock");
    galleryVideos.forEach((v) => (v.muted = true));
    galleryVideos.forEach((v) => v.pause());
    soundOnIcons.forEach((btn) => (btn.style.display = "none"));
    soundOffIcons.forEach((btn) => (btn.style.display = "block"));
    playIcons.forEach((btn) => (btn.style.display = "block"));
    pauseIcons.forEach((btn) => (btn.style.display = "none"));
    if (screenWidth <= 768) {
      if (arrowIcon) arrowIcon.style.transform = "rotate(180deg)";
      widgetContainer.style.transform = "translateY(0)";
      galleryMediaMobile.style.transition = "height .3s ease out";
      galleryMediaMobile.style.height = "87%";
      videoText.forEach((text) => (text.style.bottom = "11%"));
      galleryVideos.forEach((v) => (v.style.top = "5%"));
      swiperButtons.classList.remove("widget-open");
      widgetContainer.style.overflowY = "";
      widgetIsOpen = false;
    }
    history.replaceState(
      null,
      null,
      `${window.location.pathname}${window.location.search}`
    );
    let index = dynamicSwiper.realIndex;
    let video = dynamicVideos[index];
    playVideo(video, 0, dynamicPlayIcons[index], dynamicPauseIcons[index]);
    if (!videoHoverAreaEvents) {
      videoHoverArea?.addEventListener("mouseover", toggleSoundOnHover);
      videoHoverArea?.addEventListener("mouseout", toggleSoundOnHover);
    }
  }

  const lazyVideos = document.querySelectorAll("video.lazy");

  if ("IntersectionObserver" in window) {
    let lazyVideoObserver = new IntersectionObserver((entries) => {
      entries.forEach((video) => {
        if (video.isIntersecting) {
          for (let source in video.target.children) {
            let videoSource = video.target.children[source];
            if (
              typeof videoSource.tagName === "string" &&
              videoSource.tagName === "SOURCE"
            ) {
              videoSource.src = videoSource.dataset.src;
            }
          }

          video.target.load();
          video.target.classList.remove("lazy");
          lazyVideoObserver.unobserve(video.target);
        }
      });
    });

    lazyVideos.forEach((v) => {
      lazyVideoObserver.observe(v);
    });
  }

  if (!window._carrickQueue) {
    window._carrickQueue = [];
  }
  window._carrickQueue.push((methods) => methods.refreshTracking());
});
