import { u as useHead, _ as __nuxt_component_0 } from './server.mjs';
import { defineComponent, ref, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "projects",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Projects - 0xandix-mb"
    });
    const repositories = ref([]);
    const repositories2 = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="container"><h1 class="text-black text-2xl mx-1 font-extrabold relative inline-block stroke-current">\u{1F5A5}\uFE0F My Projects <svg class="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path></svg></h1><h3 class="text-white text-xl font-bold mt-4 border-l-4 border-black ml-2 bg-gradient-to-r from-gray-500 via-white to-white p-2"> @andixmb</h3><div class="grid grid-cols-2 mt-4 gap-3 p-3"><!--[-->`);
      ssrRenderList(unref(repositories), (repo) => {
        _push(`<div class="border-2 border-gray-500 gap-2 rounded-lg hover:border-black hover:shadow-lg bg-gradient-to-r from-transparent via-slate-100 to-gray-400 hover:bg-gradient-to-r hover:from-gray-400 hover:via-slate-100 hover:to-white">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: repo.html_url,
          target: "_blank"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex justify-between p-3"${_scopeId}><h3 class="text-xl hover:underline"${_scopeId}>${ssrInterpolate(repo.name)}</h3><div class="bg-gray-600 rounded p-1 text-white text-xs font-serif"${_scopeId}>${ssrInterpolate(repo.language)}</div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex justify-between p-3" }, [
                  createVNode("h3", { class: "text-xl hover:underline" }, toDisplayString(repo.name), 1),
                  createVNode("div", { class: "bg-gray-600 rounded p-1 text-white text-xs font-serif" }, toDisplayString(repo.language), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<p class="text-small p-3">${ssrInterpolate(repo.description)}</p></div>`);
      });
      _push(`<!--]--></div><h3 class="text-white text-xl font-bold mt-4 border-l-4 border-black ml-2 bg-gradient-to-r from-gray-500 via-white to-white p-2"> @andixmb</h3><div class="grid grid-cols-2 mt-4 gap-3 p-3"><!--[-->`);
      ssrRenderList(unref(repositories2), (repo) => {
        _push(`<div class="border-2 border-gray-500 gap-2 rounded-lg hover:border-black hover:shadow-lg bg-gradient-to-r from-transparent via-slate-100 to-gray-400 hover:bg-gradient-to-r hover:from-gray-400 hover:via-slate-100 hover:to-white">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: repo.html_url,
          target: "_blank"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex justify-between p-3"${_scopeId}><h3 class="text-xl hover:underline"${_scopeId}>${ssrInterpolate(repo.name)}</h3><div class="bg-gray-600 rounded p-1 text-white text-xs font-serif"${_scopeId}>${ssrInterpolate(repo.language)}</div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex justify-between p-3" }, [
                  createVNode("h3", { class: "text-xl hover:underline" }, toDisplayString(repo.name), 1),
                  createVNode("div", { class: "bg-gray-600 rounded p-1 text-white text-xs font-serif" }, toDisplayString(repo.language), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<p class="text-small p-3">${ssrInterpolate(repo.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=projects-vfG-nEDV.mjs.map
