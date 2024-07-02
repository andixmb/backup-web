import { defineComponent, ref, createVNode, resolveDynamicComponent, mergeProps, useSSRContext } from 'file:///home/andix/andixblog/node_modules/vue/index.mjs';
import { c as useRuntimeConfig, d as useNuxtApp } from './server.mjs';
import { ssrRenderVNode } from 'file:///home/andix/andixblog/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NuxtTurnstile",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      required: false
    },
    element: {
      type: String,
      default: "div"
    },
    siteKey: {
      type: String,
      required: false
    },
    options: {
      type: Object,
      default: () => ({})
    },
    resetInterval: {
      type: Number,
      default: 1e3 * 250
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
    useRuntimeConfig().public.turnstile;
    const nuxtApp = useNuxtApp();
    const el = ref();
    ref(false);
    const reset = () => {
    };
    {
      nuxtApp.$turnstile.loadTurnstile();
    }
    __expose({ reset });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.element), mergeProps({
        ref_key: "el",
        ref: el
      }, _attrs), null), _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxtjs/turnstile/dist/runtime/components/NuxtTurnstile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=NuxtTurnstile-BH4KV6RK.mjs.map
