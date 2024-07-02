import _sfc_main$1 from './ContentRendererMarkdown-B92oPOCE.mjs';
import { defineComponent, ref, unref, mergeProps, useSSRContext } from 'file:///home/andix/andixblog/node_modules/vue/index.mjs';
import { a as useRoute, b as useRouter, c as useRuntimeConfig } from './server.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from 'file:///home/andix/andixblog/node_modules/vue/server-renderer/index.mjs';
import 'file:///home/andix/andixblog/node_modules/destr/dist/index.mjs';
import 'file:///home/andix/andixblog/node_modules/scule/dist/index.mjs';
import 'file:///home/andix/andixblog/node_modules/property-information/index.js';
import './preview-BlFyxuDY.mjs';
import 'file:///home/andix/andixblog/node_modules/cookie-es/dist/index.mjs';
import 'file:///home/andix/andixblog/node_modules/h3/dist/index.mjs';
import 'file:///home/andix/andixblog/node_modules/ohash/dist/index.mjs';
import 'file:///home/andix/andixblog/node_modules/klona/dist/index.mjs';
import 'file:///home/andix/andixblog/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///home/andix/andixblog/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/andix/andixblog/node_modules/devalue/index.js';
import 'file:///home/andix/andixblog/node_modules/ufo/dist/index.mjs';
import 'file:///home/andix/andixblog/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///home/andix/andixblog/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///home/andix/andixblog/node_modules/hookable/dist/index.mjs';
import 'file:///home/andix/andixblog/node_modules/defu/dist/defu.mjs';
import 'file:///home/andix/andixblog/node_modules/unstorage/dist/index.mjs';
import 'file:///home/andix/andixblog/node_modules/unstorage/drivers/fs.mjs';
import 'file:///home/andix/andixblog/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/andix/andixblog/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/andix/andixblog/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/andix/andixblog/node_modules/pathe/dist/index.mjs';
import 'file:///home/andix/andixblog/node_modules/unified/index.js';
import 'file:///home/andix/andixblog/node_modules/mdast-util-to-string/index.js';
import 'file:///home/andix/andixblog/node_modules/micromark/index.js';
import 'file:///home/andix/andixblog/node_modules/unist-util-stringify-position/index.js';
import 'file:///home/andix/andixblog/node_modules/micromark-util-character/index.js';
import 'file:///home/andix/andixblog/node_modules/micromark-util-chunked/index.js';
import 'file:///home/andix/andixblog/node_modules/micromark-util-resolve-all/index.js';
import 'file:///home/andix/andixblog/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///home/andix/andixblog/node_modules/slugify/slugify.js';
import 'file:///home/andix/andixblog/node_modules/remark-parse/index.js';
import 'file:///home/andix/andixblog/node_modules/remark-rehype/index.js';
import 'file:///home/andix/andixblog/node_modules/remark-mdc/dist/index.mjs';
import 'file:///home/andix/andixblog/node_modules/hast-util-to-string/index.js';
import 'file:///home/andix/andixblog/node_modules/github-slugger/index.js';
import 'file:///home/andix/andixblog/node_modules/detab/index.js';
import 'file:///home/andix/andixblog/node_modules/remark-emoji/index.js';
import 'file:///home/andix/andixblog/node_modules/remark-gfm/index.js';
import 'file:///home/andix/andixblog/node_modules/rehype-external-links/index.js';
import 'file:///home/andix/andixblog/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///home/andix/andixblog/node_modules/rehype-sort-attributes/index.js';
import 'file:///home/andix/andixblog/node_modules/rehype-raw/index.js';
import 'file:///home/andix/andixblog/node_modules/unhead/dist/index.mjs';
import 'file:///home/andix/andixblog/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///home/andix/andixblog/node_modules/unctx/dist/index.mjs';
import 'file:///home/andix/andixblog/node_modules/vue-router/dist/vue-router.node.mjs';

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
