import{J as tt,f as q,o as p,c as m,a as l,t as V,u as et,r as A,i as y,F as nt,n as st,b as x,l as ot,v as it,m as at,d as rt,L as ct}from"./Biz5SVmj.js";const J=tt("/shn.png"),lt={class:"chat-message"},dt={class:"flex items-end"},ut={class:"flex flex-col space-y-2 text-xs max-w-sm mx-2 order-2 items-start"},ft={class:"px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600"},ht={class:"prose lg:prose-lg xl:prose-xl"},gt=l("img",{src:J,alt:"My profile",class:"w-6 h-6 rounded-full order-1"},null,-1),_t=q({__name:"SHNChat",props:["aiResponse"],setup(t){return(n,e)=>(p(),m("div",null,[l("div",lt,[l("div",dt,[l("div",ut,[l("div",null,[l("span",ft,[l("div",ht,V(t.aiResponse),1)])])]),gt])])]))}});var M;(function(t){t.STRING="STRING",t.NUMBER="NUMBER",t.INTEGER="INTEGER",t.BOOLEAN="BOOLEAN",t.ARRAY="ARRAY",t.OBJECT="OBJECT"})(M||(M={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=["user","model","function","system"];var G;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(G||(G={}));var H;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(H||(H={}));var k;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(k||(k={}));var D;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(D||(D={}));var N;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.OTHER="OTHER"})(N||(N={}));var U;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})(U||(U={}));var $;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"})($||($={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h extends Error{constructor(n){super(`[GoogleGenerativeAI Error]: ${n}`)}}class R extends h{constructor(n,e){super(n),this.response=e}}class W extends h{constructor(n,e,s,o){super(n),this.status=e,this.statusText=s,this.errorDetails=o}}class v extends h{}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="https://generativelanguage.googleapis.com",mt="v1beta",Et="0.13.0",vt="genai-js";var C;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(C||(C={}));class Ct{constructor(n,e,s,o,i){this.model=n,this.task=e,this.apiKey=s,this.stream=o,this.requestOptions=i}toString(){var n,e;const s=((n=this.requestOptions)===null||n===void 0?void 0:n.apiVersion)||mt;let i=`${((e=this.requestOptions)===null||e===void 0?void 0:e.baseUrl)||pt}/${s}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}function yt(t){const n=[];return t!=null&&t.apiClient&&n.push(t.apiClient),n.push(`${vt}/${Et}`),n.join(" ")}async function Rt(t){var n;const e=new Headers;e.append("Content-Type","application/json"),e.append("x-goog-api-client",yt(t.requestOptions)),e.append("x-goog-api-key",t.apiKey);let s=(n=t.requestOptions)===null||n===void 0?void 0:n.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(o){throw new v(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${o.message}`)}for(const[o,i]of s.entries()){if(o==="x-goog-api-key")throw new v(`Cannot set reserved header name ${o}`);if(o==="x-goog-api-client")throw new v(`Header name ${o} can only be set using the apiClient field`);e.append(o,i)}}return e}async function It(t,n,e,s,o,i){const a=new Ct(t,n,e,s,i);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},St(i)),{method:"POST",headers:await Rt(a),body:o})}}async function w(t,n,e,s,o,i,a=fetch){const{url:r,fetchOptions:d}=await It(t,n,e,s,o,i);return Ot(r,d,a)}async function Ot(t,n,e=fetch){let s;try{s=await e(t,n)}catch(o){wt(o,t)}return s.ok||await At(s,t),s}function wt(t,n){let e=t;throw t instanceof W||t instanceof v||(e=new h(`Error fetching from ${n.toString()}: ${t.message}`),e.stack=t.stack),e}async function At(t,n){let e="",s;try{const o=await t.json();e=o.error.message,o.error.details&&(e+=` ${JSON.stringify(o.error.details)}`,s=o.error.details)}catch{}throw new W(`Error fetching from ${n.toString()}: [${t.status} ${t.statusText}] ${e}`,t.status,t.statusText,s)}function St(t){const n={};if((t==null?void 0:t.timeout)>=0){const e=new AbortController,s=e.signal;setTimeout(()=>e.abort(),t.timeout),n.signal=s}return n}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),S(t.candidates[0]))throw new R(`${E(t)}`,t);return Nt(t)}else if(t.promptFeedback)throw new R(`Text not available. ${E(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),S(t.candidates[0]))throw new R(`${E(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),P(t)[0]}else if(t.promptFeedback)throw new R(`Function call not available. ${E(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),S(t.candidates[0]))throw new R(`${E(t)}`,t);return P(t)}else if(t.promptFeedback)throw new R(`Function call not available. ${E(t)}`,t)},t}function Nt(t){var n,e,s,o;const i=[];if(!((e=(n=t.candidates)===null||n===void 0?void 0:n[0].content)===null||e===void 0)&&e.parts)for(const a of(o=(s=t.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)a.text&&i.push(a.text);return i.length>0?i.join(""):""}function P(t){var n,e,s,o;const i=[];if(!((e=(n=t.candidates)===null||n===void 0?void 0:n[0].content)===null||e===void 0)&&e.parts)for(const a of(o=(s=t.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)a.functionCall&&i.push(a.functionCall);if(i.length>0)return i}const bt=[N.RECITATION,N.SAFETY];function S(t){return!!t.finishReason&&bt.includes(t.finishReason)}function E(t){var n,e,s;let o="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)o+="Response was blocked",!((n=t.promptFeedback)===null||n===void 0)&&n.blockReason&&(o+=` due to ${t.promptFeedback.blockReason}`),!((e=t.promptFeedback)===null||e===void 0)&&e.blockReasonMessage&&(o+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((s=t.candidates)===null||s===void 0)&&s[0]){const i=t.candidates[0];S(i)&&(o+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(o+=`: ${i.finishMessage}`))}return o}function I(t){return this instanceof I?(this.v=t,this):new I(t)}function Tt(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=e.apply(t,n||[]),o,i=[];return o={},a("next"),a("throw"),a("return"),o[Symbol.asyncIterator]=function(){return this},o;function a(c){s[c]&&(o[c]=function(_){return new Promise(function(b,Z){i.push([c,_,b,Z])>1||r(c,_)})})}function r(c,_){try{d(s[c](_))}catch(b){u(i[0][3],b)}}function d(c){c.value instanceof I?Promise.resolve(c.value.v).then(f,g):u(i[0][2],c)}function f(c){r("next",c)}function g(c){r("throw",c)}function u(c,_){c(_),i.shift(),i.length&&r(i[0][0],i[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function xt(t){const n=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),e=Gt(n),[s,o]=e.tee();return{stream:Lt(s),response:Mt(o)}}async function Mt(t){const n=[],e=t.getReader();for(;;){const{done:s,value:o}=await e.read();if(s)return T(Ht(n));n.push(o)}}function Lt(t){return Tt(this,arguments,function*(){const e=t.getReader();for(;;){const{value:s,done:o}=yield I(e.read());if(o)break;yield yield I(T(s))}})}function Gt(t){const n=t.getReader();return new ReadableStream({start(s){let o="";return i();function i(){return n.read().then(({value:a,done:r})=>{if(r){if(o.trim()){s.error(new h("Failed to parse stream"));return}s.close();return}o+=a;let d=o.match(F),f;for(;d;){try{f=JSON.parse(d[1])}catch{s.error(new h(`Error parsing JSON response: "${d[1]}"`));return}s.enqueue(f),o=o.substring(d[0].length),d=o.match(F)}return i()})}}})}function Ht(t){const n=t[t.length-1],e={promptFeedback:n==null?void 0:n.promptFeedback};for(const s of t){if(s.candidates)for(const o of s.candidates){const i=o.index;if(e.candidates||(e.candidates=[]),e.candidates[i]||(e.candidates[i]={index:o.index}),e.candidates[i].citationMetadata=o.citationMetadata,e.candidates[i].finishReason=o.finishReason,e.candidates[i].finishMessage=o.finishMessage,e.candidates[i].safetyRatings=o.safetyRatings,o.content&&o.content.parts){e.candidates[i].content||(e.candidates[i].content={role:o.content.role||"user",parts:[]});const a={};for(const r of o.content.parts)r.text&&(a.text=r.text),r.functionCall&&(a.functionCall=r.functionCall),Object.keys(a).length===0&&(a.text=""),e.candidates[i].content.parts.push(a)}}s.usageMetadata&&(e.usageMetadata=s.usageMetadata)}return e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(t,n,e,s){const o=await w(n,C.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(e),s);return xt(o)}async function z(t,n,e,s){const i=await(await w(n,C.GENERATE_CONTENT,t,!1,JSON.stringify(e),s)).json();return{response:T(i)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function O(t){let n=[];if(typeof t=="string")n=[{text:t}];else for(const e of t)typeof e=="string"?n.push({text:e}):n.push(e);return kt(n)}function kt(t){const n={role:"user",parts:[]},e={role:"function",parts:[]};let s=!1,o=!1;for(const i of t)"functionResponse"in i?(e.parts.push(i),o=!0):(n.parts.push(i),s=!0);if(s&&o)throw new h("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!o)throw new h("No content is provided for sending chat message.");return s?n:e}function Dt(t,n){let e={};const s=t.generateContentRequest!=null;if(t.contents){if(s)throw new v("CountTokensRequest must have one of contents or generateContentRequest, not both.");e=Object.assign({},t)}else if(s)e=Object.assign({},t),e.generateContentRequest.model=n;else{const o=O(t);e.contents=[o]}return e}function B(t){let n;return t.contents?n=t:n={contents:[O(t)]},t.systemInstruction&&(n.systemInstruction=Q(t.systemInstruction)),n}function Ut(t){return typeof t=="string"||Array.isArray(t)?{content:O(t)}:t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K=["text","inlineData","functionCall","functionResponse"],$t={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall"],system:["text"]};function Pt(t){let n=!1;for(const e of t){const{role:s,parts:o}=e;if(!n&&s!=="user")throw new h(`First content should be with role 'user', got ${s}`);if(!L.includes(s))throw new h(`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(L)}`);if(!Array.isArray(o))throw new h("Content should have 'parts' property with an array of Parts");if(o.length===0)throw new h("Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0};for(const r of o)for(const d of K)d in r&&(i[d]+=1);const a=$t[s];for(const r of K)if(!a.includes(r)&&i[r]>0)throw new h(`Content with role '${s}' can't contain '${r}' part`);n=!0}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y="SILENT_ERROR";class Ft{constructor(n,e,s,o){this.model=e,this.params=s,this.requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=n,s!=null&&s.history&&(Pt(s.history),this._history=s.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(n){var e,s,o,i,a,r;await this._sendPromise;const d=O(n),f={safetySettings:(e=this.params)===null||e===void 0?void 0:e.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(o=this.params)===null||o===void 0?void 0:o.tools,toolConfig:(i=this.params)===null||i===void 0?void 0:i.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(r=this.params)===null||r===void 0?void 0:r.cachedContent,contents:[...this._history,d]};let g;return this._sendPromise=this._sendPromise.then(()=>z(this._apiKey,this.model,f,this.requestOptions)).then(u=>{var c;if(u.response.candidates&&u.response.candidates.length>0){this._history.push(d);const _=Object.assign({parts:[],role:"model"},(c=u.response.candidates)===null||c===void 0?void 0:c[0].content);this._history.push(_)}else{const _=E(u.response);_&&console.warn(`sendMessage() was unsuccessful. ${_}. Inspect response object for details.`)}g=u}),await this._sendPromise,g}async sendMessageStream(n){var e,s,o,i,a,r;await this._sendPromise;const d=O(n),f={safetySettings:(e=this.params)===null||e===void 0?void 0:e.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(o=this.params)===null||o===void 0?void 0:o.tools,toolConfig:(i=this.params)===null||i===void 0?void 0:i.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(r=this.params)===null||r===void 0?void 0:r.cachedContent,contents:[...this._history,d]},g=X(this._apiKey,this.model,f,this.requestOptions);return this._sendPromise=this._sendPromise.then(()=>g).catch(u=>{throw new Error(Y)}).then(u=>u.response).then(u=>{if(u.candidates&&u.candidates.length>0){this._history.push(d);const c=Object.assign({},u.candidates[0].content);c.role||(c.role="model"),this._history.push(c)}else{const c=E(u);c&&console.warn(`sendMessageStream() was unsuccessful. ${c}. Inspect response object for details.`)}}).catch(u=>{u.message!==Y&&console.error(u)}),g}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bt(t,n,e,s){return(await w(n,C.COUNT_TOKENS,t,!1,JSON.stringify(e),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kt(t,n,e,s){return(await w(n,C.EMBED_CONTENT,t,!1,JSON.stringify(e),s)).json()}async function Yt(t,n,e,s){const o=e.requests.map(a=>Object.assign(Object.assign({},a),{model:n}));return(await w(n,C.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:o}),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(n,e,s){this.apiKey=n,e.model.includes("/")?this.model=e.model:this.model=`models/${e.model}`,this.generationConfig=e.generationConfig||{},this.safetySettings=e.safetySettings||[],this.tools=e.tools,this.toolConfig=e.toolConfig,this.systemInstruction=Q(e.systemInstruction),this.cachedContent=e.cachedContent,this.requestOptions=s||{}}async generateContent(n){var e;const s=B(n);return z(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(e=this.cachedContent)===null||e===void 0?void 0:e.name},s),this.requestOptions)}async generateContentStream(n){var e;const s=B(n);return X(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(e=this.cachedContent)===null||e===void 0?void 0:e.name},s),this.requestOptions)}startChat(n){var e;return new Ft(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(e=this.cachedContent)===null||e===void 0?void 0:e.name},n),this.requestOptions)}async countTokens(n){const e=Dt(n,this.model);return Bt(this.apiKey,this.model,e,this.requestOptions)}async embedContent(n){const e=Ut(n);return Kt(this.apiKey,this.model,e,this.requestOptions)}async batchEmbedContents(n){return Yt(this.apiKey,this.model,n,this.requestOptions)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(n){this.apiKey=n}getGenerativeModel(n,e){if(!n.model)throw new h("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new j(this.apiKey,n,e)}getGenerativeModelFromCachedContent(n,e){if(!n.name)throw new v("Cached content must contain a `name` field.");if(!n.model)throw new v("Cached content must contain a `model` field.");const s={model:n.model,tools:n.tools,toolConfig:n.toolConfig,systemInstruction:n.systemInstruction,cachedContent:n};return new j(this.apiKey,s,e)}}const qt={class:"p-5"},Vt=l("h2",{class:"text-black text-2xl mx-1 font-extrabold relative inline-block stroke-current"},[rt("#️⃣ SHN-AI "),l("svg",{class:"absolute-bottom-0.5 w-full max-h-1.5",viewBox:"0 0 55 5",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none"},[l("path",{d:"M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002",strokeWidth:"2"})])],-1),Jt={class:"flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen"},Wt=ct('<div class="flex sm:items-center justify-between py-3 border-b-2 border-black"><div class="relative flex items-center space-x-4"><div class="relative"><span class="absolute text-green-500 right-0 bottom-0"><svg width="20" height="20"><circle cx="8" cy="8" r="8" fill="currentColor"></circle></svg></span><img src="'+J+'" alt="" class="w-10 sm:w-16 h-10 sm:h-16 rounded-full"></div><div class="flex flex-col leading-tight"><div class="text-2xl mt-1 flex items-center"><span class="text-gray-700 mr-3">0xandixmb-AI CHATBOT</span></div><span class="text-lg text-gray-600">Your Alternative friends</span></div></div></div>',1),Xt={id:"messages",class:"flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"},zt={class:"chat-message"},Qt={class:"flex items-end justify-end"},Zt={class:"flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end"},te={class:"px-4 py-2 rounded-lg inline-block rounded-br-none bg-black text-white"},ee=l("img",{src:"https://ui-avatars.com/api/?size=128&name=Justalinko&background=random&color=fff&rounded=true&bold=true",alt:"My profile",class:"w-6 h-6 rounded-full order-2"},null,-1),ne={key:0},se={key:1},oe={class:"border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0"},ie={class:"relative flex"},ae={class:"absolute right-0 items-center inset-y-0"},re={key:0,class:"font-bold"},ce={key:1,class:"font-bold"},le=l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"h-6 w-6 ml-2 transform rotate-90"},[l("path",{d:"M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"})],-1),ue=q({__name:"shn",setup(t){et({title:"SHN-AI - JUSTALINKO"});const n=A("Hello !"),e=A("Hello, can i help you today?"),s=A([]),o=A(!1),i=async()=>{o.value=!0;let a="AIzaSyCORWk7gFe9EdttBMNCVaLcQRU0F5du3O8";const f=await new jt(a).getGenerativeModel({model:"gemini-1.5-flash"}).generateContentStream(n.value);let g="";e.value="",s.value=[];for await(const u of f.stream){const c=u.text();g+=c,e.value+=c,s.value.push(c)}console.log(g),o.value=!1};return(a,r)=>{const d=_t;return p(),m("div",null,[l("section",qt,[Vt,l("div",Jt,[Wt,l("div",Xt,[l("div",zt,[l("div",Qt,[l("div",Zt,[l("div",null,[l("span",te,V(y(n)),1)])]),ee])]),y(s).length>0?(p(),m("div",ne,[(p(!0),m(nt,null,st(y(s),(f,g)=>(p(),m("div",{key:g,class:"mb-2"},[x(d,{aiResponse:f},null,8,["aiResponse"])]))),128))])):(p(),m("div",se,[x(d,{aiResponse:y(e)},null,8,["aiResponse"])]))]),l("div",oe,[l("div",ie,[ot(l("input",{type:"text",placeholder:"Write your message!",class:"w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 py-3 border-2 border-black","onUpdate:modelValue":r[0]||(r[0]=f=>at(n)?n.value=f:null)},null,512),[[it,y(n)]]),l("div",ae,[l("button",{type:"button",class:"inline-flex items-center justify-center px-2 py-2 transition duration-500 ease-in-out text-white bg-black hover:bg-gray-500 focus:outline-none",onClick:i},[y(o)?(p(),m("span",ce,"Replying...")):(p(),m("span",re,"Send")),le])])])])])])])}}});export{ue as default};
