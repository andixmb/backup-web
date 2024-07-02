import { _ as __nuxt_component_0 } from './server.mjs';
import { defineComponent, ref, withAsyncContext, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
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
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _imports_0 = publicAssetsURL("/jst.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const iconPost = ref({
      0: "\u{1F525}",
      1: "1\uFE0F\u20E3",
      2: "2\uFE0F\u20E3",
      3: "3\uFE0F\u20E3",
      4: "4\uFE0F\u20E3",
      5: "5\uFE0F\u20E3",
      6: "6\uFE0F\u20E3",
      7: "7\uFE0F\u20E3",
      8: "8\uFE0F\u20E3",
      9: "9\uFE0F\u20E3",
      10: "\u{1F51F}"
    });
    const posts = ref([]);
    const getPost = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/post?method=limit&limit=11")), __temp = await __temp, __restore(), __temp);
    posts.value = getPost.body;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><section class="p-5"><h2 class="text-black text-2xl mx-1 font-extrabold relative inline-block stroke-current">\u{1F481} Who&#39;s ? <svg class="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path></svg></h2><div class="flex flex-col md:flex-row"><div><img${ssrRenderAttr("src", _imports_0)} class="max-w-50 mr-5"></div><div><p class="ml-2 mt-10 bg-gradient-to-r from-red-500 via-blue-900 to-yellow-600 text-transparent bg-clip-text bg-300% animate-gradient"> 0xandixmb is a regular human being who enjoys researching different projects in the crypto space. has basic knowledge of blockchain, web3, ai and investing. Enjoy sharing information and discussions from different points of view. like many things about technology and the future. He has a lot of ideas that could be created but he only focuses on his passion in the web3 space. another ability is about being able to make long-term plans about his life and spirituality.. </p></div></div><p class="ml-2 mt-2 bg-gradient-to-r from-red-500 via-blue-900 to-yellow-600 text-transparent bg-clip-text bg-300% animate-gradient"> Hello Everyone !!! </p></section><section class="p-5"><h2 class="text-black text-2xl mx-1 font-extrabold relative inline-block stroke-current">\u{1F938} What I can do? <svg class="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path></svg></h2><p class="mt-2 bg-gradient-to-r from-orange-500 via-green-500 to-blue-500 text-transparent bg-clip-text bg-300% animate-gradient"> i don&#39;t give up easily in doing something, i often make plans and process data to be made into information to make a decision in my life. i usually think about what happens in the long run. my expertise is in the field of technology and information.. </p></section><section class="p-5"><h2 class="text-black text-2xl mx-1 font-extrabold relative inline-block stroke-current"> \u{1F4C4} Latest Posts <svg class="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path></svg></h2><ul className="mt-2"><!--[-->`);
      ssrRenderList(unref(posts), (post, index) => {
        _push(`<li class="flex justify-between p-2 border-b-2 border-b-black hover:text-amber-800 hover:border-b-amber-600">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/blog/" + post.slug
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(iconPost)[index])} ${ssrInterpolate(post.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(iconPost)[index]) + " " + toDisplayString(post.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<span>[${ssrInterpolate(new Date(post.createdAt).toDateString())}]</span></li>`);
      });
      _push(`<!--]--></ul>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "mt-2 block text-center text-black font-bold hover:text-amber-800"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u{1F4DA} More Posts`);
          } else {
            return [
              createTextVNode("\u{1F4DA} More Posts")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-5WKMqU3Y.mjs.map
