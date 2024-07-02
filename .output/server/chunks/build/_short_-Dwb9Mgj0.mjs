import { _ as _sfc_main$1 } from './NuxtTurnstile-BH4KV6RK.mjs';
import { defineComponent, ref, unref, isRef, useSSRContext } from 'vue';
import { a as useRoute } from './server.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'hast-util-to-string';
import 'github-slugger';
import 'detab';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[short]",
  __ssrInlineRender: true,
  setup(__props) {
    const anonmes = ref([]);
    const anlink = ref({});
    useRoute();
    const message = ref("");
    const token = ref("");
    const isSuccessful = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtTurnstile = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="container"><h2 class="text-black text-2xl mx-1 font-extrabold relative inline-block stroke-current">\u{1F481} AnonMess: ${ssrInterpolate(unref(anlink).author)} <svg class="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path></svg></h2><p> AnonMess is a simple anonymous messaging app that allows other people to send messages to you without revealing identity. </p><div class="bg-blue-300 p-2 text-black m-2"> Send your anonymous message to <b class="text-black">${ssrInterpolate(unref(anlink).author)}</b> by writing in the box below ! </div><div class="w-full md:w-2/3 mx-auto">`);
      if (unref(isSuccessful)) {
        _push(`<div class="bg-green-300 p-2 text-black m-2"> Message sent successfully ! </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form><textarea class="p-2 border-2 border-black w-full h-28 mt-4 focus:border-gray-400 focus:shadow-md hover:border-amber-900" placeholder="Your Message">${ssrInterpolate(unref(message))}</textarea><br>`);
      _push(ssrRenderComponent(_component_NuxtTurnstile, {
        modelValue: unref(token),
        "onUpdate:modelValue": ($event) => isRef(token) ? token.value = $event : null
      }, null, _parent));
      _push(`<button class="mt-4 p-2 bg-black text-white hover:bg-gray-600 w-full" type="submit">Send</button></form></div><hr class="mt-3 border-1 border-black"><!--[-->`);
      ssrRenderList(unref(anonmes), (mes, i) => {
        _push(`<div class="border-2 border-black rounded-r-xl rounded-tl-xl p-4 mt-5 bg-gradient-to-r from-slate-100 via-white to-gray-600 flex justify-between"><span class="text-black">${ssrInterpolate(mes.content)}</span><span class="text-white">\u{1F4C6} ${ssrInterpolate(new Date(mes.createdAt).toLocaleDateString())}</span></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/anonmes/[short].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_short_-Dwb9Mgj0.mjs.map
