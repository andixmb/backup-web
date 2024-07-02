import { u as useHead, a as useRoute, _ as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, ref, watch, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
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
    useHead({
      title: "Blogs - 0xandixmb"
    });
    const posts = ref([]);
    const nextLink = ref("");
    const prevLink = ref("");
    const nextShow = ref(true);
    const prevShow = ref(false);
    const postFull = ref([]);
    const iconPost = ref({
      0: "🔥",
      1: "1️⃣",
      2: "2️⃣",
      3: "3️⃣",
      4: "4️⃣",
      5: "5️⃣",
      6: "6️⃣",
      7: "7️⃣",
      8: "8️⃣",
      9: "9️⃣",
      10: "🔟"
    });
    useRoute();
    const pages = ref(1);
    const getPostData = async (page) => {
      const getPost = await $fetch("/api/post?method=pagination&page=" + page);
      posts.value = getPost.body;
      nextLink.value = parseInt(page) + 1;
      prevLink.value = parseInt(page) - 1;
      postFull.value = getPost;
      pages.value = page;
      if (page <= 1) {
        prevShow.value = false;
      } else {
        prevShow.value = true;
      }
      if (page >= postFull.value.totalPage) {
        nextShow.value = false;
      } else {
        nextShow.value = true;
      }
    };
    watch(pages, async (value) => {
      await getPostData(value);
      let ps = postFull.value;
      if (value >= ps.totalPage) {
        nextShow.value = false;
      } else {
        nextShow.value = true;
      }
      if (value <= 1) {
        prevShow.value = false;
      } else {
        prevShow.value = true;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="p-5"><h2 class="text-black text-2xl mx-1 font-extrabold relative inline-block stroke-current"> 📄 Blog Posts <svg class="absolute-bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path></svg></h2><ul className="mt-2"><!--[-->`);
      ssrRenderList(unref(posts), (post, index) => {
        _push(`<li class="flex justify-between p-2 border-b-2 border-b-black hover:text-amber-800 hover:border-b-amber-600">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/blog/" + post.slug
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(iconPost)[index] ?? "💠")} ${ssrInterpolate(post.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(iconPost)[index] ?? "💠") + " " + toDisplayString(post.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<span>[${ssrInterpolate(new Date(post.createdAt).toDateString())}]</span></li>`);
      });
      _push(`<!--]--></ul><div class="flex justify-between mt-5">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        style: unref(prevShow) ? null : { display: "none" },
        to: "/blog/?p=" + unref(prevLink),
        onClick: ($event) => pages.value = unref(prevLink),
        class: "text-black font-bold hover:text-amber-800"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`🔙 Previous `);
          } else {
            return [
              createTextVNode("🔙 Previous ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="text-gray-600 font-bold" style="${ssrRenderStyle(!unref(prevShow) ? null : { display: "none" })}">🔙 Previous</span><span class="text-white p-1 rounded-full bg-black font-bold"> ( ${ssrInterpolate(unref(pages))} / ${ssrInterpolate(unref(postFull).totalPage)} )</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        style: unref(nextShow) ? null : { display: "none" },
        to: "/blog/?p=" + unref(nextLink),
        onClick: ($event) => pages.value = unref(nextLink),
        class: "text-black font-bold hover:text-amber-800"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Next 🔜`);
          } else {
            return [
              createTextVNode("Next 🔜")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="text-gray-600 font-bold" style="${ssrRenderStyle(!unref(nextShow) ? null : { display: "none" })}">Next 🔜</span></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-B7en53rp.js.map
