import { _ as _sfc_main$1 } from "./NuxtTurnstile-BH4KV6RK.js";
import { defineComponent, ref, unref, isRef, useSSRContext } from "vue";
import { u as useHead } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "devalue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const username = ref("");
    const shortId = ref(null);
    const token = ref("");
    useHead({
      title: "Anonymous Message - JUSTALINKO"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtTurnstile = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="container"><h2 class="text-black text-2xl mx-1 font-extrabold relative inline-block stroke-current">💁 AnonMess <svg class="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path></svg></h2><p> AnonMess is a simple anonymous messaging app that allows other people to send messages to you without revealing identity. </p><div class="mt-5 mb-3 w-2/3 mx-auto"><h2 class="text-black text-4xl mx-1 font-extrabold relative inline-block stroke-current">❓ Create Yours !<svg class="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path></svg></h2><br><input type="text" class="w-full p-2 border-2 border-black mt-4 focus:border-gray-400 focus:shadow-md hover:border-amber-900" placeholder="Your Name"${ssrRenderAttr("value", unref(username))}><br>`);
      _push(ssrRenderComponent(_component_NuxtTurnstile, {
        modelValue: unref(token),
        "onUpdate:modelValue": ($event) => isRef(token) ? token.value = $event : null
      }, null, _parent));
      _push(`<button class="mt-4 p-2 bg-black text-white hover:bg-gray-600 w-full" type="button">Create</button><div class="mt-5 bg-green-600 p-3 rounded-lg text-white" style="${ssrRenderStyle(unref(shortId) != null ? null : { display: "none" })}"><p>Your AnonMess URL is <a${ssrRenderAttr("href", "/anonmes/" + unref(shortId))} class="underline">/anonmes/${ssrInterpolate(unref(shortId))}</a></p></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/anonmes/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-SHSdM918.js.map
