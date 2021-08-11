var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,o=(a,t,n)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n,i=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&o(e,t,a[t]);if(n)for(var t of n(a))l.call(a,t)&&o(e,t,a[t]);return e},r=(e,n)=>a(e,t(n));import{v as d,n as u,d as c,c as m,r as p,a as v,w as f,o as b,b as g,t as h,e as y,f as w,g as $,C as V,p as _,h as k,i as C,j as N,m as I,k as S,P as x,M as T,l as E,q as O,s as q,u as A,x as L,F as D,y as M,z as R,A as B,B as j,I as z,D as P,X as F,E as J,G as K,H as U,J as G,K as W,L as H,N as Q,O as X,Q as Y,R as Z,S as ee,T as ae,U as te,V as ne,W as se,Y as le,Z as oe,_ as ie,$ as re,a0 as de,a1 as ue,a2 as ce,a3 as me,a4 as pe,a5 as ve,a6 as fe,a7 as be,a8 as ge,a9 as he}from"./vendor.26fa77d4.js";var ye=c({props:{tag:{type:String,default:"label"},variant:{type:String,default:"default"},size:{type:String,default:"md"},text:{type:String,default:""},hollow:{type:Boolean,default:!1}}});const we=f("data-v-e10061cc"),$e=we(((e,a,t,n,s,l)=>(b(),m(v(e.tag),{class:{[e.size]:!0,[e.variant]:!0,hollow:e.hollow}},{default:we((()=>[p(e.$slots,"default",{props:e.$props,attrs:e.$attrs},(()=>[g(h(e.text),1)]),!0)])),_:3},8,["class"]))));ye.render=$e,ye.__scopeId="data-v-e10061cc";var Ve=c({name:"VButton",components:{VLabel:ye}});const _e=f("data-v-40aaf7c1"),ke=_e(((e,a,t,n,s,l)=>{const o=w("v-label");return b(),m(o,{tag:"button",onKeyup:a[1]||(a[1]=y($((e=>e.target.click()),["exact"]),["enter"]))},{default:_e((({props:a})=>[p(e.$slots,"default",{},(()=>[g(h(a.text),1)]),{})])),_:3})}));Ve.render=ke,Ve.__scopeId="data-v-40aaf7c1";var Ce=c({name:"VCheckbox",components:{CheckIcon:V,VLabel:ye},inheritAttrs:!1,props:{labelAttrs:{type:Object,default:()=>({})},modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup:(e,{emit:a})=>({update:e=>{a("update:modelValue",e.target.checked)}})});const Ne=f("data-v-a5dde71e");_("data-v-a5dde71e");const Ie={class:"box"},Se={key:0};k();const xe=Ne(((e,a,t,n,s,l)=>{const o=w("check-icon"),i=w("v-label");return b(),m(i,I({class:{disabled:e.$attrs.disabled},size:e.$attrs.size,variant:e.$attrs.variant,text:e.$attrs.text,hollow:e.$attrs.hollow,tabindex:e.$attrs.disabled?-1:0},e.labelAttrs,{onKeyup:a[2]||(a[2]=y($((e=>e.target.click()),["exact"]),["enter"]))}),{default:Ne((({props:t})=>[C("input",{type:"checkbox",disabled:e.$attrs.disabled,checked:e.modelValue,onChange:a[1]||(a[1]=(...a)=>e.update&&e.update(...a))},null,40,["disabled","checked"]),C("span",Ie,[C(o,{class:"text-black"})]),t.text?(b(),m("span",Se,h(t.text),1)):N("",!0)])),_:1},16,["class","size","variant","text","hollow","tabindex"])}));Ce.render=xe,Ce.__scopeId="data-v-a5dde71e";var Te=c({name:"VInput",components:{VLabel:ye},props:{type:{type:String,default:"text"},modelValue:{type:String,default:null},hollow:{type:Boolean,default:!1}},emits:["update:modelValue"]});const Ee=f("data-v-d3c91e3a"),Oe=Ee(((e,a,t,n,s,l)=>{const o=w("v-label");return b(),m(o,I({tag:"input",type:e.type,value:e.modelValue},e.$attrs,{hollow:!0,onInput:a[1]||(a[1]=a=>e.$emit("update:modelValue",a.target.value))}),{default:Ee((()=>[])),_:1},16,["type","value"])}));Te.render=Oe,Te.__scopeId="data-v-d3c91e3a";var qe=c({name:"VGroup",props:{tag:{type:String,default:"div"},variant:{type:String,default:"default"},size:{type:String,default:"md"},hollow:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},vertical:{type:Boolean,default:!1},modelValue:{type:Object,default:()=>({})},modelValueMapping:{type:Array,default:()=>[]}},emits:["update:modelValue"],setup:(e,{slots:a,emit:t})=>()=>{var n;return S(e.tag,{class:{vertical:e.vertical}},null==(n=a.default)?void 0:n.call(a).map(((a,n)=>{var s,l,o,d,u,c;return S(a,{size:e.size,variant:null!=(l=null==(s=a.props)?void 0:s.variant)?l:e.variant,hollow:null!=(d=null==(o=a.props)?void 0:o.hollow)?d:e.hollow,disabled:e.disabled||(null==(u=a.props)?void 0:u.disabled),modelValue:e.modelValue[null!=(c=e.modelValueMapping[n])?c:n],"onUpdate:modelValue":void 0!==e.modelValue&&(a=>{var s;return t("update:modelValue",r(i({},e.modelValue),{[null!=(s=e.modelValueMapping[n])?s:n]:a}))})})})))}});qe.__scopeId="data-v-59d952d8";var Ae=c({components:{VInput:Te,VButton:Ve,VInputGroup:qe,PlusIcon:x,MinusIcon:T},props:{variant:{type:String,default:"default"},size:{type:String,default:"md"},hollow:{type:Boolean,default:!1},modelValue:{type:Number,default:1}},emits:["update:modelValue"],setup(e,{emit:a}){const t=E();return{add:e=>{var n;(null==(n=t.value)?void 0:n.$el)&&(0===e&&""===t.value.$el.value||(isNaN(+t.value.$el.value)?t.value.$el.value=t.value.$el.value.replace(/[^0-9](?<!^-)/,""):t.value.$el.value=+t.value.$el.value+e),a("update:modelValue",t.value.$el.value&&!isNaN(+t.value.$el.value)?+t.value.$el.value:null))},input:t}}});Ae.render=function(e,a,t,n,s,l){const o=w("v-input"),i=w("minus-icon"),r=w("v-button"),d=w("plus-icon"),u=w("v-input-group");return b(),m(u,null,{default:O((()=>[C(o,I({variant:e.variant,size:e.size},{ref:"input",value:e.modelValue,onInput:a[1]||(a[1]=a=>e.add(0)),onKeydown:[a[2]||(a[2]=y($((a=>e.add(1)),["prevent","exact"]),["up"])),a[3]||(a[3]=y($((a=>e.add(-1)),["prevent","exact"]),["down"]))]}),null,16,["value"]),C(r,I({variant:e.variant,size:e.size,hollow:e.hollow},{onClick:a[4]||(a[4]=a=>e.add(-1))}),{default:O((()=>[C(i)])),_:1},16),C(r,I({variant:e.variant,size:e.size,hollow:e.hollow},{onClick:a[5]||(a[5]=a=>e.add(1))}),{default:O((()=>[C(d)])),_:1},16)])),_:1})};var Le=c({name:"VSuggest",components:{VButton:Ve,VInput:Te,VGroup:qe},inheritAttrs:!1,props:{variant:{type:String,default:"default"},size:{type:String,default:"md"},hollow:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},modelValue:{type:String,default:null},options:{type:Array,required:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const t=E(),n=q((()=>{const a=e.options.map((a=>{var t;return[a,a.toLowerCase().indexOf(null==(t=e.modelValue)?void 0:t.toLowerCase())]})),t=a.filter((e=>e[1]>-1));return(t.length?t:a).sort(((e,a)=>e[1]>a[1]?1:e[1]<a[1]?-1:e[0]>a[0]?1:-1)).map((e=>e[0]))})),s=E(!1),l=E(-1),o={start(){s.value=!0},finish(){t.value&&t.value.$el.querySelector(".active")&&t.value.$el.querySelector(".active").scrollIntoView({behavior:"auto",block:"nearest",inline:"nearest"})},up(){o.start(),l.value>0?l.value-=1:l.value=n.value.length,o.finish()},down(){o.start(),l.value<n.value.length-1?l.value+=1:l.value=-1,o.finish()},end(){o.start(),l.value=n.value.length-1,o.finish()},home(){o.start(),l.value=0,o.finish()},choose(){var t;a("update:modelValue",null!=(t=n.value[l.value])?t:e.modelValue)}};return{filteredOptions:n,showDrop:s,suggestionSelected:l,suggestionNavigation:o}}});const De=f("data-v-0cff62ff"),Me=De(((e,a,t,n,s,l)=>{const o=w("v-input"),r=w("v-button"),d=w("v-group");return b(),m("div",{class:{wrapper:!0,[e.variant]:!0,[e.size]:!0,hollow:e.hollow}},[C(o,I(i({variant:e.variant,size:e.size,hollow:e.hollow},e.$attrs),{class:"rounded-within","model-value":e.modelValue,"onUpdate:modelValue":a[1]||(a[1]=a=>e.$emit("update:modelValue",a)),onFocus:a[2]||(a[2]=()=>e.showDrop=!0),onBlur:a[3]||(a[3]=()=>e.showDrop=!1),onInput:a[4]||(a[4]=()=>e.suggestionSelected=-1),onKeydown:[y($(e.suggestionNavigation.up,["prevent"]),["up"]),y($(e.suggestionNavigation.down,["prevent"]),["down"]),y($(e.suggestionNavigation.end,["prevent"]),["end"]),y($(e.suggestionNavigation.home,["prevent"]),["home"]),y($(e.suggestionNavigation.choose,["prevent"]),["enter"])]}),null,16,["model-value","onKeydown"]),A(C(d,I({variant:e.variant,size:e.size,hollow:e.hollow},{tag:"ul",class:{[e.size]:!0},vertical:""}),{default:De((()=>[(b(!0),m(D,null,M(e.filteredOptions,((a,t)=>(b(),m(r,{key:`${a} - ${t}`,class:{active:t==e.suggestionSelected},tag:"li",onMouseover:()=>e.suggestionSelected=t,onMousedown:()=>{e.suggestionSelected=t,e.suggestionNavigation.choose()}},{default:De((()=>[g(h(a),1)])),_:2},1032,["class","onMouseover","onMousedown"])))),128))])),_:1},16,["class"]),[[L,e.showDrop]])],2)}));Le.render=Me,Le.__scopeId="data-v-0cff62ff";var Re=c({name:"VField",components:{VCheckbox:Ce,VInput:Te,VNumber:Ae,VSuggest:Le},props:{label:{type:String,required:!0},required:{type:Boolean,default:!1},input:{type:String,default:"input"},inputProps:{type:Object,default:()=>({})},modelValue:{type:[Object,String,Boolean,Array,Number],default:null},issues:{type:Array,default:()=>[]},primary:{type:Boolean,default:!1}},emits:["update:modelValue"],setup:e=>({status:q((()=>e.issues.find((e=>"error"===e.type))?"error":e.issues.find((e=>"warning"===e.type))?"warning":e.issues.find((e=>"success"===e.type))?"success":e.primary?"primary":""))})});const Be=f("data-v-9741f0da");_("data-v-9741f0da");const je={class:"field"},ze={key:0,class:{"text-primary":!0}};k();const Pe=Be(((e,a,t,n,s,l)=>(b(),m("label",je,[C("span",null,[p(e.$slots,"label",{},(()=>[C("span",{class:{[e.status]:!0}},h(e.label),3),e.required?(b(),m("span",ze," *")):N("",!0)]),{})]),p(e.$slots,"default",{modelValue:e.modelValue,"onUpdate:modelValue":a[1]||(a[1]=a=>e.$emit("update:modelValue",a))},(()=>[(b(),m(v(`v-${e.input}`),I(e.inputProps,{"model-value":e.modelValue,variant:e.status,"onUpdate:modelValue":a[2]||(a[2]=a=>e.$emit("update:modelValue",a))}),null,16,["model-value","variant"]))]),!0),(b(!0),m(D,null,M(e.issues,((e,a)=>(b(),m("span",{key:e.message+a,class:[e.type,"issue"]},h(e.message),3)))),128))]))));Re.render=Pe,Re.__scopeId="data-v-9741f0da";var Fe=c({components:{VLabel:ye,CircleCheckIcon:R,AlertCircleIcon:B,CircleXIcon:j,InfoCircleIcon:z,MessageCircleIcon:P},props:{status:{type:String,default:"primary"},body:{type:String,required:!0}}});const Je=f("data-v-6b8c492c"),Ke=Je(((e,a,t,n,s,l)=>{const o=w("message-circle-icon"),i=w("circle-check-icon"),r=w("alert-circle-icon"),d=w("info-circle-icon"),u=w("circle-x-icon"),c=w("v-label");return b(),m(c,{class:"shadow-lg",tag:"div",variant:e.status},{default:Je((()=>["primary"===e.status?(b(),m(o,{key:0})):N("",!0),"success"===e.status?(b(),m(i,{key:1})):N("",!0),"warning"===e.status?(b(),m(r,{key:2})):N("",!0),"info"===e.status?(b(),m(d,{key:3})):N("",!0),"error"===e.status?(b(),m(u,{key:4})):N("",!0),C("span",null,h(e.body),1)])),_:1},8,["variant"])}));Fe.render=Ke,Fe.__scopeId="data-v-6b8c492c";var Ue=c({components:{VLabel:ye,VButton:Ve,VInput:Te,CircleCheckIcon:R,AlertCircleIcon:B,CircleXIcon:j,XIcon:F,MessageCircleIcon:P},props:{mode:{type:String,required:!0},header:{type:String,default:null},body:{type:String,default:null},negative:{type:String,default:null},positive:{type:String,default:null},positiveVariant:{type:String,default:null},mask:{type:Boolean,default:!1},initialPrompt:{type:String,default:""}},emits:["positive","negative","finish"],setup(e){const a=q((()=>"confirm"===e.mode?"warning":"prompt"===e.mode?"primary":e.mode)),t=E(e.initialPrompt),n=E(),s=E(),l=E();return J((()=>{var e,a;const t=null!=(a=null!=(e=n.value)?e:s.value)?a:l.value;t&&t.$el.focus()})),{variant:a,inputValue:t,inputRef:n,negataveRef:s,positiveRef:l}}});const Ge=f("data-v-90de8fe4");_("data-v-90de8fe4");const We=C("div",null,null,-1);k();const He=Ge(((e,a,t,n,s,l)=>{const o=w("circle-check-icon"),i=w("alert-circle-icon"),r=w("circle-x-icon"),d=w("message-circle-icon"),u=w("x-icon"),c=w("v-button"),v=w("v-input"),f=w("v-label");return b(),m("div",{class:{mask:e.mask},onClick:a[5]||(a[5]=$((a=>e.$emit("negative")||e.$emit("finish")),["self"])),onKeydown:a[6]||(a[6]=y((a=>e.$emit("negative")||e.$emit("finish")),["esc"]))},[C(f,{tag:"div",class:"dialog",variant:e.variant,hollow:""},{default:Ge((()=>{var t,n,s,l;return[C("header",null,["success"===e.mode?(b(),m(o,{key:0})):N("",!0),"confirm"===e.mode?(b(),m(i,{key:1})):N("",!0),"error"===e.mode?(b(),m(r,{key:2})):N("",!0),"prompt"===e.mode?(b(),m(d,{key:3})):N("",!0),C("span",null,h(null!=(t=e.header)?t:e.mode),1),C(c,{variant:"text",class:"close",onClick:a[1]||(a[1]=a=>e.$emit("negative")||e.$emit("finish"))},{default:Ge((()=>[C(u)])),_:1})]),C("main",null,[p(e.$slots,"body",{},(()=>[g(h(e.body),1)]),{}),"prompt"===e.mode?(b(),m(v,{key:0,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":a[2]||(a[2]=a=>e.inputValue=a),variant:"primary"},null,8,["modelValue"])):N("",!0)]),C("footer",null,[e.negative||["prompt","confirm"].includes(e.mode)?(b(),m(c,{key:0,ref:"negativeRef",text:null!=(n=e.negative)?n:"cancel",onClick:a[3]||(a[3]=a=>e.$emit("negative")||e.$emit("finish"))},null,8,["text"])):N("",!0),C(c,{ref:"positive",variant:null!=(s=e.positiveVariant)?s:["confirm","prompt"].includes(e.mode)?"success":e.mode,class:"col-start-2",text:null!=(l=e.positive)?l:["prompt","confirm"].includes(e.mode)?"Ok":"Got it",onClick:a[4]||(a[4]=a=>e.$emit("positive",e.inputValue)||e.$emit("finish"))},null,8,["variant","text"])])]})),_:3},8,["variant"]),We],34)}));Ue.render=He,Ue.__scopeId="data-v-90de8fe4";var Qe=c({components:{VButton:Ve,PlusIcon:x},setup(){const e=K(),a=q((()=>e.state.modifications));return{open:E(!0),tables:a}}});const Xe=f("data-v-0dac82a7");_("data-v-0dac82a7");const Ye=C("span",null," Tables ",-1),Ze={key:0};k();const ea=Xe(((e,a,t,n,s,l)=>{const o=w("plus-icon"),i=w("v-button"),r=w("router-link");return b(),m("aside",{class:{closed:!e.open}},[C("main",null,[C("header",null,[Ye,C(i,{disabled:!e.$store.state.database,variant:"text",size:"sm",onClick:a[1]||(a[1]=()=>e.$store.dispatch("createModification").then((a=>e.$router.push(`/table/${a}`))))},{default:Xe((()=>[C(o)])),_:1},8,["disabled"])]),(b(!0),m(D,null,M(e.tables,((e,a)=>(b(),m(r,{key:a,to:{name:"Table",params:{name:a}}},{default:Xe((()=>[g(h(a)+" ",1),(null==e?void 0:e.new)?(b(),m("span",Ze,"(not real)")):N("",!0)])),_:2},1032,["to"])))),128))]),C("div",{class:{toggle:!0,open:!e.open},onClick:a[2]||(a[2]=a=>e.open=!e.open)},null,2)],2)}));Qe.render=ea,Qe.__scopeId="data-v-0dac82a7";var aa=c({components:{separator:()=>S("span",{class:"text-2xl text-primary"},"/"),VLabel:ye,VButton:Ve},setup(){const e=K(),a=U(),t=G(),n=W("dialog");return{databaseName:q((()=>{var a;return null==(a=e.state.database)?void 0:a.name})),renameDatabase:function(){n&&n.prompt("",{title:"Rename database",initialPrompt:e.state.database.name,onPositive:n=>{e.commit("setDatabase",r(i({},e.state.database),{name:n})),a.replace(t.path)}})}}}});const ta=f("data-v-cf13464c")(((e,a,t,n,s,l)=>{const o=w("v-button"),i=w("separator");return b(),m("div",null,[e.databaseName?(b(),m(D,{key:0},[C(o,{variant:"text",size:"sm",text:e.databaseName,onClick:e.renameDatabase},null,8,["text","onClick"]),C(i)],64)):N("",!0),C(o,{variant:"text",size:"sm",text:e.$route.name},null,8,["text"]),"Table"===e.$route.name?(b(),m(D,{key:1},[C(i),C(o,{variant:"text",size:"sm",text:e.$route.params.name},null,8,["text"])],64)):N("",!0)])}));aa.render=ta,aa.__scopeId="data-v-cf13464c";var na=c({components:{VButton:Ve,DatabaseImportIcon:H,DatabaseIcon:Q,DatabaseExportIcon:X,InfoCircleIcon:z,TheBreadcrumbs:aa},setup(){const e=K(),a=W("dialog");return{sqlJsReady:q((()=>!!e.state.sqlJs)),databaseReady:q((()=>!!e.state.sqlJs&&!!e.state.database)),openDatabase:()=>e.dispatch("openDatabase"),newDatabase:()=>e.dispatch("createDatabase"),saveDatabase:()=>e.dispatch("saveDatabase"),showInfo:function(){if(a&&e.state.sqlJs){const t=new e.state.sqlJs.Database({}).exec("SELECT sqlite_version()")[0].values[0][0];a.success(`SQLite version v${t}`,{header:"SQLite Version"})}}}}});const sa=f("data-v-2d3c347c");_("data-v-2d3c347c");const la=C("img",{src:"/assets/logo.9bfa92a2.png",class:"p-1.5"},null,-1),oa=C("span",null,"Web Edit DB",-1),ia={class:"controlls"},ra=C("span",null," New ",-1),da=C("span",null," Open ",-1),ua=C("span",null," save ",-1);k();const ca=sa(((e,a,t,n,s,l)=>{const o=w("router-link"),i=w("the-breadcrumbs"),r=w("database-icon"),d=w("v-button"),u=w("database-import-icon"),c=w("database-export-icon"),p=w("info-circle-icon");return b(),m("nav",null,[C(o,{to:"/",custom:""},{default:sa((({navigate:e})=>[C("h1",{onClick:e},[la,oa],8,["onClick"])])),_:1}),C(i),C("div",ia,[C(d,{disabled:!e.sqlJsReady,variant:"warning",hollow:"",onClick:e.newDatabase},{default:sa((()=>[C(r,{class:"p-0.5"}),ra])),_:1},8,["disabled","onClick"]),C(d,{disabled:!e.sqlJsReady,variant:"warning",hollow:"",onClick:e.openDatabase},{default:sa((()=>[C(u,{class:"p-0.5"}),da])),_:1},8,["disabled","onClick"]),C(d,{disabled:!e.databaseReady,variant:"primary",onClick:e.saveDatabase},{default:sa((()=>[C(c,{class:"p-0.5"}),ua])),_:1},8,["disabled","onClick"]),C(d,{variant:"text",onClick:e.showInfo},{default:sa((()=>[C(p)])),_:1},8,["onClick"])])])}));na.render=ca,na.__scopeId="data-v-2d3c347c";const ma=e=>new Promise((a=>setTimeout(a,e)));var pa=c({components:{TheSide:Qe,TheNavigation:na,VMessage:Fe,VDialog:Ue},setup(){const e=K(),a=Y({ref:void 0,percentages:{},async start(e,{limit:a,current:t}={}){this.percentages[e]={limit:a||80,current:t||0}},async finish(e){e in this.percentages||await this.start(e),this.ref&&1===Object.values(this.percentages).length?(this.percentages[e].current=100,await ma(400),this.ref.style.transition="none",delete this.percentages[e],await ma(40),this.ref.style.transition=""):delete this.percentages[e]},async error(e){this.ref&&(this.percentages[e].current<20&&await ma(1e3),this.ref.classList.add("error"),await this.finish(e),this.ref.classList.remove("error"))},get percentage(){return te(Object.values(this.percentages).map((e=>e.current)))||0},increment(){for(const e in this.percentages){const a=this.percentages[e];a.current<a.limit&&a.current++}}});Z("loading",a);const t=setInterval((()=>a.increment()),210);ee((()=>clearInterval(t)));const n=Y({ref:void 0,messages:[],async remove(e){this.messages=this.messages.filter((a=>a.id!==e))},async push(e){var a,t;const n=(null!=(t=null==(a=this.messages[this.messages.length-1])?void 0:a.id)?t:-1)+1;this.messages.push(r(i({},e),{id:n})),setTimeout((()=>this.remove(n)),3e3)},async primary(e){this.push({body:e,status:"primary"})},async success(e){this.push({body:e,status:"success"})},async error(e){this.push({body:e,status:"error"})},async warning(e){this.push({body:e,status:"error"})}});Z("message",n);const s=Y({dialogs:[],remove(e){this.dialogs=this.dialogs.filter((a=>a.id!==e))},async confirm(e,a){var t,n;const s=(null!=(n=null==(t=this.dialogs[this.dialogs.length-1])?void 0:t.id)?n:-1)+1;this.dialogs.push(r(i({id:s,body:e},a),{mode:"confirm",onFinish:()=>this.remove(s)}))},async success(e,a){var t,n;const s=(null!=(n=null==(t=this.dialogs[this.dialogs.length-1])?void 0:t.id)?n:-1)+1;this.dialogs.push(r(i({id:s,body:e},a),{mode:"success",onFinish:()=>this.remove(s)}))},async error(e,a){var t,n;const s=(null!=(n=null==(t=this.dialogs[this.dialogs.length-1])?void 0:t.id)?n:-1)+1;this.dialogs.push(r(i({id:s,body:e},a),{mode:"error",onFinish:()=>this.remove(s)}))},async prompt(e,a){var t,n;const s=(null!=(n=null==(t=this.dialogs[this.dialogs.length-1])?void 0:t.id)?n:-1)+1;this.dialogs.push(r(i({id:s,body:e},a),{mode:"prompt",onFinish:()=>this.remove(s)}))}});return Z("dialog",s),J((()=>{window.$loading=a,window.$message=n,window.$dialog=s})),a.start("sql.js"),ae({locateFile:e=>`/assets/${e}`}).then((t=>{e.commit("setSqlJs",t),a.finish("sql.js")})).catch((e=>{a.error("sql.js"),console.error("Falied to load the database engine.\n          Please refresh the page."),console.error(e)})),{loading:a,message:n,dialog:s}}});const va={id:"dialog-manager"};pa.render=function(e,a,t,n,s,l){const o=w("the-navigation"),d=w("the-side"),u=w("router-view"),c=w("v-message"),p=w("v-dialog");return b(),m(D,null,[C(o),C(d),C("main",null,[C(u,{key:e.$route.path})]),C("div",{id:"loading-bar",ref:a=>e.loading.ref=a,style:{maxWidth:`${e.loading.percentage}%`}},null,4),(b(),m(ne,{to:"body"},[C(se,{id:"message-manager",tag:"div",name:"message-manager"},{default:O((()=>[(b(!0),m(D,null,M(e.message.messages,(e=>(b(),m(c,I({key:e.id},r(i({},e),{id:void 0})),null,16)))),128))])),_:1})])),(b(),m(ne,{to:"body"},[C("div",va,[(b(!0),m(D,null,M(e.dialog.dialogs,((a,t)=>A((b(),m(p,I({key:a.id},r(i({},a),{id:void 0,body:"function"==typeof a.body?void 0:a.body}),{mask:!0}),le({_:2},["function"==typeof a.body?{name:"body",fn:O((()=>[(b(),m(v(a.body)))]))}:void 0]),1040)),[[L,t===e.dialog.dialogs.length-1]]))),128))])]))],64)};let fa;const ba={},ga=function(e,a){if(!a||0===a.length)return e();if(void 0===fa){const e=document.createElement("link").relList;fa=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(a.map((e=>{if((e=`/${e}`)in ba)return;ba[e]=!0;const a=e.endsWith(".css"),t=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${t}`))return;const n=document.createElement("link");return n.rel=a?"stylesheet":fa,a||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),a?new Promise(((e,a)=>{n.addEventListener("load",e),n.addEventListener("error",a)})):void 0}))).then((()=>e()))};var ha=c({name:"Home"});const ya={class:"home"},wa=C("img",{alt:"Vue logo",src:"/assets/logo.9bfa92a2.png"},null,-1);ha.render=function(e,a,t,n,s,l){return b(),m("div",ya,[wa])};const $a=[".db",".sqlite",".sqlite3"];function Va(e){if(!ka.state.database)return[];"string"==typeof e&&(e=ka.state.database.connection.prepare(e));const a=[];for(;e.step();)a.push(e.getAsObject());return a}function _a({name:e,type:a,min:t,max:n,unique:s,primaryKey:l,notNull:o,default:i,foreign:r}){(t||n)&&(a+=t&&n?`(${t}, ${n})`:`(${n||t})`);const d=[`[${e}] ${a}`];return l&&d.push("PRIMARY KEY"),s&&d.push("UNIQUE"),o&&d.push("NOT NULL"),i.enabled&&i.value.length>0&&d.push(`DEFAULT ${i.value}`),r.column&&r.table&&d.push(`REFERENCES ${r.table}(${r.column})`),d.join(" ")}var ka=fe({state:{sqljs:null,database:null,tables:{},modifications:{}},mutations:{setSqlJs(e,a){e.sqlJs=a},setDatabase(e,a){e.database=a},setTables(e,a){e.tables=ve(a)},setColumns(e,{tableName:a,columns:t}){e.tables[a]&&(e.tables[a].columns=ve(t))},setModifications(e,a){e.modifications=ve(a)},setModification(e,{tableName:a,modified:t}){e.modifications[a]=ve(t)},setModifiedColumn(e,{tableName:a,columnName:t,column:n}){e.modifications[a].columns[t]=ve(n)}},actions:{async createDatabase({commit:e,state:a}){a.sqlJs&&await window.$dialog.prompt("Enter the name for your database",{header:"Database name",initialPrompt:"no-name.db",onPositive:t=>{var n;t&&a.sqlJs&&(e("setDatabase",{name:t,connection:new a.sqlJs.Database}),e("setModifications",{}),window.$message.success(`Created new database '${null==(n=a.database)?void 0:n.name}'`),Na.push("/"))}})},async openDatabase({commit:e,state:a,dispatch:t}){var n;if(a.sqlJs){const s=await oe({mimeTypes:["application/vnd.sqlite3"],extensions:$a}),l=new Uint8Array(await s.arrayBuffer());e("setDatabase",{connection:new a.sqlJs.Database(l),name:s.name,handle:s.handle}),t("queryTables"),window.$message.success(`Opened database '${null==(n=a.database)?void 0:n.name}'`),Na.push("/")}},async saveDatabase({state:e,commit:a}){if(e.database){const t=new File([e.database.connection.export()],e.database.name,{type:"application/vnd.sqlite3"}),n=await ie(t,{extensions:$a,fileName:t.name},e.database.handle,!1);a("setDatabase",r(i({},e.database),{handle:n})),window.$message.success("Saved successfully")}},async queryTables({state:e,commit:a}){if(!e.database)return;const t=Va(e.database.connection.prepare("\n    SELECT name\n        FROM sqlite_master\n      WHERE type = 'table' AND\n            name NOT LIKE 'sqlite_%'\n      ORDER BY 1\n    ")).reduce(((e,{name:a})=>r(i({},e),{[a]:{columns:{},new:!1}})),{});a("setTables",t),a("setModifications",i(i({},t),re(e.modifications,((e,a)=>a in t||e.new))))},async queryColumns({state:e,commit:a},t){var n;if(!e.database)return;const s=Va(e.database.connection.prepare(`\n    SELECT info.name AS name,\n           info.type AS type,\n           info.[notnull] AS [notNull],\n           info.dflt_value AS [default],\n           info.pk AS primaryKey,\n           fk_list.[table] AS foreignTable,\n           fk_list.[to] AS foreignColumn,\n           unique_info.name = info.name as [unique]\n      FROM pragma_table_info('${t}') AS info\n           LEFT JOIN\n           pragma_foreign_key_list('${t}') AS fk_list ON fk_list.[from] = info.name\n           LEFT JOIN\n           (\n               SELECT index_info.name\n                 FROM pragma_index_list('${t}') AS index_list\n                      JOIN\n                      pragma_index_info(index_list.name) AS index_info\n           )\n           AS unique_info ON unique_info.name = info.name;\n\n    `)).map((e=>{var a,t,n;const{type:s,max:l,min:o}=null!=(t=null==(a=e.type.match(/^(?<type>[a-zA-Z]+)(\(((?<min>\d+), )?(?<max>\d*?)\)$)?/))?void 0:a.groups)?t:{type:null,max:null,min:null};return{name:e.name,type:s,min:o?parseInt(o):null,max:l?parseInt(l):null,unique:!!e.unique,primaryKey:!!e.primaryKey,notNull:!!e.notNull,default:{value:null!=(n=e.default)?n:"",enabled:!!e.default},foreign:{table:e.foreignTable,column:e.foreignColumn},new:!1,drop:!1}})).reduce(((e,a)=>r(i({},e),{[a.name]:a})),{});a("setColumns",{tableName:t,columns:s});a("setModifications",r(i({},e.modifications),{[t]:{columns:i(i({},s),de(null==(n=e.modifications[t])?void 0:n.columns,((e,a,t)=>a.drop?e:r(i({},e),{[a.name in s?a.name:t]:r(i({},a),{default:r(i({},a.default),{value:a.default.enabled?a.default.value:""}),new:!(t in s||a.name in s)})})),{})),new:!1}}))},async addModifiedColumn({commit:e,state:a},{tableName:t,columnName:n,column:s}){if(void 0===n){let e=0;do{e++}while(Object.keys(a.modifications[t].columns).includes(`Column ${e}`));n=`Column ${e}`}e("setModification",{tableName:t,modified:r(i({},a.modifications[t]),{columns:r(i({},a.modifications[t].columns),{[n]:i({name:n,type:"STRING",min:null,max:null,unique:!1,primaryKey:!1,notNull:!1,default:{value:null,enabled:!1},foreign:{table:null,column:null},new:!0,drop:!1},s)})})})},async revertModifiedColumn({commit:e,state:a},{tableName:t,columnName:n}){e("setModifiedColumn",{tableName:t,columnName:n,column:a.tables[t].columns[n]})},async createModification({commit:e,state:a},t){let n=0;if(void 0===t)do{n++,t=`Table${n}`}while(t in a.modifications);return e("setModification",{tableName:t,modified:{columns:{},new:!0}}),t},async renameModification({commit:e,state:a},{tableName:t,newTableName:n}){e("setModifications",de(a.modifications,((e,a,s)=>r(i({},e),{[s===t?n:s]:a})),{}))},async alterTable({state:e,dispatch:a,commit:t},{tableName:n,newTableName:s,columns:l}){if(!e.database)return;void 0===l&&(l=e.modifications[n].columns);const o=Object.entries(l).filter((([,e])=>!e.drop&&!e.new)).map((([e,a])=>({old:e,new:a.name}))),d=`${n}__red_sqluirrel`,u=[];u.push("BEGIN TRANSACTION;"),u.push(`CREATE TABLE [${d}] AS SELECT * FROM [${n}];`),u.push(`DROP TABLE [${n}];`),u.push(`CREATE TABLE [${null!=s?s:n}] (\n      ${Object.values(l).filter((e=>!e.drop)).map(_a).join(", ")}\n    );`),o.length&&u.push(`INSERT INTO [${null!=s?s:n}] (\n        ${o.map((e=>`[${e.new}]`)).join(", ")}\n      ) SELECT ${o.map((e=>`[${e.old}]`)).join(", ")}\n          FROM ${d};`),u.push(`DROP TABLE [${d}]`);try{e.database.connection.run(u.join("\n\n")),e.database.connection.run("COMMIT;")}catch(c){console.log("has error",c),e.database.connection.run("ROLLBACK;")}s&&t("setModifications",r(i({},ue(e.modifications,[n])),{[s]:e.modifications[n]})),await a("queryTables"),s||await a("queryColumns",n)},async createTable({state:e,dispatch:a,commit:t},{tableName:n,columns:s}){if(!e.database)return;void 0===s&&(s=e.modifications[n].columns);const l=[];l.push("BEGIN TRANSACTION;"),l.push(`CREATE TABLE [${n}] (\n      ${Object.values(s).filter((e=>!e.drop)).map(_a).join(", ")}\n    );`);try{e.database.connection.run(l.join("\n\n")),e.database.connection.run("COMMIT;")}catch(o){console.log("has error",o),e.database.connection.run("ROLLBACK;")}await a("queryTables"),await t("setModification",{tableName:n,modified:r(i({},e.modifications[n]),{new:!(n in e.tables)})}),await a("queryColumns",n)},async renameTable({dispatch:e,state:a},{tableName:t,newTableName:n}){t!==n&&await e("alterTable",{tableName:t,newTableName:n,columns:a.tables[t].columns})},async dropTable({state:e,dispatch:a},t){e.database&&(e.database.connection.run(`DROP TABLE ${t}`),await a("queryTables"))}},getters:{tableNames(e){if(e.database)return Object.keys(e.tables)},tableModified:(e,a)=>t=>{var n,s,l;return ce(null==(n=e.modifications[t])?void 0:n.columns).some((e=>a.columnModifications(t,e)))||!me(ce(null==(s=e.tables[t])?void 0:s.columns),ce(null==(l=e.modifications[t])?void 0:l.columns))},columnModifications:e=>(a,t)=>{var n;const s=null==(n=e.modifications[a])?void 0:n.columns[t];if((null==s?void 0:s.new)||(null==s?void 0:s.drop))return!0;{const n=pe(e.tables[a],["columns",t],s);return!me(r(i({},s),{default:{enabled:null==s?void 0:s.default.enabled,value:(null==s?void 0:s.default.enabled)?s.default.value:null}}),r(i({},n),{default:{enabled:null==n?void 0:n.default.enabled,value:(null==n?void 0:n.default.enabled)?n.default.value:null}}))}}}});const Ca=[{path:"/",name:"Home",component:ha},{path:"/about",name:"About",component:()=>ga((()=>import("./About.1844b97f.js")),["assets/About.1844b97f.js","assets/vendor.26fa77d4.js"])},{path:"/table/:name",name:"Table",component:()=>ga((()=>import("./Columns.67459ffd.js")),["assets/Columns.67459ffd.js","assets/Columns.c1c1b11e.css","assets/vendor.26fa77d4.js"]),meta:{title:()=>`Table - ${Na.currentRoute.value.params.name}`},props:!0}],Na=be({history:ge("/"),routes:Ca});let Ia=!1;window.addEventListener("keydown",(e=>Ia="Backspace"===e.key)),window.addEventListener("keyup",(()=>Ia=!1)),Na.beforeEach(((e,a,t)=>{Ia?t(!1):t(),Ia=!1})),Na.afterEach((e=>{const a=[];ka.state.database&&a.push(ka.state.database.name);const t="function"==typeof e.meta.title?e.meta.title():e.meta.title;a.push(t||e.name),document.title=`${a.join(" / ")} - Web Edit DB`})),function(e={}){const{immediate:a=!1,onNeedRefresh:t,onOfflineReady:n}=e;let s,l;if("serviceWorker"in navigator){s=new d("/sw.js",{scope:"/"}),s.addEventListener("activated",(e=>{e.isUpdate||null==n||n()}));{const e=()=>{null==t||t()};s.addEventListener("waiting",e),s.addEventListener("externalwaiting",e)}s.register({immediate:a}).then((e=>l=e))}}({});const Sa=he(pa);Sa.use(ka),Sa.use(Na),Sa.mount("#app");export{Te as _,qe as a,Ce as b,Re as c,Ve as d,Le as e,ka as s};