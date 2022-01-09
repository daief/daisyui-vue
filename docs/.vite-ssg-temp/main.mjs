var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { ViteSSG } from "vite-ssg";
import { createVNode, createTextVNode, useSSRContext, defineComponent, inject, computed, ref, provide, reactive, toRef, cloneVNode, Fragment, watch, nextTick, mergeProps, Transition, withDirectives, vShow, isVNode, Teleport, resolveComponent, withCtx } from "vue";
import { useHead } from "@vueuse/head";
import { useRoute, RouterLink } from "vue-router";
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
var _sfc_main$g = {
  setup() {
    useHead({
      title: "daisyui-vue"
    });
    return () => createVNode("div", null, [createVNode("h1", {
      "class": "text-2xl"
    }, [createTextVNode("daisyui vue(WIP)")]), createVNode("p", {
      "class": "mt-4"
    }, [createTextVNode("Vue3 UI components based on"), " ", createVNode("a", {
      "href": "https://github.com/saadeghi/daisyui",
      "class": "text-blue-400 underline"
    }, [createTextVNode("daisyui")]), createTextVNode(".")])]);
  }
};
const _sfc_setup$k = _sfc_main$g.setup;
_sfc_main$g.setup = (props2, ctx2) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/index.vue");
  return _sfc_setup$k ? _sfc_setup$k(props2, ctx2) : void 0;
};
const routes = [{ "name": "components-tooltip", "path": "/components/tooltip", "component": () => Promise.resolve().then(function() {
  return tooltip;
}), "props": true }, { "name": "components-table", "path": "/components/table", "component": () => Promise.resolve().then(function() {
  return table;
}), "props": true }, { "name": "components-tab", "path": "/components/tab", "component": () => Promise.resolve().then(function() {
  return tab;
}), "props": true }, { "name": "components-menu", "path": "/components/menu", "component": () => Promise.resolve().then(function() {
  return menu;
}), "props": true }, { "name": "components-mask", "path": "/components/mask", "component": () => Promise.resolve().then(function() {
  return mask;
}), "props": true }, { "name": "components-icons", "path": "/components/icons", "component": () => Promise.resolve().then(function() {
  return icons;
}), "props": true }, { "name": "components-drawer", "path": "/components/drawer", "component": () => Promise.resolve().then(function() {
  return drawer;
}), "props": true }, { "name": "components-button", "path": "/components/button", "component": () => Promise.resolve().then(function() {
  return button;
}), "props": true }, { "name": "components-breadcrumb", "path": "/components/breadcrumb", "component": () => Promise.resolve().then(function() {
  return breadcrumb;
}), "props": true }, { "name": "components-badge", "path": "/components/badge", "component": () => Promise.resolve().then(function() {
  return badge;
}), "props": true }, { "name": "components-avatar", "path": "/components/avatar", "component": () => Promise.resolve().then(function() {
  return avatar;
}), "props": true }, { "name": "components-artboard", "path": "/components/artboard", "component": () => Promise.resolve().then(function() {
  return artboard;
}), "props": true }, { "name": "components-alert", "path": "/components/alert", "component": () => Promise.resolve().then(function() {
  return alert;
}), "props": true }, { "name": "index", "path": "/", "component": _sfc_main$g, "props": true }];
const CONTEXT_SYMBOL = Symbol("context");
function useDaisyui() {
  return inject(CONTEXT_SYMBOL);
}
function component(...args) {
  const [options, styles = []] = args;
  return defineComponent(__spreadProps(__spreadValues({}, options), {
    setup: (props2, ctx2) => {
      useDaisyui().styles.insertCss(styles);
      return options.setup(props2, ctx2);
    }
  }));
}
function componentV2(...args) {
  return component(...args);
}
function createStyles() {
  const m = new Map();
  const STYLE_ATTR = `daisyui-vue="${"0.0.1-alpha.0"}"`;
  let style2 = null;
  if (typeof document !== "undefined") {
    style2 = document.querySelector(`style[${STYLE_ATTR}]`);
    if (style2) {
      const {
        cssRules
      } = style2.sheet;
      for (let i = 0; i < cssRules.length - 1; i++) {
        m.set(cssRules.item(i).cssText, true);
      }
    } else {
      style2 = document.createElement("style");
      style2.setAttribute("daisyui-vue", "0.0.1-alpha.0");
      document.head.prepend(style2);
    }
  }
  return {
    insertCss: (css2) => {
      css2 = Array.isArray(css2) ? css2 : [css2];
      let appendText = "";
      css2.forEach((text) => {
        if (m.get(text))
          return;
        m.set(text, true);
        appendText += text;
      });
      style2 == null ? void 0 : style2.append(appendText);
    },
    extractStyles: () => {
      let text = "";
      for (const it of m.entries()) {
        text += it[0];
      }
      return `<style ${STYLE_ATTR}>${text}</style>`;
    }
  };
}
const css$4$1 = ".no-animation{--btn-focus-scale:1;--animation-btn:0;--animation-input:0}.tab-border-none{--tab-border:0px}.tab-border{--tab-border:1px}.tab-border-2{--tab-border:2px}.tab-border-3{--tab-border:3px}.tab-rounded-none{--tab-radius:0}.tab-rounded-lg{--tab-radius:0.5rem}";
var s5 = css$4$1;
const ctxKey = Symbol("ButtonGroup");
const css$3$1 = '.btn{align-items:center;border-color:transparent;border-radius:var(--rounded-btn,.5rem);cursor:pointer;display:inline-flex;flex-shrink:0;flex-wrap:wrap;font-size:.875rem;height:3rem;justify-content:center;line-height:1.25rem;line-height:1em;min-height:3rem;padding-left:1rem;padding-right:1rem;text-align:center;transition-duration:.15s;transition-duration:.2s;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.btn:focus{outline:2px solid transparent;outline-offset:2px}.btn-disabled,.btn[disabled]{pointer-events:none}.btn-square{height:3rem;padding:0;width:3rem}.btn-circle{border-radius:9999px;height:3rem;padding:0;width:3rem}.btn.loading,.btn.loading:hover{pointer-events:none}.btn.loading:before{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite;border-color:transparent currentColor currentColor transparent;border-radius:9999px;border-width:2px;content:"";height:1rem;margin-right:.5rem;width:1rem}@media (prefers-reduced-motion:reduce){.btn.loading:before{-webkit-animation:spin 10s linear infinite;animation:spin 10s linear infinite}}@-webkit-keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.btn-group{display:flex;flex-wrap:wrap}.btn-group>input[type=radio].btn{-webkit-appearance:none;-moz-appearance:none;appearance:none}.btn-group>input[type=radio].btn:before{content:attr(data-title)}';
var s1$c = css$3$1;
const css$2$1 = ".btn{-webkit-animation:button-pop var(--animation-btn,.25s) ease-out;animation:button-pop var(--animation-btn,.25s) ease-out;border-width:var(--border-btn,1px);font-weight:600;text-transform:uppercase;text-transform:var(--btn-text-case,uppercase)}.btn:active:focus,.btn:active:hover{-webkit-animation:none;animation:none}.btn:active:focus,.btn:active:hover{transform:scale(var(--btn-focus-scale,.95))}.btn{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsla(var(--n)/var(--tw-bg-opacity));border-color:hsla(var(--n)/var(--tw-border-opacity));color:hsla(var(--nc)/var(--tw-text-opacity))}.btn-active,.btn:hover{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:hsla(var(--nf)/var(--tw-bg-opacity));border-color:hsla(var(--nf)/var(--tw-border-opacity))}.btn:focus-visible{box-shadow:0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--nf))}.btn-primary{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsla(var(--p)/var(--tw-bg-opacity));border-color:hsla(var(--p)/var(--tw-border-opacity));color:hsla(var(--pc)/var(--tw-text-opacity))}.btn-primary.btn-active,.btn-primary:hover{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:hsla(var(--pf)/var(--tw-bg-opacity));border-color:hsla(var(--pf)/var(--tw-border-opacity))}.btn-primary:focus-visible{box-shadow:0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--p))}.btn-secondary{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsla(var(--s)/var(--tw-bg-opacity));border-color:hsla(var(--s)/var(--tw-border-opacity));color:hsla(var(--sc)/var(--tw-text-opacity))}.btn-secondary.btn-active,.btn-secondary:hover{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:hsla(var(--sf)/var(--tw-bg-opacity));border-color:hsla(var(--sf)/var(--tw-border-opacity))}.btn-secondary:focus-visible{box-shadow:0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--s))}.btn-accent{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsla(var(--a)/var(--tw-bg-opacity));border-color:hsla(var(--a)/var(--tw-border-opacity));color:hsla(var(--ac)/var(--tw-text-opacity))}.btn-accent.btn-active,.btn-accent:hover{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:hsla(var(--af)/var(--tw-bg-opacity));border-color:hsla(var(--af)/var(--tw-border-opacity))}.btn-accent:focus-visible{box-shadow:0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--a))}.btn-info{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsla(var(--in)/var(--tw-bg-opacity));border-color:hsla(var(--in)/var(--tw-border-opacity));color:hsla(var(--b2)/var(--tw-text-opacity))}.btn-info.btn-active,.btn-info:hover{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:hsla(var(--in)/var(--tw-bg-opacity));border-color:hsla(var(--in)/var(--tw-border-opacity))}.btn-info:focus-visible{box-shadow:0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--in))}.btn-success{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsla(var(--su)/var(--tw-bg-opacity));border-color:hsla(var(--su)/var(--tw-border-opacity));color:hsla(var(--b2)/var(--tw-text-opacity))}.btn-success.btn-active,.btn-success:hover{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:hsla(var(--su)/var(--tw-bg-opacity));border-color:hsla(var(--su)/var(--tw-border-opacity))}.btn-success:focus-visible{box-shadow:0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--su))}.btn-warning{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsla(var(--wa)/var(--tw-bg-opacity));border-color:hsla(var(--wa)/var(--tw-border-opacity));color:hsla(var(--b2)/var(--tw-text-opacity))}.btn-warning.btn-active,.btn-warning:hover{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:hsla(var(--wa)/var(--tw-bg-opacity));border-color:hsla(var(--wa)/var(--tw-border-opacity))}.btn-warning:focus-visible{box-shadow:0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--wa))}.btn-error{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsla(var(--er)/var(--tw-bg-opacity));border-color:hsla(var(--er)/var(--tw-border-opacity));color:hsla(var(--b2)/var(--tw-text-opacity))}.btn-error.btn-active,.btn-error:hover{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:hsla(var(--er)/var(--tw-bg-opacity));border-color:hsla(var(--er)/var(--tw-border-opacity))}.btn-error:focus-visible{box-shadow:0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--er))}.btn.glass.btn-active,.btn.glass:hover{--glass-opacity:25%;--glass-border-opacity:15%}.btn.glass:focus-visible{box-shadow:0 0 0 2px currentColor}.btn-ghost{background-color:transparent;border-color:transparent;border-width:1px;color:currentColor}.btn-ghost.btn-active,.btn-ghost:hover{--tw-border-opacity:0;--tw-bg-opacity:1;--tw-bg-opacity:0.2;background-color:hsla(var(--bc)/var(--tw-bg-opacity))}.btn-ghost:focus-visible{box-shadow:0 0 0 2px currentColor}.btn-link{--tw-text-opacity:1;background-color:transparent;border-color:transparent;color:hsla(var(--p)/var(--tw-text-opacity))}.btn-link.btn-active,.btn-link:hover{background-color:transparent;border-color:transparent;text-decoration:underline}.btn-link:focus-visible{box-shadow:0 0 0 2px currentColor}.btn-outline{--tw-text-opacity:1;background-color:transparent;border-color:currentColor;color:hsla(var(--bc)/var(--tw-text-opacity))}.btn-outline:hover{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsla(var(--bc)/var(--tw-bg-opacity));border-color:hsla(var(--bc)/var(--tw-border-opacity));color:hsla(var(--b1)/var(--tw-text-opacity))}.btn-outline.btn-primary{--tw-text-opacity:1;color:hsla(var(--p)/var(--tw-text-opacity))}.btn-outline.btn-primary:hover{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsla(var(--pf)/var(--tw-bg-opacity));border-color:hsla(var(--pf)/var(--tw-border-opacity));color:hsla(var(--pc)/var(--tw-text-opacity))}.btn-outline.btn-secondary{--tw-text-opacity:1;color:hsla(var(--s)/var(--tw-text-opacity))}.btn-outline.btn-secondary:hover{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsla(var(--sf)/var(--tw-bg-opacity));border-color:hsla(var(--sf)/var(--tw-border-opacity));color:hsla(var(--sc)/var(--tw-text-opacity))}.btn-outline.btn-accent{--tw-text-opacity:1;color:hsla(var(--a)/var(--tw-text-opacity))}.btn-outline.btn-accent:hover{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsla(var(--af)/var(--tw-bg-opacity));border-color:hsla(var(--af)/var(--tw-border-opacity));color:hsla(var(--ac)/var(--tw-text-opacity))}.btn-outline.btn-success{--tw-text-opacity:1;color:hsla(var(--su)/var(--tw-text-opacity))}.btn-outline.btn-success:hover{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsla(var(--su)/var(--tw-bg-opacity));border-color:hsla(var(--su)/var(--tw-border-opacity));color:hsla(var(--nc)/var(--tw-text-opacity))}.btn-outline.btn-info{--tw-text-opacity:1;color:hsla(var(--in)/var(--tw-text-opacity))}.btn-outline.btn-info:hover{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsla(var(--in)/var(--tw-bg-opacity));border-color:hsla(var(--in)/var(--tw-border-opacity));color:hsla(var(--nc)/var(--tw-text-opacity))}.btn-outline.btn-warning{--tw-text-opacity:1;color:hsla(var(--wa)/var(--tw-text-opacity))}.btn-outline.btn-warning:hover{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsla(var(--wa)/var(--tw-bg-opacity));border-color:hsla(var(--wa)/var(--tw-border-opacity));color:hsla(var(--nc)/var(--tw-text-opacity))}.btn-outline.btn-error{--tw-text-opacity:1;color:hsla(var(--er)/var(--tw-text-opacity))}.btn-outline.btn-error:hover{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsla(var(--er)/var(--tw-bg-opacity));border-color:hsla(var(--er)/var(--tw-border-opacity));color:hsla(var(--nc)/var(--tw-text-opacity))}.btn-disabled,.btn[disabled]{--tw-border-opacity:0;--tw-bg-opacity:1;--tw-bg-opacity:0.2;--tw-text-opacity:1;--tw-text-opacity:0.2;background-color:hsla(var(--n)/var(--tw-bg-opacity));color:hsla(var(--bc)/var(--tw-text-opacity))}.btn.loading.btn-circle:before,.btn.loading.btn-square:before{margin-right:0}.btn.loading.btn-lg:before,.btn.loading.btn-xl:before{height:1.25rem;width:1.25rem}.btn.loading.btn-sm:before,.btn.loading.btn-xs:before{height:.75rem;width:.75rem}.btn-group>.btn-active,.btn-group>input[type=radio]:checked.btn{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsla(var(--p)/var(--tw-bg-opacity));border-color:hsla(var(--p)/var(--tw-border-opacity));color:hsla(var(--pc)/var(--tw-text-opacity))}.btn-group>.btn-active:focus-visible,.btn-group>input[type=radio]:checked.btn:focus-visible{box-shadow:0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--p))}.btn-group>.btn:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px}.btn-group>.btn:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}@-webkit-keyframes button-pop{0%{transform:scale(var(--btn-focus-scale,.95))}40%{transform:scale(1.02)}to{transform:scale(1)}}@keyframes button-pop{0%{transform:scale(var(--btn-focus-scale,.95))}40%{transform:scale(1.02)}to{transform:scale(1)}}";
var s2$c = css$2$1;
const css$1$1 = ".btn-xs{font-size:.75rem;height:1.5rem;min-height:1.5rem;padding-left:.5rem;padding-right:.5rem}.btn-sm{font-size:.875rem;height:2rem;min-height:2rem;padding-left:.75rem;padding-right:.75rem}.btn-md{font-size:.875rem;height:3rem;min-height:3rem;padding-left:1rem;padding-right:1rem}.btn-lg{font-size:1.125rem;height:4rem;min-height:4rem;padding-left:1.5rem;padding-right:1.5rem}.btn-wide{width:16rem}.btn-block{width:100%}.btn-square.btn-xs{height:1.5rem;padding:0;width:1.5rem}.btn-square.btn-sm{height:2rem;padding:0;width:2rem}.btn-square.btn-md{height:3rem;padding:0;width:3rem}.btn-square.btn-lg{height:4rem;padding:0;width:4rem}.btn-circle.btn-xs{border-radius:9999px;height:1.5rem;padding:0;width:1.5rem}.btn-circle.btn-sm{border-radius:9999px;height:2rem;padding:0;width:2rem}.btn-circle.btn-md{border-radius:9999px;height:3rem;padding:0;width:3rem}.btn-circle.btn-lg{border-radius:9999px;height:4rem;padding:0;width:4rem}";
var s3$5 = css$1$1;
const css$D = ".glass,.glass.btn-active,.glass:hover{-webkit-backdrop-filter:blur(var(--glass-blur,40px));backdrop-filter:blur(var(--glass-blur,40px));background-color:transparent;background-image:linear-gradient(135deg,rgb(255 255 255/var(--glass-opacity,30%)) 0,transparent 100%),linear-gradient(var(--glass-reflex-degree,100deg),rgb(255 255 255/var(--glass-reflex-opacity,10%)) 25%,transparent 25%);border:none;box-shadow:0 0 0 1px rgb(255 255 255/var(--glass-border-opacity,10%)) inset,0 0 0 2px rgb(0 0 0/5%);text-shadow:0 1px rgb(0 0 0/var(--glass-text-shadow-opacity,5%))}";
var s4$1 = css$D;
var style$d = [s1$c, s2$c, s3$5, s4$1, s5];
const Button = component({
  name: "Button",
  props: {
    block: Boolean,
    wide: Boolean,
    disabled: Boolean,
    outline: Boolean,
    active: Boolean,
    loading: Boolean,
    noAnimation: Boolean,
    onClick: Function
  },
  setup: (props2, {
    slots,
    attrs
  }) => {
    const ctxVal = inject(ctxKey, null);
    const size = computed(() => attrs.size || (ctxVal == null ? void 0 : ctxVal.value.size) || "md");
    const shape = computed(() => attrs.shape || (ctxVal == null ? void 0 : ctxVal.value.shape) || "default");
    const outline = computed(() => (ctxVal == null ? void 0 : ctxVal.value.outline) || props2.outline);
    const componentType = computed(() => attrs.component || "button");
    const clickLoading = ref(false);
    const finalLoading = computed(() => props2.loading || clickLoading.value);
    const cls = computed(() => {
      return ["dv-btn btn", attrs.type === "glass" ? "glass" : !!attrs.type ? `btn-${attrs.type}` : "", {
        [`btn-${size.value}`]: true,
        [`btn-${shape.value}`]: true,
        "btn-block": props2.block,
        "btn-wide": props2.wide,
        loading: finalLoading.value,
        "btn-disabled": props2.disabled,
        "btn-active": props2.active,
        "btn-outline": outline.value,
        "no-animation": props2.noAnimation
      }];
    });
    const handleOnClick = async (e) => {
      if (clickLoading.value || typeof props2.onClick !== "function")
        return;
      clickLoading.value = true;
      try {
        await props2.onClick(e);
      } catch (error) {
      }
      clickLoading.value = false;
    };
    const showContent = computed(() => {
      if (["circle", "square"].includes(attrs.shape)) {
        return !finalLoading.value;
      }
      return true;
    });
    return () => {
      var _a;
      return createVNode(componentType.value, {
        disabled: props2.disabled || void 0,
        class: cls.value,
        onClick: handleOnClick
      }, [showContent.value ? (_a = slots.default) == null ? void 0 : _a.call(slots) : null]);
    };
  }
}, style$d);
const boolProps$1 = {
  outline: Boolean
};
const ButtonGroup = component({
  name: "ButtonGroup",
  props: boolProps$1,
  setup: (props2, {
    slots,
    attrs
  }) => {
    const ctxVal = computed(() => ({
      size: attrs.size || "md",
      shape: attrs.shape || "defalut",
      outline: props2.outline
    }));
    provide(ctxKey, ctxVal);
    return () => {
      var _a;
      return createVNode("div", {
        "class": "dv-btn-group btn-group"
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
}, style$d);
const css$C = ".dv-icon{text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;flex-shrink:0;font-style:normal;height:1em;line-height:0;overflow:hidden;text-align:center;text-transform:none;vertical-align:middle;width:1em}";
var s$8 = css$C;
var style$c = [s$8];
const IconBase = component({
  name: "IconBase",
  props: {
    color: {
      type: String,
      default: "currentColor"
    },
    size: [String, Number],
    useStroke: {
      type: Boolean,
      default: true
    },
    viewBox: {
      type: String,
      default: "0 0 1024 1024"
    }
  },
  setup: (props2, {
    slots
  }) => {
    return () => {
      var _a;
      return createVNode("svg", {
        "class": "dv-icon",
        "viewBox": props2.viewBox,
        "focusable": "false",
        "aria-hidden": "false",
        "fill": props2.useStroke ? "none" : props2.color,
        "stroke": props2.useStroke ? props2.color : "none",
        "style": props2.size ? {
          fontSize: typeof props2.size === "number" ? `${props2.size}px` : props2.size
        } : {}
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
}, style$c);
const IconAdjustments = component({
  name: "IconAdjustments",
  setup: () => {
    return () => createVNode(IconBase, {
      "viewBox": "0 0 24 24"
    }, {
      default: () => [createVNode("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        "d": "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
      }, null)]
    });
  }
});
var IconAdjustments$1 = IconAdjustments;
const IconArchive = component({
  name: "IconArchive",
  setup: () => {
    return () => createVNode(IconBase, {
      "viewBox": "0 0 24 24"
    }, {
      default: () => [createVNode("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        "d": "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
      }, null)]
    });
  }
});
var IconArchive$1 = IconArchive;
const IconArrow = component({
  name: "IconArrow",
  setup: () => {
    return () => createVNode(IconBase, {
      "viewBox": "0 0 24 24"
    }, {
      default: () => [createVNode("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        "d": "M9 5l7 7-7 7"
      }, null)]
    });
  }
});
var IconArrow$1 = IconArrow;
const IconBack = component({
  name: "IconBack",
  setup: () => {
    return () => createVNode(IconBase, {
      "viewBox": "0 0 24 24"
    }, {
      default: () => [createVNode("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        "d": "M10 19l-7-7m0 0l7-7m-7 7h18"
      }, null)]
    });
  }
});
var IconBack$1 = IconBack;
const IconBell = component({
  name: "IconBell",
  setup: () => {
    return () => createVNode(IconBase, {
      "viewBox": "0 0 24 24"
    }, {
      default: () => [createVNode("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        "d": "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
      }, null)]
    });
  }
});
var IconBell$1 = IconBell;
const IconBookOpen = component({
  name: "IconBookOpen",
  setup: () => {
    return () => createVNode(IconBase, {
      "viewBox": "0 0 24 24"
    }, {
      default: () => [createVNode("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        "d": "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      }, null)]
    });
  }
});
var IconBookOpen$1 = IconBookOpen;
const IconCheck = component({
  name: "IconCheck",
  setup: () => {
    return () => createVNode(IconBase, {
      "viewBox": "0 0 24 24"
    }, {
      default: () => [createVNode("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        "d": "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      }, null)]
    });
  }
});
var IconCheck$1 = IconCheck;
const IconClose = component({
  name: "IconClose",
  setup: () => {
    return () => createVNode(IconBase, {
      "viewBox": "0 0 24 24"
    }, {
      default: () => [createVNode("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        "d": "M6 18L18 6M6 6l12 12"
      }, null)]
    });
  }
});
var IconClose$1 = IconClose;
const IconCode = component({
  name: "IconCode",
  setup: () => {
    return () => createVNode(IconBase, {
      "viewBox": "0 0 24 24"
    }, {
      default: () => [createVNode("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        "d": "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      }, null)]
    });
  }
});
var IconCode$1 = IconCode;
const IconColorSwatch = component({
  name: "IconColorSwatch",
  setup: () => {
    return () => createVNode(IconBase, {
      "viewBox": "0 0 24 24"
    }, {
      default: () => [createVNode("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        "d": "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
      }, null)]
    });
  }
});
var IconColorSwatch$1 = IconColorSwatch;
const IconColor = component({
  name: "IconColor",
  setup: () => {
    return () => createVNode(IconBase, {
      "viewBox": "0 0 24 24",
      "useStroke": false
    }, {
      default: () => [createVNode("path", {
        "d": "M19,11.5C19,11.5 17,13.67 17,15C17,16.1 17.9,17 19,17C20.1,17 21,16.1 21,15C21,13.67 19,11.5 19,11.5M5.21,10L10,5.21L14.79,10M16.56,8.94L7.62,0L6.21,1.41L8.59,3.79L3.44,8.94C2.85,9.5 2.85,10.47 3.44,11.06L8.94,16.56C9.23,16.85 9.62,17 10,17C10.38,17 10.77,16.85 11.06,16.56L16.56,11.06C17.15,10.47 17.15,9.5 16.56,8.94Z"
      }, null)]
    });
  }
});
var IconColor$1 = IconColor;
const IconDocumentAdd = component({
  name: "IconDocumentAdd",
  setup: () => {
    return () => createVNode(IconBase, {
      "viewBox": "0 0 24 24"
    }, {
      default: () => [createVNode("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        "d": "M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      }, null)]
    });
  }
});
var IconDocumentAdd$1 = IconDocumentAdd;
const IconDots = component({
  name: "IconDots",
  setup: () => {
    return () => createVNode(IconBase, {
      "viewBox": "0 0 24 24"
    }, {
      default: () => [createVNode("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        "d": "M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
      }, null)]
    });
  }
});
var IconDots$1 = IconDots;
const IconEye = component({
  name: "IconEye",
  setup: () => {
    return () => createVNode(IconBase, {
      "viewBox": "0 0 24 24"
    }, {
      default: () => [createVNode("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        "d": "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      }, null)]
    });
  }
});
var IconEye$1 = IconEye;
const IconFolder = component({
  name: "IconFolder",
  setup: () => {
    return () => createVNode(IconBase, {
      "viewBox": "0 0 24 24"
    }, {
      default: () => [createVNode("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        "d": "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
      }, null)]
    });
  }
});
var IconFolder$1 = IconFolder;
const IconGithub = component({
  name: "IconGithub",
  setup: () => {
    return () => createVNode(IconBase, {
      "viewBox": "0 0 512 512",
      "useStroke": false
    }, {
      default: () => [createVNode("path", {
        "d": "M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z"
      }, null)]
    });
  }
});
var IconGithub$1 = IconGithub;
const IconHeart = component({
  name: "IconHeart",
  setup: () => {
    return () => createVNode(IconBase, {
      "viewBox": "0 0 24 24"
    }, {
      default: () => [createVNode("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        "d": "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      }, null)]
    });
  }
});
var IconHeart$1 = IconHeart;
const IconInboxIn = component({
  name: "IconInboxIn",
  setup: () => {
    return () => createVNode(IconBase, {
      "viewBox": "0 0 24 24"
    }, {
      default: () => [createVNode("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        "d": "M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
      }, null)]
    });
  }
});
var IconInboxIn$1 = IconInboxIn;
const IconInfo = component({
  name: "IconInfo",
  setup: () => {
    return () => createVNode(IconBase, {
      "viewBox": "0 0 24 24"
    }, {
      default: () => [createVNode("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        "d": "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      }, null)]
    });
  }
});
var IconInfo$1 = IconInfo;
const IconInvalid = component({
  name: "IconInvalid",
  setup: () => {
    return () => createVNode(IconBase, {
      "viewBox": "0 0 24 24"
    }, {
      default: () => [createVNode("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        "d": "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
      }, null)]
    });
  }
});
var IconInvalid$1 = IconInvalid;
const IconLightningBolt = component({
  name: "IconLightningBolt",
  setup: () => {
    return () => createVNode(IconBase, {
      "viewBox": "0 0 24 24"
    }, {
      default: () => [createVNode("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        "d": "M13 10V3L4 14h7v7l9-11h-7z"
      }, null)]
    });
  }
});
var IconLightningBolt$1 = IconLightningBolt;
const IconMenuAlt2 = component({
  name: "IconMenuAlt2",
  setup: () => {
    return () => createVNode(IconBase, {
      "viewBox": "0 0 24 24"
    }, {
      default: () => [createVNode("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        "d": "M4 6h16M4 12h16M4 18h7"
      }, null)]
    });
  }
});
var IconMenuAlt2$1 = IconMenuAlt2;
const IconMenu = component({
  name: "IconMenu",
  setup: () => {
    return () => createVNode(IconBase, {
      "viewBox": "0 0 24 24"
    }, {
      default: () => [createVNode("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        "d": "M4 6h16M4 12h16M4 18h16"
      }, null)]
    });
  }
});
var IconMenu$1 = IconMenu;
const IconSearch = component({
  name: "IconSearch",
  setup: () => {
    return () => createVNode(IconBase, {
      "viewBox": "0 0 24 24"
    }, {
      default: () => [createVNode("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        "d": "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      }, null)]
    });
  }
});
var IconSearch$1 = IconSearch;
const IconTemplate = component({
  name: "IconTemplate",
  setup: () => {
    return () => createVNode(IconBase, {
      "viewBox": "0 0 24 24"
    }, {
      default: () => [createVNode("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        "d": "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
      }, null)]
    });
  }
});
var IconTemplate$1 = IconTemplate;
const IconText = component({
  name: "IconText",
  setup: () => {
    return () => createVNode(IconBase, {
      "viewBox": "0 0 24 24",
      "useStroke": false
    }, {
      default: () => [createVNode("path", {
        "d": "M4,2 L20,2 C21.1045695,2 22,2.8954305 22,4 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,4 C2,2.8954305 2.8954305,2 4,2 Z M4,4 L4,20 L20,20 L20,4 L4,4 Z M14.7999209,15 L9.19992091,15 L8,18 L6,18 L11,6 L13,6 L18,18 L16,18 L14.7999209,15 Z M13.9998682,13 L11.9997364,8 L9.99986818,13 L13.9998682,13 Z"
      }, null)]
    });
  }
});
var IconText$1 = IconText;
const IconWarning = component({
  name: "IconWarning",
  setup: () => {
    return () => createVNode(IconBase, {
      "viewBox": "0 0 24 24"
    }, {
      default: () => [createVNode("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        "d": "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      }, null)]
    });
  }
});
var IconWarning$1 = IconWarning;
var icons$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  IconBase,
  IconAdjustments: IconAdjustments$1,
  IconArchive: IconArchive$1,
  IconArrow: IconArrow$1,
  IconBack: IconBack$1,
  IconBell: IconBell$1,
  IconBookOpen: IconBookOpen$1,
  IconCheck: IconCheck$1,
  IconClose: IconClose$1,
  IconCode: IconCode$1,
  IconColorSwatch: IconColorSwatch$1,
  IconColor: IconColor$1,
  IconDocumentAdd: IconDocumentAdd$1,
  IconDots: IconDots$1,
  IconEye: IconEye$1,
  IconFolder: IconFolder$1,
  IconGithub: IconGithub$1,
  IconHeart: IconHeart$1,
  IconInboxIn: IconInboxIn$1,
  IconInfo: IconInfo$1,
  IconInvalid: IconInvalid$1,
  IconLightningBolt: IconLightningBolt$1,
  IconMenuAlt2: IconMenuAlt2$1,
  IconMenu: IconMenu$1,
  IconSearch: IconSearch$1,
  IconTemplate: IconTemplate$1,
  IconText: IconText$1,
  IconWarning: IconWarning$1
});
const css$B = ".alert{align-items:center;display:flex;flex-direction:column;justify-content:space-between}.alert>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}@media (min-width:768px){.alert{flex-direction:row}.alert>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(0px*var(--tw-space-y-reverse));margin-top:calc(0px*(1 - var(--tw-space-y-reverse)))}}.alert>*{display:flex}";
var s1$b = css$B;
const css$A = ".alert{--tw-bg-opacity:1;background-color:hsla(var(--b2)/var(--tw-bg-opacity));border-radius:var(--rounded-box,1rem);padding:1rem}";
var s2$b = css$A;
const css$z = ".alert-sm{padding:.5rem}.alert-info{--tw-bg-opacity:1;--tw-bg-opacity:0.1;--tw-text-opacity:1;background-color:hsla(var(--in)/var(--tw-bg-opacity));color:hsla(var(--in)/var(--tw-text-opacity))}.alert-success{--tw-bg-opacity:1;--tw-bg-opacity:0.1;--tw-text-opacity:1;background-color:hsla(var(--su)/var(--tw-bg-opacity));color:hsla(var(--su)/var(--tw-text-opacity))}.alert-warning{--tw-bg-opacity:1;--tw-bg-opacity:0.1;--tw-text-opacity:1;background-color:hsla(var(--wa)/var(--tw-bg-opacity));color:hsla(var(--wa)/var(--tw-text-opacity))}.alert-error{--tw-bg-opacity:1;--tw-bg-opacity:0.1;--tw-text-opacity:1;background-color:hsla(var(--er)/var(--tw-bg-opacity));color:hsla(var(--er)/var(--tw-text-opacity))}";
var s3$4 = css$z;
const css$y = ".dv-alert__content{flex:1 1 0%}.dv-alert__content>label{line-height:1.5rem}.dv-alert__content>label>h4{margin:0}.dv-alert__content>label>p{--tw-text-opacity:1;--tw-text-opacity:0.6;color:hsla(var(--bc)/var(--tw-text-opacity));font-size:.875rem;line-height:1.25rem}.dv-alert__iconwrap{display:flex;font-size:1.5em;margin-right:.5rem}.dv-alert__actions{flex:none}";
var s$7 = css$y;
var style$b = [s1$b, s2$b, s3$4, s$7];
const Alert = component({
  name: "Alert",
  setup: (_, {
    attrs,
    slots
  }) => {
    return () => {
      var _a, _b, _c, _d, _e, _f;
      const icon = ((_a = slots.icon) == null ? void 0 : _a.call(slots)) || ((_c = (_b = {
        info: () => createVNode(IconInfo$1, null, null),
        success: () => createVNode(IconBell$1, null, null),
        warning: () => createVNode(IconWarning$1, null, null),
        error: () => createVNode(IconInvalid$1, null, null)
      })[attrs.type]) == null ? void 0 : _c.call(_b));
      const actions = (_d = slots.actions) == null ? void 0 : _d.call(slots);
      const content = (_e = slots.content) == null ? void 0 : _e.call(slots);
      const defaultSlot = (_f = slots.default) == null ? void 0 : _f.call(slots);
      return createVNode("div", {
        "class": ["dv-alert alert", `alert-${attrs.type || ""}`]
      }, [createVNode("div", {
        "class": "dv-alert__content"
      }, [icon ? createVNode("div", {
        "class": "dv-alert__iconwrap"
      }, [icon]) : null, createVNode("label", null, [content ? createVNode(Fragment, null, [createVNode("h4", null, [defaultSlot]), createVNode("p", null, [content])]) : defaultSlot])]), actions ? createVNode("div", {
        "class": "dv-alert__actions"
      }, [actions]) : null]);
    };
  }
}, style$b);
const css$x = ".artboard{width:100%}";
var s1$a = css$x;
const css$w = ".artboard-demo{align-items:center;display:flex;flex:none;flex-direction:column;justify-content:center}.artboard.phone{width:320px}.artboard.phone-1{height:568px;width:320px}.artboard.phone-1.horizontal{height:320px;width:568px}.artboard.phone-2{height:667px;width:375px}.artboard.phone-2.horizontal{height:375px;width:667px}.artboard.phone-3{height:736px;width:414px}.artboard.phone-3.horizontal{height:414px;width:736px}.artboard.phone-4{height:812px;width:375px}.artboard.phone-4.horizontal{height:375px;width:812px}.artboard.phone-5{height:896px;width:414px}.artboard.phone-5.horizontal{height:414px;width:896px}.artboard.phone-6{height:1024px;width:320px}.artboard.phone-6.horizontal{height:320px;width:1024px}";
var s2$a = css$w;
const css$v = ".artboard-demo{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsla(var(--b1)/var(--tw-bg-opacity));border-radius:var(--rounded-box,1rem);box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);color:hsla(var(--bc)/var(--tw-text-opacity))}";
var s3$3 = css$v;
var style$a = [s1$a, s2$a, s3$3];
const Artboard = component({
  name: "Artboard",
  props: {
    phone: [String, Boolean],
    horizontal: Boolean
  },
  setup: (props2, {
    slots
  }) => {
    return () => {
      var _a;
      return createVNode("div", {
        "class": ["artboard artboard-demo", {
          phone: ["", true].includes(props2.phone),
          [`phone-${props2.phone}`]: !!props2.phone && typeof props2.phone === "string",
          horizontal: !!props2.horizontal
        }]
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
}, style$a);
const css$u = ".mask{-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:contain;mask-size:contain}";
var s1$9 = css$u;
const css$t = ".mask-squircle{-webkit-mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDBDMjAgMCAwIDIwIDAgMTAwczIwIDEwMCAxMDAgMTAwIDEwMC0yMCAxMDAtMTAwUzE4MCAwIDEwMCAwWiIvPjwvc3ZnPg==);mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDBDMjAgMCAwIDIwIDAgMTAwczIwIDEwMCAxMDAgMTAwIDEwMC0yMCAxMDAtMTAwUzE4MCAwIDEwMCAwWiIvPjwvc3ZnPg==)}.mask-decagon{-webkit-mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjMDAwIiBkPSJtOTYgMCA1OC43NzkgMTkuMDk4IDM2LjMyNyA1MHY2MS44MDRsLTM2LjMyNyA1MEw5NiAyMDBsLTU4Ljc3OS0xOS4wOTgtMzYuMzI3LTUwVjY5LjA5OGwzNi4zMjctNTB6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=);mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjMDAwIiBkPSJtOTYgMCA1OC43NzkgMTkuMDk4IDM2LjMyNyA1MHY2MS44MDRsLTM2LjMyNyA1MEw5NiAyMDBsLTU4Ljc3OS0xOS4wOTgtMzYuMzI3LTUwVjY5LjA5OGwzNi4zMjctNTB6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.mask-diamond{-webkit-mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjMDAwIiBkPSJtMTAwIDAgMTAwIDEwMC0xMDAgMTAwTDAgMTAweiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+);mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjMDAwIiBkPSJtMTAwIDAgMTAwIDEwMC0xMDAgMTAwTDAgMTAweiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+)}.mask-heart{-webkit-mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE4NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDE4NC42MDZhMTUuMzg0IDE1LjM4NCAwIDAgMS04LjY1My0yLjY3OEM1My41NjUgMTU2LjI4IDM3LjIwNSAxMzguNjk1IDI4LjE4MiAxMjcuNyA4Ljk1MiAxMDQuMjY0LS4yNTQgODAuMjAyLjAwNSA1NC4xNDYuMzA4IDI0LjI4NyAyNC4yNjQgMCA1My40MDYgMGMyMS4xOTIgMCAzNS44NjkgMTEuOTM3IDQ0LjQxNiAyMS44NzlhMi44ODQgMi44ODQgMCAwIDAgNC4zNTYgMEMxMTAuNzI1IDExLjkyNyAxMjUuNDAyIDAgMTQ2LjU5NCAwYzI5LjE0MiAwIDUzLjA5OCAyNC4yODcgNTMuNCA1NC4xNTEuMjYgMjYuMDYxLTguOTU2IDUwLjEyMi0yOC4xNzYgNzMuNTU0LTkuMDIzIDEwLjk5NC0yNS4zODMgMjguNTgtNjMuMTY1IDU0LjIyOGExNS4zODQgMTUuMzg0IDAgMCAxLTguNjUzIDIuNjczWiIgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+);mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE4NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDE4NC42MDZhMTUuMzg0IDE1LjM4NCAwIDAgMS04LjY1My0yLjY3OEM1My41NjUgMTU2LjI4IDM3LjIwNSAxMzguNjk1IDI4LjE4MiAxMjcuNyA4Ljk1MiAxMDQuMjY0LS4yNTQgODAuMjAyLjAwNSA1NC4xNDYuMzA4IDI0LjI4NyAyNC4yNjQgMCA1My40MDYgMGMyMS4xOTIgMCAzNS44NjkgMTEuOTM3IDQ0LjQxNiAyMS44NzlhMi44ODQgMi44ODQgMCAwIDAgNC4zNTYgMEMxMTAuNzI1IDExLjkyNyAxMjUuNDAyIDAgMTQ2LjU5NCAwYzI5LjE0MiAwIDUzLjA5OCAyNC4yODcgNTMuNCA1NC4xNTEuMjYgMjYuMDYxLTguOTU2IDUwLjEyMi0yOC4xNzYgNzMuNTU0LTkuMDIzIDEwLjk5NC0yNS4zODMgMjguNTgtNjMuMTY1IDU0LjIyOGExNS4zODQgMTUuMzg0IDAgMCAxLTguNjUzIDIuNjczWiIgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+)}.mask-hexagon{-webkit-mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgyIiBoZWlnaHQ9IjIwMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNLjMgNjUuNDg2YzAtOS4xOTYgNi42ODctMjAuMDYzIDE0LjIxMS0yNS4wNzhsNjEuODYtMzUuOTQ2YzguMzYtNS4wMTYgMjAuODk5LTUuMDE2IDI5LjI1OCAwbDYxLjg2IDM1Ljk0NmM4LjM2IDUuMDE1IDE0LjIxMSAxNS44ODIgMTQuMjExIDI1LjA3OHY3MS4wNTVjMCA5LjE5Ni02LjY4NyAyMC4wNjMtMTQuMjExIDI1LjA3OWwtNjEuODYgMzUuOTQ1Yy04LjM2IDQuMTgtMjAuODk5IDQuMTgtMjkuMjU4IDBMMTQuNTEgMTYxLjYyQzYuMTUxIDE1Ny40NC4zIDE0NS43MzcuMyAxMzYuNTRWNjUuNDg2WiIgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+);mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgyIiBoZWlnaHQ9IjIwMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNLjMgNjUuNDg2YzAtOS4xOTYgNi42ODctMjAuMDYzIDE0LjIxMS0yNS4wNzhsNjEuODYtMzUuOTQ2YzguMzYtNS4wMTYgMjAuODk5LTUuMDE2IDI5LjI1OCAwbDYxLjg2IDM1Ljk0NmM4LjM2IDUuMDE1IDE0LjIxMSAxNS44ODIgMTQuMjExIDI1LjA3OHY3MS4wNTVjMCA5LjE5Ni02LjY4NyAyMC4wNjMtMTQuMjExIDI1LjA3OWwtNjEuODYgMzUuOTQ1Yy04LjM2IDQuMTgtMjAuODk5IDQuMTgtMjkuMjU4IDBMMTQuNTEgMTYxLjYyQzYuMTUxIDE1Ny40NC4zIDE0NS43MzcuMyAxMzYuNTRWNjUuNDg2WiIgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+)}.mask-hexagon-2{-webkit-mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE4MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNjQuNzg2IDE4MS40Yy05LjE5NiAwLTIwLjA2My02LjY4Ny0yNS4wNzktMTQuMjFMMy43NjIgMTA1LjMzYy01LjAxNi04LjM2LTUuMDE2LTIwLjkgMC0yOS4yNTlsMzUuOTQ1LTYxLjg2QzQ0LjcyMyA1Ljg1MSA1NS41OSAwIDY0Ljc4NiAwaDcxLjA1NWM5LjE5NiAwIDIwLjA2MyA2LjY4OCAyNS4wNzkgMTQuMjExbDM1Ljk0NSA2MS44NmM0LjE4IDguMzYgNC4xOCAyMC44OTkgMCAyOS4yNThsLTM1Ljk0NSA2MS44NmMtNC4xOCA4LjM2LTE1Ljg4MyAxNC4yMTEtMjUuMDc5IDE0LjIxMUg2NC43ODZaIiBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=);mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE4MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNjQuNzg2IDE4MS40Yy05LjE5NiAwLTIwLjA2My02LjY4Ny0yNS4wNzktMTQuMjFMMy43NjIgMTA1LjMzYy01LjAxNi04LjM2LTUuMDE2LTIwLjkgMC0yOS4yNTlsMzUuOTQ1LTYxLjg2QzQ0LjcyMyA1Ljg1MSA1NS41OSAwIDY0Ljc4NiAwaDcxLjA1NWM5LjE5NiAwIDIwLjA2MyA2LjY4OCAyNS4wNzkgMTQuMjExbDM1Ljk0NSA2MS44NmM0LjE4IDguMzYgNC4xOCAyMC44OTkgMCAyOS4yNThsLTM1Ljk0NSA2MS44NmMtNC4xOCA4LjM2LTE1Ljg4MyAxNC4yMTEtMjUuMDc5IDE0LjIxMUg2NC43ODZaIiBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=)}.mask-circle{-webkit-mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGZpbGw9IiMwMDAiIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjEwMCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+);mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGZpbGw9IiMwMDAiIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjEwMCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+)}.mask-parallelogram{-webkit-mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjMDAwIiBkPSJNNDYuMTU0IDBIMjAwbC00Ni4xNTQgMTUzLjg0NkgweiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+);mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjMDAwIiBkPSJNNDYuMTU0IDBIMjAwbC00Ni4xNTQgMTUzLjg0NkgweiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+)}.mask-parallelogram-2{-webkit-mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjMDAwIiBkPSJNMTUzLjg0NiAwSDBsNDYuMTU0IDE1My44NDZIMjAweiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+);mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjMDAwIiBkPSJNMTUzLjg0NiAwSDBsNDYuMTU0IDE1My44NDZIMjAweiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+)}.mask-parallelogram-3{-webkit-mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTU0IiBoZWlnaHQ9IjIwMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjMDAwIiBkPSJNLjA3NyA0Ny4wNzd2MTUzLjg0NmwxNTMuODQ2LTQ2LjE1NFYuOTIzeiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+);mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTU0IiBoZWlnaHQ9IjIwMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjMDAwIiBkPSJNLjA3NyA0Ny4wNzd2MTUzLjg0NmwxNTMuODQ2LTQ2LjE1NFYuOTIzeiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+)}.mask-parallelogram-4{-webkit-mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTU0IiBoZWlnaHQ9IjIwMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjMDAwIiBkPSJNMTUzLjkyMyA0Ny4wNzd2MTUzLjg0NkwuMDc3IDE1NC43N1YuOTIzeiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+);mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTU0IiBoZWlnaHQ9IjIwMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjMDAwIiBkPSJNMTUzLjkyMyA0Ny4wNzd2MTUzLjg0NkwuMDc3IDE1NC43N1YuOTIzeiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+)}.mask-pentagon{-webkit-mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE4MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjMDAwIiBkPSJtOTYgMCA5NS4xMDYgNjkuMDk4LTM2LjMyNyAxMTEuODA0SDM3LjIyTC44OTQgNjkuMDk4eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+);mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE4MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjMDAwIiBkPSJtOTYgMCA5NS4xMDYgNjkuMDk4LTM2LjMyNyAxMTEuODA0SDM3LjIyTC44OTQgNjkuMDk4eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+)}.mask-square{-webkit-mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjMDAwIiBkPSJNMCAwaDIwMHYyMDBIMHoiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==);mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjMDAwIiBkPSJNMCAwaDIwMHYyMDBIMHoiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==)}.mask-star{-webkit-mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjMDAwIiBkPSJtOTYgMTM3LjI2My01OC43NzkgNDIuMDI0IDIyLjE2My02OC4zODlMLjg5NCA2OC40ODFsNzIuNDc2LS4yNDNMOTYgMGwyMi42MyA2OC4yMzggNzIuNDc2LjI0My01OC40OSA0Mi40MTcgMjIuMTYzIDY4LjM4OXoiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==);mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjMDAwIiBkPSJtOTYgMTM3LjI2My01OC43NzkgNDIuMDI0IDIyLjE2My02OC4zODlMLjg5NCA2OC40ODFsNzIuNDc2LS4yNDNMOTYgMGwyMi42MyA2OC4yMzggNzIuNDc2LjI0My01OC40OSA0Mi40MTcgMjIuMTYzIDY4LjM4OXoiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==)}.mask-star-2{-webkit-mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjMDAwIiBkPSJtOTYgMTUzLjA0NC01OC43NzkgMjYuMjQzIDcuMDItNjMuNTEzTC44OTQgNjguNDgxbDYzLjExNy0xMy4wMUw5NiAwbDMxLjk4OSA1NS40NzIgNjMuMTE3IDEzLjAxLTQzLjM0NyA0Ny4yOTIgNy4wMiA2My41MTN6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=);mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjMDAwIiBkPSJtOTYgMTUzLjA0NC01OC43NzkgMjYuMjQzIDcuMDItNjMuNTEzTC44OTQgNjguNDgxbDYzLjExNy0xMy4wMUw5NiAwbDMxLjk4OSA1NS40NzIgNjMuMTE3IDEzLjAxLTQzLjM0NyA0Ny4yOTIgNy4wMiA2My41MTN6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.mask-triangle{-webkit-mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc0IiBoZWlnaHQ9IjE0OSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjMDAwIiBkPSJtODcgMTQ4LjQ3Ni04Ni42MDMuMTg1TDQzLjg2IDc0LjQyMyA4NyAwbDQzLjE0IDc0LjQyMyA0My40NjMgNzQuMjM4eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+);mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc0IiBoZWlnaHQ9IjE0OSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjMDAwIiBkPSJtODcgMTQ4LjQ3Ni04Ni42MDMuMTg1TDQzLjg2IDc0LjQyMyA4NyAwbDQzLjE0IDc0LjQyMyA0My40NjMgNzQuMjM4eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+)}.mask-triangle-2{-webkit-mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc0IiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjMDAwIiBkPSJtODcgLjczOCA4Ni42MDMtLjE4NC00My40NjMgNzQuMjM4TDg3IDE0OS4yMTQgNDMuODYgNzQuNzkyLjM5Ny41NTR6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=);mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc0IiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjMDAwIiBkPSJtODcgLjczOCA4Ni42MDMtLjE4NC00My40NjMgNzQuMjM4TDg3IDE0OS4yMTQgNDMuODYgNzQuNzkyLjM5Ny41NTR6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.mask-triangle-3{-webkit-mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE3NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjMDAwIiBkPSJtMTQ5LjM2OSA4Ny4xMDcuMTg1IDg2LjYwMy03NC4yMzktNDMuNDYzTC44OTMgODcuMTA3bDc0LjQyMi00My4xNEwxNDkuNTU0LjUwNXoiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==);mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE3NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjMDAwIiBkPSJtMTQ5LjM2OSA4Ny4xMDcuMTg1IDg2LjYwMy03NC4yMzktNDMuNDYzTC44OTMgODcuMTA3bDc0LjQyMi00My4xNEwxNDkuNTU0LjUwNXoiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==)}.mask-triangle-4{-webkit-mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE3NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjMDAwIiBkPSJNLjYzMSA4Ny4xMDcuNDQ2LjUwNWw3NC4yMzkgNDMuNDYyIDc0LjQyMiA0My4xNC03NC40MjIgNDMuMTRMLjQ0NiAxNzMuNzF6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=);mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE3NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjMDAwIiBkPSJNLjYzMSA4Ny4xMDcuNDQ2LjUwNWw3NC4yMzkgNDMuNDYyIDc0LjQyMiA0My4xNC03NC40MjIgNDMuMTRMLjQ0NiAxNzMuNzF6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}";
var s2$9 = css$t;
var style$9 = [s1$9, s2$9];
const props$6 = {
  type: {
    type: String,
    default: "squircle"
  }
};
const Mask = component({
  name: "Mask",
  props: props$6,
  setup: (props2, {
    slots
  }) => {
    return () => {
      var _a, _b;
      const child = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0];
      return cloneVNode(child, {
        class: `dv-mask mask mask-${props2.type}`
      });
    };
  }
}, style$9);
const css$s = ".avatar{display:inline-flex;position:relative}.avatar>div{display:block;overflow:hidden}.avatar img{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.avatar.placeholder>div{align-items:center;display:flex;justify-content:center}";
var s1$8 = css$s;
const css$r = ".avatar-group{display:flex;overflow:hidden}.avatar-group .avatar{--tw-border-opacity:1;border-color:hsla(var(--b1)/var(--tw-border-opacity));border-radius:9999px;border-width:4px;overflow:hidden}";
var s2$8 = css$r;
const css$q = '.avatar.online:before{--tw-bg-opacity:1;background-color:hsla(var(--su)/var(--tw-bg-opacity));border-radius:9999px;box-shadow:0 0 0 2px hsl(var(--b1));content:"";display:block;height:15%;position:absolute;right:7%;top:7%;width:15%;z-index:10}.avatar.offline:before{--tw-bg-opacity:1;background-color:hsla(var(--b3)/var(--tw-bg-opacity));border-radius:9999px;box-shadow:0 0 0 2px hsl(var(--b1));content:"";display:block;height:15%;position:absolute;right:7%;top:7%;width:15%;z-index:10}';
var s3$2 = css$q;
const css$p = ".dv-avatar-circle{border-radius:9999px}.dv-avatar.placeholder>.mask{--tw-text-opacity:1;--tw-bg-opacity:1;background-color:hsla(var(--nf)/var(--tw-bg-opacity,1));color:hsla(var(--nc)/var(--tw-text-opacity,1))}";
var s$6 = css$p;
var style$8 = [s1$8, s2$8, s3$2, s$6];
function cssUnit(unit) {
  if (typeof unit === "number") {
    return (unit || 0) + "px";
  }
  return unit || "";
}
function isUndefined(v) {
  return typeof v === "undefined";
}
const ctxAvatarGroupKey = Symbol("AvatarGroup");
const sizeMap = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 64
};
function getSizeValue(size) {
  return cssUnit(sizeMap[size] || size);
}
const props$5 = {
  src: String,
  placeholder: {
    type: String,
    default: void 0
  },
  size: {
    type: [Number, String],
    default: "md"
  },
  type: {
    type: String,
    default: "circle"
  },
  status: {
    type: String,
    default: ""
  }
};
const Avatar = componentV2({
  name: "Avatar",
  props: props$5,
  setup: (props2, {
    slots
  }) => {
    const ctx2 = inject(ctxAvatarGroupKey, {
      size: ""
    });
    const merged = computed(() => ({
      size: ctx2.size || props2.size
    }));
    const sizeStyle = computed(() => {
      const sizeValue = getSizeValue(merged.value.size);
      return {
        width: sizeValue,
        height: sizeValue
      };
    });
    return () => {
      var _a;
      const children = (_a = slots.default) == null ? void 0 : _a.call(slots);
      const renderPls = () => props2.placeholder ? createVNode("span", null, [props2.placeholder]) : null;
      const renderImg = () => props2.src ? createVNode("img", {
        "src": props2.src
      }, null) : null;
      return createVNode("div", {
        "class": {
          "dv-avatar avatar": true,
          placeholder: !props2.src && !isUndefined(props2.placeholder),
          "dv-avatar-circle": props2.type === "circle",
          [props2.status]: !!props2.status
        }
      }, [createVNode(Mask, {
        "type": props2.type
      }, {
        default: () => [createVNode("div", {
          "style": sizeStyle.value
        }, [children || renderImg() || renderPls()])]
      })]);
    };
  }
}, style$8);
const props$4 = {
  size: {
    type: [Number, String],
    default: "md"
  },
  gap: {
    type: [Number, String],
    default: void 0
  }
};
const AvatrGroup = componentV2({
  name: "AvatarGroup",
  props: props$4,
  setup: (props2, {
    slots
  }) => {
    provide(ctxAvatarGroupKey, reactive({
      size: toRef(props2, "size")
    }));
    const gapValue = computed(() => {
      const res = props2.gap || sizeMap[props2.size] / 2 || 24;
      return typeof res === "number" ? `-${res}px` : "-" + res;
    });
    return () => {
      var _a;
      return createVNode("div", {
        "class": "dv-avatar-group avatar-group"
      }, [(((_a = slots.default) == null ? void 0 : _a.call(slots)) || []).map((v, i) => cloneVNode(v, {
        style: i === 0 ? {} : {
          marginLeft: gapValue.value
        }
      }))]);
    };
  }
}, style$8);
const css$o = ".badge{align-items:center;display:inline-flex;font-size:.875rem;height:1.25rem;justify-content:center;line-height:1.25rem;padding-left:.563rem;padding-right:.563rem;transition-duration:.15s;transition-duration:.2s;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}";
var s1$7 = css$o;
const css$n = ".badge{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsla(var(--n)/var(--tw-bg-opacity));border-color:hsla(var(--n)/var(--tw-border-opacity));border-radius:var(--rounded-badge,1.9rem);border-width:1px;color:hsla(var(--nc)/var(--tw-text-opacity))}.btn .badge{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsla(var(--b1)/var(--tw-bg-opacity));border-color:transparent;color:hsla(var(--bc)/var(--tw-text-opacity))}.btn .badge-outline{--tw-border-opacity:1;--tw-text-opacity:1;background-color:transparent;border-color:hsla(var(--b2)/var(--tw-border-opacity));color:hsla(var(--b2)/var(--tw-text-opacity))}.btn-outline .badge{--tw-border-opacity:1;--tw-text-opacity:1;border-color:hsla(var(--nf)/var(--tw-border-opacity));color:hsla(var(--nc)/var(--tw-text-opacity))}.btn-outline.btn-primary .badge{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsla(var(--p)/var(--tw-bg-opacity));border-color:hsla(var(--p)/var(--tw-border-opacity));color:hsla(var(--pc)/var(--tw-text-opacity))}.btn-outline.btn-secondary .badge{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsla(var(--s)/var(--tw-bg-opacity));border-color:hsla(var(--s)/var(--tw-border-opacity));color:hsla(var(--sc)/var(--tw-text-opacity))}.btn-outline.btn-accent .badge{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsla(var(--a)/var(--tw-bg-opacity));border-color:hsla(var(--a)/var(--tw-border-opacity));color:hsla(var(--ac)/var(--tw-text-opacity))}.btn-outline .badge.outline{--tw-border-opacity:1;background-color:transparent;border-color:hsla(var(--nf)/var(--tw-border-opacity))}.btn-outline.btn-primary .badge-outline{--tw-border-opacity:1;--tw-text-opacity:1;background-color:transparent;border-color:hsla(var(--p)/var(--tw-border-opacity));color:hsla(var(--p)/var(--tw-text-opacity))}.btn-outline.btn-secondary .badge-outline{--tw-border-opacity:1;--tw-text-opacity:1;background-color:transparent;border-color:hsla(var(--s)/var(--tw-border-opacity));color:hsla(var(--s)/var(--tw-text-opacity))}.btn-outline.btn-accent .badge-outline{--tw-border-opacity:1;--tw-text-opacity:1;background-color:transparent;border-color:hsla(var(--a)/var(--tw-border-opacity));color:hsla(var(--a)/var(--tw-text-opacity))}.btn-outline:hover .badge{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsla(var(--b2)/var(--tw-bg-opacity));border-color:hsla(var(--b2)/var(--tw-border-opacity));color:hsla(var(--bc)/var(--tw-text-opacity))}.btn-outline:hover .badge.outline{--tw-border-opacity:1;--tw-text-opacity:1;border-color:hsla(var(--b2)/var(--tw-border-opacity));color:hsla(var(--nc)/var(--tw-text-opacity))}.btn-outline.btn-primary:hover .badge{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsla(var(--pc)/var(--tw-bg-opacity));border-color:hsla(var(--pc)/var(--tw-border-opacity));color:hsla(var(--p)/var(--tw-text-opacity))}.btn-outline.btn-primary:hover .badge.outline{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsla(var(--pf)/var(--tw-bg-opacity));border-color:hsla(var(--pc)/var(--tw-border-opacity));color:hsla(var(--pc)/var(--tw-text-opacity))}.btn-outline.btn-secondary:hover .badge{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsla(var(--sc)/var(--tw-bg-opacity));border-color:hsla(var(--sc)/var(--tw-border-opacity));color:hsla(var(--s)/var(--tw-text-opacity))}.btn-outline.btn-secondary:hover .badge.outline{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsla(var(--sf)/var(--tw-bg-opacity));border-color:hsla(var(--sc)/var(--tw-border-opacity));color:hsla(var(--sc)/var(--tw-text-opacity))}.btn-outline.btn-accent:hover .badge{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsla(var(--ac)/var(--tw-bg-opacity));border-color:hsla(var(--ac)/var(--tw-border-opacity));color:hsla(var(--a)/var(--tw-text-opacity))}.btn-outline.btn-accent:hover .badge.outline{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsla(var(--af)/var(--tw-bg-opacity));border-color:hsla(var(--ac)/var(--tw-border-opacity));color:hsla(var(--ac)/var(--tw-text-opacity))}";
var s2$7 = css$n;
const css$m = ".badge-xs{font-size:.75rem;height:.75rem;line-height:1rem;line-height:.75rem;padding-left:.313rem;padding-right:.313rem}.badge-sm{font-size:.75rem;height:1rem;line-height:1rem;padding-left:.438rem;padding-right:.438rem}.badge-md{font-size:.875rem;height:1.25rem;line-height:1.25rem;padding-left:.563rem;padding-right:.563rem}.badge-lg{font-size:1rem;height:1.5rem;line-height:1.5rem;padding-left:.688rem;padding-right:.688rem}";
var s3$1 = css$m;
const css$l = ".badge-primary{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsla(var(--p)/var(--tw-bg-opacity));border-color:hsla(var(--p)/var(--tw-border-opacity));color:hsla(var(--pc)/var(--tw-text-opacity))}.badge-secondary{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsla(var(--s)/var(--tw-bg-opacity));border-color:hsla(var(--s)/var(--tw-border-opacity));color:hsla(var(--sc)/var(--tw-text-opacity))}.badge-accent{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsla(var(--a)/var(--tw-bg-opacity));border-color:hsla(var(--a)/var(--tw-border-opacity));color:hsla(var(--ac)/var(--tw-text-opacity))}.badge-ghost{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsla(var(--b2)/var(--tw-bg-opacity));border-color:hsla(var(--b2)/var(--tw-border-opacity));color:hsla(var(--bc)/var(--tw-text-opacity))}.badge-outline{--tw-border-opacity:0.5;--tw-text-opacity:1;background-color:transparent;border-color:currentColor;color:hsla(var(--bc)/var(--tw-text-opacity))}.badge-outline.badge-primary{--tw-text-opacity:1;color:hsla(var(--p)/var(--tw-text-opacity))}.badge-outline.badge-secondary{--tw-text-opacity:1;color:hsla(var(--s)/var(--tw-text-opacity))}.badge-outline.badge-accent{--tw-text-opacity:1;color:hsla(var(--a)/var(--tw-text-opacity))}.badge-info{--tw-bg-opacity:1;--tw-bg-opacity:0.1;--tw-text-opacity:1;background-color:hsla(var(--in)/var(--tw-bg-opacity));border-color:transparent;color:hsla(var(--in)/var(--tw-text-opacity))}.badge-success{--tw-bg-opacity:1;--tw-bg-opacity:0.1;--tw-text-opacity:1;background-color:hsla(var(--su)/var(--tw-bg-opacity));border-color:transparent;color:hsla(var(--su)/var(--tw-text-opacity))}.badge-warning{--tw-bg-opacity:1;--tw-bg-opacity:0.1;--tw-text-opacity:1;background-color:hsla(var(--wa)/var(--tw-bg-opacity));border-color:transparent;color:hsla(var(--wa)/var(--tw-text-opacity))}.badge-error{--tw-bg-opacity:1;--tw-bg-opacity:0.1;--tw-text-opacity:1;background-color:hsla(var(--er)/var(--tw-bg-opacity));border-color:transparent;color:hsla(var(--er)/var(--tw-text-opacity))}";
var s4 = css$l;
const css$k = "";
var s$5 = css$k;
var style$7 = [s1$7, s2$7, s3$1, s4, s$5];
const props$3 = {
  outline: {
    type: Boolean,
    default: void 0
  }
};
const Badge = component({
  name: "Badge",
  props: props$3,
  setup: (props2, {
    attrs,
    slots
  }) => {
    const size = computed(() => attrs.size || "md");
    const outline = computed(() => props2.outline || false);
    return () => {
      var _a;
      return createVNode("div", {
        "class": {
          "dv-badge badge": true,
          [`badge-${attrs.type}`]: attrs.type,
          [`badge-${size.value}`]: size.value,
          [`badge-outline`]: outline.value
        }
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
}, style$7);
const css$j = ".breadcrumbs{max-width:100%;overflow-x:auto}.breadcrumbs>ul{align-items:center;display:flex;min-height:-webkit-min-content;min-height:-moz-min-content;min-height:min-content;white-space:nowrap}.breadcrumbs>ul>li{align-items:center;display:flex}.breadcrumbs>ul>li>a{align-items:center;cursor:pointer;display:flex}.breadcrumbs>ul>li>a:hover{text-decoration:underline}";
var s1$6 = css$j;
const css$i = '.breadcrumbs{padding-bottom:.5rem;padding-top:.5rem}.breadcrumbs>ul>li>a:focus{outline:2px solid transparent;outline-offset:2px}.breadcrumbs>ul>li>a:focus-visible{border-radius:var(--rounded-badge,1.9rem);box-shadow:0 0 0 2px currentColor}.breadcrumbs>ul>li+:before{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-rotate:45deg;border-right:1px solid;border-top:1px solid;content:"";display:block;height:.375rem;margin-left:.5rem;margin-right:.75rem;opacity:.4;transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));width:.375rem}';
var s2$6 = css$i;
const css$h = "";
var s$4 = css$h;
var style$6 = [s1$6, s2$6, s5, s$4];
const Breadcrumb = component({
  name: "Breadcrumb",
  setup: (_, {
    slots
  }) => {
    return () => {
      var _a;
      return createVNode("div", {
        "class": "dv-breadcrumbs breadcrumbs"
      }, [createVNode("ul", null, [(_a = slots.default) == null ? void 0 : _a.call(slots)])]);
    };
  }
}, style$6);
const BreadcrumbItem = component({
  name: "BreadcrumbItem",
  inheritAttrs: false,
  setup: (_, {
    attrs,
    slots
  }) => {
    return () => {
      var _a;
      return createVNode("li", null, [createVNode("a", attrs, [(_a = slots.default) == null ? void 0 : _a.call(slots)])]);
    };
  }
});
const css$g = ".drawer{display:grid;overflow:hidden}.drawer.drawer-end .drawer-toggle~.drawer-side>.drawer-overlay+*{--tw-translate-x:100%;justify-self:end}.drawer.drawer-end .drawer-toggle:checked~.drawer-side>.drawer-overlay+*{--tw-translate-x:0px}.drawer-toggle{-webkit-appearance:none;-moz-appearance:none;appearance:none;height:0;opacity:0;position:absolute;width:0}.drawer-toggle~.drawer-content{grid-column-start:1;grid-row-start:1;max-height:100vh;overflow-y:auto;z-index:0}.drawer-toggle~.drawer-side{display:grid;grid-column-start:1;grid-row-start:1;max-height:100vh}.drawer-toggle~.drawer-side>.drawer-overlay{grid-column-start:1;grid-row-start:1;opacity:0;visibility:hidden}.drawer-toggle~.drawer-side>.drawer-overlay+*{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-translate-x:-100%;grid-column-start:1;grid-row-start:1;transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));z-index:10}.drawer-toggle:checked~.drawer-side{overflow-y:auto}.drawer-toggle:checked~.drawer-side>.drawer-overlay{visibility:visible}.drawer-toggle:checked~.drawer-side>.drawer-overlay+*{--tw-translate-x:0px}[dir=rtl] .drawer-toggle~.drawer-side>.drawer-overlay+*{--tw-translate-x:100%}[dir=rtl] .drawer-toggle:checked~.drawer-side>.drawer-overlay+*{--tw-translate-x:0px}@media (min-width:1024px){.drawer-mobile{grid-auto-columns:-webkit-max-content auto;grid-auto-columns:max-content auto}.drawer-mobile>.drawer-toggle~.drawer-content{height:auto}@media (min-width:1024px){.drawer-mobile>.drawer-toggle~.drawer-content{grid-column-start:2}}.drawer-mobile>.drawer-toggle~.drawer-side{overflow-y:auto}@media (min-width:1024px){.drawer-mobile>.drawer-toggle~.drawer-side>.drawer-overlay{visibility:visible}}@media (min-width:1024px){.drawer-mobile>.drawer-toggle~.drawer-side>.drawer-overlay+*{--tw-translate-x:0px}}.drawer-mobile.drawer-end{grid-auto-columns:auto -webkit-max-content;grid-auto-columns:auto max-content}.drawer-mobile.drawer-end>.drawer-toggle~.drawer-content{height:auto}@media (min-width:1024px){.drawer-mobile.drawer-end>.drawer-toggle~.drawer-content{grid-column-start:1}}.drawer-mobile.drawer-end>.drawer-toggle~.drawer-side{overflow-y:auto}@media (min-width:1024px){.drawer-mobile.drawer-end>.drawer-toggle~.drawer-side{grid-column-start:2}}@media (min-width:1024px){.drawer-mobile.drawer-end>.drawer-toggle~.drawer-side>.drawer-overlay{visibility:visible}}@media (min-width:1024px){.drawer-mobile.drawer-end>.drawer-toggle~.drawer-side>.drawer-overlay+*{--tw-translate-x:0px}}}";
var s1$5 = css$g;
const css$f = ".drawer.drawer-end .drawer-toggle:checked~.drawer-content{--tw-translate-x:-0.5rem}.drawer-toggle~.drawer-content{transition-duration:.15s;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.drawer-toggle~.drawer-side>.drawer-overlay{--tw-bg-opacity:1;background-color:hsla(var(--nf)/var(--tw-bg-opacity));cursor:pointer;transition-duration:.15s;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.drawer-toggle~.drawer-side>.drawer-overlay+*{transition-duration:.15s;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.drawer-toggle:checked~.drawer-content{--tw-translate-x:0.5rem}.drawer-toggle:checked~.drawer-side>.drawer-overlay{opacity:.4}.drawer-toggle:focus-visible~.drawer-content .drawer-button{box-shadow:0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--nf))}.drawer-toggle:focus-visible~.drawer-content .drawer-button.btn-primary{box-shadow:0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--p))}.drawer-toggle:focus-visible~.drawer-content .drawer-button.btn-secondary{box-shadow:0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--s))}.drawer-toggle:focus-visible~.drawer-content .drawer-button.btn-accent{box-shadow:0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--a))}.drawer-toggle:focus-visible~.drawer-content .drawer-button.btn-info{box-shadow:0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--in))}.drawer-toggle:focus-visible~.drawer-content .drawer-button.btn-success{box-shadow:0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--su))}.drawer-toggle:focus-visible~.drawer-content .drawer-button.btn-warning{box-shadow:0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--wa))}.drawer-toggle:focus-visible~.drawer-content .drawer-button.btn-error{box-shadow:0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--er))}.drawer-toggle:focus-visible~.drawer-content .drawer-button.glass{box-shadow:0 0 0 2px currentColor}.drawer-toggle:focus-visible~.drawer-content .drawer-button.btn-ghost{box-shadow:0 0 0 2px currentColor}.drawer-toggle:focus-visible~.drawer-content .drawer-button.btn-link{box-shadow:0 0 0 2px currentColor}@media (min-width:1024px){.drawer-mobile>.drawer-toggle:checked~.drawer-content{--tw-translate-x:0px}}";
var s2$5 = css$f;
const css$e = ".dv-drawer--teleport{bottom:0;height:100vh;left:0;position:fixed;right:0;top:0}.dv-drawer--opacity-0{opacity:0}.dv-drawer--transition-opacity{transition-duration:.15s;transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1)}";
var s$3 = css$e;
var style$5 = [s1$5, s2$5, s$3];
function _isSlot$1(s6) {
  return typeof s6 === "function" || Object.prototype.toString.call(s6) === "[object Object]" && !isVNode(s6);
}
let id = 0;
const boolProps = {
  open: Boolean,
  disableTeleport: Boolean,
  mobileOnly: Boolean
};
const Drawer = component({
  name: "Drawer",
  props: boolProps,
  inheritAttrs: false,
  setup: (props2, {
    attrs,
    slots
  }) => {
    const finalChecked = ref(props2.open);
    watch(() => props2.open, async () => {
      await nextTick();
      await new Promise((r) => setTimeout(r));
      finalChecked.value = props2.open;
    });
    return () => {
      var _a, _b, _c, _d;
      const transitionWrap = (nodes) => {
        let _slot;
        return createVNode(Transition, {
          "enterFromClass": "dv-drawer--opacity-0",
          "enterActiveClass": "dv-drawer--transition-opacity",
          "leaveActiveClass": "dv-drawer--transition-opacity",
          "leaveToClass": "dv-drawer--opacity-0",
          "duration": 300
        }, _isSlot$1(_slot = withDirectives(nodes, [[vShow, props2.mobileOnly ? true : props2.open]])) ? _slot : {
          default: () => [_slot]
        });
      };
      const drawNode = props2.disableTeleport ? createVNode("div", mergeProps(attrs, {
        "class": ["dv-drawer drawer", {
          "dv-drawer--teleport": !props2.disableTeleport,
          "drawer-end": attrs.placement === "right",
          "drawer-mobile": !!props2.mobileOnly
        }],
        "style": {
          zIndex: 100 + id
        }
      }), [createVNode("input", {
        "type": "checkbox",
        "class": "drawer-toggle",
        "checked": finalChecked.value
      }, null), createVNode("div", {
        "class": "drawer-content"
      }, [(_a = slots.content) == null ? void 0 : _a.call(slots)]), transitionWrap(createVNode("div", {
        "class": "drawer-side"
      }, [createVNode("div", {
        "class": "drawer-overlay",
        "onClick": attrs.onClose
      }, null), (_b = slots.default) == null ? void 0 : _b.call(slots)]))]) : transitionWrap(createVNode("div", mergeProps(attrs, {
        "class": ["dv-drawer drawer", {
          "dv-drawer--teleport": !props2.disableTeleport,
          "drawer-end": attrs.placement === "right",
          "drawer-mobile": !!props2.mobileOnly
        }],
        "style": {
          zIndex: 100 + id
        }
      }), [createVNode("input", {
        "type": "checkbox",
        "class": "drawer-toggle",
        "checked": finalChecked.value
      }, null), createVNode("div", {
        "class": "drawer-content"
      }, [(_c = slots.content) == null ? void 0 : _c.call(slots)]), createVNode("div", {
        "class": "drawer-side"
      }, [createVNode("div", {
        "class": "drawer-overlay",
        "onClick": attrs.onClose
      }, null), (_d = slots.default) == null ? void 0 : _d.call(slots)])]));
      return !props2.disableTeleport ? createVNode(Teleport, {
        "to": "body"
      }, _isSlot$1(drawNode) ? drawNode : {
        default: () => [drawNode]
      }) : drawNode;
    };
  }
}, style$5);
const css$d = ".menu.horizontal li.bordered>a,.menu.horizontal li.bordered>span{--tw-border-opacity:1;border-bottom-width:4px;border-color:hsla(var(--p)/var(--tw-border-opacity));border-left-width:0}.menu[class*=p-] li a{border-radius:var(--rounded-btn,.5rem)}.menu li>a,.menu li>span{color:currentColor;padding:.75rem 1.25rem}.menu li>a:focus,.menu li>a:hover{--tw-bg-opacity:1;--tw-bg-opacity:0.1;background-color:hsla(var(--bc)/var(--tw-bg-opacity))}.menu li>a.active{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsla(var(--p)/var(--tw-bg-opacity));color:hsla(var(--pc)/var(--tw-text-opacity))}.menu li>a:active{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsla(var(--pf)/var(--tw-bg-opacity));color:hsla(var(--pc)/var(--tw-text-opacity))}.menu li.disabled>a:hover,.menu li.disabled>span:hover{background-color:transparent}.menu li.disabled>a,.menu li.disabled>span{--tw-text-opacity:1;--tw-text-opacity:0.2;color:hsla(var(--bc)/var(--tw-text-opacity))}.menu li.bordered a,.menu li.bordered span{--tw-border-opacity:1;border-color:hsla(var(--p)/var(--tw-border-opacity));border-left-width:4px}.menu li.hover-bordered a{border-color:transparent;border-left-width:4px}.menu li.hover-bordered a:hover{--tw-border-opacity:1;border-color:hsla(var(--p)/var(--tw-border-opacity))}.menu ul{padding-left:1.5rem}.menu.compact li>a,.menu.compact li>span{font-size:.875rem;line-height:1.25rem;padding-bottom:.5rem;padding-top:.5rem}.menu .menu-title>a,.menu .menu-title>span{--tw-text-opacity:1;--tw-text-opacity:0.4;color:hsla(var(--bc)/var(--tw-text-opacity));font-size:.75rem;font-weight:700;line-height:1rem;padding-bottom:.25rem;padding-top:.25rem}";
var s1$4 = css$d;
const css$c = ".menu{display:flex;flex-direction:column;overflow:hidden}.menu.horizontal{display:inline-flex;flex-direction:row}.menu.horizontal :where(li){flex-direction:row}.menu :where(li){align-items:stretch;display:flex;flex-direction:column}.menu :where(li)>a,.menu :where(li)>span{align-items:center;display:flex;transition-duration:.15s;transition-duration:.2s;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.menu :where(li)>a{cursor:pointer}.menu :where(li)>a:focus{outline:2px solid transparent;outline-offset:2px}.menu :where(li).disabled>a,.menu :where(li).disabled>span{cursor:auto}";
var s2$4 = css$c;
var style$4 = [s1$4, s2$4];
const props$2 = {
  compact: Boolean,
  horizontal: Boolean
};
const Menu = component({
  name: "Menu",
  props: props$2,
  setup: (props2, {
    slots
  }) => {
    const cls = computed(() => ["menu", {
      compact: props2.compact,
      horizontal: props2.horizontal
    }]);
    return () => {
      var _a;
      return createVNode("ul", {
        "class": cls.value
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
}, style$4);
const props$1 = {
  asTitle: Boolean,
  disabled: Boolean,
  bordered: Boolean,
  hoverBordered: Boolean,
  active: Boolean
};
const MenuItem = component({
  name: "MenuItem",
  props: props$1,
  setup: (props2, {
    slots,
    attrs
  }) => {
    const cls = computed(() => [{
      "menu-title": props2.asTitle,
      disabled: props2.disabled,
      bordered: props2.bordered,
      "hover-bordered": props2.hoverBordered
    }]);
    const wrapper = computed(() => {
      if (!("childWrapper" in attrs)) {
        return props2.asTitle ? "span" : "a";
      }
      if (attrs.childWrapper === false) {
        return null;
      }
      return attrs.childWrapper;
    });
    return () => {
      var _a;
      const children = (_a = slots.default) == null ? void 0 : _a.call(slots);
      return createVNode("li", {
        "class": cls.value
      }, [wrapper.value ? createVNode(wrapper.value, {
        class: {
          active: props2.active
        }
      }, children) : children]);
    };
  }
}, style$4);
const css$b = ".navbar{align-items:center;display:flex}.navbar>*{align-items:center;display:flex}.navbar-start{justify-content:flex-start;width:50%}.navbar-center{flex-shrink:0}.navbar-end{justify-content:flex-end;width:50%}";
var s1$3 = css$b;
const css$a = ".navbar{min-height:4rem;padding:var(--navbar-padding,.5rem)}";
var s2$3 = css$a;
var style$3 = [s1$3, s2$3];
const Navbar = component({
  name: "Navbar",
  setup: (_, {
    slots
  }) => {
    return () => {
      var _a;
      return createVNode("div", {
        "class": "navbar"
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
}, style$3);
const NavbarStart = component({
  name: "NavbarStart",
  setup: (_, {
    slots
  }) => {
    return () => {
      var _a;
      return createVNode("div", {
        "class": "navbar-start"
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
}, style$3);
const NavbarCenter = component({
  name: "NavbarCenter",
  setup: (_, {
    slots
  }) => {
    return () => {
      var _a;
      return createVNode("div", {
        "class": "navbar-center"
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
}, style$3);
const NavbarEnd = component({
  name: "NavbarEnd",
  setup: (_, {
    slots
  }) => {
    return () => {
      var _a;
      return createVNode("div", {
        "class": "navbar-end"
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
}, style$3);
const css$9 = '.tab{--tw-text-opacity:1;--tw-text-opacity:0.5;color:hsla(var(--bc)/var(--tw-text-opacity))}.tab:hover{--tw-text-opacity:1}.tab{padding-left:var(--tab-padding,1rem);padding-right:var(--tab-padding,1rem)}.tab.tab-active{--tw-border-opacity:1;--tw-text-opacity:1;border-color:hsla(var(--bc)/var(--tw-border-opacity));color:hsla(var(--bc)/var(--tw-text-opacity))}.tab:focus{outline:2px solid transparent;outline-offset:2px}.tab:focus-visible{box-shadow:inset 0 0 0 2px currentColor}.tab-bordered{--tw-border-opacity:1;--tw-border-opacity:0.2;border-bottom-width:calc(var(--tab-border, 1px) + 1px);border-color:hsla(var(--bc)/var(--tw-border-opacity));border-style:solid}.tab-lifted{border:0 solid transparent;border-bottom:var(--tab-border,1px) solid hsla(var(--border-color,var(--b3))/var(--tw-border-opacity,1));border-top-left-radius:var(--tab-radius,.5rem);border-top-right-radius:var(--tab-radius,.5rem);padding-left:var(--tab-padding,1rem);padding-right:var(--tab-padding,1rem);padding-top:var(--tab-border,1px)}.tab-lifted.tab-active{--tw-bg-opacity:1;background-color:hsla(var(--b1)/var(--tw-bg-opacity));border-bottom-width:0;border-left-color:hsla(var(--border-color,var(--b3))/var(--tw-border-opacity,1));border-left-width:var(--tab-border,1px);border-right-color:hsla(var(--border-color,var(--b3))/var(--tw-border-opacity,1));border-right-width:var(--tab-border,1px);border-top-color:hsla(var(--border-color,var(--b3))/var(--tw-border-opacity,1));border-top-width:var(--tab-border,1px);padding-bottom:var(--tab-border,1px);padding-left:calc(var(--tab-padding, 1rem) - var(--tab-border, 1px));padding-right:calc(var(--tab-padding, 1rem) - var(--tab-border, 1px));padding-top:0}.tab-lifted.tab-active:after,.tab-lifted.tab-active:before{--tab-grad:calc(68% - var(--tab-border, 1px));--tab-corner-bg:radial-gradient(circle at var(--circle-pos),transparent var(--tab-grad),hsla(var(--border-color,var(--b3))/var(--tw-border-opacity,1)) calc(var(--tab-grad) + 0.3px),hsla(var(--border-color,var(--b3))/var(--tw-border-opacity,1)) calc(var(--tab-grad) + var(--tab-border, 1px)),hsla(var(--b1)/var(--tw-border-opacity,1)) calc(var(--tab-grad) + var(--tab-border, 1px) + 0.3px));bottom:0;content:"";display:block;height:var(--tab-radius,.5rem);position:absolute;width:var(--tab-radius,.5rem);z-index:1}.tab-lifted.tab-active:before{--circle-pos:top left;background-image:var(--tab-corner-bg);left:calc(var(--tab-radius, .5rem)*-1)}[dir=rtl] .tab-lifted.tab-active:before{--circle-pos:top right}.tab-lifted.tab-active:after{--circle-pos:top right;background-image:var(--tab-corner-bg);right:calc(var(--tab-radius, .5rem)*-1)}[dir=rtl] .tab-lifted.tab-active:after{--circle-pos:top left}.tab-lifted.tab-active:first-child:before{background:none}.tab-lifted.tab-active:last-child:after{background:none}.tab-lifted.tab-active+.tab-lifted.tab-active:before{background:none}.tabs-boxed{--tw-bg-opacity:1;background-color:hsla(var(--b2)/var(--tw-bg-opacity));border-radius:var(--rounded-btn,.5rem);padding:.25rem}.tabs-boxed .tab-active{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsla(var(--p)/var(--tw-bg-opacity));border-radius:var(--rounded-btn,.5rem);color:hsla(var(--pc)/var(--tw-text-opacity))}.tabs-boxed .tab-active:hover{--tw-text-opacity:1;color:hsla(var(--pc)/var(--tw-text-opacity))}';
var s1$2 = css$9;
const css$8 = ".tabs{align-items:flex-end;display:flex;flex-wrap:wrap}.tab{--tab-padding:1rem;align-items:center;cursor:pointer;display:inline-flex;flex-wrap:wrap;font-size:.875rem;height:2rem;justify-content:center;line-height:1.25rem;line-height:2;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}";
var s2$2 = css$8;
const css$7 = ".tab-md{--tab-padding:1rem;font-size:.875rem;height:2rem;line-height:1.25rem;line-height:2}.tab-lg{--tab-padding:1.25rem;font-size:1.125rem;height:3rem;line-height:1.75rem;line-height:2}.tab-sm{--tab-padding:.75rem;font-size:.875rem;height:1.5rem;line-height:1.25rem;line-height:.75rem}.tab-xs{--tab-padding:.5rem;font-size:.75rem;height:1.25rem;line-height:1rem;line-height:.75rem}";
var s3 = css$7;
const css$6 = '.dv-tabs__lifted-item{--tab-padding:1rem;--tw-text-opacity:1;--tw-text-opacity:0.5;align-items:center;color:hsla(var(--bc)/var(--tw-text-opacity,1));cursor:pointer;display:inline-flex;flex-wrap:wrap;font-size:.875rem;height:2rem;justify-content:center;line-height:1.25rem;line-height:2;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.dv-tabs__lifted-item:hover{--tw-text-opacity:1}.dv-tabs__lifted-item.tab-active{--tw-border-opacity:1;--tw-text-opacity:1;border-color:hsla(var(--bc)/var(--tw-border-opacity,1));color:hsla(var(--bc)/var(--tw-text-opacity,1))}.dv-tabs__lifted-item:focus{outline:2px solid transparent;outline-offset:2px}.dv-tabs__lifted-item:focus-visible{box-shadow:inset 0 0 0 2px currentColor}.dv-tabs__lifted-item{border:0 solid transparent;border-bottom:var(--tab-border,1px) solid hsla(var(--border-color,var(--b3))/var(--tw-border-opacity,1));border-top-left-radius:var(--tab-radius,.5rem);border-top-right-radius:var(--tab-radius,.5rem);padding-left:var(--tab-padding,1rem);padding-right:var(--tab-padding,1rem);padding-top:var(--tab-border,1px)}.dv-tabs__lifted-item.tab-active{--tw-bg-opacity:1;background-color:hsla(var(--b1)/var(--tw-bg-opacity,1));border-bottom-width:0;border-left-color:hsla(var(--border-color,var(--b3))/var(--tw-border-opacity,1));border-left-width:var(--tab-border,1px);border-right-color:hsla(var(--border-color,var(--b3))/var(--tw-border-opacity,1));border-right-width:var(--tab-border,1px);border-top-color:hsla(var(--border-color,var(--b3))/var(--tw-border-opacity,1));border-top-width:var(--tab-border,1px);padding-bottom:var(--tab-border,1px);padding-left:calc(var(--tab-padding, 1rem) - var(--tab-border, 1px));padding-right:calc(var(--tab-padding, 1rem) - var(--tab-border, 1px));padding-top:0}.dv-tabs__lifted-item.tab-active:after,.dv-tabs__lifted-item.tab-active:before{--tab-grad:calc(68% - var(--tab-border, 1px));--tab-corner-bg:radial-gradient(circle at var(--circle-pos),transparent var(--tab-grad),hsla(var(--border-color,var(--b3))/var(--tw-border-opacity,1)) calc(var(--tab-grad) + 0.3px),hsla(var(--border-color,var(--b3))/var(--tw-border-opacity,1)) calc(var(--tab-grad) + var(--tab-border, 1px)),hsla(var(--b1)/var(--tw-border-opacity,1)) calc(var(--tab-grad) + var(--tab-border, 1px) + 0.3px));bottom:0;content:"";display:block;height:var(--tab-radius,.5rem);position:absolute;width:var(--tab-radius,.5rem);z-index:1}.tab-lifted.tab-active:after,.tab-lifted.tab-active:before{--tab-grad:calc(68% - var(--tab-border, 1px));--tab-corner-bg:radial-gradient(circle at var(--circle-pos),transparent var(--tab-grad),hsla(var(--border-color,var(--b3))/var(--tw-border-opacity,1)) calc(var(--tab-grad) + 0.3px),hsla(var(--border-color,var(--b3))/var(--tw-border-opacity,1)) calc(var(--tab-grad) + var(--tab-border, 1px)),hsla(var(--b1)/var(--tw-border-opacity,1)) calc(var(--tab-grad) + var(--tab-border, 1px) + 0.3px));bottom:0;content:"";display:block;height:var(--tab-radius,.5rem);position:absolute;width:var(--tab-radius,.5rem);z-index:1}.dv-tabs__lifted-item.tab-active:before{--circle-pos:top left;background-image:var(--tab-corner-bg);left:calc(var(--tab-radius, .5rem)*-1)}[dir=rtl] .dv-tabs__lifted-item.tab-active:before{--circle-pos:top right}.dv-tabs__lifted-item.tab-active:after{--circle-pos:top right;background-image:var(--tab-corner-bg);right:calc(var(--tab-radius, .5rem)*-1)}[dir=rtl] .dv-tabs__lifted-item.tab-active:after{--circle-pos:top left}.dv-tabs__lifted-item.tab-active:first-child:before{background:none}.dv-tabs__lifted-item.tab-active:last-child:after{background:none}.dv-tabs__lifted-item.tab-active+.tab-lifted.tab-active:before{background:none}.tab-lifted.tab-active+.dv-tabs__lifted-item.tab-active:before{background:none}.dv-tabs__lifted-item{cursor:default;flex:1 1 0%}.dv-tabs.tabs-boxed{display:inline-flex}.dv-tab-content{margin-top:.5rem}.dv-tab-content--hidden{display:none}';
var s$2 = css$6;
var style$2 = [s1$2, s2$2, s3, s$2];
const ctx = Symbol("tabs");
const tabType = Symbol("TabType");
const tabsProps = {
  type: {
    type: String
  },
  size: {
    type: String,
    default: "md"
  },
  value: String
};
const Tabs = component({
  name: "Tabs",
  props: tabsProps,
  inheritAttrs: false,
  emits: ["update:value"],
  setup: (props2, {
    slots,
    emit,
    attrs
  }) => {
    const onChange = (name) => {
      emit("update:value", name);
    };
    const ctxVal = computed(() => ({
      type: props2.type,
      size: props2.size,
      currentName: props2.value,
      onChange
    }));
    provide(ctx, ctxVal);
    const getPaneInstanceFromSlot = (vnode, list = []) => {
      Array.from(vnode || []).forEach((node) => {
        const type = node.type;
        if (type && type[tabType]) {
          list.push(node.props);
        } else if (type === Fragment || type === "template") {
          getPaneInstanceFromSlot(node.children, list);
        }
      });
      return list;
    };
    const tabHeadCls = computed(() => ["dv-tab tab", `tab-${props2.type}`, `tab-${props2.size}`]);
    return () => {
      var _a;
      const vns = ((_a = slots.default) == null ? void 0 : _a.call(slots)) || [];
      const tabPropsList = getPaneInstanceFromSlot(vns);
      return createVNode(Fragment, null, [createVNode("div", mergeProps(attrs, {
        "class": {
          "dv-tabs tabs": true,
          "tabs-boxed": props2.type === "boxed"
        }
      }), [tabPropsList.map((p) => createVNode("a", {
        "class": [tabHeadCls.value, {
          "tab-active": props2.value === p.name
        }],
        "onClick": () => {
          onChange(p.name);
        }
      }, [p.title])), props2.type === "lifted" ? createVNode("div", {
        "class": "dv-tabs__lifted-item"
      }, null) : null]), vns]);
    };
  }
}, style$2);
const Tab = component({
  name: "Tab",
  [tabType]: true,
  props: {
    title: String,
    name: String
  },
  setup: (props2, {
    slots
  }) => {
    const ctxVal = inject(ctx);
    return () => {
      var _a;
      return createVNode("div", {
        "class": ["dv-tab-content", {
          "dv-tab-content--hidden": props2.name !== ctxVal.value.currentName
        }]
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
}, style$2);
const css$5 = ".table{text-align:left}.table td,.table th{padding:1rem;vertical-align:middle;white-space:nowrap}.table tr.active:nth-child(2n) td,.table tr.active:nth-child(2n) th,.table tr.active td,.table tr.active th{--tw-bg-opacity:1;background-color:hsla(var(--b3)/var(--tw-bg-opacity))}.table tr.hover:hover td,.table tr.hover:hover th,.table tr.hover:nth-child(2n):hover td,.table tr.hover:nth-child(2n):hover th{--tw-bg-opacity:1;background-color:hsla(var(--b3)/var(--tw-bg-opacity))}.table:not(.table-zebra) tbody tr:not(:last-child) td,.table:not(.table-zebra) tbody tr:not(:last-child) th,.table:not(.table-zebra) tfoot tr:not(:last-child) td,.table:not(.table-zebra) tfoot tr:not(:last-child) th,.table:not(.table-zebra) thead tr:not(:last-child) td,.table:not(.table-zebra) thead tr:not(:last-child) th{--tw-border-opacity:1;border-bottom-width:1px;border-color:hsla(var(--b2)/var(--tw-border-opacity))}.table tfoot td,.table tfoot th,.table thead td,.table thead th{--tw-bg-opacity:1;background-color:hsla(var(--b2)/var(--tw-bg-opacity));font-size:.75rem;font-weight:700;line-height:1rem;text-transform:uppercase}.table tfoot td:first-child,.table tfoot th:first-child,.table thead td:first-child,.table thead th:first-child{border-bottom-left-radius:.5rem;border-top-left-radius:.5rem}.table tfoot td:last-child,.table tfoot th:last-child,.table thead td:last-child,.table thead th:last-child{border-bottom-right-radius:.5rem;border-top-right-radius:.5rem}.table tbody td,.table tbody th{--tw-bg-opacity:1;background-color:hsla(var(--b1)/var(--tw-bg-opacity))}.table-zebra tbody tr td:first-child,.table-zebra tbody tr th:first-child{border-bottom-left-radius:.5rem;border-top-left-radius:.5rem}.table-zebra tbody tr td:last-child,.table-zebra tbody tr th:last-child{border-bottom-right-radius:.5rem;border-top-right-radius:.5rem}.table-zebra tbody tr:nth-child(2n) td,.table-zebra tbody tr:nth-child(2n) th{--tw-bg-opacity:1;background-color:hsla(var(--b2)/var(--tw-bg-opacity))}.table-compact td,.table-compact th{font-size:.875rem;line-height:1.25rem;padding:.5rem}";
var s1$1 = css$5;
const css$4 = ".table{position:relative}.table th:first-child{left:0;position:sticky;position:-webkit-sticky;z-index:10}";
var s2$1 = css$4;
const css$3 = ".dv-table-wrap{overflow-x:auto}.table{min-width:100%}.table colgroup col{width:168px}.table td{white-space:normal;word-break:break-all}";
var s$1 = css$3;
var style$1 = [s1$1, s2$1, s$1];
const tableProps = {
  zebra: Boolean,
  compact: Boolean,
  columns: {
    type: Array,
    default: () => []
  },
  dataSource: {
    type: Array,
    default: () => []
  }
};
const Table = component({
  name: "Table",
  props: tableProps,
  setup: (props2) => {
    const cls = computed(() => ["dv-table table", {
      "table-zebra": props2.zebra,
      "table-compact": props2.compact
    }]);
    const cols = computed(() => props2.columns.map((col, i) => __spreadProps(__spreadValues({}, col), {
      key: col.key || col.dataIndex || i
    })));
    const head = computed(() => cols.value.map((col, i) => createVNode("th", {
      "style": col.fixed ? {
        position: "sticky",
        [col.fixed === "left" ? "left" : "right"]: 0
      } : {
        position: "relative"
      },
      "key": col.key
    }, [typeof col.title === "function" ? col.title() : col.title])));
    return () => {
      return createVNode("div", {
        "class": "dv-table-wrap"
      }, [createVNode("table", {
        "class": cls.value
      }, [createVNode("colgroup", null, [cols.value.map((col) => createVNode("col", {
        "key": col.key,
        "style": {
          width: cssUnit(col.width)
        }
      }, null))]), createVNode("thead", null, [createVNode("tr", null, [head.value])]), createVNode("tbody", null, [props2.dataSource.map((record, i) => createVNode("tr", {
        "key": i,
        "class": "hover"
      }, [props2.columns.map((col) => createVNode("td", {
        "key": col.dataIndex || col.key,
        "style": col.fixed ? {
          position: "sticky",
          [col.fixed === "left" ? "left" : "right"]: 0
        } : {
          position: "relative"
        }
      }, [typeof col.render === "function" ? col.render(record[col.dataIndex], record, i) : record[col.dataIndex]]))]))])])]);
    };
  }
}, style$1);
const css$2 = ".tooltip{--tooltip-offset:calc(100% + 1px + var(--tooltip-tail, 0px));display:inline-block;position:relative}.tooltip:before{pointer-events:none;position:absolute}.tooltip:before{content:attr(data-tip)}.tooltip:before{bottom:var(--tooltip-offset);left:50%;right:auto;top:auto;transform:translateX(-50%)}.tooltip-bottom:before{bottom:auto;left:50%;right:auto;top:var(--tooltip-offset);transform:translateX(-50%)}.tooltip-left:before{bottom:auto;left:auto;right:var(--tooltip-offset);top:50%;transform:translateY(-50%)}.tooltip-right:before{bottom:auto;left:var(--tooltip-offset);right:auto;top:50%;transform:translateY(-50%)}";
var s1 = css$2;
const css$1 = '.tooltip{--tooltip-tail:3px;--tooltip-color:hsl(var(--n));--tooltip-text-color:hsl(var(--nc));--tooltip-tail-offset:calc(100% + 1px - var(--tooltip-tail));display:inline-block;position:relative;text-align:center}.tooltip:after,.tooltip:before{opacity:0;transition-delay:.1s;transition-duration:.15s;transition-duration:.2s;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.tooltip:after{position:absolute}.tooltip:before{background-color:var(--tooltip-color);border-radius:.25rem;color:var(--tooltip-text-color);font-size:.875rem;line-height:1.25rem;max-width:20rem;padding:.25rem .5rem;width:-webkit-max-content;width:-moz-max-content;width:max-content}.tooltip.tooltip-open:after,.tooltip.tooltip-open:before,.tooltip:hover:after,.tooltip:hover:before{opacity:1;transition-delay:75ms}.tooltip:after{border-style:solid;border-width:var(--tooltip-tail,0);content:"";display:block;height:0;position:absolute;width:0}.tooltip:after{border-bottom-color:transparent;border-left-color:transparent;border-right-color:transparent;border-top-color:var(--tooltip-color);bottom:var(--tooltip-tail-offset);left:50%;right:auto;top:auto;transform:translateX(-50%)}.tooltip-bottom:after{border-bottom-color:var(--tooltip-color);border-left-color:transparent;border-right-color:transparent;border-top-color:transparent;bottom:auto;left:50%;right:auto;top:var(--tooltip-tail-offset);transform:translateX(-50%)}.tooltip-left:after{border-bottom-color:transparent;border-left-color:var(--tooltip-color);border-right-color:transparent;border-top-color:transparent;bottom:auto;left:auto;right:calc(var(--tooltip-tail-offset) + 1px);top:50%;transform:translateY(-50%)}.tooltip-right:after{border-bottom-color:transparent;border-left-color:transparent;border-right-color:var(--tooltip-color);border-top-color:transparent;bottom:auto;left:calc(var(--tooltip-tail-offset) + 1px);right:auto;top:50%;transform:translateY(-50%)}.tooltip-primary{--tooltip-color:hsl(var(--p));--tooltip-text-color:hsl(var(--pc))}.tooltip-secondary{--tooltip-color:hsl(var(--s));--tooltip-text-color:hsl(var(--sc))}.tooltip-accent{--tooltip-color:hsl(var(--a));--tooltip-text-color:hsl(var(--ac))}.tooltip-info{--tooltip-color:hsla(var(--in)/.1);--tooltip-text-color:hsl(var(--in))}.tooltip-success{--tooltip-color:hsla(var(--su)/.1);--tooltip-text-color:hsl(var(--su))}.tooltip-warning{--tooltip-color:hsla(var(--wa)/.1);--tooltip-text-color:hsl(var(--wa))}.tooltip-error{--tooltip-color:hsla(var(--er)/.1);--tooltip-text-color:hsl(var(--er))}';
var s2 = css$1;
const css = "";
var s = css;
var style = [s1, s2, s];
const props = {
  open: {
    type: Boolean,
    default: void 0
  }
};
const Tooltip = component({
  name: "Tooltip",
  props,
  setup: (props2, {
    attrs,
    slots
  }) => {
    const state = ref(!!props2.open);
    const finalOpen = computed(() => {
      return isUndefined(props2.open) ? state.value : props2.open;
    });
    return () => {
      var _a;
      return createVNode("div", {
        "class": ["dv-tooltip tooltip", {
          "tooltip-open": finalOpen.value,
          [`tooltip-${attrs.placement}`]: !!attrs.placement,
          [`tooltip-${attrs.type}`]: !!attrs.type
        }],
        "data-tip": attrs.tip
      }, [(_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
}, style);
var all = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Alert,
  Artboard,
  Avatar,
  AvatrGroup,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Drawer,
  Mask,
  Menu,
  MenuItem,
  Navbar,
  NavbarStart,
  NavbarCenter,
  NavbarEnd,
  Tabs,
  Tab,
  Table,
  Tooltip
});
function install(app, options) {
  const {
    prefix
  } = __spreadValues({
    prefix: "Dv"
  }, options);
  const ctx2 = reactive({
    styles: createStyles()
  });
  app.provide(CONTEXT_SYMBOL, ctx2);
  app.config.globalProperties.$daisyui = ctx2;
  [all, icons$2].forEach((set) => {
    Object.keys(set).forEach((key) => {
      const el = set[key];
      if (typeof el === "object" && "setup" in el && /^[A-Z]/.test(el.name)) {
        app.component(prefix + el.name, el);
      }
    });
  });
}
const version = "0.0.1-alpha.0";
var DV = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  Alert,
  Artboard,
  Avatar,
  AvatrGroup,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Drawer,
  IconAdjustments: IconAdjustments$1,
  IconArchive: IconArchive$1,
  IconArrow: IconArrow$1,
  IconBack: IconBack$1,
  IconBase,
  IconBell: IconBell$1,
  IconBookOpen: IconBookOpen$1,
  IconCheck: IconCheck$1,
  IconClose: IconClose$1,
  IconCode: IconCode$1,
  IconColor: IconColor$1,
  IconColorSwatch: IconColorSwatch$1,
  IconDocumentAdd: IconDocumentAdd$1,
  IconDots: IconDots$1,
  IconEye: IconEye$1,
  IconFolder: IconFolder$1,
  IconGithub: IconGithub$1,
  IconHeart: IconHeart$1,
  IconInboxIn: IconInboxIn$1,
  IconInfo: IconInfo$1,
  IconInvalid: IconInvalid$1,
  IconLightningBolt: IconLightningBolt$1,
  IconMenu: IconMenu$1,
  IconMenuAlt2: IconMenuAlt2$1,
  IconSearch: IconSearch$1,
  IconTemplate: IconTemplate$1,
  IconText: IconText$1,
  IconWarning: IconWarning$1,
  Mask,
  Menu,
  MenuItem,
  Navbar,
  NavbarCenter,
  NavbarEnd,
  NavbarStart,
  Tab,
  Table,
  Tabs,
  Tooltip,
  "default": install,
  version,
  Button,
  ButtonGroup
});
var tailwind = "";
var markdown = "";
var atomOneDark = "";
var global = "";
function ssrRegisterHelper(comp, filename) {
  const setup = comp.setup;
  comp.setup = (props2, ctx2) => {
    const ssrContext = useSSRContext();
    (ssrContext.modules || (ssrContext.modules = new Set())).add(filename);
    if (setup) {
      return setup(props2, ctx2);
    }
  };
}
function _isSlot(s6) {
  return typeof s6 === "function" || Object.prototype.toString.call(s6) === "[object Object]" && !isVNode(s6);
}
const __default__$3 = defineComponent({
  name: "App",
  setup: () => {
    const open = ref(false);
    const route = useRoute();
    watch(() => route.path, () => {
      open.value = false;
    });
    const {
      components
    } = routes.reduce((rs, r) => {
      if (/^\/components\//.test(r.path)) {
        rs.components.push(r);
      }
      return rs;
    }, {
      components: []
    });
    const componentsMenus = components.sort((a, b) => a.name.localeCompare(b.name)).map((it) => {
      let _slot;
      return createVNode(MenuItem, {
        "childWrapper": false,
        "key": it.path,
        "class": "capitalize"
      }, {
        default: () => [createVNode(RouterLink, {
          "to": it.path,
          "activeClass": "active"
        }, _isSlot(_slot = it.name.replace("components-", "")) ? _slot : {
          default: () => [_slot]
        })]
      });
    });
    return () => createVNode("main", null, [createVNode(Drawer, {
      "disableTeleport": true,
      "mobileOnly": true,
      "class": "h-screen",
      "open": open.value,
      "onClose": () => open.value = false
    }, {
      default: () => createVNode("div", {
        "class": "overflow-y-auto w-80 bg-white border-r border-gray-200"
      }, [createVNode(Menu, {
        "class": "rounded-box p-4",
        "compact": true
      }, {
        default: () => [createVNode(MenuItem, {
          "asTitle": true
        }, {
          default: () => [createTextVNode("Components")]
        }), componentsMenus]
      })]),
      content: () => createVNode("div", null, [createVNode("header", {
        "class": "sticky inset-x-0 top-0 bg-white border-b border-gray-100 z-20"
      }, [createVNode(Navbar, {
        "class": ""
      }, {
        default: () => [createVNode(NavbarStart, {
          "class": "mx-2"
        }, {
          default: () => [createVNode("div", {
            "class": "lg:hidden"
          }, [createVNode(Button, {
            "type": "ghost",
            "shape": "square",
            "onClick": () => {
              open.value = !open.value;
            }
          }, {
            default: () => [createVNode(IconMenu$1, {
              "size": "2em"
            }, null)]
          })])]
        }), createVNode(NavbarEnd, null, {
          default: () => [createVNode(Button, {
            "component": "a",
            "href": "https://github.com/daief/daisyui-vue",
            "target": "_blank",
            "type": "ghost"
          }, {
            default: () => [createVNode(IconGithub$1, {
              "size": "2em"
            }, null)]
          })]
        })]
      })]), createVNode("div", {
        "class": "p-4 pb-8 lg:p-10"
      }, [createVNode(resolveComponent("router-view"), null, null)])])
    })]);
  }
});
const __moduleId$3 = "src/App.vue?vue&type=script&lang.tsx";
ssrRegisterHelper(__default__$3, __moduleId$3);
var App_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props2) => {
  for (const [key, val] of props2) {
    sfc[key] = val;
  }
  return sfc;
};
const _sfc_setup$j = __default__$3.setup;
__default__$3.setup = (props2, ctx2) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/App.vue");
  return _sfc_setup$j ? _sfc_setup$j(props2, ctx2) : void 0;
};
var App = /* @__PURE__ */ _export_sfc(__default__$3, [["__scopeId", "data-v-50a6b668"]]);
const __default__$2 = defineComponent({
  name: "Playground",
  props: {
    code: String,
    lang: {
      type: String,
      default: "html"
    }
  },
  setup: (props2, {
    slots
  }) => {
    const currentTab = ref("preview");
    return () => createVNode("div", {
      "class": "dv-playground py-2"
    }, [createVNode(Tabs, {
      "type": "lifted",
      "value": currentTab.value,
      "onUpdate:value": ($event) => currentTab.value = $event
    }, {
      default: () => [createVNode(Tab, {
        "name": "preview",
        "title": "Preview"
      }, {
        default: () => {
          var _a;
          return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
        }
      }), createVNode(Tab, {
        "name": "code",
        "title": "Code"
      }, {
        default: () => [createVNode("pre", null, [createVNode("code", {
          "class": `hljs language-${props2.lang} rounded-md`,
          "hljs-language": props2.lang,
          "innerHTML": props2.code
        }, null)])]
      })]
    })]);
  }
});
const __moduleId$2 = "src/components/Playground.vue?vue&type=script&lang.tsx";
ssrRegisterHelper(__default__$2, __moduleId$2);
var Playground_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_setup$i = __default__$2.setup;
__default__$2.setup = (props2, ctx2) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Playground.vue");
  return _sfc_setup$i ? _sfc_setup$i(props2, ctx2) : void 0;
};
var Playground = /* @__PURE__ */ _export_sfc(__default__$2, [["__scopeId", "data-v-03294aad"]]);
const __default__$1 = defineComponent({
  name: "MarkdownTable",
  props: {
    columns: Array,
    dataSource: Array
  },
  setup: (props2, {
    slots
  }) => {
    return () => createVNode("div", null, [createVNode(Table, mergeProps({
      "zebra": true,
      "compact": true,
      "class": "dv-markdowntable w-full"
    }, props2), null)]);
  }
});
const __moduleId$1 = "src/components/MarkdownTable.vue?vue&type=script&lang.tsx";
ssrRegisterHelper(__default__$1, __moduleId$1);
var MarkdownTable_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_setup$h = __default__$1.setup;
__default__$1.setup = (props2, ctx2) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/MarkdownTable.vue");
  return _sfc_setup$h ? _sfc_setup$h(props2, ctx2) : void 0;
};
var MarkdownTable = /* @__PURE__ */ _export_sfc(__default__$1, [["__scopeId", "data-v-5c5a3078"]]);
const createApp = ViteSSG(App, { routes, base: "/daisyui-vue/" }, (ctx2) => {
  const { app, router, isClient } = ctx2;
  app.component("Playground", Playground);
  app.component("MarkdownTable", MarkdownTable);
  app.use(install);
  ctx2.$daisyui = app.config.globalProperties.$daisyui;
  router.isReady().then(() => {
    router.afterEach((to, from, fa) => {
      if (!isClient)
        return;
      if (to.path !== from.path) {
        try {
          window.gtag.trackPath("");
        } catch (error) {
        }
      }
    });
  });
});
const _sfc_main$f = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "meta": [] };
    expose({ frontmatter });
    const head = { "meta": [] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Playground = resolveComponent("Playground");
      const _component_dv_tooltip = resolveComponent("dv-tooltip");
      const _component_dv_button = resolveComponent("dv-button");
      _push(`<!--[--><div class="markdown-body"><h1>Tooltip</h1><h2>Examples</h2><p>tooltip</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;pt-8 text-center&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-tooltip</span> <span class="hljs-attr">tip</span>=<span class="hljs-string">&quot;hello&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>hover me<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-tooltip</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="pt-8 text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_dv_tooltip, { tip: "hello" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_button, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`hover me`);
                      } else {
                        return [
                          createTextVNode("hover me")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_button, null, {
                      default: withCtx(() => [
                        createTextVNode("hover me")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "pt-8 text-center" }, [
                createVNode(_component_dv_tooltip, { tip: "hello" }, {
                  default: withCtx(() => [
                    createVNode(_component_dv_button, null, {
                      default: withCtx(() => [
                        createTextVNode("hover me")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>tooltip-open</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;pt-8 text-center&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-tooltip</span> <span class="hljs-attr">tip</span>=<span class="hljs-string">&quot;hello&quot;</span> <span class="hljs-attr">open</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>open by default<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-tooltip</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="pt-8 text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_dv_tooltip, {
              tip: "hello",
              open: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_button, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`open by default`);
                      } else {
                        return [
                          createTextVNode("open by default")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_button, null, {
                      default: withCtx(() => [
                        createTextVNode("open by default")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "pt-8 text-center" }, [
                createVNode(_component_dv_tooltip, {
                  tip: "hello",
                  open: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_dv_button, null, {
                      default: withCtx(() => [
                        createTextVNode("open by default")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>tooltip-bottom</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;pt-8 text-center&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-tooltip</span> <span class="hljs-attr">tip</span>=<span class="hljs-string">&quot;hello&quot;</span> <span class="hljs-attr">open</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>bottom<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-tooltip</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="pt-8 text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_dv_tooltip, {
              tip: "hello",
              open: "",
              placement: "bottom"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_button, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`bottom`);
                      } else {
                        return [
                          createTextVNode("bottom")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_button, null, {
                      default: withCtx(() => [
                        createTextVNode("bottom")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "pt-8 text-center" }, [
                createVNode(_component_dv_tooltip, {
                  tip: "hello",
                  open: "",
                  placement: "bottom"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_dv_button, null, {
                      default: withCtx(() => [
                        createTextVNode("bottom")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>tooltip-left</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;pt-8 text-center&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-tooltip</span> <span class="hljs-attr">tip</span>=<span class="hljs-string">&quot;hello&quot;</span> <span class="hljs-attr">open</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>left<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-tooltip</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="pt-8 text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_dv_tooltip, {
              tip: "hello",
              open: "",
              placement: "left"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_button, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`left`);
                      } else {
                        return [
                          createTextVNode("left")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_button, null, {
                      default: withCtx(() => [
                        createTextVNode("left")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "pt-8 text-center" }, [
                createVNode(_component_dv_tooltip, {
                  tip: "hello",
                  open: "",
                  placement: "left"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_dv_button, null, {
                      default: withCtx(() => [
                        createTextVNode("left")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>tooltip-right</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;pt-8 text-center&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-tooltip</span> <span class="hljs-attr">tip</span>=<span class="hljs-string">&quot;hello&quot;</span> <span class="hljs-attr">open</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>right<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-tooltip</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="pt-8 text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_dv_tooltip, {
              tip: "hello",
              open: "",
              placement: "right"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_button, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`right`);
                      } else {
                        return [
                          createTextVNode("right")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_button, null, {
                      default: withCtx(() => [
                        createTextVNode("right")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "pt-8 text-center" }, [
                createVNode(_component_dv_tooltip, {
                  tip: "hello",
                  open: "",
                  placement: "right"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_dv_button, null, {
                      default: withCtx(() => [
                        createTextVNode("right")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>with colors</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">div</span>\n  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center grid grid-cols-3 lg:grid-cols-5 my-10 place-items-center gap-y-10&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-tooltip</span> <span class="hljs-attr">tip</span>=<span class="hljs-string">&quot;hello&quot;</span> <span class="hljs-attr">open</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;netural&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;netural&quot;</span>&gt;</span>netural<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-tooltip</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-tooltip</span> <span class="hljs-attr">tip</span>=<span class="hljs-string">&quot;hello&quot;</span> <span class="hljs-attr">open</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>primary<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-tooltip</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-tooltip</span> <span class="hljs-attr">tip</span>=<span class="hljs-string">&quot;hello&quot;</span> <span class="hljs-attr">open</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>secondary<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-tooltip</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-tooltip</span> <span class="hljs-attr">tip</span>=<span class="hljs-string">&quot;hello&quot;</span> <span class="hljs-attr">open</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;accent&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;accent&quot;</span>&gt;</span>accent<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-tooltip</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-tooltip</span> <span class="hljs-attr">tip</span>=<span class="hljs-string">&quot;hello&quot;</span> <span class="hljs-attr">open</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>info<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-tooltip</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-tooltip</span> <span class="hljs-attr">tip</span>=<span class="hljs-string">&quot;hello&quot;</span> <span class="hljs-attr">open</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>success<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-tooltip</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-tooltip</span> <span class="hljs-attr">tip</span>=<span class="hljs-string">&quot;hello&quot;</span> <span class="hljs-attr">open</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>warning<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-tooltip</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-tooltip</span> <span class="hljs-attr">tip</span>=<span class="hljs-string">&quot;hello&quot;</span> <span class="hljs-attr">open</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;error&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;error&quot;</span>&gt;</span>error<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-tooltip</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center grid grid-cols-3 lg:grid-cols-5 my-10 place-items-center gap-y-10"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_dv_tooltip, {
              tip: "hello",
              open: "",
              type: "netural"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_button, { type: "netural" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`netural`);
                      } else {
                        return [
                          createTextVNode("netural")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_button, { type: "netural" }, {
                      default: withCtx(() => [
                        createTextVNode("netural")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_tooltip, {
              tip: "hello",
              open: "",
              type: "primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_button, { type: "primary" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`primary`);
                      } else {
                        return [
                          createTextVNode("primary")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_button, { type: "primary" }, {
                      default: withCtx(() => [
                        createTextVNode("primary")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_tooltip, {
              tip: "hello",
              open: "",
              type: "secondary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_button, { type: "secondary" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`secondary`);
                      } else {
                        return [
                          createTextVNode("secondary")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_button, { type: "secondary" }, {
                      default: withCtx(() => [
                        createTextVNode("secondary")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_tooltip, {
              tip: "hello",
              open: "",
              type: "accent"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_button, { type: "accent" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`accent`);
                      } else {
                        return [
                          createTextVNode("accent")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_button, { type: "accent" }, {
                      default: withCtx(() => [
                        createTextVNode("accent")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_tooltip, {
              tip: "hello",
              open: "",
              type: "info"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_button, { type: "info" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`info`);
                      } else {
                        return [
                          createTextVNode("info")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_button, { type: "info" }, {
                      default: withCtx(() => [
                        createTextVNode("info")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_tooltip, {
              tip: "hello",
              open: "",
              type: "success"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_button, { type: "success" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`success`);
                      } else {
                        return [
                          createTextVNode("success")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_button, { type: "success" }, {
                      default: withCtx(() => [
                        createTextVNode("success")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_tooltip, {
              tip: "hello",
              open: "",
              type: "warning"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_button, { type: "warning" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`warning`);
                      } else {
                        return [
                          createTextVNode("warning")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_button, { type: "warning" }, {
                      default: withCtx(() => [
                        createTextVNode("warning")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_tooltip, {
              tip: "hello",
              open: "",
              type: "error"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_button, { type: "error" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`error`);
                      } else {
                        return [
                          createTextVNode("error")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_button, { type: "error" }, {
                      default: withCtx(() => [
                        createTextVNode("error")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "text-center grid grid-cols-3 lg:grid-cols-5 my-10 place-items-center gap-y-10" }, [
                createVNode(_component_dv_tooltip, {
                  tip: "hello",
                  open: "",
                  type: "netural"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_dv_button, { type: "netural" }, {
                      default: withCtx(() => [
                        createTextVNode("netural")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_tooltip, {
                  tip: "hello",
                  open: "",
                  type: "primary"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_dv_button, { type: "primary" }, {
                      default: withCtx(() => [
                        createTextVNode("primary")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_tooltip, {
                  tip: "hello",
                  open: "",
                  type: "secondary"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_dv_button, { type: "secondary" }, {
                      default: withCtx(() => [
                        createTextVNode("secondary")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_tooltip, {
                  tip: "hello",
                  open: "",
                  type: "accent"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_dv_button, { type: "accent" }, {
                      default: withCtx(() => [
                        createTextVNode("accent")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_tooltip, {
                  tip: "hello",
                  open: "",
                  type: "info"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_dv_button, { type: "info" }, {
                      default: withCtx(() => [
                        createTextVNode("info")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_tooltip, {
                  tip: "hello",
                  open: "",
                  type: "success"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_dv_button, { type: "success" }, {
                      default: withCtx(() => [
                        createTextVNode("success")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_tooltip, {
                  tip: "hello",
                  open: "",
                  type: "warning"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_dv_button, { type: "warning" }, {
                      default: withCtx(() => [
                        createTextVNode("warning")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_tooltip, {
                  tip: "hello",
                  open: "",
                  type: "error"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_dv_button, { type: "error" }, {
                      default: withCtx(() => [
                        createTextVNode("error")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"></div><!--]-->`);
    };
  }
};
const _sfc_setup$g = _sfc_main$f.setup;
_sfc_main$f.setup = (props2, ctx2) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/components/tooltip.md");
  return _sfc_setup$g ? _sfc_setup$g(props2, ctx2) : void 0;
};
var tooltip = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$f
});
var __unplugin_components_0$2 = {
  setup: () => {
    const columns = [{
      title: "",
      dataIndex: "num",
      fixed: "left",
      width: 20
    }, {
      title: "name",
      dataIndex: "name"
    }, {
      title: "job",
      dataIndex: "job"
    }, {
      title: "favorite color",
      dataIndex: "favoriteColor"
    }];
    const dataSource = [{
      num: 1,
      name: "Cy Ganderton",
      job: "Quality Control Specialist",
      favoriteColor: "Blue"
    }, {
      num: 2,
      name: "Hart Hagerty",
      job: "Desktop Support Technician",
      favoriteColor: "Purple"
    }, {
      num: 3,
      name: "Brice Swyre",
      job: "Tax Accountant",
      favoriteColor: "Red"
    }, {
      num: 4,
      name: "Marjy Ferencz",
      job: "Office Assistant I",
      favoriteColor: "Crimson"
    }];
    return () => createVNode(resolveComponent("dv-table"), {
      "columns": columns,
      "dataSource": dataSource
    }, null);
  }
};
var _sfc_main$e = {
  setup: () => {
    const columns = [{
      title: "",
      dataIndex: "num",
      fixed: "left",
      width: 20
    }, {
      title: "name",
      dataIndex: "name"
    }, {
      title: "job",
      dataIndex: "job"
    }, {
      title: "favorite color",
      dataIndex: "favoriteColor"
    }];
    const dataSource = [{
      num: 1,
      name: "Cy Ganderton",
      job: "Quality Control Specialist",
      favoriteColor: "Blue"
    }, {
      num: 2,
      name: "Hart Hagerty",
      job: "Desktop Support Technician",
      favoriteColor: "Purple"
    }, {
      num: 3,
      name: "Brice Swyre",
      job: "Tax Accountant",
      favoriteColor: "Red"
    }, {
      num: 4,
      name: "Marjy Ferencz",
      job: "Office Assistant I",
      favoriteColor: "Crimson"
    }];
    return {
      columns,
      dataSource
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_dv_table = resolveComponent("dv-table");
  _push(ssrRenderComponent(_component_dv_table, mergeProps({
    columns: _ctx.columns,
    dataSource: _ctx.dataSource,
    zebra: "",
    compact: ""
  }, _attrs), null, _parent));
}
const _sfc_setup$f = _sfc_main$e.setup;
_sfc_main$e.setup = (props2, ctx2) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/.demo/ChtmlCfxvtaaxdxbbbyxdvavtwczdyetyefbwbxzzuxtte.vue");
  return _sfc_setup$f ? _sfc_setup$f(props2, ctx2) : void 0;
};
var __unplugin_components_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender]]);
var __unplugin_components_2$1 = {
  setup: () => {
    const columns = [{
      title: "",
      dataIndex: "num",
      fixed: "left",
      width: 20,
      render: (num) => createVNode("strong", null, [num])
    }, {
      title: "name",
      dataIndex: "name"
    }, {
      title: "job",
      dataIndex: "job"
    }, {
      title: () => createVNode(Fragment, null, [createVNode(resolveComponent("dv-icon-color"), {
        "size": "1.5em",
        "style": "margin-right: 6px"
      }, null), createTextVNode("favorite color")]),
      dataIndex: "favoriteColor",
      render: (color) => createVNode("span", {
        "style": {
          color
        }
      }, [color])
    }];
    const dataSource = [{
      num: 1,
      name: "Cy Ganderton",
      job: "Quality Control Specialist",
      favoriteColor: "Blue"
    }, {
      num: 2,
      name: "Hart Hagerty",
      job: "Desktop Support Technician",
      favoriteColor: "Purple"
    }, {
      num: 3,
      name: "Brice Swyre",
      job: "Tax Accountant",
      favoriteColor: "Red"
    }, {
      num: 4,
      name: "Marjy Ferencz",
      job: "Office Assistant I",
      favoriteColor: "Crimson"
    }];
    return () => createVNode(resolveComponent("dv-table"), {
      "columns": columns,
      "dataSource": dataSource
    }, null);
  }
};
const _sfc_main$d = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "meta": [] };
    expose({ frontmatter });
    const head = { "meta": [] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Playground = resolveComponent("Playground");
      const _component_CtsxCwwccftwzwdzxdwtxfavzxuyybaezcwwcyybvvexv = __unplugin_components_0$2;
      const _component_ChtmlCfxvtaaxdxbbbyxdvavtwczdyetyefbwbxzzuxtte = __unplugin_components_1$1;
      const _component_CtsxCufbuyyywatzeafuwxuxfycwbawctwxzeuccwaxuu = __unplugin_components_2$1;
      const _component_MarkdownTable = resolveComponent("MarkdownTable");
      _push(`<!--[--><div class="markdown-body"><h1>Table</h1><h2>Examples</h2><p>table</p></div>`);
      _push(ssrRenderComponent(_component_Playground, {
        lang: "tsx",
        code: '<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {\n    <span class="hljs-keyword">const</span> columns = [\n      {\n        <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;&#x27;</span>,\n        <span class="hljs-attr">dataIndex</span>: <span class="hljs-string">&#x27;num&#x27;</span>,\n        <span class="hljs-attr">fixed</span>: <span class="hljs-string">&#x27;left&#x27;</span>,\n        <span class="hljs-attr">width</span>: <span class="hljs-number">20</span>,\n      },\n      {\n        <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;name&#x27;</span>,\n        <span class="hljs-attr">dataIndex</span>: <span class="hljs-string">&#x27;name&#x27;</span>,\n      },\n      {\n        <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;job&#x27;</span>,\n        <span class="hljs-attr">dataIndex</span>: <span class="hljs-string">&#x27;job&#x27;</span>,\n      },\n      {\n        <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;favorite color&#x27;</span>,\n        <span class="hljs-attr">dataIndex</span>: <span class="hljs-string">&#x27;favoriteColor&#x27;</span>,\n      },\n    ];\n\n    <span class="hljs-keyword">const</span> dataSource = [\n      {\n        <span class="hljs-attr">num</span>: <span class="hljs-number">1</span>,\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Cy Ganderton&#x27;</span>,\n        <span class="hljs-attr">job</span>: <span class="hljs-string">&#x27;Quality Control Specialist&#x27;</span>,\n        <span class="hljs-attr">favoriteColor</span>: <span class="hljs-string">&#x27;Blue&#x27;</span>,\n      },\n      {\n        <span class="hljs-attr">num</span>: <span class="hljs-number">2</span>,\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Hart Hagerty&#x27;</span>,\n        <span class="hljs-attr">job</span>: <span class="hljs-string">&#x27;Desktop Support Technician&#x27;</span>,\n        <span class="hljs-attr">favoriteColor</span>: <span class="hljs-string">&#x27;Purple&#x27;</span>,\n      },\n      {\n        <span class="hljs-attr">num</span>: <span class="hljs-number">3</span>,\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Brice Swyre&#x27;</span>,\n        <span class="hljs-attr">job</span>: <span class="hljs-string">&#x27;Tax Accountant&#x27;</span>,\n        <span class="hljs-attr">favoriteColor</span>: <span class="hljs-string">&#x27;Red&#x27;</span>,\n      },\n      {\n        <span class="hljs-attr">num</span>: <span class="hljs-number">4</span>,\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Marjy Ferencz&#x27;</span>,\n        <span class="hljs-attr">job</span>: <span class="hljs-string">&#x27;Office Assistant I&#x27;</span>,\n        <span class="hljs-attr">favoriteColor</span>: <span class="hljs-string">&#x27;Crimson&#x27;</span>,\n      },\n    ];\n    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">dv-table</span> <span class="hljs-attr">columns</span>=<span class="hljs-string">{columns}</span> <span class="hljs-attr">dataSource</span>=<span class="hljs-string">{dataSource}</span> /&gt;</span></span>;\n  },\n};\n'
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CtsxCwwccftwzwdzxdwtxfavzxuyybaezcwwcyybvvexv, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CtsxCwwccftwzwdzxdwtxfavzxuyybaezcwwcyybvvexv)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>table-zebra &amp; table-compact</p></div>`);
      _push(ssrRenderComponent(_component_Playground, {
        lang: "html",
        code: '<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-table</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> <span class="hljs-attr">:dataSource</span>=<span class="hljs-string">&quot;dataSource&quot;</span> <span class="hljs-attr">zebra</span> <span class="hljs-attr">compact</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;tsx&quot;</span>&gt;</span><span class="language-javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-keyword">const</span> columns = [\n        {\n          <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;&#x27;</span>,\n          <span class="hljs-attr">dataIndex</span>: <span class="hljs-string">&#x27;num&#x27;</span>,\n          <span class="hljs-attr">fixed</span>: <span class="hljs-string">&#x27;left&#x27;</span>,\n          <span class="hljs-attr">width</span>: <span class="hljs-number">20</span>,\n        },\n        {\n          <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;name&#x27;</span>,\n          <span class="hljs-attr">dataIndex</span>: <span class="hljs-string">&#x27;name&#x27;</span>,\n        },\n        {\n          <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;job&#x27;</span>,\n          <span class="hljs-attr">dataIndex</span>: <span class="hljs-string">&#x27;job&#x27;</span>,\n        },\n        {\n          <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;favorite color&#x27;</span>,\n          <span class="hljs-attr">dataIndex</span>: <span class="hljs-string">&#x27;favoriteColor&#x27;</span>,\n        },\n      ];\n\n      <span class="hljs-keyword">const</span> dataSource = [\n        {\n          <span class="hljs-attr">num</span>: <span class="hljs-number">1</span>,\n          <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Cy Ganderton&#x27;</span>,\n          <span class="hljs-attr">job</span>: <span class="hljs-string">&#x27;Quality Control Specialist&#x27;</span>,\n          <span class="hljs-attr">favoriteColor</span>: <span class="hljs-string">&#x27;Blue&#x27;</span>,\n        },\n        {\n          <span class="hljs-attr">num</span>: <span class="hljs-number">2</span>,\n          <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Hart Hagerty&#x27;</span>,\n          <span class="hljs-attr">job</span>: <span class="hljs-string">&#x27;Desktop Support Technician&#x27;</span>,\n          <span class="hljs-attr">favoriteColor</span>: <span class="hljs-string">&#x27;Purple&#x27;</span>,\n        },\n        {\n          <span class="hljs-attr">num</span>: <span class="hljs-number">3</span>,\n          <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Brice Swyre&#x27;</span>,\n          <span class="hljs-attr">job</span>: <span class="hljs-string">&#x27;Tax Accountant&#x27;</span>,\n          <span class="hljs-attr">favoriteColor</span>: <span class="hljs-string">&#x27;Red&#x27;</span>,\n        },\n        {\n          <span class="hljs-attr">num</span>: <span class="hljs-number">4</span>,\n          <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Marjy Ferencz&#x27;</span>,\n          <span class="hljs-attr">job</span>: <span class="hljs-string">&#x27;Office Assistant I&#x27;</span>,\n          <span class="hljs-attr">favoriteColor</span>: <span class="hljs-string">&#x27;Crimson&#x27;</span>,\n        },\n      ];\n      <span class="hljs-keyword">return</span> {\n        columns,\n        dataSource,\n      };\n    },\n  };\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n'
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ChtmlCfxvtaaxdxbbbyxdvavtwczdyetyefbwbxzzuxtte, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ChtmlCfxvtaaxdxbbbyxdvavtwczdyetyefbwbxzzuxtte)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>table-jsx</p></div>`);
      _push(ssrRenderComponent(_component_Playground, {
        lang: "tsx",
        code: '<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {\n    <span class="hljs-keyword">const</span> columns = [\n      {\n        <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;&#x27;</span>,\n        <span class="hljs-attr">dataIndex</span>: <span class="hljs-string">&#x27;num&#x27;</span>,\n        <span class="hljs-attr">fixed</span>: <span class="hljs-string">&#x27;left&#x27;</span>,\n        <span class="hljs-attr">width</span>: <span class="hljs-number">20</span>,\n        <span class="hljs-attr">render</span>: <span class="hljs-function">(<span class="hljs-params">num</span>) =&gt;</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>{num}<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span></span>,\n      },\n      {\n        <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;name&#x27;</span>,\n        <span class="hljs-attr">dataIndex</span>: <span class="hljs-string">&#x27;name&#x27;</span>,\n      },\n      {\n        <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;job&#x27;</span>,\n        <span class="hljs-attr">dataIndex</span>: <span class="hljs-string">&#x27;job&#x27;</span>,\n      },\n      {\n        <span class="hljs-attr">title</span>: <span class="hljs-function">() =&gt;</span> (\n          <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">dv-icon-color</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;1.5em&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-right: 6px&quot;</span> /&gt;</span>\n            favorite color\n          <span class="hljs-tag">&lt;/&gt;</span></span>\n        ),\n        <span class="hljs-attr">dataIndex</span>: <span class="hljs-string">&#x27;favoriteColor&#x27;</span>,\n        <span class="hljs-attr">render</span>: <span class="hljs-function">(<span class="hljs-params">color</span>) =&gt;</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">color</span> }}&gt;</span>{color}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span></span>,\n      },\n    ];\n\n    <span class="hljs-keyword">const</span> dataSource = [\n      {\n        <span class="hljs-attr">num</span>: <span class="hljs-number">1</span>,\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Cy Ganderton&#x27;</span>,\n        <span class="hljs-attr">job</span>: <span class="hljs-string">&#x27;Quality Control Specialist&#x27;</span>,\n        <span class="hljs-attr">favoriteColor</span>: <span class="hljs-string">&#x27;Blue&#x27;</span>,\n      },\n      {\n        <span class="hljs-attr">num</span>: <span class="hljs-number">2</span>,\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Hart Hagerty&#x27;</span>,\n        <span class="hljs-attr">job</span>: <span class="hljs-string">&#x27;Desktop Support Technician&#x27;</span>,\n        <span class="hljs-attr">favoriteColor</span>: <span class="hljs-string">&#x27;Purple&#x27;</span>,\n      },\n      {\n        <span class="hljs-attr">num</span>: <span class="hljs-number">3</span>,\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Brice Swyre&#x27;</span>,\n        <span class="hljs-attr">job</span>: <span class="hljs-string">&#x27;Tax Accountant&#x27;</span>,\n        <span class="hljs-attr">favoriteColor</span>: <span class="hljs-string">&#x27;Red&#x27;</span>,\n      },\n      {\n        <span class="hljs-attr">num</span>: <span class="hljs-number">4</span>,\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Marjy Ferencz&#x27;</span>,\n        <span class="hljs-attr">job</span>: <span class="hljs-string">&#x27;Office Assistant I&#x27;</span>,\n        <span class="hljs-attr">favoriteColor</span>: <span class="hljs-string">&#x27;Crimson&#x27;</span>,\n      },\n    ];\n    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">dv-table</span> <span class="hljs-attr">columns</span>=<span class="hljs-string">{columns}</span> <span class="hljs-attr">dataSource</span>=<span class="hljs-string">{dataSource}</span> /&gt;</span></span>;\n  },\n};\n'
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CtsxCufbuyyywatzeafuwxuxfycwbawctwxzeuccwaxuu, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CtsxCufbuyyywatzeafuwxuxfycwbawctwxzeuccwaxuu)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><h2>Table</h2><h3>Attributes</h3>`);
      _push(ssrRenderComponent(_component_MarkdownTable, {
        columns: [{ "title": "name", "dataIndex": 0 }, { "title": "description", "dataIndex": 1 }, { "title": "type", "dataIndex": 2 }, { "title": "default", "dataIndex": 3 }],
        dataSource: [{ "0": "columns", "1": "table columns config", "2": "ITableColumn[]", "3": "-" }, { "0": "dataSource", "1": "table data source", "2": "array", "3": "-" }, { "0": "compact", "1": "makes table more compact", "2": "boolean", "3": "-" }, { "0": "zebra", "1": "makes table rows zebra", "2": "boolean", "3": "-" }]
      }, null, _parent));
      _push(`<h3>ITableColumn</h3><pre><code class="hljs language-ts"><span class="hljs-keyword">interface</span> ITableColumn&lt;T = unknown&gt; {
  title?: <span class="hljs-built_in">string</span> | (<span class="hljs-function">() =&gt;</span> <span class="hljs-built_in">any</span>);
  dataIndex?: <span class="hljs-built_in">string</span>;
  key?: <span class="hljs-built_in">string</span>;
  fixed?: <span class="hljs-string">&#39;left&#39;</span> | <span class="hljs-string">&#39;right&#39;</span>;
  render?: <span class="hljs-function">(<span class="hljs-params">text: <span class="hljs-built_in">string</span>, record: T, index: <span class="hljs-built_in">number</span></span>) =&gt;</span> <span class="hljs-built_in">any</span>;
}
</code></pre></div><!--]-->`);
    };
  }
};
const _sfc_setup$e = _sfc_main$d.setup;
_sfc_main$d.setup = (props2, ctx2) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/components/table.md");
  return _sfc_setup$e ? _sfc_setup$e(props2, ctx2) : void 0;
};
var table = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$d
});
var __unplugin_components_0$1 = {
  setup: () => {
    const currentTab = ref("1");
    return () => createVNode(Tabs, {
      "value": currentTab.value,
      "onUpdate:value": ($event) => currentTab.value = $event
    }, {
      default: () => [createVNode(Tab, {
        "name": "1",
        "title": "Tab 1"
      }, {
        default: () => [createTextVNode("Content 1")]
      }), createVNode(Tab, {
        "name": "2",
        "title": "Tab 2"
      }, {
        default: () => [createTextVNode("Content 2")]
      }), createVNode(Tab, {
        "name": "3",
        "title": "Tab 3"
      }, {
        default: () => [createTextVNode("Content 3")]
      })]
    });
  }
};
var __unplugin_components_1 = {
  setup: () => {
    const currentTab = ref("1");
    return () => createVNode(Tabs, {
      "value": currentTab.value,
      "onUpdate:value": ($event) => currentTab.value = $event,
      "type": "bordered"
    }, {
      default: () => [createVNode(Tab, {
        "name": "1",
        "title": "Tab 1"
      }, {
        default: () => [createTextVNode("Content 1")]
      }), createVNode(Tab, {
        "name": "2",
        "title": "Tab 2"
      }, {
        default: () => [createTextVNode("Content 2")]
      }), createVNode(Tab, {
        "name": "3",
        "title": "Tab 3"
      }, {
        default: () => [createTextVNode("Content 3")]
      })]
    });
  }
};
var __unplugin_components_2 = {
  setup: () => {
    const currentTab = ref("1");
    return () => createVNode(Tabs, {
      "value": currentTab.value,
      "onUpdate:value": ($event) => currentTab.value = $event,
      "type": "lifted"
    }, {
      default: () => [createVNode(Tab, {
        "name": "1",
        "title": "Tab 1"
      }, {
        default: () => [createTextVNode("Content 1")]
      }), createVNode(Tab, {
        "name": "2",
        "title": "Tab 2"
      }, {
        default: () => [createTextVNode("Content 2")]
      }), createVNode(Tab, {
        "name": "3",
        "title": "Tab 3"
      }, {
        default: () => [createTextVNode("Content 3")]
      })]
    });
  }
};
var __unplugin_components_3 = {
  setup: () => {
    const currentTab = ref("1");
    return () => createVNode(Tabs, {
      "value": currentTab.value,
      "onUpdate:value": ($event) => currentTab.value = $event,
      "type": "boxed"
    }, {
      default: () => [createVNode(Tab, {
        "name": "1",
        "title": "Tab 1"
      }, {
        default: () => [createTextVNode("Content 1")]
      }), createVNode(Tab, {
        "name": "2",
        "title": "Tab 2"
      }, {
        default: () => [createTextVNode("Content 2")]
      }), createVNode(Tab, {
        "name": "3",
        "title": "Tab 3"
      }, {
        default: () => [createTextVNode("Content 3")]
      })]
    });
  }
};
var __unplugin_components_4 = {
  setup: () => {
    const currentTab = ref("1");
    return () => createVNode(Fragment, null, [createVNode(Tabs, {
      "value": currentTab.value,
      "onUpdate:value": ($event) => currentTab.value = $event,
      "type": "lifted",
      "size": "xs"
    }, {
      default: () => [createVNode(Tab, {
        "name": "1",
        "title": "Tiny"
      }, null), createVNode(Tab, {
        "name": "2",
        "title": "Tiny"
      }, null), createVNode(Tab, {
        "name": "3",
        "title": "Tiny"
      }, null)]
    }), createVNode(Tabs, {
      "value": currentTab.value,
      "onUpdate:value": ($event) => currentTab.value = $event,
      "type": "lifted",
      "size": "sm"
    }, {
      default: () => [createVNode(Tab, {
        "name": "1",
        "title": "Small"
      }, null), createVNode(Tab, {
        "name": "2",
        "title": "Small"
      }, null), createVNode(Tab, {
        "name": "3",
        "title": "Small"
      }, null)]
    }), createVNode(Tabs, {
      "value": currentTab.value,
      "onUpdate:value": ($event) => currentTab.value = $event,
      "type": "lifted",
      "size": "md"
    }, {
      default: () => [createVNode(Tab, {
        "name": "1",
        "title": "Normal"
      }, null), createVNode(Tab, {
        "name": "2",
        "title": "Normal"
      }, null), createVNode(Tab, {
        "name": "3",
        "title": "Normal"
      }, null)]
    }), createVNode(Tabs, {
      "value": currentTab.value,
      "onUpdate:value": ($event) => currentTab.value = $event,
      "type": "lifted",
      "size": "lg"
    }, {
      default: () => [createVNode(Tab, {
        "name": "1",
        "title": "Large"
      }, null), createVNode(Tab, {
        "name": "2",
        "title": "Large"
      }, null), createVNode(Tab, {
        "name": "3",
        "title": "Large"
      }, null)]
    })]);
  }
};
const _sfc_main$c = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "meta": [] };
    expose({ frontmatter });
    const head = { "meta": [] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Playground = resolveComponent("Playground");
      const _component_CtsxCewewtbtbycctuwbyffycxdxwtxydxdzdwcacwuwy = __unplugin_components_0$1;
      const _component_CtsxCfwvxdtwftbzcxfewewdxyxuawdedtwyawtexewxw = __unplugin_components_1;
      const _component_CtsxCxfyzawbeaccfvvxbyuttaewwyyywwfbefwftebed = __unplugin_components_2;
      const _component_CtsxCtduwzetucztwfceeuddaexyxfxtwtxxcwywybxaf = __unplugin_components_3;
      const _component_CtsxCwdtcbxtuxycevcxwbbuvxaeyfbfyaztdvweytxbf = __unplugin_components_4;
      _push(`<!--[--><div class="markdown-body"><h1>Tab</h1><h2>Examples</h2><p>tabs</p></div>`);
      _push(ssrRenderComponent(_component_Playground, {
        lang: "tsx",
        code: '<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tabs</span>, <span class="hljs-title class_">Tab</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;daisyui-vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {\n    <span class="hljs-keyword">const</span> currentTab = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;1&#x27;</span>);\n    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (\n      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">{[currentTab.value,</span> &#x27;<span class="hljs-attr">value</span>&#x27;]}&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 1&quot;</span>&gt;</span>\n          Content 1\n        <span class="hljs-tag">&lt;/<span class="hljs-name">Tab</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 2&quot;</span>&gt;</span>\n          Content 2\n        <span class="hljs-tag">&lt;/<span class="hljs-name">Tab</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 3&quot;</span>&gt;</span>\n          Content 3\n        <span class="hljs-tag">&lt;/<span class="hljs-name">Tab</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span></span>\n    );\n  },\n};\n'
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CtsxCewewtbtbycctuwbyffycxdxwtxydxdzdwcacwuwy, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CtsxCewewtbtbycctuwbyffycxdxwtxydxdzdwcacwuwy)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>tab-bordered</p></div>`);
      _push(ssrRenderComponent(_component_Playground, {
        lang: "tsx",
        code: '<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tabs</span>, <span class="hljs-title class_">Tab</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;daisyui-vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {\n    <span class="hljs-keyword">const</span> currentTab = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;1&#x27;</span>);\n    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (\n      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">{[currentTab.value,</span> &#x27;<span class="hljs-attr">value</span>&#x27;]} <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;bordered&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 1&quot;</span>&gt;</span>\n          Content 1\n        <span class="hljs-tag">&lt;/<span class="hljs-name">Tab</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 2&quot;</span>&gt;</span>\n          Content 2\n        <span class="hljs-tag">&lt;/<span class="hljs-name">Tab</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 3&quot;</span>&gt;</span>\n          Content 3\n        <span class="hljs-tag">&lt;/<span class="hljs-name">Tab</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span></span>\n    );\n  },\n};\n'
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CtsxCfwvxdtwftbzcxfewewdxyxuawdedtwyawtexewxw, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CtsxCfwvxdtwftbzcxfewewdxyxuawdedtwyawtexewxw)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>tab-lifted</p></div>`);
      _push(ssrRenderComponent(_component_Playground, {
        lang: "tsx",
        code: '<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tabs</span>, <span class="hljs-title class_">Tab</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;daisyui-vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {\n    <span class="hljs-keyword">const</span> currentTab = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;1&#x27;</span>);\n    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (\n      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">{[currentTab.value,</span> &#x27;<span class="hljs-attr">value</span>&#x27;]} <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;lifted&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 1&quot;</span>&gt;</span>\n          Content 1\n        <span class="hljs-tag">&lt;/<span class="hljs-name">Tab</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 2&quot;</span>&gt;</span>\n          Content 2\n        <span class="hljs-tag">&lt;/<span class="hljs-name">Tab</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 3&quot;</span>&gt;</span>\n          Content 3\n        <span class="hljs-tag">&lt;/<span class="hljs-name">Tab</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span></span>\n    );\n  },\n};\n'
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CtsxCxfyzawbeaccfvvxbyuttaewwyyywwfbefwftebed, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CtsxCxfyzawbeaccfvvxbyuttaewwyyywwfbefwftebed)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>tab-boxed</p></div>`);
      _push(ssrRenderComponent(_component_Playground, {
        lang: "tsx",
        code: '<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tabs</span>, <span class="hljs-title class_">Tab</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;daisyui-vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {\n    <span class="hljs-keyword">const</span> currentTab = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;1&#x27;</span>);\n    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (\n      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">{[currentTab.value,</span> &#x27;<span class="hljs-attr">value</span>&#x27;]} <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;boxed&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 1&quot;</span>&gt;</span>\n          Content 1\n        <span class="hljs-tag">&lt;/<span class="hljs-name">Tab</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 2&quot;</span>&gt;</span>\n          Content 2\n        <span class="hljs-tag">&lt;/<span class="hljs-name">Tab</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 3&quot;</span>&gt;</span>\n          Content 3\n        <span class="hljs-tag">&lt;/<span class="hljs-name">Tab</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span></span>\n    );\n  },\n};\n'
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CtsxCtduwzetucztwfceeuddaexyxfxtwtxxcwywybxaf, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CtsxCtduwzetucztwfceeuddaexyxfxtwtxxcwywybxaf)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>size</p></div>`);
      _push(ssrRenderComponent(_component_Playground, {
        lang: "tsx",
        code: '<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tabs</span>, <span class="hljs-title class_">Tab</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;daisyui-vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {\n    <span class="hljs-keyword">const</span> currentTab = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;1&#x27;</span>);\n    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (\n      <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">{[currentTab.value,</span> &#x27;<span class="hljs-attr">value</span>&#x27;]} <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;lifted&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tiny&quot;</span> /&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tiny&quot;</span> /&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tiny&quot;</span> /&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">{[currentTab.value,</span> &#x27;<span class="hljs-attr">value</span>&#x27;]} <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;lifted&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Small&quot;</span> /&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Small&quot;</span> /&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Small&quot;</span> /&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">{[currentTab.value,</span> &#x27;<span class="hljs-attr">value</span>&#x27;]} <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;lifted&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Normal&quot;</span> /&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Normal&quot;</span> /&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Normal&quot;</span> /&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">{[currentTab.value,</span> &#x27;<span class="hljs-attr">value</span>&#x27;]} <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;lifted&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Large&quot;</span> /&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Large&quot;</span> /&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">Tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Large&quot;</span> /&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span>\n      <span class="hljs-tag">&lt;/&gt;</span></span>\n    );\n  },\n};\n'
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CtsxCwdtcbxtuxycevcxwbbuvxaeyfbfyaztdvweytxbf, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CtsxCwdtcbxtuxycevcxwbbuvxaeyfbfyaztdvweytxbf)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"></div><!--]-->`);
    };
  }
};
const _sfc_setup$d = _sfc_main$c.setup;
_sfc_main$c.setup = (props2, ctx2) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/components/tab.md");
  return _sfc_setup$d ? _sfc_setup$d(props2, ctx2) : void 0;
};
var tab = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$c
});
const _sfc_main$b = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "meta": [] };
    expose({ frontmatter });
    const head = { "meta": [] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Playground = resolveComponent("Playground");
      const _component_dv_artboard = resolveComponent("dv-artboard");
      const _component_dv_menu = resolveComponent("dv-menu");
      const _component_dv_menu_item = resolveComponent("dv-menu-item");
      const _component_dv_icon_eye = resolveComponent("dv-icon-eye");
      const _component_dv_icon_github = resolveComponent("dv-icon-github");
      const _component_dv_icon_code = resolveComponent("dv-icon-code");
      const _component_MarkdownTable = resolveComponent("MarkdownTable");
      _push(`<!--[--><div class="markdown-body"><h1>Menu</h1><p>notice:</p><ul><li>when menu class contains <code>p-</code>, menu-item will become border-radius.</li></ul><h2>Examples</h2><p>veritcal with icons</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">dv-artboard</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-4 bg-gray-100&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-2 shadow-lg rounded-lg bg-white&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span> <span class="hljs-attr">asTitle</span>&gt;</span> Menu title <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span> Item without icon <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">dv-icon-eye</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mr-2&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;1.25em&quot;</span> /&gt;</span>\n      Item with icon\n    <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">dv-artboard</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_dv_artboard, { class: "py-4 bg-gray-100" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_menu, { class: "py-2 shadow-lg rounded-lg bg-white" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_dv_menu_item, { asTitle: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Menu title `);
                            } else {
                              return [
                                createTextVNode(" Menu title ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_dv_menu_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Item without icon `);
                            } else {
                              return [
                                createTextVNode(" Item without icon ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_dv_menu_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_dv_icon_eye, {
                                class: "mr-2",
                                size: "1.25em"
                              }, null, _parent5, _scopeId4));
                              _push5(` Item with icon `);
                            } else {
                              return [
                                createVNode(_component_dv_icon_eye, {
                                  class: "mr-2",
                                  size: "1.25em"
                                }),
                                createTextVNode(" Item with icon ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_dv_menu_item, { asTitle: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" Menu title ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createTextVNode(" Item without icon ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createVNode(_component_dv_icon_eye, {
                                class: "mr-2",
                                size: "1.25em"
                              }),
                              createTextVNode(" Item with icon ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_menu, { class: "py-2 shadow-lg rounded-lg bg-white" }, {
                      default: withCtx(() => [
                        createVNode(_component_dv_menu_item, { asTitle: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" Menu title ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_dv_menu_item, null, {
                          default: withCtx(() => [
                            createTextVNode(" Item without icon ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_dv_menu_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_dv_icon_eye, {
                              class: "mr-2",
                              size: "1.25em"
                            }),
                            createTextVNode(" Item with icon ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_dv_artboard, { class: "py-4 bg-gray-100" }, {
                default: withCtx(() => [
                  createVNode(_component_dv_menu, { class: "py-2 shadow-lg rounded-lg bg-white" }, {
                    default: withCtx(() => [
                      createVNode(_component_dv_menu_item, { asTitle: "" }, {
                        default: withCtx(() => [
                          createTextVNode(" Menu title ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_dv_menu_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Item without icon ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_dv_menu_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_dv_icon_eye, {
                            class: "mr-2",
                            size: "1.25em"
                          }),
                          createTextVNode(" Item with icon ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>veritcal with icons and padding. menu-item have border-raidus</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">dv-artboard</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-4 bg-gray-100&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;p-4 shadow-lg rounded-lg bg-white&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span> <span class="hljs-attr">asTitle</span>&gt;</span> Menu title <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span> Item without icon <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">dv-icon-eye</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mr-2&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;1.25em&quot;</span> /&gt;</span>\n      Item with icon\n    <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">dv-artboard</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_dv_artboard, { class: "py-4 bg-gray-100" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_menu, { class: "p-4 shadow-lg rounded-lg bg-white" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_dv_menu_item, { asTitle: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Menu title `);
                            } else {
                              return [
                                createTextVNode(" Menu title ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_dv_menu_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Item without icon `);
                            } else {
                              return [
                                createTextVNode(" Item without icon ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_dv_menu_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_dv_icon_eye, {
                                class: "mr-2",
                                size: "1.25em"
                              }, null, _parent5, _scopeId4));
                              _push5(` Item with icon `);
                            } else {
                              return [
                                createVNode(_component_dv_icon_eye, {
                                  class: "mr-2",
                                  size: "1.25em"
                                }),
                                createTextVNode(" Item with icon ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_dv_menu_item, { asTitle: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" Menu title ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createTextVNode(" Item without icon ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createVNode(_component_dv_icon_eye, {
                                class: "mr-2",
                                size: "1.25em"
                              }),
                              createTextVNode(" Item with icon ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_menu, { class: "p-4 shadow-lg rounded-lg bg-white" }, {
                      default: withCtx(() => [
                        createVNode(_component_dv_menu_item, { asTitle: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" Menu title ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_dv_menu_item, null, {
                          default: withCtx(() => [
                            createTextVNode(" Item without icon ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_dv_menu_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_dv_icon_eye, {
                              class: "mr-2",
                              size: "1.25em"
                            }),
                            createTextVNode(" Item with icon ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_dv_artboard, { class: "py-4 bg-gray-100" }, {
                default: withCtx(() => [
                  createVNode(_component_dv_menu, { class: "p-4 shadow-lg rounded-lg bg-white" }, {
                    default: withCtx(() => [
                      createVNode(_component_dv_menu_item, { asTitle: "" }, {
                        default: withCtx(() => [
                          createTextVNode(" Menu title ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_dv_menu_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Item without icon ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_dv_menu_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_dv_icon_eye, {
                            class: "mr-2",
                            size: "1.25em"
                          }),
                          createTextVNode(" Item with icon ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>bordered, hover-bordered, disabled</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">dv-artboard</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-4 bg-gray-100&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-4 shadow-lg rounded-lg bg-white&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span> <span class="hljs-attr">asTitle</span>&gt;</span> Menu title <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span> <span class="hljs-attr">disabled</span>&gt;</span> Item is diabled <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span> <span class="hljs-attr">bordered</span>&gt;</span> Item is bordered <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span> <span class="hljs-attr">hover-bordered</span>&gt;</span> Item is hover bordered <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span> <span class="hljs-attr">active</span>&gt;</span> Item is active <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">dv-artboard</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_dv_artboard, { class: "py-4 bg-gray-100" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_menu, { class: "py-4 shadow-lg rounded-lg bg-white" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_dv_menu_item, { asTitle: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Menu title `);
                            } else {
                              return [
                                createTextVNode(" Menu title ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_dv_menu_item, { disabled: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Item is diabled `);
                            } else {
                              return [
                                createTextVNode(" Item is diabled ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_dv_menu_item, { bordered: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Item is bordered `);
                            } else {
                              return [
                                createTextVNode(" Item is bordered ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_dv_menu_item, { "hover-bordered": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Item is hover bordered `);
                            } else {
                              return [
                                createTextVNode(" Item is hover bordered ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_dv_menu_item, { active: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Item is active `);
                            } else {
                              return [
                                createTextVNode(" Item is active ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_dv_menu_item, { asTitle: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" Menu title ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, { disabled: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" Item is diabled ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, { bordered: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" Item is bordered ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, { "hover-bordered": "" }, {
                            default: withCtx(() => [
                              createTextVNode(" Item is hover bordered ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, { active: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" Item is active ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_menu, { class: "py-4 shadow-lg rounded-lg bg-white" }, {
                      default: withCtx(() => [
                        createVNode(_component_dv_menu_item, { asTitle: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" Menu title ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_dv_menu_item, { disabled: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" Item is diabled ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_dv_menu_item, { bordered: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" Item is bordered ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_dv_menu_item, { "hover-bordered": "" }, {
                          default: withCtx(() => [
                            createTextVNode(" Item is hover bordered ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_dv_menu_item, { active: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" Item is active ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_dv_artboard, { class: "py-4 bg-gray-100" }, {
                default: withCtx(() => [
                  createVNode(_component_dv_menu, { class: "py-4 shadow-lg rounded-lg bg-white" }, {
                    default: withCtx(() => [
                      createVNode(_component_dv_menu_item, { asTitle: "" }, {
                        default: withCtx(() => [
                          createTextVNode(" Menu title ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_dv_menu_item, { disabled: "" }, {
                        default: withCtx(() => [
                          createTextVNode(" Item is diabled ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_dv_menu_item, { bordered: "" }, {
                        default: withCtx(() => [
                          createTextVNode(" Item is bordered ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_dv_menu_item, { "hover-bordered": "" }, {
                        default: withCtx(() => [
                          createTextVNode(" Item is hover bordered ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_dv_menu_item, { active: "" }, {
                        default: withCtx(() => [
                          createTextVNode(" Item is active ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>horizontal</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">dv-artboard</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-4 bg-gray-100&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;shadow-lg rounded-lg bg-white&quot;</span> <span class="hljs-attr">horizontal</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span> <span class="hljs-attr">asTitle</span>&gt;</span> Menu title <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span> <span class="hljs-attr">disabled</span>&gt;</span> Item is diabled <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span> <span class="hljs-attr">bordered</span>&gt;</span> Item is bordered <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span> <span class="hljs-attr">active</span>&gt;</span> Item is active <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">dv-artboard</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_dv_artboard, { class: "py-4 bg-gray-100" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_menu, {
                    class: "shadow-lg rounded-lg bg-white",
                    horizontal: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_dv_menu_item, { asTitle: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Menu title `);
                            } else {
                              return [
                                createTextVNode(" Menu title ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_dv_menu_item, { disabled: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Item is diabled `);
                            } else {
                              return [
                                createTextVNode(" Item is diabled ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_dv_menu_item, { bordered: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Item is bordered `);
                            } else {
                              return [
                                createTextVNode(" Item is bordered ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_dv_menu_item, { active: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Item is active `);
                            } else {
                              return [
                                createTextVNode(" Item is active ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_dv_menu_item, { asTitle: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" Menu title ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, { disabled: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" Item is diabled ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, { bordered: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" Item is bordered ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, { active: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" Item is active ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_menu, {
                      class: "shadow-lg rounded-lg bg-white",
                      horizontal: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_dv_menu_item, { asTitle: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" Menu title ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_dv_menu_item, { disabled: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" Item is diabled ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_dv_menu_item, { bordered: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" Item is bordered ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_dv_menu_item, { active: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" Item is active ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_dv_artboard, { class: "py-4 bg-gray-100" }, {
                default: withCtx(() => [
                  createVNode(_component_dv_menu, {
                    class: "shadow-lg rounded-lg bg-white",
                    horizontal: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_dv_menu_item, { asTitle: "" }, {
                        default: withCtx(() => [
                          createTextVNode(" Menu title ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_dv_menu_item, { disabled: "" }, {
                        default: withCtx(() => [
                          createTextVNode(" Item is diabled ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_dv_menu_item, { bordered: "" }, {
                        default: withCtx(() => [
                          createTextVNode(" Item is bordered ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_dv_menu_item, { active: "" }, {
                        default: withCtx(() => [
                          createTextVNode(" Item is active ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>icon</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">dv-artboard</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-4 bg-gray-100&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;shadow-lg rounded-lg bg-white text-2xl mb-4&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">dv-icon-github</span> /&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">dv-icon-code</span> /&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">dv-icon-eye</span> /&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;shadow-lg rounded-lg bg-white text-2xl&quot;</span> <span class="hljs-attr">horizontal</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">dv-icon-github</span> /&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">dv-icon-code</span> /&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">dv-icon-eye</span> /&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">dv-artboard</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_dv_artboard, { class: "py-4 bg-gray-100" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_menu, { class: "shadow-lg rounded-lg bg-white text-2xl mb-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_dv_menu_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_dv_icon_github, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_dv_icon_github)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_dv_menu_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_dv_icon_code, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_dv_icon_code)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_dv_menu_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_dv_icon_eye, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_dv_icon_eye)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createVNode(_component_dv_icon_github)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createVNode(_component_dv_icon_code)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createVNode(_component_dv_icon_eye)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_dv_menu, {
                    class: "shadow-lg rounded-lg bg-white text-2xl",
                    horizontal: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_dv_menu_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_dv_icon_github, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_dv_icon_github)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_dv_menu_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_dv_icon_code, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_dv_icon_code)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_dv_menu_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_dv_icon_eye, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_dv_icon_eye)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createVNode(_component_dv_icon_github)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createVNode(_component_dv_icon_code)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createVNode(_component_dv_icon_eye)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_menu, { class: "shadow-lg rounded-lg bg-white text-2xl mb-4" }, {
                      default: withCtx(() => [
                        createVNode(_component_dv_menu_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_dv_icon_github)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_dv_menu_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_dv_icon_code)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_dv_menu_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_dv_icon_eye)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_dv_menu, {
                      class: "shadow-lg rounded-lg bg-white text-2xl",
                      horizontal: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_dv_menu_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_dv_icon_github)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_dv_menu_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_dv_icon_code)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_dv_menu_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_dv_icon_eye)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_dv_artboard, { class: "py-4 bg-gray-100" }, {
                default: withCtx(() => [
                  createVNode(_component_dv_menu, { class: "shadow-lg rounded-lg bg-white text-2xl mb-4" }, {
                    default: withCtx(() => [
                      createVNode(_component_dv_menu_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_dv_icon_github)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_dv_menu_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_dv_icon_code)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_dv_menu_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_dv_icon_eye)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_dv_menu, {
                    class: "shadow-lg rounded-lg bg-white text-2xl",
                    horizontal: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_dv_menu_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_dv_icon_github)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_dv_menu_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_dv_icon_code)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_dv_menu_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_dv_icon_eye)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>veritcal with submenu and compact</p><blockquote><p>TODO: refine usage api</p></blockquote></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">dv-artboard</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-4 bg-gray-100&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;p-4 shadow-lg rounded-lg bg-white&quot;</span> <span class="hljs-attr">compact</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span> Level 1 <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span> Level 1 <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span> Level 1 <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span> <span class="hljs-attr">:childWrapper</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span> Level 2 <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span> Level 2 <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span> <span class="hljs-attr">:childWrapper</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span> Level 3 <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span> Level 3 <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span> Level 2 <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span> Level 1 <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">dv-artboard</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_dv_artboard, { class: "py-4 bg-gray-100" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_menu, {
                    class: "p-4 shadow-lg rounded-lg bg-white",
                    compact: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_dv_menu_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Level 1 `);
                            } else {
                              return [
                                createTextVNode(" Level 1 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_dv_menu_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Level 1 `);
                            } else {
                              return [
                                createTextVNode(" Level 1 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_dv_menu_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Level 1 `);
                            } else {
                              return [
                                createTextVNode(" Level 1 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_dv_menu_item, { childWrapper: false }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_dv_menu, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_dv_menu_item, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Level 2 `);
                                        } else {
                                          return [
                                            createTextVNode(" Level 2 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_dv_menu_item, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Level 2 `);
                                        } else {
                                          return [
                                            createTextVNode(" Level 2 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_dv_menu_item, { childWrapper: false }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_dv_menu, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_dv_menu_item, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Level 3 `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Level 3 ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_dv_menu_item, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Level 3 `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Level 3 ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_dv_menu_item, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Level 3 ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_dv_menu_item, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Level 3 ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_dv_menu, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_dv_menu_item, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Level 3 ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_dv_menu_item, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Level 3 ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_dv_menu_item, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Level 2 `);
                                        } else {
                                          return [
                                            createTextVNode(" Level 2 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_dv_menu_item, null, {
                                        default: withCtx(() => [
                                          createTextVNode(" Level 2 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_dv_menu_item, null, {
                                        default: withCtx(() => [
                                          createTextVNode(" Level 2 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_dv_menu_item, { childWrapper: false }, {
                                        default: withCtx(() => [
                                          createVNode(_component_dv_menu, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_dv_menu_item, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Level 3 ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_dv_menu_item, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Level 3 ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_dv_menu_item, null, {
                                        default: withCtx(() => [
                                          createTextVNode(" Level 2 ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_dv_menu, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_dv_menu_item, null, {
                                      default: withCtx(() => [
                                        createTextVNode(" Level 2 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_dv_menu_item, null, {
                                      default: withCtx(() => [
                                        createTextVNode(" Level 2 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_dv_menu_item, { childWrapper: false }, {
                                      default: withCtx(() => [
                                        createVNode(_component_dv_menu, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_dv_menu_item, null, {
                                              default: withCtx(() => [
                                                createTextVNode(" Level 3 ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_dv_menu_item, null, {
                                              default: withCtx(() => [
                                                createTextVNode(" Level 3 ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_dv_menu_item, null, {
                                      default: withCtx(() => [
                                        createTextVNode(" Level 2 ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_dv_menu_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Level 1 `);
                            } else {
                              return [
                                createTextVNode(" Level 1 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createTextVNode(" Level 1 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createTextVNode(" Level 1 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createTextVNode(" Level 1 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, { childWrapper: false }, {
                            default: withCtx(() => [
                              createVNode(_component_dv_menu, null, {
                                default: withCtx(() => [
                                  createVNode(_component_dv_menu_item, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" Level 2 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_dv_menu_item, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" Level 2 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_dv_menu_item, { childWrapper: false }, {
                                    default: withCtx(() => [
                                      createVNode(_component_dv_menu, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_dv_menu_item, null, {
                                            default: withCtx(() => [
                                              createTextVNode(" Level 3 ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_dv_menu_item, null, {
                                            default: withCtx(() => [
                                              createTextVNode(" Level 3 ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_dv_menu_item, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" Level 2 ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createTextVNode(" Level 1 ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_menu, {
                      class: "p-4 shadow-lg rounded-lg bg-white",
                      compact: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_dv_menu_item, null, {
                          default: withCtx(() => [
                            createTextVNode(" Level 1 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_dv_menu_item, null, {
                          default: withCtx(() => [
                            createTextVNode(" Level 1 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_dv_menu_item, null, {
                          default: withCtx(() => [
                            createTextVNode(" Level 1 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_dv_menu_item, { childWrapper: false }, {
                          default: withCtx(() => [
                            createVNode(_component_dv_menu, null, {
                              default: withCtx(() => [
                                createVNode(_component_dv_menu_item, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" Level 2 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_dv_menu_item, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" Level 2 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_dv_menu_item, { childWrapper: false }, {
                                  default: withCtx(() => [
                                    createVNode(_component_dv_menu, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_dv_menu_item, null, {
                                          default: withCtx(() => [
                                            createTextVNode(" Level 3 ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_dv_menu_item, null, {
                                          default: withCtx(() => [
                                            createTextVNode(" Level 3 ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_dv_menu_item, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" Level 2 ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_dv_menu_item, null, {
                          default: withCtx(() => [
                            createTextVNode(" Level 1 ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_dv_artboard, { class: "py-4 bg-gray-100" }, {
                default: withCtx(() => [
                  createVNode(_component_dv_menu, {
                    class: "p-4 shadow-lg rounded-lg bg-white",
                    compact: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_dv_menu_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Level 1 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_dv_menu_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Level 1 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_dv_menu_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Level 1 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_dv_menu_item, { childWrapper: false }, {
                        default: withCtx(() => [
                          createVNode(_component_dv_menu, null, {
                            default: withCtx(() => [
                              createVNode(_component_dv_menu_item, null, {
                                default: withCtx(() => [
                                  createTextVNode(" Level 2 ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_dv_menu_item, null, {
                                default: withCtx(() => [
                                  createTextVNode(" Level 2 ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_dv_menu_item, { childWrapper: false }, {
                                default: withCtx(() => [
                                  createVNode(_component_dv_menu, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_dv_menu_item, null, {
                                        default: withCtx(() => [
                                          createTextVNode(" Level 3 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_dv_menu_item, null, {
                                        default: withCtx(() => [
                                          createTextVNode(" Level 3 ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_dv_menu_item, null, {
                                default: withCtx(() => [
                                  createTextVNode(" Level 2 ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_dv_menu_item, null, {
                        default: withCtx(() => [
                          createTextVNode(" Level 1 ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><h2>Menu</h2><h3>Attributes</h3>`);
      _push(ssrRenderComponent(_component_MarkdownTable, {
        columns: [{ "title": "name", "dataIndex": 0 }, { "title": "description", "dataIndex": 1 }, { "title": "type", "dataIndex": 2 }, { "title": "default", "dataIndex": 3 }],
        dataSource: [{ "0": "compact", "1": "makes menu more compact", "2": "boolean", "3": "-" }, { "0": "horizontal", "1": "makes menu list horizontal", "2": "boolean", "3": "-" }]
      }, null, _parent));
      _push(`<h2>MenuItem</h2><h3>Attributes</h3>`);
      _push(ssrRenderComponent(_component_MarkdownTable, {
        columns: [{ "title": "name", "dataIndex": 0 }, { "title": "description", "dataIndex": 1 }, { "title": "type", "dataIndex": 2 }, { "title": "default", "dataIndex": 3 }],
        dataSource: [{ "0": "asTitle", "1": "makes menu item to be title", "2": "boolean", "3": "-" }, { "0": "disabled", "1": "disabled status", "2": "boolean", "3": "-" }, { "0": "bordered", "1": "bordered status", "2": "boolean", "3": "-" }, { "0": "hoverBordered", "1": "hover-bordered status", "2": "boolean", "3": "-" }, { "0": "active", "1": "menu item active status(only when child is anchor element works)", "2": "boolean", "3": "-" }, { "0": "childWrapper", "1": "child wrap element, when asTitle then it will be span, otherwise it will be a", "2": "a, span, false", "3": "-" }]
      }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup$c = _sfc_main$b.setup;
_sfc_main$b.setup = (props2, ctx2) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/components/menu.md");
  return _sfc_setup$c ? _sfc_setup$c(props2, ctx2) : void 0;
};
var menu = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$b
});
var __unplugin_components_0 = {
  setup: () => {
    const types = ["squircle", "heart", "hexagon", "hexagon-2", "decagon", "pentagon", "diamond", "square", "circle", "parallelogram", "parallelogram-2", "parallelogram-3", "parallelogram-4", "star", "star-2", "triangle", "triangle-2", "triangle-3", "triangle-4"];
    return () => createVNode("div", null, [types.map((type) => createVNode("div", {
      "key": type
    }, [createVNode("p", {
      "class": "my-2"
    }, [createTextVNode("mask-"), type]), createVNode(resolveComponent("dv-mask"), {
      "type": type,
      "class": "mb-8"
    }, {
      default: () => [createVNode("img", {
        "src": "https://picsum.photos/id/1005/200/200"
      }, null)]
    })]))]);
  }
};
const _sfc_main$a = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "meta": [] };
    expose({ frontmatter });
    const head = { "meta": [] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Playground = resolveComponent("Playground");
      const _component_CtsxCayuxtddvdweafdvcdwttbbcuxeuxxvezvyzbuxat = __unplugin_components_0;
      const _component_MarkdownTable = resolveComponent("MarkdownTable");
      _push(`<!--[--><div class="markdown-body"><h1>Mask</h1><h2>Examples</h2><p>mask</p></div>`);
      _push(ssrRenderComponent(_component_Playground, {
        lang: "tsx",
        code: '<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">setup</span>: <span class="hljs-function">() =&gt;</span> {\n    <span class="hljs-keyword">const</span> types = [\n      <span class="hljs-string">&#x27;squircle&#x27;</span>,\n      <span class="hljs-string">&#x27;heart&#x27;</span>,\n      <span class="hljs-string">&#x27;hexagon&#x27;</span>,\n      <span class="hljs-string">&#x27;hexagon-2&#x27;</span>,\n      <span class="hljs-string">&#x27;decagon&#x27;</span>,\n      <span class="hljs-string">&#x27;pentagon&#x27;</span>,\n      <span class="hljs-string">&#x27;diamond&#x27;</span>,\n      <span class="hljs-string">&#x27;square&#x27;</span>,\n      <span class="hljs-string">&#x27;circle&#x27;</span>,\n      <span class="hljs-string">&#x27;parallelogram&#x27;</span>,\n      <span class="hljs-string">&#x27;parallelogram-2&#x27;</span>,\n      <span class="hljs-string">&#x27;parallelogram-3&#x27;</span>,\n      <span class="hljs-string">&#x27;parallelogram-4&#x27;</span>,\n      <span class="hljs-string">&#x27;star&#x27;</span>,\n      <span class="hljs-string">&#x27;star-2&#x27;</span>,\n      <span class="hljs-string">&#x27;triangle&#x27;</span>,\n      <span class="hljs-string">&#x27;triangle-2&#x27;</span>,\n      <span class="hljs-string">&#x27;triangle-3&#x27;</span>,\n      <span class="hljs-string">&#x27;triangle-4&#x27;</span>,\n    ];\n    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> (\n      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n        {types.map((type) =&gt; (\n          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{type}</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;my-2&quot;</span>&gt;</span>mask-{type}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">dv-mask</span> <span class="hljs-attr">type</span>=<span class="hljs-string">{type}</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-8&quot;</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://picsum.photos/id/1005/200/200&quot;</span> /&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">dv-mask</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n        ))}\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>\n    );\n  },\n};\n'
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CtsxCayuxtddvdweafdvcdwttbbcuxeuxxvezvyzbuxat, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CtsxCayuxtddvdweafdvcdwttbbcuxeuxxvezvyzbuxat)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><h2>Mask</h2><h3>Attributes</h3>`);
      _push(ssrRenderComponent(_component_MarkdownTable, {
        columns: [{ "title": "name", "dataIndex": 0 }, { "title": "description", "dataIndex": 1 }, { "title": "type", "dataIndex": 2 }, { "title": "default", "dataIndex": 3 }],
        dataSource: [{ "0": "type", "1": "the shape type of content", "2": "squircle, heart, hexagon, hexagon-2, decagon, pentagon, diamond, square, circle, parallelogram, parallelogram-2, parallelogram-3, parallelogram-4, star, star-2, triangle, triangle-2, triangle-3, triangle-4", "3": "squircle" }]
      }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup$b = _sfc_main$a.setup;
_sfc_main$a.setup = (props2, ctx2) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/components/mask.md");
  return _sfc_setup$b ? _sfc_setup$b(props2, ctx2) : void 0;
};
var mask = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$a
});
const icons$1 = Object.keys(DV).filter((it) => it.startsWith("Icon") && it !== "IconBase");
const __default__ = defineComponent({
  name: "IconDisplay",
  setup: () => {
    return () => createVNode("div", {
      "class": "grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 2xl:grid-cols-7 text-md"
    }, [icons$1.map((name) => createVNode("div", {
      "key": name,
      "class": "py-4 text-center"
    }, [createVNode(DV[name], {
      size: "2em"
    }), createVNode("br", null, null), createVNode("p", {
      "class": "mt-1 overflow-ellipsis overflow-hidden whitespace-nowrap",
      "title": name
    }, [name.replace(/^Icon/, "")])]))]);
  }
});
const __moduleId = "src/components/IconDisplay.vue?vue&type=script&lang.tsx";
ssrRegisterHelper(__default__, __moduleId);
const _sfc_setup$a = __default__.setup;
__default__.setup = (props2, ctx2) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/IconDisplay.vue");
  return _sfc_setup$a ? _sfc_setup$a(props2, ctx2) : void 0;
};
const _sfc_main$9 = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "meta": [] };
    expose({ frontmatter });
    const head = { "meta": [] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MarkdownTable = resolveComponent("MarkdownTable");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "markdown-body" }, _attrs))}><h1>Icons</h1>`);
      _push(ssrRenderComponent(__default__, null, null, _parent));
      _push(`<h2>Icon</h2><h3>Attributes</h3>`);
      _push(ssrRenderComponent(_component_MarkdownTable, {
        columns: [{ "title": "name", "dataIndex": 0 }, { "title": "description", "dataIndex": 1 }, { "title": "type", "dataIndex": 2 }, { "title": "default", "dataIndex": 3 }],
        dataSource: [{ "0": "color", "1": "icon color", "2": "string", "3": "-" }, { "0": "size", "1": "icon size", "2": "number, string", "3": "-" }, { "0": "useStroke", "1": "make color to apply on stroke or fill", "2": "boolean", "3": "true" }, { "0": "viewBox", "1": "svg viewBox attr", "2": "string", "3": "-" }]
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props2, ctx2) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/components/icons.md");
  return _sfc_setup$9 ? _sfc_setup$9(props2, ctx2) : void 0;
};
var icons = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$9
});
const _sfc_main$8 = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "meta": [] };
    expose({ frontmatter });
    const head = { "meta": [] };
    useHead(head);
    const open = ref(null);
    function setOpen(type) {
      open.value = type;
    }
    function close() {
      open.value = null;
    }
    function isOpen(type) {
      return open.value === type;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Playground = resolveComponent("Playground");
      const _component_dv_button = resolveComponent("dv-button");
      const _component_dv_drawer = resolveComponent("dv-drawer");
      const _component_dv_menu = resolveComponent("dv-menu");
      const _component_dv_menu_item = resolveComponent("dv-menu-item");
      const _component_dv_navbar = resolveComponent("dv-navbar");
      const _component_dv_icon_menu = resolveComponent("dv-icon-menu");
      const _component_MarkdownTable = resolveComponent("MarkdownTable");
      _push(`<!--[--><div class="markdown-body"><h1>Drawer</h1><h2>Examples</h2><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

  <span class="hljs-keyword">const</span> open = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">null</span>);

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">setOpen</span>(<span class="hljs-params">type</span>) {
    open.<span class="hljs-property">value</span> = type;
  }

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">close</span>(<span class="hljs-params"></span>) {
    open.<span class="hljs-property">value</span> = <span class="hljs-literal">null</span>;
  }

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">isOpen</span>(<span class="hljs-params">type</span>) {
    <span class="hljs-keyword">return</span> open.<span class="hljs-property">value</span> === type;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre><p>global drawer, mouts on body</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">div</span>\n  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;rounded-lg shadow bg-base-200 h-52 flex justify-center items-center&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">:onClick</span>=<span class="hljs-string">&quot;() =&gt; setOpen(&#x27;d1&#x27;)&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>open<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">dv-drawer</span> <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;isOpen(&#x27;d1&#x27;)&quot;</span> @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bg-white w-80 py-4&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item1<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item2<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item3<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">dv-drawer</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="rounded-lg shadow bg-base-200 h-52 flex justify-center items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_dv_button, {
              onClick: () => setOpen("d1"),
              type: "primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`open`);
                } else {
                  return [
                    createTextVNode("open")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_dv_drawer, {
              open: isOpen("d1")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-white w-80 py-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_dv_menu, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_dv_menu_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`item1`);
                            } else {
                              return [
                                createTextVNode("item1")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_dv_menu_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`item2`);
                            } else {
                              return [
                                createTextVNode("item2")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_dv_menu_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`item3`);
                            } else {
                              return [
                                createTextVNode("item3")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createTextVNode("item1")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createTextVNode("item2")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createTextVNode("item3")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "bg-white w-80 py-4" }, [
                      createVNode(_component_dv_menu, null, {
                        default: withCtx(() => [
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createTextVNode("item1")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createTextVNode("item2")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createTextVNode("item3")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "rounded-lg shadow bg-base-200 h-52 flex justify-center items-center" }, [
                createVNode(_component_dv_button, {
                  onClick: () => setOpen("d1"),
                  type: "primary"
                }, {
                  default: withCtx(() => [
                    createTextVNode("open")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              createVNode(_component_dv_drawer, {
                open: isOpen("d1"),
                onClose: close
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "bg-white w-80 py-4" }, [
                    createVNode(_component_dv_menu, null, {
                      default: withCtx(() => [
                        createVNode(_component_dv_menu_item, null, {
                          default: withCtx(() => [
                            createTextVNode("item1")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_dv_menu_item, null, {
                          default: withCtx(() => [
                            createTextVNode("item2")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_dv_menu_item, null, {
                          default: withCtx(() => [
                            createTextVNode("item3")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }, 8, ["open"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>drawer disable teleport</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-drawer</span>\n    <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;isOpen(&#x27;d2&#x27;)&quot;</span>\n    <span class="hljs-attr">disableTeleport</span>\n    @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>\n    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;rounded-lg shadow bg-base-200 h-52&quot;</span>\n  &gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:default</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bg-white w-80 py-4&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;px-4&quot;</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item1<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item2<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item3<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:content</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;h-full flex justify-center items-center&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">:onClick</span>=<span class="hljs-string">&quot;() =&gt; setOpen(&#x27;d2&#x27;)&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\n          open\n        <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-drawer</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_dv_drawer, {
              open: isOpen("d2"),
              disableTeleport: "",
              class: "rounded-lg shadow bg-base-200 h-52"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-white w-80 py-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_dv_menu, { class: "px-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_dv_menu_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`item1`);
                            } else {
                              return [
                                createTextVNode("item1")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_dv_menu_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`item2`);
                            } else {
                              return [
                                createTextVNode("item2")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_dv_menu_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`item3`);
                            } else {
                              return [
                                createTextVNode("item3")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createTextVNode("item1")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createTextVNode("item2")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createTextVNode("item3")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "bg-white w-80 py-4" }, [
                      createVNode(_component_dv_menu, { class: "px-4" }, {
                        default: withCtx(() => [
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createTextVNode("item1")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createTextVNode("item2")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createTextVNode("item3")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="h-full flex justify-center items-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_dv_button, {
                    onClick: () => setOpen("d2"),
                    type: "primary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` open `);
                      } else {
                        return [
                          createTextVNode(" open ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "h-full flex justify-center items-center" }, [
                      createVNode(_component_dv_button, {
                        onClick: () => setOpen("d2"),
                        type: "primary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" open ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(_component_dv_drawer, {
                  open: isOpen("d2"),
                  disableTeleport: "",
                  onClose: close,
                  class: "rounded-lg shadow bg-base-200 h-52"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "bg-white w-80 py-4" }, [
                      createVNode(_component_dv_menu, { class: "px-4" }, {
                        default: withCtx(() => [
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createTextVNode("item1")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createTextVNode("item2")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createTextVNode("item3")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  content: withCtx(() => [
                    createVNode("div", { class: "h-full flex justify-center items-center" }, [
                      createVNode(_component_dv_button, {
                        onClick: () => setOpen("d2"),
                        type: "primary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" open ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])
                  ]),
                  _: 1
                }, 8, ["open"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>sliding drawer for mobile only</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">dv-drawer</span>\n  <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;isOpen(&#x27;d3&#x27;)&quot;</span>\n  <span class="hljs-attr">disableTeleport</span>\n  <span class="hljs-attr">mobileOnly</span>\n  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>\n  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;rounded-lg shadow bg-base-200 h-52&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:default</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bg-white w-80 py-4 border-r border-gray-100&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;px-4&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item1<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item2<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item3<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:content</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;h-full flex justify-center items-center text-center&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;hidden lg:block px-5&quot;</span>&gt;</span>\n        Menu is always open on desktop size. Resize the browser to see toggle\n        button on mobile size\n      <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;lg:hidden px-5&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>\n          &gt;</span>Menu can be toggled on mobile size.\n          <span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>\n          Resize the browser to see fixed sidebar on desktop size\n        <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">:onClick</span>=<span class="hljs-string">&quot;() =&gt; setOpen(&#x27;d3&#x27;)&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\n          open\n        <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">dv-drawer</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_dv_drawer, {
              open: isOpen("d3"),
              disableTeleport: "",
              mobileOnly: "",
              class: "rounded-lg shadow bg-base-200 h-52"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-white w-80 py-4 border-r border-gray-100"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_dv_menu, { class: "px-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_dv_menu_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`item1`);
                            } else {
                              return [
                                createTextVNode("item1")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_dv_menu_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`item2`);
                            } else {
                              return [
                                createTextVNode("item2")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_dv_menu_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`item3`);
                            } else {
                              return [
                                createTextVNode("item3")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createTextVNode("item1")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createTextVNode("item2")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createTextVNode("item3")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "bg-white w-80 py-4 border-r border-gray-100" }, [
                      createVNode(_component_dv_menu, { class: "px-4" }, {
                        default: withCtx(() => [
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createTextVNode("item1")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createTextVNode("item2")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createTextVNode("item3")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="h-full flex justify-center items-center text-center"${_scopeId2}><p class="hidden lg:block px-5"${_scopeId2}> Menu is always open on desktop size. Resize the browser to see toggle button on mobile size </p><div class="lg:hidden px-5"${_scopeId2}><p${_scopeId2}>Menu can be toggled on mobile size. <br${_scopeId2}> Resize the browser to see fixed sidebar on desktop size </p>`);
                  _push3(ssrRenderComponent(_component_dv_button, {
                    onClick: () => setOpen("d3"),
                    type: "primary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` open `);
                      } else {
                        return [
                          createTextVNode(" open ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "h-full flex justify-center items-center text-center" }, [
                      createVNode("p", { class: "hidden lg:block px-5" }, " Menu is always open on desktop size. Resize the browser to see toggle button on mobile size "),
                      createVNode("div", { class: "lg:hidden px-5" }, [
                        createVNode("p", null, [
                          createTextVNode("Menu can be toggled on mobile size. "),
                          createVNode("br"),
                          createTextVNode(" Resize the browser to see fixed sidebar on desktop size ")
                        ]),
                        createVNode(_component_dv_button, {
                          onClick: () => setOpen("d3"),
                          type: "primary"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" open ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_dv_drawer, {
                open: isOpen("d3"),
                disableTeleport: "",
                mobileOnly: "",
                onClose: close,
                class: "rounded-lg shadow bg-base-200 h-52"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "bg-white w-80 py-4 border-r border-gray-100" }, [
                    createVNode(_component_dv_menu, { class: "px-4" }, {
                      default: withCtx(() => [
                        createVNode(_component_dv_menu_item, null, {
                          default: withCtx(() => [
                            createTextVNode("item1")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_dv_menu_item, null, {
                          default: withCtx(() => [
                            createTextVNode("item2")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_dv_menu_item, null, {
                          default: withCtx(() => [
                            createTextVNode("item3")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                content: withCtx(() => [
                  createVNode("div", { class: "h-full flex justify-center items-center text-center" }, [
                    createVNode("p", { class: "hidden lg:block px-5" }, " Menu is always open on desktop size. Resize the browser to see toggle button on mobile size "),
                    createVNode("div", { class: "lg:hidden px-5" }, [
                      createVNode("p", null, [
                        createTextVNode("Menu can be toggled on mobile size. "),
                        createVNode("br"),
                        createTextVNode(" Resize the browser to see fixed sidebar on desktop size ")
                      ]),
                      createVNode(_component_dv_button, {
                        onClick: () => setOpen("d3"),
                        type: "primary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" open ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["open"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>navbar menu for desktop + drawer for mobile</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">dv-drawer</span>\n  <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;isOpen(&#x27;d4&#x27;)&quot;</span>\n  <span class="hljs-attr">disableTeleport</span>\n  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>\n  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;rounded-lg shadow bg-gray-200 h-52&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:default</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bg-white w-80 py-4 border-r border-gray-100&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;p-&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item1<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item2<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item3<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:content</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-navbar</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bg-gray-300&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-none lg:hidden&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">:onClick</span>=<span class="hljs-string">&quot;() =&gt; setOpen(&#x27;d4&#x27;)&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;ghost&quot;</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">dv-icon-menu</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;1.5em&quot;</span> /&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-1 mx-2&quot;</span>&gt;</span> Change screen size to show/hide menu <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-none hidden lg:block&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;p-2&quot;</span> <span class="hljs-attr">horizontal</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item1<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item2<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item3<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">dv-navbar</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">dv-drawer</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_dv_drawer, {
              open: isOpen("d4"),
              disableTeleport: "",
              class: "rounded-lg shadow bg-gray-200 h-52"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-white w-80 py-4 border-r border-gray-100"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_dv_menu, { class: "p-" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_dv_menu_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`item1`);
                            } else {
                              return [
                                createTextVNode("item1")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_dv_menu_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`item2`);
                            } else {
                              return [
                                createTextVNode("item2")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_dv_menu_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`item3`);
                            } else {
                              return [
                                createTextVNode("item3")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createTextVNode("item1")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createTextVNode("item2")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createTextVNode("item3")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "bg-white w-80 py-4 border-r border-gray-100" }, [
                      createVNode(_component_dv_menu, { class: "p-" }, {
                        default: withCtx(() => [
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createTextVNode("item1")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createTextVNode("item2")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createTextVNode("item3")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_navbar, { class: "bg-gray-300" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex-none lg:hidden"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_dv_button, {
                          onClick: () => setOpen("d4"),
                          type: "ghost"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_dv_icon_menu, { size: "1.5em" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_dv_icon_menu, { size: "1.5em" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="flex-1 mx-2"${_scopeId3}> Change screen size to show/hide menu </div><div class="flex-none hidden lg:block"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_dv_menu, {
                          class: "p-2",
                          horizontal: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_dv_menu_item, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`item1`);
                                  } else {
                                    return [
                                      createTextVNode("item1")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_dv_menu_item, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`item2`);
                                  } else {
                                    return [
                                      createTextVNode("item2")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_dv_menu_item, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`item3`);
                                  } else {
                                    return [
                                      createTextVNode("item3")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_dv_menu_item, null, {
                                  default: withCtx(() => [
                                    createTextVNode("item1")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_dv_menu_item, null, {
                                  default: withCtx(() => [
                                    createTextVNode("item2")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_dv_menu_item, null, {
                                  default: withCtx(() => [
                                    createTextVNode("item3")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex-none lg:hidden" }, [
                            createVNode(_component_dv_button, {
                              onClick: () => setOpen("d4"),
                              type: "ghost"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_dv_icon_menu, { size: "1.5em" })
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          createVNode("div", { class: "flex-1 mx-2" }, " Change screen size to show/hide menu "),
                          createVNode("div", { class: "flex-none hidden lg:block" }, [
                            createVNode(_component_dv_menu, {
                              class: "p-2",
                              horizontal: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_dv_menu_item, null, {
                                  default: withCtx(() => [
                                    createTextVNode("item1")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_dv_menu_item, null, {
                                  default: withCtx(() => [
                                    createTextVNode("item2")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_dv_menu_item, null, {
                                  default: withCtx(() => [
                                    createTextVNode("item3")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_navbar, { class: "bg-gray-300" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex-none lg:hidden" }, [
                          createVNode(_component_dv_button, {
                            onClick: () => setOpen("d4"),
                            type: "ghost"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_dv_icon_menu, { size: "1.5em" })
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        createVNode("div", { class: "flex-1 mx-2" }, " Change screen size to show/hide menu "),
                        createVNode("div", { class: "flex-none hidden lg:block" }, [
                          createVNode(_component_dv_menu, {
                            class: "p-2",
                            horizontal: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_dv_menu_item, null, {
                                default: withCtx(() => [
                                  createTextVNode("item1")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_dv_menu_item, null, {
                                default: withCtx(() => [
                                  createTextVNode("item2")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_dv_menu_item, null, {
                                default: withCtx(() => [
                                  createTextVNode("item3")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_dv_drawer, {
                open: isOpen("d4"),
                disableTeleport: "",
                onClose: close,
                class: "rounded-lg shadow bg-gray-200 h-52"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "bg-white w-80 py-4 border-r border-gray-100" }, [
                    createVNode(_component_dv_menu, { class: "p-" }, {
                      default: withCtx(() => [
                        createVNode(_component_dv_menu_item, null, {
                          default: withCtx(() => [
                            createTextVNode("item1")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_dv_menu_item, null, {
                          default: withCtx(() => [
                            createTextVNode("item2")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_dv_menu_item, null, {
                          default: withCtx(() => [
                            createTextVNode("item3")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                content: withCtx(() => [
                  createVNode(_component_dv_navbar, { class: "bg-gray-300" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex-none lg:hidden" }, [
                        createVNode(_component_dv_button, {
                          onClick: () => setOpen("d4"),
                          type: "ghost"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_dv_icon_menu, { size: "1.5em" })
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      createVNode("div", { class: "flex-1 mx-2" }, " Change screen size to show/hide menu "),
                      createVNode("div", { class: "flex-none hidden lg:block" }, [
                        createVNode(_component_dv_menu, {
                          class: "p-2",
                          horizontal: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_dv_menu_item, null, {
                              default: withCtx(() => [
                                createTextVNode("item1")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_dv_menu_item, null, {
                              default: withCtx(() => [
                                createTextVNode("item2")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_dv_menu_item, null, {
                              default: withCtx(() => [
                                createTextVNode("item3")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["open"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>drawer right</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">div</span>\n  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;rounded-lg shadow bg-base-200 h-52 flex justify-center items-center&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">:onClick</span>=<span class="hljs-string">&quot;() =&gt; setOpen(&#x27;d5&#x27;)&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>open<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">dv-drawer</span> <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;isOpen(&#x27;d5&#x27;)&quot;</span> @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bg-white w-80 py-4&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item1<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item2<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">dv-menu-item</span>&gt;</span>item3<span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">dv-menu</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">dv-drawer</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="rounded-lg shadow bg-base-200 h-52 flex justify-center items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_dv_button, {
              onClick: () => setOpen("d5"),
              type: "primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`open`);
                } else {
                  return [
                    createTextVNode("open")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_dv_drawer, {
              open: isOpen("d5"),
              placement: "right"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-white w-80 py-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_dv_menu, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_dv_menu_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`item1`);
                            } else {
                              return [
                                createTextVNode("item1")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_dv_menu_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`item2`);
                            } else {
                              return [
                                createTextVNode("item2")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_dv_menu_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`item3`);
                            } else {
                              return [
                                createTextVNode("item3")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createTextVNode("item1")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createTextVNode("item2")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createTextVNode("item3")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "bg-white w-80 py-4" }, [
                      createVNode(_component_dv_menu, null, {
                        default: withCtx(() => [
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createTextVNode("item1")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createTextVNode("item2")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_dv_menu_item, null, {
                            default: withCtx(() => [
                              createTextVNode("item3")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "rounded-lg shadow bg-base-200 h-52 flex justify-center items-center" }, [
                createVNode(_component_dv_button, {
                  onClick: () => setOpen("d5"),
                  type: "primary"
                }, {
                  default: withCtx(() => [
                    createTextVNode("open")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              createVNode(_component_dv_drawer, {
                open: isOpen("d5"),
                onClose: close,
                placement: "right"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "bg-white w-80 py-4" }, [
                    createVNode(_component_dv_menu, null, {
                      default: withCtx(() => [
                        createVNode(_component_dv_menu_item, null, {
                          default: withCtx(() => [
                            createTextVNode("item1")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_dv_menu_item, null, {
                          default: withCtx(() => [
                            createTextVNode("item2")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_dv_menu_item, null, {
                          default: withCtx(() => [
                            createTextVNode("item3")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }, 8, ["open"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><h2>Drawer</h2><h3>Attributes</h3>`);
      _push(ssrRenderComponent(_component_MarkdownTable, {
        columns: [{ "title": "name", "dataIndex": 0 }, { "title": "description", "dataIndex": 1 }, { "title": "type", "dataIndex": 2 }, { "title": "default", "dataIndex": 3 }],
        dataSource: [{ "0": "open", "1": "drawer open/close status", "2": "boolean", "3": "-" }, { "0": "disableTeleport", "1": "disable teleport behavior", "2": "boolean", "3": "-" }, { "0": "mobileOnly", "1": "makes drawer to open/close on mobile but will be always visible on desktop", "2": "boolean", "3": "-" }, { "0": "placement", "1": "drawer open position", "2": "left, right", "3": "left" }, { "0": "placement", "1": "drawer open position", "2": "left, right", "3": "left" }]
      }, null, _parent));
      _push(`<h3>Events</h3>`);
      _push(ssrRenderComponent(_component_MarkdownTable, {
        columns: [{ "title": "name", "dataIndex": 0 }, { "title": "description", "dataIndex": 1 }, { "title": "type", "dataIndex": 2 }, { "title": "default", "dataIndex": 3 }],
        dataSource: [{ "0": "close", "1": "drawer close event", "2": "function", "3": "-" }]
      }, null, _parent));
      _push(`<h3>Slots</h3>`);
      _push(ssrRenderComponent(_component_MarkdownTable, {
        columns: [{ "title": "name", "dataIndex": 0 }, { "title": "description", "dataIndex": 1 }],
        dataSource: [{ "0": "default", "1": "drawer side content" }, { "0": "content", "1": "drawer content" }]
      }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props2, ctx2) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/components/drawer.md");
  return _sfc_setup$8 ? _sfc_setup$8(props2, ctx2) : void 0;
};
var drawer = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$8
});
var _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    function asyncFunction() {
      return new Promise((r) => setTimeout(r, 3e3));
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_dv_button = resolveComponent("dv-button");
      _push(`<!--[--><div class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row mb-1">`);
      _push(ssrRenderComponent(_component_dv_button, {
        loading: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`netural`);
          } else {
            return [createTextVNode("netural")];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_dv_button, {
        loading: "",
        type: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`secondary`);
          } else {
            return [createTextVNode("secondary")];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_dv_button, {
        loading: "",
        type: "secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`secondary`);
          } else {
            return [createTextVNode("secondary")];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_dv_button, {
        loading: "",
        type: "accent"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`accent`);
          } else {
            return [createTextVNode("accent")];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_dv_button, {
        loading: "",
        type: "ghost"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`ghost`);
          } else {
            return [createTextVNode("ghost")];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_dv_button, {
        loading: "",
        type: "link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`link`);
          } else {
            return [createTextVNode("link")];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row">`);
      _push(ssrRenderComponent(_component_dv_button, {
        onClick: asyncFunction
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Loading after click`);
          } else {
            return [createTextVNode("Loading after click")];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_dv_button, {
        onClick: asyncFunction,
        type: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Loading after click`);
          } else {
            return [createTextVNode("Loading after click")];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_dv_button, {
        onClick: asyncFunction,
        type: "secondary",
        outline: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Loading after click `);
          } else {
            return [createTextVNode(" Loading after click ")];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props2, ctx2) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/.demo/ChtmlCytxavvcdxwywddwfvzabwaadwwdxyzdfwywfwxyc.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props2, ctx2) : void 0;
};
var _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    function asyncFunction() {
      return new Promise((r) => setTimeout(r, 3e3));
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_dv_button = resolveComponent("dv-button");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_dv_button, {
        loading: "",
        shape: "circle"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`A`);
          } else {
            return [createTextVNode("A")];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_dv_button, {
        onClick: asyncFunction,
        outline: "",
        shape: "circle"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`GO`);
          } else {
            return [createTextVNode("GO")];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props2, ctx2) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/.demo/ChtmlCuetyxdxwtxfwzwvexyvxvetbyccxwxyaexxxawva.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props2, ctx2) : void 0;
};
const _sfc_main$5 = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "meta": [] };
    expose({ frontmatter });
    const head = { "meta": [] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Playground = resolveComponent("Playground");
      const _component_dv_button = resolveComponent("dv-button");
      const _component_dv_icon_close = resolveComponent("dv-icon-close");
      const _component_ChtmlCytxavvcdxwywddwfvzabwaadwwdxyzdfwywfwxyc = _sfc_main$7;
      const _component_ChtmlCuetyxdxwtxfwzwvexyvxvetbyccxwxyaexxxawva = _sfc_main$6;
      const _component_dv_button_group = resolveComponent("dv-button-group");
      const _component_MarkdownTable = resolveComponent("MarkdownTable");
      _push(`<!--[--><div class="markdown-body"><h1>Button</h1><h2>Examples</h2><p>button with brand colors</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">div</span>\n  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>netural<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>secondary<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>secondary<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;accent&quot;</span>&gt;</span>accent<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;ghost&quot;</span>&gt;</span>ghost<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;link&quot;</span>&gt;</span>link<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_dv_button, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`netural`);
                } else {
                  return [
                    createTextVNode("netural")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_button, { type: "primary" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`secondary`);
                } else {
                  return [
                    createTextVNode("secondary")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_button, { type: "secondary" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`secondary`);
                } else {
                  return [
                    createTextVNode("secondary")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_button, { type: "accent" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`accent`);
                } else {
                  return [
                    createTextVNode("accent")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_button, { type: "ghost" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`ghost`);
                } else {
                  return [
                    createTextVNode("ghost")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_button, { type: "link" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`link`);
                } else {
                  return [
                    createTextVNode("link")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row" }, [
                createVNode(_component_dv_button, null, {
                  default: withCtx(() => [
                    createTextVNode("netural")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_button, { type: "primary" }, {
                  default: withCtx(() => [
                    createTextVNode("secondary")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_button, { type: "secondary" }, {
                  default: withCtx(() => [
                    createTextVNode("secondary")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_button, { type: "accent" }, {
                  default: withCtx(() => [
                    createTextVNode("accent")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_button, { type: "ghost" }, {
                  default: withCtx(() => [
                    createTextVNode("ghost")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_button, { type: "link" }, {
                  default: withCtx(() => [
                    createTextVNode("link")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>active state button</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">div</span>\n  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">active</span>&gt;</span>netural<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">active</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>secondary<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">active</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>secondary<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">active</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;accent&quot;</span>&gt;</span>accent<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">active</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;ghost&quot;</span>&gt;</span>ghost<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">active</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;link&quot;</span>&gt;</span>link<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_dv_button, { active: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`netural`);
                } else {
                  return [
                    createTextVNode("netural")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_button, {
              active: "",
              type: "primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`secondary`);
                } else {
                  return [
                    createTextVNode("secondary")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_button, {
              active: "",
              type: "secondary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`secondary`);
                } else {
                  return [
                    createTextVNode("secondary")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_button, {
              active: "",
              type: "accent"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`accent`);
                } else {
                  return [
                    createTextVNode("accent")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_button, {
              active: "",
              type: "ghost"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`ghost`);
                } else {
                  return [
                    createTextVNode("ghost")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_button, {
              active: "",
              type: "link"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`link`);
                } else {
                  return [
                    createTextVNode("link")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row" }, [
                createVNode(_component_dv_button, { active: "" }, {
                  default: withCtx(() => [
                    createTextVNode("netural")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_button, {
                  active: "",
                  type: "primary"
                }, {
                  default: withCtx(() => [
                    createTextVNode("secondary")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_button, {
                  active: "",
                  type: "secondary"
                }, {
                  default: withCtx(() => [
                    createTextVNode("secondary")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_button, {
                  active: "",
                  type: "accent"
                }, {
                  default: withCtx(() => [
                    createTextVNode("accent")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_button, {
                  active: "",
                  type: "ghost"
                }, {
                  default: withCtx(() => [
                    createTextVNode("ghost")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_button, {
                  active: "",
                  type: "link"
                }, {
                  default: withCtx(() => [
                    createTextVNode("link")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>outline button</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">div</span>\n  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">outline</span>&gt;</span>netural<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">outline</span>&gt;</span>secondary<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;secondary&quot;</span> <span class="hljs-attr">outline</span>&gt;</span>secondary<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;accent&quot;</span> <span class="hljs-attr">outline</span>&gt;</span>accent<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_dv_button, { outline: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`netural`);
                } else {
                  return [
                    createTextVNode("netural")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_button, {
              type: "primary",
              outline: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`secondary`);
                } else {
                  return [
                    createTextVNode("secondary")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_button, {
              type: "secondary",
              outline: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`secondary`);
                } else {
                  return [
                    createTextVNode("secondary")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_button, {
              type: "accent",
              outline: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`accent`);
                } else {
                  return [
                    createTextVNode("accent")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row" }, [
                createVNode(_component_dv_button, { outline: "" }, {
                  default: withCtx(() => [
                    createTextVNode("netural")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_button, {
                  type: "primary",
                  outline: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode("secondary")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_button, {
                  type: "secondary",
                  outline: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode("secondary")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_button, {
                  type: "accent",
                  outline: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode("accent")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>disabled button</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">div</span>\n  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">disabled</span>&gt;</span>netural<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>secondary<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;secondary&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>secondary<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;accent&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>accent<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;ghost&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>ghost<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_dv_button, { disabled: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`netural`);
                } else {
                  return [
                    createTextVNode("netural")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_button, {
              type: "primary",
              disabled: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`secondary`);
                } else {
                  return [
                    createTextVNode("secondary")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_button, {
              type: "secondary",
              disabled: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`secondary`);
                } else {
                  return [
                    createTextVNode("secondary")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_button, {
              type: "accent",
              disabled: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`accent`);
                } else {
                  return [
                    createTextVNode("accent")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_button, {
              type: "ghost",
              disabled: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`ghost`);
                } else {
                  return [
                    createTextVNode("ghost")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row" }, [
                createVNode(_component_dv_button, { disabled: "" }, {
                  default: withCtx(() => [
                    createTextVNode("netural")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_button, {
                  type: "primary",
                  disabled: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode("secondary")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_button, {
                  type: "secondary",
                  disabled: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode("secondary")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_button, {
                  type: "accent",
                  disabled: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode("accent")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_button, {
                  type: "ghost",
                  disabled: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode("ghost")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>button with state colors</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">div</span>\n  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>info<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>success<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>warning<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;error&quot;</span>&gt;</span>error<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_dv_button, { type: "info" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`info`);
                } else {
                  return [
                    createTextVNode("info")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_button, { type: "success" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`success`);
                } else {
                  return [
                    createTextVNode("success")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_button, { type: "warning" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`warning`);
                } else {
                  return [
                    createTextVNode("warning")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_button, { type: "error" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`error`);
                } else {
                  return [
                    createTextVNode("error")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row" }, [
                createVNode(_component_dv_button, { type: "info" }, {
                  default: withCtx(() => [
                    createTextVNode("info")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_button, { type: "success" }, {
                  default: withCtx(() => [
                    createTextVNode("success")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_button, { type: "warning" }, {
                  default: withCtx(() => [
                    createTextVNode("warning")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_button, { type: "error" }, {
                  default: withCtx(() => [
                    createTextVNode("error")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>glass button</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">div</span>\n  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;p-20 bg-cover bg-base-200 w-80 h-52 rounded-lg&quot;</span>\n  <span class="hljs-attr">style</span>=<span class="hljs-string">&#x27;background-image: url(&quot;https://picsum.photos/id/314/400/300&quot;);&#x27;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;glass&quot;</span>&gt;</span>Glass Button<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-20 bg-cover bg-base-200 w-80 h-52 rounded-lg" style="${ssrRenderStyle({ "background-image": 'url("https://picsum.photos/id/314/400/300")' })}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_dv_button, { type: "glass" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Glass Button`);
                } else {
                  return [
                    createTextVNode("Glass Button")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: "p-20 bg-cover bg-base-200 w-80 h-52 rounded-lg",
                style: { "background-image": 'url("https://picsum.photos/id/314/400/300")' }
              }, [
                createVNode(_component_dv_button, { type: "glass" }, {
                  default: withCtx(() => [
                    createTextVNode("Glass Button")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>button size</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">div</span>\n  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>&gt;</span>Large<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>Normal<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>Small<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span>&gt;</span>Tiny<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_dv_button, { size: "lg" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Large`);
                } else {
                  return [
                    createTextVNode("Large")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_button, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Normal`);
                } else {
                  return [
                    createTextVNode("Normal")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_button, { size: "sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Small`);
                } else {
                  return [
                    createTextVNode("Small")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_button, { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Tiny`);
                } else {
                  return [
                    createTextVNode("Tiny")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row" }, [
                createVNode(_component_dv_button, { size: "lg" }, {
                  default: withCtx(() => [
                    createTextVNode("Large")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_button, null, {
                  default: withCtx(() => [
                    createTextVNode("Normal")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_button, { size: "sm" }, {
                  default: withCtx(() => [
                    createTextVNode("Small")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_button, { size: "xs" }, {
                  default: withCtx(() => [
                    createTextVNode("Tiny")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>button wide</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex items-start space-y-2 flex-col&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">wide</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>&gt;</span>Large<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">wide</span>&gt;</span>Normal<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">wide</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>Small<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">wide</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span>&gt;</span>Tiny<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-start space-y-2 flex-col"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_dv_button, {
              wide: "",
              size: "lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Large`);
                } else {
                  return [
                    createTextVNode("Large")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_button, { wide: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Normal`);
                } else {
                  return [
                    createTextVNode("Normal")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_button, {
              wide: "",
              size: "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Small`);
                } else {
                  return [
                    createTextVNode("Small")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_button, {
              wide: "",
              size: "xs"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Tiny`);
                } else {
                  return [
                    createTextVNode("Tiny")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-start space-y-2 flex-col" }, [
                createVNode(_component_dv_button, {
                  wide: "",
                  size: "lg"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Large")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_button, { wide: "" }, {
                  default: withCtx(() => [
                    createTextVNode("Normal")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_button, {
                  wide: "",
                  size: "sm"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Small")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_button, {
                  wide: "",
                  size: "xs"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Tiny")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>button shapes</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">div</span>\n  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row mb-2&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;circle&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-icon-close</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;1.5em&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;circle&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-icon-close</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;1.25em&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">outline</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;circle&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-icon-close</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">outline</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;circle&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-icon-close</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span>\n  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>&gt;</span>A<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>B<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">outline</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>C<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">outline</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span>&gt;</span>D<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row mb-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_dv_button, {
              shape: "circle",
              size: "lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_icon_close, { size: "1.5em" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_icon_close, { size: "1.5em" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_button, { shape: "circle" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_icon_close, { size: "1.25em" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_icon_close, { size: "1.25em" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_button, {
              outline: "",
              shape: "circle",
              size: "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_icon_close, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_icon_close)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_button, {
              outline: "",
              shape: "circle",
              size: "xs"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_icon_close, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_icon_close)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_dv_button, {
              shape: "square",
              size: "lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`A`);
                } else {
                  return [
                    createTextVNode("A")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_button, { shape: "square" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`B`);
                } else {
                  return [
                    createTextVNode("B")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_button, {
              outline: "",
              shape: "square",
              size: "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`C`);
                } else {
                  return [
                    createTextVNode("C")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_button, {
              outline: "",
              shape: "square",
              size: "xs"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`D`);
                } else {
                  return [
                    createTextVNode("D")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row mb-2" }, [
                createVNode(_component_dv_button, {
                  shape: "circle",
                  size: "lg"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_dv_icon_close, { size: "1.5em" })
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_button, { shape: "circle" }, {
                  default: withCtx(() => [
                    createVNode(_component_dv_icon_close, { size: "1.25em" })
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_button, {
                  outline: "",
                  shape: "circle",
                  size: "sm"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_dv_icon_close)
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_button, {
                  outline: "",
                  shape: "circle",
                  size: "xs"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_dv_icon_close)
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row" }, [
                createVNode(_component_dv_button, {
                  shape: "square",
                  size: "lg"
                }, {
                  default: withCtx(() => [
                    createTextVNode("A")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_button, { shape: "square" }, {
                  default: withCtx(() => [
                    createTextVNode("B")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_button, {
                  outline: "",
                  shape: "square",
                  size: "sm"
                }, {
                  default: withCtx(() => [
                    createTextVNode("C")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_button, {
                  outline: "",
                  shape: "square",
                  size: "xs"
                }, {
                  default: withCtx(() => [
                    createTextVNode("D")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>button block</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">block</span>&gt;</span>Blcok Button<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_dv_button, { block: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Blcok Button`);
                } else {
                  return [
                    createTextVNode("Blcok Button")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_dv_button, { block: "" }, {
                default: withCtx(() => [
                  createTextVNode("Blcok Button")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>button loading</p></div>`);
      _push(ssrRenderComponent(_component_Playground, {
        lang: "html",
        code: '<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>\n    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row mb-1&quot;</span>\n  &gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">loading</span>&gt;</span>netural<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>secondary<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>secondary<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;accent&quot;</span>&gt;</span>accent<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;ghost&quot;</span>&gt;</span>ghost<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;link&quot;</span>&gt;</span>link<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>\n    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row&quot;</span>\n  &gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">:onClick</span>=<span class="hljs-string">&quot;asyncFunction&quot;</span>&gt;</span>Loading after click<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">:onClick</span>=<span class="hljs-string">&quot;asyncFunction&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>\n      &gt;</span>Loading after click&lt;/dv-button\n    &gt;\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">:onClick</span>=<span class="hljs-string">&quot;asyncFunction&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;secondary&quot;</span> <span class="hljs-attr">outline</span>&gt;</span>\n      Loading after click\n    <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;tsx&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="language-javascript">\n  <span class="hljs-keyword">function</span> <span class="hljs-title function_">asyncFunction</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">r</span>) =&gt;</span> <span class="hljs-built_in">setTimeout</span>(r, <span class="hljs-number">3000</span>));\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n'
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ChtmlCytxavvcdxwywddwfvzabwaadwwdxyzdfwywfwxyc, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ChtmlCytxavvcdxwywddwfvzabwaadwwdxyzdfwywfwxyc)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>button loading without content</p></div>`);
      _push(ssrRenderComponent(_component_Playground, {
        lang: "html",
        code: '<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>\n    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row&quot;</span>\n  &gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;circle&quot;</span>&gt;</span>A<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">:onClick</span>=<span class="hljs-string">&quot;asyncFunction&quot;</span> <span class="hljs-attr">outline</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;circle&quot;</span>&gt;</span>GO<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;tsx&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="language-javascript">\n  <span class="hljs-keyword">function</span> <span class="hljs-title function_">asyncFunction</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">r</span>) =&gt;</span> <span class="hljs-built_in">setTimeout</span>(r, <span class="hljs-number">3000</span>));\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n'
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ChtmlCuetyxdxwtxfwzwvexyvxvetbyccxwxyaexxxawva, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ChtmlCuetyxdxwtxfwzwvexyvxvetbyccxwxyaexxxawva)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>button doesn\u2019t have click animation</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">div</span>\n  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">noAnimation</span>&gt;</span>I don&#x27;t have click animation<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_dv_button, {
              type: "primary",
              noAnimation: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`I don&#39;t have click animation`);
                } else {
                  return [
                    createTextVNode("I don't have click animation")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row" }, [
                createVNode(_component_dv_button, {
                  type: "primary",
                  noAnimation: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode("I don't have click animation")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>button group size</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;space-y-2&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>info<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>warning<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;error&quot;</span>&gt;</span>error<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button-group</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button-group</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>info<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>warning<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;error&quot;</span>&gt;</span>error<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_dv_button_group, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_button, { type: "info" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`info`);
                      } else {
                        return [
                          createTextVNode("info")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_dv_button, { type: "warning" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`warning`);
                      } else {
                        return [
                          createTextVNode("warning")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_dv_button, { type: "error" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`error`);
                      } else {
                        return [
                          createTextVNode("error")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_button, { type: "info" }, {
                      default: withCtx(() => [
                        createTextVNode("info")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_dv_button, { type: "warning" }, {
                      default: withCtx(() => [
                        createTextVNode("warning")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_dv_button, { type: "error" }, {
                      default: withCtx(() => [
                        createTextVNode("error")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_button_group, { size: "sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_button, { type: "info" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`info`);
                      } else {
                        return [
                          createTextVNode("info")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_dv_button, { type: "warning" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`warning`);
                      } else {
                        return [
                          createTextVNode("warning")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_dv_button, { type: "error" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`error`);
                      } else {
                        return [
                          createTextVNode("error")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_button, { type: "info" }, {
                      default: withCtx(() => [
                        createTextVNode("info")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_dv_button, { type: "warning" }, {
                      default: withCtx(() => [
                        createTextVNode("warning")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_dv_button, { type: "error" }, {
                      default: withCtx(() => [
                        createTextVNode("error")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-2" }, [
                createVNode(_component_dv_button_group, null, {
                  default: withCtx(() => [
                    createVNode(_component_dv_button, { type: "info" }, {
                      default: withCtx(() => [
                        createTextVNode("info")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_dv_button, { type: "warning" }, {
                      default: withCtx(() => [
                        createTextVNode("warning")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_dv_button, { type: "error" }, {
                      default: withCtx(() => [
                        createTextVNode("error")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_button_group, { size: "sm" }, {
                  default: withCtx(() => [
                    createVNode(_component_dv_button, { type: "info" }, {
                      default: withCtx(() => [
                        createTextVNode("info")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_dv_button, { type: "warning" }, {
                      default: withCtx(() => [
                        createTextVNode("warning")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_dv_button, { type: "error" }, {
                      default: withCtx(() => [
                        createTextVNode("error")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>button group shape</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;space-y-2&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button-group</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;circle&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>A<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>B<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;error&quot;</span>&gt;</span>C<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button-group</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button-group</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>A<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>B<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;error&quot;</span>&gt;</span>C<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button-group</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button-group</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>A<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;default&quot;</span>&gt;</span>this is default shape<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;error&quot;</span>&gt;</span>C<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_dv_button_group, {
              size: "sm",
              shape: "circle"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_button, { type: "info" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`A`);
                      } else {
                        return [
                          createTextVNode("A")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_dv_button, { type: "warning" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`B`);
                      } else {
                        return [
                          createTextVNode("B")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_dv_button, { type: "error" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`C`);
                      } else {
                        return [
                          createTextVNode("C")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_button, { type: "info" }, {
                      default: withCtx(() => [
                        createTextVNode("A")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_dv_button, { type: "warning" }, {
                      default: withCtx(() => [
                        createTextVNode("B")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_dv_button, { type: "error" }, {
                      default: withCtx(() => [
                        createTextVNode("C")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_button_group, {
              size: "sm",
              shape: "square"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_button, { type: "info" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`A`);
                      } else {
                        return [
                          createTextVNode("A")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_dv_button, { type: "warning" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`B`);
                      } else {
                        return [
                          createTextVNode("B")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_dv_button, { type: "error" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`C`);
                      } else {
                        return [
                          createTextVNode("C")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_button, { type: "info" }, {
                      default: withCtx(() => [
                        createTextVNode("A")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_dv_button, { type: "warning" }, {
                      default: withCtx(() => [
                        createTextVNode("B")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_dv_button, { type: "error" }, {
                      default: withCtx(() => [
                        createTextVNode("C")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_button_group, {
              size: "sm",
              shape: "square"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_button, { type: "info" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`A`);
                      } else {
                        return [
                          createTextVNode("A")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_dv_button, {
                    type: "warning",
                    shape: "default"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`this is default shape`);
                      } else {
                        return [
                          createTextVNode("this is default shape")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_dv_button, { type: "error" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`C`);
                      } else {
                        return [
                          createTextVNode("C")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_button, { type: "info" }, {
                      default: withCtx(() => [
                        createTextVNode("A")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_dv_button, {
                      type: "warning",
                      shape: "default"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("this is default shape")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_dv_button, { type: "error" }, {
                      default: withCtx(() => [
                        createTextVNode("C")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-2" }, [
                createVNode(_component_dv_button_group, {
                  size: "sm",
                  shape: "circle"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_dv_button, { type: "info" }, {
                      default: withCtx(() => [
                        createTextVNode("A")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_dv_button, { type: "warning" }, {
                      default: withCtx(() => [
                        createTextVNode("B")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_dv_button, { type: "error" }, {
                      default: withCtx(() => [
                        createTextVNode("C")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_button_group, {
                  size: "sm",
                  shape: "square"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_dv_button, { type: "info" }, {
                      default: withCtx(() => [
                        createTextVNode("A")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_dv_button, { type: "warning" }, {
                      default: withCtx(() => [
                        createTextVNode("B")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_dv_button, { type: "error" }, {
                      default: withCtx(() => [
                        createTextVNode("C")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_button_group, {
                  size: "sm",
                  shape: "square"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_dv_button, { type: "info" }, {
                      default: withCtx(() => [
                        createTextVNode("A")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_dv_button, {
                      type: "warning",
                      shape: "default"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("this is default shape")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_dv_button, { type: "error" }, {
                      default: withCtx(() => [
                        createTextVNode("C")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>button group outline</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;space-y-2&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button-group</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">outline</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>primary<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>secondary<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;accent&quot;</span>&gt;</span>accent<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_dv_button_group, {
              size: "sm",
              outline: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_button, { type: "primary" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`primary`);
                      } else {
                        return [
                          createTextVNode("primary")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_dv_button, { type: "secondary" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`secondary`);
                      } else {
                        return [
                          createTextVNode("secondary")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_dv_button, { type: "accent" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`accent`);
                      } else {
                        return [
                          createTextVNode("accent")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_button, { type: "primary" }, {
                      default: withCtx(() => [
                        createTextVNode("primary")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_dv_button, { type: "secondary" }, {
                      default: withCtx(() => [
                        createTextVNode("secondary")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_dv_button, { type: "accent" }, {
                      default: withCtx(() => [
                        createTextVNode("accent")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-2" }, [
                createVNode(_component_dv_button_group, {
                  size: "sm",
                  outline: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_dv_button, { type: "primary" }, {
                      default: withCtx(() => [
                        createTextVNode("primary")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_dv_button, { type: "secondary" }, {
                      default: withCtx(() => [
                        createTextVNode("secondary")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_dv_button, { type: "accent" }, {
                      default: withCtx(() => [
                        createTextVNode("accent")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><h2>Button</h2><h3>Attributes</h3>`);
      _push(ssrRenderComponent(_component_MarkdownTable, {
        columns: [{ "title": "name", "dataIndex": 0 }, { "title": "description", "dataIndex": 1 }, { "title": "type", "dataIndex": 2 }, { "title": "default", "dataIndex": 3 }],
        dataSource: [{ "0": "type", "1": "button color type", "2": "netural, primary, secondary, accent, info, success, warning, error, ghost, link, glass", "3": "netural" }, { "0": "size", "1": "button size", "2": "ISize", "3": "md" }, { "0": "shape", "1": "button shape", "2": "default, circle, square", "3": "default" }, { "0": "block", "1": "full with button", "2": "boolean", "3": "false" }, { "0": "wide", "1": "wide button (more horizontal padding)", "2": "boolean", "3": "false" }, { "0": "disabled", "1": "force button to show disabled state", "2": "boolean", "3": "false" }, { "0": "outline", "1": "transparent Button with colored border", "2": "boolean", "3": "false" }, { "0": "active", "1": "force button to show active state", "2": "boolean", "3": "false" }, { "0": "loading", "1": "shows loading spinner", "2": "boolean", "3": "false" }, { "0": "noAnimation", "1": "disables click animation", "2": "boolean", "3": "false" }, { "0": "component", "1": "button with diffrent HTML tags", "2": "button, a, input", "3": "button" }, { "0": "onClick", "1": "button click handle", "2": "Function", "3": "-" }]
      }, null, _parent));
      _push(`<h2>ButtonGroup</h2><h3>Attributes</h3>`);
      _push(ssrRenderComponent(_component_MarkdownTable, {
        columns: [{ "title": "name", "dataIndex": 0 }, { "title": "description", "dataIndex": 1 }, { "title": "type", "dataIndex": 2 }, { "title": "default", "dataIndex": 3 }],
        dataSource: [{ "0": "size", "1": "button size", "2": "ISize", "3": "md" }, { "0": "shape", "1": "button shape", "2": "default, circle, square", "3": "default" }, { "0": "outline", "1": "transparent Button with colored border", "2": "boolean", "3": "false" }]
      }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props2, ctx2) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/components/button.md");
  return _sfc_setup$5 ? _sfc_setup$5(props2, ctx2) : void 0;
};
var button = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$5
});
const _sfc_main$4 = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "meta": [] };
    expose({ frontmatter });
    const head = { "meta": [] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Playground = resolveComponent("Playground");
      const _component_dv_breadcrumb = resolveComponent("dv-breadcrumb");
      const _component_dv_breadcrumb_item = resolveComponent("dv-breadcrumb-item");
      const _component_dv_icon_folder = resolveComponent("dv-icon-folder");
      const _component_dv_icon_document_add = resolveComponent("dv-icon-document-add");
      _push(`<!--[--><div class="markdown-body"><h1>Breadcrumb</h1><h2>Examples</h2><p>breadcrumbs</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">dv-breadcrumb</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-breadcrumb-item</span>&gt;</span>Home<span class="hljs-tag">&lt;/<span class="hljs-name">dv-breadcrumb-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-breadcrumb-item</span>&gt;</span>Documents<span class="hljs-tag">&lt;/<span class="hljs-name">dv-breadcrumb-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-breadcrumb-item</span>&gt;</span>Add Document<span class="hljs-tag">&lt;/<span class="hljs-name">dv-breadcrumb-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">dv-breadcrumb</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_dv_breadcrumb, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_breadcrumb_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Home`);
                      } else {
                        return [
                          createTextVNode("Home")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_dv_breadcrumb_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Documents`);
                      } else {
                        return [
                          createTextVNode("Documents")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_dv_breadcrumb_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Add Document`);
                      } else {
                        return [
                          createTextVNode("Add Document")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_breadcrumb_item, null, {
                      default: withCtx(() => [
                        createTextVNode("Home")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_dv_breadcrumb_item, null, {
                      default: withCtx(() => [
                        createTextVNode("Documents")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_dv_breadcrumb_item, null, {
                      default: withCtx(() => [
                        createTextVNode("Add Document")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_dv_breadcrumb, null, {
                default: withCtx(() => [
                  createVNode(_component_dv_breadcrumb_item, null, {
                    default: withCtx(() => [
                      createTextVNode("Home")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_dv_breadcrumb_item, null, {
                    default: withCtx(() => [
                      createTextVNode("Documents")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_dv_breadcrumb_item, null, {
                    default: withCtx(() => [
                      createTextVNode("Add Document")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>breadcrumbs with icon</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">dv-breadcrumb</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-breadcrumb-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-icon-folder</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mr-1&quot;</span> /&gt;</span>\n    Home\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-breadcrumb-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-breadcrumb-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-icon-folder</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mr-1&quot;</span> /&gt;</span>\n    Documents\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-breadcrumb-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-breadcrumb-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-icon-document-add</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mr-1&quot;</span> /&gt;</span>\n    Add Document\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-breadcrumb-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">dv-breadcrumb</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_dv_breadcrumb, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_breadcrumb_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_dv_icon_folder, { class: "mr-1" }, null, _parent4, _scopeId3));
                        _push4(` Home `);
                      } else {
                        return [
                          createVNode(_component_dv_icon_folder, { class: "mr-1" }),
                          createTextVNode(" Home ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_dv_breadcrumb_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_dv_icon_folder, { class: "mr-1" }, null, _parent4, _scopeId3));
                        _push4(` Documents `);
                      } else {
                        return [
                          createVNode(_component_dv_icon_folder, { class: "mr-1" }),
                          createTextVNode(" Documents ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_dv_breadcrumb_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_dv_icon_document_add, { class: "mr-1" }, null, _parent4, _scopeId3));
                        _push4(` Add Document `);
                      } else {
                        return [
                          createVNode(_component_dv_icon_document_add, { class: "mr-1" }),
                          createTextVNode(" Add Document ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_breadcrumb_item, null, {
                      default: withCtx(() => [
                        createVNode(_component_dv_icon_folder, { class: "mr-1" }),
                        createTextVNode(" Home ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_dv_breadcrumb_item, null, {
                      default: withCtx(() => [
                        createVNode(_component_dv_icon_folder, { class: "mr-1" }),
                        createTextVNode(" Documents ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_dv_breadcrumb_item, null, {
                      default: withCtx(() => [
                        createVNode(_component_dv_icon_document_add, { class: "mr-1" }),
                        createTextVNode(" Add Document ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_dv_breadcrumb, null, {
                default: withCtx(() => [
                  createVNode(_component_dv_breadcrumb_item, null, {
                    default: withCtx(() => [
                      createVNode(_component_dv_icon_folder, { class: "mr-1" }),
                      createTextVNode(" Home ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_dv_breadcrumb_item, null, {
                    default: withCtx(() => [
                      createVNode(_component_dv_icon_folder, { class: "mr-1" }),
                      createTextVNode(" Documents ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_dv_breadcrumb_item, null, {
                    default: withCtx(() => [
                      createVNode(_component_dv_icon_document_add, { class: "mr-1" }),
                      createTextVNode(" Add Document ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>breadcrumbs overflow scroll</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">dv-breadcrumb</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;max-w-sm&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-breadcrumb-item</span>&gt;</span>If you set max-width<span class="hljs-tag">&lt;/<span class="hljs-name">dv-breadcrumb-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-breadcrumb-item</span>&gt;</span>or the list<span class="hljs-tag">&lt;/<span class="hljs-name">dv-breadcrumb-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-breadcrumb-item</span>&gt;</span>gets larger than<span class="hljs-tag">&lt;/<span class="hljs-name">dv-breadcrumb-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-breadcrumb-item</span>&gt;</span>the container<span class="hljs-tag">&lt;/<span class="hljs-name">dv-breadcrumb-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-breadcrumb-item</span>&gt;</span>it will scroll<span class="hljs-tag">&lt;/<span class="hljs-name">dv-breadcrumb-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">dv-breadcrumb</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_dv_breadcrumb, { class: "max-w-sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_breadcrumb_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`If you set max-width`);
                      } else {
                        return [
                          createTextVNode("If you set max-width")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_dv_breadcrumb_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`or the list`);
                      } else {
                        return [
                          createTextVNode("or the list")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_dv_breadcrumb_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`gets larger than`);
                      } else {
                        return [
                          createTextVNode("gets larger than")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_dv_breadcrumb_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`the container`);
                      } else {
                        return [
                          createTextVNode("the container")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_dv_breadcrumb_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`it will scroll`);
                      } else {
                        return [
                          createTextVNode("it will scroll")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_breadcrumb_item, null, {
                      default: withCtx(() => [
                        createTextVNode("If you set max-width")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_dv_breadcrumb_item, null, {
                      default: withCtx(() => [
                        createTextVNode("or the list")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_dv_breadcrumb_item, null, {
                      default: withCtx(() => [
                        createTextVNode("gets larger than")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_dv_breadcrumb_item, null, {
                      default: withCtx(() => [
                        createTextVNode("the container")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_dv_breadcrumb_item, null, {
                      default: withCtx(() => [
                        createTextVNode("it will scroll")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_dv_breadcrumb, { class: "max-w-sm" }, {
                default: withCtx(() => [
                  createVNode(_component_dv_breadcrumb_item, null, {
                    default: withCtx(() => [
                      createTextVNode("If you set max-width")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_dv_breadcrumb_item, null, {
                    default: withCtx(() => [
                      createTextVNode("or the list")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_dv_breadcrumb_item, null, {
                    default: withCtx(() => [
                      createTextVNode("gets larger than")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_dv_breadcrumb_item, null, {
                    default: withCtx(() => [
                      createTextVNode("the container")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_dv_breadcrumb_item, null, {
                    default: withCtx(() => [
                      createTextVNode("it will scroll")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><h2>Breadcrumb</h2><p><code>-</code></p><h2>BreadcrumbItem</h2><p><code>-</code></p></div><!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props2, ctx2) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/components/breadcrumb.md");
  return _sfc_setup$4 ? _sfc_setup$4(props2, ctx2) : void 0;
};
var breadcrumb = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$4
});
const _sfc_main$3 = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "meta": [] };
    expose({ frontmatter });
    const head = { "meta": [] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Playground = resolveComponent("Playground");
      const _component_dv_badge = resolveComponent("dv-badge");
      const _component_dv_icon_close = resolveComponent("dv-icon-close");
      const _component_dv_button = resolveComponent("dv-button");
      const _component_MarkdownTable = resolveComponent("MarkdownTable");
      _push(`<!--[--><div class="markdown-body"><h1>Badge</h1><h2>Examples</h2><p>badge</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">div</span>\n  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span>&gt;</span>netural<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>primary<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>secondary<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;accent&quot;</span>&gt;</span>accent<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;ghost&quot;</span>&gt;</span>ghost<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>info<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>success<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>warning<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;error&quot;</span>&gt;</span>error<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_dv_badge, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`netural`);
                } else {
                  return [
                    createTextVNode("netural")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_badge, { type: "primary" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`primary`);
                } else {
                  return [
                    createTextVNode("primary")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_badge, { type: "secondary" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`secondary`);
                } else {
                  return [
                    createTextVNode("secondary")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_badge, { type: "accent" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`accent`);
                } else {
                  return [
                    createTextVNode("accent")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_badge, { type: "ghost" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`ghost`);
                } else {
                  return [
                    createTextVNode("ghost")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_badge, { type: "info" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`info`);
                } else {
                  return [
                    createTextVNode("info")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_badge, { type: "success" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`success`);
                } else {
                  return [
                    createTextVNode("success")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_badge, { type: "warning" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`warning`);
                } else {
                  return [
                    createTextVNode("warning")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_badge, { type: "error" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`error`);
                } else {
                  return [
                    createTextVNode("error")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row" }, [
                createVNode(_component_dv_badge, null, {
                  default: withCtx(() => [
                    createTextVNode("netural")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_badge, { type: "primary" }, {
                  default: withCtx(() => [
                    createTextVNode("primary")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_badge, { type: "secondary" }, {
                  default: withCtx(() => [
                    createTextVNode("secondary")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_badge, { type: "accent" }, {
                  default: withCtx(() => [
                    createTextVNode("accent")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_badge, { type: "ghost" }, {
                  default: withCtx(() => [
                    createTextVNode("ghost")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_badge, { type: "info" }, {
                  default: withCtx(() => [
                    createTextVNode("info")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_badge, { type: "success" }, {
                  default: withCtx(() => [
                    createTextVNode("success")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_badge, { type: "warning" }, {
                  default: withCtx(() => [
                    createTextVNode("warning")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_badge, { type: "error" }, {
                  default: withCtx(() => [
                    createTextVNode("error")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>badge size</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">div</span>\n  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>&gt;</span>987,654<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>987,654<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>987,654<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span>&gt;</span>987,654<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_dv_badge, { size: "lg" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`987,654`);
                } else {
                  return [
                    createTextVNode("987,654")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_badge, { size: "md" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`987,654`);
                } else {
                  return [
                    createTextVNode("987,654")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_badge, { size: "sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`987,654`);
                } else {
                  return [
                    createTextVNode("987,654")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_badge, { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`987,654`);
                } else {
                  return [
                    createTextVNode("987,654")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row" }, [
                createVNode(_component_dv_badge, { size: "lg" }, {
                  default: withCtx(() => [
                    createTextVNode("987,654")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_badge, { size: "md" }, {
                  default: withCtx(() => [
                    createTextVNode("987,654")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_badge, { size: "sm" }, {
                  default: withCtx(() => [
                    createTextVNode("987,654")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_badge, { size: "xs" }, {
                  default: withCtx(() => [
                    createTextVNode("987,654")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>empty badge</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">div</span>\n  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_dv_badge, { size: "lg" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_badge, { size: "md" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_badge, { size: "sm" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_badge, { size: "xs" }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row" }, [
                createVNode(_component_dv_badge, { size: "lg" }),
                createVNode(_component_dv_badge, { size: "md" }),
                createVNode(_component_dv_badge, { size: "sm" }),
                createVNode(_component_dv_badge, { size: "xs" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>badge variants</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">div</span>\n  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-icon-close</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;14px&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mr-1&quot;</span> /&gt;</span>\n    primary\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-icon-close</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;14px&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mr-1&quot;</span> /&gt;</span>\n    info\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-icon-close</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;14px&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mr-1&quot;</span> /&gt;</span>\n    warning\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;error&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-icon-close</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;14px&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mr-1&quot;</span> /&gt;</span>\n    error\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_dv_badge, { type: "primary" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_icon_close, {
                    size: "14px",
                    class: "mr-1"
                  }, null, _parent3, _scopeId2));
                  _push3(` primary `);
                } else {
                  return [
                    createVNode(_component_dv_icon_close, {
                      size: "14px",
                      class: "mr-1"
                    }),
                    createTextVNode(" primary ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_badge, { type: "info" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_icon_close, {
                    size: "14px",
                    class: "mr-1"
                  }, null, _parent3, _scopeId2));
                  _push3(` info `);
                } else {
                  return [
                    createVNode(_component_dv_icon_close, {
                      size: "14px",
                      class: "mr-1"
                    }),
                    createTextVNode(" info ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_badge, { type: "warning" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_icon_close, {
                    size: "14px",
                    class: "mr-1"
                  }, null, _parent3, _scopeId2));
                  _push3(` warning `);
                } else {
                  return [
                    createVNode(_component_dv_icon_close, {
                      size: "14px",
                      class: "mr-1"
                    }),
                    createTextVNode(" warning ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_badge, { type: "error" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_icon_close, {
                    size: "14px",
                    class: "mr-1"
                  }, null, _parent3, _scopeId2));
                  _push3(` error `);
                } else {
                  return [
                    createVNode(_component_dv_icon_close, {
                      size: "14px",
                      class: "mr-1"
                    }),
                    createTextVNode(" error ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row" }, [
                createVNode(_component_dv_badge, { type: "primary" }, {
                  default: withCtx(() => [
                    createVNode(_component_dv_icon_close, {
                      size: "14px",
                      class: "mr-1"
                    }),
                    createTextVNode(" primary ")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_badge, { type: "info" }, {
                  default: withCtx(() => [
                    createVNode(_component_dv_icon_close, {
                      size: "14px",
                      class: "mr-1"
                    }),
                    createTextVNode(" info ")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_badge, { type: "warning" }, {
                  default: withCtx(() => [
                    createVNode(_component_dv_icon_close, {
                      size: "14px",
                      class: "mr-1"
                    }),
                    createTextVNode(" warning ")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_badge, { type: "error" }, {
                  default: withCtx(() => [
                    createVNode(_component_dv_icon_close, {
                      size: "14px",
                      class: "mr-1"
                    }),
                    createTextVNode(" error ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>badge outline</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">div</span>\n  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">outline</span>&gt;</span>netural<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">outline</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>primary<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">outline</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>secondary<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">outline</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;accent&quot;</span>&gt;</span>accent<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_dv_badge, { outline: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`netural`);
                } else {
                  return [
                    createTextVNode("netural")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_badge, {
              outline: "",
              type: "primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`primary`);
                } else {
                  return [
                    createTextVNode("primary")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_badge, {
              outline: "",
              type: "secondary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`secondary`);
                } else {
                  return [
                    createTextVNode("secondary")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_badge, {
              outline: "",
              type: "accent"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`accent`);
                } else {
                  return [
                    createTextVNode("accent")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row" }, [
                createVNode(_component_dv_badge, { outline: "" }, {
                  default: withCtx(() => [
                    createTextVNode("netural")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_badge, {
                  outline: "",
                  type: "primary"
                }, {
                  default: withCtx(() => [
                    createTextVNode("primary")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_badge, {
                  outline: "",
                  type: "secondary"
                }, {
                  default: withCtx(() => [
                    createTextVNode("secondary")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_badge, {
                  outline: "",
                  type: "accent"
                }, {
                  default: withCtx(() => [
                    createTextVNode("accent")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>badge in text</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">h2</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-2 text-2xl&quot;</span>&gt;</span>\n    Heading\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">outline</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>&gt;</span>New<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">h2</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-2 text-xl&quot;</span>&gt;</span>\n    Heading\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">outline</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>New<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">h2</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-2 text-lg&quot;</span>&gt;</span>\n    Heading\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">outline</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>New<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">h2</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-2 text-md&quot;</span>&gt;</span>\n    Heading\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">outline</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>New<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">h2</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-sm&quot;</span>&gt;</span>\n    Heading\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">outline</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>New<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><h2 class="mb-2 text-2xl"${_scopeId}> Heading `);
            _push2(ssrRenderComponent(_component_dv_badge, {
              outline: "",
              size: "lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`New`);
                } else {
                  return [
                    createTextVNode("New")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</h2><h2 class="mb-2 text-xl"${_scopeId}> Heading `);
            _push2(ssrRenderComponent(_component_dv_badge, {
              outline: "",
              size: "md"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`New`);
                } else {
                  return [
                    createTextVNode("New")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</h2><h2 class="mb-2 text-lg"${_scopeId}> Heading `);
            _push2(ssrRenderComponent(_component_dv_badge, {
              outline: "",
              size: "md"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`New`);
                } else {
                  return [
                    createTextVNode("New")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</h2><h2 class="mb-2 text-md"${_scopeId}> Heading `);
            _push2(ssrRenderComponent(_component_dv_badge, {
              outline: "",
              size: "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`New`);
                } else {
                  return [
                    createTextVNode("New")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</h2><h2 class="text-sm"${_scopeId}> Heading `);
            _push2(ssrRenderComponent(_component_dv_badge, {
              outline: "",
              size: "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`New`);
                } else {
                  return [
                    createTextVNode("New")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</h2></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("h2", { class: "mb-2 text-2xl" }, [
                  createTextVNode(" Heading "),
                  createVNode(_component_dv_badge, {
                    outline: "",
                    size: "lg"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("New")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("h2", { class: "mb-2 text-xl" }, [
                  createTextVNode(" Heading "),
                  createVNode(_component_dv_badge, {
                    outline: "",
                    size: "md"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("New")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("h2", { class: "mb-2 text-lg" }, [
                  createTextVNode(" Heading "),
                  createVNode(_component_dv_badge, {
                    outline: "",
                    size: "md"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("New")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("h2", { class: "mb-2 text-md" }, [
                  createTextVNode(" Heading "),
                  createVNode(_component_dv_badge, {
                    outline: "",
                    size: "sm"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("New")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("h2", { class: "text-sm" }, [
                  createTextVNode(" Heading "),
                  createVNode(_component_dv_badge, {
                    outline: "",
                    size: "sm"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("New")
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>badge in button</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">div</span>\n  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex flex-wrap items-start md:space-x-2 space-x-0 space-y-2 md:space-y-0 flex-col md:flex-row&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span>&gt;</span>\n    Version 2.7.0\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;ml-2&quot;</span>&gt;</span>new<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\n    Inbox\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;ml-2&quot;</span> <span class="hljs-attr">outline</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>\n    Notifications\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;ml-2&quot;</span> <span class="hljs-attr">outline</span>&gt;</span>+999<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;accent&quot;</span>&gt;</span>\n    Accent\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-badge</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;ml-2&quot;</span> <span class="hljs-attr">outline</span>&gt;</span>new<span class="hljs-tag">&lt;/<span class="hljs-name">dv-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap items-start md:space-x-2 space-x-0 space-y-2 md:space-y-0 flex-col md:flex-row"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_dv_button, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Version 2.7.0 `);
                  _push3(ssrRenderComponent(_component_dv_badge, { class: "ml-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`new`);
                      } else {
                        return [
                          createTextVNode("new")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(" Version 2.7.0 "),
                    createVNode(_component_dv_badge, { class: "ml-2" }, {
                      default: withCtx(() => [
                        createTextVNode("new")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_button, { type: "primary" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Inbox `);
                  _push3(ssrRenderComponent(_component_dv_badge, {
                    class: "ml-2",
                    outline: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`3`);
                      } else {
                        return [
                          createTextVNode("3")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(" Inbox "),
                    createVNode(_component_dv_badge, {
                      class: "ml-2",
                      outline: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("3")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_button, { type: "secondary" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Notifications `);
                  _push3(ssrRenderComponent(_component_dv_badge, {
                    class: "ml-2",
                    outline: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`+999`);
                      } else {
                        return [
                          createTextVNode("+999")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(" Notifications "),
                    createVNode(_component_dv_badge, {
                      class: "ml-2",
                      outline: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("+999")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_button, { type: "accent" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Accent `);
                  _push3(ssrRenderComponent(_component_dv_badge, {
                    class: "ml-2",
                    outline: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`new`);
                      } else {
                        return [
                          createTextVNode("new")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(" Accent "),
                    createVNode(_component_dv_badge, {
                      class: "ml-2",
                      outline: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("new")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap items-start md:space-x-2 space-x-0 space-y-2 md:space-y-0 flex-col md:flex-row" }, [
                createVNode(_component_dv_button, null, {
                  default: withCtx(() => [
                    createTextVNode(" Version 2.7.0 "),
                    createVNode(_component_dv_badge, { class: "ml-2" }, {
                      default: withCtx(() => [
                        createTextVNode("new")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_button, { type: "primary" }, {
                  default: withCtx(() => [
                    createTextVNode(" Inbox "),
                    createVNode(_component_dv_badge, {
                      class: "ml-2",
                      outline: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("3")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_button, { type: "secondary" }, {
                  default: withCtx(() => [
                    createTextVNode(" Notifications "),
                    createVNode(_component_dv_badge, {
                      class: "ml-2",
                      outline: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("+999")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_button, { type: "accent" }, {
                  default: withCtx(() => [
                    createTextVNode(" Accent "),
                    createVNode(_component_dv_badge, {
                      class: "ml-2",
                      outline: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("new")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><h2>Badge</h2><h3>Attributes</h3>`);
      _push(ssrRenderComponent(_component_MarkdownTable, {
        columns: [{ "title": "name", "dataIndex": 0 }, { "title": "description", "dataIndex": 1 }, { "title": "type", "dataIndex": 2 }, { "title": "default", "dataIndex": 3 }],
        dataSource: [{ "0": "type", "1": "color type", "2": "netural, primary, secondary, accent, info, success, warning, error, ghost, link, glass", "3": "netural" }, { "0": "size", "1": "size", "2": "ISize", "3": "md" }, { "0": "outline", "1": "transparent badge with [colorful] border", "2": "boolean", "3": "false" }]
      }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props2, ctx2) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/components/badge.md");
  return _sfc_setup$3 ? _sfc_setup$3(props2, ctx2) : void 0;
};
var badge = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$3
});
const _sfc_main$2 = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "meta": [] };
    expose({ frontmatter });
    const head = { "meta": [] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Playground = resolveComponent("Playground");
      const _component_dv_avatar = resolveComponent("dv-avatar");
      const _component_dv_avatar_group = resolveComponent("dv-avatar-group");
      _push(`<!--[--><div class="markdown-body"><h1>Avatar</h1><h2>Examples</h2><p>avatar</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex items-center space-x-8 flex-wrap&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>\n    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;96px&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>\n    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>\n    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>\n    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>\n    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span>\n  /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center space-x-8 flex-wrap"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_dv_avatar, {
              src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
              size: "96px"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_avatar, {
              src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
              size: "lg"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_avatar, {
              src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
              size: "md"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_avatar, {
              src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
              size: "sm"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_avatar, {
              src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
              size: "xs"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center space-x-8 flex-wrap" }, [
                createVNode(_component_dv_avatar, {
                  src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
                  size: "96px"
                }),
                createVNode(_component_dv_avatar, {
                  src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
                  size: "lg"
                }),
                createVNode(_component_dv_avatar, {
                  src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
                  size: "md"
                }),
                createVNode(_component_dv_avatar, {
                  src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
                  size: "sm"
                }),
                createVNode(_component_dv_avatar, {
                  src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
                  size: "xs"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>avatar with mask</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex items-center space-x-8 flex-wrap&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>\n    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;circle&quot;</span>\n    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>\n    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;squircle&quot;</span>\n    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>\n    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;hexagon&quot;</span>\n    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>\n    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;decagon&quot;</span>\n    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>\n  /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center space-x-8 flex-wrap"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_dv_avatar, {
              src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
              type: "circle",
              size: "lg"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_avatar, {
              src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
              type: "squircle",
              size: "lg"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_avatar, {
              src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
              type: "hexagon",
              size: "lg"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_avatar, {
              src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
              type: "decagon",
              size: "lg"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center space-x-8 flex-wrap" }, [
                createVNode(_component_dv_avatar, {
                  src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
                  type: "circle",
                  size: "lg"
                }),
                createVNode(_component_dv_avatar, {
                  src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
                  type: "squircle",
                  size: "lg"
                }),
                createVNode(_component_dv_avatar, {
                  src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
                  type: "hexagon",
                  size: "lg"
                }),
                createVNode(_component_dv_avatar, {
                  src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
                  type: "decagon",
                  size: "lg"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>avatar with border(by css). Circle &amp; square types only, but the others are not supported</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex items-center space-x-8 flex-wrap mb-8&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>\n    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>\n    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;ring ring-pink-600 ring-offset-4&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>\n    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>\n    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;ring ring-pink-600 ring-offset-4&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>\n    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>\n    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;ring ring-pink-600 ring-offset-4&quot;</span>\n  /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex items-center space-x-8 flex-wrap&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>\n    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>\n    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;ring ring-pink-600 ring-offset-4&quot;</span>\n    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;square&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>\n    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>\n    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;ring ring-pink-600 ring-offset-4&quot;</span>\n    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;square&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>\n    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>\n    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;ring ring-pink-600 ring-offset-4&quot;</span>\n    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;square&quot;</span>\n  /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center space-x-8 flex-wrap mb-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_dv_avatar, {
              src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
              size: "lg",
              class: "ring ring-pink-600 ring-offset-4"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_avatar, {
              src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
              size: "md",
              class: "ring ring-pink-600 ring-offset-4"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_avatar, {
              src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
              size: "sm",
              class: "ring ring-pink-600 ring-offset-4"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center space-x-8 flex-wrap"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_dv_avatar, {
              src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
              size: "lg",
              class: "ring ring-pink-600 ring-offset-4",
              type: "square"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_avatar, {
              src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
              size: "md",
              class: "ring ring-pink-600 ring-offset-4",
              type: "square"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_avatar, {
              src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
              size: "sm",
              class: "ring ring-pink-600 ring-offset-4",
              type: "square"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center space-x-8 flex-wrap mb-8" }, [
                createVNode(_component_dv_avatar, {
                  src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
                  size: "lg",
                  class: "ring ring-pink-600 ring-offset-4"
                }),
                createVNode(_component_dv_avatar, {
                  src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
                  size: "md",
                  class: "ring ring-pink-600 ring-offset-4"
                }),
                createVNode(_component_dv_avatar, {
                  src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
                  size: "sm",
                  class: "ring ring-pink-600 ring-offset-4"
                })
              ]),
              createVNode("div", { class: "flex items-center space-x-8 flex-wrap" }, [
                createVNode(_component_dv_avatar, {
                  src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
                  size: "lg",
                  class: "ring ring-pink-600 ring-offset-4",
                  type: "square"
                }),
                createVNode(_component_dv_avatar, {
                  src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
                  size: "md",
                  class: "ring ring-pink-600 ring-offset-4",
                  type: "square"
                }),
                createVNode(_component_dv_avatar, {
                  src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
                  size: "sm",
                  class: "ring ring-pink-600 ring-offset-4",
                  type: "square"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>avatar-group, default gap(half size)</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar-group</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-4&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;+99&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">dv-avatar-group</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar-group</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-4&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>\n  /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">dv-avatar-group</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar-group</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-4&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>\n  /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">dv-avatar-group</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar-group</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-4&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>\n  /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">dv-avatar-group</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_dv_avatar_group, {
              size: "lg",
              class: "mb-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_dv_avatar, { placeholder: "+99" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" }),
                    createVNode(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" }),
                    createVNode(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" }),
                    createVNode(_component_dv_avatar, { placeholder: "+99" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_avatar_group, {
              size: "md",
              class: "mb-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" }),
                    createVNode(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" }),
                    createVNode(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_avatar_group, {
              size: "sm",
              class: "mb-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" }),
                    createVNode(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" }),
                    createVNode(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_avatar_group, {
              size: "xs",
              class: "mb-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" }),
                    createVNode(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" }),
                    createVNode(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_dv_avatar_group, {
                size: "lg",
                class: "mb-4"
              }, {
                default: withCtx(() => [
                  createVNode(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" }),
                  createVNode(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" }),
                  createVNode(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" }),
                  createVNode(_component_dv_avatar, { placeholder: "+99" })
                ]),
                _: 1
              }),
              createVNode(_component_dv_avatar_group, {
                size: "md",
                class: "mb-4"
              }, {
                default: withCtx(() => [
                  createVNode(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" }),
                  createVNode(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" }),
                  createVNode(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" })
                ]),
                _: 1
              }),
              createVNode(_component_dv_avatar_group, {
                size: "sm",
                class: "mb-4"
              }, {
                default: withCtx(() => [
                  createVNode(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" }),
                  createVNode(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" }),
                  createVNode(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" })
                ]),
                _: 1
              }),
              createVNode(_component_dv_avatar_group, {
                size: "xs",
                class: "mb-4"
              }, {
                default: withCtx(() => [
                  createVNode(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" }),
                  createVNode(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" }),
                  createVNode(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>avatar-group, custom gap</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar-group</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;80px&quot;</span> <span class="hljs-attr">:gap</span>=<span class="hljs-string">&quot;50&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span> <span class="hljs-attr">placeholder</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-xl&quot;</span>&gt;</span>+99<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-avatar</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">dv-avatar-group</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_dv_avatar_group, {
              size: "80px",
              gap: 50
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_dv_avatar, { placeholder: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-xl"${_scopeId3}>+99</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-xl" }, "+99")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" }),
                    createVNode(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" }),
                    createVNode(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" }),
                    createVNode(_component_dv_avatar, { placeholder: "" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-xl" }, "+99")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_dv_avatar_group, {
                size: "80px",
                gap: 50
              }, {
                default: withCtx(() => [
                  createVNode(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" }),
                  createVNode(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" }),
                  createVNode(_component_dv_avatar, { src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png" }),
                  createVNode(_component_dv_avatar, { placeholder: "" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-xl" }, "+99")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>avatar with presense indicator</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex items-center space-x-8 flex-wrap mb-4&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>\n    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>\n    <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;online&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>\n    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>\n    <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;online&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>\n    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>\n    <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;offline&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>\n    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span>\n    <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;offline&quot;</span>\n  /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex items-center space-x-8 flex-wrap&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>\n    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>\n    <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;offline&quot;</span>\n    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;squircle&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>\n    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span>\n    <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;offline&quot;</span>\n    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;squircle&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>\n    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>\n    <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;online&quot;</span>\n    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;squircle&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;http://daisyui.com/tailwind-css-component-profile-1@94w.png&quot;</span>\n    <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span>\n    <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;online&quot;</span>\n    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;squircle&quot;</span>\n  /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center space-x-8 flex-wrap mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_dv_avatar, {
              src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
              size: "lg",
              status: "online"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_avatar, {
              src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
              size: "md",
              status: "online"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_avatar, {
              src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
              size: "sm",
              status: "offline"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_avatar, {
              src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
              size: "xs",
              status: "offline"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center space-x-8 flex-wrap"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_dv_avatar, {
              src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
              size: "lg",
              status: "offline",
              type: "squircle"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_avatar, {
              src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
              size: "md",
              status: "offline",
              type: "squircle"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_avatar, {
              src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
              size: "sm",
              status: "online",
              type: "squircle"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_avatar, {
              src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
              size: "xs",
              status: "online",
              type: "squircle"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center space-x-8 flex-wrap mb-4" }, [
                createVNode(_component_dv_avatar, {
                  src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
                  size: "lg",
                  status: "online"
                }),
                createVNode(_component_dv_avatar, {
                  src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
                  size: "md",
                  status: "online"
                }),
                createVNode(_component_dv_avatar, {
                  src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
                  size: "sm",
                  status: "offline"
                }),
                createVNode(_component_dv_avatar, {
                  src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
                  size: "xs",
                  status: "offline"
                })
              ]),
              createVNode("div", { class: "flex items-center space-x-8 flex-wrap" }, [
                createVNode(_component_dv_avatar, {
                  src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
                  size: "lg",
                  status: "offline",
                  type: "squircle"
                }),
                createVNode(_component_dv_avatar, {
                  src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
                  size: "md",
                  status: "offline",
                  type: "squircle"
                }),
                createVNode(_component_dv_avatar, {
                  src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
                  size: "sm",
                  status: "online",
                  type: "squircle"
                }),
                createVNode(_component_dv_avatar, {
                  src: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
                  size: "xs",
                  status: "online",
                  type: "squircle"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>avatar placeholder</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex items-center space-x-8 flex-wrap&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span> <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;offline&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;squircle&quot;</span> <span class="hljs-attr">placeholder</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-2xl&quot;</span>&gt;</span>+99<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-avatar</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;md&quot;</span> <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;offline&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;JO&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;MX&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-avatar</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> <span class="hljs-attr">placeholder</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;circle&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-xs&quot;</span>&gt;</span>AA<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-avatar</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center space-x-8 flex-wrap"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_dv_avatar, {
              size: "lg",
              status: "offline",
              type: "squircle",
              placeholder: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-2xl"${_scopeId2}>+99</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-2xl" }, "+99")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_avatar, {
              size: "md",
              status: "offline",
              placeholder: "JO"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_avatar, {
              size: "sm",
              placeholder: "MX"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_avatar, {
              size: "xs",
              placeholder: "",
              type: "circle"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-xs"${_scopeId2}>AA</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-xs" }, "AA")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center space-x-8 flex-wrap" }, [
                createVNode(_component_dv_avatar, {
                  size: "lg",
                  status: "offline",
                  type: "squircle",
                  placeholder: ""
                }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-2xl" }, "+99")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_avatar, {
                  size: "md",
                  status: "offline",
                  placeholder: "JO"
                }),
                createVNode(_component_dv_avatar, {
                  size: "sm",
                  placeholder: "MX"
                }),
                createVNode(_component_dv_avatar, {
                  size: "xs",
                  placeholder: "",
                  type: "circle"
                }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-xs" }, "AA")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><h2>Avatar</h2><h3>Attributes</h3><h2>AvatarGroup</h2><h3>Attributes</h3></div><!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props2, ctx2) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/components/avatar.md");
  return _sfc_setup$2 ? _sfc_setup$2(props2, ctx2) : void 0;
};
var avatar = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$2
});
const _sfc_main$1 = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "meta": [] };
    expose({ frontmatter });
    const head = { "meta": [] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Playground = resolveComponent("Playground");
      const _component_dv_artboard = resolveComponent("dv-artboard");
      const _component_MarkdownTable = resolveComponent("MarkdownTable");
      _push(`<!--[--><div class="markdown-body"><h1>Artboard</h1><p>Used to display some content.</p><h2>Examples</h2><p>artboard - phone</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex space-x-10 flex-nowrap bg-gray-100 p-4 overflow-x-auto&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-artboard</span> <span class="hljs-attr">phone</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;self-start h-14&quot;</span>&gt;</span>\n    phone(custom height)\n  <span class="hljs-tag">&lt;/<span class="hljs-name">dv-artboard</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-artboard</span> <span class="hljs-attr">phone</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span> phone-1 <span class="hljs-tag">&lt;/<span class="hljs-name">dv-artboard</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-artboard</span> <span class="hljs-attr">phone</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span> phone-2 <span class="hljs-tag">&lt;/<span class="hljs-name">dv-artboard</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-artboard</span> <span class="hljs-attr">phone</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span> phone-3 <span class="hljs-tag">&lt;/<span class="hljs-name">dv-artboard</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-artboard</span> <span class="hljs-attr">phone</span>=<span class="hljs-string">&quot;4&quot;</span>&gt;</span> phone-4 <span class="hljs-tag">&lt;/<span class="hljs-name">dv-artboard</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-artboard</span> <span class="hljs-attr">phone</span>=<span class="hljs-string">&quot;5&quot;</span>&gt;</span> phone-5 <span class="hljs-tag">&lt;/<span class="hljs-name">dv-artboard</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-artboard</span> <span class="hljs-attr">phone</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span> phone-6 <span class="hljs-tag">&lt;/<span class="hljs-name">dv-artboard</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex space-x-10 flex-nowrap bg-gray-100 p-4 overflow-x-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_dv_artboard, {
              phone: "",
              class: "self-start h-14"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` phone(custom height) `);
                } else {
                  return [
                    createTextVNode(" phone(custom height) ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_artboard, { phone: "1" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` phone-1 `);
                } else {
                  return [
                    createTextVNode(" phone-1 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_artboard, { phone: "2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` phone-2 `);
                } else {
                  return [
                    createTextVNode(" phone-2 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_artboard, { phone: "3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` phone-3 `);
                } else {
                  return [
                    createTextVNode(" phone-3 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_artboard, { phone: "4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` phone-4 `);
                } else {
                  return [
                    createTextVNode(" phone-4 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_artboard, { phone: "5" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` phone-5 `);
                } else {
                  return [
                    createTextVNode(" phone-5 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_artboard, { phone: "6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` phone-6 `);
                } else {
                  return [
                    createTextVNode(" phone-6 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex space-x-10 flex-nowrap bg-gray-100 p-4 overflow-x-auto" }, [
                createVNode(_component_dv_artboard, {
                  phone: "",
                  class: "self-start h-14"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" phone(custom height) ")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_artboard, { phone: "1" }, {
                  default: withCtx(() => [
                    createTextVNode(" phone-1 ")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_artboard, { phone: "2" }, {
                  default: withCtx(() => [
                    createTextVNode(" phone-2 ")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_artboard, { phone: "3" }, {
                  default: withCtx(() => [
                    createTextVNode(" phone-3 ")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_artboard, { phone: "4" }, {
                  default: withCtx(() => [
                    createTextVNode(" phone-4 ")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_artboard, { phone: "5" }, {
                  default: withCtx(() => [
                    createTextVNode(" phone-5 ")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_artboard, { phone: "6" }, {
                  default: withCtx(() => [
                    createTextVNode(" phone-6 ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>artboard - phone horizontal</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex space-x-10 flex-nowrap bg-gray-100 p-4 overflow-x-auto&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-artboard</span> <span class="hljs-attr">horizontal</span> <span class="hljs-attr">phone</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span> phone-1 <span class="hljs-tag">&lt;/<span class="hljs-name">dv-artboard</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-artboard</span> <span class="hljs-attr">horizontal</span> <span class="hljs-attr">phone</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span> phone-2 <span class="hljs-tag">&lt;/<span class="hljs-name">dv-artboard</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-artboard</span> <span class="hljs-attr">horizontal</span> <span class="hljs-attr">phone</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span> phone-3 <span class="hljs-tag">&lt;/<span class="hljs-name">dv-artboard</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-artboard</span> <span class="hljs-attr">horizontal</span> <span class="hljs-attr">phone</span>=<span class="hljs-string">&quot;4&quot;</span>&gt;</span> phone-4 <span class="hljs-tag">&lt;/<span class="hljs-name">dv-artboard</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-artboard</span> <span class="hljs-attr">horizontal</span> <span class="hljs-attr">phone</span>=<span class="hljs-string">&quot;5&quot;</span>&gt;</span> phone-5 <span class="hljs-tag">&lt;/<span class="hljs-name">dv-artboard</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">dv-artboard</span> <span class="hljs-attr">horizontal</span> <span class="hljs-attr">phone</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span> phone-6 <span class="hljs-tag">&lt;/<span class="hljs-name">dv-artboard</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex space-x-10 flex-nowrap bg-gray-100 p-4 overflow-x-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_dv_artboard, {
              horizontal: "",
              phone: "1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` phone-1 `);
                } else {
                  return [
                    createTextVNode(" phone-1 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_artboard, {
              horizontal: "",
              phone: "2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` phone-2 `);
                } else {
                  return [
                    createTextVNode(" phone-2 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_artboard, {
              horizontal: "",
              phone: "3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` phone-3 `);
                } else {
                  return [
                    createTextVNode(" phone-3 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_artboard, {
              horizontal: "",
              phone: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` phone-4 `);
                } else {
                  return [
                    createTextVNode(" phone-4 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_artboard, {
              horizontal: "",
              phone: "5"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` phone-5 `);
                } else {
                  return [
                    createTextVNode(" phone-5 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_dv_artboard, {
              horizontal: "",
              phone: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` phone-6 `);
                } else {
                  return [
                    createTextVNode(" phone-6 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex space-x-10 flex-nowrap bg-gray-100 p-4 overflow-x-auto" }, [
                createVNode(_component_dv_artboard, {
                  horizontal: "",
                  phone: "1"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" phone-1 ")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_artboard, {
                  horizontal: "",
                  phone: "2"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" phone-2 ")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_artboard, {
                  horizontal: "",
                  phone: "3"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" phone-3 ")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_artboard, {
                  horizontal: "",
                  phone: "4"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" phone-4 ")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_artboard, {
                  horizontal: "",
                  phone: "5"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" phone-5 ")
                  ]),
                  _: 1
                }),
                createVNode(_component_dv_artboard, {
                  horizontal: "",
                  phone: "6"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" phone-6 ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><h2>Artboard</h2><h3>Attributes</h3>`);
      _push(ssrRenderComponent(_component_MarkdownTable, {
        columns: [{ "title": "name", "dataIndex": 0 }, { "title": "description", "dataIndex": 1 }, { "title": "type", "dataIndex": 2 }, { "title": "default", "dataIndex": 3 }],
        dataSource: [{ "0": "phone", "1": "demo size", "2": "boolean, 1, 2, 3, 4, 5, 6", "3": "false" }, { "0": "horizontal", "1": "shows horizontal view", "2": "boolean", "3": "false" }]
      }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props2, ctx2) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/components/artboard.md");
  return _sfc_setup$1 ? _sfc_setup$1(props2, ctx2) : void 0;
};
var artboard = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$1
});
const _sfc_main = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "meta": [] };
    expose({ frontmatter });
    const head = { "meta": [] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Playground = resolveComponent("Playground");
      const _component_dv_alert = resolveComponent("dv-alert");
      const _component_dv_button = resolveComponent("dv-button");
      const _component_dv_icon_heart = resolveComponent("dv-icon-heart");
      const _component_dv_icon_dots = resolveComponent("dv-icon-dots");
      const _component_MarkdownTable = resolveComponent("MarkdownTable");
      _push(`<!--[--><div class="markdown-body"><h1>Alert</h1><h2>Examples</h2><p>alert</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">dv-alert</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adip!<span class="hljs-tag">&lt;/<span class="hljs-name">dv-alert</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_dv_alert, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Lorem ipsum dolor sit amet, consectetur adip!`);
                } else {
                  return [
                    createTextVNode("Lorem ipsum dolor sit amet, consectetur adip!")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_dv_alert, null, {
                default: withCtx(() => [
                  createTextVNode("Lorem ipsum dolor sit amet, consectetur adip!")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>alert state: info</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">dv-alert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adip!<span class="hljs-tag">&lt;/<span class="hljs-name">dv-alert</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_dv_alert, { type: "info" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Lorem ipsum dolor sit amet, consectetur adip!`);
                } else {
                  return [
                    createTextVNode("Lorem ipsum dolor sit amet, consectetur adip!")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_dv_alert, { type: "info" }, {
                default: withCtx(() => [
                  createTextVNode("Lorem ipsum dolor sit amet, consectetur adip!")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>alert state: success</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">dv-alert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>\n  Lorem ipsum dolor sit amet, consectetur adip!\n<span class="hljs-tag">&lt;/<span class="hljs-name">dv-alert</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_dv_alert, { type: "success" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Lorem ipsum dolor sit amet, consectetur adip! `);
                } else {
                  return [
                    createTextVNode(" Lorem ipsum dolor sit amet, consectetur adip! ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_dv_alert, { type: "success" }, {
                default: withCtx(() => [
                  createTextVNode(" Lorem ipsum dolor sit amet, consectetur adip! ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>alert state: warning</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">dv-alert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>\n  Lorem ipsum dolor sit amet, consectetur adip!\n<span class="hljs-tag">&lt;/<span class="hljs-name">dv-alert</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_dv_alert, { type: "warning" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Lorem ipsum dolor sit amet, consectetur adip! `);
                } else {
                  return [
                    createTextVNode(" Lorem ipsum dolor sit amet, consectetur adip! ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_dv_alert, { type: "warning" }, {
                default: withCtx(() => [
                  createTextVNode(" Lorem ipsum dolor sit amet, consectetur adip! ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>alert state: error</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">dv-alert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;error&quot;</span>&gt;</span>\n  Lorem ipsum dolor sit amet, consectetur adip!\n<span class="hljs-tag">&lt;/<span class="hljs-name">dv-alert</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_dv_alert, { type: "error" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Lorem ipsum dolor sit amet, consectetur adip! `);
                } else {
                  return [
                    createTextVNode(" Lorem ipsum dolor sit amet, consectetur adip! ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_dv_alert, { type: "error" }, {
                default: withCtx(() => [
                  createTextVNode(" Lorem ipsum dolor sit amet, consectetur adip! ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>alert with actions</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">dv-alert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;error&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:default</span>&gt;</span>\n    Lorem ipsum dolor sit amet, consectetur adip!\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:actions</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;ghost&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mr-2&quot;</span>&gt;</span>cancel<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>apply<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">dv-alert</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_dv_alert, { type: "error" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Lorem ipsum dolor sit amet, consectetur adip! `);
                } else {
                  return [
                    createTextVNode(" Lorem ipsum dolor sit amet, consectetur adip! ")
                  ];
                }
              }),
              actions: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_button, {
                    type: "ghost",
                    size: "sm",
                    class: "mr-2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`cancel`);
                      } else {
                        return [
                          createTextVNode("cancel")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_dv_button, {
                    type: "primary",
                    size: "sm"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`apply`);
                      } else {
                        return [
                          createTextVNode("apply")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_button, {
                      type: "ghost",
                      size: "sm",
                      class: "mr-2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("cancel")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_dv_button, {
                      type: "primary",
                      size: "sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("apply")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_dv_alert, { type: "error" }, {
                default: withCtx(() => [
                  createTextVNode(" Lorem ipsum dolor sit amet, consectetur adip! ")
                ]),
                actions: withCtx(() => [
                  createVNode(_component_dv_button, {
                    type: "ghost",
                    size: "sm",
                    class: "mr-2"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("cancel")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_dv_button, {
                    type: "primary",
                    size: "sm"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("apply")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><p>alert</p></div>`);
      _push(ssrRenderComponent(_component_Playground, { code: '<span class="hljs-tag">&lt;<span class="hljs-name">dv-alert</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-icon-heart</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ef3636&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:default</span>&gt;</span>\n    Lorem ipsum dolor sit amet, consectetur adip!\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:content</span>&gt;</span>\n    Lorem ipsum dolor sit amet, consectetur adip! Lorem ipsum dolor sit amet,\n    consectetur adip!Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum\n    dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur\n    adip!Lorem ipsum dolor sit amet, consectetur adip!\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:actions</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;ghost&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mr-2&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">dv-icon-dots</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;1.5em&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">dv-alert</span>&gt;</span>\n' }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_dv_alert, null, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_icon_heart, { color: "#ef3636" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_icon_heart, { color: "#ef3636" })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Lorem ipsum dolor sit amet, consectetur adip! `);
                } else {
                  return [
                    createTextVNode(" Lorem ipsum dolor sit amet, consectetur adip! ")
                  ];
                }
              }),
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Lorem ipsum dolor sit amet, consectetur adip! Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip! `);
                } else {
                  return [
                    createTextVNode(" Lorem ipsum dolor sit amet, consectetur adip! Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip! ")
                  ];
                }
              }),
              actions: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_dv_button, {
                    type: "ghost",
                    size: "sm",
                    class: "mr-2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_dv_icon_dots, { size: "1.5em" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_dv_icon_dots, { size: "1.5em" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_dv_button, {
                      type: "ghost",
                      size: "sm",
                      class: "mr-2"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_dv_icon_dots, { size: "1.5em" })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_dv_alert, null, {
                icon: withCtx(() => [
                  createVNode(_component_dv_icon_heart, { color: "#ef3636" })
                ]),
                default: withCtx(() => [
                  createTextVNode(" Lorem ipsum dolor sit amet, consectetur adip! ")
                ]),
                content: withCtx(() => [
                  createTextVNode(" Lorem ipsum dolor sit amet, consectetur adip! Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip! ")
                ]),
                actions: withCtx(() => [
                  createVNode(_component_dv_button, {
                    type: "ghost",
                    size: "sm",
                    class: "mr-2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_dv_icon_dots, { size: "1.5em" })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="markdown-body"><h2>Alert</h2><h3>Attributes</h3>`);
      _push(ssrRenderComponent(_component_MarkdownTable, {
        columns: [{ "title": "name", "dataIndex": 0 }, { "title": "description", "dataIndex": 1 }, { "title": "type", "dataIndex": 2 }, { "title": "default", "dataIndex": 3 }],
        dataSource: [{ "0": "type", "1": "alert color type", "2": "info, success, warning, error", "3": "-" }]
      }, null, _parent));
      _push(`<h3>Slots</h3>`);
      _push(ssrRenderComponent(_component_MarkdownTable, {
        columns: [{ "title": "name", "dataIndex": 0 }, { "title": "description", "dataIndex": 1 }],
        dataSource: [{ "0": "default", "1": "alert title" }, { "0": "content", "1": "alert content" }, { "0": "actions", "1": "alert actions" }]
      }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx2) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/components/alert.md");
  return _sfc_setup ? _sfc_setup(props2, ctx2) : void 0;
};
var alert = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main
});
export { createApp };
