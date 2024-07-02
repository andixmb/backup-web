import { _ as _sfc_main$1 } from './NuxtTurnstile-BH4KV6RK.mjs';
import { defineComponent, ref, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import './server.mjs';
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
  __name: "new",
  __ssrInlineRender: true,
  setup(__props) {
    const title = ref("");
    const content = ref("");
    const author = ref("");
    const token = ref("");
    const password = ref("");
    const isSuccessful = ref(false);
    const message = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtTurnstile = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="container p-5"><h2 class="text-black text-2xl mx-1 font-extrabold relative inline-block stroke-current mb-5"> \u2795 New Post <svg class="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path></svg></h2>`);
      if (unref(isSuccessful)) {
        _push(`<div class="bg-green-300 p-2 text-black m-2">${(_a = unref(message)) != null ? _a : ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form class="shadow rounded-lg p-5 m-5"><div class="mb-2"><label htmlFor="name">Title</label><input type="text" class="w-full p-2 border-2 border-black shadow hover:border-blue-500 focus:border-blue-500"${ssrRenderAttr("value", unref(title))}></div><div class="mb-2"><label htmlFor="name">Content</label><textarea class="w-full p-2 border-2 border-black shadow hover:border-blue-500 focus:border-blue-500 h-60">${ssrInterpolate(unref(content))}</textarea></div><div class="mb-2"><label htmlFor="name">Author</label><input type="text" class="w-full p-2 border-2 border-black shadow hover:border-blue-500 focus:border-blue-500"${ssrRenderAttr("value", unref(author))}></div><div class="mb-2"><label htmlFor="name">Password</label><input type="text" class="w-full p-2 border-2 border-black shadow hover:border-blue-500 focus:border-blue-500"${ssrRenderAttr("value", unref(password))}></div><div class="mb-2">`);
      _push(ssrRenderComponent(_component_NuxtTurnstile, {
        modelValue: unref(token),
        "onUpdate:modelValue": ($event) => isRef(token) ? token.value = $event : null
      }, null, _parent));
      _push(`</div><button class="mt-4 p-2 bg-black text-white hover:bg-gray-600 w-full" type="submit">Create</button></form></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/new.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=new-BJdpPLPf.mjs.map
