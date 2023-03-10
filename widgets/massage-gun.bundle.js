(() => {
  "use strict";
  function e(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function t(n = {}, i = {}) {
    Object.keys(i).forEach((a) => {
      void 0 === n[a]
        ? (n[a] = i[a])
        : e(i[a]) && e(n[a]) && Object.keys(i[a]).length > 0 && t(n[a], i[a]);
    });
  }
  const n = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() {} }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName: () => [],
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function i() {
    const e = "undefined" != typeof document ? document : {};
    return t(e, n), e;
  }
  const a = {
    document: n,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({ getPropertyValue: () => "" }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: (e) =>
      "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    },
  };
  function r() {
    const e = "undefined" != typeof window ? window : {};
    return t(e, a), e;
  }
  function s(e, t = 0) {
    return setTimeout(e, t);
  }
  function o() {
    return Date.now();
  }
  function l(e, t = "x") {
    const n = r();
    let i, a, s;
    const o = (function (e) {
      const t = r();
      let n;
      return (
        t.getComputedStyle && (n = t.getComputedStyle(e, null)),
        !n && e.currentStyle && (n = e.currentStyle),
        n || (n = e.style),
        n
      );
    })(e);
    return (
      n.WebKitCSSMatrix
        ? ((a = o.transform || o.webkitTransform),
          a.split(",").length > 6 &&
            (a = a
              .split(", ")
              .map((e) => e.replace(",", "."))
              .join(", ")),
          (s = new n.WebKitCSSMatrix("none" === a ? "" : a)))
        : ((s =
            o.MozTransform ||
            o.OTransform ||
            o.MsTransform ||
            o.msTransform ||
            o.transform ||
            o
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (i = s.toString().split(","))),
      "x" === t &&
        (a = n.WebKitCSSMatrix
          ? s.m41
          : 16 === i.length
          ? parseFloat(i[12])
          : parseFloat(i[4])),
      "y" === t &&
        (a = n.WebKitCSSMatrix
          ? s.m42
          : 16 === i.length
          ? parseFloat(i[13])
          : parseFloat(i[5])),
      a || 0
    );
  }
  function d(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function p(...e) {
    const t = Object(e[0]),
      n = ["__proto__", "constructor", "prototype"];
    for (let a = 1; a < e.length; a += 1) {
      const r = e[a];
      if (
        null != r &&
        ((i = r),
        !("undefined" != typeof window && void 0 !== window.HTMLElement
          ? i instanceof HTMLElement
          : i && (1 === i.nodeType || 11 === i.nodeType)))
      ) {
        const e = Object.keys(Object(r)).filter((e) => n.indexOf(e) < 0);
        for (let n = 0, i = e.length; n < i; n += 1) {
          const i = e[n],
            a = Object.getOwnPropertyDescriptor(r, i);
          void 0 !== a &&
            a.enumerable &&
            (d(t[i]) && d(r[i])
              ? r[i].__swiper__
                ? (t[i] = r[i])
                : p(t[i], r[i])
              : !d(t[i]) && d(r[i])
              ? ((t[i] = {}), r[i].__swiper__ ? (t[i] = r[i]) : p(t[i], r[i]))
              : (t[i] = r[i]));
        }
      }
    }
    var i;
    return t;
  }
  function c(e, t, n) {
    e.style.setProperty(t, n);
  }
  function u({ swiper: e, targetPosition: t, side: n }) {
    const i = r(),
      a = -e.translate;
    let s,
      o = null;
    const l = e.params.speed;
    (e.wrapperEl.style.scrollSnapType = "none"),
      i.cancelAnimationFrame(e.cssModeFrameID);
    const d = t > a ? "next" : "prev",
      p = (e, t) => ("next" === d && e >= t) || ("prev" === d && e <= t),
      c = () => {
        (s = new Date().getTime()), null === o && (o = s);
        const r = Math.max(Math.min((s - o) / l, 1), 0),
          d = 0.5 - Math.cos(r * Math.PI) / 2;
        let u = a + d * (t - a);
        if ((p(u, t) && (u = t), e.wrapperEl.scrollTo({ [n]: u }), p(u, t)))
          return (
            (e.wrapperEl.style.overflow = "hidden"),
            (e.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (e.wrapperEl.style.overflow = ""),
                e.wrapperEl.scrollTo({ [n]: u });
            }),
            void i.cancelAnimationFrame(e.cssModeFrameID)
          );
        e.cssModeFrameID = i.requestAnimationFrame(c);
      };
    c();
  }
  function g(e) {
    return (
      e.querySelector(".swiper-slide-transform") ||
      (e.shadowEl && e.shadowEl.querySelector(".swiper-slide-transform")) ||
      e
    );
  }
  function m(e, t = "") {
    return [...e.children].filter((e) => e.matches(t));
  }
  function h(e, t = []) {
    const n = document.createElement(e);
    return n.classList.add(...(Array.isArray(t) ? t : [t])), n;
  }
  function w(e) {
    const t = r(),
      n = i(),
      a = e.getBoundingClientRect(),
      s = n.body,
      o = e.clientTop || s.clientTop || 0,
      l = e.clientLeft || s.clientLeft || 0,
      d = e === t ? t.scrollY : e.scrollTop,
      p = e === t ? t.scrollX : e.scrollLeft;
    return { top: a.top + d - o, left: a.left + p - l };
  }
  function f(e, t) {
    return r().getComputedStyle(e, null).getPropertyValue(t);
  }
  function y(e) {
    let t,
      n = e;
    if (n) {
      for (t = 0; null !== (n = n.previousSibling); )
        1 === n.nodeType && (t += 1);
      return t;
    }
  }
  function b(e, t) {
    const n = [];
    let i = e.parentElement;
    for (; i; )
      t ? i.matches(t) && n.push(i) : n.push(i), (i = i.parentElement);
    return n;
  }
  function v(e, t) {
    t &&
      e.addEventListener("transitionend", function n(i) {
        i.target === e &&
          (t.call(e, i), e.removeEventListener("transitionend", n));
      });
  }
  function x(e, t, n) {
    const i = r();
    return n
      ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
          parseFloat(
            i
              .getComputedStyle(e, null)
              .getPropertyValue("width" === t ? "margin-right" : "margin-top")
          ) +
          parseFloat(
            i
              .getComputedStyle(e, null)
              .getPropertyValue("width" === t ? "margin-left" : "margin-bottom")
          )
      : e.offsetWidth;
  }
  let M, E, A;
  function T() {
    return (
      M ||
        (M = (function () {
          const e = r(),
            t = i();
          return {
            smoothScroll:
              t.documentElement && "scrollBehavior" in t.documentElement.style,
            touch: !!(
              "ontouchstart" in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
          };
        })()),
      M
    );
  }
  const C = {
      on(e, t, n) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        const a = n ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            i.eventsListeners[e] || (i.eventsListeners[e] = []),
              i.eventsListeners[e][a](t);
          }),
          i
        );
      },
      once(e, t, n) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        function a(...n) {
          i.off(e, a),
            a.__emitterProxy && delete a.__emitterProxy,
            t.apply(i, n);
        }
        return (a.__emitterProxy = t), i.on(e, a, n);
      },
      onAny(e, t) {
        const n = this;
        if (!n.eventsListeners || n.destroyed) return n;
        if ("function" != typeof e) return n;
        const i = t ? "unshift" : "push";
        return (
          n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e), n
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const n = t.eventsAnyListeners.indexOf(e);
        return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
      },
      off(e, t) {
        const n = this;
        return !n.eventsListeners || n.destroyed
          ? n
          : n.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (n.eventsListeners[e] = [])
                : n.eventsListeners[e] &&
                  n.eventsListeners[e].forEach((i, a) => {
                    (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                      n.eventsListeners[e].splice(a, 1);
                  });
            }),
            n)
          : n;
      },
      emit(...e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsListeners) return t;
        let n, i, a;
        return (
          "string" == typeof e[0] || Array.isArray(e[0])
            ? ((n = e[0]), (i = e.slice(1, e.length)), (a = t))
            : ((n = e[0].events), (i = e[0].data), (a = e[0].context || t)),
          i.unshift(a),
          (Array.isArray(n) ? n : n.split(" ")).forEach((e) => {
            t.eventsAnyListeners &&
              t.eventsAnyListeners.length &&
              t.eventsAnyListeners.forEach((t) => {
                t.apply(a, [e, ...i]);
              }),
              t.eventsListeners &&
                t.eventsListeners[e] &&
                t.eventsListeners[e].forEach((e) => {
                  e.apply(a, i);
                });
          }),
          t
        );
      },
    },
    L = {
      updateSize: function () {
        const e = this;
        let t, n;
        const i = e.el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : i.clientWidth),
          (n =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : i.clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === n && e.isVertical()) ||
            ((t =
              t -
              parseInt(f(i, "padding-left") || 0, 10) -
              parseInt(f(i, "padding-right") || 0, 10)),
            (n =
              n -
              parseInt(f(i, "padding-top") || 0, 10) -
              parseInt(f(i, "padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(n) && (n = 0),
            Object.assign(e, {
              width: t,
              height: n,
              size: e.isHorizontal() ? t : n,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function n(e, n) {
          return parseFloat(e.getPropertyValue(t(n)) || 0);
        }
        const i = e.params,
          {
            wrapperEl: a,
            slidesEl: r,
            size: s,
            rtlTranslate: o,
            wrongRTL: l,
          } = e,
          d = e.virtual && i.virtual.enabled,
          p = d ? e.virtual.slides.length : e.slides.length,
          u = m(r, `.${e.params.slideClass}, swiper-slide`),
          g = d ? e.virtual.slides.length : u.length;
        let h = [];
        const w = [],
          y = [];
        let b = i.slidesOffsetBefore;
        "function" == typeof b && (b = i.slidesOffsetBefore.call(e));
        let v = i.slidesOffsetAfter;
        "function" == typeof v && (v = i.slidesOffsetAfter.call(e));
        const M = e.snapGrid.length,
          E = e.slidesGrid.length;
        let A = i.spaceBetween,
          T = -b,
          C = 0,
          L = 0;
        if (void 0 === s) return;
        "string" == typeof A &&
          A.indexOf("%") >= 0 &&
          (A = (parseFloat(A.replace("%", "")) / 100) * s),
          (e.virtualSize = -A),
          u.forEach((e) => {
            o ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
              (e.style.marginBottom = ""),
              (e.style.marginTop = "");
          }),
          i.centeredSlides &&
            i.cssMode &&
            (c(a, "--swiper-centered-offset-before", ""),
            c(a, "--swiper-centered-offset-after", ""));
        const S = i.grid && i.grid.rows > 1 && e.grid;
        let z;
        S && e.grid.initSlides(g);
        const I =
          "auto" === i.slidesPerView &&
          i.breakpoints &&
          Object.keys(i.breakpoints).filter(
            (e) => void 0 !== i.breakpoints[e].slidesPerView
          ).length > 0;
        for (let a = 0; a < g; a += 1) {
          let r;
          if (
            ((z = 0),
            u[a] && (r = u[a]),
            S && e.grid.updateSlide(a, r, g, t),
            !u[a] || "none" !== f(r, "display"))
          ) {
            if ("auto" === i.slidesPerView) {
              I && (u[a].style[t("width")] = "");
              const s = getComputedStyle(r),
                o = r.style.transform,
                l = r.style.webkitTransform;
              if (
                (o && (r.style.transform = "none"),
                l && (r.style.webkitTransform = "none"),
                i.roundLengths)
              )
                z = e.isHorizontal() ? x(r, "width", !0) : x(r, "height", !0);
              else {
                const e = n(s, "width"),
                  t = n(s, "padding-left"),
                  i = n(s, "padding-right"),
                  a = n(s, "margin-left"),
                  o = n(s, "margin-right"),
                  l = s.getPropertyValue("box-sizing");
                if (l && "border-box" === l) z = e + a + o;
                else {
                  const { clientWidth: n, offsetWidth: s } = r;
                  z = e + t + i + a + o + (s - n);
                }
              }
              o && (r.style.transform = o),
                l && (r.style.webkitTransform = l),
                i.roundLengths && (z = Math.floor(z));
            } else
              (z = (s - (i.slidesPerView - 1) * A) / i.slidesPerView),
                i.roundLengths && (z = Math.floor(z)),
                u[a] && (u[a].style[t("width")] = `${z}px`);
            u[a] && (u[a].swiperSlideSize = z),
              y.push(z),
              i.centeredSlides
                ? ((T = T + z / 2 + C / 2 + A),
                  0 === C && 0 !== a && (T = T - s / 2 - A),
                  0 === a && (T = T - s / 2 - A),
                  Math.abs(T) < 0.001 && (T = 0),
                  i.roundLengths && (T = Math.floor(T)),
                  L % i.slidesPerGroup == 0 && h.push(T),
                  w.push(T))
                : (i.roundLengths && (T = Math.floor(T)),
                  (L - Math.min(e.params.slidesPerGroupSkip, L)) %
                    e.params.slidesPerGroup ==
                    0 && h.push(T),
                  w.push(T),
                  (T = T + z + A)),
              (e.virtualSize += z + A),
              (C = z),
              (L += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, s) + v),
          o &&
            l &&
            ("slide" === i.effect || "coverflow" === i.effect) &&
            (a.style.width = `${e.virtualSize + i.spaceBetween}px`),
          i.setWrapperSize &&
            (a.style[t("width")] = `${e.virtualSize + i.spaceBetween}px`),
          S && e.grid.updateWrapperSize(z, h, t),
          !i.centeredSlides)
        ) {
          const t = [];
          for (let n = 0; n < h.length; n += 1) {
            let a = h[n];
            i.roundLengths && (a = Math.floor(a)),
              h[n] <= e.virtualSize - s && t.push(a);
          }
          (h = t),
            Math.floor(e.virtualSize - s) - Math.floor(h[h.length - 1]) > 1 &&
              h.push(e.virtualSize - s);
        }
        if (d && i.loop) {
          const t = y[0] + A;
          if (i.slidesPerGroup > 1) {
            const n = Math.ceil(
                (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                  i.slidesPerGroup
              ),
              a = t * i.slidesPerGroup;
            for (let e = 0; e < n; e += 1) h.push(h[h.length - 1] + a);
          }
          for (
            let n = 0;
            n < e.virtual.slidesBefore + e.virtual.slidesAfter;
            n += 1
          )
            1 === i.slidesPerGroup && h.push(h[h.length - 1] + t),
              w.push(w[w.length - 1] + t),
              (e.virtualSize += t);
        }
        if ((0 === h.length && (h = [0]), 0 !== i.spaceBetween)) {
          const n = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
          u.filter(
            (e, t) => !(i.cssMode && !i.loop) || t !== u.length - 1
          ).forEach((e) => {
            e.style[n] = `${A}px`;
          });
        }
        if (i.centeredSlides && i.centeredSlidesBounds) {
          let e = 0;
          y.forEach((t) => {
            e += t + (i.spaceBetween ? i.spaceBetween : 0);
          }),
            (e -= i.spaceBetween);
          const t = e - s;
          h = h.map((e) => (e < 0 ? -b : e > t ? t + v : e));
        }
        if (i.centerInsufficientSlides) {
          let e = 0;
          if (
            (y.forEach((t) => {
              e += t + (i.spaceBetween ? i.spaceBetween : 0);
            }),
            (e -= i.spaceBetween),
            e < s)
          ) {
            const t = (s - e) / 2;
            h.forEach((e, n) => {
              h[n] = e - t;
            }),
              w.forEach((e, n) => {
                w[n] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: u,
            snapGrid: h,
            slidesGrid: w,
            slidesSizesGrid: y,
          }),
          i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
        ) {
          c(a, "--swiper-centered-offset-before", -h[0] + "px"),
            c(
              a,
              "--swiper-centered-offset-after",
              e.size / 2 - y[y.length - 1] / 2 + "px"
            );
          const t = -e.snapGrid[0],
            n = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + n));
        }
        if (
          (g !== p && e.emit("slidesLengthChange"),
          h.length !== M &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          w.length !== E && e.emit("slidesGridLengthChange"),
          i.watchSlidesProgress && e.updateSlidesOffset(),
          !(d || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
        ) {
          const t = `${i.containerModifierClass}backface-hidden`,
            n = e.el.classList.contains(t);
          g <= i.maxBackfaceHiddenSlides
            ? n || e.el.classList.add(t)
            : n && e.el.classList.remove(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          n = [],
          i = t.virtual && t.params.virtual.enabled;
        let a,
          r = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const s = (e) =>
          i
            ? t.slides.filter(
                (t) =>
                  parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
              )[0]
            : t.slides[e];
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            (t.visibleSlides || []).forEach((e) => {
              n.push(e);
            });
          else
            for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
              const e = t.activeIndex + a;
              if (e > t.slides.length && !i) break;
              n.push(s(e));
            }
        else n.push(s(t.activeIndex));
        for (a = 0; a < n.length; a += 1)
          if (void 0 !== n[a]) {
            const e = n[a].offsetHeight;
            r = e > r ? e : r;
          }
        (r || 0 === r) && (t.wrapperEl.style.height = `${r}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides,
          n = e.isElement
            ? e.isHorizontal()
              ? e.wrapperEl.offsetLeft
              : e.wrapperEl.offsetTop
            : 0;
        for (let i = 0; i < t.length; i += 1)
          t[i].swiperSlideOffset =
            (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) - n;
      },
      updateSlidesProgress: function (e = (this && this.translate) || 0) {
        const t = this,
          n = t.params,
          { slides: i, rtlTranslate: a, snapGrid: r } = t;
        if (0 === i.length) return;
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        let s = -e;
        a && (s = e),
          i.forEach((e) => {
            e.classList.remove(n.slideVisibleClass);
          }),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (let e = 0; e < i.length; e += 1) {
          const o = i[e];
          let l = o.swiperSlideOffset;
          n.cssMode && n.centeredSlides && (l -= i[0].swiperSlideOffset);
          const d =
              (s + (n.centeredSlides ? t.minTranslate() : 0) - l) /
              (o.swiperSlideSize + n.spaceBetween),
            p =
              (s - r[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) /
              (o.swiperSlideSize + n.spaceBetween),
            c = -(s - l),
            u = c + t.slidesSizesGrid[e];
          ((c >= 0 && c < t.size - 1) ||
            (u > 1 && u <= t.size) ||
            (c <= 0 && u >= t.size)) &&
            (t.visibleSlides.push(o),
            t.visibleSlidesIndexes.push(e),
            i[e].classList.add(n.slideVisibleClass)),
            (o.progress = a ? -d : d),
            (o.originalProgress = a ? -p : p);
        }
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const n = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * n) || 0;
        }
        const n = t.params,
          i = t.maxTranslate() - t.minTranslate();
        let { progress: a, isBeginning: r, isEnd: s, progressLoop: o } = t;
        const l = r,
          d = s;
        if (0 === i) (a = 0), (r = !0), (s = !0);
        else {
          a = (e - t.minTranslate()) / i;
          const n = Math.abs(e - t.minTranslate()) < 1,
            o = Math.abs(e - t.maxTranslate()) < 1;
          (r = n || a <= 0), (s = o || a >= 1), n && (a = 0), o && (a = 1);
        }
        if (n.loop) {
          const n = t.getSlideIndex(
              t.slides.filter(
                (e) => "0" === e.getAttribute("data-swiper-slide-index")
              )[0]
            ),
            i = t.getSlideIndex(
              t.slides.filter(
                (e) =>
                  1 * e.getAttribute("data-swiper-slide-index") ==
                  t.slides.length - 1
              )[0]
            ),
            a = t.slidesGrid[n],
            r = t.slidesGrid[i],
            s = t.slidesGrid[t.slidesGrid.length - 1],
            l = Math.abs(e);
          (o = l >= a ? (l - a) / s : (l + s - r) / s), o > 1 && (o -= 1);
        }
        Object.assign(t, {
          progress: a,
          progressLoop: o,
          isBeginning: r,
          isEnd: s,
        }),
          (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
            t.updateSlidesProgress(e),
          r && !l && t.emit("reachBeginning toEdge"),
          s && !d && t.emit("reachEnd toEdge"),
          ((l && !r) || (d && !s)) && t.emit("fromEdge"),
          t.emit("progress", a);
      },
      updateSlidesClasses: function () {
        const e = this,
          { slides: t, params: n, slidesEl: i, activeIndex: a } = e,
          r = e.virtual && n.virtual.enabled,
          s = (e) => m(i, `.${n.slideClass}${e}, swiper-slide${e}`)[0];
        let o;
        if (
          (t.forEach((e) => {
            e.classList.remove(
              n.slideActiveClass,
              n.slideNextClass,
              n.slidePrevClass
            );
          }),
          r)
        )
          if (n.loop) {
            let t = a - e.virtual.slidesBefore;
            t < 0 && (t = e.virtual.slides.length + t),
              t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
              (o = s(`[data-swiper-slide-index="${t}"]`));
          } else o = s(`[data-swiper-slide-index="${a}"]`);
        else o = t[a];
        if (o) {
          o.classList.add(n.slideActiveClass);
          let e = (function (e, t) {
            const n = [];
            for (; e.nextElementSibling; ) {
              const i = e.nextElementSibling;
              t ? i.matches(t) && n.push(i) : n.push(i), (e = i);
            }
            return n;
          })(o, `.${n.slideClass}, swiper-slide`)[0];
          n.loop && !e && (e = t[0]), e && e.classList.add(n.slideNextClass);
          let i = (function (e, t) {
            const n = [];
            for (; e.previousElementSibling; ) {
              const i = e.previousElementSibling;
              t ? i.matches(t) && n.push(i) : n.push(i), (e = i);
            }
            return n;
          })(o, `.${n.slideClass}, swiper-slide`)[0];
          n.loop && 0 === !i && (i = t[t.length - 1]),
            i && i.classList.add(n.slidePrevClass);
        }
        e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          n = t.rtlTranslate ? t.translate : -t.translate,
          {
            snapGrid: i,
            params: a,
            activeIndex: r,
            realIndex: s,
            snapIndex: o,
          } = t;
        let l,
          d = e;
        const p = (e) => {
          let n = e - t.virtual.slidesBefore;
          return (
            n < 0 && (n = t.virtual.slides.length + n),
            n >= t.virtual.slides.length && (n -= t.virtual.slides.length),
            n
          );
        };
        if (
          (void 0 === d &&
            (d = (function (e) {
              const { slidesGrid: t, params: n } = e,
                i = e.rtlTranslate ? e.translate : -e.translate;
              let a;
              for (let e = 0; e < t.length; e += 1)
                void 0 !== t[e + 1]
                  ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2
                    ? (a = e)
                    : i >= t[e] && i < t[e + 1] && (a = e + 1)
                  : i >= t[e] && (a = e);
              return (
                n.normalizeSlideIndex && (a < 0 || void 0 === a) && (a = 0), a
              );
            })(t)),
          i.indexOf(n) >= 0)
        )
          l = i.indexOf(n);
        else {
          const e = Math.min(a.slidesPerGroupSkip, d);
          l = e + Math.floor((d - e) / a.slidesPerGroup);
        }
        if ((l >= i.length && (l = i.length - 1), d === r))
          return (
            l !== o && ((t.snapIndex = l), t.emit("snapIndexChange")),
            void (
              t.params.loop &&
              t.virtual &&
              t.params.virtual.enabled &&
              (t.realIndex = p(d))
            )
          );
        let c;
        (c =
          t.virtual && a.virtual.enabled && a.loop
            ? p(d)
            : t.slides[d]
            ? parseInt(
                t.slides[d].getAttribute("data-swiper-slide-index") || d,
                10
              )
            : d),
          Object.assign(t, {
            snapIndex: l,
            realIndex: c,
            previousIndex: r,
            activeIndex: d,
          }),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          s !== c && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          n = t.params,
          i = e.closest(`.${n.slideClass}, swiper-slide`);
        let a,
          r = !1;
        if (i)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === i) {
              (r = !0), (a = e);
              break;
            }
        if (!i || !r)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = i),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                i.getAttribute("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = a),
          n.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
  function S({ swiper: e, runCallbacks: t, direction: n, step: i }) {
    const { activeIndex: a, previousIndex: r } = e;
    let s = n;
    if (
      (s || (s = a > r ? "next" : a < r ? "prev" : "reset"),
      e.emit(`transition${i}`),
      t && a !== r)
    ) {
      if ("reset" === s) return void e.emit(`slideResetTransition${i}`);
      e.emit(`slideChangeTransition${i}`),
        "next" === s
          ? e.emit(`slideNextTransition${i}`)
          : e.emit(`slidePrevTransition${i}`);
    }
  }
  const z = {
    slideTo: function (e = 0, t = this.params.speed, n = !0, i, a) {
      "string" == typeof e && (e = parseInt(e, 10));
      const r = this;
      let s = e;
      s < 0 && (s = 0);
      const {
        params: o,
        snapGrid: l,
        slidesGrid: d,
        previousIndex: p,
        activeIndex: c,
        rtlTranslate: g,
        wrapperEl: m,
        enabled: h,
      } = r;
      if ((r.animating && o.preventInteractionOnTransition) || (!h && !i && !a))
        return !1;
      const w = Math.min(r.params.slidesPerGroupSkip, s);
      let f = w + Math.floor((s - w) / r.params.slidesPerGroup);
      f >= l.length && (f = l.length - 1);
      const y = -l[f];
      if (o.normalizeSlideIndex)
        for (let e = 0; e < d.length; e += 1) {
          const t = -Math.floor(100 * y),
            n = Math.floor(100 * d[e]),
            i = Math.floor(100 * d[e + 1]);
          void 0 !== d[e + 1]
            ? t >= n && t < i - (i - n) / 2
              ? (s = e)
              : t >= n && t < i && (s = e + 1)
            : t >= n && (s = e);
        }
      if (r.initialized && s !== c) {
        if (!r.allowSlideNext && y < r.translate && y < r.minTranslate())
          return !1;
        if (
          !r.allowSlidePrev &&
          y > r.translate &&
          y > r.maxTranslate() &&
          (c || 0) !== s
        )
          return !1;
      }
      let b;
      if (
        (s !== (p || 0) && n && r.emit("beforeSlideChangeStart"),
        r.updateProgress(y),
        (b = s > c ? "next" : s < c ? "prev" : "reset"),
        (g && -y === r.translate) || (!g && y === r.translate))
      )
        return (
          r.updateActiveIndex(s),
          o.autoHeight && r.updateAutoHeight(),
          r.updateSlidesClasses(),
          "slide" !== o.effect && r.setTranslate(y),
          "reset" !== b && (r.transitionStart(n, b), r.transitionEnd(n, b)),
          !1
        );
      if (o.cssMode) {
        const e = r.isHorizontal(),
          n = g ? y : -y;
        if (0 === t) {
          const t = r.virtual && r.params.virtual.enabled;
          t &&
            ((r.wrapperEl.style.scrollSnapType = "none"),
            (r._immediateVirtual = !0)),
            t && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
              ? ((r._cssModeVirtualInitialSet = !0),
                requestAnimationFrame(() => {
                  m[e ? "scrollLeft" : "scrollTop"] = n;
                }))
              : (m[e ? "scrollLeft" : "scrollTop"] = n),
            t &&
              requestAnimationFrame(() => {
                (r.wrapperEl.style.scrollSnapType = ""),
                  (r._immediateVirtual = !1);
              });
        } else {
          if (!r.support.smoothScroll)
            return (
              u({ swiper: r, targetPosition: n, side: e ? "left" : "top" }), !0
            );
          m.scrollTo({ [e ? "left" : "top"]: n, behavior: "smooth" });
        }
        return !0;
      }
      return (
        r.setTransition(t),
        r.setTranslate(y),
        r.updateActiveIndex(s),
        r.updateSlidesClasses(),
        r.emit("beforeTransitionStart", t, i),
        r.transitionStart(n, b),
        0 === t
          ? r.transitionEnd(n, b)
          : r.animating ||
            ((r.animating = !0),
            r.onSlideToWrapperTransitionEnd ||
              (r.onSlideToWrapperTransitionEnd = function (e) {
                r &&
                  !r.destroyed &&
                  e.target === this &&
                  (r.wrapperEl.removeEventListener(
                    "transitionend",
                    r.onSlideToWrapperTransitionEnd
                  ),
                  (r.onSlideToWrapperTransitionEnd = null),
                  delete r.onSlideToWrapperTransitionEnd,
                  r.transitionEnd(n, b));
              }),
            r.wrapperEl.addEventListener(
              "transitionend",
              r.onSlideToWrapperTransitionEnd
            )),
        !0
      );
    },
    slideToLoop: function (e = 0, t = this.params.speed, n = !0, i) {
      "string" == typeof e && (e = parseInt(e, 10));
      const a = this;
      let r = e;
      return (
        a.params.loop &&
          (a.virtual && a.params.virtual.enabled
            ? (r += a.virtual.slidesBefore)
            : (r = a.getSlideIndex(
                a.slides.filter(
                  (e) => 1 * e.getAttribute("data-swiper-slide-index") === r
                )[0]
              ))),
        a.slideTo(r, t, n, i)
      );
    },
    slideNext: function (e = this.params.speed, t = !0, n) {
      const i = this,
        { enabled: a, params: r, animating: s } = i;
      if (!a) return i;
      let o = r.slidesPerGroup;
      "auto" === r.slidesPerView &&
        1 === r.slidesPerGroup &&
        r.slidesPerGroupAuto &&
        (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
      const l = i.activeIndex < r.slidesPerGroupSkip ? 1 : o,
        d = i.virtual && r.virtual.enabled;
      if (r.loop) {
        if (s && !d && r.loopPreventsSliding) return !1;
        i.loopFix({ direction: "next" }),
          (i._clientLeft = i.wrapperEl.clientLeft);
      }
      return r.rewind && i.isEnd
        ? i.slideTo(0, e, t, n)
        : i.slideTo(i.activeIndex + l, e, t, n);
    },
    slidePrev: function (e = this.params.speed, t = !0, n) {
      const i = this,
        {
          params: a,
          snapGrid: r,
          slidesGrid: s,
          rtlTranslate: o,
          enabled: l,
          animating: d,
        } = i;
      if (!l) return i;
      const p = i.virtual && a.virtual.enabled;
      if (a.loop) {
        if (d && !p && a.loopPreventsSliding) return !1;
        i.loopFix({ direction: "prev" }),
          (i._clientLeft = i.wrapperEl.clientLeft);
      }
      function c(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      const u = c(o ? i.translate : -i.translate),
        g = r.map((e) => c(e));
      let m = r[g.indexOf(u) - 1];
      if (void 0 === m && a.cssMode) {
        let e;
        r.forEach((t, n) => {
          u >= t && (e = n);
        }),
          void 0 !== e && (m = r[e > 0 ? e - 1 : e]);
      }
      let h = 0;
      if (
        (void 0 !== m &&
          ((h = s.indexOf(m)),
          h < 0 && (h = i.activeIndex - 1),
          "auto" === a.slidesPerView &&
            1 === a.slidesPerGroup &&
            a.slidesPerGroupAuto &&
            ((h = h - i.slidesPerViewDynamic("previous", !0) + 1),
            (h = Math.max(h, 0)))),
        a.rewind && i.isBeginning)
      ) {
        const a =
          i.params.virtual && i.params.virtual.enabled && i.virtual
            ? i.virtual.slides.length - 1
            : i.slides.length - 1;
        return i.slideTo(a, e, t, n);
      }
      return i.slideTo(h, e, t, n);
    },
    slideReset: function (e = this.params.speed, t = !0, n) {
      return this.slideTo(this.activeIndex, e, t, n);
    },
    slideToClosest: function (e = this.params.speed, t = !0, n, i = 0.5) {
      const a = this;
      let r = a.activeIndex;
      const s = Math.min(a.params.slidesPerGroupSkip, r),
        o = s + Math.floor((r - s) / a.params.slidesPerGroup),
        l = a.rtlTranslate ? a.translate : -a.translate;
      if (l >= a.snapGrid[o]) {
        const e = a.snapGrid[o];
        l - e > (a.snapGrid[o + 1] - e) * i && (r += a.params.slidesPerGroup);
      } else {
        const e = a.snapGrid[o - 1];
        l - e <= (a.snapGrid[o] - e) * i && (r -= a.params.slidesPerGroup);
      }
      return (
        (r = Math.max(r, 0)),
        (r = Math.min(r, a.slidesGrid.length - 1)),
        a.slideTo(r, e, t, n)
      );
    },
    slideToClickedSlide: function () {
      const e = this,
        { params: t, slidesEl: n } = e,
        i =
          "auto" === t.slidesPerView
            ? e.slidesPerViewDynamic()
            : t.slidesPerView;
      let a,
        r = e.clickedIndex;
      const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
      if (t.loop) {
        if (e.animating) return;
        (a = parseInt(
          e.clickedSlide.getAttribute("data-swiper-slide-index"),
          10
        )),
          t.centeredSlides
            ? r < e.loopedSlides - i / 2 ||
              r > e.slides.length - e.loopedSlides + i / 2
              ? (e.loopFix(),
                (r = e.getSlideIndex(
                  m(n, `${o}[data-swiper-slide-index="${a}"]`)[0]
                )),
                s(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r)
            : r > e.slides.length - i
            ? (e.loopFix(),
              (r = e.getSlideIndex(
                m(n, `${o}[data-swiper-slide-index="${a}"]`)[0]
              )),
              s(() => {
                e.slideTo(r);
              }))
            : e.slideTo(r);
      } else e.slideTo(r);
    },
  };
  function I(e) {
    const t = this,
      n = i(),
      a = r(),
      s = t.touchEventsData;
    s.evCache.push(e);
    const { params: l, touches: d, enabled: p } = t;
    if (!p) return;
    if (!l.simulateTouch && "mouse" === e.pointerType) return;
    if (t.animating && l.preventInteractionOnTransition) return;
    !t.animating && l.cssMode && l.loop && t.loopFix();
    let c = e;
    c.originalEvent && (c = c.originalEvent);
    let u = c.target;
    if ("wrapper" === l.touchEventsTarget && !t.wrapperEl.contains(u)) return;
    if ("which" in c && 3 === c.which) return;
    if ("button" in c && c.button > 0) return;
    if (s.isTouched && s.isMoved) return;
    const g = !!l.noSwipingClass && "" !== l.noSwipingClass,
      m = e.composedPath ? e.composedPath() : e.path;
    g && c.target && c.target.shadowRoot && m && (u = m[0]);
    const h = l.noSwipingSelector
        ? l.noSwipingSelector
        : `.${l.noSwipingClass}`,
      w = !(!c.target || !c.target.shadowRoot);
    if (
      l.noSwiping &&
      (w
        ? (function (e, t = this) {
            return (function t(n) {
              if (!n || n === i() || n === r()) return null;
              n.assignedSlot && (n = n.assignedSlot);
              const a = n.closest(e);
              return a || n.getRootNode ? a || t(n.getRootNode().host) : null;
            })(t);
          })(h, u)
        : u.closest(h))
    )
      return void (t.allowClick = !0);
    if (l.swipeHandler && !u.closest(l.swipeHandler)) return;
    (d.currentX = c.pageX), (d.currentY = c.pageY);
    const f = d.currentX,
      y = d.currentY,
      b = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
      v = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
    if (b && (f <= v || f >= a.innerWidth - v)) {
      if ("prevent" !== b) return;
      e.preventDefault();
    }
    Object.assign(s, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (d.startX = f),
      (d.startY = y),
      (s.touchStartTime = o()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      l.threshold > 0 && (s.allowThresholdMove = !1);
    let x = !0;
    u.matches(s.focusableElements) &&
      ((x = !1), "SELECT" === u.nodeName && (s.isTouched = !1)),
      n.activeElement &&
        n.activeElement.matches(s.focusableElements) &&
        n.activeElement !== u &&
        n.activeElement.blur();
    const M = x && t.allowTouchMove && l.touchStartPreventDefault;
    (!l.touchStartForcePreventDefault && !M) ||
      u.isContentEditable ||
      c.preventDefault(),
      t.params.freeMode &&
        t.params.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !l.cssMode &&
        t.freeMode.onTouchStart(),
      t.emit("touchStart", c);
  }
  function N(e) {
    const t = i(),
      n = this,
      a = n.touchEventsData,
      { params: r, touches: s, rtlTranslate: l, enabled: d } = n;
    if (!d) return;
    if (!r.simulateTouch && "mouse" === e.pointerType) return;
    let p = e;
    if ((p.originalEvent && (p = p.originalEvent), !a.isTouched))
      return void (
        a.startMoving &&
        a.isScrolling &&
        n.emit("touchMoveOpposite", p)
      );
    const c = a.evCache.findIndex((e) => e.pointerId === p.pointerId);
    c >= 0 && (a.evCache[c] = p);
    const u = a.evCache.length > 1 ? a.evCache[0] : p,
      g = u.pageX,
      m = u.pageY;
    if (p.preventedByNestedSwiper) return (s.startX = g), void (s.startY = m);
    if (!n.allowTouchMove)
      return (
        p.target.matches(a.focusableElements) || (n.allowClick = !1),
        void (
          a.isTouched &&
          (Object.assign(s, {
            startX: g,
            startY: m,
            prevX: n.touches.currentX,
            prevY: n.touches.currentY,
            currentX: g,
            currentY: m,
          }),
          (a.touchStartTime = o()))
        )
      );
    if (r.touchReleaseOnEdges && !r.loop)
      if (n.isVertical()) {
        if (
          (m < s.startY && n.translate <= n.maxTranslate()) ||
          (m > s.startY && n.translate >= n.minTranslate())
        )
          return (a.isTouched = !1), void (a.isMoved = !1);
      } else if (
        (g < s.startX && n.translate <= n.maxTranslate()) ||
        (g > s.startX && n.translate >= n.minTranslate())
      )
        return;
    if (
      t.activeElement &&
      p.target === t.activeElement &&
      p.target.matches(a.focusableElements)
    )
      return (a.isMoved = !0), void (n.allowClick = !1);
    if (
      (a.allowTouchCallbacks && n.emit("touchMove", p),
      p.targetTouches && p.targetTouches.length > 1)
    )
      return;
    (s.currentX = g), (s.currentY = m);
    const h = s.currentX - s.startX,
      w = s.currentY - s.startY;
    if (n.params.threshold && Math.sqrt(h ** 2 + w ** 2) < n.params.threshold)
      return;
    if (void 0 === a.isScrolling) {
      let e;
      (n.isHorizontal() && s.currentY === s.startY) ||
      (n.isVertical() && s.currentX === s.startX)
        ? (a.isScrolling = !1)
        : h * h + w * w >= 25 &&
          ((e = (180 * Math.atan2(Math.abs(w), Math.abs(h))) / Math.PI),
          (a.isScrolling = n.isHorizontal()
            ? e > r.touchAngle
            : 90 - e > r.touchAngle));
    }
    if (
      (a.isScrolling && n.emit("touchMoveOpposite", p),
      void 0 === a.startMoving &&
        ((s.currentX === s.startX && s.currentY === s.startY) ||
          (a.startMoving = !0)),
      a.isScrolling ||
        (n.zoom &&
          n.params.zoom &&
          n.params.zoom.enabled &&
          a.evCache.length > 1))
    )
      return void (a.isTouched = !1);
    if (!a.startMoving) return;
    (n.allowClick = !1),
      !r.cssMode && p.cancelable && p.preventDefault(),
      r.touchMoveStopPropagation && !r.nested && p.stopPropagation();
    let f = n.isHorizontal() ? h : w,
      y = n.isHorizontal()
        ? s.currentX - s.previousX
        : s.currentY - s.previousY;
    r.oneWayMovement &&
      ((f = Math.abs(f) * (l ? 1 : -1)), (y = Math.abs(y) * (l ? 1 : -1))),
      (s.diff = f),
      (f *= r.touchRatio),
      l && ((f = -f), (y = -y));
    const b = n.touchesDirection;
    (n.swipeDirection = f > 0 ? "prev" : "next"),
      (n.touchesDirection = y > 0 ? "prev" : "next");
    const v = n.params.loop && !r.cssMode;
    if (!a.isMoved) {
      if (
        (v && n.loopFix({ direction: n.swipeDirection }),
        (a.startTranslate = n.getTranslate()),
        n.setTransition(0),
        n.animating)
      ) {
        const e = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0,
        });
        n.wrapperEl.dispatchEvent(e);
      }
      (a.allowMomentumBounce = !1),
        !r.grabCursor ||
          (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) ||
          n.setGrabCursor(!0),
        n.emit("sliderFirstMove", p);
    }
    let x;
    a.isMoved &&
      b !== n.touchesDirection &&
      v &&
      Math.abs(f) >= 1 &&
      (n.loopFix({ direction: n.swipeDirection, setTranslate: !0 }), (x = !0)),
      n.emit("sliderMove", p),
      (a.isMoved = !0),
      (a.currentTranslate = f + a.startTranslate);
    let M = !0,
      E = r.resistanceRatio;
    if (
      (r.touchReleaseOnEdges && (E = 0),
      f > 0
        ? (v &&
            !x &&
            a.currentTranslate >
              (r.centeredSlides
                ? n.minTranslate() - n.size / 2
                : n.minTranslate()) &&
            n.loopFix({
              direction: "prev",
              setTranslate: !0,
              activeSlideIndex: 0,
            }),
          a.currentTranslate > n.minTranslate() &&
            ((M = !1),
            r.resistance &&
              (a.currentTranslate =
                n.minTranslate() -
                1 +
                (-n.minTranslate() + a.startTranslate + f) ** E)))
        : f < 0 &&
          (v &&
            !x &&
            a.currentTranslate <
              (r.centeredSlides
                ? n.maxTranslate() + n.size / 2
                : n.maxTranslate()) &&
            n.loopFix({
              direction: "next",
              setTranslate: !0,
              activeSlideIndex:
                n.slides.length -
                ("auto" === r.slidesPerView
                  ? n.slidesPerViewDynamic()
                  : Math.ceil(parseFloat(r.slidesPerView, 10))),
            }),
          a.currentTranslate < n.maxTranslate() &&
            ((M = !1),
            r.resistance &&
              (a.currentTranslate =
                n.maxTranslate() +
                1 -
                (n.maxTranslate() - a.startTranslate - f) ** E))),
      M && (p.preventedByNestedSwiper = !0),
      !n.allowSlideNext &&
        "next" === n.swipeDirection &&
        a.currentTranslate < a.startTranslate &&
        (a.currentTranslate = a.startTranslate),
      !n.allowSlidePrev &&
        "prev" === n.swipeDirection &&
        a.currentTranslate > a.startTranslate &&
        (a.currentTranslate = a.startTranslate),
      n.allowSlidePrev ||
        n.allowSlideNext ||
        (a.currentTranslate = a.startTranslate),
      r.threshold > 0)
    ) {
      if (!(Math.abs(f) > r.threshold || a.allowThresholdMove))
        return void (a.currentTranslate = a.startTranslate);
      if (!a.allowThresholdMove)
        return (
          (a.allowThresholdMove = !0),
          (s.startX = s.currentX),
          (s.startY = s.currentY),
          (a.currentTranslate = a.startTranslate),
          void (s.diff = n.isHorizontal()
            ? s.currentX - s.startX
            : s.currentY - s.startY)
        );
    }
    r.followFinger &&
      !r.cssMode &&
      (((r.freeMode && r.freeMode.enabled && n.freeMode) ||
        r.watchSlidesProgress) &&
        (n.updateActiveIndex(), n.updateSlidesClasses()),
      n.params.freeMode &&
        r.freeMode.enabled &&
        n.freeMode &&
        n.freeMode.onTouchMove(),
      n.updateProgress(a.currentTranslate),
      n.setTranslate(a.currentTranslate));
  }
  function D(e) {
    const t = this,
      n = t.touchEventsData,
      i = n.evCache.findIndex((t) => t.pointerId === e.pointerId);
    if (
      (i >= 0 && n.evCache.splice(i, 1),
      ["pointercancel", "pointerout", "pointerleave"].includes(e.type) &&
        ("pointercancel" !== e.type ||
          (!t.browser.isSafari && !t.browser.isWebView)))
    )
      return;
    const {
      params: a,
      touches: r,
      rtlTranslate: l,
      slidesGrid: d,
      enabled: p,
    } = t;
    if (!p) return;
    if (!a.simulateTouch && "mouse" === e.pointerType) return;
    let c = e;
    if (
      (c.originalEvent && (c = c.originalEvent),
      n.allowTouchCallbacks && t.emit("touchEnd", c),
      (n.allowTouchCallbacks = !1),
      !n.isTouched)
    )
      return (
        n.isMoved && a.grabCursor && t.setGrabCursor(!1),
        (n.isMoved = !1),
        void (n.startMoving = !1)
      );
    a.grabCursor &&
      n.isMoved &&
      n.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    const u = o(),
      g = u - n.touchStartTime;
    if (t.allowClick) {
      const e = c.path || (c.composedPath && c.composedPath());
      t.updateClickedSlide((e && e[0]) || c.target),
        t.emit("tap click", c),
        g < 300 &&
          u - n.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", c);
    }
    if (
      ((n.lastClickTime = o()),
      s(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !n.isTouched ||
        !n.isMoved ||
        !t.swipeDirection ||
        0 === r.diff ||
        n.currentTranslate === n.startTranslate)
    )
      return (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1);
    let m;
    if (
      ((n.isTouched = !1),
      (n.isMoved = !1),
      (n.startMoving = !1),
      (m = a.followFinger
        ? l
          ? t.translate
          : -t.translate
        : -n.currentTranslate),
      a.cssMode)
    )
      return;
    if (t.params.freeMode && a.freeMode.enabled)
      return void t.freeMode.onTouchEnd({ currentPos: m });
    let h = 0,
      w = t.slidesSizesGrid[0];
    for (
      let e = 0;
      e < d.length;
      e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
    ) {
      const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
      void 0 !== d[e + t]
        ? m >= d[e] && m < d[e + t] && ((h = e), (w = d[e + t] - d[e]))
        : m >= d[e] && ((h = e), (w = d[d.length - 1] - d[d.length - 2]));
    }
    let f = null,
      y = null;
    a.rewind &&
      (t.isBeginning
        ? (y =
            t.params.virtual && t.params.virtual.enabled && t.virtual
              ? t.virtual.slides.length - 1
              : t.slides.length - 1)
        : t.isEnd && (f = 0));
    const b = (m - d[h]) / w,
      v = h < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    if (g > a.longSwipesMs) {
      if (!a.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection &&
        (b >= a.longSwipesRatio
          ? t.slideTo(a.rewind && t.isEnd ? f : h + v)
          : t.slideTo(h)),
        "prev" === t.swipeDirection &&
          (b > 1 - a.longSwipesRatio
            ? t.slideTo(h + v)
            : null !== y && b < 0 && Math.abs(b) > a.longSwipesRatio
            ? t.slideTo(y)
            : t.slideTo(h));
    } else {
      if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
      !t.navigation ||
      (c.target !== t.navigation.nextEl && c.target !== t.navigation.prevEl)
        ? ("next" === t.swipeDirection && t.slideTo(null !== f ? f : h + v),
          "prev" === t.swipeDirection && t.slideTo(null !== y ? y : h))
        : c.target === t.navigation.nextEl
        ? t.slideTo(h + v)
        : t.slideTo(h);
    }
  }
  let k;
  function j() {
    const e = this,
      { params: t, el: n } = e;
    if (n && 0 === n.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: i, allowSlidePrev: a, snapGrid: r } = e,
      s = e.virtual && e.params.virtual.enabled;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses();
    const o = s && t.loop;
    !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
    !e.isEnd ||
    e.isBeginning ||
    e.params.centeredSlides ||
    o
      ? e.params.loop && !s
        ? e.slideToLoop(e.realIndex, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0)
      : e.slideTo(e.slides.length - 1, 0, !1, !0),
      e.autoplay &&
        e.autoplay.running &&
        e.autoplay.paused &&
        (clearTimeout(k),
        (k = setTimeout(() => {
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.resume();
        }, 500))),
      (e.allowSlidePrev = a),
      (e.allowSlideNext = i),
      e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
  }
  function O(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function P() {
    const e = this,
      { wrapperEl: t, rtlTranslate: n, enabled: i } = e;
    if (!i) return;
    let a;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    const r = e.maxTranslate() - e.minTranslate();
    (a = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
      a !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  const Y = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const n = t.closest(
      e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
    );
    if (n) {
      const t = n.querySelector(`.${e.params.lazyPreloaderClass}`);
      t && t.remove();
    }
  };
  function $(e) {
    Y(this, e.target), this.update();
  }
  let B = !1;
  function G() {}
  const U = (e, t) => {
      const n = i(),
        { params: a, el: r, wrapperEl: s, device: o } = e,
        l = !!a.nested,
        d = "on" === t ? "addEventListener" : "removeEventListener",
        p = t;
      r[d]("pointerdown", e.onTouchStart, { passive: !1 }),
        n[d]("pointermove", e.onTouchMove, { passive: !1, capture: l }),
        n[d]("pointerup", e.onTouchEnd, { passive: !0 }),
        n[d]("pointercancel", e.onTouchEnd, { passive: !0 }),
        n[d]("pointerout", e.onTouchEnd, { passive: !0 }),
        n[d]("pointerleave", e.onTouchEnd, { passive: !0 }),
        (a.preventClicks || a.preventClicksPropagation) &&
          r[d]("click", e.onClick, !0),
        a.cssMode && s[d]("scroll", e.onScroll),
        a.updateOnWindowResize
          ? e[p](
              o.ios || o.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              j,
              !0
            )
          : e[p]("observerUpdate", j, !0),
        r[d]("load", e.onLoad, { capture: !0 });
    },
    Q = (e, t) => e.grid && t.grid && t.grid.rows > 1,
    R = {
      init: !0,
      direction: "horizontal",
      oneWayMovement: !1,
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopedSlides: null,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
      wrapperClass: "swiper-wrapper",
      lazyPreloaderClass: "swiper-lazy-preloader",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
  function H(e, t) {
    return function (n = {}) {
      const i = Object.keys(n)[0],
        a = n[i];
      "object" == typeof a && null !== a
        ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
            !0 === e[i] &&
            (e[i] = { auto: !0 }),
          i in e && "enabled" in a
            ? (!0 === e[i] && (e[i] = { enabled: !0 }),
              "object" != typeof e[i] ||
                "enabled" in e[i] ||
                (e[i].enabled = !0),
              e[i] || (e[i] = { enabled: !1 }),
              p(t, n))
            : p(t, n))
        : p(t, n);
    };
  }
  const q = {
      eventsEmitter: C,
      update: L,
      translate: {
        getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
          const {
            params: t,
            rtlTranslate: n,
            translate: i,
            wrapperEl: a,
          } = this;
          if (t.virtualTranslate) return n ? -i : i;
          if (t.cssMode) return i;
          let r = l(a, e);
          return n && (r = -r), r || 0;
        },
        setTranslate: function (e, t) {
          const n = this,
            { rtlTranslate: i, params: a, wrapperEl: r, progress: s } = n;
          let o,
            l = 0,
            d = 0;
          n.isHorizontal() ? (l = i ? -e : e) : (d = e),
            a.roundLengths && ((l = Math.floor(l)), (d = Math.floor(d))),
            a.cssMode
              ? (r[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  n.isHorizontal() ? -l : -d)
              : a.virtualTranslate ||
                (r.style.transform = `translate3d(${l}px, ${d}px, 0px)`),
            (n.previousTranslate = n.translate),
            (n.translate = n.isHorizontal() ? l : d);
          const p = n.maxTranslate() - n.minTranslate();
          (o = 0 === p ? 0 : (e - n.minTranslate()) / p),
            o !== s && n.updateProgress(e),
            n.emit("setTranslate", n.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (
          e = 0,
          t = this.params.speed,
          n = !0,
          i = !0,
          a
        ) {
          const r = this,
            { params: s, wrapperEl: o } = r;
          if (r.animating && s.preventInteractionOnTransition) return !1;
          const l = r.minTranslate(),
            d = r.maxTranslate();
          let p;
          if (
            ((p = i && e > l ? l : i && e < d ? d : e),
            r.updateProgress(p),
            s.cssMode)
          ) {
            const e = r.isHorizontal();
            if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -p;
            else {
              if (!r.support.smoothScroll)
                return (
                  u({
                    swiper: r,
                    targetPosition: -p,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              o.scrollTo({ [e ? "left" : "top"]: -p, behavior: "smooth" });
            }
            return !0;
          }
          return (
            0 === t
              ? (r.setTransition(0),
                r.setTranslate(p),
                n &&
                  (r.emit("beforeTransitionStart", t, a),
                  r.emit("transitionEnd")))
              : (r.setTransition(t),
                r.setTranslate(p),
                n &&
                  (r.emit("beforeTransitionStart", t, a),
                  r.emit("transitionStart")),
                r.animating ||
                  ((r.animating = !0),
                  r.onTranslateToWrapperTransitionEnd ||
                    (r.onTranslateToWrapperTransitionEnd = function (e) {
                      r &&
                        !r.destroyed &&
                        e.target === this &&
                        (r.wrapperEl.removeEventListener(
                          "transitionend",
                          r.onTranslateToWrapperTransitionEnd
                        ),
                        (r.onTranslateToWrapperTransitionEnd = null),
                        delete r.onTranslateToWrapperTransitionEnd,
                        n && r.emit("transitionEnd"));
                    }),
                  r.wrapperEl.addEventListener(
                    "transitionend",
                    r.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      },
      transition: {
        setTransition: function (e, t) {
          const n = this;
          n.params.cssMode || (n.wrapperEl.style.transitionDuration = `${e}ms`),
            n.emit("setTransition", e, t);
        },
        transitionStart: function (e = !0, t) {
          const n = this,
            { params: i } = n;
          i.cssMode ||
            (i.autoHeight && n.updateAutoHeight(),
            S({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
        },
        transitionEnd: function (e = !0, t) {
          const n = this,
            { params: i } = n;
          (n.animating = !1),
            i.cssMode ||
              (n.setTransition(0),
              S({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
        },
      },
      slide: z,
      loop: {
        loopCreate: function (e) {
          const t = this,
            { params: n, slidesEl: i } = t;
          !n.loop ||
            (t.virtual && t.params.virtual.enabled) ||
            (m(i, `.${n.slideClass}, swiper-slide`).forEach((e, t) => {
              e.setAttribute("data-swiper-slide-index", t);
            }),
            t.loopFix({
              slideRealIndex: e,
              direction: n.centeredSlides ? void 0 : "next",
            }));
        },
        loopFix: function ({
          slideRealIndex: e,
          slideTo: t = !0,
          direction: n,
          setTranslate: i,
          activeSlideIndex: a,
          byController: r,
          byMousewheel: s,
        } = {}) {
          const o = this;
          if (!o.params.loop) return;
          o.emit("beforeLoopFix");
          const {
            slides: l,
            allowSlidePrev: d,
            allowSlideNext: p,
            slidesEl: c,
            params: u,
          } = o;
          if (
            ((o.allowSlidePrev = !0),
            (o.allowSlideNext = !0),
            o.virtual && u.virtual.enabled)
          )
            return (
              t &&
                (u.centeredSlides || 0 !== o.snapIndex
                  ? u.centeredSlides && o.snapIndex < u.slidesPerView
                    ? o.slideTo(
                        o.virtual.slides.length + o.snapIndex,
                        0,
                        !1,
                        !0
                      )
                    : o.snapIndex === o.snapGrid.length - 1 &&
                      o.slideTo(o.virtual.slidesBefore, 0, !1, !0)
                  : o.slideTo(o.virtual.slides.length, 0, !1, !0)),
              (o.allowSlidePrev = d),
              (o.allowSlideNext = p),
              void o.emit("loopFix")
            );
          const g =
            "auto" === u.slidesPerView
              ? o.slidesPerViewDynamic()
              : Math.ceil(parseFloat(u.slidesPerView, 10));
          let m = u.loopedSlides || g;
          m % u.slidesPerGroup != 0 &&
            (m += u.slidesPerGroup - (m % u.slidesPerGroup)),
            (o.loopedSlides = m);
          const h = [],
            w = [];
          let f = o.activeIndex;
          void 0 === a
            ? (a = o.getSlideIndex(
                o.slides.filter((e) =>
                  e.classList.contains("swiper-slide-active")
                )[0]
              ))
            : (f = a);
          const y = "next" === n || !n,
            b = "prev" === n || !n;
          let v = 0,
            x = 0;
          if (a < m) {
            v = Math.max(m - a, u.slidesPerGroup);
            for (let e = 0; e < m - a; e += 1) {
              const t = e - Math.floor(e / l.length) * l.length;
              h.push(l.length - t - 1);
            }
          } else if (a > o.slides.length - 2 * m) {
            x = Math.max(a - (o.slides.length - 2 * m), u.slidesPerGroup);
            for (let e = 0; e < x; e += 1) {
              const t = e - Math.floor(e / l.length) * l.length;
              w.push(t);
            }
          }
          if (
            (b &&
              h.forEach((e) => {
                c.prepend(o.slides[e]);
              }),
            y &&
              w.forEach((e) => {
                c.append(o.slides[e]);
              }),
            o.recalcSlides(),
            u.watchSlidesProgress && o.updateSlidesOffset(),
            t)
          )
            if (h.length > 0 && b)
              if (void 0 === e) {
                const e = o.slidesGrid[f],
                  t = o.slidesGrid[f + v] - e;
                s
                  ? o.setTranslate(o.translate - t)
                  : (o.slideTo(f + v, 0, !1, !0),
                    i &&
                      (o.touches[o.isHorizontal() ? "startX" : "startY"] += t));
              } else i && o.slideToLoop(e, 0, !1, !0);
            else if (w.length > 0 && y)
              if (void 0 === e) {
                const e = o.slidesGrid[f],
                  t = o.slidesGrid[f - x] - e;
                s
                  ? o.setTranslate(o.translate - t)
                  : (o.slideTo(f - x, 0, !1, !0),
                    i &&
                      (o.touches[o.isHorizontal() ? "startX" : "startY"] += t));
              } else o.slideToLoop(e, 0, !1, !0);
          if (
            ((o.allowSlidePrev = d),
            (o.allowSlideNext = p),
            o.controller && o.controller.control && !r)
          ) {
            const t = {
              slideRealIndex: e,
              slideTo: !1,
              direction: n,
              setTranslate: i,
              activeSlideIndex: a,
              byController: !0,
            };
            Array.isArray(o.controller.control)
              ? o.controller.control.forEach((e) => {
                  e.params.loop && e.loopFix(t);
                })
              : o.controller.control instanceof o.constructor &&
                o.controller.control.params.loop &&
                o.controller.control.loopFix(t);
          }
          o.emit("loopFix");
        },
        loopDestroy: function () {
          const e = this,
            { slides: t, params: n, slidesEl: i } = e;
          if (!n.loop || (e.virtual && e.params.virtual.enabled)) return;
          e.recalcSlides();
          const a = [];
          t.forEach((e) => {
            const t =
              void 0 === e.swiperSlideIndex
                ? 1 * e.getAttribute("data-swiper-slide-index")
                : e.swiperSlideIndex;
            a[t] = e;
          }),
            t.forEach((e) => {
              e.removeAttribute("data-swiper-slide-index");
            }),
            a.forEach((e) => {
              i.append(e);
            }),
            e.recalcSlides(),
            e.slideTo(e.realIndex, 0);
        },
      },
      grabCursor: {
        setGrabCursor: function (e) {
          const t = this;
          if (
            !t.params.simulateTouch ||
            (t.params.watchOverflow && t.isLocked) ||
            t.params.cssMode
          )
            return;
          const n =
            "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          t.isElement && (t.__preventObserver__ = !0),
            (n.style.cursor = "move"),
            (n.style.cursor = e ? "grabbing" : "grab"),
            t.isElement &&
              requestAnimationFrame(() => {
                t.__preventObserver__ = !1;
              });
        },
        unsetGrabCursor: function () {
          const e = this;
          (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e.isElement && (e.__preventObserver__ = !0),
            (e[
              "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
            ].style.cursor = ""),
            e.isElement &&
              requestAnimationFrame(() => {
                e.__preventObserver__ = !1;
              }));
        },
      },
      events: {
        attachEvents: function () {
          const e = this,
            t = i(),
            { params: n } = e;
          (e.onTouchStart = I.bind(e)),
            (e.onTouchMove = N.bind(e)),
            (e.onTouchEnd = D.bind(e)),
            n.cssMode && (e.onScroll = P.bind(e)),
            (e.onClick = O.bind(e)),
            (e.onLoad = $.bind(e)),
            B || (t.addEventListener("touchstart", G), (B = !0)),
            U(e, "on");
        },
        detachEvents: function () {
          U(this, "off");
        },
      },
      breakpoints: {
        setBreakpoint: function () {
          const e = this,
            { realIndex: t, initialized: n, params: i, el: a } = e,
            r = i.breakpoints;
          if (!r || (r && 0 === Object.keys(r).length)) return;
          const s = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
          if (!s || e.currentBreakpoint === s) return;
          const o = (s in r ? r[s] : void 0) || e.originalParams,
            l = Q(e, i),
            d = Q(e, o),
            c = i.enabled;
          l && !d
            ? (a.classList.remove(
                `${i.containerModifierClass}grid`,
                `${i.containerModifierClass}grid-column`
              ),
              e.emitContainerClasses())
            : !l &&
              d &&
              (a.classList.add(`${i.containerModifierClass}grid`),
              ((o.grid.fill && "column" === o.grid.fill) ||
                (!o.grid.fill && "column" === i.grid.fill)) &&
                a.classList.add(`${i.containerModifierClass}grid-column`),
              e.emitContainerClasses()),
            ["navigation", "pagination", "scrollbar"].forEach((t) => {
              const n = i[t] && i[t].enabled,
                a = o[t] && o[t].enabled;
              n && !a && e[t].disable(), !n && a && e[t].enable();
            });
          const u = o.direction && o.direction !== i.direction,
            g = i.loop && (o.slidesPerView !== i.slidesPerView || u);
          u && n && e.changeDirection(), p(e.params, o);
          const m = e.params.enabled;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev,
          }),
            c && !m ? e.disable() : !c && m && e.enable(),
            (e.currentBreakpoint = s),
            e.emit("_beforeBreakpoint", o),
            g && n && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
            e.emit("breakpoint", o);
        },
        getBreakpoint: function (e, t = "window", n) {
          if (!e || ("container" === t && !n)) return;
          let i = !1;
          const a = r(),
            s = "window" === t ? a.innerHeight : n.clientHeight,
            o = Object.keys(e).map((e) => {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                const t = parseFloat(e.substr(1));
                return { value: s * t, point: e };
              }
              return { value: e, point: e };
            });
          o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let e = 0; e < o.length; e += 1) {
            const { point: r, value: s } = o[e];
            "window" === t
              ? a.matchMedia(`(min-width: ${s}px)`).matches && (i = r)
              : s <= n.clientWidth && (i = r);
          }
          return i || "max";
        },
      },
      checkOverflow: {
        checkOverflow: function () {
          const e = this,
            { isLocked: t, params: n } = e,
            { slidesOffsetBefore: i } = n;
          if (i) {
            const t = e.slides.length - 1,
              n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
            e.isLocked = e.size > n;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
            !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
            t && t !== e.isLocked && (e.isEnd = !1),
            t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        },
      },
      classes: {
        addClasses: function () {
          const e = this,
            { classNames: t, params: n, rtl: i, el: a, device: r } = e,
            s = (function (e, t) {
              const n = [];
              return (
                e.forEach((e) => {
                  "object" == typeof e
                    ? Object.keys(e).forEach((i) => {
                        e[i] && n.push(t + i);
                      })
                    : "string" == typeof e && n.push(t + e);
                }),
                n
              );
            })(
              [
                "initialized",
                n.direction,
                { "free-mode": e.params.freeMode && n.freeMode.enabled },
                { autoheight: n.autoHeight },
                { rtl: i },
                { grid: n.grid && n.grid.rows > 1 },
                {
                  "grid-column":
                    n.grid && n.grid.rows > 1 && "column" === n.grid.fill,
                },
                { android: r.android },
                { ios: r.ios },
                { "css-mode": n.cssMode },
                { centered: n.cssMode && n.centeredSlides },
                { "watch-progress": n.watchSlidesProgress },
              ],
              n.containerModifierClass
            );
          t.push(...s), a.classList.add(...t), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { el: e, classNames: t } = this;
          e.classList.remove(...t), this.emitContainerClasses();
        },
      },
    },
    V = {};
  class W {
    constructor(...e) {
      let t, n;
      1 === e.length &&
      e[0].constructor &&
      "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
        ? (n = e[0])
        : ([t, n] = e),
        n || (n = {}),
        (n = p({}, n)),
        t && !n.el && (n.el = t);
      const a = i();
      if (
        n.el &&
        "string" == typeof n.el &&
        a.querySelectorAll(n.el).length > 1
      ) {
        const e = [];
        return (
          a.querySelectorAll(n.el).forEach((t) => {
            const i = p({}, n, { el: t });
            e.push(new W(i));
          }),
          e
        );
      }
      const s = this;
      (s.__swiper__ = !0),
        (s.support = T()),
        (s.device = (function (e = {}) {
          return (
            E ||
              (E = (function ({ userAgent: e } = {}) {
                const t = T(),
                  n = r(),
                  i = n.navigator.platform,
                  a = e || n.navigator.userAgent,
                  s = { ios: !1, android: !1 },
                  o = n.screen.width,
                  l = n.screen.height,
                  d = a.match(/(Android);?[\s\/]+([\d.]+)?/);
                let p = a.match(/(iPad).*OS\s([\d_]+)/);
                const c = a.match(/(iPod)(.*OS\s([\d_]+))?/),
                  u = !p && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                  g = "Win32" === i;
                let m = "MacIntel" === i;
                return (
                  !p &&
                    m &&
                    t.touch &&
                    [
                      "1024x1366",
                      "1366x1024",
                      "834x1194",
                      "1194x834",
                      "834x1112",
                      "1112x834",
                      "768x1024",
                      "1024x768",
                      "820x1180",
                      "1180x820",
                      "810x1080",
                      "1080x810",
                    ].indexOf(`${o}x${l}`) >= 0 &&
                    ((p = a.match(/(Version)\/([\d.]+)/)),
                    p || (p = [0, 1, "13_0_0"]),
                    (m = !1)),
                  d && !g && ((s.os = "android"), (s.android = !0)),
                  (p || u || c) && ((s.os = "ios"), (s.ios = !0)),
                  s
                );
              })(e)),
            E
          );
        })({ userAgent: n.userAgent })),
        (s.browser =
          (A ||
            (A = (function () {
              const e = r();
              let t = !1;
              function n() {
                const t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  t.indexOf("chrome") < 0 &&
                  t.indexOf("android") < 0
                );
              }
              if (n()) {
                const n = String(e.navigator.userAgent);
                if (n.includes("Version/")) {
                  const [e, i] = n
                    .split("Version/")[1]
                    .split(" ")[0]
                    .split(".")
                    .map((e) => Number(e));
                  t = e < 16 || (16 === e && i < 2);
                }
              }
              return {
                isSafari: t || n(),
                needPerspectiveFix: t,
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  e.navigator.userAgent
                ),
              };
            })()),
          A)),
        (s.eventsListeners = {}),
        (s.eventsAnyListeners = []),
        (s.modules = [...s.__modules__]),
        n.modules && Array.isArray(n.modules) && s.modules.push(...n.modules);
      const l = {};
      s.modules.forEach((e) => {
        e({
          params: n,
          swiper: s,
          extendParams: H(n, l),
          on: s.on.bind(s),
          once: s.once.bind(s),
          off: s.off.bind(s),
          emit: s.emit.bind(s),
        });
      });
      const d = p({}, R, l);
      return (
        (s.params = p({}, d, V, n)),
        (s.originalParams = p({}, s.params)),
        (s.passedParams = p({}, n)),
        s.params &&
          s.params.on &&
          Object.keys(s.params.on).forEach((e) => {
            s.on(e, s.params.on[e]);
          }),
        s.params && s.params.onAny && s.onAny(s.params.onAny),
        Object.assign(s, {
          enabled: s.params.enabled,
          el: t,
          classNames: [],
          slides: [],
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => "horizontal" === s.params.direction,
          isVertical: () => "vertical" === s.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: s.params.allowSlideNext,
          allowSlidePrev: s.params.allowSlidePrev,
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: s.params.focusableElements,
            lastClickTime: o(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            startMoving: void 0,
            evCache: [],
          },
          allowClick: !0,
          allowTouchMove: s.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        s.emit("_swiper"),
        s.params.init && s.init(),
        s
      );
    }
    getSlideIndex(e) {
      const { slidesEl: t, params: n } = this,
        i = y(m(t, `.${n.slideClass}, swiper-slide`)[0]);
      return y(e) - i;
    }
    recalcSlides() {
      const { slidesEl: e, params: t } = this;
      this.slides = m(e, `.${t.slideClass}, swiper-slide`);
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"));
    }
    setProgress(e, t) {
      const n = this;
      e = Math.min(Math.max(e, 0), 1);
      const i = n.minTranslate(),
        a = (n.maxTranslate() - i) * e + i;
      n.translateTo(a, void 0 === t ? 0 : t),
        n.updateActiveIndex(),
        n.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (t) =>
            0 === t.indexOf("swiper") ||
            0 === t.indexOf(e.params.containerModifierClass)
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed
        ? ""
        : e.className
            .split(" ")
            .filter(
              (e) =>
                0 === e.indexOf("swiper-slide") ||
                0 === e.indexOf(t.params.slideClass)
            )
            .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.forEach((n) => {
        const i = e.getSlideClasses(n);
        t.push({ slideEl: n, classNames: i }), e.emit("_slideClass", n, i);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e = "current", t = !1) {
      const {
        params: n,
        slides: i,
        slidesGrid: a,
        slidesSizesGrid: r,
        size: s,
        activeIndex: o,
      } = this;
      let l = 1;
      if (n.centeredSlides) {
        let e,
          t = i[o].swiperSlideSize;
        for (let n = o + 1; n < i.length; n += 1)
          i[n] &&
            !e &&
            ((t += i[n].swiperSlideSize), (l += 1), t > s && (e = !0));
        for (let n = o - 1; n >= 0; n -= 1)
          i[n] &&
            !e &&
            ((t += i[n].swiperSlideSize), (l += 1), t > s && (e = !0));
      } else if ("current" === e)
        for (let e = o + 1; e < i.length; e += 1)
          (t ? a[e] + r[e] - a[o] < s : a[e] - a[o] < s) && (l += 1);
      else for (let e = o - 1; e >= 0; e -= 1) a[o] - a[e] < s && (l += 1);
      return l;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: n } = e;
      function i() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let a;
      n.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
          t.complete && Y(e, t);
        }),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        e.params.freeMode && e.params.freeMode.enabled
          ? (i(), e.params.autoHeight && e.updateAutoHeight())
          : ((a =
              ("auto" === e.params.slidesPerView ||
                e.params.slidesPerView > 1) &&
              e.isEnd &&
              !e.params.centeredSlides
                ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                : e.slideTo(e.activeIndex, 0, !1, !0)),
            a || i()),
        n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t = !0) {
      const n = this,
        i = n.params.direction;
      return (
        e || (e = "horizontal" === i ? "vertical" : "horizontal"),
        e === i ||
          ("horizontal" !== e && "vertical" !== e) ||
          (n.el.classList.remove(`${n.params.containerModifierClass}${i}`),
          n.el.classList.add(`${n.params.containerModifierClass}${e}`),
          n.emitContainerClasses(),
          (n.params.direction = e),
          n.slides.forEach((t) => {
            "vertical" === e ? (t.style.width = "") : (t.style.height = "");
          }),
          n.emit("changeDirection"),
          t && n.update()),
        n
      );
    }
    changeLanguageDirection(e) {
      const t = this;
      (t.rtl && "rtl" === e) ||
        (!t.rtl && "ltr" === e) ||
        ((t.rtl = "rtl" === e),
        (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
        t.rtl
          ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "rtl"))
          : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "ltr")),
        t.update());
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      let n = e || t.params.el;
      if (("string" == typeof n && (n = document.querySelector(n)), !n))
        return !1;
      (n.swiper = t), n.shadowEl && (t.isElement = !0);
      const i = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let a =
        n && n.shadowRoot && n.shadowRoot.querySelector
          ? n.shadowRoot.querySelector(i())
          : m(n, i())[0];
      return (
        !a &&
          t.params.createElements &&
          ((a = h("div", t.params.wrapperClass)),
          n.append(a),
          m(n, `.${t.params.slideClass}`).forEach((e) => {
            a.append(e);
          })),
        Object.assign(t, {
          el: n,
          wrapperEl: a,
          slidesEl: t.isElement ? n : a,
          mounted: !0,
          rtl: "rtl" === n.dir.toLowerCase() || "rtl" === f(n, "direction"),
          rtlTranslate:
            "horizontal" === t.params.direction &&
            ("rtl" === n.dir.toLowerCase() || "rtl" === f(n, "direction")),
          wrongRTL: "-webkit-box" === f(a, "display"),
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      return (
        t.initialized ||
          !1 === t.mount(e) ||
          (t.emit("beforeInit"),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.loop && t.virtual && t.params.virtual.enabled
            ? t.slideTo(
                t.params.initialSlide + t.virtual.slidesBefore,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              )
            : t.slideTo(
                t.params.initialSlide,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              ),
          t.params.loop && t.loopCreate(),
          t.attachEvents(),
          [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
            e.complete
              ? Y(t, e)
              : e.addEventListener("load", (e) => {
                  Y(t, e.target);
                });
          }),
          (t.initialized = !0),
          t.emit("init"),
          t.emit("afterInit")),
        t
      );
    }
    destroy(e = !0, t = !0) {
      const n = this,
        { params: i, el: a, wrapperEl: r, slides: s } = n;
      return (
        void 0 === n.params ||
          n.destroyed ||
          (n.emit("beforeDestroy"),
          (n.initialized = !1),
          n.detachEvents(),
          i.loop && n.loopDestroy(),
          t &&
            (n.removeClasses(),
            a.removeAttribute("style"),
            r.removeAttribute("style"),
            s &&
              s.length &&
              s.forEach((e) => {
                e.classList.remove(
                  i.slideVisibleClass,
                  i.slideActiveClass,
                  i.slideNextClass,
                  i.slidePrevClass
                ),
                  e.removeAttribute("style"),
                  e.removeAttribute("data-swiper-slide-index");
              })),
          n.emit("destroy"),
          Object.keys(n.eventsListeners).forEach((e) => {
            n.off(e);
          }),
          !1 !== e &&
            ((n.el.swiper = null),
            (function (e) {
              const t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (e) {}
                try {
                  delete t[e];
                } catch (e) {}
              });
            })(n)),
          (n.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      p(V, e);
    }
    static get extendedDefaults() {
      return V;
    }
    static get defaults() {
      return R;
    }
    static installModule(e) {
      W.prototype.__modules__ || (W.prototype.__modules__ = []);
      const t = W.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((e) => W.installModule(e)), W)
        : (W.installModule(e), W);
    }
  }
  Object.keys(q).forEach((e) => {
    Object.keys(q[e]).forEach((t) => {
      W.prototype[t] = q[e][t];
    });
  }),
    W.use([
      function ({ swiper: e, on: t, emit: n }) {
        const i = r();
        let a = null,
          s = null;
        const o = () => {
            e &&
              !e.destroyed &&
              e.initialized &&
              (n("beforeResize"), n("resize"));
          },
          l = () => {
            e && !e.destroyed && e.initialized && n("orientationchange");
          };
        t("init", () => {
          e.params.resizeObserver && void 0 !== i.ResizeObserver
            ? e &&
              !e.destroyed &&
              e.initialized &&
              ((a = new ResizeObserver((t) => {
                s = i.requestAnimationFrame(() => {
                  const { width: n, height: i } = e;
                  let a = n,
                    r = i;
                  t.forEach(
                    ({ contentBoxSize: t, contentRect: n, target: i }) => {
                      (i && i !== e.el) ||
                        ((a = n ? n.width : (t[0] || t).inlineSize),
                        (r = n ? n.height : (t[0] || t).blockSize));
                    }
                  ),
                    (a === n && r === i) || o();
                });
              })),
              a.observe(e.el))
            : (i.addEventListener("resize", o),
              i.addEventListener("orientationchange", l));
        }),
          t("destroy", () => {
            s && i.cancelAnimationFrame(s),
              a && a.unobserve && e.el && (a.unobserve(e.el), (a = null)),
              i.removeEventListener("resize", o),
              i.removeEventListener("orientationchange", l);
          });
      },
      function ({ swiper: e, extendParams: t, on: n, emit: i }) {
        const a = [],
          s = r(),
          o = (t, n = {}) => {
            const r = new (s.MutationObserver || s.WebkitMutationObserver)(
              (t) => {
                if (e.__preventObserver__) return;
                if (1 === t.length) return void i("observerUpdate", t[0]);
                const n = function () {
                  i("observerUpdate", t[0]);
                };
                s.requestAnimationFrame
                  ? s.requestAnimationFrame(n)
                  : s.setTimeout(n, 0);
              }
            );
            r.observe(t, {
              attributes: void 0 === n.attributes || n.attributes,
              childList: void 0 === n.childList || n.childList,
              characterData: void 0 === n.characterData || n.characterData,
            }),
              a.push(r);
          };
        t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          n("init", () => {
            if (e.params.observer) {
              if (e.params.observeParents) {
                const t = b(e.el);
                for (let e = 0; e < t.length; e += 1) o(t[e]);
              }
              o(e.el, { childList: e.params.observeSlideChildren }),
                o(e.wrapperEl, { attributes: !1 });
            }
          }),
          n("destroy", () => {
            a.forEach((e) => {
              e.disconnect();
            }),
              a.splice(0, a.length);
          });
      },
    ]);
  const Z = W;
  function X(e, t, n, i) {
    return (
      e.params.createElements &&
        Object.keys(i).forEach((a) => {
          if (!n[a] && !0 === n.auto) {
            let r = m(e.el, `.${i[a]}`)[0];
            r || ((r = h("div", i[a])), (r.className = i[a]), e.el.append(r)),
              (n[a] = r),
              (t[a] = r);
          }
        }),
      n
    );
  }
  function F(e = "") {
    return `.${e
      .trim()
      .replace(/([\.:!\/])/g, "\\$1")
      .replace(/ /g, ".")}`;
  }
  function _(e) {
    const t = this,
      { params: n, slidesEl: i } = t;
    n.loop && t.loopDestroy();
    const a = (e) => {
      if ("string" == typeof e) {
        const t = document.createElement("div");
        (t.innerHTML = e), i.append(t.children[0]), (t.innerHTML = "");
      } else i.append(e);
    };
    if ("object" == typeof e && "length" in e)
      for (let t = 0; t < e.length; t += 1) e[t] && a(e[t]);
    else a(e);
    t.recalcSlides(),
      n.loop && t.loopCreate(),
      (n.observer && !t.isElement) || t.update();
  }
  function J(e) {
    const t = this,
      { params: n, activeIndex: i, slidesEl: a } = t;
    n.loop && t.loopDestroy();
    let r = i + 1;
    const s = (e) => {
      if ("string" == typeof e) {
        const t = document.createElement("div");
        (t.innerHTML = e), a.prepend(t.children[0]), (t.innerHTML = "");
      } else a.prepend(e);
    };
    if ("object" == typeof e && "length" in e) {
      for (let t = 0; t < e.length; t += 1) e[t] && s(e[t]);
      r = i + e.length;
    } else s(e);
    t.recalcSlides(),
      n.loop && t.loopCreate(),
      (n.observer && !t.isElement) || t.update(),
      t.slideTo(r, 0, !1);
  }
  function K(e, t) {
    const n = this,
      { params: i, activeIndex: a, slidesEl: r } = n;
    let s = a;
    i.loop && ((s -= n.loopedSlides), n.loopDestroy(), n.recalcSlides());
    const o = n.slides.length;
    if (e <= 0) return void n.prependSlide(t);
    if (e >= o) return void n.appendSlide(t);
    let l = s > e ? s + 1 : s;
    const d = [];
    for (let t = o - 1; t >= e; t -= 1) {
      const e = n.slides[t];
      e.remove(), d.unshift(e);
    }
    if ("object" == typeof t && "length" in t) {
      for (let e = 0; e < t.length; e += 1) t[e] && r.append(t[e]);
      l = s > e ? s + t.length : s;
    } else r.append(t);
    for (let e = 0; e < d.length; e += 1) r.append(d[e]);
    n.recalcSlides(),
      i.loop && n.loopCreate(),
      (i.observer && !n.isElement) || n.update(),
      i.loop ? n.slideTo(l + n.loopedSlides, 0, !1) : n.slideTo(l, 0, !1);
  }
  function ee(e) {
    const t = this,
      { params: n, activeIndex: i } = t;
    let a = i;
    n.loop && ((a -= t.loopedSlides), t.loopDestroy());
    let r,
      s = a;
    if ("object" == typeof e && "length" in e) {
      for (let n = 0; n < e.length; n += 1)
        (r = e[n]), t.slides[r] && t.slides[r].remove(), r < s && (s -= 1);
      s = Math.max(s, 0);
    } else
      (r = e),
        t.slides[r] && t.slides[r].remove(),
        r < s && (s -= 1),
        (s = Math.max(s, 0));
    t.recalcSlides(),
      n.loop && t.loopCreate(),
      (n.observer && !t.isElement) || t.update(),
      n.loop ? t.slideTo(s + t.loopedSlides, 0, !1) : t.slideTo(s, 0, !1);
  }
  function te() {
    const e = this,
      t = [];
    for (let n = 0; n < e.slides.length; n += 1) t.push(n);
    e.removeSlide(t);
  }
  function ne(e) {
    const {
      effect: t,
      swiper: n,
      on: i,
      setTranslate: a,
      setTransition: r,
      overwriteParams: s,
      perspective: o,
      recreateShadows: l,
      getEffectParams: d,
    } = e;
    let p;
    i("beforeInit", () => {
      if (n.params.effect !== t) return;
      n.classNames.push(`${n.params.containerModifierClass}${t}`),
        o && o() && n.classNames.push(`${n.params.containerModifierClass}3d`);
      const e = s ? s() : {};
      Object.assign(n.params, e), Object.assign(n.originalParams, e);
    }),
      i("setTranslate", () => {
        n.params.effect === t && a();
      }),
      i("setTransition", (e, i) => {
        n.params.effect === t && r(i);
      }),
      i("transitionEnd", () => {
        if (n.params.effect === t && l) {
          if (!d || !d().slideShadows) return;
          n.slides.forEach((e) => {
            e.querySelectorAll(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            ).forEach((e) => e.remove());
          }),
            l();
        }
      }),
      i("virtualUpdate", () => {
        n.params.effect === t &&
          (n.slides.length || (p = !0),
          requestAnimationFrame(() => {
            p && n.slides && n.slides.length && (a(), (p = !1));
          }));
      });
  }
  function ie(e, t) {
    const n = g(t);
    return (
      n !== t &&
        ((n.style.backfaceVisibility = "hidden"),
        (n.style["-webkit-backface-visibility"] = "hidden")),
      n
    );
  }
  function ae({ swiper: e, duration: t, transformElements: n, allSlides: i }) {
    const { activeIndex: a } = e;
    if (e.params.virtualTranslate && 0 !== t) {
      let t,
        r = !1;
      (t = i
        ? n
        : n.filter((t) => {
            const n = t.classList.contains("swiper-slide-transform")
              ? ((t) =>
                  t.parentElement
                    ? t.parentElement
                    : e.slides.filter(
                        (e) => e.shadowEl && e.shadowEl === t.parentNode
                      )[0])(t)
              : t;
            return e.getSlideIndex(n) === a;
          })),
        t.forEach((t) => {
          v(t, () => {
            if (r) return;
            if (!e || e.destroyed) return;
            (r = !0), (e.animating = !1);
            const t = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
            });
            e.wrapperEl.dispatchEvent(t);
          });
        });
    }
  }
  function re(e, t, n) {
    const i = "swiper-slide-shadow" + (n ? `-${n}` : ""),
      a = g(t);
    let r = a.querySelector(`.${i}`);
    return (
      r ||
        ((r = h("div", "swiper-slide-shadow" + (n ? `-${n}` : ""))),
        a.append(r)),
      r
    );
  }
  const se = [
    function ({ swiper: e, extendParams: t, on: n, emit: a }) {
      let r;
      t({
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          renderExternalUpdate: !0,
          addSlidesBefore: 0,
          addSlidesAfter: 0,
        },
      });
      const s = i();
      e.virtual = {
        cache: {},
        from: void 0,
        to: void 0,
        slides: [],
        offset: 0,
        slidesGrid: [],
      };
      const o = s.createElement("div");
      function l(t, n) {
        const i = e.params.virtual;
        if (i.cache && e.virtual.cache[n]) return e.virtual.cache[n];
        let a;
        return (
          i.renderSlide
            ? ((a = i.renderSlide.call(e, t, n)),
              "string" == typeof a && ((o.innerHTML = a), (a = o.children[0])))
            : (a = e.isElement
                ? h("swiper-slide")
                : h("div", e.params.slideClass)),
          a.setAttribute("data-swiper-slide-index", n),
          i.renderSlide || (a.innerHTML = t),
          i.cache && (e.virtual.cache[n] = a),
          a
        );
      }
      function d(t) {
        const {
            slidesPerView: n,
            slidesPerGroup: i,
            centeredSlides: r,
            loop: s,
          } = e.params,
          { addSlidesBefore: o, addSlidesAfter: d } = e.params.virtual,
          { from: p, to: c, slides: u, slidesGrid: g, offset: h } = e.virtual;
        e.params.cssMode || e.updateActiveIndex();
        const w = e.activeIndex || 0;
        let f, y, b;
        (f = e.rtlTranslate ? "right" : e.isHorizontal() ? "left" : "top"),
          r
            ? ((y = Math.floor(n / 2) + i + d), (b = Math.floor(n / 2) + i + o))
            : ((y = n + (i - 1) + d), (b = (s ? n : i) + o));
        let v = w - b,
          x = w + y;
        s || ((v = Math.max(v, 0)), (x = Math.min(x, u.length - 1)));
        let M = (e.slidesGrid[v] || 0) - (e.slidesGrid[0] || 0);
        function E() {
          e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            a("virtualUpdate");
        }
        if (
          (s && w >= b
            ? ((v -= b), r || (M += e.slidesGrid[0]))
            : s && w < b && ((v = -b), r && (M += e.slidesGrid[0])),
          Object.assign(e.virtual, {
            from: v,
            to: x,
            offset: M,
            slidesGrid: e.slidesGrid,
            slidesBefore: b,
            slidesAfter: y,
          }),
          p === v && c === x && !t)
        )
          return (
            e.slidesGrid !== g &&
              M !== h &&
              e.slides.forEach((e) => {
                e.style[f] = `${M}px`;
              }),
            e.updateProgress(),
            void a("virtualUpdate")
          );
        if (e.params.virtual.renderExternal)
          return (
            e.params.virtual.renderExternal.call(e, {
              offset: M,
              from: v,
              to: x,
              slides: (function () {
                const e = [];
                for (let t = v; t <= x; t += 1) e.push(u[t]);
                return e;
              })(),
            }),
            void (e.params.virtual.renderExternalUpdate
              ? E()
              : a("virtualUpdate"))
          );
        const A = [],
          T = [],
          C = (e) => {
            let t = e;
            return (
              e < 0 ? (t = u.length + e) : t >= u.length && (t -= u.length), t
            );
          };
        if (t)
          e.slidesEl
            .querySelectorAll(`.${e.params.slideClass}, swiper-slide`)
            .forEach((e) => {
              e.remove();
            });
        else
          for (let t = p; t <= c; t += 1)
            if (t < v || t > x) {
              const n = C(t);
              e.slidesEl
                .querySelectorAll(
                  `.${e.params.slideClass}[data-swiper-slide-index="${n}"], swiper-slide[data-swiper-slide-index="${n}"]`
                )
                .forEach((e) => {
                  e.remove();
                });
            }
        const L = s ? -u.length : 0,
          S = s ? 2 * u.length : u.length;
        for (let e = L; e < S; e += 1)
          if (e >= v && e <= x) {
            const n = C(e);
            void 0 === c || t
              ? T.push(n)
              : (e > c && T.push(n), e < p && A.push(n));
          }
        if (
          (T.forEach((t) => {
            e.slidesEl.append(l(u[t], t));
          }),
          s)
        )
          for (let t = A.length - 1; t >= 0; t -= 1) {
            const n = A[t];
            e.slidesEl.prepend(l(u[n], n));
          }
        else
          A.sort((e, t) => t - e),
            A.forEach((t) => {
              e.slidesEl.prepend(l(u[t], t));
            });
        m(e.slidesEl, ".swiper-slide, swiper-slide").forEach((e) => {
          e.style[f] = `${M}px`;
        }),
          E();
      }
      n("beforeInit", () => {
        if (!e.params.virtual.enabled) return;
        let t;
        if (void 0 === e.passedParams.virtual.slides) {
          const n = [...e.slidesEl.children].filter((t) =>
            t.matches(`.${e.params.slideClass}, swiper-slide`)
          );
          n &&
            n.length &&
            ((e.virtual.slides = [...n]),
            (t = !0),
            n.forEach((t, n) => {
              t.setAttribute("data-swiper-slide-index", n),
                (e.virtual.cache[n] = t),
                t.remove();
            }));
        }
        t || (e.virtual.slides = e.params.virtual.slides),
          e.classNames.push(`${e.params.containerModifierClass}virtual`),
          (e.params.watchSlidesProgress = !0),
          (e.originalParams.watchSlidesProgress = !0),
          e.params.initialSlide || d();
      }),
        n("setTranslate", () => {
          e.params.virtual.enabled &&
            (e.params.cssMode && !e._immediateVirtual
              ? (clearTimeout(r),
                (r = setTimeout(() => {
                  d();
                }, 100)))
              : d());
        }),
        n("init update resize", () => {
          e.params.virtual.enabled &&
            e.params.cssMode &&
            c(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`);
        }),
        Object.assign(e.virtual, {
          appendSlide: function (t) {
            if ("object" == typeof t && "length" in t)
              for (let n = 0; n < t.length; n += 1)
                t[n] && e.virtual.slides.push(t[n]);
            else e.virtual.slides.push(t);
            d(!0);
          },
          prependSlide: function (t) {
            const n = e.activeIndex;
            let i = n + 1,
              a = 1;
            if (Array.isArray(t)) {
              for (let n = 0; n < t.length; n += 1)
                t[n] && e.virtual.slides.unshift(t[n]);
              (i = n + t.length), (a = t.length);
            } else e.virtual.slides.unshift(t);
            if (e.params.virtual.cache) {
              const t = e.virtual.cache,
                n = {};
              Object.keys(t).forEach((e) => {
                const i = t[e],
                  r = i.getAttribute("data-swiper-slide-index");
                r &&
                  i.setAttribute(
                    "data-swiper-slide-index",
                    parseInt(r, 10) + a
                  ),
                  (n[parseInt(e, 10) + a] = i);
              }),
                (e.virtual.cache = n);
            }
            d(!0), e.slideTo(i, 0);
          },
          removeSlide: function (t) {
            if (null == t) return;
            let n = e.activeIndex;
            if (Array.isArray(t))
              for (let i = t.length - 1; i >= 0; i -= 1)
                e.virtual.slides.splice(t[i], 1),
                  e.params.virtual.cache && delete e.virtual.cache[t[i]],
                  t[i] < n && (n -= 1),
                  (n = Math.max(n, 0));
            else
              e.virtual.slides.splice(t, 1),
                e.params.virtual.cache && delete e.virtual.cache[t],
                t < n && (n -= 1),
                (n = Math.max(n, 0));
            d(!0), e.slideTo(n, 0);
          },
          removeAllSlides: function () {
            (e.virtual.slides = []),
              e.params.virtual.cache && (e.virtual.cache = {}),
              d(!0),
              e.slideTo(0, 0);
          },
          update: d,
        });
    },
    function ({ swiper: e, extendParams: t, on: n, emit: a }) {
      const s = i(),
        o = r();
      function l(t) {
        if (!e.enabled) return;
        const { rtlTranslate: n } = e;
        let i = t;
        i.originalEvent && (i = i.originalEvent);
        const r = i.keyCode || i.charCode,
          l = e.params.keyboard.pageUpDown,
          d = l && 33 === r,
          p = l && 34 === r,
          c = 37 === r,
          u = 39 === r,
          g = 38 === r,
          m = 40 === r;
        if (
          !e.allowSlideNext &&
          ((e.isHorizontal() && u) || (e.isVertical() && m) || p)
        )
          return !1;
        if (
          !e.allowSlidePrev &&
          ((e.isHorizontal() && c) || (e.isVertical() && g) || d)
        )
          return !1;
        if (
          !(
            i.shiftKey ||
            i.altKey ||
            i.ctrlKey ||
            i.metaKey ||
            (s.activeElement &&
              s.activeElement.nodeName &&
              ("input" === s.activeElement.nodeName.toLowerCase() ||
                "textarea" === s.activeElement.nodeName.toLowerCase()))
          )
        ) {
          if (
            e.params.keyboard.onlyInViewport &&
            (d || p || c || u || g || m)
          ) {
            let t = !1;
            if (
              b(e.el, `.${e.params.slideClass}, swiper-slide`).length > 0 &&
              0 === b(e.el, `.${e.params.slideActiveClass}`).length
            )
              return;
            const i = e.el,
              a = i.clientWidth,
              r = i.clientHeight,
              s = o.innerWidth,
              l = o.innerHeight,
              d = w(i);
            n && (d.left -= i.scrollLeft);
            const p = [
              [d.left, d.top],
              [d.left + a, d.top],
              [d.left, d.top + r],
              [d.left + a, d.top + r],
            ];
            for (let e = 0; e < p.length; e += 1) {
              const n = p[e];
              if (n[0] >= 0 && n[0] <= s && n[1] >= 0 && n[1] <= l) {
                if (0 === n[0] && 0 === n[1]) continue;
                t = !0;
              }
            }
            if (!t) return;
          }
          e.isHorizontal()
            ? ((d || p || c || u) &&
                (i.preventDefault ? i.preventDefault() : (i.returnValue = !1)),
              (((p || u) && !n) || ((d || c) && n)) && e.slideNext(),
              (((d || c) && !n) || ((p || u) && n)) && e.slidePrev())
            : ((d || p || g || m) &&
                (i.preventDefault ? i.preventDefault() : (i.returnValue = !1)),
              (p || m) && e.slideNext(),
              (d || g) && e.slidePrev()),
            a("keyPress", r);
        }
      }
      function d() {
        e.keyboard.enabled ||
          (s.addEventListener("keydown", l), (e.keyboard.enabled = !0));
      }
      function p() {
        e.keyboard.enabled &&
          (s.removeEventListener("keydown", l), (e.keyboard.enabled = !1));
      }
      (e.keyboard = { enabled: !1 }),
        t({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }),
        n("init", () => {
          e.params.keyboard.enabled && d();
        }),
        n("destroy", () => {
          e.keyboard.enabled && p();
        }),
        Object.assign(e.keyboard, { enable: d, disable: p });
    },
    function ({ swiper: e, extendParams: t, on: n, emit: i }) {
      const a = r();
      let l;
      t({
        mousewheel: {
          enabled: !1,
          releaseOnEdges: !1,
          invert: !1,
          forceToAxis: !1,
          sensitivity: 1,
          eventsTarget: "container",
          thresholdDelta: null,
          thresholdTime: null,
        },
      }),
        (e.mousewheel = { enabled: !1 });
      let d,
        p = o();
      const c = [];
      function u() {
        e.enabled && (e.mouseEntered = !0);
      }
      function g() {
        e.enabled && (e.mouseEntered = !1);
      }
      function m(t) {
        return !(
          (e.params.mousewheel.thresholdDelta &&
            t.delta < e.params.mousewheel.thresholdDelta) ||
          (e.params.mousewheel.thresholdTime &&
            o() - p < e.params.mousewheel.thresholdTime) ||
          (!(t.delta >= 6 && o() - p < 60) &&
            (t.direction < 0
              ? (e.isEnd && !e.params.loop) ||
                e.animating ||
                (e.slideNext(), i("scroll", t.raw))
              : (e.isBeginning && !e.params.loop) ||
                e.animating ||
                (e.slidePrev(), i("scroll", t.raw)),
            (p = new a.Date().getTime()),
            1))
        );
      }
      function h(t) {
        let n = t,
          a = !0;
        if (!e.enabled) return;
        const r = e.params.mousewheel;
        e.params.cssMode && n.preventDefault();
        let p = e.el;
        "container" !== e.params.mousewheel.eventsTarget &&
          (p = document.querySelector(e.params.mousewheel.eventsTarget));
        const u = p && p.contains(n.target);
        if (!e.mouseEntered && !u && !r.releaseOnEdges) return !0;
        n.originalEvent && (n = n.originalEvent);
        let g = 0;
        const h = e.rtlTranslate ? -1 : 1,
          w = (function (e) {
            let t = 0,
              n = 0,
              i = 0,
              a = 0;
            return (
              "detail" in e && (n = e.detail),
              "wheelDelta" in e && (n = -e.wheelDelta / 120),
              "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120),
              "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
              "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = n), (n = 0)),
              (i = 10 * t),
              (a = 10 * n),
              "deltaY" in e && (a = e.deltaY),
              "deltaX" in e && (i = e.deltaX),
              e.shiftKey && !i && ((i = a), (a = 0)),
              (i || a) &&
                e.deltaMode &&
                (1 === e.deltaMode
                  ? ((i *= 40), (a *= 40))
                  : ((i *= 800), (a *= 800))),
              i && !t && (t = i < 1 ? -1 : 1),
              a && !n && (n = a < 1 ? -1 : 1),
              { spinX: t, spinY: n, pixelX: i, pixelY: a }
            );
          })(n);
        if (r.forceToAxis)
          if (e.isHorizontal()) {
            if (!(Math.abs(w.pixelX) > Math.abs(w.pixelY))) return !0;
            g = -w.pixelX * h;
          } else {
            if (!(Math.abs(w.pixelY) > Math.abs(w.pixelX))) return !0;
            g = -w.pixelY;
          }
        else
          g =
            Math.abs(w.pixelX) > Math.abs(w.pixelY) ? -w.pixelX * h : -w.pixelY;
        if (0 === g) return !0;
        r.invert && (g = -g);
        let f = e.getTranslate() + g * r.sensitivity;
        if (
          (f >= e.minTranslate() && (f = e.minTranslate()),
          f <= e.maxTranslate() && (f = e.maxTranslate()),
          (a =
            !!e.params.loop ||
            !(f === e.minTranslate() || f === e.maxTranslate())),
          a && e.params.nested && n.stopPropagation(),
          e.params.freeMode && e.params.freeMode.enabled)
        ) {
          const t = { time: o(), delta: Math.abs(g), direction: Math.sign(g) },
            a =
              d &&
              t.time < d.time + 500 &&
              t.delta <= d.delta &&
              t.direction === d.direction;
          if (!a) {
            d = void 0;
            let o = e.getTranslate() + g * r.sensitivity;
            const p = e.isBeginning,
              u = e.isEnd;
            if (
              (o >= e.minTranslate() && (o = e.minTranslate()),
              o <= e.maxTranslate() && (o = e.maxTranslate()),
              e.setTransition(0),
              e.setTranslate(o),
              e.updateProgress(),
              e.updateActiveIndex(),
              e.updateSlidesClasses(),
              ((!p && e.isBeginning) || (!u && e.isEnd)) &&
                e.updateSlidesClasses(),
              e.params.loop &&
                e.loopFix({
                  direction: t.direction < 0 ? "next" : "prev",
                  byMousewheel: !0,
                }),
              e.params.freeMode.sticky)
            ) {
              clearTimeout(l), (l = void 0), c.length >= 15 && c.shift();
              const n = c.length ? c[c.length - 1] : void 0,
                i = c[0];
              if (
                (c.push(t),
                n && (t.delta > n.delta || t.direction !== n.direction))
              )
                c.splice(0);
              else if (
                c.length >= 15 &&
                t.time - i.time < 500 &&
                i.delta - t.delta >= 1 &&
                t.delta <= 6
              ) {
                const n = g > 0 ? 0.8 : 0.2;
                (d = t),
                  c.splice(0),
                  (l = s(() => {
                    e.slideToClosest(e.params.speed, !0, void 0, n);
                  }, 0));
              }
              l ||
                (l = s(() => {
                  (d = t),
                    c.splice(0),
                    e.slideToClosest(e.params.speed, !0, void 0, 0.5);
                }, 500));
            }
            if (
              (a || i("scroll", n),
              e.params.autoplay &&
                e.params.autoplayDisableOnInteraction &&
                e.autoplay.stop(),
              o === e.minTranslate() || o === e.maxTranslate())
            )
              return !0;
          }
        } else {
          const n = {
            time: o(),
            delta: Math.abs(g),
            direction: Math.sign(g),
            raw: t,
          };
          c.length >= 2 && c.shift();
          const i = c.length ? c[c.length - 1] : void 0;
          if (
            (c.push(n),
            i
              ? (n.direction !== i.direction ||
                  n.delta > i.delta ||
                  n.time > i.time + 150) &&
                m(n)
              : m(n),
            (function (t) {
              const n = e.params.mousewheel;
              if (t.direction < 0) {
                if (e.isEnd && !e.params.loop && n.releaseOnEdges) return !0;
              } else if (e.isBeginning && !e.params.loop && n.releaseOnEdges)
                return !0;
              return !1;
            })(n))
          )
            return !0;
        }
        return n.preventDefault ? n.preventDefault() : (n.returnValue = !1), !1;
      }
      function w(t) {
        let n = e.el;
        "container" !== e.params.mousewheel.eventsTarget &&
          (n = document.querySelector(e.params.mousewheel.eventsTarget)),
          n[t]("mouseenter", u),
          n[t]("mouseleave", g),
          n[t]("wheel", h);
      }
      function f() {
        return e.params.cssMode
          ? (e.wrapperEl.removeEventListener("wheel", h), !0)
          : !e.mousewheel.enabled &&
              (w("addEventListener"), (e.mousewheel.enabled = !0), !0);
      }
      function y() {
        return e.params.cssMode
          ? (e.wrapperEl.addEventListener(event, h), !0)
          : !!e.mousewheel.enabled &&
              (w("removeEventListener"), (e.mousewheel.enabled = !1), !0);
      }
      n("init", () => {
        !e.params.mousewheel.enabled && e.params.cssMode && y(),
          e.params.mousewheel.enabled && f();
      }),
        n("destroy", () => {
          e.params.cssMode && f(), e.mousewheel.enabled && y();
        }),
        Object.assign(e.mousewheel, { enable: f, disable: y });
    },
    function ({ swiper: e, extendParams: t, on: n, emit: i }) {
      t({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
          navigationDisabledClass: "swiper-navigation-disabled",
        },
      }),
        (e.navigation = { nextEl: null, prevEl: null });
      const a = (e) => (Array.isArray(e) || (e = [e].filter((e) => !!e)), e);
      function r(t) {
        let n;
        return t &&
          "string" == typeof t &&
          e.isElement &&
          ((n = e.el.shadowRoot.querySelector(t)), n)
          ? n
          : (t &&
              ("string" == typeof t && (n = [...document.querySelectorAll(t)]),
              e.params.uniqueNavElements &&
                "string" == typeof t &&
                n.length > 1 &&
                1 === e.el.querySelectorAll(t).length &&
                (n = e.el.querySelector(t))),
            t && !n ? t : n);
      }
      function s(t, n) {
        const i = e.params.navigation;
        (t = a(t)).forEach((t) => {
          t &&
            (t.classList[n ? "add" : "remove"](...i.disabledClass.split(" ")),
            "BUTTON" === t.tagName && (t.disabled = n),
            e.params.watchOverflow &&
              e.enabled &&
              t.classList[e.isLocked ? "add" : "remove"](i.lockClass));
        });
      }
      function o() {
        const { nextEl: t, prevEl: n } = e.navigation;
        if (e.params.loop) return s(n, !1), void s(t, !1);
        s(n, e.isBeginning && !e.params.rewind),
          s(t, e.isEnd && !e.params.rewind);
      }
      function l(t) {
        t.preventDefault(),
          (!e.isBeginning || e.params.loop || e.params.rewind) &&
            (e.slidePrev(), i("navigationPrev"));
      }
      function d(t) {
        t.preventDefault(),
          (!e.isEnd || e.params.loop || e.params.rewind) &&
            (e.slideNext(), i("navigationNext"));
      }
      function p() {
        const t = e.params.navigation;
        if (
          ((e.params.navigation = X(
            e,
            e.originalParams.navigation,
            e.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
          )),
          !t.nextEl && !t.prevEl)
        )
          return;
        let n = r(t.nextEl),
          i = r(t.prevEl);
        Object.assign(e.navigation, { nextEl: n, prevEl: i }),
          (n = a(n)),
          (i = a(i));
        const s = (n, i) => {
          n && n.addEventListener("click", "next" === i ? d : l),
            !e.enabled && n && n.classList.add(...t.lockClass.split(" "));
        };
        n.forEach((e) => s(e, "next")), i.forEach((e) => s(e, "prev"));
      }
      function c() {
        let { nextEl: t, prevEl: n } = e.navigation;
        (t = a(t)), (n = a(n));
        const i = (t, n) => {
          t.removeEventListener("click", "next" === n ? d : l),
            t.classList.remove(...e.params.navigation.disabledClass.split(" "));
        };
        t.forEach((e) => i(e, "next")), n.forEach((e) => i(e, "prev"));
      }
      n("init", () => {
        !1 === e.params.navigation.enabled ? u() : (p(), o());
      }),
        n("toEdge fromEdge lock unlock", () => {
          o();
        }),
        n("destroy", () => {
          c();
        }),
        n("enable disable", () => {
          let { nextEl: t, prevEl: n } = e.navigation;
          (t = a(t)),
            (n = a(n)),
            [...t, ...n]
              .filter((e) => !!e)
              .forEach((t) =>
                t.classList[e.enabled ? "remove" : "add"](
                  e.params.navigation.lockClass
                )
              );
        }),
        n("click", (t, n) => {
          let { nextEl: r, prevEl: s } = e.navigation;
          (r = a(r)), (s = a(s));
          const o = n.target;
          if (
            e.params.navigation.hideOnClick &&
            !s.includes(o) &&
            !r.includes(o)
          ) {
            if (
              e.pagination &&
              e.params.pagination &&
              e.params.pagination.clickable &&
              (e.pagination.el === o || e.pagination.el.contains(o))
            )
              return;
            let t;
            r.length
              ? (t = r[0].classList.contains(e.params.navigation.hiddenClass))
              : s.length &&
                (t = s[0].classList.contains(e.params.navigation.hiddenClass)),
              i(!0 === t ? "navigationShow" : "navigationHide"),
              [...r, ...s]
                .filter((e) => !!e)
                .forEach((t) =>
                  t.classList.toggle(e.params.navigation.hiddenClass)
                );
          }
        });
      const u = () => {
        e.el.classList.add(
          ...e.params.navigation.navigationDisabledClass.split(" ")
        ),
          c();
      };
      Object.assign(e.navigation, {
        enable: () => {
          e.el.classList.remove(
            ...e.params.navigation.navigationDisabledClass.split(" ")
          ),
            p(),
            o();
        },
        disable: u,
        update: o,
        init: p,
        destroy: c,
      });
    },
    function ({ swiper: e, extendParams: t, on: n, emit: i }) {
      const a = "swiper-pagination";
      let r;
      t({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${a}-bullet`,
          bulletActiveClass: `${a}-bullet-active`,
          modifierClass: `${a}-`,
          currentClass: `${a}-current`,
          totalClass: `${a}-total`,
          hiddenClass: `${a}-hidden`,
          progressbarFillClass: `${a}-progressbar-fill`,
          progressbarOppositeClass: `${a}-progressbar-opposite`,
          clickableClass: `${a}-clickable`,
          lockClass: `${a}-lock`,
          horizontalClass: `${a}-horizontal`,
          verticalClass: `${a}-vertical`,
          paginationDisabledClass: `${a}-disabled`,
        },
      }),
        (e.pagination = { el: null, bullets: [] });
      let s = 0;
      const o = (e) => (Array.isArray(e) || (e = [e].filter((e) => !!e)), e);
      function l() {
        return (
          !e.params.pagination.el ||
          !e.pagination.el ||
          (Array.isArray(e.pagination.el) && 0 === e.pagination.el.length)
        );
      }
      function d(t, n) {
        const { bulletActiveClass: i } = e.params.pagination;
        t &&
          (t = t[("prev" === n ? "previous" : "next") + "ElementSibling"]) &&
          (t.classList.add(`${i}-${n}`),
          (t = t[("prev" === n ? "previous" : "next") + "ElementSibling"]) &&
            t.classList.add(`${i}-${n}-${n}`));
      }
      function p(t) {
        const n = t.target.closest(F(e.params.pagination.bulletClass));
        if (!n) return;
        t.preventDefault();
        const i = y(n) * e.params.slidesPerGroup;
        if (e.params.loop) {
          if (e.realIndex === i) return;
          (i < e.loopedSlides || i > e.slides.length - e.loopedSlides) &&
            e.loopFix({
              direction: i < e.loopedSlides ? "prev" : "next",
              activeSlideIndex: i,
              slideTo: !1,
            }),
            e.slideToLoop(i);
        } else e.slideTo(i);
      }
      function c() {
        const t = e.rtl,
          n = e.params.pagination;
        if (l()) return;
        let a,
          p = e.pagination.el;
        p = o(p);
        const c =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          u = e.params.loop
            ? Math.ceil(c / e.params.slidesPerGroup)
            : e.snapGrid.length;
        if (
          ((a = e.params.loop
            ? e.params.slidesPerGroup > 1
              ? Math.floor(e.realIndex / e.params.slidesPerGroup)
              : e.realIndex
            : void 0 !== e.snapIndex
            ? e.snapIndex
            : e.activeIndex || 0),
          "bullets" === n.type &&
            e.pagination.bullets &&
            e.pagination.bullets.length > 0)
        ) {
          const i = e.pagination.bullets;
          let o, l, c;
          if (
            (n.dynamicBullets &&
              ((r = x(i[0], e.isHorizontal() ? "width" : "height", !0)),
              p.forEach((t) => {
                t.style[e.isHorizontal() ? "width" : "height"] =
                  r * (n.dynamicMainBullets + 4) + "px";
              }),
              n.dynamicMainBullets > 1 &&
                void 0 !== e.previousIndex &&
                ((s += a - (e.previousIndex || 0)),
                s > n.dynamicMainBullets - 1
                  ? (s = n.dynamicMainBullets - 1)
                  : s < 0 && (s = 0)),
              (o = Math.max(a - s, 0)),
              (l = o + (Math.min(i.length, n.dynamicMainBullets) - 1)),
              (c = (l + o) / 2)),
            i.forEach((e) => {
              e.classList.remove(
                ...[
                  "",
                  "-next",
                  "-next-next",
                  "-prev",
                  "-prev-prev",
                  "-main",
                ].map((e) => `${n.bulletActiveClass}${e}`)
              );
            }),
            p.length > 1)
          )
            i.forEach((e) => {
              const t = y(e);
              t === a && e.classList.add(n.bulletActiveClass),
                n.dynamicBullets &&
                  (t >= o &&
                    t <= l &&
                    e.classList.add(`${n.bulletActiveClass}-main`),
                  t === o && d(e, "prev"),
                  t === l && d(e, "next"));
            });
          else {
            const e = i[a];
            if ((e && e.classList.add(n.bulletActiveClass), n.dynamicBullets)) {
              const e = i[o],
                t = i[l];
              for (let e = o; e <= l; e += 1)
                i[e] && i[e].classList.add(`${n.bulletActiveClass}-main`);
              d(e, "prev"), d(t, "next");
            }
          }
          if (n.dynamicBullets) {
            const a = Math.min(i.length, n.dynamicMainBullets + 4),
              s = (r * a - r) / 2 - c * r,
              o = t ? "right" : "left";
            i.forEach((t) => {
              t.style[e.isHorizontal() ? o : "top"] = `${s}px`;
            });
          }
        }
        p.forEach((t, r) => {
          if (
            ("fraction" === n.type &&
              (t.querySelectorAll(F(n.currentClass)).forEach((e) => {
                e.textContent = n.formatFractionCurrent(a + 1);
              }),
              t.querySelectorAll(F(n.totalClass)).forEach((e) => {
                e.textContent = n.formatFractionTotal(u);
              })),
            "progressbar" === n.type)
          ) {
            let i;
            i = n.progressbarOpposite
              ? e.isHorizontal()
                ? "vertical"
                : "horizontal"
              : e.isHorizontal()
              ? "horizontal"
              : "vertical";
            const r = (a + 1) / u;
            let s = 1,
              o = 1;
            "horizontal" === i ? (s = r) : (o = r),
              t.querySelectorAll(F(n.progressbarFillClass)).forEach((t) => {
                (t.style.transform = `translate3d(0,0,0) scaleX(${s}) scaleY(${o})`),
                  (t.style.transitionDuration = `${e.params.speed}ms`);
              });
          }
          "custom" === n.type && n.renderCustom
            ? ((t.innerHTML = n.renderCustom(e, a + 1, u)),
              0 === r && i("paginationRender", t))
            : (0 === r && i("paginationRender", t), i("paginationUpdate", t)),
            e.params.watchOverflow &&
              e.enabled &&
              t.classList[e.isLocked ? "add" : "remove"](n.lockClass);
        });
      }
      function u() {
        const t = e.params.pagination;
        if (l()) return;
        const n =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.slides.length;
        let a = e.pagination.el;
        a = o(a);
        let r = "";
        if ("bullets" === t.type) {
          let i = e.params.loop
            ? Math.ceil(n / e.params.slidesPerGroup)
            : e.snapGrid.length;
          e.params.freeMode && e.params.freeMode.enabled && i > n && (i = n);
          for (let n = 0; n < i; n += 1)
            t.renderBullet
              ? (r += t.renderBullet.call(e, n, t.bulletClass))
              : (r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
        }
        "fraction" === t.type &&
          (r = t.renderFraction
            ? t.renderFraction.call(e, t.currentClass, t.totalClass)
            : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
          "progressbar" === t.type &&
            (r = t.renderProgressbar
              ? t.renderProgressbar.call(e, t.progressbarFillClass)
              : `<span class="${t.progressbarFillClass}"></span>`),
          a.forEach((n) => {
            "custom" !== t.type && (n.innerHTML = r || ""),
              "bullets" === t.type &&
                (e.pagination.bullets = [
                  ...n.querySelectorAll(F(t.bulletClass)),
                ]);
          }),
          "custom" !== t.type && i("paginationRender", a[0]);
      }
      function g() {
        e.params.pagination = X(
          e,
          e.originalParams.pagination,
          e.params.pagination,
          { el: "swiper-pagination" }
        );
        const t = e.params.pagination;
        if (!t.el) return;
        let n;
        "string" == typeof t.el &&
          e.isElement &&
          (n = e.el.shadowRoot.querySelector(t.el)),
          n ||
            "string" != typeof t.el ||
            (n = [...document.querySelectorAll(t.el)]),
          n || (n = t.el),
          n &&
            0 !== n.length &&
            (e.params.uniqueNavElements &&
              "string" == typeof t.el &&
              Array.isArray(n) &&
              n.length > 1 &&
              ((n = [...e.el.querySelectorAll(t.el)]),
              n.length > 1 &&
                (n = n.filter((t) => b(t, ".swiper")[0] === e.el)[0])),
            Array.isArray(n) && 1 === n.length && (n = n[0]),
            Object.assign(e.pagination, { el: n }),
            (n = o(n)),
            n.forEach((n) => {
              "bullets" === t.type &&
                t.clickable &&
                n.classList.add(t.clickableClass),
                n.classList.add(t.modifierClass + t.type),
                n.classList.add(
                  e.isHorizontal() ? t.horizontalClass : t.verticalClass
                ),
                "bullets" === t.type &&
                  t.dynamicBullets &&
                  (n.classList.add(`${t.modifierClass}${t.type}-dynamic`),
                  (s = 0),
                  t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                "progressbar" === t.type &&
                  t.progressbarOpposite &&
                  n.classList.add(t.progressbarOppositeClass),
                t.clickable && n.addEventListener("click", p),
                e.enabled || n.classList.add(t.lockClass);
            }));
      }
      function m() {
        const t = e.params.pagination;
        if (l()) return;
        let n = e.pagination.el;
        n &&
          ((n = o(n)),
          n.forEach((n) => {
            n.classList.remove(t.hiddenClass),
              n.classList.remove(t.modifierClass + t.type),
              n.classList.remove(
                e.isHorizontal() ? t.horizontalClass : t.verticalClass
              ),
              t.clickable && n.removeEventListener("click", p);
          })),
          e.pagination.bullets &&
            e.pagination.bullets.forEach((e) =>
              e.classList.remove(t.bulletActiveClass)
            );
      }
      n("init", () => {
        !1 === e.params.pagination.enabled ? h() : (g(), u(), c());
      }),
        n("activeIndexChange", () => {
          void 0 === e.snapIndex && c();
        }),
        n("snapIndexChange", () => {
          c();
        }),
        n("snapGridLengthChange", () => {
          u(), c();
        }),
        n("destroy", () => {
          m();
        }),
        n("enable disable", () => {
          let { el: t } = e.pagination;
          t &&
            ((t = o(t)),
            t.forEach((t) =>
              t.classList[e.enabled ? "remove" : "add"](
                e.params.pagination.lockClass
              )
            ));
        }),
        n("lock unlock", () => {
          c();
        }),
        n("click", (t, n) => {
          const a = n.target;
          let { el: r } = e.pagination;
          if (
            (Array.isArray(r) || (r = [r].filter((e) => !!e)),
            e.params.pagination.el &&
              e.params.pagination.hideOnClick &&
              r &&
              r.length > 0 &&
              !a.classList.contains(e.params.pagination.bulletClass))
          ) {
            if (
              e.navigation &&
              ((e.navigation.nextEl && a === e.navigation.nextEl) ||
                (e.navigation.prevEl && a === e.navigation.prevEl))
            )
              return;
            const t = r[0].classList.contains(e.params.pagination.hiddenClass);
            i(!0 === t ? "paginationShow" : "paginationHide"),
              r.forEach((t) =>
                t.classList.toggle(e.params.pagination.hiddenClass)
              );
          }
        });
      const h = () => {
        e.el.classList.add(e.params.pagination.paginationDisabledClass);
        let { el: t } = e.pagination;
        t &&
          ((t = o(t)),
          t.forEach((t) =>
            t.classList.add(e.params.pagination.paginationDisabledClass)
          )),
          m();
      };
      Object.assign(e.pagination, {
        enable: () => {
          e.el.classList.remove(e.params.pagination.paginationDisabledClass);
          let { el: t } = e.pagination;
          t &&
            ((t = o(t)),
            t.forEach((t) =>
              t.classList.remove(e.params.pagination.paginationDisabledClass)
            )),
            g(),
            u(),
            c();
        },
        disable: h,
        render: u,
        update: c,
        init: g,
        destroy: m,
      });
    },
    function ({ swiper: e, extendParams: t, on: n, emit: a }) {
      const r = i();
      let o,
        l,
        d,
        p,
        c = !1,
        u = null,
        g = null;
      function m() {
        if (!e.params.scrollbar.el || !e.scrollbar.el) return;
        const { scrollbar: t, rtlTranslate: n } = e,
          { dragEl: i, el: a } = t,
          r = e.params.scrollbar,
          s = e.params.loop ? e.progressLoop : e.progress;
        let o = l,
          p = (d - l) * s;
        n
          ? ((p = -p),
            p > 0 ? ((o = l - p), (p = 0)) : -p + l > d && (o = d + p))
          : p < 0
          ? ((o = l + p), (p = 0))
          : p + l > d && (o = d - p),
          e.isHorizontal()
            ? ((i.style.transform = `translate3d(${p}px, 0, 0)`),
              (i.style.width = `${o}px`))
            : ((i.style.transform = `translate3d(0px, ${p}px, 0)`),
              (i.style.height = `${o}px`)),
          r.hide &&
            (clearTimeout(u),
            (a.style.opacity = 1),
            (u = setTimeout(() => {
              (a.style.opacity = 0), (a.style.transitionDuration = "400ms");
            }, 1e3)));
      }
      function f() {
        if (!e.params.scrollbar.el || !e.scrollbar.el) return;
        const { scrollbar: t } = e,
          { dragEl: n, el: i } = t;
        (n.style.width = ""),
          (n.style.height = ""),
          (d = e.isHorizontal() ? i.offsetWidth : i.offsetHeight),
          (p =
            e.size /
            (e.virtualSize +
              e.params.slidesOffsetBefore -
              (e.params.centeredSlides ? e.snapGrid[0] : 0))),
          (l =
            "auto" === e.params.scrollbar.dragSize
              ? d * p
              : parseInt(e.params.scrollbar.dragSize, 10)),
          e.isHorizontal()
            ? (n.style.width = `${l}px`)
            : (n.style.height = `${l}px`),
          (i.style.display = p >= 1 ? "none" : ""),
          e.params.scrollbar.hide && (i.style.opacity = 0),
          e.params.watchOverflow &&
            e.enabled &&
            t.el.classList[e.isLocked ? "add" : "remove"](
              e.params.scrollbar.lockClass
            );
      }
      function y(t) {
        return e.isHorizontal() ? t.clientX : t.clientY;
      }
      function b(t) {
        const { scrollbar: n, rtlTranslate: i } = e,
          { el: a } = n;
        let r;
        (r =
          (y(t) -
            w(a)[e.isHorizontal() ? "left" : "top"] -
            (null !== o ? o : l / 2)) /
          (d - l)),
          (r = Math.max(Math.min(r, 1), 0)),
          i && (r = 1 - r);
        const s = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * r;
        e.updateProgress(s),
          e.setTranslate(s),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
      }
      function v(t) {
        const n = e.params.scrollbar,
          { scrollbar: i, wrapperEl: r } = e,
          { el: s, dragEl: l } = i;
        (c = !0),
          (o =
            t.target === l
              ? y(t) -
                t.target.getBoundingClientRect()[
                  e.isHorizontal() ? "left" : "top"
                ]
              : null),
          t.preventDefault(),
          t.stopPropagation(),
          (r.style.transitionDuration = "100ms"),
          (l.style.transitionDuration = "100ms"),
          b(t),
          clearTimeout(g),
          (s.style.transitionDuration = "0ms"),
          n.hide && (s.style.opacity = 1),
          e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"),
          a("scrollbarDragStart", t);
      }
      function x(t) {
        const { scrollbar: n, wrapperEl: i } = e,
          { el: r, dragEl: s } = n;
        c &&
          (t.preventDefault ? t.preventDefault() : (t.returnValue = !1),
          b(t),
          (i.style.transitionDuration = "0ms"),
          (r.style.transitionDuration = "0ms"),
          (s.style.transitionDuration = "0ms"),
          a("scrollbarDragMove", t));
      }
      function M(t) {
        const n = e.params.scrollbar,
          { scrollbar: i, wrapperEl: r } = e,
          { el: o } = i;
        c &&
          ((c = !1),
          e.params.cssMode &&
            ((e.wrapperEl.style["scroll-snap-type"] = ""),
            (r.style.transitionDuration = "")),
          n.hide &&
            (clearTimeout(g),
            (g = s(() => {
              (o.style.opacity = 0), (o.style.transitionDuration = "400ms");
            }, 1e3))),
          a("scrollbarDragEnd", t),
          n.snapOnRelease && e.slideToClosest());
      }
      function E(t) {
        const { scrollbar: n, params: i } = e,
          a = n.el;
        if (!a) return;
        const s = a,
          o = !!i.passiveListeners && { passive: !1, capture: !1 },
          l = !!i.passiveListeners && { passive: !0, capture: !1 };
        if (!s) return;
        const d = "on" === t ? "addEventListener" : "removeEventListener";
        s[d]("pointerdown", v, o),
          r[d]("pointermove", x, o),
          r[d]("pointerup", M, l);
      }
      function A() {
        const { scrollbar: t, el: n } = e;
        e.params.scrollbar = X(
          e,
          e.originalParams.scrollbar,
          e.params.scrollbar,
          { el: "swiper-scrollbar" }
        );
        const i = e.params.scrollbar;
        if (!i.el) return;
        let a, s;
        "string" == typeof i.el &&
          e.isElement &&
          (a = e.el.shadowRoot.querySelector(i.el)),
          a || "string" != typeof i.el
            ? a || (a = i.el)
            : (a = r.querySelectorAll(i.el)),
          e.params.uniqueNavElements &&
            "string" == typeof i.el &&
            a.length > 1 &&
            1 === n.querySelectorAll(i.el).length &&
            (a = n.querySelector(i.el)),
          a.length > 0 && (a = a[0]),
          a.classList.add(
            e.isHorizontal() ? i.horizontalClass : i.verticalClass
          ),
          a &&
            ((s = a.querySelector(`.${e.params.scrollbar.dragClass}`)),
            s || ((s = h("div", e.params.scrollbar.dragClass)), a.append(s))),
          Object.assign(t, { el: a, dragEl: s }),
          i.draggable && e.params.scrollbar.el && e.scrollbar.el && E("on"),
          a &&
            a.classList[e.enabled ? "remove" : "add"](
              e.params.scrollbar.lockClass
            );
      }
      function T() {
        const t = e.params.scrollbar,
          n = e.scrollbar.el;
        n &&
          n.classList.remove(
            e.isHorizontal() ? t.horizontalClass : t.verticalClass
          ),
          e.params.scrollbar.el && e.scrollbar.el && E("off");
      }
      t({
        scrollbar: {
          el: null,
          dragSize: "auto",
          hide: !1,
          draggable: !1,
          snapOnRelease: !0,
          lockClass: "swiper-scrollbar-lock",
          dragClass: "swiper-scrollbar-drag",
          scrollbarDisabledClass: "swiper-scrollbar-disabled",
          horizontalClass: "swiper-scrollbar-horizontal",
          verticalClass: "swiper-scrollbar-vertical",
        },
      }),
        (e.scrollbar = { el: null, dragEl: null }),
        n("init", () => {
          !1 === e.params.scrollbar.enabled ? C() : (A(), f(), m());
        }),
        n("update resize observerUpdate lock unlock", () => {
          f();
        }),
        n("setTranslate", () => {
          m();
        }),
        n("setTransition", (t, n) => {
          !(function (t) {
            e.params.scrollbar.el &&
              e.scrollbar.el &&
              (e.scrollbar.dragEl.style.transitionDuration = `${t}ms`);
          })(n);
        }),
        n("enable disable", () => {
          const { el: t } = e.scrollbar;
          t &&
            t.classList[e.enabled ? "remove" : "add"](
              e.params.scrollbar.lockClass
            );
        }),
        n("destroy", () => {
          T();
        });
      const C = () => {
        e.el.classList.add(e.params.scrollbar.scrollbarDisabledClass),
          e.scrollbar.el &&
            e.scrollbar.el.classList.add(
              e.params.scrollbar.scrollbarDisabledClass
            ),
          T();
      };
      Object.assign(e.scrollbar, {
        enable: () => {
          e.el.classList.remove(e.params.scrollbar.scrollbarDisabledClass),
            e.scrollbar.el &&
              e.scrollbar.el.classList.remove(
                e.params.scrollbar.scrollbarDisabledClass
              ),
            A(),
            f(),
            m();
        },
        disable: C,
        updateSize: f,
        setTranslate: m,
        init: A,
        destroy: T,
      });
    },
    function ({ swiper: e, extendParams: t, on: n }) {
      t({ parallax: { enabled: !1 } });
      const i = (t, n) => {
          const { rtl: i } = e,
            a = i ? -1 : 1,
            r = t.getAttribute("data-swiper-parallax") || "0";
          let s = t.getAttribute("data-swiper-parallax-x"),
            o = t.getAttribute("data-swiper-parallax-y");
          const l = t.getAttribute("data-swiper-parallax-scale"),
            d = t.getAttribute("data-swiper-parallax-opacity"),
            p = t.getAttribute("data-swiper-parallax-rotate");
          if (
            (s || o
              ? ((s = s || "0"), (o = o || "0"))
              : e.isHorizontal()
              ? ((s = r), (o = "0"))
              : ((o = r), (s = "0")),
            (s =
              s.indexOf("%") >= 0
                ? parseInt(s, 10) * n * a + "%"
                : s * n * a + "px"),
            (o =
              o.indexOf("%") >= 0 ? parseInt(o, 10) * n + "%" : o * n + "px"),
            null != d)
          ) {
            const e = d - (d - 1) * (1 - Math.abs(n));
            t.style.opacity = e;
          }
          let c = `translate3d(${s}, ${o}, 0px)`;
          null != l && (c += ` scale(${l - (l - 1) * (1 - Math.abs(n))})`),
            p && null != p && (c += ` rotate(${p * n * -1}deg)`),
            (t.style.transform = c);
        },
        a = () => {
          const { el: t, slides: n, progress: a, snapGrid: r } = e;
          m(
            t,
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
          ).forEach((e) => {
            i(e, a);
          }),
            n.forEach((t, n) => {
              let s = t.progress;
              e.params.slidesPerGroup > 1 &&
                "auto" !== e.params.slidesPerView &&
                (s += Math.ceil(n / 2) - a * (r.length - 1)),
                (s = Math.min(Math.max(s, -1), 1)),
                t
                  .querySelectorAll(
                    "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale], [data-swiper-parallax-rotate]"
                  )
                  .forEach((e) => {
                    i(e, s);
                  });
            });
        };
      n("beforeInit", () => {
        e.params.parallax.enabled &&
          ((e.params.watchSlidesProgress = !0),
          (e.originalParams.watchSlidesProgress = !0));
      }),
        n("init", () => {
          e.params.parallax.enabled && a();
        }),
        n("setTranslate", () => {
          e.params.parallax.enabled && a();
        }),
        n("setTransition", (t, n) => {
          e.params.parallax.enabled &&
            ((t = e.params.speed) => {
              const { el: n } = e;
              n.querySelectorAll(
                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
              ).forEach((e) => {
                let n =
                  parseInt(
                    e.getAttribute("data-swiper-parallax-duration"),
                    10
                  ) || t;
                0 === t && (n = 0), (e.style.transitionDuration = `${n}ms`);
              });
            })(n);
        });
    },
    function ({ swiper: e, extendParams: t, on: n, emit: i }) {
      const a = r();
      t({
        zoom: {
          enabled: !1,
          maxRatio: 3,
          minRatio: 1,
          toggle: !0,
          containerClass: "swiper-zoom-container",
          zoomedSlideClass: "swiper-slide-zoomed",
        },
      }),
        (e.zoom = { enabled: !1 });
      let s,
        o,
        d = 1,
        p = !1;
      const c = [],
        u = {
          slideEl: void 0,
          slideWidth: void 0,
          slideHeight: void 0,
          imageEl: void 0,
          imageWrapEl: void 0,
          maxRatio: 3,
        },
        g = {
          isTouched: void 0,
          isMoved: void 0,
          currentX: void 0,
          currentY: void 0,
          minX: void 0,
          minY: void 0,
          maxX: void 0,
          maxY: void 0,
          width: void 0,
          height: void 0,
          startX: void 0,
          startY: void 0,
          touchesStart: {},
          touchesCurrent: {},
        },
        h = {
          x: void 0,
          y: void 0,
          prevPositionX: void 0,
          prevPositionY: void 0,
          prevTime: void 0,
        };
      let f = 1;
      function y() {
        if (c.length < 2) return 1;
        const e = c[0].pageX,
          t = c[0].pageY,
          n = c[1].pageX,
          i = c[1].pageY;
        return Math.sqrt((n - e) ** 2 + (i - t) ** 2);
      }
      function v(t) {
        const n = e.isElement ? "swiper-slide" : `.${e.params.slideClass}`;
        return (
          !!t.target.matches(n) ||
          e.slides.filter((e) => e.contains(t.target)).length > 0
        );
      }
      function x(t) {
        if (("mouse" === t.pointerType && c.splice(0, c.length), !v(t))) return;
        const n = e.params.zoom;
        if (((s = !1), (o = !1), c.push(t), !(c.length < 2))) {
          if (((s = !0), (u.scaleStart = y()), !u.slideEl)) {
            (u.slideEl = t.target.closest(
              `.${e.params.slideClass}, swiper-slide`
            )),
              u.slideEl || (u.slideEl = e.slides[e.activeIndex]);
            let i = u.slideEl.querySelector(`.${n.containerClass}`);
            if (
              (i &&
                (i = i.querySelectorAll(
                  "picture, img, svg, canvas, .swiper-zoom-target"
                )[0]),
              (u.imageEl = i),
              (u.imageWrapEl = i
                ? b(u.imageEl, `.${n.containerClass}`)[0]
                : void 0),
              !u.imageWrapEl)
            )
              return void (u.imageEl = void 0);
            u.maxRatio =
              u.imageWrapEl.getAttribute("data-swiper-zoom") || n.maxRatio;
          }
          if (u.imageEl) {
            const [e, t] = (function () {
              if (c.length < 2) return { x: null, y: null };
              const e = u.imageEl.getBoundingClientRect();
              return [
                (c[0].pageX + (c[1].pageX - c[0].pageX) / 2 - e.x) / d,
                (c[0].pageY + (c[1].pageY - c[0].pageY) / 2 - e.y) / d,
              ];
            })();
            (u.imageEl.style.transformOrigin = `${e}px ${t}px`),
              (u.imageEl.style.transitionDuration = "0ms");
          }
          p = !0;
        }
      }
      function M(t) {
        if (!v(t)) return;
        const n = e.params.zoom,
          i = e.zoom,
          a = c.findIndex((e) => e.pointerId === t.pointerId);
        a >= 0 && (c[a] = t),
          c.length < 2 ||
            ((o = !0),
            (u.scaleMove = y()),
            u.imageEl &&
              ((i.scale = (u.scaleMove / u.scaleStart) * d),
              i.scale > u.maxRatio &&
                (i.scale = u.maxRatio - 1 + (i.scale - u.maxRatio + 1) ** 0.5),
              i.scale < n.minRatio &&
                (i.scale = n.minRatio + 1 - (n.minRatio - i.scale + 1) ** 0.5),
              (u.imageEl.style.transform = `translate3d(0,0,0) scale(${i.scale})`)));
      }
      function E(t) {
        if (!v(t)) return;
        if ("mouse" === t.pointerType && "pointerout" === t.type) return;
        const n = e.params.zoom,
          i = e.zoom,
          a = c.findIndex((e) => e.pointerId === t.pointerId);
        a >= 0 && c.splice(a, 1),
          s &&
            o &&
            ((s = !1),
            (o = !1),
            u.imageEl &&
              ((i.scale = Math.max(Math.min(i.scale, u.maxRatio), n.minRatio)),
              (u.imageEl.style.transitionDuration = `${e.params.speed}ms`),
              (u.imageEl.style.transform = `translate3d(0,0,0) scale(${i.scale})`),
              (d = i.scale),
              (p = !1),
              1 === i.scale && (u.slideEl = void 0)));
      }
      function A(t) {
        if (
          !v(t) ||
          !(function (t) {
            const n = `.${e.params.zoom.containerClass}`;
            return (
              !!t.target.matches(n) ||
              [...e.el.querySelectorAll(n)].filter((e) => e.contains(t.target))
                .length > 0
            );
          })(t)
        )
          return;
        const n = e.zoom;
        if (!u.imageEl) return;
        if (((e.allowClick = !1), !g.isTouched || !u.slideEl)) return;
        g.isMoved ||
          ((g.width = u.imageEl.offsetWidth),
          (g.height = u.imageEl.offsetHeight),
          (g.startX = l(u.imageWrapEl, "x") || 0),
          (g.startY = l(u.imageWrapEl, "y") || 0),
          (u.slideWidth = u.slideEl.offsetWidth),
          (u.slideHeight = u.slideEl.offsetHeight),
          (u.imageWrapEl.style.transitionDuration = "0ms"));
        const i = g.width * n.scale,
          a = g.height * n.scale;
        if (!(i < u.slideWidth && a < u.slideHeight)) {
          if (
            ((g.minX = Math.min(u.slideWidth / 2 - i / 2, 0)),
            (g.maxX = -g.minX),
            (g.minY = Math.min(u.slideHeight / 2 - a / 2, 0)),
            (g.maxY = -g.minY),
            (g.touchesCurrent.x = c.length > 0 ? c[0].pageX : t.pageX),
            (g.touchesCurrent.y = c.length > 0 ? c[0].pageY : t.pageY),
            !g.isMoved && !p)
          ) {
            if (
              e.isHorizontal() &&
              ((Math.floor(g.minX) === Math.floor(g.startX) &&
                g.touchesCurrent.x < g.touchesStart.x) ||
                (Math.floor(g.maxX) === Math.floor(g.startX) &&
                  g.touchesCurrent.x > g.touchesStart.x))
            )
              return void (g.isTouched = !1);
            if (
              !e.isHorizontal() &&
              ((Math.floor(g.minY) === Math.floor(g.startY) &&
                g.touchesCurrent.y < g.touchesStart.y) ||
                (Math.floor(g.maxY) === Math.floor(g.startY) &&
                  g.touchesCurrent.y > g.touchesStart.y))
            )
              return void (g.isTouched = !1);
          }
          t.cancelable && t.preventDefault(),
            t.stopPropagation(),
            (g.isMoved = !0),
            (g.currentX = g.touchesCurrent.x - g.touchesStart.x + g.startX),
            (g.currentY = g.touchesCurrent.y - g.touchesStart.y + g.startY),
            g.currentX < g.minX &&
              (g.currentX = g.minX + 1 - (g.minX - g.currentX + 1) ** 0.8),
            g.currentX > g.maxX &&
              (g.currentX = g.maxX - 1 + (g.currentX - g.maxX + 1) ** 0.8),
            g.currentY < g.minY &&
              (g.currentY = g.minY + 1 - (g.minY - g.currentY + 1) ** 0.8),
            g.currentY > g.maxY &&
              (g.currentY = g.maxY - 1 + (g.currentY - g.maxY + 1) ** 0.8),
            h.prevPositionX || (h.prevPositionX = g.touchesCurrent.x),
            h.prevPositionY || (h.prevPositionY = g.touchesCurrent.y),
            h.prevTime || (h.prevTime = Date.now()),
            (h.x =
              (g.touchesCurrent.x - h.prevPositionX) /
              (Date.now() - h.prevTime) /
              2),
            (h.y =
              (g.touchesCurrent.y - h.prevPositionY) /
              (Date.now() - h.prevTime) /
              2),
            Math.abs(g.touchesCurrent.x - h.prevPositionX) < 2 && (h.x = 0),
            Math.abs(g.touchesCurrent.y - h.prevPositionY) < 2 && (h.y = 0),
            (h.prevPositionX = g.touchesCurrent.x),
            (h.prevPositionY = g.touchesCurrent.y),
            (h.prevTime = Date.now()),
            (u.imageWrapEl.style.transform = `translate3d(${g.currentX}px, ${g.currentY}px,0)`);
        }
      }
      function T() {
        const t = e.zoom;
        u.slideEl &&
          e.previousIndex !== e.activeIndex &&
          (u.imageEl &&
            (u.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
          u.imageWrapEl &&
            (u.imageWrapEl.style.transform = "translate3d(0,0,0)"),
          (t.scale = 1),
          (d = 1),
          (u.slideEl = void 0),
          (u.imageEl = void 0),
          (u.imageWrapEl = void 0));
      }
      function C(t) {
        const n = e.zoom,
          i = e.params.zoom;
        if (!u.slideEl) {
          t &&
            t.target &&
            (u.slideEl = t.target.closest(
              `.${e.params.slideClass}, swiper-slide`
            )),
            u.slideEl ||
              (e.params.virtual && e.params.virtual.enabled && e.virtual
                ? (u.slideEl = m(
                    e.slidesEl,
                    `.${e.params.slideActiveClass}`
                  )[0])
                : (u.slideEl = e.slides[e.activeIndex]));
          let n = u.slideEl.querySelector(`.${i.containerClass}`);
          n &&
            (n = n.querySelectorAll(
              "picture, img, svg, canvas, .swiper-zoom-target"
            )[0]),
            (u.imageEl = n),
            (u.imageWrapEl = n
              ? b(u.imageEl, `.${i.containerClass}`)[0]
              : void 0);
        }
        if (!u.imageEl || !u.imageWrapEl) return;
        let r, s, o, l, p, c, h, f, y, v, x, M, E, A, T, C, L, S;
        e.params.cssMode &&
          ((e.wrapperEl.style.overflow = "hidden"),
          (e.wrapperEl.style.touchAction = "none")),
          u.slideEl.classList.add(`${i.zoomedSlideClass}`),
          void 0 === g.touchesStart.x && t
            ? ((r = t.pageX), (s = t.pageY))
            : ((r = g.touchesStart.x), (s = g.touchesStart.y));
        const z = "number" == typeof t ? t : null;
        1 === d && z && ((r = void 0), (s = void 0)),
          (n.scale =
            z || u.imageWrapEl.getAttribute("data-swiper-zoom") || i.maxRatio),
          (d =
            z || u.imageWrapEl.getAttribute("data-swiper-zoom") || i.maxRatio),
          !t || (1 === d && z)
            ? ((h = 0), (f = 0))
            : ((L = u.slideEl.offsetWidth),
              (S = u.slideEl.offsetHeight),
              (o = w(u.slideEl).left + a.scrollX),
              (l = w(u.slideEl).top + a.scrollY),
              (p = o + L / 2 - r),
              (c = l + S / 2 - s),
              (y = u.imageEl.offsetWidth),
              (v = u.imageEl.offsetHeight),
              (x = y * n.scale),
              (M = v * n.scale),
              (E = Math.min(L / 2 - x / 2, 0)),
              (A = Math.min(S / 2 - M / 2, 0)),
              (T = -E),
              (C = -A),
              (h = p * n.scale),
              (f = c * n.scale),
              h < E && (h = E),
              h > T && (h = T),
              f < A && (f = A),
              f > C && (f = C)),
          (u.imageWrapEl.style.transitionDuration = "300ms"),
          (u.imageWrapEl.style.transform = `translate3d(${h}px, ${f}px,0)`),
          (u.imageEl.style.transitionDuration = "300ms"),
          (u.imageEl.style.transform = `translate3d(0,0,0) scale(${n.scale})`);
      }
      function L() {
        const t = e.zoom,
          n = e.params.zoom;
        if (!u.slideEl) {
          e.params.virtual && e.params.virtual.enabled && e.virtual
            ? (u.slideEl = m(e.slidesEl, `.${e.params.slideActiveClass}`)[0])
            : (u.slideEl = e.slides[e.activeIndex]);
          let t = u.slideEl.querySelector(`.${n.containerClass}`);
          t &&
            (t = t.querySelectorAll(
              "picture, img, svg, canvas, .swiper-zoom-target"
            )[0]),
            (u.imageEl = t),
            (u.imageWrapEl = t
              ? b(u.imageEl, `.${n.containerClass}`)[0]
              : void 0);
        }
        u.imageEl &&
          u.imageWrapEl &&
          (e.params.cssMode &&
            ((e.wrapperEl.style.overflow = ""),
            (e.wrapperEl.style.touchAction = "")),
          (t.scale = 1),
          (d = 1),
          (u.imageWrapEl.style.transitionDuration = "300ms"),
          (u.imageWrapEl.style.transform = "translate3d(0,0,0)"),
          (u.imageEl.style.transitionDuration = "300ms"),
          (u.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
          u.slideEl.classList.remove(`${n.zoomedSlideClass}`),
          (u.slideEl = void 0));
      }
      function S(t) {
        const n = e.zoom;
        n.scale && 1 !== n.scale ? L() : C(t);
      }
      function z() {
        return {
          passiveListener: !!e.params.passiveListeners && {
            passive: !0,
            capture: !1,
          },
          activeListenerWithCapture: !e.params.passiveListeners || {
            passive: !1,
            capture: !0,
          },
        };
      }
      function I() {
        const t = e.zoom;
        if (t.enabled) return;
        t.enabled = !0;
        const { passiveListener: n, activeListenerWithCapture: i } = z();
        e.wrapperEl.addEventListener("pointerdown", x, n),
          e.wrapperEl.addEventListener("pointermove", M, i),
          ["pointerup", "pointercancel", "pointerout"].forEach((t) => {
            e.wrapperEl.addEventListener(t, E, n);
          }),
          e.wrapperEl.addEventListener("pointermove", A, i);
      }
      function N() {
        const t = e.zoom;
        if (!t.enabled) return;
        t.enabled = !1;
        const { passiveListener: n, activeListenerWithCapture: i } = z();
        e.wrapperEl.removeEventListener("pointerdown", x, n),
          e.wrapperEl.removeEventListener("pointermove", M, i),
          ["pointerup", "pointercancel", "pointerout"].forEach((t) => {
            e.wrapperEl.removeEventListener(t, E, n);
          }),
          e.wrapperEl.removeEventListener("pointermove", A, i);
      }
      Object.defineProperty(e.zoom, "scale", {
        get: () => f,
        set(e) {
          if (f !== e) {
            const t = u.imageEl,
              n = u.slideEl;
            i("zoomChange", e, t, n);
          }
          f = e;
        },
      }),
        n("init", () => {
          e.params.zoom.enabled && I();
        }),
        n("destroy", () => {
          N();
        }),
        n("touchStart", (t, n) => {
          e.zoom.enabled &&
            (function (t) {
              const n = e.device;
              u.imageEl &&
                (g.isTouched ||
                  (n.android && t.cancelable && t.preventDefault(),
                  (g.isTouched = !0),
                  (g.touchesStart.x = t.pageX),
                  (g.touchesStart.y = t.pageY)));
            })(n);
        }),
        n("touchEnd", (t, n) => {
          e.zoom.enabled &&
            (function () {
              const t = e.zoom;
              if (!u.imageEl) return;
              if (!g.isTouched || !g.isMoved)
                return (g.isTouched = !1), void (g.isMoved = !1);
              (g.isTouched = !1), (g.isMoved = !1);
              let n = 300,
                i = 300;
              const a = h.x * n,
                r = g.currentX + a,
                s = h.y * i,
                o = g.currentY + s;
              0 !== h.x && (n = Math.abs((r - g.currentX) / h.x)),
                0 !== h.y && (i = Math.abs((o - g.currentY) / h.y));
              const l = Math.max(n, i);
              (g.currentX = r), (g.currentY = o);
              const d = g.width * t.scale,
                p = g.height * t.scale;
              (g.minX = Math.min(u.slideWidth / 2 - d / 2, 0)),
                (g.maxX = -g.minX),
                (g.minY = Math.min(u.slideHeight / 2 - p / 2, 0)),
                (g.maxY = -g.minY),
                (g.currentX = Math.max(Math.min(g.currentX, g.maxX), g.minX)),
                (g.currentY = Math.max(Math.min(g.currentY, g.maxY), g.minY)),
                (u.imageWrapEl.style.transitionDuration = `${l}ms`),
                (u.imageWrapEl.style.transform = `translate3d(${g.currentX}px, ${g.currentY}px,0)`);
            })();
        }),
        n("doubleTap", (t, n) => {
          !e.animating &&
            e.params.zoom.enabled &&
            e.zoom.enabled &&
            e.params.zoom.toggle &&
            S(n);
        }),
        n("transitionEnd", () => {
          e.zoom.enabled && e.params.zoom.enabled && T();
        }),
        n("slideChange", () => {
          e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && T();
        }),
        Object.assign(e.zoom, {
          enable: I,
          disable: N,
          in: C,
          out: L,
          toggle: S,
        });
    },
    function ({ swiper: e, extendParams: t, on: n }) {
      function i(e, t) {
        const n = (function () {
          let e, t, n;
          return (i, a) => {
            for (t = -1, e = i.length; e - t > 1; )
              (n = (e + t) >> 1), i[n] <= a ? (t = n) : (e = n);
            return e;
          };
        })();
        let i, a;
        return (
          (this.x = e),
          (this.y = t),
          (this.lastIndex = e.length - 1),
          (this.interpolate = function (e) {
            return e
              ? ((a = n(this.x, e)),
                (i = a - 1),
                ((e - this.x[i]) * (this.y[a] - this.y[i])) /
                  (this.x[a] - this.x[i]) +
                  this.y[i])
              : 0;
          }),
          this
        );
      }
      function a() {
        e.controller.control &&
          e.controller.spline &&
          ((e.controller.spline = void 0), delete e.controller.spline);
      }
      t({ controller: { control: void 0, inverse: !1, by: "slide" } }),
        (e.controller = { control: void 0 }),
        n("beforeInit", () => {
          if (
            "undefined" != typeof window &&
            ("string" == typeof e.params.controller.control ||
              e.params.controller.control instanceof HTMLElement)
          ) {
            const t = document.querySelector(e.params.controller.control);
            if (t && t.swiper) e.controller.control = t.swiper;
            else if (t) {
              const n = (i) => {
                (e.controller.control = i.detail[0]),
                  e.update(),
                  t.removeEventListener("init", n);
              };
              t.addEventListener("init", n);
            }
          } else e.controller.control = e.params.controller.control;
        }),
        n("update", () => {
          a();
        }),
        n("resize", () => {
          a();
        }),
        n("observerUpdate", () => {
          a();
        }),
        n("setTranslate", (t, n, i) => {
          e.controller.control && e.controller.setTranslate(n, i);
        }),
        n("setTransition", (t, n, i) => {
          e.controller.control && e.controller.setTransition(n, i);
        }),
        Object.assign(e.controller, {
          setTranslate: function (t, n) {
            const a = e.controller.control;
            let r, s;
            const o = e.constructor;
            function l(t) {
              const n = e.rtlTranslate ? -e.translate : e.translate;
              "slide" === e.params.controller.by &&
                ((function (t) {
                  e.controller.spline ||
                    (e.controller.spline = e.params.loop
                      ? new i(e.slidesGrid, t.slidesGrid)
                      : new i(e.snapGrid, t.snapGrid));
                })(t),
                (s = -e.controller.spline.interpolate(-n))),
                (s && "container" !== e.params.controller.by) ||
                  ((r =
                    (t.maxTranslate() - t.minTranslate()) /
                    (e.maxTranslate() - e.minTranslate())),
                  (s = (n - e.minTranslate()) * r + t.minTranslate())),
                e.params.controller.inverse && (s = t.maxTranslate() - s),
                t.updateProgress(s),
                t.setTranslate(s, e),
                t.updateActiveIndex(),
                t.updateSlidesClasses();
            }
            if (Array.isArray(a))
              for (let e = 0; e < a.length; e += 1)
                a[e] !== n && a[e] instanceof o && l(a[e]);
            else a instanceof o && n !== a && l(a);
          },
          setTransition: function (t, n) {
            const i = e.constructor,
              a = e.controller.control;
            let r;
            function o(n) {
              n.setTransition(t, e),
                0 !== t &&
                  (n.transitionStart(),
                  n.params.autoHeight &&
                    s(() => {
                      n.updateAutoHeight();
                    }),
                  v(n.wrapperEl, () => {
                    a && n.transitionEnd();
                  }));
            }
            if (Array.isArray(a))
              for (r = 0; r < a.length; r += 1)
                a[r] !== n && a[r] instanceof i && o(a[r]);
            else a instanceof i && n !== a && o(a);
          },
        });
    },
    function ({ swiper: e, extendParams: t, on: n }) {
      t({
        a11y: {
          enabled: !0,
          notificationClass: "swiper-notification",
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          paginationBulletMessage: "Go to slide {{index}}",
          slideLabelMessage: "{{index}} / {{slidesLength}}",
          containerMessage: null,
          containerRoleDescriptionMessage: null,
          itemRoleDescriptionMessage: null,
          slideRole: "group",
          id: null,
        },
      }),
        (e.a11y = { clicked: !1 });
      let i = null;
      function a(e) {
        const t = i;
        0 !== t.length && ((t.innerHTML = ""), (t.innerHTML = e));
      }
      const r = (e) => (Array.isArray(e) || (e = [e].filter((e) => !!e)), e);
      function s(e) {
        (e = r(e)).forEach((e) => {
          e.setAttribute("tabIndex", "0");
        });
      }
      function o(e) {
        (e = r(e)).forEach((e) => {
          e.setAttribute("tabIndex", "-1");
        });
      }
      function l(e, t) {
        (e = r(e)).forEach((e) => {
          e.setAttribute("role", t);
        });
      }
      function d(e, t) {
        (e = r(e)).forEach((e) => {
          e.setAttribute("aria-roledescription", t);
        });
      }
      function p(e, t) {
        (e = r(e)).forEach((e) => {
          e.setAttribute("aria-label", t);
        });
      }
      function c(e) {
        (e = r(e)).forEach((e) => {
          e.setAttribute("aria-disabled", !0);
        });
      }
      function u(e) {
        (e = r(e)).forEach((e) => {
          e.setAttribute("aria-disabled", !1);
        });
      }
      function g(t) {
        if (13 !== t.keyCode && 32 !== t.keyCode) return;
        const n = e.params.a11y,
          i = t.target;
        (e.pagination &&
          e.pagination.el &&
          (i === e.pagination.el || e.pagination.el.contains(t.target)) &&
          !t.target.matches(F(e.params.pagination.bulletClass))) ||
          (e.navigation &&
            e.navigation.nextEl &&
            i === e.navigation.nextEl &&
            ((e.isEnd && !e.params.loop) || e.slideNext(),
            e.isEnd ? a(n.lastSlideMessage) : a(n.nextSlideMessage)),
          e.navigation &&
            e.navigation.prevEl &&
            i === e.navigation.prevEl &&
            ((e.isBeginning && !e.params.loop) || e.slidePrev(),
            e.isBeginning ? a(n.firstSlideMessage) : a(n.prevSlideMessage)),
          e.pagination &&
            i.matches(F(e.params.pagination.bulletClass)) &&
            i.click());
      }
      function m() {
        return (
          e.pagination && e.pagination.bullets && e.pagination.bullets.length
        );
      }
      function w() {
        return m() && e.params.pagination.clickable;
      }
      const f = (e, t, n) => {
          s(e),
            "BUTTON" !== e.tagName &&
              (l(e, "button"), e.addEventListener("keydown", g)),
            p(e, n),
            (function (e, t) {
              (e = r(e)).forEach((e) => {
                e.setAttribute("aria-controls", t);
              });
            })(e, t);
        },
        b = () => {
          e.a11y.clicked = !0;
        },
        v = () => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              e.destroyed || (e.a11y.clicked = !1);
            });
          });
        },
        x = (t) => {
          if (e.a11y.clicked) return;
          const n = t.target.closest(`.${e.params.slideClass}, swiper-slide`);
          if (!n || !e.slides.includes(n)) return;
          const i = e.slides.indexOf(n) === e.activeIndex,
            a =
              e.params.watchSlidesProgress &&
              e.visibleSlides &&
              e.visibleSlides.includes(n);
          i ||
            a ||
            (t.sourceCapabilities && t.sourceCapabilities.firesTouchEvents) ||
            (e.isHorizontal() ? (e.el.scrollLeft = 0) : (e.el.scrollTop = 0),
            e.slideTo(e.slides.indexOf(n), 0));
        },
        M = () => {
          const t = e.params.a11y;
          t.itemRoleDescriptionMessage &&
            d(e.slides, t.itemRoleDescriptionMessage),
            t.slideRole && l(e.slides, t.slideRole);
          const n = e.slides.length;
          t.slideLabelMessage &&
            e.slides.forEach((i, a) => {
              const r = e.params.loop
                ? parseInt(i.getAttribute("data-swiper-slide-index"), 10)
                : a;
              p(
                i,
                t.slideLabelMessage
                  .replace(/\{\{index\}\}/, r + 1)
                  .replace(/\{\{slidesLength\}\}/, n)
              );
            });
        };
      n("beforeInit", () => {
        (i = h("span", e.params.a11y.notificationClass)),
          i.setAttribute("aria-live", "assertive"),
          i.setAttribute("aria-atomic", "true"),
          e.isElement && i.setAttribute("slot", "container-end");
      }),
        n("afterInit", () => {
          e.params.a11y.enabled &&
            (() => {
              const t = e.params.a11y;
              e.el.append(i);
              const n = e.el;
              t.containerRoleDescriptionMessage &&
                d(n, t.containerRoleDescriptionMessage),
                t.containerMessage && p(n, t.containerMessage);
              const a = e.wrapperEl,
                s =
                  t.id ||
                  a.getAttribute("id") ||
                  `swiper-wrapper-${(function (e = 16) {
                    return "x"
                      .repeat(e)
                      .replace(/x/g, () =>
                        Math.round(16 * Math.random()).toString(16)
                      );
                  })(16)}`,
                o =
                  e.params.autoplay && e.params.autoplay.enabled
                    ? "off"
                    : "polite";
              var l;
              (l = s),
                r(a).forEach((e) => {
                  e.setAttribute("id", l);
                }),
                (function (e, t) {
                  (e = r(e)).forEach((e) => {
                    e.setAttribute("aria-live", t);
                  });
                })(a, o),
                M();
              let { nextEl: c, prevEl: u } = e.navigation ? e.navigation : {};
              (c = r(c)),
                (u = r(u)),
                c && c.forEach((e) => f(e, s, t.nextSlideMessage)),
                u && u.forEach((e) => f(e, s, t.prevSlideMessage)),
                w() &&
                  (Array.isArray(e.pagination.el)
                    ? e.pagination.el
                    : [e.pagination.el]
                  ).forEach((e) => {
                    e.addEventListener("keydown", g);
                  }),
                e.el.addEventListener("focus", x, !0),
                e.el.addEventListener("pointerdown", b, !0),
                e.el.addEventListener("pointerup", v, !0);
            })();
        }),
        n(
          "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
          () => {
            e.params.a11y.enabled && M();
          }
        ),
        n("fromEdge toEdge afterInit lock unlock", () => {
          e.params.a11y.enabled &&
            (function () {
              if (e.params.loop || e.params.rewind || !e.navigation) return;
              const { nextEl: t, prevEl: n } = e.navigation;
              n && (e.isBeginning ? (c(n), o(n)) : (u(n), s(n))),
                t && (e.isEnd ? (c(t), o(t)) : (u(t), s(t)));
            })();
        }),
        n("paginationUpdate", () => {
          e.params.a11y.enabled &&
            (function () {
              const t = e.params.a11y;
              m() &&
                e.pagination.bullets.forEach((n) => {
                  e.params.pagination.clickable &&
                    (s(n),
                    e.params.pagination.renderBullet ||
                      (l(n, "button"),
                      p(
                        n,
                        t.paginationBulletMessage.replace(
                          /\{\{index\}\}/,
                          y(n) + 1
                        )
                      ))),
                    n.matches(`.${e.params.pagination.bulletActiveClass}`)
                      ? n.setAttribute("aria-current", "true")
                      : n.removeAttribute("aria-current");
                });
            })();
        }),
        n("destroy", () => {
          e.params.a11y.enabled &&
            (function () {
              i && i.length > 0 && i.remove();
              let { nextEl: t, prevEl: n } = e.navigation ? e.navigation : {};
              (t = r(t)),
                (n = r(n)),
                t && t.forEach((e) => e.removeEventListener("keydown", g)),
                n && n.forEach((e) => e.removeEventListener("keydown", g)),
                w() &&
                  (Array.isArray(e.pagination.el)
                    ? e.pagination.el
                    : [e.pagination.el]
                  ).forEach((e) => {
                    e.removeEventListener("keydown", g);
                  }),
                e.el.removeEventListener("focus", x, !0),
                e.el.removeEventListener("pointerdown", b, !0),
                e.el.removeEventListener("pointerup", v, !0);
            })();
        });
    },
    function ({ swiper: e, extendParams: t, on: n }) {
      t({
        history: {
          enabled: !1,
          root: "",
          replaceState: !1,
          key: "slides",
          keepQuery: !1,
        },
      });
      let i = !1,
        a = {};
      const s = (e) =>
          e
            .toString()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "")
            .replace(/--+/g, "-")
            .replace(/^-+/, "")
            .replace(/-+$/, ""),
        o = (e) => {
          const t = r();
          let n;
          n = e ? new URL(e) : t.location;
          const i = n.pathname
              .slice(1)
              .split("/")
              .filter((e) => "" !== e),
            a = i.length;
          return { key: i[a - 2], value: i[a - 1] };
        },
        l = (t, n) => {
          const a = r();
          if (!i || !e.params.history.enabled) return;
          let o;
          o = e.params.url ? new URL(e.params.url) : a.location;
          const l = e.slides[n];
          let d = s(l.getAttribute("data-history"));
          if (e.params.history.root.length > 0) {
            let n = e.params.history.root;
            "/" === n[n.length - 1] && (n = n.slice(0, n.length - 1)),
              (d = `${n}/${t ? `${t}/` : ""}${d}`);
          } else o.pathname.includes(t) || (d = `${t ? `${t}/` : ""}${d}`);
          e.params.history.keepQuery && (d += o.search);
          const p = a.history.state;
          (p && p.value === d) ||
            (e.params.history.replaceState
              ? a.history.replaceState({ value: d }, null, d)
              : a.history.pushState({ value: d }, null, d));
        },
        d = (t, n, i) => {
          if (n)
            for (let a = 0, r = e.slides.length; a < r; a += 1) {
              const r = e.slides[a];
              if (s(r.getAttribute("data-history")) === n) {
                const n = e.getSlideIndex(r);
                e.slideTo(n, t, i);
              }
            }
          else e.slideTo(0, t, i);
        },
        p = () => {
          (a = o(e.params.url)), d(e.params.speed, a.value, !1);
        };
      n("init", () => {
        e.params.history.enabled &&
          (() => {
            const t = r();
            if (e.params.history) {
              if (!t.history || !t.history.pushState)
                return (
                  (e.params.history.enabled = !1),
                  void (e.params.hashNavigation.enabled = !0)
                );
              (i = !0),
                (a = o(e.params.url)),
                a.key || a.value
                  ? (d(0, a.value, e.params.runCallbacksOnInit),
                    e.params.history.replaceState ||
                      t.addEventListener("popstate", p))
                  : e.params.history.replaceState ||
                    t.addEventListener("popstate", p);
            }
          })();
      }),
        n("destroy", () => {
          e.params.history.enabled &&
            (() => {
              const t = r();
              e.params.history.replaceState ||
                t.removeEventListener("popstate", p);
            })();
        }),
        n("transitionEnd _freeModeNoMomentumRelease", () => {
          i && l(e.params.history.key, e.activeIndex);
        }),
        n("slideChange", () => {
          i && e.params.cssMode && l(e.params.history.key, e.activeIndex);
        });
    },
    function ({ swiper: e, extendParams: t, emit: n, on: a }) {
      let s = !1;
      const o = i(),
        l = r();
      t({ hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } });
      const d = () => {
          n("hashChange");
          const t = o.location.hash.replace("#", "");
          if (t !== e.slides[e.activeIndex].getAttribute("data-hash")) {
            const n = e.getSlideIndex(
              m(
                e.slidesEl,
                `.${e.params.slideClass}[data-hash="${t}"], swiper-slide[data-hash="${t}"]`
              )[0]
            );
            if (void 0 === n) return;
            e.slideTo(n);
          }
        },
        p = () => {
          if (s && e.params.hashNavigation.enabled)
            if (
              e.params.hashNavigation.replaceState &&
              l.history &&
              l.history.replaceState
            )
              l.history.replaceState(
                null,
                null,
                `#${e.slides[e.activeIndex].getAttribute("data-hash")}` || ""
              ),
                n("hashSet");
            else {
              const t = e.slides[e.activeIndex],
                i =
                  t.getAttribute("data-hash") || t.getAttribute("data-history");
              (o.location.hash = i || ""), n("hashSet");
            }
        };
      a("init", () => {
        e.params.hashNavigation.enabled &&
          (() => {
            if (
              !e.params.hashNavigation.enabled ||
              (e.params.history && e.params.history.enabled)
            )
              return;
            s = !0;
            const t = o.location.hash.replace("#", "");
            if (t) {
              const n = 0;
              for (let i = 0, a = e.slides.length; i < a; i += 1) {
                const a = e.slides[i];
                if (
                  (a.getAttribute("data-hash") ||
                    a.getAttribute("data-history")) === t
                ) {
                  const t = e.getSlideIndex(a);
                  e.slideTo(t, n, e.params.runCallbacksOnInit, !0);
                }
              }
            }
            e.params.hashNavigation.watchState &&
              l.addEventListener("hashchange", d);
          })();
      }),
        a("destroy", () => {
          e.params.hashNavigation.enabled &&
            e.params.hashNavigation.watchState &&
            l.removeEventListener("hashchange", d);
        }),
        a("transitionEnd _freeModeNoMomentumRelease", () => {
          s && p();
        }),
        a("slideChange", () => {
          s && e.params.cssMode && p();
        });
    },
    function ({ swiper: e, extendParams: t, on: n, emit: a, params: r }) {
      let s, o;
      (e.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
        t({
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        });
      let l,
        d,
        p,
        c,
        u,
        g,
        m,
        h = r && r.autoplay ? r.autoplay.delay : 3e3,
        w = r && r.autoplay ? r.autoplay.delay : 3e3,
        f = new Date().getTime;
      function y(t) {
        e &&
          !e.destroyed &&
          e.wrapperEl &&
          t.target === e.wrapperEl &&
          (e.wrapperEl.removeEventListener("transitionend", y), A());
      }
      const b = () => {
          if (e.destroyed || !e.autoplay.running) return;
          e.autoplay.paused ? (d = !0) : d && ((w = l), (d = !1));
          const t = e.autoplay.paused ? l : f + w - new Date().getTime();
          (e.autoplay.timeLeft = t),
            a("autoplayTimeLeft", t, t / h),
            (o = requestAnimationFrame(() => {
              b();
            }));
        },
        v = (t) => {
          if (e.destroyed || !e.autoplay.running) return;
          cancelAnimationFrame(o), b();
          let n = void 0 === t ? e.params.autoplay.delay : t;
          (h = e.params.autoplay.delay), (w = e.params.autoplay.delay);
          const i = (() => {
            let t;
            if (
              ((t =
                e.virtual && e.params.virtual.enabled
                  ? e.slides.filter((e) =>
                      e.classList.contains("swiper-slide-active")
                    )[0]
                  : e.slides[e.activeIndex]),
              t)
            )
              return parseInt(t.getAttribute("data-swiper-autoplay"), 10);
          })();
          !Number.isNaN(i) &&
            i > 0 &&
            void 0 === t &&
            ((n = i), (h = i), (w = i)),
            (l = n);
          const r = e.params.speed,
            d = () => {
              e &&
                !e.destroyed &&
                (e.params.autoplay.reverseDirection
                  ? !e.isBeginning || e.params.loop || e.params.rewind
                    ? (e.slidePrev(r, !0, !0), a("autoplay"))
                    : e.params.autoplay.stopOnLastSlide ||
                      (e.slideTo(e.slides.length - 1, r, !0, !0), a("autoplay"))
                  : !e.isEnd || e.params.loop || e.params.rewind
                  ? (e.slideNext(r, !0, !0), a("autoplay"))
                  : e.params.autoplay.stopOnLastSlide ||
                    (e.slideTo(0, r, !0, !0), a("autoplay")),
                e.params.cssMode &&
                  ((f = new Date().getTime()),
                  requestAnimationFrame(() => {
                    v();
                  })));
            };
          return (
            n > 0
              ? (clearTimeout(s),
                (s = setTimeout(() => {
                  d();
                }, n)))
              : requestAnimationFrame(() => {
                  d();
                }),
            n
          );
        },
        x = () => {
          (e.autoplay.running = !0), v(), a("autoplayStart");
        },
        M = () => {
          (e.autoplay.running = !1),
            clearTimeout(s),
            cancelAnimationFrame(o),
            a("autoplayStop");
        },
        E = (t, n) => {
          if (e.destroyed || !e.autoplay.running) return;
          clearTimeout(s), t || (m = !0);
          const i = () => {
            a("autoplayPause"),
              e.params.autoplay.waitForTransition
                ? e.wrapperEl.addEventListener("transitionend", y)
                : A();
          };
          if (((e.autoplay.paused = !0), n))
            return g && (l = e.params.autoplay.delay), (g = !1), void i();
          const r = l || e.params.autoplay.delay;
          (l = r - (new Date().getTime() - f)),
            (e.isEnd && l < 0 && !e.params.loop) || (l < 0 && (l = 0), i());
        },
        A = () => {
          (e.isEnd && l < 0 && !e.params.loop) ||
            e.destroyed ||
            !e.autoplay.running ||
            ((f = new Date().getTime()),
            m ? ((m = !1), v(l)) : v(),
            (e.autoplay.paused = !1),
            a("autoplayResume"));
        },
        T = () => {
          if (e.destroyed || !e.autoplay.running) return;
          const t = i();
          "hidden" === t.visibilityState && ((m = !0), E(!0)),
            "visible" === t.visibilityState && A();
        },
        C = (e) => {
          "mouse" === e.pointerType && ((m = !0), E(!0));
        },
        L = (t) => {
          "mouse" === t.pointerType && e.autoplay.paused && A();
        };
      n("init", () => {
        e.params.autoplay.enabled &&
          (e.params.autoplay.pauseOnMouseEnter &&
            (e.el.addEventListener("pointerenter", C),
            e.el.addEventListener("pointerleave", L)),
          i().addEventListener("visibilitychange", T),
          (f = new Date().getTime()),
          x());
      }),
        n("destroy", () => {
          e.el.removeEventListener("pointerenter", C),
            e.el.removeEventListener("pointerleave", L),
            i().removeEventListener("visibilitychange", T),
            e.autoplay.running && M();
        }),
        n("beforeTransitionStart", (t, n, i) => {
          !e.destroyed &&
            e.autoplay.running &&
            (i || !e.params.autoplay.disableOnInteraction ? E(!0, !0) : M());
        }),
        n("sliderFirstMove", () => {
          !e.destroyed &&
            e.autoplay.running &&
            (e.params.autoplay.disableOnInteraction
              ? M()
              : ((p = !0),
                (c = !1),
                (m = !1),
                (u = setTimeout(() => {
                  (m = !0), (c = !0), E(!0);
                }, 200))));
        }),
        n("touchEnd", () => {
          if (!e.destroyed && e.autoplay.running && p) {
            if (
              (clearTimeout(u),
              clearTimeout(s),
              e.params.autoplay.disableOnInteraction)
            )
              return (c = !1), void (p = !1);
            c && e.params.cssMode && A(), (c = !1), (p = !1);
          }
        }),
        n("slideChange", () => {
          !e.destroyed && e.autoplay.running && (g = !0);
        }),
        Object.assign(e.autoplay, { start: x, stop: M, pause: E, resume: A });
    },
    function ({ swiper: e, extendParams: t, on: n }) {
      t({
        thumbs: {
          swiper: null,
          multipleActiveThumbs: !0,
          autoScrollOffset: 0,
          slideThumbActiveClass: "swiper-slide-thumb-active",
          thumbsContainerClass: "swiper-thumbs",
        },
      });
      let a = !1,
        r = !1;
      function s() {
        const t = e.thumbs.swiper;
        if (!t || t.destroyed) return;
        const n = t.clickedIndex,
          i = t.clickedSlide;
        if (i && i.classList.contains(e.params.thumbs.slideThumbActiveClass))
          return;
        if (null == n) return;
        let a;
        (a = t.params.loop
          ? parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10)
          : n),
          e.params.loop ? e.slideToLoop(a) : e.slideTo(a);
      }
      function o() {
        const { thumbs: t } = e.params;
        if (a) return !1;
        a = !0;
        const n = e.constructor;
        if (t.swiper instanceof n)
          (e.thumbs.swiper = t.swiper),
            Object.assign(e.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            Object.assign(e.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            e.thumbs.swiper.update();
        else if (d(t.swiper)) {
          const i = Object.assign({}, t.swiper);
          Object.assign(i, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          }),
            (e.thumbs.swiper = new n(i)),
            (r = !0);
        }
        return (
          e.thumbs.swiper.el.classList.add(
            e.params.thumbs.thumbsContainerClass
          ),
          e.thumbs.swiper.on("tap", s),
          !0
        );
      }
      function l(t) {
        const n = e.thumbs.swiper;
        if (!n || n.destroyed) return;
        const i =
          "auto" === n.params.slidesPerView
            ? n.slidesPerViewDynamic()
            : n.params.slidesPerView;
        let a = 1;
        const r = e.params.thumbs.slideThumbActiveClass;
        if (
          (e.params.slidesPerView > 1 &&
            !e.params.centeredSlides &&
            (a = e.params.slidesPerView),
          e.params.thumbs.multipleActiveThumbs || (a = 1),
          (a = Math.floor(a)),
          n.slides.forEach((e) => e.classList.remove(r)),
          n.params.loop || (n.params.virtual && n.params.virtual.enabled))
        )
          for (let t = 0; t < a; t += 1)
            m(
              n.slidesEl,
              `[data-swiper-slide-index="${e.realIndex + t}"]`
            ).forEach((e) => {
              e.classList.add(r);
            });
        else
          for (let t = 0; t < a; t += 1)
            n.slides[e.realIndex + t] &&
              n.slides[e.realIndex + t].classList.add(r);
        const s = e.params.thumbs.autoScrollOffset,
          o = s && !n.params.loop;
        if (e.realIndex !== n.realIndex || o) {
          const a = n.activeIndex;
          let r, l;
          if (n.params.loop) {
            const t = n.slides.filter(
              (t) =>
                t.getAttribute("data-swiper-slide-index") === `${e.realIndex}`
            )[0];
            (r = n.slides.indexOf(t)),
              (l = e.activeIndex > e.previousIndex ? "next" : "prev");
          } else (r = e.realIndex), (l = r > e.previousIndex ? "next" : "prev");
          o && (r += "next" === l ? s : -1 * s),
            n.visibleSlidesIndexes &&
              n.visibleSlidesIndexes.indexOf(r) < 0 &&
              (n.params.centeredSlides
                ? (r =
                    r > a
                      ? r - Math.floor(i / 2) + 1
                      : r + Math.floor(i / 2) - 1)
                : r > a && n.params.slidesPerGroup,
              n.slideTo(r, t ? 0 : void 0));
        }
      }
      (e.thumbs = { swiper: null }),
        n("beforeInit", () => {
          const { thumbs: t } = e.params;
          if (t && t.swiper)
            if (
              "string" == typeof t.swiper ||
              t.swiper instanceof HTMLElement
            ) {
              const n = i(),
                a = () => {
                  const i =
                    "string" == typeof t.swiper
                      ? n.querySelector(t.swiper)
                      : t.swiper;
                  if (i && i.swiper) (t.swiper = i.swiper), o(), l(!0);
                  else if (i) {
                    const n = (a) => {
                      (t.swiper = a.detail[0]),
                        i.removeEventListener("init", n),
                        o(),
                        l(!0),
                        t.swiper.update(),
                        e.update();
                    };
                    i.addEventListener("init", n);
                  }
                  return i;
                },
                r = () => {
                  e.destroyed || a() || requestAnimationFrame(r);
                };
              requestAnimationFrame(r);
            } else o(), l(!0);
        }),
        n("slideChange update resize observerUpdate", () => {
          l();
        }),
        n("setTransition", (t, n) => {
          const i = e.thumbs.swiper;
          i && !i.destroyed && i.setTransition(n);
        }),
        n("beforeDestroy", () => {
          const t = e.thumbs.swiper;
          t && !t.destroyed && r && t.destroy();
        }),
        Object.assign(e.thumbs, { init: o, update: l });
    },
    function ({ swiper: e, extendParams: t, emit: n, once: i }) {
      t({
        freeMode: {
          enabled: !1,
          momentum: !0,
          momentumRatio: 1,
          momentumBounce: !0,
          momentumBounceRatio: 1,
          momentumVelocityRatio: 1,
          sticky: !1,
          minimumVelocity: 0.02,
        },
      }),
        Object.assign(e, {
          freeMode: {
            onTouchStart: function () {
              const t = e.getTranslate();
              e.setTranslate(t),
                e.setTransition(0),
                (e.touchEventsData.velocities.length = 0),
                e.freeMode.onTouchEnd({
                  currentPos: e.rtl ? e.translate : -e.translate,
                });
            },
            onTouchMove: function () {
              const { touchEventsData: t, touches: n } = e;
              0 === t.velocities.length &&
                t.velocities.push({
                  position: n[e.isHorizontal() ? "startX" : "startY"],
                  time: t.touchStartTime,
                }),
                t.velocities.push({
                  position: n[e.isHorizontal() ? "currentX" : "currentY"],
                  time: o(),
                });
            },
            onTouchEnd: function ({ currentPos: t }) {
              const {
                  params: a,
                  wrapperEl: r,
                  rtlTranslate: s,
                  snapGrid: l,
                  touchEventsData: d,
                } = e,
                p = o() - d.touchStartTime;
              if (t < -e.minTranslate()) e.slideTo(e.activeIndex);
              else if (t > -e.maxTranslate())
                e.slides.length < l.length
                  ? e.slideTo(l.length - 1)
                  : e.slideTo(e.slides.length - 1);
              else {
                if (a.freeMode.momentum) {
                  if (d.velocities.length > 1) {
                    const t = d.velocities.pop(),
                      n = d.velocities.pop(),
                      i = t.position - n.position,
                      r = t.time - n.time;
                    (e.velocity = i / r),
                      (e.velocity /= 2),
                      Math.abs(e.velocity) < a.freeMode.minimumVelocity &&
                        (e.velocity = 0),
                      (r > 150 || o() - t.time > 300) && (e.velocity = 0);
                  } else e.velocity = 0;
                  (e.velocity *= a.freeMode.momentumVelocityRatio),
                    (d.velocities.length = 0);
                  let t = 1e3 * a.freeMode.momentumRatio;
                  const p = e.velocity * t;
                  let c = e.translate + p;
                  s && (c = -c);
                  let u,
                    g = !1;
                  const m =
                    20 * Math.abs(e.velocity) * a.freeMode.momentumBounceRatio;
                  let h;
                  if (c < e.maxTranslate())
                    a.freeMode.momentumBounce
                      ? (c + e.maxTranslate() < -m &&
                          (c = e.maxTranslate() - m),
                        (u = e.maxTranslate()),
                        (g = !0),
                        (d.allowMomentumBounce = !0))
                      : (c = e.maxTranslate()),
                      a.loop && a.centeredSlides && (h = !0);
                  else if (c > e.minTranslate())
                    a.freeMode.momentumBounce
                      ? (c - e.minTranslate() > m && (c = e.minTranslate() + m),
                        (u = e.minTranslate()),
                        (g = !0),
                        (d.allowMomentumBounce = !0))
                      : (c = e.minTranslate()),
                      a.loop && a.centeredSlides && (h = !0);
                  else if (a.freeMode.sticky) {
                    let t;
                    for (let e = 0; e < l.length; e += 1)
                      if (l[e] > -c) {
                        t = e;
                        break;
                      }
                    (c =
                      Math.abs(l[t] - c) < Math.abs(l[t - 1] - c) ||
                      "next" === e.swipeDirection
                        ? l[t]
                        : l[t - 1]),
                      (c = -c);
                  }
                  if (
                    (h &&
                      i("transitionEnd", () => {
                        e.loopFix();
                      }),
                    0 !== e.velocity)
                  ) {
                    if (
                      ((t = s
                        ? Math.abs((-c - e.translate) / e.velocity)
                        : Math.abs((c - e.translate) / e.velocity)),
                      a.freeMode.sticky)
                    ) {
                      const n = Math.abs((s ? -c : c) - e.translate),
                        i = e.slidesSizesGrid[e.activeIndex];
                      t =
                        n < i
                          ? a.speed
                          : n < 2 * i
                          ? 1.5 * a.speed
                          : 2.5 * a.speed;
                    }
                  } else if (a.freeMode.sticky) return void e.slideToClosest();
                  a.freeMode.momentumBounce && g
                    ? (e.updateProgress(u),
                      e.setTransition(t),
                      e.setTranslate(c),
                      e.transitionStart(!0, e.swipeDirection),
                      (e.animating = !0),
                      v(r, () => {
                        e &&
                          !e.destroyed &&
                          d.allowMomentumBounce &&
                          (n("momentumBounce"),
                          e.setTransition(a.speed),
                          setTimeout(() => {
                            e.setTranslate(u),
                              v(r, () => {
                                e && !e.destroyed && e.transitionEnd();
                              });
                          }, 0));
                      }))
                    : e.velocity
                    ? (n("_freeModeNoMomentumRelease"),
                      e.updateProgress(c),
                      e.setTransition(t),
                      e.setTranslate(c),
                      e.transitionStart(!0, e.swipeDirection),
                      e.animating ||
                        ((e.animating = !0),
                        v(r, () => {
                          e && !e.destroyed && e.transitionEnd();
                        })))
                    : e.updateProgress(c),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses();
                } else {
                  if (a.freeMode.sticky) return void e.slideToClosest();
                  a.freeMode && n("_freeModeNoMomentumRelease");
                }
                (!a.freeMode.momentum || p >= a.longSwipesMs) &&
                  (e.updateProgress(),
                  e.updateActiveIndex(),
                  e.updateSlidesClasses());
              }
            },
          },
        });
    },
    function ({ swiper: e, extendParams: t }) {
      let n, i, a;
      t({ grid: { rows: 1, fill: "column" } }),
        (e.grid = {
          initSlides: (t) => {
            const { slidesPerView: r } = e.params,
              { rows: s, fill: o } = e.params.grid;
            (i = n / s),
              (a = Math.floor(t / s)),
              (n = Math.floor(t / s) === t / s ? t : Math.ceil(t / s) * s),
              "auto" !== r && "row" === o && (n = Math.max(n, r * s));
          },
          updateSlide: (t, r, s, o) => {
            const { slidesPerGroup: l, spaceBetween: d } = e.params,
              { rows: p, fill: c } = e.params.grid;
            let u, g, m;
            if ("row" === c && l > 1) {
              const e = Math.floor(t / (l * p)),
                i = t - p * l * e,
                a = 0 === e ? l : Math.min(Math.ceil((s - e * p * l) / p), l);
              (m = Math.floor(i / a)),
                (g = i - m * a + e * l),
                (u = g + (m * n) / p),
                (r.style.order = u);
            } else
              "column" === c
                ? ((g = Math.floor(t / p)),
                  (m = t - g * p),
                  (g > a || (g === a && m === p - 1)) &&
                    ((m += 1), m >= p && ((m = 0), (g += 1))))
                : ((m = Math.floor(t / i)), (g = t - m * i));
            r.style[o("margin-top")] = 0 !== m ? d && `${d}px` : "";
          },
          updateWrapperSize: (t, i, a) => {
            const {
                spaceBetween: r,
                centeredSlides: s,
                roundLengths: o,
              } = e.params,
              { rows: l } = e.params.grid;
            if (
              ((e.virtualSize = (t + r) * n),
              (e.virtualSize = Math.ceil(e.virtualSize / l) - r),
              (e.wrapperEl.style[a("width")] = `${e.virtualSize + r}px`),
              s)
            ) {
              const t = [];
              for (let n = 0; n < i.length; n += 1) {
                let a = i[n];
                o && (a = Math.floor(a)),
                  i[n] < e.virtualSize + i[0] && t.push(a);
              }
              i.splice(0, i.length), i.push(...t);
            }
          },
        });
    },
    function ({ swiper: e }) {
      Object.assign(e, {
        appendSlide: _.bind(e),
        prependSlide: J.bind(e),
        addSlide: K.bind(e),
        removeSlide: ee.bind(e),
        removeAllSlides: te.bind(e),
      });
    },
    function ({ swiper: e, extendParams: t, on: n }) {
      t({ fadeEffect: { crossFade: !1 } }),
        ne({
          effect: "fade",
          swiper: e,
          on: n,
          setTranslate: () => {
            const { slides: t } = e;
            e.params.fadeEffect;
            for (let n = 0; n < t.length; n += 1) {
              const t = e.slides[n];
              let i = -t.swiperSlideOffset;
              e.params.virtualTranslate || (i -= e.translate);
              let a = 0;
              e.isHorizontal() || ((a = i), (i = 0));
              const r = e.params.fadeEffect.crossFade
                  ? Math.max(1 - Math.abs(t.progress), 0)
                  : 1 + Math.min(Math.max(t.progress, -1), 0),
                s = ie(0, t);
              (s.style.opacity = r),
                (s.style.transform = `translate3d(${i}px, ${a}px, 0px)`);
            }
          },
          setTransition: (t) => {
            const n = e.slides.map((e) => g(e));
            n.forEach((e) => {
              e.style.transitionDuration = `${t}ms`;
            }),
              ae({
                swiper: e,
                duration: t,
                transformElements: n,
                allSlides: !0,
              });
          },
          overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !e.params.cssMode,
          }),
        });
    },
    function ({ swiper: e, extendParams: t, on: n }) {
      t({
        cubeEffect: {
          slideShadows: !0,
          shadow: !0,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
      });
      const i = (e, t, n) => {
        let i = n
            ? e.querySelector(".swiper-slide-shadow-left")
            : e.querySelector(".swiper-slide-shadow-top"),
          a = n
            ? e.querySelector(".swiper-slide-shadow-right")
            : e.querySelector(".swiper-slide-shadow-bottom");
        i ||
          ((i = h("div", "swiper-slide-shadow-" + (n ? "left" : "top"))),
          e.append(i)),
          a ||
            ((a = h("div", "swiper-slide-shadow-" + (n ? "right" : "bottom"))),
            e.append(a)),
          i && (i.style.opacity = Math.max(-t, 0)),
          a && (a.style.opacity = Math.max(t, 0));
      };
      ne({
        effect: "cube",
        swiper: e,
        on: n,
        setTranslate: () => {
          const {
              el: t,
              wrapperEl: n,
              slides: a,
              width: r,
              height: s,
              rtlTranslate: o,
              size: l,
              browser: d,
            } = e,
            p = e.params.cubeEffect,
            c = e.isHorizontal(),
            u = e.virtual && e.params.virtual.enabled;
          let g,
            m = 0;
          p.shadow &&
            (c
              ? ((g = e.slidesEl.querySelector(".swiper-cube-shadow")),
                g ||
                  ((g = h("div", "swiper-cube-shadow")), e.slidesEl.append(g)),
                (g.style.height = `${r}px`))
              : ((g = t.querySelector(".swiper-cube-shadow")),
                g || ((g = h("div", "swiper-cube-shadow")), t.append(g))));
          for (let e = 0; e < a.length; e += 1) {
            const t = a[e];
            let n = e;
            u && (n = parseInt(t.getAttribute("data-swiper-slide-index"), 10));
            let r = 90 * n,
              s = Math.floor(r / 360);
            o && ((r = -r), (s = Math.floor(-r / 360)));
            const d = Math.max(Math.min(t.progress, 1), -1);
            let g = 0,
              h = 0,
              w = 0;
            n % 4 == 0
              ? ((g = 4 * -s * l), (w = 0))
              : (n - 1) % 4 == 0
              ? ((g = 0), (w = 4 * -s * l))
              : (n - 2) % 4 == 0
              ? ((g = l + 4 * s * l), (w = l))
              : (n - 3) % 4 == 0 && ((g = -l), (w = 3 * l + 4 * l * s)),
              o && (g = -g),
              c || ((h = g), (g = 0));
            const f = `rotateX(${c ? 0 : -r}deg) rotateY(${
              c ? r : 0
            }deg) translate3d(${g}px, ${h}px, ${w}px)`;
            d <= 1 &&
              d > -1 &&
              ((m = 90 * n + 90 * d), o && (m = 90 * -n - 90 * d)),
              (t.style.transform = f),
              p.slideShadows && i(t, d, c);
          }
          if (
            ((n.style.transformOrigin = `50% 50% -${l / 2}px`),
            (n.style["-webkit-transform-origin"] = `50% 50% -${l / 2}px`),
            p.shadow)
          )
            if (c)
              g.style.transform = `translate3d(0px, ${
                r / 2 + p.shadowOffset
              }px, ${-r / 2}px) rotateX(90deg) rotateZ(0deg) scale(${
                p.shadowScale
              })`;
            else {
              const e = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90),
                t =
                  1.5 -
                  (Math.sin((2 * e * Math.PI) / 360) / 2 +
                    Math.cos((2 * e * Math.PI) / 360) / 2),
                n = p.shadowScale,
                i = p.shadowScale / t,
                a = p.shadowOffset;
              g.style.transform = `scale3d(${n}, 1, ${i}) translate3d(0px, ${
                s / 2 + a
              }px, ${-s / 2 / i}px) rotateX(-90deg)`;
            }
          const w =
            (d.isSafari || d.isWebView) && d.needPerspectiveFix ? -l / 2 : 0;
          (n.style.transform = `translate3d(0px,0,${w}px) rotateX(${
            e.isHorizontal() ? 0 : m
          }deg) rotateY(${e.isHorizontal() ? -m : 0}deg)`),
            n.style.setProperty("--swiper-cube-translate-z", `${w}px`);
        },
        setTransition: (t) => {
          const { el: n, slides: i } = e;
          if (
            (i.forEach((e) => {
              (e.style.transitionDuration = `${t}ms`),
                e
                  .querySelectorAll(
                    ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                  )
                  .forEach((e) => {
                    e.style.transitionDuration = `${t}ms`;
                  });
            }),
            e.params.cubeEffect.shadow && !e.isHorizontal())
          ) {
            const e = n.querySelector(".swiper-cube-shadow");
            e && (e.style.transitionDuration = `${t}ms`);
          }
        },
        recreateShadows: () => {
          const t = e.isHorizontal();
          e.slides.forEach((e) => {
            const n = Math.max(Math.min(e.progress, 1), -1);
            i(e, n, t);
          });
        },
        getEffectParams: () => e.params.cubeEffect,
        perspective: () => !0,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: !1,
          virtualTranslate: !0,
        }),
      });
    },
    function ({ swiper: e, extendParams: t, on: n }) {
      t({ flipEffect: { slideShadows: !0, limitRotation: !0 } });
      const i = (t, n, i) => {
        let a = e.isHorizontal()
            ? t.querySelector(".swiper-slide-shadow-left")
            : t.querySelector(".swiper-slide-shadow-top"),
          r = e.isHorizontal()
            ? t.querySelector(".swiper-slide-shadow-right")
            : t.querySelector(".swiper-slide-shadow-bottom");
        a || (a = re(0, t, e.isHorizontal() ? "left" : "top")),
          r || (r = re(0, t, e.isHorizontal() ? "right" : "bottom")),
          a && (a.style.opacity = Math.max(-n, 0)),
          r && (r.style.opacity = Math.max(n, 0));
      };
      ne({
        effect: "flip",
        swiper: e,
        on: n,
        setTranslate: () => {
          const { slides: t, rtlTranslate: n } = e,
            a = e.params.flipEffect;
          for (let r = 0; r < t.length; r += 1) {
            const s = t[r];
            let o = s.progress;
            e.params.flipEffect.limitRotation &&
              (o = Math.max(Math.min(s.progress, 1), -1));
            const l = s.swiperSlideOffset;
            let d = -180 * o,
              p = 0,
              c = e.params.cssMode ? -l - e.translate : -l,
              u = 0;
            e.isHorizontal()
              ? n && (d = -d)
              : ((u = c), (c = 0), (p = -d), (d = 0)),
              (s.style.zIndex = -Math.abs(Math.round(o)) + t.length),
              a.slideShadows && i(s, o);
            const g = `translate3d(${c}px, ${u}px, 0px) rotateX(${p}deg) rotateY(${d}deg)`;
            ie(0, s).style.transform = g;
          }
        },
        setTransition: (t) => {
          const n = e.slides.map((e) => g(e));
          n.forEach((e) => {
            (e.style.transitionDuration = `${t}ms`),
              e
                .querySelectorAll(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .forEach((e) => {
                  e.style.transitionDuration = `${t}ms`;
                });
          }),
            ae({ swiper: e, duration: t, transformElements: n });
        },
        recreateShadows: () => {
          e.params.flipEffect,
            e.slides.forEach((t) => {
              let n = t.progress;
              e.params.flipEffect.limitRotation &&
                (n = Math.max(Math.min(t.progress, 1), -1)),
                i(t, n);
            });
        },
        getEffectParams: () => e.params.flipEffect,
        perspective: () => !0,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !e.params.cssMode,
        }),
      });
    },
    function ({ swiper: e, extendParams: t, on: n }) {
      t({
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          scale: 1,
          modifier: 1,
          slideShadows: !0,
        },
      }),
        ne({
          effect: "coverflow",
          swiper: e,
          on: n,
          setTranslate: () => {
            const { width: t, height: n, slides: i, slidesSizesGrid: a } = e,
              r = e.params.coverflowEffect,
              s = e.isHorizontal(),
              o = e.translate,
              l = s ? t / 2 - o : n / 2 - o,
              d = s ? r.rotate : -r.rotate,
              p = r.depth;
            for (let e = 0, t = i.length; e < t; e += 1) {
              const t = i[e],
                n = a[e],
                o = (l - t.swiperSlideOffset - n / 2) / n,
                c =
                  "function" == typeof r.modifier
                    ? r.modifier(o)
                    : o * r.modifier;
              let u = s ? d * c : 0,
                g = s ? 0 : d * c,
                m = -p * Math.abs(c),
                h = r.stretch;
              "string" == typeof h &&
                -1 !== h.indexOf("%") &&
                (h = (parseFloat(r.stretch) / 100) * n);
              let w = s ? 0 : h * c,
                f = s ? h * c : 0,
                y = 1 - (1 - r.scale) * Math.abs(c);
              Math.abs(f) < 0.001 && (f = 0),
                Math.abs(w) < 0.001 && (w = 0),
                Math.abs(m) < 0.001 && (m = 0),
                Math.abs(u) < 0.001 && (u = 0),
                Math.abs(g) < 0.001 && (g = 0),
                Math.abs(y) < 0.001 && (y = 0);
              const b = `translate3d(${f}px,${w}px,${m}px)  rotateX(${g}deg) rotateY(${u}deg) scale(${y})`;
              if (
                ((ie(0, t).style.transform = b),
                (t.style.zIndex = 1 - Math.abs(Math.round(c))),
                r.slideShadows)
              ) {
                let e = s
                    ? t.querySelector(".swiper-slide-shadow-left")
                    : t.querySelector(".swiper-slide-shadow-top"),
                  n = s
                    ? t.querySelector(".swiper-slide-shadow-right")
                    : t.querySelector(".swiper-slide-shadow-bottom");
                e || (e = re(0, t, s ? "left" : "top")),
                  n || (n = re(0, t, s ? "right" : "bottom")),
                  e && (e.style.opacity = c > 0 ? c : 0),
                  n && (n.style.opacity = -c > 0 ? -c : 0);
              }
            }
          },
          setTransition: (t) => {
            e.slides
              .map((e) => g(e))
              .forEach((e) => {
                (e.style.transitionDuration = `${t}ms`),
                  e
                    .querySelectorAll(
                      ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                    )
                    .forEach((e) => {
                      e.style.transitionDuration = `${t}ms`;
                    });
              });
          },
          perspective: () => !0,
          overwriteParams: () => ({ watchSlidesProgress: !0 }),
        });
    },
    function ({ swiper: e, extendParams: t, on: n }) {
      t({
        creativeEffect: {
          limitProgress: 1,
          shadowPerProgress: !1,
          progressMultiplier: 1,
          perspective: !0,
          prev: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1,
          },
          next: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1,
          },
        },
      });
      const i = (e) => ("string" == typeof e ? e : `${e}px`);
      ne({
        effect: "creative",
        swiper: e,
        on: n,
        setTranslate: () => {
          const { slides: t, wrapperEl: n, slidesSizesGrid: a } = e,
            r = e.params.creativeEffect,
            { progressMultiplier: s } = r,
            o = e.params.centeredSlides;
          if (o) {
            const t = a[0] / 2 - e.params.slidesOffsetBefore || 0;
            n.style.transform = `translateX(calc(50% - ${t}px))`;
          }
          for (let n = 0; n < t.length; n += 1) {
            const a = t[n],
              l = a.progress,
              d = Math.min(
                Math.max(a.progress, -r.limitProgress),
                r.limitProgress
              );
            let p = d;
            o ||
              (p = Math.min(
                Math.max(a.originalProgress, -r.limitProgress),
                r.limitProgress
              ));
            const c = a.swiperSlideOffset,
              u = [e.params.cssMode ? -c - e.translate : -c, 0, 0],
              g = [0, 0, 0];
            let m = !1;
            e.isHorizontal() || ((u[1] = u[0]), (u[0] = 0));
            let h = {
              translate: [0, 0, 0],
              rotate: [0, 0, 0],
              scale: 1,
              opacity: 1,
            };
            d < 0
              ? ((h = r.next), (m = !0))
              : d > 0 && ((h = r.prev), (m = !0)),
              u.forEach((e, t) => {
                u[t] = `calc(${e}px + (${i(h.translate[t])} * ${Math.abs(
                  d * s
                )}))`;
              }),
              g.forEach((e, t) => {
                g[t] = h.rotate[t] * Math.abs(d * s);
              }),
              (a.style.zIndex = -Math.abs(Math.round(l)) + t.length);
            const w = u.join(", "),
              f = `rotateX(${g[0]}deg) rotateY(${g[1]}deg) rotateZ(${g[2]}deg)`,
              y =
                p < 0
                  ? `scale(${1 + (1 - h.scale) * p * s})`
                  : `scale(${1 - (1 - h.scale) * p * s})`,
              b =
                p < 0
                  ? 1 + (1 - h.opacity) * p * s
                  : 1 - (1 - h.opacity) * p * s,
              v = `translate3d(${w}) ${f} ${y}`;
            if ((m && h.shadow) || !m) {
              let e = a.querySelector(".swiper-slide-shadow");
              if ((!e && h.shadow && (e = re(0, a)), e)) {
                const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
                e.style.opacity = Math.min(Math.max(Math.abs(t), 0), 1);
              }
            }
            const x = ie(0, a);
            (x.style.transform = v),
              (x.style.opacity = b),
              h.origin && (x.style.transformOrigin = h.origin);
          }
        },
        setTransition: (t) => {
          const n = e.slides.map((e) => g(e));
          n.forEach((e) => {
            (e.style.transitionDuration = `${t}ms`),
              e.querySelectorAll(".swiper-slide-shadow").forEach((e) => {
                e.style.transitionDuration = `${t}ms`;
              });
          }),
            ae({ swiper: e, duration: t, transformElements: n, allSlides: !0 });
        },
        perspective: () => e.params.creativeEffect.perspective,
        overwriteParams: () => ({
          watchSlidesProgress: !0,
          virtualTranslate: !e.params.cssMode,
        }),
      });
    },
    function ({ swiper: e, extendParams: t, on: n }) {
      t({
        cardsEffect: {
          slideShadows: !0,
          rotate: !0,
          perSlideRotate: 2,
          perSlideOffset: 8,
        },
      }),
        ne({
          effect: "cards",
          swiper: e,
          on: n,
          setTranslate: () => {
            const { slides: t, activeIndex: n } = e,
              i = e.params.cardsEffect,
              { startTranslate: a, isTouched: r } = e.touchEventsData,
              s = e.translate;
            for (let o = 0; o < t.length; o += 1) {
              const l = t[o],
                d = l.progress,
                p = Math.min(Math.max(d, -4), 4);
              let c = l.swiperSlideOffset;
              e.params.centeredSlides &&
                !e.params.cssMode &&
                (e.wrapperEl.style.transform = `translateX(${e.minTranslate()}px)`),
                e.params.centeredSlides &&
                  e.params.cssMode &&
                  (c -= t[0].swiperSlideOffset);
              let u = e.params.cssMode ? -c - e.translate : -c,
                g = 0;
              const m = -100 * Math.abs(p);
              let h = 1,
                w = -i.perSlideRotate * p,
                f = i.perSlideOffset - 0.75 * Math.abs(p);
              const y =
                  e.virtual && e.params.virtual.enabled
                    ? e.virtual.from + o
                    : o,
                b =
                  (y === n || y === n - 1) &&
                  p > 0 &&
                  p < 1 &&
                  (r || e.params.cssMode) &&
                  s < a,
                v =
                  (y === n || y === n + 1) &&
                  p < 0 &&
                  p > -1 &&
                  (r || e.params.cssMode) &&
                  s > a;
              if (b || v) {
                const e = (1 - Math.abs((Math.abs(p) - 0.5) / 0.5)) ** 0.5;
                (w += -28 * p * e),
                  (h += -0.5 * e),
                  (f += 96 * e),
                  (g = -25 * e * Math.abs(p) + "%");
              }
              if (
                ((u =
                  p < 0
                    ? `calc(${u}px + (${f * Math.abs(p)}%))`
                    : p > 0
                    ? `calc(${u}px + (-${f * Math.abs(p)}%))`
                    : `${u}px`),
                !e.isHorizontal())
              ) {
                const e = g;
                (g = u), (u = e);
              }
              const x = p < 0 ? "" + (1 + (1 - h) * p) : "" + (1 - (1 - h) * p),
                M = `\n        translate3d(${u}, ${g}, ${m}px)\n        rotateZ(${
                  i.rotate ? w : 0
                }deg)\n        scale(${x})\n      `;
              if (i.slideShadows) {
                let e = l.querySelector(".swiper-slide-shadow");
                e || (e = re(0, l)),
                  e &&
                    (e.style.opacity = Math.min(
                      Math.max((Math.abs(p) - 0.5) / 0.5, 0),
                      1
                    ));
              }
              (l.style.zIndex = -Math.abs(Math.round(d)) + t.length),
                (ie(0, l).style.transform = M);
            }
          },
          setTransition: (t) => {
            const n = e.slides.map((e) => g(e));
            n.forEach((e) => {
              (e.style.transitionDuration = `${t}ms`),
                e.querySelectorAll(".swiper-slide-shadow").forEach((e) => {
                  e.style.transitionDuration = `${t}ms`;
                });
            }),
              ae({ swiper: e, duration: t, transformElements: n });
          },
          perspective: () => !0,
          overwriteParams: () => ({
            watchSlidesProgress: !0,
            virtualTranslate: !e.params.cssMode,
          }),
        });
    },
  ];
  Z.use(se);
  const oe = [
      {
        src: "https://storage.googleapis.com/res-growth/product-assets/B07L6PWGQM/Tikmate.online_7039381478672747822.mp4",
        product: {
          brand: "Exerscribe",
          title: "vybe pro muscle massage gun",
          rating: 4.77,
          rating_count: 25,
          img: "https://m.media-amazon.com/images/I/416eiuA73cL._SL500_.jpg",
          url: "https://www.amazon.com/dp/B07L6PWGQM?linkCode=ogi&th=1&psc=1",
          summary:
            "Exerscribe Store’s muscle massage is a powerful, handheld massager with a variety of adjustable speeds and different attachments. It is designed to provide immediate pain relief for body, back and shoulder soreness. \n",
          pros: [
            "Operates quietly \n\n \n\n",
            "Portable ",
            "Has a long-lasting battery\n\n",
            "Comes with a carrying case\n",
          ],
          review:
            "This massager will really beat you up if you choose to use it at maximum energy...it provides deep tissue massage like nothing I have ever owned and I have had many massagers. I highly recommend this produuct highly...if your looking for a deep pain relieving massage this may be just what you're looking for?",
          faq: {
            answer: "Yes. It includes one lithium ion battery.",
            question: "Does this muscle massager come with a battery? ",
          },
        },
      },
      {
        src: "https://storage.googleapis.com/res-growth/product-assets/B07L6PWGQM/Getting good VYBES from the @zabbaapproved TikTok recently.mp4",
        product: {
          brand: "Exerscribe",
          title: "vybe pro muscle massage gun",
          rating: 4.77,
          rating_count: 25,
          img: "https://m.media-amazon.com/images/I/416eiuA73cL._SL500_.jpg",
          url: "https://www.amazon.com/dp/B07L6PWGQM?linkCode=ogi&th=1&psc=1",
          summary:
            "Exerscribe Store’s muscle massage is a powerful, handheld massager with a variety of adjustable speeds and different attachments. It is designed to provide immediate pain relief for body, back and shoulder soreness. \n",
          pros: [
            "Operates quietly \n\n \n\n",
            "Portable ",
            "Has a long-lasting battery\n\n",
            "Comes with a carrying case\n",
          ],
          review:
            "This massager will really beat you up if you choose to use it at maximum energy...it provides deep tissue massage like nothing I have ever owned and I have had many massagers. I highly recommend this produuct highly...if your looking for a deep pain relieving massage this may be just what you're looking for?",
          faq: {
            answer: "Yes. It includes one lithium ion battery.",
            question: "Does this muscle massager come with a battery? ",
          },
        },
      },
      {
        src: "https://storage.googleapis.com/res-growth/product-assets/B07L6PWGQM/302129957_1245744446278625_5123719407234161484_n.mp4",
        product: {
          brand: "Exerscribe",
          title: "vybe pro muscle massage gun",
          rating: 4.77,
          rating_count: 25,
          img: "https://m.media-amazon.com/images/I/416eiuA73cL._SL500_.jpg",
          url: "https://www.amazon.com/dp/B07L6PWGQM?linkCode=ogi&th=1&psc=1",
          summary:
            "Exerscribe Store’s muscle massage is a powerful, handheld massager with a variety of adjustable speeds and different attachments. It is designed to provide immediate pain relief for body, back and shoulder soreness. \n",
          pros: [
            "Operates quietly \n\n \n\n",
            "Portable ",
            "Has a long-lasting battery\n\n",
            "Comes with a carrying case\n",
          ],
          review:
            "This massager will really beat you up if you choose to use it at maximum energy...it provides deep tissue massage like nothing I have ever owned and I have had many massagers. I highly recommend this produuct highly...if your looking for a deep pain relieving massage this may be just what you're looking for?",
          faq: {
            answer: "Yes. It includes one lithium ion battery.",
            question: "Does this muscle massager come with a battery? ",
          },
        },
      },
      {
        src: "https://storage.googleapis.com/res-growth/product-assets/B07L6PWGQM/240394454_1062260357923885_1414765228367007267_n.mp4",
        product: {
          brand: "Exerscribe",
          title: "vybe pro muscle massage gun",
          rating: 4.77,
          rating_count: 25,
          img: "https://m.media-amazon.com/images/I/416eiuA73cL._SL500_.jpg",
          url: "https://www.amazon.com/dp/B07L6PWGQM?linkCode=ogi&th=1&psc=1",
          summary:
            "Exerscribe Store’s muscle massage is a powerful, handheld massager with a variety of adjustable speeds and different attachments. It is designed to provide immediate pain relief for body, back and shoulder soreness. \n",
          pros: [
            "Operates quietly \n\n \n\n",
            "Portable ",
            "Has a long-lasting battery\n\n",
            "Comes with a carrying case\n",
          ],
          review:
            "This massager will really beat you up if you choose to use it at maximum energy...it provides deep tissue massage like nothing I have ever owned and I have had many massagers. I highly recommend this produuct highly...if your looking for a deep pain relieving massage this may be just what you're looking for?",
          faq: {
            answer: "Yes. It includes one lithium ion battery.",
            question: "Does this muscle massager come with a battery? ",
          },
        },
      },
    ],
    le = "video-card-dynamic",
    de = "gallery";
  var pe =
      /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
    ce = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const ue = (e, t, n) => {
      const i = document.createElement("div");
      i.classList.add("swiper-slide");
      const a = document.createElement("div");
      a.classList.add("video-thumb");
      const r = document.createElement("img");
      r.classList.add("thumb-icon"),
        (r.src =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxMCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0wLjc1IDAuOTY2MjY4TDguODE1NDggNS41TDAuNzUgMTAuMDMzN1YwLjk2NjI2OFoiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41Ii8+DQo8L3N2Zz4NCg==");
      const s = document.createElement("video");
      return (
        s.classList.add(`${n}-video-thumb`),
        s.setAttribute("data-index", `${n}-${t}`),
        s.setAttribute("id", `${n}-video-thumb-${t}`),
        (s.src = e.src),
        a.appendChild(s),
        i.appendChild(a),
        i
      );
    },
    ge = (e, t, ...n) => {
      const i = document.createElement("div");
      i.classList.add("product-button-expandable-container"),
        i.setAttribute("id", `${t}-product-button-expandable-container`);
      const a = document.createElement("a");
      a.classList.add("product-button-expandable"),
        a.classList.add("pp-video-widget-track-link"),
        a.setAttribute("href", `${e.url}`),
        a.setAttribute("target", "_blank");
      const r = document.createElement("div");
      r.classList.add("product-image-container");
      const s = document.createElement("div");
      s.classList.add("product-image"),
        s.setAttribute("style", `background-image: url("${e.img}")`),
        r.appendChild(s),
        a.appendChild(r);
      const o = document.createElement("div");
      o.classList.add("title-container");
      const l = document.createElement("div");
      l.classList.add("product-title"),
        (l.innerText = e.title),
        o.appendChild(l);
      const d = document.createElement("div");
      d.classList.add("brand-name");
      const p = document.createElement("div");
      p.classList.add("verified-icon-container");
      const c = document.createElement("img");
      c.classList.add("verified-icon"),
        (c.src =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSI2IiB2aWV3Qm94PSIwIDAgOSA2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZD0iTTMuNTgxODMgMy45ODU3MUw3LjQyNSAwLjE0MTg0Nkw4LjQwMzkgMS4xMjAwNUwzLjU4MTgzIDUuOTQyMTJMMC44NTY0NDUgMy4yMTY3M0wxLjgzNDY1IDIuMjM4NTNMMy41ODE4MyAzLjk4NTcxWiIgZmlsbD0id2hpdGUiLz4NCjwvc3ZnPg0K"),
        c.setAttribute("alt", "verified icon"),
        p.appendChild(c),
        d.appendChild(p);
      const u = document.createElement("div");
      u.classList.add("brand-title"),
        (u.innerText = e.brand),
        d.appendChild(u),
        o.appendChild(d),
        a.appendChild(o);
      const g = document.createElement("div");
      g.classList.add("btn-link"),
        (g.innerText = "View Deal"),
        a.appendChild(g),
        i.appendChild(a);
      const m = document.createElement("div");
      m.classList.add("show-content-icon-container"),
        m.setAttribute("id", `${t}-show-content-icon-container`);
      const h = document.createElement("img");
      h.classList.add("show-content-icon"),
        h.setAttribute("id", `${t}-show-content-icon`),
        h.setAttribute("alt", "arrow icon"),
        (h.src =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDE0IDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNNy4yNTE3MiA1LjU3MTA5TDEyLjIwMTcgMC42MjEwOTRMMTMuNjE1NyAyLjAzNTA5TDcuMjUxNzIgOC4zOTkwOUwwLjg4NzcyMiAyLjAzNTA5TDIuMzAxNzIgMC42MjEwOTNMNy4yNTE3MiA1LjU3MTA5WiIgZmlsbD0iIzA5MTIxRiIvPg0KPC9zdmc+DQo="),
        m.appendChild(h),
        i.appendChild(m);
      const w = document.createElement("div");
      w.classList.add("product-content"),
        w.setAttribute("id", `${t}-product-content`),
        n.forEach((e) => {
          w.appendChild(e);
        });
      const f = document.createElement("script");
      return (
        (f.textContent = `\n  function showContent() {\n    document.getElementById(\`${t}-product-button-expandable-container\`).classList.toggle("active");\n    document.getElementById(\`${t}-show-content-icon\`).classList.toggle("active");\n    document.getElementById(\`${t}-product-content\`).classList.toggle("active");\n  }\n  document.getElementById(\`${t}-show-content-icon-container\`).addEventListener("click", showContent);\n\t`),
        w.appendChild(f),
        { productButtonExpandableContainer: i, productContent: w }
      );
    },
    me = (e, t) => {
      const n = document.createElement("div");
      n.classList.add("rating"),
        [1, 2, 3, 4, 5].forEach(() => {
          const e = document.createElement("div");
          e.classList.add("rating-icon");
          const t = document.createElement("img");
          (t.src =
            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI3IiB2aWV3Qm94PSIwIDAgOCA3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZD0iTTMuMTUzMDkgNC4yMjQzMUw2LjY3MjYxIDAuNzA0MTAyTDcuNjQ3MDcgMS42Nzc4N0wzLjE1MzA5IDYuMTcxODRMMC4xNzU3ODEgMy4xOTQ1M0wxLjE0OTU1IDIuMjIwNzZMMy4xNTMwOSA0LjIyNDMxWiIgZmlsbD0iIzQ2NUE2NiIvPg0KPC9zdmc+DQo="),
            t.setAttribute("alt", "rating icon"),
            e.appendChild(t),
            n.appendChild(e);
        });
      const i = document.createElement("div");
      i.classList.add("rating-title"),
        i.setAttribute("id", "info-sidebar-rating-title"),
        (i.innerText = e),
        n.appendChild(i);
      const a = document.createElement("div");
      return (
        a.classList.add("rating-count"),
        a.setAttribute("id", "info-sidebar-rating-count"),
        (a.innerText = "Based on " + t + " reviews"),
        n.appendChild(a),
        n
      );
    },
    he = (e) => {
      const t = document.createElement("div");
      t.classList.add("pros-wrapper");
      const n = document.createElement("h4");
      n.classList.add("title"), (n.innerText = "Pros"), t.appendChild(n);
      const i = document.createElement("ul");
      return (
        i.classList.add("pros"),
        i.setAttribute("id", "info-sidebar-pros"),
        e.forEach((e) => {
          const t = document.createElement("li");
          (t.innerText = e), i.appendChild(t);
        }),
        t.appendChild(i),
        t
      );
    },
    we = (e, t, n = "", i = !0, a) => {
      const r = document.createElement("div");
      r.classList.add("gallery-widget");
      const s = document.createElement("div");
      if (
        (s.classList.add("gallery-widget-title"),
        (s.innerText = e),
        r.appendChild(s),
        i)
      ) {
        const e = document.createElement("div");
        e.classList.add("gallery-widget-text-review"),
          (e.innerText = t),
          r.appendChild(e);
      } else {
        const e = document.createElement("div");
        e.classList.add("gallery-widget-text-title"),
          (e.innerText = n),
          r.appendChild(e);
        const i = document.createElement("div");
        i.classList.add("gallery-widget-text"),
          (i.innerText = t),
          r.appendChild(i);
      }
      const o = document.createElement("a");
      o.setAttribute("href", a.url),
        o.setAttribute("target", "_blank"),
        o.setAttribute("style", "text-decoration: none; color: white;"),
        o.classList.add("pp-video-widget-track-link");
      const l = ((e) => {
        const t = document.createElement("div");
        t.classList.add("product-button");
        const n = document.createElement("div");
        n.classList.add("product-image"),
          n.setAttribute("style", `background-image: url("${e.img}")`),
          t.appendChild(n);
        const i = document.createElement("div");
        i.classList.add("product-title-container");
        const a = document.createElement("div");
        return (
          a.classList.add("product-title"),
          (a.innerText = e.title),
          i.appendChild(a),
          t.appendChild(i),
          t
        );
      })(a);
      return o.appendChild(l), r.appendChild(o), r;
    },
    fe = () => {
      const e = document.createElement("div");
      e.classList.add("pp-gallery-container");
      const t = document.createElement("div");
      t.classList.add("gallery");
      const n = document.createElement("div");
      n.classList.add("gallery-media");
      const i = document.createElement("div");
      i.classList.add("content");
      const a = document.createElement("div");
      a.classList.add("icon-cross"), a.setAttribute("id", "icon-cross-desktop");
      const r = document.createElement("img");
      (r.src =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xMC45NTkgOC43NTMzTDE5LjYyNTkgMC4wODY0MjU4TDIwLjk1OSAxLjQxOTU1TDEyLjI5MjEgMTAuMDg2NEwyMC45NTkgMTguNzUzM0wxOS42MjU5IDIwLjA4NjRMMTAuOTU5IDExLjQxOTVMMi4yOTIxMSAyMC4wODY0TDAuOTU4OTg0IDE4Ljc1MzNMOS42MjU4NiAxMC4wODY0TDAuOTU4OTg0IDEuNDE5NTVMMi4yOTIxMSAwLjA4NjQyNThMMTAuOTU5IDguNzUzM1oiIGZpbGw9IndoaXRlIi8+DQo8L3N2Zz4NCg=="),
        a.appendChild(r),
        i.appendChild(a);
      const s = document.createElement("div");
      s.classList.add("gallery-background-container");
      const o = document.createElement("div");
      o.classList.add("swiper"), o.classList.add("gallery-background");
      const l = document.createElement("div");
      l.classList.add("swiper-wrapper"),
        oe.forEach((e, t) => {
          const n = ue(e, t, de);
          l.appendChild(n);
        }),
        o.appendChild(l),
        s.appendChild(o),
        i.appendChild(s);
      const d = document.createElement("div");
      d.classList.add("content-swiper");
      const p = document.createElement("div");
      p.classList.add("thumbs-swiper-container");
      const c = document.createElement("div");
      c.classList.add("swiper"), c.classList.add("thumbs-swiper");
      const u = document.createElement("div");
      u.classList.add("swiper-wrapper"),
        oe.forEach((e, t) => {
          const n = ue(e, t, de);
          u.appendChild(n);
        }),
        c.appendChild(u),
        p.appendChild(c),
        d.appendChild(p);
      const g = document.createElement("div");
      g.classList.add("gallery-swiper-container");
      const m = document.createElement("div");
      m.classList.add("swiper"), m.classList.add("gallery-swiper");
      const h = document.createElement("div");
      h.classList.add("swiper-wrapper"),
        oe.forEach((e, t) => {
          const n = ((e, t, n) => {
            const i = document.createElement("div");
            i.classList.add("swiper-slide"),
              i.classList.add("swiper-slide-gallery-video"),
              i.setAttribute("data-hash", `video-${t}`);
            const a = document.createElement("div");
            a.classList.add("video-card"), a.setAttribute("data-container", n);
            const r = document.createElement("div");
            r.classList.add("video-container");
            const s = document.createElement("video");
            s.classList.add("video"),
              s.classList.add(`${n}-video`),
              s.setAttribute("id", `${n}-video-${t}`),
              s.setAttribute("data-container", `${n}`),
              (s.src = e.src),
              (s.type = "video/mp4"),
              ce
                ? ((s.preload = "auto"),
                  s.setAttribute("muted", ""),
                  s.setAttribute("playsinline", ""))
                : ((s.preload = "metadata"),
                  (s.muted = !0),
                  (s.playsinline = !0));
            const o = document.createElement("span");
            (o.innerText = "Your browser does not support the video tag."),
              s.appendChild(o),
              r.appendChild(s),
              a.appendChild(r),
              i.appendChild(a);
            const l = document.createElement("div");
            l.classList.add("video-card-text-container");
            const d = document.createElement("div");
            d.classList.add("video-card-text-wrapper");
            const p = document.createElement("div");
            p.classList.add("brand"), (p.innerText = e.product.brand);
            const c = document.createElement("div");
            c.classList.add("title"),
              (c.innerText = e.product.title),
              d.appendChild(p),
              d.appendChild(c),
              l.appendChild(d);
            const u = document.createElement("div");
            u.classList.add("video-card-button-wrapper");
            const g = document.createElement("a");
            g.classList.add("video-card-button"),
              g.classList.add("pp-video-widget-track-link"),
              g.setAttribute("href", e.product.url),
              g.setAttribute("target", "_blank"),
              (g.innerText = "Vew deal"),
              u.appendChild(g),
              l.appendChild(u),
              i.appendChild(l);
            const m = document.createElement("div");
            m.classList.add("video-controls-container");
            const {
              buttonPlay: h,
              progressBar: w,
              buttonMute: f,
            } = ((e) => {
              const t = document.createElement("div");
              t.classList.add("video-controls-button-play"),
                t.classList.add(`${e}-button-play`);
              const n = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "svg"
              );
              n.setAttribute("class", `play ${e}-play`),
                n.setAttribute("viewBox", "0 0 9 12"),
                n.setAttribute("fill", "none"),
                n.setAttribute("xmlns", "http://www.w3.org/2000/svg");
              const i = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
              );
              i.setAttribute("stroke", "white"),
                i.setAttribute("stroke-width", "1.5"),
                i.setAttribute(
                  "d",
                  "M 0.754 1.462 L 9.387 5.996 L 0.754 10.53 L 0.754 1.462 Z"
                ),
                n.appendChild(i);
              const a = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "svg"
              );
              a.classList.add("pause"),
                a.classList.add(`${e}-pause`),
                a.setAttribute("viewBox", "0 0 500 500"),
                a.setAttribute("fill", "none"),
                a.setAttribute("xmlns", "http://www.w3.org/2000/svg");
              const r = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
              );
              r.setAttribute("style", "fill: rgb(255, 255, 255);"),
                r.setAttribute(
                  "d",
                  "M224,435.8V76.1c0-6.7-5.4-12.1-12.2-12.1h-71.6c-6.8,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6   C218.6,448,224,442.6,224,435.8z"
                );
              const s = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
              );
              s.setAttribute("style", "fill: rgb(255, 255, 255);"),
                s.setAttribute(
                  "d",
                  "M371.8,64h-71.6c-6.7,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6c6.7,0,12.2-5.4,12.2-12.2V76.1   C384,69.4,378.6,64,371.8,64z"
                );
              const o = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
              );
              o.setAttribute("stroke", "white"),
                o.setAttribute("stroke-width", "1.5"),
                o.setAttribute(
                  "transform",
                  "matrix(1, 0, 0, 1, 494.591288, 244.413555)"
                ),
                o.setAttribute(
                  "d",
                  "M0.822266 1.05269L8.88774 5.58643L0.822266 10.1202V1.05269Z"
                ),
                a.appendChild(r),
                a.appendChild(s),
                a.appendChild(o),
                t.appendChild(n),
                t.appendChild(a);
              const l = document.createElement("div");
              l.classList.add("video-controls-progress-bar"),
                l.classList.add(`${e}-progress-bar`);
              const d = document.createElement("div");
              d.classList.add("progress-fill"),
                d.classList.add(`${e}-progress-fill`),
                l.appendChild(d);
              const p = document.createElement("div");
              p.classList.add("video-controls-button-mute"),
                p.classList.add(`${e}-button-mute`);
              const c = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "svg"
              );
              c.classList.add("sound-off"),
                c.classList.add(`${e}-sound-off`),
                c.setAttribute("viewBox", "0 0 19 14"),
                c.setAttribute("fill", "none"),
                c.setAttribute("xmlns", "http://www.w3.org/2000/svg");
              const u = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
              );
              u.setAttribute("fill-rule", "evenodd"),
                u.setAttribute("clip-rule", "evenodd"),
                u.setAttribute(
                  "d",
                  "M7.10619 3.3169L4.44187 5.45654H1.61599V8.53516H4.44187L7.10619 10.6748V3.3169ZM3.88187 10.0745H0.831677C0.623664 10.0745 0.424171 9.99338 0.277083 9.84905C0.129996 9.70471 0.0473633 9.50894 0.0473633 9.30482V4.68688C0.0473633 4.48276 0.129996 4.28699 0.277083 4.14265C0.424171 3.99832 0.623664 3.91723 0.831677 3.91723H3.88187L8.03403 0.583078C8.09148 0.536858 8.16113 0.507603 8.23487 0.498718C8.3086 0.489834 8.3834 0.501686 8.45053 0.532894C8.51767 0.564103 8.5744 0.613384 8.6141 0.675C8.65381 0.736616 8.67486 0.808032 8.67481 0.880934V13.1108C8.67486 13.1837 8.65381 13.2551 8.6141 13.3167C8.5744 13.3783 8.51767 13.4276 8.45053 13.4588C8.3834 13.49 8.3086 13.5019 8.23487 13.493C8.16113 13.4841 8.09148 13.4548 8.03403 13.4086L3.88266 10.0745H3.88187ZM15.274 6.99585L18.0474 9.71735L16.9383 10.8056L14.165 8.08414L11.3917 10.8056L10.2827 9.71735L13.056 6.99585L10.2827 4.27435L11.3917 3.18605L14.165 5.90756L16.9383 3.18605L18.0474 4.27435L15.274 6.99585Z"
                ),
                u.setAttribute("fill", "white"),
                c.appendChild(u);
              const g = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "svg"
              );
              g.classList.add("sound-on"),
                g.classList.add(`${e}-sound-on`),
                g.setAttribute("viewBox", "0 0 19 14"),
                g.setAttribute("fill", "none"),
                g.setAttribute("xmlns", "http://www.w3.org/2000/svg");
              const m = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
              );
              m.setAttribute("style", "fill: rgb(255, 255, 255);"),
                m.setAttribute(
                  "d",
                  "M 15.076 0.393 C 16.917 1.99 18.061 4.366 18.061 7.009 C 18.061 9.652 16.917 12.027 15.076 13.625 L 14.517 13.055 C 16.207 11.616 17.271 9.438 17.271 7.008 C 17.271 4.58 16.207 2.401 14.517 0.961 L 15.076 0.393 Z M 12.757 2.746 C 13.962 3.758 14.718 5.293 14.718 7.008 C 14.718 8.723 13.962 10.257 12.757 11.27 L 12.2 10.702 C 13.252 9.848 13.926 8.506 13.926 7.009 C 13.926 5.511 13.252 4.174 12.197 3.316 L 12.757 2.746 Z"
                );
              const h = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
              );
              h.setAttribute("style", "fill: white;"),
                h.setAttribute(
                  "d",
                  "M 7.089 3.271 L 4.425 5.411 L 1.599 5.411 L 1.599 8.49 L 4.425 8.49 L 7.089 10.629 L 7.089 3.271 Z M 3.865 10.029 L 0.814 10.029 C 0.606 10.029 0.407 9.948 0.26 9.803 C 0.113 9.659 0.03 9.463 0.03 9.259 L 0.03 4.641 C 0.03 4.437 0.113 4.241 0.26 4.097 C 0.407 3.953 0.606 3.872 0.814 3.872 L 3.865 3.872 L 8.017 0.537 C 8.074 0.491 8.144 0.462 8.218 0.453 C 8.291 0.444 8.366 0.456 8.433 0.487 C 8.5 0.518 8.557 0.568 8.597 0.629 C 8.636 0.691 8.657 0.762 8.657 0.835 L 8.657 13.065 C 8.657 13.138 8.636 13.209 8.597 13.271 C 8.557 13.333 8.5 13.382 8.433 13.413 C 8.366 13.444 8.291 13.456 8.218 13.447 C 8.144 13.438 8.074 13.409 8.017 13.363 L 3.865 10.029 Z"
                );
              const w = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
              );
              return (
                w.setAttribute(
                  "style",
                  "fill: rgb(255, 253, 253); stroke: rgb(255, 253, 253);"
                ),
                w.setAttribute(
                  "d",
                  "M 7.192 2.924 C 6.91 3.005 6.472 3.442 6.322 3.668 C 6.275 3.738 6.022 3.785 5.957 3.85 C 5.44 4.368 4.712 4.702 4.218 5.197 C 4.16 5.255 3.855 5.225 3.755 5.225 C 3.459 5.225 3.078 5.239 2.745 5.239 C 2.555 5.239 1.925 5.46 1.805 5.281 C 1.784 5.249 1.466 5.264 1.441 5.281 C 1.292 5.38 1.225 5.595 1.09 5.73 C 1.027 5.793 1.187 5.967 1.202 5.982 C 1.228 6.008 1.202 6.206 1.202 6.249 C 1.202 6.501 1.202 6.753 1.202 7.006 C 1.202 7.432 1.134 8.186 1.371 8.423 C 1.459 8.511 1.38 8.769 1.469 8.857 C 1.489 8.878 1.847 8.872 1.862 8.857 C 1.994 8.725 2.659 8.717 2.9 8.717 C 3.278 8.717 3.657 8.717 4.036 8.717 C 4.1 8.717 4.337 8.64 4.386 8.689 C 4.552 8.855 4.671 9.029 4.849 9.208 C 4.912 9.271 5.053 9.257 5.116 9.32 C 5.54 9.744 5.974 10.084 6.49 10.428 C 6.576 10.485 6.953 10.639 6.995 10.723 C 7.004 10.741 7.262 10.899 7.262 10.863 C 7.262 10.782 7.414 10.458 7.472 10.4 C 7.511 10.362 7.455 10.159 7.444 10.148 C 7.258 9.961 7.29 9.461 7.29 9.11 C 7.29 8.887 7.276 8.269 7.402 8.142 C 7.417 8.127 7.417 7.793 7.402 7.777 C 7.349 7.724 7.29 7.487 7.29 7.399 C 7.29 7.282 7.216 6.743 7.29 6.669 C 7.415 6.545 7.402 5.854 7.402 5.645 C 7.402 5.12 7.458 4.709 7.458 4.215 C 7.458 4.126 7.515 3.697 7.458 3.64 C 7.281 3.462 7.3 3.24 7.178 2.994 C 7.163 2.965 7.009 2.96 7.009 2.924"
                ),
                g.appendChild(m),
                g.appendChild(h),
                g.appendChild(w),
                p.appendChild(c),
                p.appendChild(g),
                { buttonPlay: t, progressBar: l, buttonMute: p }
              );
            })(n);
            return (
              m.appendChild(h),
              m.appendChild(w),
              m.appendChild(f),
              i.appendChild(m),
              i
            );
          })(e, t, de);
          h.appendChild(n);
        }),
        m.appendChild(h),
        g.appendChild(m);
      const w = document.createElement("div");
      w.classList.add("swiper-pagination-fraction"), g.appendChild(w);
      const f = document.createElement("div");
      f.classList.add("gallery-mobile-header");
      const y = document.createElement("div");
      y.classList.add("icon-cross");
      const b = document.createElement("img");
      (b.src =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xMC45NTkgOC43NTMzTDE5LjYyNTkgMC4wODY0MjU4TDIwLjk1OSAxLjQxOTU1TDEyLjI5MjEgMTAuMDg2NEwyMC45NTkgMTguNzUzM0wxOS42MjU5IDIwLjA4NjRMMTAuOTU5IDExLjQxOTVMMi4yOTIxMSAyMC4wODY0TDAuOTU4OTg0IDE4Ljc1MzNMOS42MjU4NiAxMC4wODY0TDAuOTU4OTg0IDEuNDE5NTVMMi4yOTIxMSAwLjA4NjQyNThMMTAuOTU5IDguNzUzM1oiIGZpbGw9IndoaXRlIi8+DQo8L3N2Zz4NCg=="),
        y.appendChild(b),
        f.appendChild(y),
        g.appendChild(f);
      const v = document.createElement("div");
      v.classList.add("swiper-buttons"),
        v.setAttribute("id", "mobile-swiper-buttons");
      const x = document.createElement("div");
      x.classList.add("gallery-swiper-button-next");
      const M = document.createElement("img");
      (M.src =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iNyIgdmlld0JveD0iMCAwIDExIDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNNS4zNjg2OCAyLjI5NDk4TDEuMzY1MzIgNi4yOTgzNEwwLjIyMTczNyA1LjE1NDc2TDUuMzY4NjggMC4wMDc4MTIyOEwxMC41MTU2IDUuMTU0NzZMOS4zNzIwNCA2LjI5ODM0TDUuMzY4NjggMi4yOTQ5OFoiIGZpbGw9IndoaXRlIi8+DQo8L3N2Zz4NCg=="),
        x.appendChild(M);
      const E = document.createElement("div");
      E.classList.add("gallery-swiper-button-prev");
      const A = document.createElement("img");
      (A.src =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iNyIgdmlld0JveD0iMCAwIDExIDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNNS4zNjg2OCAyLjI5NDk4TDEuMzY1MzIgNi4yOTgzNEwwLjIyMTczNyA1LjE1NDc2TDUuMzY4NjggMC4wMDc4MTIyOEwxMC41MTU2IDUuMTU0NzZMOS4zNzIwNCA2LjI5ODM0TDUuMzY4NjggMi4yOTQ5OFoiIGZpbGw9IndoaXRlIi8+DQo8L3N2Zz4NCg=="),
        E.appendChild(A),
        v.appendChild(x),
        v.appendChild(E),
        g.appendChild(v),
        d.appendChild(g),
        i.appendChild(d);
      const T = document.createElement("div");
      T.classList.add("controls");
      const C = document.createElement("div");
      C.classList.add("swiper-buttons"),
        C.appendChild(x),
        C.appendChild(E),
        T.appendChild(C),
        i.appendChild(T),
        n.appendChild(i),
        t.appendChild(n);
      const L = ((e) => {
        const t = document.createElement("div");
        t.classList.add("gallery-sidebar");
        const n = document.createElement("div");
        n.classList.add("info-sidebar");
        const i = document.createElement("div");
        i.classList.add("product-info-button");
        const a = me(e.product.rating, e.product.rating_count),
          r = document.createElement("h4");
        r.classList.add("title"), (r.innerText = "About product");
        const s = document.createElement("div");
        s.classList.add("product-text"),
          s.setAttribute("id", "info-sidebar-product-text"),
          (s.innerText = e.product.summary);
        const o = he(e.product.pros),
          l = document.createElement("div");
        if (
          (l.classList.add("similar-products-wrapper"),
          e.similar_products && e.similar_products.length)
        ) {
          const t = document.createElement("h4");
          t.classList.add("title"),
            (t.innerText = "Similar products"),
            l.appendChild(t),
            e.similar_products.forEach((e, t) => {
              const n = me(e.rating, e.rating_count),
                i = document.createElement("h4");
              i.classList.add("title"), (i.innerText = "About product");
              const a = document.createElement("div");
              a.classList.add("product-text"),
                a.setAttribute("id", "info-sidebar-product-text"),
                (a.innerText = e.summary);
              const r = he(e.pros),
                s = document.createElement("a");
              s.classList.add("btn-link"),
                s.classList.add("pp-video-widget-track-link"),
                s.setAttribute("href", `${e.url}`),
                s.setAttribute("target", "_blank"),
                (s.innerText = "View Deal");
              const o = document.createElement("div");
              o.classList.add("on-amazon-text"), (o.innerText = "On Amazon");
              const { productButtonExpandableContainer: d, productContent: p } =
                ge(e, `info-sidebar-${t}`, n, i, a, r, s, o);
              l.appendChild(d), l.appendChild(p);
            });
        }
        const { productButtonExpandableContainer: d, productContent: p } = ge(
          e.product,
          "info-sidebar-header",
          a,
          r,
          s,
          o,
          l
        );
        i.appendChild(d), i.appendChild(p), n.appendChild(i);
        const c = we("Latest Review", e.product.review, null, !0, e.product);
        n.appendChild(c);
        const u = we(
          "FAQ",
          e.product.faq.answer,
          e.product.faq.question,
          !1,
          e.product
        );
        n.appendChild(u);
        const g = document.createElement("div");
        g.classList.add("bottom-section");
        const m = document.createElement("a");
        m.classList.add("btn-link"),
          m.classList.add("pp-video-widget-track-link"),
          m.setAttribute("href", `${e.product.url}`),
          m.setAttribute("target", "_blank"),
          (m.innerText = "View Deal"),
          g.appendChild(m);
        const h = document.createElement("div");
        return (
          h.classList.add("on-amazon-text"),
          (h.innerText = "On Amazon"),
          g.appendChild(h),
          n.appendChild(g),
          t.appendChild(n),
          t
        );
      })(oe[0]);
      t.appendChild(L);
      const S = ((e) => {
        const t = document.createElement("div");
        t.classList.add("pop-up-mobile-widget-container");
        const n = document.createElement("div");
        n.classList.add("pop-up-mobile-widget-header");
        const i = document.createElement("img");
        i.classList.add("product-image"), (i.src = e.img), n.appendChild(i);
        const a = document.createElement("div");
        a.classList.add("product-title-container");
        const r = document.createElement("div");
        r.classList.add("product-title"),
          (r.innerText = e.title),
          a.appendChild(r);
        const s = document.createElement("div");
        s.classList.add("brand-name");
        const o = document.createElement("div");
        o.classList.add("verified-icon-container");
        const l = document.createElement("img");
        l.classList.add("verified-icon"),
          (l.src =
            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSI2IiB2aWV3Qm94PSIwIDAgOSA2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZD0iTTMuNTgxODMgMy45ODU3MUw3LjQyNSAwLjE0MTg0Nkw4LjQwMzkgMS4xMjAwNUwzLjU4MTgzIDUuOTQyMTJMMC44NTY0NDUgMy4yMTY3M0wxLjgzNDY1IDIuMjM4NTNMMy41ODE4MyAzLjk4NTcxWiIgZmlsbD0id2hpdGUiLz4NCjwvc3ZnPg0K"),
          l.setAttribute("alt", "verified icon"),
          o.appendChild(l),
          s.appendChild(o);
        const d = document.createElement("div");
        d.classList.add("brand"),
          (d.innerText = e.brand),
          s.appendChild(d),
          a.appendChild(s),
          n.appendChild(a);
        const p = document.createElement("div");
        p.classList.add("button-container");
        const c = document.createElement("div");
        c.classList.add("widget-arrow-icon");
        const u = document.createElement("img");
        (u.src =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDE0IDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNNy4yNTE3MiA1LjU3MTA5TDEyLjIwMTcgMC42MjEwOTRMMTMuNjE1NyAyLjAzNTA5TDcuMjUxNzIgOC4zOTkwOUwwLjg4NzcyMiAyLjAzNTA5TDIuMzAxNzIgMC42MjEwOTNMNy4yNTE3MiA1LjU3MTA5WiIgZmlsbD0iIzA5MTIxRiIvPg0KPC9zdmc+DQo="),
          u.setAttribute("alt", "arrow icon"),
          c.appendChild(u),
          p.appendChild(c);
        const g = document.createElement("a");
        g.classList.add("btn-shop"),
          g.classList.add("pp-video-widget-track-link"),
          g.setAttribute("href", e.url),
          g.setAttribute("target", "_blank");
        const m = document.createElement("img");
        (m.src =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNyAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNi41MDcgMTIuOTU1OUMxNi41MDcgMTMuNTUxMSAxNi4xNzU0IDE0LjY5NzMgMTUuNDMxMiAxNS4zMjdDMTUuMjgyMSAxNS40NDE2IDE1LjEzMjMgMTUuMzc2OSAxNS4xOTc4IDE1LjIwOTlDMTUuNDE0OCAxNC42NzkzIDE1LjkxMTggMTMuNDUyIDE1LjY3ODQgMTMuMTY5NkMxNS41MTQ3IDEyLjk1NSAxNC44MzUxIDEyLjk3MDYgMTQuMjU1NCAxMy4wMjA1QzEzLjk5MDIgMTMuMDU0MSAxMy43NTg1IDEzLjA2OTcgMTMuNTc3NSAxMy4xMDY1QzEzLjQxMTMgMTMuMTIwNCAxMy4zNzY5IDEyLjk3MzEgMTMuNTQzOSAxMi44NTg0QzEzLjc1ODUgMTIuNzA3IDEzLjk5MDIgMTIuNTkyMyAxNC4yNTYzIDEyLjUwOEMxNS4xOTc4IDEyLjIyNjQgMTYuMjg2OCAxMi4zOTU4IDE2LjQ0MjMgMTIuNTc2QzE2LjQ3MTggMTIuNjEwMyAxNi41MDc4IDEyLjcwNyAxNi41MDc4IDEyLjk1NUwxNi41MDcgMTIuOTU1OVpNMTQuOTM0MiAxNC4wMTUzQzE0LjcxOCAxNC4xODA1IDE0LjQ5MSAxNC4zMzA5IDE0LjI1NDYgMTQuNDY1NkMxMi41MTcyIDE1LjUwOTUgMTAuMjY3MyAxNi4wNTY1IDguMzEyMTUgMTYuMDU2NUM1LjE2NTcgMTYuMDU2NSAyLjM1MTY2IDE0Ljg5NjMgMC4yMTYzNjUgMTIuOTU1QzAuMDMzNzg0MSAxMi44MDYgMC4xODUyNTMgMTIuNTg5OSAwLjM5ODk0NiAxMi43MDdDMi42OTk2MyAxNC4wNDk3IDUuNTQ3MjMgMTQuODYxOSA4LjQ5NTU1IDE0Ljg2MTlDMTAuMzUgMTQuODYxOSAxMi4zNTAyIDE0LjUxNDggMTQuMjU1NCAxMy43NjgxQzE0LjM4ODEgMTMuNzE4MSAxNC41MzcxIDEzLjY1MDIgMTQuNjY3MyAxMy42MDI3QzE0Ljk2NzcgMTMuNDY3NiAxNS4yMzIyIDEzLjgwMTYgMTQuOTM0MiAxNC4wMTUzWk05Ljg4MjUgNC45ODQ1M0M5Ljg4MjUgNC4xMzIyMSA5LjkxNjA3IDMuNjMwMzIgOS42MzM2IDMuMTk5NjZDOS4zODMwNyAyLjg0NTE0IDguOTUxNTkgMi42MzIyNyA4LjM0OTgxIDIuNjY1ODRDNy42OTY0NSAyLjcwMTg2IDYuOTk0NzggMy4xMzAwNyA2LjgxNTQ3IDMuOTE1MjRDNi43ODEwOSA0LjA5NTM3IDYuNjc1NDcgNC4yNzIyMiA2LjQ1ODUgNC4zMTA3TDQuNDY0MDMgNC4wNTY4OUM0LjMyMTU3IDQuMDI0MTQgNC4xMDU0MiAzLjkxNTI0IDQuMTc1ODMgMy42MzAzMkM0LjYwNDA0IDEuMzc3MTMgNi41Mjk3MyAwLjU5MTk0NyA4LjM0OTgxIDAuNDg2MzI4SDguNzc4MDFDOS43NzY4OSAwLjQ4NjMyOCAxMS4wNTk5IDAuNzcyMDcxIDExLjg4MTEgMS41MjEyM0MxMi44Nzc1IDIuNDUxMzIgMTIuNzcxOSAzLjcwMDczIDEyLjc3MTkgNS4wNTgyMlY4LjI3MzQ0QzEyLjc3MTkgOS4yMzc5MyAxMy4xNjI0IDkuNjY1MzEgMTMuNTU2MiAxMC4xNjhDMTMuNjYyNyAxMC4zNDczIDEzLjY5ODcgMTAuNTU4NiAxMy41MTk0IDEwLjcwNDNDMTMuMTI2NCAxMS4wNjA1IDEyLjM3OCAxMS43MDI0IDExLjk0OTggMTIuMDU4NUMxMS44MDc0IDEyLjE2NzQgMTEuNTUwMyAxMi4xNzg5IDExLjQ1MDQgMTIuMDk1NEMxMC44MiAxMS41NjczIDEwLjY2NiAxMS4yNzQyIDEwLjI3NTUgMTAuNzM3OUM5LjU5NTk0IDExLjQ1MSA5LjAyNjA5IDExLjg0NDggOC4zNDczNSAxMi4wNTg1QzcuODcwMDMgMTIuMTc5NyA3LjM3OTE1IDEyLjIzOTEgNi44ODY3MSAxMi4yMzU0QzUuMTc1NTIgMTIuMjM1NCAzLjgxOTY3IDExLjE2ODUgMy44MTk2NyA5LjA1ODYyQzMuODE5NjcgNy4zODEwMSA0LjcxMjExIDYuMjQwNDkgNi4wMzAyOSA1LjcwMDkzQzcuMzQ4NDggNS4xNjA1NiA5LjI2NDM1IDQuOTg4NjIgOS44ODE2OSA0Ljk4NTM1TDkuODgyNSA0Ljk4NDUzWk05LjQ5MTE0IDkuMjM1NDdDOS45MTY4OSA4LjUyMTUyIDkuODgxNjkgNy45MzY5NCA5Ljg4MTY5IDYuNjI3NzZDOS4zNDg2OCA2LjYyNzc2IDguODEyNCA2LjY2NDYgOC4zNDk4MSA2Ljc3MzQ5QzcuNDk0MjIgNy4wMjE1NyA2LjgxNTQ3IDcuNTYwMzEgNi44MTU0NyA4LjcwMTY1QzYuODE1NDcgOS41OTQwOCA3LjI3OTcgMTAuMjAxNiA4LjA2NDA2IDEwLjIwMTZDOC4xNzIxNCAxMC4yMDE2IDguMjY3MTEgMTAuMTg4NSA4LjM0OTgxIDEwLjE2NDdDOC44OTgzNyAxMC4wMTI1IDkuMjQwNjEgOS43MzczNiA5LjQ5MTE0IDkuMjM1NDdaIiBmaWxsPSIjMEQwRDBEIi8+DQo8L3N2Zz4NCg=="),
          m.setAttribute("alt", "amazon logo"),
          g.appendChild(m);
        const h = document.createElement("p");
        (h.innerText = "Shop"),
          g.appendChild(h),
          p.appendChild(g),
          n.appendChild(p),
          t.appendChild(n);
        const w = document.createElement("div");
        w.classList.add("pop-up-mobile-widget-content");
        const f = me(e.rating, e.rating_count);
        w.appendChild(f);
        const y = document.createElement("div");
        y.classList.add("product-text"),
          (y.innerText = e.summary),
          w.appendChild(y);
        const b = he(e.pros);
        w.appendChild(b);
        const v = document.createElement("a");
        v.classList.add("btn-link"),
          v.classList.add("pp-video-widget-track-link"),
          v.setAttribute("href", `${e.url}`),
          v.setAttribute("target", "_blank"),
          (v.innerText = "View Deal"),
          w.appendChild(v);
        const x = document.createElement("div");
        return (
          x.classList.add("on-amazon-text"),
          (x.innerText = "On Amazon"),
          w.appendChild(x),
          t.appendChild(w),
          t
        );
      })(oe[0].product);
      return t.appendChild(S), e.appendChild(t), e;
    };
  (() => {
    (() => {
      const e = document.createElement("style");
      (e.textContent =
        "\n@font-face {\n  font-family: 'swiper-icons';\n  src: url('data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA');\n  font-weight: 400;\n  font-style: normal;\n}\n/* FONT_END */\n:root {\n  --swiper-theme-color: #007aff;\n  /*\n  --swiper-preloader-color: var(--swiper-theme-color);\n  --swiper-wrapper-transition-timing-function: initial;\n  */\n}\n.swiper,\nswiper-container {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  /* Fix of Webkit flickering */\n  z-index: 1;\n  display: block;\n}\n.swiper-vertical > .swiper-wrapper {\n  flex-direction: column;\n}\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);\n  box-sizing: content-box;\n}\n.swiper-android .swiper-slide,\n.swiper-wrapper {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-horizontal {\n  touch-action: pan-y;\n}\n.swiper-vertical {\n  touch-action: pan-x;\n}\n.swiper-slide,\nswiper-slide {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n  display: block;\n}\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n/* Auto Height */\n.swiper-autoheight,\n.swiper-autoheight .swiper-slide {\n  height: auto;\n}\n.swiper-autoheight .swiper-wrapper {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n.swiper-backface-hidden .swiper-slide {\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n/* 3D Effects */\n.swiper-3d.swiper-css-mode .swiper-wrapper {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-wrapper {\n  transform-style: preserve-3d;\n}\n.swiper-3d {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-slide,\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom,\n.swiper-3d .swiper-cube-shadow {\n  transform-style: preserve-3d;\n}\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-3d .swiper-slide-shadow {\n  background: rgba(0, 0, 0, 0.15);\n}\n.swiper-3d .swiper-slide-shadow-left {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-right {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-top {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-bottom {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n/* CSS Mode */\n.swiper-css-mode > .swiper-wrapper {\n  overflow: auto;\n  scrollbar-width: none;\n  /* For Firefox */\n  -ms-overflow-style: none;\n  /* For Internet Explorer and Edge */\n}\n.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {\n  display: none;\n}\n.swiper-css-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: start start;\n}\n.swiper-horizontal.swiper-css-mode > .swiper-wrapper {\n  scroll-snap-type: x mandatory;\n}\n.swiper-vertical.swiper-css-mode > .swiper-wrapper {\n  scroll-snap-type: y mandatory;\n}\n.swiper-centered > .swiper-wrapper::before {\n  content: '';\n  flex-shrink: 0;\n  order: 9999;\n}\n.swiper-centered > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: center center;\n  scroll-snap-stop: always;\n}\n.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {\n  margin-inline-start: var(--swiper-centered-offset-before);\n}\n.swiper-centered.swiper-horizontal > .swiper-wrapper::before {\n  height: 100%;\n  min-height: 1px;\n  width: var(--swiper-centered-offset-after);\n}\n.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {\n  margin-block-start: var(--swiper-centered-offset-before);\n}\n.swiper-centered.swiper-vertical > .swiper-wrapper::before {\n  width: 100%;\n  min-width: 1px;\n  height: var(--swiper-centered-offset-after);\n}\n.swiper-lazy-preloader {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -21px;\n  margin-top: -21px;\n  z-index: 10;\n  transform-origin: 50%;\n  box-sizing: border-box;\n  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));\n  border-radius: 50%;\n  border-top-color: transparent;\n}\n.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,\nswiper-container:not(.swiper-watch-progress) .swiper-lazy-preloader,\n.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader {\n  animation: swiper-preloader-spin 1s infinite linear;\n}\n.swiper-lazy-preloader-white {\n  --swiper-preloader-color: #fff;\n}\n.swiper-lazy-preloader-black {\n  --swiper-preloader-color: #000;\n}\n@keyframes swiper-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.swiper-virtual .swiper-slide {\n  -webkit-backface-visibility: hidden;\n  transform: translateZ(0);\n}\n.swiper-virtual.swiper-css-mode .swiper-wrapper::after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n}\n.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after {\n  height: 1px;\n  width: var(--swiper-virtual-size);\n}\n.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after {\n  width: 1px;\n  height: var(--swiper-virtual-size);\n}\n:root {\n  --swiper-navigation-size: 44px;\n  /*\n  --swiper-navigation-top-offset: 50%;\n  --swiper-navigation-sides-offset: 10px;\n  --swiper-navigation-color: var(--swiper-theme-color);\n  */\n}\n.swiper-button-prev,\n.swiper-button-next {\n  position: absolute;\n  top: var(--swiper-navigation-top-offset, 50%);\n  width: calc(var(--swiper-navigation-size) / 44 * 27);\n  height: var(--swiper-navigation-size);\n  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));\n  z-index: 10;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--swiper-navigation-color, var(--swiper-theme-color));\n}\n.swiper-button-prev.swiper-button-disabled,\n.swiper-button-next.swiper-button-disabled {\n  opacity: 0.35;\n  cursor: auto;\n  pointer-events: none;\n}\n.swiper-button-prev.swiper-button-hidden,\n.swiper-button-next.swiper-button-hidden {\n  opacity: 0;\n  cursor: auto;\n  pointer-events: none;\n}\n.swiper-navigation-disabled .swiper-button-prev,\n.swiper-navigation-disabled .swiper-button-next {\n  display: none !important;\n}\n.swiper-button-prev:after,\n.swiper-button-next:after {\n  font-family: swiper-icons;\n  font-size: var(--swiper-navigation-size);\n  text-transform: none !important;\n  letter-spacing: 0;\n  font-variant: initial;\n  line-height: 1;\n}\n.swiper-button-prev,\n.swiper-rtl .swiper-button-next {\n  left: var(--swiper-navigation-sides-offset, 10px);\n  right: auto;\n}\n.swiper-button-prev:after,\n.swiper-rtl .swiper-button-next:after {\n  content: 'prev';\n}\n.swiper-button-next,\n.swiper-rtl .swiper-button-prev {\n  right: var(--swiper-navigation-sides-offset, 10px);\n  left: auto;\n}\n.swiper-button-next:after,\n.swiper-rtl .swiper-button-prev:after {\n  content: 'next';\n}\n.swiper-button-lock {\n  display: none;\n}\n:root {\n  /*\n  --swiper-pagination-color: var(--swiper-theme-color);\n  --swiper-pagination-left: auto;\n  --swiper-pagination-right: 8px;\n  --swiper-pagination-bottom: 8px;\n  --swiper-pagination-top: auto;\n  --swiper-pagination-fraction-color: inherit;\n  --swiper-pagination-progressbar-bg-color: rgba(0,0,0,0.25);\n  --swiper-pagination-progressbar-size: 4px;\n  --swiper-pagination-bullet-size: 8px;\n  --swiper-pagination-bullet-width: 8px;\n  --swiper-pagination-bullet-height: 8px;\n  --swiper-pagination-bullet-inactive-color: #000;\n  --swiper-pagination-bullet-inactive-opacity: 0.2;\n  --swiper-pagination-bullet-opacity: 1;\n  --swiper-pagination-bullet-horizontal-gap: 4px;\n  --swiper-pagination-bullet-vertical-gap: 6px;\n  */\n}\n.swiper-pagination {\n  position: absolute;\n  text-align: center;\n  transition: 300ms opacity;\n  transform: translate3d(0, 0, 0);\n  z-index: 10;\n}\n.swiper-pagination.swiper-pagination-hidden {\n  opacity: 0;\n}\n.swiper-pagination-disabled > .swiper-pagination,\n.swiper-pagination.swiper-pagination-disabled {\n  display: none !important;\n}\n/* Common Styles */\n.swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-horizontal > .swiper-pagination-bullets,\n.swiper-pagination-bullets.swiper-pagination-horizontal {\n  bottom: var(--swiper-pagination-bottom, 8px);\n  top: var(--swiper-pagination-top, auto);\n  left: 0;\n  width: 100%;\n}\n/* Bullets */\n.swiper-pagination-bullets-dynamic {\n  overflow: hidden;\n  font-size: 0;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transform: scale(0.33);\n  position: relative;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullet {\n  width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));\n  height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));\n  display: inline-block;\n  border-radius: 50%;\n  background: var(--swiper-pagination-bullet-inactive-color, #000);\n  opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);\n}\nbutton.swiper-pagination-bullet {\n  border: none;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  -webkit-appearance: none;\n          appearance: none;\n}\n.swiper-pagination-clickable .swiper-pagination-bullet {\n  cursor: pointer;\n}\n.swiper-pagination-bullet:only-child {\n  display: none !important;\n}\n.swiper-pagination-bullet-active {\n  opacity: var(--swiper-pagination-bullet-opacity, 1);\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n}\n.swiper-vertical > .swiper-pagination-bullets,\n.swiper-pagination-vertical.swiper-pagination-bullets {\n  right: var(--swiper-pagination-right, 8px);\n  left: var(--swiper-pagination-left, auto);\n  top: 50%;\n  transform: translate3d(0px, -50%, 0);\n}\n.swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet,\n.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: var(--swiper-pagination-bullet-vertical-gap, 6px) 0;\n  display: block;\n}\n.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,\n.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  top: 50%;\n  transform: translateY(-50%);\n  width: 8px;\n}\n.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,\n.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  display: inline-block;\n  transition: 200ms transform, 200ms top;\n}\n.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,\n.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);\n}\n.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,\n.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  left: 50%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,\n.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 200ms transform, 200ms left;\n}\n.swiper-horizontal.swiper-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet,\n:host(.swiper-horizontal.swiper-rtl) .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 200ms transform, 200ms right;\n}\n/* Fraction */\n.swiper-pagination-fraction {\n  color: var(--swiper-pagination-fraction-color, inherit);\n}\n/* Progress */\n.swiper-pagination-progressbar {\n  background: var(--swiper-pagination-progressbar-bg-color, rgba(0, 0, 0, 0.25));\n  position: absolute;\n  /*ADD_HOST*/\n}\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transform: scale(0);\n  transform-origin: left top;\n}\n.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  transform-origin: right top;\n}\n.swiper-horizontal > .swiper-pagination-progressbar,\n.swiper-pagination-progressbar.swiper-pagination-horizontal,\n.swiper-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,\n.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite {\n  width: 100%;\n  height: var(--swiper-pagination-progressbar-size, 4px);\n  left: 0;\n  top: 0;\n}\n.swiper-vertical > .swiper-pagination-progressbar,\n.swiper-pagination-progressbar.swiper-pagination-vertical,\n.swiper-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,\n.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite {\n  width: var(--swiper-pagination-progressbar-size, 4px);\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.swiper-pagination-lock {\n  display: none;\n}\n:root {\n  /*\n  --swiper-scrollbar-border-radius: 10px;\n  --swiper-scrollbar-top: auto;\n  --swiper-scrollbar-bottom: 4px;\n  --swiper-scrollbar-left: auto;\n  --swiper-scrollbar-right: 4px;\n  --swiper-scrollbar-sides-offset: 1%;\n  --swiper-scrollbar-bg-color: rgba(0, 0, 0, 0.1);\n  --swiper-scrollbar-drag-bg-color: rgba(0, 0, 0, 0.5);\n  --swiper-scrollbar-size: 4px;\n  */\n}\n.swiper-scrollbar {\n  border-radius: var(--swiper-scrollbar-border-radius, 10px);\n  position: relative;\n  -ms-touch-action: none;\n  background: var(--swiper-scrollbar-bg-color, rgba(0, 0, 0, 0.1));\n}\n.swiper-scrollbar-disabled > .swiper-scrollbar,\n.swiper-scrollbar.swiper-scrollbar-disabled {\n  display: none !important;\n}\n.swiper-horizontal > .swiper-scrollbar,\n.swiper-scrollbar.swiper-scrollbar-horizontal {\n  position: absolute;\n  left: var(--swiper-scrollbar-sides-offset, 1%);\n  bottom: var(--swiper-scrollbar-bottom, 4px);\n  top: var(--swiper-scrollbar-top, auto);\n  z-index: 50;\n  height: var(--swiper-scrollbar-size, 4px);\n  width: calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%));\n}\n.swiper-vertical > .swiper-scrollbar,\n.swiper-scrollbar.swiper-scrollbar-vertical {\n  position: absolute;\n  left: var(--swiper-scrollbar-left, auto);\n  right: var(--swiper-scrollbar-right, 4px);\n  top: var(--swiper-scrollbar-sides-offset, 1%);\n  z-index: 50;\n  width: var(--swiper-scrollbar-size, 4px);\n  height: calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%));\n}\n.swiper-scrollbar-drag {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  background: var(--swiper-scrollbar-drag-bg-color, rgba(0, 0, 0, 0.5));\n  border-radius: var(--swiper-scrollbar-border-radius, 10px);\n  left: 0;\n  top: 0;\n}\n.swiper-scrollbar-cursor-drag {\n  cursor: move;\n}\n.swiper-scrollbar-lock {\n  display: none;\n}\n.swiper-zoom-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.swiper-zoom-container > img,\n.swiper-zoom-container > svg,\n.swiper-zoom-container > canvas {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n}\n.swiper-slide-zoomed {\n  cursor: move;\n  touch-action: none;\n}\n/* a11y */\n.swiper .swiper-notification,\nswiper-container .swiper-notification {\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  opacity: 0;\n  z-index: -1000;\n}\n.swiper-free-mode > .swiper-wrapper {\n  transition-timing-function: ease-out;\n  margin: 0 auto;\n}\n.swiper-grid > .swiper-wrapper {\n  flex-wrap: wrap;\n}\n.swiper-grid-column > .swiper-wrapper {\n  flex-wrap: wrap;\n  flex-direction: column;\n}\n.swiper-fade.swiper-free-mode .swiper-slide {\n  transition-timing-function: ease-out;\n}\n.swiper-fade .swiper-slide {\n  pointer-events: none;\n  transition-property: opacity;\n}\n.swiper-fade .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-fade .swiper-slide-active,\n.swiper-fade .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-cube {\n  overflow: visible;\n}\n.swiper-cube .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  z-index: 1;\n  visibility: hidden;\n  transform-origin: 0 0;\n  width: 100%;\n  height: 100%;\n}\n.swiper-cube .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-cube.swiper-rtl .swiper-slide {\n  transform-origin: 100% 0;\n}\n.swiper-cube .swiper-slide-active,\n.swiper-cube .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-cube .swiper-slide-active,\n.swiper-cube .swiper-slide-next,\n.swiper-cube .swiper-slide-prev,\n.swiper-cube .swiper-slide-next + .swiper-slide {\n  pointer-events: auto;\n  visibility: visible;\n}\n.swiper-cube .swiper-slide-shadow-top,\n.swiper-cube .swiper-slide-shadow-bottom,\n.swiper-cube .swiper-slide-shadow-left,\n.swiper-cube .swiper-slide-shadow-right {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.swiper-cube .swiper-cube-shadow {\n  position: absolute;\n  left: 0;\n  bottom: 0px;\n  width: 100%;\n  height: 100%;\n  opacity: 0.6;\n  z-index: 0;\n}\n.swiper-cube .swiper-cube-shadow:before {\n  content: '';\n  background: #000;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  filter: blur(50px);\n}\n.swiper-flip {\n  overflow: visible;\n}\n.swiper-flip .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  z-index: 1;\n}\n.swiper-flip .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-flip .swiper-slide-active,\n.swiper-flip .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-flip .swiper-slide-shadow-top,\n.swiper-flip .swiper-slide-shadow-bottom,\n.swiper-flip .swiper-slide-shadow-left,\n.swiper-flip .swiper-slide-shadow-right {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.swiper-creative .swiper-slide {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  overflow: hidden;\n  transition-property: transform, opacity, height;\n}\n.swiper-cards {\n  overflow: visible;\n}\n.swiper-cards .swiper-slide {\n  transform-origin: center bottom;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  overflow: hidden;\n}\n\n\n\n\nbody.lock {\n  overflow: hidden;\n  width: calc(100% - 15px);\n}\n@media (max-width: 992px) {\n  body.lock {\n    width: 100%;\n  }\n}\n\n.pp-video-widget {\n  width: 180px;\n  height: 320px;\n  margin: 20px 0;\n  overflow: hidden;\n  box-shadow: 10px 5px 15px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  background-color: transparent;\n  position: fixed;\n  bottom: 2%;\n  left: 2%;\n  z-index: 100;\n  border: 1px solid #413f3f;\n}\n@media (max-width: 768px) {\n  .pp-video-widget {\n    position: fixed;\n    margin: 0;\n    bottom: 2%;\n    left: 2%;\n    height: 174px;\n    width: 98px;\n  }\n}\n.pp-video-widget .floating-card-video {\n  overflow: hidden;\n  background-color: #fff;\n  box-shadow: 10px 5px 15px rgba(0, 0, 0, 0.2);\n  width: 180px;\n  height: 320px;\n  border-radius: 10px;\n  margin: 0 0;\n}\n@media (max-width: 768px) {\n  .pp-video-widget .floating-card-video {\n    margin: 0;\n    height: 174px;\n    width: 98px;\n  }\n}\n.pp-video-widget .floating-card-video .swiper-slide {\n  position: relative;\n}\n.pp-video-widget .floating-card-video .swiper-slide .video-card {\n  background: transparent;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  z-index: 16;\n}\n@media (max-width: 768px) {\n  .pp-video-widget .floating-card-video .swiper-slide .video-card {\n    max-width: 100%;\n  }\n}\n.pp-video-widget .floating-card-video .swiper-slide .video-card .video-container {\n  position: relative;\n  padding-bottom: 177.78%;\n  height: 0;\n}\n@media (max-width: 768px) {\n  .pp-video-widget .floating-card-video .swiper-slide .video-card .video-container {\n    max-width: 100%;\n  }\n}\n.pp-video-widget .floating-card-video .swiper-slide .video-card .video-container .video {\n  background: transparent;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n@media (max-width: 768px) {\n  .pp-video-widget .floating-card-video .swiper-slide .video-card .video-container .video {\n    max-width: 100%;\n  }\n}\n.pp-video-widget .floating-card-video .video-overlay {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  z-index: 101;\n  cursor: pointer;\n  overflow: hidden;\n}\n.pp-video-widget .floating-card-video .video-overlay .video-hover-area {\n  height: 95%;\n}\n.pp-video-widget .floating-card-video .video-overlay .video-hover-area .button-mute {\n  position: absolute;\n  top: 1%;\n  right: 5%;\n  background-color: transparent;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  z-index: 103;\n}\n@media (max-width: 768px) {\n  .pp-video-widget .floating-card-video .video-overlay .video-hover-area .button-mute {\n    width: 20px;\n    height: 20px;\n    top: 3%;\n  }\n}\n@media (hover: hover) {\n  .pp-video-widget .floating-card-video .video-overlay .video-hover-area .button-mute:hover {\n    cursor: pointer;\n    border: 2px solid white;\n    border-radius: 50%;\n  }\n}\n.pp-video-widget .floating-card-video .video-overlay .video-hover-area .button-mute .sound-on {\n  display: none;\n}\n.pp-video-widget .floating-card-video .video-overlay .video-product-info {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: rgba(0, 0, 0, 0.4);\n  color: rgba(0, 0, 0, 0.4);\n  padding: 8px 10px;\n  height: 15%;\n  text-decoration: none;\n}\n@media (max-width: 768px) {\n  .pp-video-widget .floating-card-video .video-overlay .video-product-info {\n    padding: 5px 10px;\n  }\n}\n.pp-video-widget .floating-card-video .video-overlay .video-product-info .icon {\n  width: 11px;\n  height: 14px;\n}\n@media (max-width: 768px) {\n  .pp-video-widget .floating-card-video .video-overlay .video-product-info .icon {\n    display: none;\n  }\n}\n@keyframes rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.pp-video-widget .floating-card-video .video-overlay .video-product-info .btn-view-deal {\n  font-size: 10px;\n  padding: 4px;\n  width: 40%;\n  border-radius: 6px;\n  background-color: #4288f0;\n  color: #fff;\n  text-align: center;\n  transition: all 0.2s ease-out;\n  max-height: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  letter-spacing: 0;\n}\n@media (max-width: 768px) {\n  .pp-video-widget .floating-card-video .video-overlay .video-product-info .btn-view-deal {\n    width: 100%;\n    padding: 2px;\n    max-height: 20px;\n  }\n}\n@media (hover: hover) {\n  .pp-video-widget .floating-card-video .video-overlay .video-product-info .btn-view-deal:hover {\n    opacity: 0.7;\n  }\n}\n.pp-video-widget .floating-card-video .video-overlay .video-product-info .product-title {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 150%;\n  color: white;\n  word-wrap: normal;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  text-transform: capitalize;\n  white-space: nowrap;\n  width: 40%;\n  text-decoration: none;\n}\n@media (max-width: 768px) {\n  .pp-video-widget .floating-card-video .video-overlay .video-product-info .product-title {\n    display: none;\n  }\n}\n.pp-video-widget .floating-card-video .video-overlay .video-product-info .product-title span {\n  display: inline-block;\n  padding-left: 100%;\n  -webkit-animation: scroll 10s infinite linear;\n  -moz-animation: scroll 10s infinite linear;\n  animation: scroll 10s infinite linear;\n}\n@-webkit-keyframes scroll {\n  0% {\n    -webkit-transform: translate(0, 0);\n    transform: translate(0, 0);\n  }\n  100% {\n    -webkit-transform: translate(-100%, 0);\n    transform: translate(-100%, 0);\n  }\n}\n@-moz-keyframes scroll {\n  0% {\n    -moz-transform: translate(0, 0);\n    transform: translate(0, 0);\n  }\n  100% {\n    -moz-transform: translate(-100%, 0);\n    transform: translate(-100%, 0);\n  }\n}\n@keyframes scroll {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(-100%, 0);\n  }\n}\n.pp-video-widget .floating-card-video.moved .video-card .video-container .video {\n  cursor: move;\n}\n\n.pp-gallery-container {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 0;\n}\n.pp-gallery-container .gallery .gallery-media .content #icon-cross-desktop {\n  display: none;\n}\n.pp-gallery-container .gallery-sidebar {\n  display: none;\n}\n.pp-gallery-container .pop-up-mobile-widget-container {\n  display: none;\n  font-style: normal;\n  background: #ffffff;\n  height: 100%;\n  z-index: 20001;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\n.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-header {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  border-bottom: 1px solid #b6c2c5;\n  padding: 20px;\n  margin-bottom: 25px;\n  justify-content: space-between;\n}\n@media (max-height: 740px) {\n  .pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-header {\n    padding: 15px;\n  }\n}\n@media (min-height: 740px) {\n  .pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-header {\n    padding: 16px;\n  }\n}\n.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-header .product-image {\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-size: contain;\n  max-width: 60px;\n  max-height: 60px;\n  width: 100%;\n  height: 100%;\n  background-color: #ffffff;\n  box-shadow: 0 5px 20px rgba(21, 30, 34, 0.03);\n}\n.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-header .product-image img {\n  width: 100%;\n  height: 100%;\n}\n.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-header .product-title-container {\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 125%;\n  color: #060f14;\n  word-wrap: normal;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  text-transform: capitalize;\n  padding: 10px 0;\n}\n@media (max-height: 740px) {\n  .pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-header .product-title-container {\n    padding: 0;\n    font-size: 14px;\n  }\n}\n.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-header .product-title-container .product-title {\n  max-height: 38px;\n  overflow: hidden;\n  height: 100%;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-header .product-title-container .brand-name {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-header .product-title-container .brand-name .verified-icon-container {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #62d294;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-header .product-title-container .brand-name .verified-icon-container .verified-icon {\n  height: 60%;\n  width: 60%;\n}\n.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-header .product-title-container .brand-name .brand {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 190%;\n  color: #58717f;\n}\n.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-header .button-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n  justify-content: space-between;\n}\n.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-header .button-container .widget-arrow-icon {\n  transform: rotate(180deg);\n}\n.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-header .button-container .btn-shop {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  padding: 5px 15px;\n  background: #ffae3c;\n  border-radius: 4px;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 121%;\n  color: #0d0d0d;\n  text-decoration: none;\n  text-align: center;\n  max-height: 30px;\n  margin-top: 5px;\n}\n.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-header .button-container .btn-shop p {\n  margin-bottom: 0;\n}\n@media (max-height: 740px) {\n  .pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-header .button-container .btn-shop {\n    padding: 5px 10px;\n  }\n}\n.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content {\n  display: flex;\n  flex-direction: column;\n  padding: 0 20px 20px;\n}\n.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .rating {\n  display: flex;\n  align-items: end;\n  gap: 8px;\n  padding-bottom: 25px;\n  margin-bottom: 20px;\n  color: #214254;\n  border-bottom: 1px solid #b6c2c5;\n}\n.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .rating .rating-icon {\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #ffd645;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .rating .rating-title {\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: #060f14;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 100%;\n}\n.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .rating .rating-count {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 120%;\n  opacity: 0.5;\n  margin-left: auto;\n}\n.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .brand-logo {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .brand-logo .logo-container {\n  width: 40px;\n  height: 40px;\n}\n.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .brand-logo .logo-container .logo {\n  background-position: 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .brand-logo .verified-icon-container {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #62d294;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .brand-logo .verified-icon-container .verified-icon {\n  height: 60%;\n  width: 60%;\n}\n.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .product-text {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 155%;\n  padding-bottom: 25px;\n  margin-bottom: 25px;\n  color: #214254;\n  border-bottom: 1px solid #b6c2c5;\n}\n.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .product-text:last-of-type {\n  border-bottom: 0;\n}\n.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .review-text {\n  font-style: italic;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 155%;\n  padding-bottom: 25px;\n  margin-bottom: 25px;\n  overflow: hidden;\n  color: #214254;\n  border-bottom: 1px solid #b6c2c5;\n  padding: 0 20px;\n}\n.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .review-text:last-of-type {\n  border-bottom: 0;\n}\n.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .pros-wrapper {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  margin-bottom: 25px;\n}\n.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .pros-wrapper .pros-title {\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 165.02%;\n  color: #060f14;\n  margin-bottom: 10px;\n}\n.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .pros-wrapper .pros {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 160%;\n  color: #58717f;\n}\n.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .pros-wrapper .pros li {\n  margin-bottom: 10px;\n  min-height: 15px;\n  padding-left: 25px;\n  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik03LjQ0NjUzIDE0LjA3MDhDMy43MzY5OCAxNC4wNzA4IDAuNzI5OTggMTEuMDYzOCAwLjcyOTk4IDcuMzU0MjVDMC43Mjk5OCAzLjY0NDcgMy43MzY5OCAwLjYzNzY5NSA3LjQ0NjUzIDAuNjM3Njk1QzExLjE1NjEgMC42Mzc2OTUgMTQuMTYzMSAzLjY0NDcgMTQuMTYzMSA3LjM1NDI1QzE0LjE2MzEgMTEuMDYzOCAxMS4xNTYxIDE0LjA3MDggNy40NDY1MyAxNC4wNzA4Wk03LjQ0NjUzIDEyLjcyNzVDOC44NzE2MSAxMi43Mjc1IDEwLjIzODMgMTIuMTYxNCAxMS4yNDYgMTEuMTUzN0MxMi4yNTM3IDEwLjE0NiAxMi44MTk4IDguNzc5MzIgMTIuODE5OCA3LjM1NDI1QzEyLjgxOTggNS45MjkxOCAxMi4yNTM3IDQuNTYyNDcgMTEuMjQ2IDMuNTU0NzlDMTAuMjM4MyAyLjU0NzExIDguODcxNjEgMS45ODEwMSA3LjQ0NjUzIDEuOTgxMDFDNi4wMjE0NiAxLjk4MTAxIDQuNjU0NzYgMi41NDcxMSAzLjY0NzA4IDMuNTU0NzlDMi42Mzk0IDQuNTYyNDcgMi4wNzMyOSA1LjkyOTE4IDIuMDczMjkgNy4zNTQyNUMyLjA3MzI5IDguNzc5MzIgMi42Mzk0IDEwLjE0NiAzLjY0NzA4IDExLjE1MzdDNC42NTQ3NiAxMi4xNjE0IDYuMDIxNDYgMTIuNzI3NSA3LjQ0NjUzIDEyLjcyNzVaTTYuNzc2ODkgMTAuMDQwOUwzLjkyNzA2IDcuMTkxMDRMNC44NzY3OCA2LjI0MTMyTDYuNzc2ODkgOC4xNDE0M0wxMC41NzU4IDQuMzQxODdMMTEuNTI2MiA1LjI5MTU5TDYuNzc2ODkgMTAuMDQwOVoiIGZpbGw9IiM0Mjg4RjAiLz4NCjwvc3ZnPg0K) left 3px no-repeat;\n  overflow: hidden;\n}\n.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .btn-link {\n  font-size: 15px;\n  padding: 9px 0;\n  width: 65%;\n  height: 30px;\n  border: none;\n  color: #ffffff;\n  background-color: #4288f0;\n  border-radius: 6px;\n  margin-bottom: 15px;\n  transition: all 0.2s ease-out;\n  cursor: pointer;\n  text-decoration: none;\n  align-self: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .btn-link:active {\n  opacity: 0.7;\n}\n.pp-gallery-container .pop-up-mobile-widget-container .pop-up-mobile-widget-content .on-amazon-text {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 150%;\n  text-align: center;\n  color: rgba(70, 90, 102, 0.75);\n}\n.pp-gallery-container .swiper-button-next {\n  display: none;\n}\n.pp-gallery-container .swiper-button-prev {\n  display: none;\n}\n\n.pp-gallery-container.active {\n  position: fixed;\n  z-index: 20000;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: #060f14;\n}\n.pp-gallery-container.active .gallery {\n  box-shadow: 2px 2px 9px rgba(84, 84, 84, 0.5);\n  left: 0;\n  height: 100vh;\n  transition: opacity 0.4s ease-in-out;\n  overflow: hidden;\n  display: flex;\n}\n.pp-gallery-container.active .gallery .pop-up-mobile-widget-container {\n  display: none;\n}\n.pp-gallery-container.active .gallery .gallery-media {\n  flex: 3;\n}\n.pp-gallery-container.active .gallery .gallery-media .content {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  position: relative;\n}\n.pp-gallery-container.active .gallery .gallery-media .content #icon-cross-desktop {\n  cursor: pointer;\n  width: 40px;\n  min-height: 40px;\n  height: 40px;\n  background: rgba(84, 84, 84, 0.5);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  left: 35px;\n  top: 35px;\n  z-index: 16;\n}\n.pp-gallery-container.active .gallery .gallery-media .content #icon-cross-desktop:hover {\n  background: rgba(37, 37, 37, 0.6);\n  opacity: 0.7;\n}\n.pp-gallery-container.active .gallery .gallery-media .content #icon-cross-desktop img {\n  width: 20px;\n  height: 20px;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .gallery-background-container {\n  position: absolute;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  filter: blur(40px);\n  -webkit-filter: blur(40px);\n  opacity: 0.2;\n  z-index: 1;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .gallery-background-container .gallery-background {\n  width: 100%;\n  height: 100%;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .gallery-background-container .gallery-background .video-thumb {\n  height: 100%;\n  width: 100%;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .gallery-background-container .gallery-background .video-thumb img {\n  display: none;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .gallery-background-container .gallery-background .video-thumb video {\n  height: 100%;\n  width: 100%;\n  object-fit: fill;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .gallery-background-container .gallery-background .background-image {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper {\n  height: 100%;\n  width: 90%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .thumbs-swiper-container {\n  width: 15%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .thumbs-swiper-container .swiper.thumbs-swiper {\n  height: 300px;\n  width: 50%;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .thumbs-swiper-container .swiper.thumbs-swiper .swiper-slide {\n  width: 100%;\n  height: 100%;\n  opacity: 0.4;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .thumbs-swiper-container .swiper.thumbs-swiper .swiper-slide .thumb-icon {\n  position: absolute;\n  top: 35%;\n  left: 45%;\n  height: 16px;\n  width: 14px;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .thumbs-swiper-container .swiper.thumbs-swiper .swiper-slide .video-thumb {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .thumbs-swiper-container .swiper.thumbs-swiper .swiper-slide .video-thumb:hover {\n  cursor: pointer;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .thumbs-swiper-container .swiper.thumbs-swiper .swiper-slide .video-thumb video {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .thumbs-swiper-container .swiper.thumbs-swiper .swiper-slide .image-progress-container {\n  visibility: hidden;\n  position: absolute;\n  top: 20%;\n  left: 30%;\n  height: 40px;\n  width: 40px;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .thumbs-swiper-container .swiper.thumbs-swiper .swiper-slide .image-progress-container .image-progress {\n  width: 100%;\n  height: 100%;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .thumbs-swiper-container .swiper.thumbs-swiper .swiper-slide .image-progress-container .image-progress .image-progress-circle {\n  fill: transparent;\n  stroke-width: 20px;\n  stroke-dasharray: 62.8;\n  stroke-dashoffset: 62.8;\n  transform: rotate(-90deg);\n  transform-origin: center;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .thumbs-swiper-container .swiper.thumbs-swiper .swiper-slide img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .thumbs-swiper-container .swiper.thumbs-swiper .swiper-slide-thumb-active {\n  opacity: 1;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container {\n  width: 85%;\n  height: 100%;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .swiper-pagination-fraction {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 121%;\n  text-align: center;\n  color: #ffffff;\n  position: absolute;\n  top: 30%;\n  left: -43.5%;\n  z-index: 16;\n  height: 20px;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-mobile-header {\n  display: none;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container #mobile-swiper-buttons {\n  display: none;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper {\n  height: 100vh;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide {\n  width: 100%;\n  height: 100vh;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-card {\n  background: transparent;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  z-index: 16;\n}\n@media (max-width: 768px) {\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-card {\n    max-width: 100%;\n  }\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-card .video-container {\n  background: transparent;\n  position: relative;\n  padding-bottom: 177.78%;\n  height: 0;\n}\n@media (max-width: 768px) {\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-card .video-container {\n    max-width: 100%;\n  }\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-card .video-container .video {\n  background: transparent;\n  width: 100%;\n  height: 100vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  cursor: pointer;\n}\n@media (max-width: 768px) {\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-card .video-container .video {\n    max-width: 100%;\n  }\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .gallery-image-container {\n  width: 100%;\n  height: 100%;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .gallery-image-container .gallery-image {\n  display: flex;\n  align-items: center;\n  max-height: 100vh;\n  height: 100%;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .gallery-image-container .gallery-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-card-text-container {\n  position: absolute;\n  bottom: 10%;\n  left: 40%;\n  z-index: 16;\n  width: 80%;\n  color: #ffffff;\n  font-style: normal;\n  line-height: 150%;\n  transform: translate(-40%, 10%);\n  background-color: rgba(0, 0, 0, 0.2);\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 20px;\n  border-radius: 10px;\n}\n@media (max-width: 768px) {\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-card-text-container {\n    display: none;\n  }\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-card-text-container .video-card-text-wrapper .brand {\n  font-weight: 500;\n  font-size: 18px;\n  margin-bottom: 5px;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-card-text-container .video-card-text-wrapper .title {\n  font-weight: 400;\n  font-size: 16px;\n  opacity: 0.75;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-card-text-container .video-card-button-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-card-text-container .video-card-button-wrapper a:hover {\n  border-bottom-color: transparent;\n  color: white !important;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-card-text-container .video-card-button-wrapper .video-card-button {\n  background-color: #4288f0;\n  color: white;\n  text-decoration: none;\n  border-bottom-color: transparent;\n  padding: 4px 8px;\n  border-radius: 5px;\n  min-width: 83px;\n  text-align: center;\n  border: 1px solid white;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-card-text-container .video-card-button-wrapper .video-card-button:hover {\n  background-color: #000;\n  border: 1px solid white;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container {\n  position: absolute;\n  bottom: 3.7%;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 40px;\n  z-index: 16;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-button-play {\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  background: rgba(84, 84, 84, 0.5);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-button-play .play {\n  width: 29px;\n  height: 24px;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-button-play .pause {\n  width: 29px;\n  height: 24px;\n  display: none;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-button-play:hover {\n  background: rgba(37, 37, 37, 0.6);\n  opacity: 0.7;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-progress-bar {\n  width: 350px;\n  height: 5px;\n  border-radius: 10px;\n  background: #a5a5a5;\n  cursor: pointer;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-progress-bar .progress-fill {\n  background: #ffffff;\n  border-radius: inherit;\n  height: 100%;\n  width: 0;\n}\n@media (max-width: 1690px) {\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-progress-bar {\n    width: 300px;\n  }\n}\n@media (max-width: 1536px) {\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-progress-bar {\n    width: 250px;\n  }\n}\n@media (max-width: 1440px) {\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-progress-bar {\n    width: 230px;\n  }\n}\n@media (max-width: 1260px) {\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-progress-bar {\n    width: 200px;\n  }\n}\n@media (max-width: 992px) {\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-progress-bar {\n    width: 130px;\n  }\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-button-mute {\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  background: rgba(84, 84, 84, 0.5);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-button-mute .sound-on {\n  width: 29px;\n  height: 24px;\n  display: none;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-button-mute .sound-off {\n  width: 29px;\n  height: 24px;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-button-mute:hover {\n  background: rgba(37, 37, 37, 0.6);\n  opacity: 0.7;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .controls {\n  width: 10%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 35px 0;\n  z-index: 1;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .controls .swiper-buttons {\n  width: 10%;\n  height: 100%;\n  display: flex;\n  flex-direction: column-reverse;\n  gap: 50px;\n  justify-content: center;\n  align-items: center;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .controls .swiper-buttons .gallery-swiper-button-next {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  background: rgba(84, 84, 84, 0.5);\n  border-radius: 50%;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .controls .swiper-buttons .gallery-swiper-button-next img {\n  width: 20px;\n  height: 20px;\n  transform: rotate(180deg);\n}\n.pp-gallery-container.active .gallery .gallery-media .content .controls .swiper-buttons .gallery-swiper-button-next:hover {\n  cursor: pointer;\n  background: rgba(37, 37, 37, 0.6);\n  opacity: 0.7;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .controls .swiper-buttons .gallery-swiper-button-prev {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  background: rgba(84, 84, 84, 0.5);\n  border-radius: 50%;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .controls .swiper-buttons .gallery-swiper-button-prev img {\n  width: 20px;\n  height: 20px;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .controls .swiper-buttons .gallery-swiper-button-prev:hover {\n  cursor: pointer;\n  background: rgba(37, 37, 37, 0.6);\n  opacity: 0.7;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .controls .icon-share {\n  cursor: pointer;\n  width: 40px;\n  min-height: 40px;\n  height: 40px;\n  background: rgba(84, 84, 84, 0.5);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pp-gallery-container.active .gallery .gallery-media .content .controls .icon-share:hover {\n  background: rgba(37, 37, 37, 0.6);\n  opacity: 0.7;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar {\n  display: flex;\n  flex: 1;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button {\n  border: none;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container {\n  display: flex;\n  border-radius: 10px;\n  cursor: pointer;\n  border: none;\n  width: 420px;\n  padding-bottom: 20px;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container .product-button-expandable {\n  display: flex;\n  align-items: center;\n  gap: 30px;\n  padding: 20px;\n  width: 90%;\n  padding: 1px;\n  text-decoration: none;\n  color: white;\n}\n@media (max-width: 576px) {\n  .pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container .product-button-expandable {\n    gap: 10px;\n    padding: 20px 15px;\n  }\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container .product-button-expandable .product-image-container {\n  box-shadow: 0px 2.78195px 11.1278px rgba(21, 30, 34, 0.03);\n  width: 100%;\n  height: 60px;\n  width: 60px;\n}\n@media (max-width: 576px) {\n  .pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container .product-button-expandable .product-image-container {\n    height: 30px;\n    max-width: 30px;\n  }\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container .product-button-expandable .product-image-container .product-image {\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-size: contain;\n  width: 100%;\n  height: 100%;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container .product-button-expandable .title-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 5px;\n  width: 170px;\n  max-width: 170px;\n  min-width: 170px;\n  font-style: normal;\n}\n@media (max-width: 576px) {\n  .pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container .product-button-expandable .title-container {\n    max-width: 140px;\n  }\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container .product-button-expandable .title-container .product-title {\n  text-align: start;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 125%;\n  color: #060f14;\n  word-wrap: normal;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  text-transform: capitalize;\n  text-decoration: none;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container .product-button-expandable .title-container .product-title:hover {\n  color: #4288f0;\n}\n@media (max-width: 576px) {\n  .pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container .product-button-expandable .title-container .product-title {\n    font-size: 13px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container .product-button-expandable .title-container .brand-title {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 100%;\n  color: #58717f;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container .product-button-expandable .title-container .brand-title:hover {\n  color: #4288f0;\n}\n@media (max-width: 576px) {\n  .pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container .product-button-expandable .title-container .brand-title {\n    font-size: 12px;\n  }\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container .product-button-expandable .btn-link {\n  width: 140px;\n  height: 30px;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 121%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  color: #ffffff;\n  background: #4288f0;\n  border-radius: 6px;\n  cursor: pointer;\n  margin-left: auto;\n  transition: all 0.2s ease-out;\n  text-decoration: none;\n}\n@media (max-width: 576px) {\n  .pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container .product-button-expandable .btn-link {\n    width: 95px;\n  }\n}\n@media (hover: hover) {\n  .pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container .product-button-expandable .btn-link:hover {\n    opacity: 0.7;\n  }\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container .show-content-icon-container {\n  width: 10%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  border-left: none;\n  background-color: #fff;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container .show-content-icon-container .show-content-icon {\n  transition: all 0.2s;\n  transform: rotate(270deg);\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container .show-content-icon-container .show-content-icon.active {\n  transform: rotate(360deg);\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-button-expandable-container.active {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  margin-bottom: 0;\n  padding-bottom: 0;\n  text-decoration: none;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-content {\n  display: none;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-content.active {\n  display: flex;\n  flex-direction: column;\n  font-style: normal;\n  border: none;\n  padding: 0;\n  gap: 0;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-content.active .rating {\n  padding-top: 25px;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-content.active .pros-wrapper {\n  width: 100%;\n}\n@media (max-width: 576px) {\n  .pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-content.active .pros-wrapper {\n    width: 100%;\n    padding: 0 0 18px;\n  }\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-content.active .pros-wrapper .pros {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 160%;\n  color: #58717f;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .product-content.active .pros-wrapper .pros li {\n  margin-bottom: 10px;\n  min-height: 15px;\n  padding-left: 25px;\n  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik03LjQ0NjUzIDE0LjA3MDhDMy43MzY5OCAxNC4wNzA4IDAuNzI5OTggMTEuMDYzOCAwLjcyOTk4IDcuMzU0MjVDMC43Mjk5OCAzLjY0NDcgMy43MzY5OCAwLjYzNzY5NSA3LjQ0NjUzIDAuNjM3Njk1QzExLjE1NjEgMC42Mzc2OTUgMTQuMTYzMSAzLjY0NDcgMTQuMTYzMSA3LjM1NDI1QzE0LjE2MzEgMTEuMDYzOCAxMS4xNTYxIDE0LjA3MDggNy40NDY1MyAxNC4wNzA4Wk03LjQ0NjUzIDEyLjcyNzVDOC44NzE2MSAxMi43Mjc1IDEwLjIzODMgMTIuMTYxNCAxMS4yNDYgMTEuMTUzN0MxMi4yNTM3IDEwLjE0NiAxMi44MTk4IDguNzc5MzIgMTIuODE5OCA3LjM1NDI1QzEyLjgxOTggNS45MjkxOCAxMi4yNTM3IDQuNTYyNDcgMTEuMjQ2IDMuNTU0NzlDMTAuMjM4MyAyLjU0NzExIDguODcxNjEgMS45ODEwMSA3LjQ0NjUzIDEuOTgxMDFDNi4wMjE0NiAxLjk4MTAxIDQuNjU0NzYgMi41NDcxMSAzLjY0NzA4IDMuNTU0NzlDMi42Mzk0IDQuNTYyNDcgMi4wNzMyOSA1LjkyOTE4IDIuMDczMjkgNy4zNTQyNUMyLjA3MzI5IDguNzc5MzIgMi42Mzk0IDEwLjE0NiAzLjY0NzA4IDExLjE1MzdDNC42NTQ3NiAxMi4xNjE0IDYuMDIxNDYgMTIuNzI3NSA3LjQ0NjUzIDEyLjcyNzVaTTYuNzc2ODkgMTAuMDQwOUwzLjkyNzA2IDcuMTkxMDRMNC44NzY3OCA2LjI0MTMyTDYuNzc2ODkgOC4xNDE0M0wxMC41NzU4IDQuMzQxODdMMTEuNTI2MiA1LjI5MTU5TDYuNzc2ODkgMTAuMDQwOVoiIGZpbGw9IiM0Mjg4RjAiLz4NCjwvc3ZnPg0K) left 3px no-repeat;\n  overflow: hidden;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .similar-products-wrapper {\n  display: flex;\n  flex-direction: column;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .similar-products-wrapper .title {\n  margin-bottom: 10px;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .similar-products-wrapper .product-button-expandable-container {\n  display: flex;\n  border: 1px solid #e0e9ec;\n  border-radius: 6px;\n  margin-bottom: 10px;\n  padding-bottom: 0;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .similar-products-wrapper .product-button-expandable-container .product-button-expandable {\n  gap: 20px;\n  padding: 15px;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .similar-products-wrapper .product-button-expandable-container .product-button-expandable .product-image-container {\n  height: 50px;\n  width: 50px;\n  min-width: 50px;\n  max-width: 50px;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .similar-products-wrapper .product-button-expandable-container .product-button-expandable .title-container {\n  max-height: 50px;\n  max-width: none;\n  width: 80%;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .similar-products-wrapper .product-button-expandable-container .product-button-expandable .title-container .product-title {\n  line-height: 125%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  font-size: 15px;\n  text-decoration: none;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .similar-products-wrapper .product-button-expandable-container .show-content-icon-container {\n  border-left: 1px solid #e0e9ec;\n  background-color: #fafafa;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .similar-products-wrapper .product-button-expandable-container.active {\n  margin-bottom: 0;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .similar-products-wrapper .product-content {\n  display: none;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .similar-products-wrapper .product-content.active {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 0 15px;\n  border-left: 1px solid #e0e9ec;\n  border-right: 1px solid #e0e9ec;\n  border-bottom: 1px solid #e0e9ec;\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n  margin-bottom: 10px;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .similar-products-wrapper .product-content.active .pros-wrapper {\n  border-bottom: 0;\n  padding-bottom: 0;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .similar-products-wrapper .product-content.active .btn-link {\n  font-size: 15px;\n  padding: 9px 0;\n  width: 100%;\n  height: 30px;\n  border: none;\n  color: #ffffff;\n  background-color: #4288f0;\n  border-radius: 6px;\n  transition: all 0.2s ease-out;\n  cursor: pointer;\n  text-decoration: none;\n  align-self: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .similar-products-wrapper .product-content.active .btn-link:hover {\n  opacity: 0.7;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .product-info-button .similar-products-wrapper .product-content.active .on-amazon-text {\n  margin-bottom: 10px;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 150%;\n  text-align: center;\n  color: rgba(70, 90, 102, 0.75);\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar {\n  display: flex;\n  font-style: normal;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  background-color: #ffffff;\n  padding: 35px 30px 10px;\n  gap: 10px;\n  overflow-y: auto;\n  border-top-left-radius: 12px;\n  border-bottom-left-radius: 12px;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar::-webkit-scrollbar {\n  visibility: visible;\n  background-color: white;\n  width: 4px;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar::-webkit-scrollbar-thumb {\n  background-color: #4288f0;\n  border-radius: 10px;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-bottom: 25px;\n  border-bottom: 1px solid #b6c2c5;\n  margin-bottom: 20px;\n  cursor: pointer;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .header .product-image-container {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .header .product-image-container .product-image {\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-size: contain;\n  max-width: 60px;\n  max-height: 60px;\n  height: 100%;\n  width: auto;\n  background-color: #ffffff;\n  box-shadow: 0 5px 20px rgba(21, 30, 34, 0.03);\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .header .product-image-container .product-image img {\n  width: 100%;\n  height: 100%;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .header .product-image-container .product-title-container {\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 125%;\n  color: #060f14;\n  word-wrap: normal;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  text-transform: capitalize;\n  text-decoration: none;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .header .close-sidebar-icon {\n  height: 15px;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .brand-name {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .brand-name .verified-icon-container {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #62d294;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .brand-name .verified-icon-container .verified-icon {\n  height: 60%;\n  width: 60%;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .brand-name .brand {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 190%;\n  color: #58717f;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .rating {\n  display: flex;\n  align-items: end;\n  gap: 8px;\n  padding-bottom: 25px;\n  margin-bottom: 20px;\n  color: #214254;\n  border-bottom: 1px solid #b6c2c5;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .rating .rating-icon {\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #ffd645;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .rating .rating-title {\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: #060f14;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 100%;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .rating .rating-count {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 120%;\n  opacity: 0.5;\n  margin-left: auto;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .title {\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 165.02%;\n  color: #060f14;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .product-text {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 155%;\n  padding-bottom: 25px;\n  margin-bottom: 20px;\n  color: #214254;\n  border-bottom: 1px solid #b6c2c5;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .product-text:last-of-type {\n  border-bottom: 0;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .review-text {\n  font-style: italic;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 155%;\n  padding-bottom: 25px;\n  margin-bottom: 20px;\n  color: #214254;\n  border-bottom: 1px solid #b6c2c5;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .review-text:last-of-type {\n  border-bottom: 0;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .pros-wrapper {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  border-bottom: 1px solid #b6c2c5;\n  margin-bottom: 20px;\n  padding-bottom: 25px;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .pros-wrapper .pros {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 160%;\n  color: #58717f;\n  margin-top: 10px;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .pros-wrapper .pros li {\n  margin-bottom: 10px;\n  min-height: 15px;\n  padding-left: 25px;\n  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik03LjQ0NjUzIDE0LjA3MDhDMy43MzY5OCAxNC4wNzA4IDAuNzI5OTggMTEuMDYzOCAwLjcyOTk4IDcuMzU0MjVDMC43Mjk5OCAzLjY0NDcgMy43MzY5OCAwLjYzNzY5NSA3LjQ0NjUzIDAuNjM3Njk1QzExLjE1NjEgMC42Mzc2OTUgMTQuMTYzMSAzLjY0NDcgMTQuMTYzMSA3LjM1NDI1QzE0LjE2MzEgMTEuMDYzOCAxMS4xNTYxIDE0LjA3MDggNy40NDY1MyAxNC4wNzA4Wk03LjQ0NjUzIDEyLjcyNzVDOC44NzE2MSAxMi43Mjc1IDEwLjIzODMgMTIuMTYxNCAxMS4yNDYgMTEuMTUzN0MxMi4yNTM3IDEwLjE0NiAxMi44MTk4IDguNzc5MzIgMTIuODE5OCA3LjM1NDI1QzEyLjgxOTggNS45MjkxOCAxMi4yNTM3IDQuNTYyNDcgMTEuMjQ2IDMuNTU0NzlDMTAuMjM4MyAyLjU0NzExIDguODcxNjEgMS45ODEwMSA3LjQ0NjUzIDEuOTgxMDFDNi4wMjE0NiAxLjk4MTAxIDQuNjU0NzYgMi41NDcxMSAzLjY0NzA4IDMuNTU0NzlDMi42Mzk0IDQuNTYyNDcgMi4wNzMyOSA1LjkyOTE4IDIuMDczMjkgNy4zNTQyNUMyLjA3MzI5IDguNzc5MzIgMi42Mzk0IDEwLjE0NiAzLjY0NzA4IDExLjE1MzdDNC42NTQ3NiAxMi4xNjE0IDYuMDIxNDYgMTIuNzI3NSA3LjQ0NjUzIDEyLjcyNzVaTTYuNzc2ODkgMTAuMDQwOUwzLjkyNzA2IDcuMTkxMDRMNC44NzY3OCA2LjI0MTMyTDYuNzc2ODkgOC4xNDE0M0wxMC41NzU4IDQuMzQxODdMMTEuNTI2MiA1LjI5MTU5TDYuNzc2ODkgMTAuMDQwOVoiIGZpbGw9IiM0Mjg4RjAiLz4NCjwvc3ZnPg0K) left 3px no-repeat;\n  overflow: hidden;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .gallery-widget {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  font-style: normal;\n  font-weight: 400;\n  padding: 15px 20px;\n  border: 1px solid #e0e9ec;\n  border-radius: 10px;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .gallery-widget .gallery-widget-title {\n  font-size: 10px;\n  line-height: 165.02%;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #58717f;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .gallery-widget .gallery-widget-image {\n  height: 200px;\n  width: 100%;\n  border-radius: 8px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .gallery-widget .gallery-widget-text-title {\n  font-weight: 500;\n  font-size: 17px;\n  line-height: 165.02%;\n  color: #060f14;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .gallery-widget .gallery-widget-text {\n  font-size: 12px;\n  line-height: 165.02%;\n  color: #214254;\n  max-height: 80px;\n  overflow: hidden;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .gallery-widget .gallery-widget-text-review {\n  font-size: 18px;\n  line-height: 155%;\n  color: #13163a;\n  max-height: 220px;\n  overflow: hidden;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .gallery-widget .read-more {\n  font-size: 12px;\n  line-height: 180%;\n  text-align: center;\n  color: #4288f0;\n  cursor: pointer;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .bottom-section {\n  position: sticky;\n  background: white;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 25px 0;\n  border-radius: 10px;\n  border: 1px solid #e0e9ec;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .bottom-section .btn-link {\n  font-size: 15px;\n  padding: 9px 0;\n  width: 85%;\n  height: 30px;\n  border: none;\n  color: #ffffff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #4288f0;\n  border-radius: 6px;\n  margin-bottom: 15px;\n  transition: all 0.2s ease-out;\n  cursor: pointer;\n  text-decoration: none;\n  align-self: center;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .bottom-section .btn-link:hover {\n  opacity: 0.7;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .bottom-section .on-amazon-text {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 150%;\n  text-align: center;\n  color: rgba(70, 90, 102, 0.75);\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .product-button {\n  display: flex;\n  align-items: center;\n  border: 1px solid #e7f2f7;\n  border-radius: 5px;\n  padding: 11px 14px;\n  width: 100%;\n  text-decoration: none;\n  color: white;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .product-button:hover {\n  cursor: pointer;\n  border: 1px solid #4288f0;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .product-button .product-image {\n  min-width: 27px;\n  height: 27px;\n  margin-right: 15px;\n  background-color: #ffffff;\n  box-shadow: 0 5px 20px rgba(21, 30, 34, 0.03);\n  border-radius: 3px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .product-button .product-title-container {\n  display: flex;\n  flex-direction: column;\n  text-decoration: none;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .product-button .product-title-container .product-title {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 11px;\n  line-height: 150%;\n  color: #060f14;\n  word-wrap: normal;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  text-transform: capitalize;\n  text-decoration: none;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .product-button .product-title-container .brand-title {\n  font-size: 12px;\n  color: #58717f;\n  font-weight: 400;\n  line-height: 150%;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .product-button .btn-link {\n  font-size: 12px;\n  font-weight: 500;\n  padding: 9px 0;\n  width: 40%;\n  height: 30px;\n  border: none;\n  color: #ffffff;\n  text-align: center;\n  background-color: #4288f0;\n  border-radius: 6px;\n  transition: all 0.2s ease-out;\n  cursor: pointer;\n  text-decoration: none;\n  align-self: center;\n  margin-left: auto;\n}\n.pp-gallery-container.active .gallery .gallery-sidebar .info-sidebar .product-button .btn-link:hover {\n  opacity: 0.7;\n}\n\n@media (max-width: 768px) {\n  .pp-gallery-container.active .gallery {\n    height: 100%;\n    flex-direction: column;\n  }\n  .pp-gallery-container.active .gallery .pop-up-mobile-widget-container {\n    display: block;\n  }\n  .pp-gallery-container.active .gallery .gallery-sidebar {\n    display: none;\n  }\n  .pp-gallery-container.active .gallery .gallery-media {\n    display: block;\n    height: 100%;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content {\n    display: block;\n    position: relative;\n    padding-right: 0;\n    padding-left: 0;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content #icon-cross-desktop {\n    display: none;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .gallery-bakcground-container {\n    display: none;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper {\n    width: 100%;\n    display: block;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container {\n    width: 100%;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .swiper-pagination-fraction {\n    left: 0;\n    top: 3.5%;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-mobile-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 20px;\n    z-index: 16;\n    position: absolute;\n    top: 2%;\n    left: 0;\n    right: 0;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-mobile-header .icon-cross {\n    width: 40px;\n    height: 40px;\n    background: rgba(84, 84, 84, 0.5);\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-mobile-header .icon-cross:active {\n    background: rgba(37, 37, 37, 0.6);\n    opacity: 0.7;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-mobile-header .icon-cross img {\n    width: 15px;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-mobile-header .icon-share {\n    width: 40px;\n    height: 40px;\n    background: rgba(84, 84, 84, 0.5);\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-mobile-header .icon-share:active {\n    background: rgba(37, 37, 37, 0.6);\n    opacity: 0.7;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .swiper-buttons#mobile-swiper-buttons {\n    display: flex;\n    flex-direction: column-reverse;\n    gap: 50px;\n    position: relative;\n    bottom: 60%;\n    left: 82%;\n    z-index: 16;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .swiper-buttons#mobile-swiper-buttons .gallery-swiper-button-next {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 45px;\n    height: 45px;\n    background: rgba(84, 84, 84, 0.5);\n    border-radius: 50%;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .swiper-buttons#mobile-swiper-buttons .gallery-swiper-button-next img {\n    width: 25px;\n    height: 25px;\n    transform: rotate(180deg);\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .swiper-buttons#mobile-swiper-buttons .gallery-swiper-button-next:hover {\n    cursor: pointer;\n    background: rgba(37, 37, 37, 0.6);\n    opacity: 0.7;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .swiper-buttons#mobile-swiper-buttons .gallery-swiper-button-prev {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 45px;\n    height: 45px;\n    background: rgba(84, 84, 84, 0.5);\n    border-radius: 50%;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .swiper-buttons#mobile-swiper-buttons .gallery-swiper-button-prev img {\n    width: 25px;\n    height: 25px;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .swiper-buttons#mobile-swiper-buttons .gallery-swiper-button-prev:hover {\n    cursor: pointer;\n    background: rgba(37, 37, 37, 0.6);\n    opacity: 0.7;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .swiper-buttons.widget-open#mobile-swiper-buttons {\n    bottom: 72%;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .swiper-buttons.widget-open#mobile-swiper-buttons .gallery-swiper-button-next {\n    width: 40px;\n    height: 40px;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .swiper-buttons.widget-open#mobile-swiper-buttons .gallery-swiper-button-next img {\n    width: 20px;\n    height: 20px;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .swiper-buttons.widget-open#mobile-swiper-buttons .gallery-swiper-button-prev {\n    width: 40px;\n    height: 40px;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .swiper-buttons.widget-open#mobile-swiper-buttons .gallery-swiper-button-prev img {\n    width: 20px;\n    height: 20px;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper {\n    height: 100%;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-card .video-container {\n    position: static;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-card .video-container .video {\n    height: 100%;\n    top: 5%;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .gallery-image-container .gallery-image {\n    position: relative;\n    display: block;\n    max-height: none;\n    width: 100%;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-card-text-container {\n    bottom: 11%;\n    left: 5%;\n    right: 0;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-card-text-container .brand {\n    font-size: 16px;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container {\n    bottom: 5%;\n    left: 0;\n    right: 0;\n    justify-content: center;\n    width: 100%;\n    gap: 25px;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-button-play {\n    width: 35px;\n    height: 35px;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-button-play .play {\n    width: 24px;\n    height: 19px;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-button-play .pause {\n    width: 24px;\n    height: 19px;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-button-play:active {\n    background: rgba(37, 37, 37, 0.6);\n    opacity: 0.7;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-progress-bar {\n    height: 3px;\n    width: 250px;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-button-mute {\n    width: 35px;\n    height: 35px;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-button-mute .sound-on {\n    width: 24px;\n    height: 24px;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-button-mute .sound-off {\n    width: 24px;\n    height: 24px;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .gallery-swiper-container .gallery-swiper .swiper-slide .video-controls-container .video-controls-button-mute:active {\n    background: rgba(37, 37, 37, 0.6);\n    opacity: 0.7;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .content-swiper .thumbs-swiper-container {\n    display: none;\n  }\n  .pp-gallery-container.active .gallery .gallery-media .content .controls {\n    display: none;\n  }\n}\n"),
        document.head.appendChild(e);
    })();
    const e = document.querySelector("body"),
      t = ((e) => {
        const t = document.createElement("div");
        t.classList.add("pp-video-widget");
        const n = document.createElement("div");
        n.classList.add("floating-card-video");
        const i = document.createElement("div");
        i.classList.add("swiper"), i.classList.add("dynamic-video-slider");
        const a = document.createElement("div");
        a.classList.add("swiper-wrapper"),
          e.forEach((e, t) => {
            const n = ((e, t, n) => {
              const i = document.createElement("div");
              i.classList.add("swiper-slide"),
                i.classList.add("swiper-slide-dynamic");
              const a = document.createElement("div");
              a.classList.add("video-card"), a.setAttribute("data-index", t);
              const r = document.createElement("div");
              r.classList.add("video-container");
              const s = document.createElement("video");
              s.classList.add("video"),
                s.setAttribute("data-index", t),
                s.setAttribute("data-dynamic", `dynamic-video-${t}`),
                s.setAttribute("data-container", n),
                s.setAttribute("type", "video/mp4"),
                (s.id = `video-dynamic-${t}`),
                (s.src = e.src),
                (s.autoplay = !0),
                ce
                  ? ((s.preload = "auto"),
                    s.setAttribute("muted", ""),
                    s.setAttribute("playsinline", ""))
                  : ((s.preload = "metadata"),
                    (s.muted = !0),
                    (s.playsinline = !0));
              const o = document.createElement("span");
              return (
                (o.innerText = "Your browser does not support the video tag."),
                s.appendChild(o),
                r.appendChild(s),
                a.appendChild(r),
                i.appendChild(a),
                i
              );
            })(e, t, le);
            a.appendChild(n);
          }),
          i.appendChild(a);
        const r = document.createElement("div");
        r.classList.add("video-overlay");
        const s = document.createElement("div");
        if ((s.classList.add("video-hover-area"), pe)) {
          const e = ((e) => {
            const t = document.createElement("div");
            t.classList.add("button-mute"), (t.id = `${e}-button-mute-desktop`);
            const n = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "svg"
            );
            n.classList.add("sound-off"),
              n.setAttribute("id", `${e}-sound-off-desktop`),
              n.setAttribute("width", "24"),
              n.setAttribute("height", "24"),
              n.setAttribute("viewBox", "0 0 48 48"),
              n.setAttribute("fill", "#fff"),
              n.setAttribute("xmlns", "http://www.w3.org/2000/svg");
            const i = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "path"
            );
            i.setAttribute("fill-rule", "evenodd"),
              i.setAttribute("clip-rule", "evenodd"),
              i.setAttribute(
                "d",
                "M25 10.8685C25 8.47242 22.3296 7.04325 20.3359 8.37236L10.3944 15H6C4.34315 15 3 16.3431 3 18V30C3 31.6568 4.34314 33 6 33H10.3944L20.3359 39.6276C22.3296 40.9567 25 39.5276 25 37.1315V10.8685ZM29.2929 18.1213L35.1716 24L29.2929 29.8787C28.9024 30.2692 28.9024 30.9024 29.2929 31.2929L30.7071 32.7071C31.0976 33.0976 31.7308 33.0976 32.1213 32.7071L38 26.8284L43.8787 32.7071C44.2692 33.0976 44.9024 33.0976 45.2929 32.7071L46.7071 31.2929C47.0976 30.9024 47.0976 30.2692 46.7071 29.8787L40.8284 24L46.7071 18.1213C47.0976 17.7308 47.0976 17.0976 46.7071 16.7071L45.2929 15.2929C44.9024 14.9024 44.2692 14.9024 43.8787 15.2929L38 21.1716L32.1213 15.2929C31.7308 14.9024 31.0976 14.9024 30.7071 15.2929L29.2929 16.7071C28.9024 17.0976 28.9024 17.7308 29.2929 18.1213Z"
              ),
              n.appendChild(i);
            const a = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "svg"
            );
            a.classList.add("sound-on"),
              a.setAttribute("id", `${e}-sound-on-desktop`),
              a.setAttribute("width", "24"),
              a.setAttribute("height", "24"),
              a.setAttribute("viewBox", "0 0 48 48"),
              a.setAttribute("fill", "#fff"),
              a.setAttribute("xmlns", "http://www.w3.org/2000/svg");
            const r = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "path"
            );
            return (
              r.setAttribute("fill-rule", "evenodd"),
              r.setAttribute("clip-rule", "evenodd"),
              r.setAttribute(
                "d",
                "M20.3359 8.37236C22.3296 7.04325 25 8.47242 25 10.8685V37.1315C25 39.5276 22.3296 40.9567 20.3359 39.6276L10.3944 33H6C4.34314 33 3 31.6568 3 30V18C3 16.3431 4.34315 15 6 15H10.3944L20.3359 8.37236ZM21 12.737L12.1094 18.6641C11.7809 18.8831 11.3948 19 11 19H7V29H11C11.3948 29 11.7809 29.1169 12.1094 29.3359L21 35.263V12.737ZM32.9998 24C32.9998 21.5583 32.0293 19.3445 30.4479 17.7211C30.0625 17.3255 29.9964 16.6989 30.3472 16.2724L31.6177 14.7277C31.9685 14.3011 32.6017 14.2371 33.0001 14.6195C35.4628 16.9832 36.9998 20.3128 36.9998 24C36.9998 27.6872 35.4628 31.0168 33.0001 33.3805C32.6017 33.7629 31.9685 33.6989 31.6177 33.2724L30.3472 31.7277C29.9964 31.3011 30.0625 30.6745 30.4479 30.2789C32.0293 28.6556 32.9998 26.4418 32.9998 24ZM37.0144 11.05C36.6563 11.4705 36.7094 12.0995 37.1069 12.4829C40.1263 15.3951 42.0002 19.4778 42.0002 23.9999C42.0002 28.522 40.1263 32.6047 37.1069 35.5169C36.7094 35.9003 36.6563 36.5293 37.0144 36.9498L38.3109 38.4727C38.6689 38.8932 39.302 38.9456 39.7041 38.5671C43.5774 34.9219 46.0002 29.7429 46.0002 23.9999C46.0002 18.2569 43.5774 13.078 39.7041 9.43271C39.302 9.05421 38.6689 9.10664 38.3109 9.52716L37.0144 11.05Z"
              ),
              a.appendChild(r),
              t.appendChild(n),
              t.appendChild(a),
              t
            );
          })(le);
          s.appendChild(e);
        }
        const o = document.createElement("a");
        o.classList.add("video-product-info"),
          o.classList.add("pp-video-widget-track-link"),
          o.setAttribute("href", e[0].product.url),
          o.setAttribute("target", "_blank");
        const l = document.createElement("img");
        l.classList.add("icon"),
          l.setAttribute(
            "src",
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAOCAYAAAD5YeaVAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC3SURBVHgBtVFREcIwDE12FTAHrQRwAA5wAEhAARKwABJQMAubAuqAOigvXXrketw4Pnh3b2nfXl7ajcgg59yDF3DQ2tv33JgfKAm8g3tZM/OaWsB4EHNN0ylPcFM9nfEHcEJSKiPnOqpe4NC5QpU0Pwe+k1QPqiXWcwb6juh0sQWl22P80dxjQLnp9uxM5/VD2kkSwV05c1WRGFsntFEnlH1HP+B/Zja/OC34gjzkgvJpPC0jgtMLROtWQ7Jq9xYAAAAASUVORK5CYII="
          ),
          l.setAttribute("alt", "bag icon");
        const d = document.createElement("div");
        d.classList.add("product-title");
        const p = document.createElement("span");
        (p.innerText = e[0].product.title), d.appendChild(p);
        const c = document.createElement("div");
        return (
          c.classList.add("btn-view-deal"),
          (c.innerText = "View deal"),
          o.appendChild(l),
          o.appendChild(d),
          o.appendChild(c),
          r.appendChild(s),
          r.appendChild(o),
          i.appendChild(r),
          n.appendChild(i),
          t.appendChild(n),
          t
        );
      })(oe);
    e.appendChild(t);
    const n = fe();
    e.appendChild(n);
  })(),
    window.addEventListener("load", () => {
      class e {
        constructor(e) {
          this.$elements = document.querySelectorAll(e);
        }
      }
      class t {
        static CONTAINER_GALLERY = "gallery";
        static CONTAINER_DYNAMIC = "video-card-dynamic";
        constructor(t, n, i = 0) {
          (this.container = t),
            (this.index = n),
            (this.currentTime = i),
            (this.$playButtons = new e(`.${this.container}-play`)),
            (this.$pauseButtons = new e(`.${this.container}-pause`)),
            (this.$soundOffButtons = new e(`.${this.container}-sound-on`)),
            (this.$soundOnButtons = new e(`.${this.container}-sound-off`)),
            (this.$videos = new e(
              `.video[data-container="${this.container}"]`
            )),
            (this.$video = this.$videos.$elements[this.index]);
        }
        startPlay() {
          if (this.$video) {
            this.$video.currentTime = this.currentTime;
            let e = this.$video.play();
            void 0 !== e &&
              e
                .then(() => {
                  this.$playButtons.$elements[this.index] &&
                    (this.$playButtons.$elements[this.index].style.display =
                      "none"),
                    this.$pauseButtons.$elements[this.index] &&
                      (this.$pauseButtons.$elements[this.index].style.display =
                        "block");
                })
                .catch((e) => {
                  console.log("Auto-play was prevented:", e);
                });
          }
        }
        stop() {
          this.$video && (this.$video.pause(), (this.$video.currentTime = 0)),
            this.$playButtons.$elements[this.index] &&
              (this.$playButtons.$elements[this.index].style.display = "block"),
            this.$pauseButtons.$elements[this.index] &&
              (this.$pauseButtons.$elements[this.index].style.display = "none");
        }
        stopAll() {
          this.$videos.$elements.forEach((e) => {
            e.pause(), (e.muted = !0), (e.currentTime = 0);
          }),
            this.$playButtons.$elements &&
              this.$playButtons.$elements.forEach(
                (e) => (e.style.display = "block")
              ),
            this.$pauseButtons.$elements &&
              this.$pauseButtons.$elements.forEach(
                (e) => (e.style.display = "none")
              ),
            this.$soundOffButtons.$elements &&
              this.$soundOffButtons.$elements.forEach(
                (e) => (e.style.display = "none")
              ),
            this.$soundOnButtons.$elements &&
              this.$soundOnButtons.$elements.forEach(
                (e) => (e.style.display = "block")
              );
        }
      }
      let n = 0,
        i = !1,
        a = !1;
      const r = document.querySelector(".pp-gallery-container"),
        s = document.querySelector(".banner-content-wrapper"),
        o = document.querySelectorAll(".icon-cross"),
        l = document.querySelectorAll(
          `.video[data-container="${t.CONTAINER_GALLERY}"]`
        ),
        d = document.querySelectorAll(`.${t.CONTAINER_GALLERY}-button-play`),
        p = document.querySelectorAll(`.${t.CONTAINER_GALLERY}-play`),
        c = document.querySelectorAll(`.${t.CONTAINER_GALLERY}-pause`),
        u = document.querySelectorAll(`.${t.CONTAINER_GALLERY}-button-mute`),
        g = document.querySelectorAll(`.${t.CONTAINER_GALLERY}-sound-on`),
        m = document.querySelectorAll(`.${t.CONTAINER_GALLERY}-sound-off`),
        h = document.querySelectorAll(`.${t.CONTAINER_GALLERY}-progress-bar`),
        w = document.querySelectorAll(`.${t.CONTAINER_GALLERY}-progress-fill`),
        f = document.querySelector(".pop-up-mobile-widget-container"),
        y = document.querySelector(".pop-up-mobile-widget-header"),
        b = document.querySelector(".gallery-media"),
        v = document.querySelector(".widget-arrow-icon"),
        x = document.querySelectorAll(".video-card-text-container"),
        M = document.getElementById("mobile-swiper-buttons"),
        E = window.screen.width;
      let A = !1;
      function T(e) {
        const t = e.currentTarget.paramIndex,
          n = e.currentTarget.paramVideos,
          i = e.currentTarget.paramProgressBars,
          a = e.currentTarget.paramProgressFill,
          r = i[t].offsetWidth,
          s = n[t];
        let o = Math.round((s.currentTime / s.duration) * r);
        o && (a[t].style.width = `${o}px`);
      }
      function C(e) {
        const t = e.currentTarget.paramIndex,
          n = e.currentTarget.paramVideos,
          i = e.currentTarget.paramProgressFill,
          a = n[t],
          r = (e.offsetX / e.currentTarget.offsetWidth) * a.duration;
        (a.currentTime = r), (i[t].style.width = `${r}`);
      }
      function L(e) {
        const t = e.currentTarget.paramIndex,
          n = e.currentTarget.paramPlayIcons,
          i = e.currentTarget.paramPauseIcons;
        let a = e.currentTarget.paramVideos[t];
        a.paused
          ? (a.play(),
            (n[t].style.display = "none"),
            (i[t].style.display = "block"))
          : (a.pause(),
            (n[t].style.display = "block"),
            (i[t].style.display = "none"));
      }
      function S(e) {
        const t = e.currentTarget.paramIndex,
          n = e.currentTarget.paramSoundOnIcons,
          i = e.currentTarget.paramSoundOffIcons;
        let a = e.currentTarget.paramVideos[t];
        a.muted
          ? ((a.muted = !1),
            (n[t].style.display = "block"),
            (i[t].style.display = "none"))
          : ((a.muted = !0),
            (i[t].style.display = "block"),
            (n[t].style.display = "none"));
      }
      document.querySelector(".floating-card-video") && (A = !0),
        l.forEach((e, t) => {
          e.addEventListener("timeupdate", T),
            (e.paramIndex = t),
            (e.paramVideos = l),
            (e.paramProgressBars = h),
            (e.paramProgressFill = w),
            h[t].addEventListener("click", C),
            (h[t].paramIndex = t),
            (h[t].paramVideos = l),
            (h[t].paramProgressFill = w);
        }),
        d.forEach((e, t) => {
          e.addEventListener("click", L),
            (e.paramIndex = t),
            (e.paramVideos = l),
            (e.paramPlayIcons = p),
            (e.paramPauseIcons = c);
        }),
        l.forEach((e, t) => {
          e.addEventListener("click", L),
            (e.paramIndex = t),
            (e.paramVideos = l),
            (e.paramPlayIcons = p),
            (e.paramPauseIcons = c);
        }),
        u.forEach((e, t) => {
          e.addEventListener("click", S),
            (e.paramIndex = t),
            (e.paramVideos = l),
            (e.paramSoundOnIcons = g),
            (e.paramSoundOffIcons = m);
        });
      const z = (e, t = 0, n = null, i = null, a = null, r = null, s = !1) => {
          if (null != e || null != e) {
            e.currentTime = t;
            let o = e.play();
            void 0 !== o &&
              o
                .then(() => {
                  n && (n.style.display = "none"),
                    i && (i.style.display = "block"),
                    s &&
                      ((e.muted = !1),
                      a && (a.style.display = "none"),
                      r && (r.style.display = "block"));
                })
                .catch((e) => {
                  console.log("Auto-play was prevented:", e);
                });
          }
        },
        I = new Z(".thumbs-swiper", {
          direction: "vertical",
          spaceBetween: 10,
          slidesPerView: 4,
          watchSlidesProgress: !0,
          mousewheel: { sensitivity: 3 },
        }),
        N = new Z(".gallery-background", {
          direction: "vertical",
          enabled: !1,
        }),
        D = new Z(".gallery-swiper", {
          direction: "vertical",
          loop: !0,
          enabled: !1,
          spaceBetween: 10,
          pagination: { el: ".swiper-pagination-fraction", type: "fraction" },
          navigation: {
            nextEl: ".gallery-swiper-button-next",
            prevEl: ".gallery-swiper-button-prev",
          },
          thumbs: { multipleActiveThumbs: !0, swiper: I },
          hashNavigation: { watchState: !0 },
          on: {
            slideChange: function () {
              new t(t.CONTAINER_GALLERY, 0).stopAll();
              let e = this.realIndex;
              N.slideTo(e),
                this.slides[e] &&
                  history.replaceState(
                    null,
                    null,
                    `${window.location.pathname}${window.location.search}#` +
                      this.slides[this.activeIndex].dataset.hash
                  ),
                document
                  .querySelectorAll(
                    `.swiper-slide-gallery-video[data-swiper-slide-index="${e}"]`
                  )
                  .forEach((t) => {
                    let i = t.querySelector("video");
                    z(i, n, p[e], c[e], m[e], g[e], !0), (n = 0);
                  });
            },
          },
        });
      if (
        (l.length > 0 &&
          l.forEach((e) => {
            e.addEventListener("ended", () => {
              D.slideNext();
            });
          }),
        E <= 768 && f)
      ) {
        (b.style.height = "87%"), (y.style.border = "none");
        const se = document.documentElement.clientHeight,
          oe = 0.45 * se;
        (f.style.transform = "translateY(0)"),
          (f.style.transition = "transform .3s"),
          y.addEventListener("touchstart", ye),
          y.addEventListener("mousedown", ye);
        let le = 0,
          de = 0,
          pe = 0,
          ue = 0,
          ge = se / 2,
          me = !0;
        function he() {
          return -1 !== event.type.search("touch") ? event.touches[0] : event;
        }
        function we() {
          (v.style.transform = "rotate(0deg)"),
            (b.style.transition = "none"),
            (y.style.border = "1px solid #b6c2c5");
          let e = he(),
            t = +f.style.transform.match(/([-0-9.]+(?=px))/)[0],
            n = b.style.height.match(/([-0-9.]+(?=%))/)[0];
          if (((pe = de - e.clientY), (de = e.clientY), le >= se)) {
            if (le < de) return (me = !1), void fe();
            me = !0;
          }
          if (le > de && !i) {
            if (de <= oe) return (me = !1), void fe();
            me = !0;
          } else {
            if (le > de && i) return (me = !1), void fe();
            me = !0;
          }
          let a = t - 0.1 * pe,
            r = n - 0.1 * pe;
          (f.style.transform = `translateY(${a}px)`),
            (b.style.height = `${r}%`);
        }
        function fe() {
          function e() {
            (v.style.transform = "rotate(0deg)"),
              (y.style.border = "1px solid #b6c2c5"),
              (f.style.transform = "translateY(0)"),
              (b.style.transition = "height .3s ease-out"),
              (b.style.height = "34%"),
              x.forEach((e) => (e.style.bottom = "18%")),
              l.forEach((e) => (e.style.top = "0")),
              M.classList.add("widget-open"),
              (f.style.overflowY = "scroll"),
              (i = !0);
          }
          function t() {
            (v.style.transform = "rotate(180deg)"),
              (y.style.border = "none"),
              (f.style.transform = "translateY(0)"),
              (b.style.transition = "height .3s ease out"),
              (b.style.height = "87%"),
              x.forEach((e) => (e.style.bottom = "11%")),
              l.forEach((e) => (e.style.top = "5%")),
              M.classList.remove("widget-open"),
              (f.style.overflowY = ""),
              (i = !1);
          }
          (ue = le - de),
            de < ge ? e() : t(),
            0 === ue && i ? t() : 0 !== ue || i || e(),
            document.removeEventListener("touchmove", we),
            document.removeEventListener("mousemove", we),
            document.removeEventListener("touchend", fe),
            document.removeEventListener("mouseup", fe);
        }
        function ye() {
          let e = he();
          (le = de = e.clientY),
            document.addEventListener("touchmove", we),
            document.addEventListener("mousemove", we),
            document.addEventListener("touchend", fe),
            document.addEventListener("mouseup", fe);
        }
      }
      const k = document.querySelectorAll(".video[data-dynamic]"),
        j = document.querySelectorAll(`.${t.CONTAINER_DYNAMIC}-button-play`),
        O = document.querySelectorAll(`.${t.CONTAINER_DYNAMIC}-play`),
        P = document.querySelectorAll(`.${t.CONTAINER_DYNAMIC}-pause`),
        Y = document.querySelectorAll(`.${t.CONTAINER_DYNAMIC}-progress-bar`),
        $ = document.querySelectorAll(`.${t.CONTAINER_DYNAMIC}-progress-fill`);
      k.forEach((e, t) => {
        A ||
          (e.addEventListener("timeupdate", T),
          (e.paramIndex = t),
          (e.paramVideos = k),
          (e.paramProgressBars = Y),
          (e.paramProgressFill = $),
          Y[t].addEventListener("click", C),
          (Y[t].paramIndex = t),
          (Y[t].paramVideos = k),
          (Y[t].paramProgressFill = $));
      });
      let B,
        G,
        U,
        Q,
        R,
        H,
        q,
        V = [],
        W = [],
        X = [];
      (B = document.getElementById(
        `${t.CONTAINER_DYNAMIC}-button-mute-desktop`
      )),
        (G = document.getElementById(
          `${t.CONTAINER_DYNAMIC}-sound-on-desktop`
        )),
        (U = document.getElementById(
          `${t.CONTAINER_DYNAMIC}-sound-off-desktop`
        )),
        (Q = document.querySelector(".video-hover-area"));
      const F = document.querySelector(".video-overlay");
      (H = !0), (q = !0);
      let _ = !1;
      ["click", "tap", "keydown"].forEach((e) => {
        document.addEventListener(e, () => (_ = !0));
      }),
        (R = () => {
          _ && K();
        });
      const J = document.querySelector(".product-detail-review-page");
      function K() {
        ce ||
          (H
            ? (k.forEach((e) => (e.muted = !1)),
              (G.style.display = "block"),
              (U.style.display = "none"),
              (H = !1))
            : (k.forEach((e) => (e.muted = !0)),
              (U.style.display = "block"),
              (G.style.display = "none"),
              (H = !0)));
      }
      Q?.addEventListener("click", (e) => {
        if (J) return;
        Q?.removeEventListener("mouseover", R),
          Q?.removeEventListener("mouseout", R),
          (q = !1),
          (F.style.display = "none");
        const t = e.clientX,
          n = e.clientY;
        document.elementFromPoint(t, n).click(), (F.style.display = "flex");
      }),
        Q?.addEventListener("mouseover", R),
        Q?.addEventListener("mouseout", R),
        B?.addEventListener("click", (e) => {
          e.stopPropagation(),
            Q?.removeEventListener("mouseover", R),
            Q?.removeEventListener("mouseout", R),
            (q = !1),
            K();
        }),
        j.forEach((e, t) => {
          e.addEventListener("click", L),
            (e.paramIndex = t),
            (e.paramVideos = k),
            (e.paramPlayIcons = O),
            (e.paramPauseIcons = P);
        });
      const ee = new Z(".dynamic-video-slider", {
        loop: !0,
        direction: A ? "horizontal" : "vertical",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: { 576: { direction: "horizontal", spaceBetween: 10 } },
        on: {
          slideChange: function () {
            new t(t.CONTAINER_DYNAMIC, 0).stopAll(),
              document
                .querySelectorAll(
                  `.swiper-slide-dynamic[data-swiper-slide-index="${this.realIndex}"]`
                )
                .forEach((e) => {
                  E <= 768
                    ? z(
                        e.querySelector("video"),
                        0,
                        O[this.realIndex],
                        P[this.realIndex]
                      )
                    : z(e.querySelector("video"));
                });
          },
        },
      });
      function te(e) {
        let i = e.target,
          s = i.dataset.index,
          o = i.classList.contains("image") ? "image" : "video";
        if (
          i.classList.contains("btn-mute") ||
          i.classList.contains("brand-logo") ||
          i.classList.contains("button") ||
          "svg" === i.tagName ||
          "path" === i.tagName
        )
          return;
        let l = k[ee.realIndex];
        "video" === o && (n = l.currentTime),
          new t(t.CONTAINER_DYNAMIC, 0).stopAll(),
          B &&
            ((G.style.display = "none"), (U.style.display = "block"), (H = !0)),
          V.length &&
            V[ee.realIndex] &&
            ((W[ee.realIndex].style.display = "none"),
            (X[ee.realIndex].style.display = "block"));
        let d = "#" + o + "-" + s;
        D.enable(),
          N.enable(),
          (a = !0),
          D.emit("slideChange"),
          (window.location = `${window.location.origin}${window.location.pathname}${window.location.search}${d}`),
          r.classList.add("active"),
          document.querySelector("body").classList.add("lock");
      }
      A && (ee.allowTouchMove = !1),
        k.length > 0 &&
          k.forEach((e) => {
            e.addEventListener("ended", () => {
              ee.slideNext();
            });
          }),
        ((E <= 768 && !k.length) || (E <= 768 && A)) &&
          s?.classList.add("mobile-image");
      let ne = document.querySelectorAll(".video-card[data-index]");
      ne.length > 0 &&
        ne.forEach((e) => {
          e.addEventListener("click", te);
        }),
        (document.onmouseover = function () {
          window.innerDocClick = !0;
        }),
        (document.onmouseleave = function () {
          window.innerDocClick = !1;
        });
      let ie = !1;
      function ae() {
        D.disable(),
          N.disable(),
          r.classList.remove("active"),
          (a = !1),
          document.querySelector("body").classList.remove("lock"),
          l.forEach((e) => (e.muted = !0)),
          l.forEach((e) => e.pause()),
          g.forEach((e) => (e.style.display = "none")),
          m.forEach((e) => (e.style.display = "block")),
          p.forEach((e) => (e.style.display = "block")),
          c.forEach((e) => (e.style.display = "none")),
          E <= 768 &&
            (v && (v.style.transform = "rotate(180deg)"),
            (f.style.transform = "translateY(0)"),
            (b.style.transition = "height .3s ease out"),
            (b.style.height = "87%"),
            x.forEach((e) => (e.style.bottom = "11%")),
            l.forEach((e) => (e.style.top = "5%")),
            M.classList.remove("widget-open"),
            (f.style.overflowY = ""),
            (i = !1)),
          history.replaceState(
            null,
            null,
            `${window.location.pathname}${window.location.search}`
          );
        let e = ee.realIndex,
          t = k[e];
        z(t, 0, O[e], P[e]),
          q ||
            (Q?.addEventListener("mouseover", R),
            Q?.addEventListener("mouseout", R));
      }
      (onpopstate = function () {
        ie = !0;
      }),
        (onload = function () {
          history.pushState(
            null,
            null,
            `${window.location.pathname}${window.location.search}`
          );
        }),
        (onhashchange = function () {
          !window.innerDocClick && ie && a
            ? (ae(), (ie = !1))
            : window.innerDocClick ||
              !ie ||
              a ||
              (D.enable(),
              N.enable(),
              r.classList.add("active"),
              (a = !0),
              D.emit("slideChange"),
              document.querySelector("body").classList.add("lock"),
              k.forEach((e) => {
                (e.muted = !0), e.pause();
              }),
              B &&
                ((G.style.display = "none"),
                (U.style.display = "block"),
                (H = !0)),
              (ie = !1));
        }),
        o.forEach((e) => e.addEventListener("click", ae));
      const re = document.querySelectorAll("video.lazy");
      if ("IntersectionObserver" in window) {
        let be = new IntersectionObserver((e) => {
          e.forEach((e) => {
            if (e.isIntersecting) {
              for (let t in e.target.children) {
                let n = e.target.children[t];
                "string" == typeof n.tagName &&
                  "SOURCE" === n.tagName &&
                  (n.src = n.dataset.src);
              }
              e.target.load(),
                e.target.classList.remove("lazy"),
                be.unobserve(e.target);
            }
          });
        });
        re.forEach((e) => {
          be.observe(e);
        });
      }
      window._carrickQueue.push((e) => e.refreshTracking());
    });
})();
