import _sfc_main$1 from "./ContentRendererMarkdown-B92oPOCE.js";
import { defineComponent, ref, unref, mergeProps, useSSRContext } from "vue";
import { a as useRoute, b as useRouter, c as useRuntimeConfig } from "../server.mjs";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import "remark-mdc";
import "defu";
import "github-slugger";
import "remark-emoji";
import "slugify";
import "destr";
import "scule";
import "property-information";
import "./preview-BlFyxuDY.js";
import "cookie-es";
import "h3";
import "ohash";
import "klona";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "ufo";
import "devalue";
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
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-4xl font-semibold mb-1 p-3">📖 ${ssrInterpolate(unref(post).title)}</h1><span class="font-light p-3">📅 ${ssrInterpolate(new Date(unref(post).createdAt).toDateString())}</span><div class="p-5"><div class="prose lg:prose-lg xl:prose-xl">`);
      _push(ssrRenderComponent(_component_ContentRendererMarkdown, mergeProps({ value: unref(parsedMarkdown) }, _ctx.$attrs), null, _parent));
      _push(`</div></div><div class="mt-5"><div class="flex justify-center"><b class="text-lg m-3 hidden md:block">🌱 Share :</b><a${ssrRenderAttr("href", "https://twitter.com/intent/tweet?text=" + unref(post).title + "&url=" + url)} class="bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg"><i class="mdi mdi-twitter"></i></a><a${ssrRenderAttr("href", "https://www.facebook.com/sharer/sharer.php?u=" + url)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg ml-2"><i class="mdi mdi-facebook"></i></a><a${ssrRenderAttr("href", "https://www.linkedin.com/shareArticle?mini=true&url=" + url + "&title=" + unref(post).title)} class="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg ml-2"><i class="mdi mdi-linkedin"></i></a><a${ssrRenderAttr("href", "https://wa.me/?text=" + url)} class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg ml-2"><i class="mdi mdi-whatsapp"></i></a><a href="#" class="bg-red-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg ml-2"><i class="mdi mdi-instagram"></i></a></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-CMop9oTx.js.map
