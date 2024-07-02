import _sfc_main$1 from './ContentRendererMarkdown-B92oPOCE.mjs';
import { defineComponent, ref, unref, mergeProps, useSSRContext } from 'vue';
import { a as useRoute, b as useRouter, c as useRuntimeConfig } from './server.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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
import 'property-information';
import './preview-BlFyxuDY.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const TOC_TAGS = ["h2", "h3", "h4", "h5", "h6"];
TOC_TAGS.reduce((tags, tag) => {
  tags[tag] = Number(tag.charAt(tag.length - 1));
  return tags;
}, {});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const post = ref({
      title: "",
      date: "",
      content: "",
      author: "",
      createdAt: ""
    });
    const config = useRuntimeConfig();
    const route = useRoute();
    const url = config.public.baseUrl + route.fullPath;
    route.params.slug;
    const parsedMarkdown = ref("");
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentRendererMarkdown = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-4xl font-semibold mb-1 p-3">\u{1F4D6} ${ssrInterpolate(unref(post).title)}</h1><span class="font-light p-3">\u{1F4C5} ${ssrInterpolate(new Date(unref(post).createdAt).toDateString())}</span><div class="p-5"><div class="prose lg:prose-lg xl:prose-xl">`);
      _push(ssrRenderComponent(_component_ContentRendererMarkdown, mergeProps({ value: unref(parsedMarkdown) }, _ctx.$attrs), null, _parent));
      _push(`</div></div><div class="mt-5"><div class="flex justify-center"><b class="text-lg m-3 hidden md:block">\u{1F331} Share :</b><a${ssrRenderAttr("href", "https://twitter.com/intent/tweet?text=" + unref(post).title + "&url=" + url)} class="bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg"><i class="mdi mdi-twitter"></i></a><a${ssrRenderAttr("href", "https://www.facebook.com/sharer/sharer.php?u=" + url)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg ml-2"><i class="mdi mdi-facebook"></i></a><a${ssrRenderAttr("href", "https://www.linkedin.com/shareArticle?mini=true&url=" + url + "&title=" + unref(post).title)} class="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg ml-2"><i class="mdi mdi-linkedin"></i></a><a${ssrRenderAttr("href", "https://wa.me/?text=" + url)} class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg ml-2"><i class="mdi mdi-whatsapp"></i></a><a href="#" class="bg-red-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg ml-2"><i class="mdi mdi-instagram"></i></a></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-CMop9oTx.mjs.map
