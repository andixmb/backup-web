import { useSSRContext, defineComponent, ref, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { u as useHead } from './server.mjs';
import 'vue-bundle-renderer/runtime';
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
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0 = publicAssetsURL("/shn.png");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SHNChat",
  __ssrInlineRender: true,
  props: ["aiResponse"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="chat-message"><div class="flex items-end"><div class="flex flex-col space-y-2 text-xs max-w-sm mx-2 order-2 items-start"><div><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600"><div class="prose lg:prose-lg xl:prose-xl">${ssrInterpolate(__props.aiResponse)}</div></span></div></div><img${ssrRenderAttr("src", _imports_0)} alt="My profile" class="w-6 h-6 rounded-full order-1"></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SHNChat.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "shn",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "SHN-AI - JUSTALINKO"
    });
    const command = ref("Hello !");
    const aiResponse = ref("Hello, can i help you today?");
    const aiResponseStream = ref([]);
    const replyIng = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SHNChat = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="p-5"><h2 class="text-black text-2xl mx-1 font-extrabold relative inline-block stroke-current">#\uFE0F\u20E3 SHN-AI <svg class="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path></svg></h2><div class="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen"><div class="flex sm:items-center justify-between py-3 border-b-2 border-black"><div class="relative flex items-center space-x-4"><div class="relative"><span class="absolute text-green-500 right-0 bottom-0"><svg width="20" height="20"><circle cx="8" cy="8" r="8" fill="currentColor"></circle></svg></span><img${ssrRenderAttr("src", _imports_0)} alt="" class="w-10 sm:w-16 h-10 sm:h-16 rounded-full"></div><div class="flex flex-col leading-tight"><div class="text-2xl mt-1 flex items-center"><span class="text-gray-700 mr-3">0xandixmb-AI CHATBOT</span></div><span class="text-lg text-gray-600">Your Alternative friends</span></div></div></div><div id="messages" class="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"><div class="chat-message"><div class="flex items-end justify-end"><div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end"><div><span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-black text-white">${ssrInterpolate(unref(command))}</span></div></div><img src="https://ui-avatars.com/api/?size=128&amp;name=Justalinko&amp;background=random&amp;color=fff&amp;rounded=true&amp;bold=true" alt="My profile" class="w-6 h-6 rounded-full order-2"></div></div>`);
      if (unref(aiResponseStream).length > 0) {
        _push(`<div><!--[-->`);
        ssrRenderList(unref(aiResponseStream), (res, index) => {
          _push(`<div class="mb-2">`);
          _push(ssrRenderComponent(_component_SHNChat, { aiResponse: res }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_SHNChat, { aiResponse: unref(aiResponse) }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div><div class="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0"><div class="relative flex"><input type="text" placeholder="Write your message!" class="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 py-3 border-2 border-black"${ssrRenderAttr("value", unref(command))}><div class="absolute right-0 items-center inset-y-0"><button type="button" class="inline-flex items-center justify-center px-2 py-2 transition duration-500 ease-in-out text-white bg-black hover:bg-gray-500 focus:outline-none">`);
      if (!unref(replyIng)) {
        _push(`<span class="font-bold">Send</span>`);
      } else {
        _push(`<span class="font-bold">Replying...</span>`);
      }
      _push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-6 w-6 ml-2 transform rotate-90"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg></button></div></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shn.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=shn-Dv3YXx1B.mjs.map
