var e=Object.defineProperty,l=Object.defineProperties,t=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(l,t,a)=>t in l?e(l,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[t]=a,d=(e,l)=>{for(var t in l||(l={}))n.call(l,t)&&s(e,t,l[t]);if(a)for(var t of a(l))o.call(l,t)&&s(e,t,l[t]);return e};import{_ as u,a as r,b as i,c}from"./index.1353e9aa.js";import{d as v,J as m,N as p,O as h,u as w,af as g,p as b,h as f,f as y,o as N,c as C,F as O,i as V,t as k,a as j,j as M,w as R,q as T,g as B,z as D,U as x}from"./vendor.43fb884e.js";var $=v({components:{VInput:u,VNumber:r,VGroup:i,VButton:c},props:{selected:{type:Object,default:()=>null}},setup(e){const l=m(),t=p(),a=h("statment"),n=w((()=>t.params.name)),o=w({get(){var t,a,o,s,d,u,r,i;const c=l.state.modifications[n.value].data.updates;return(null==(t=e.selected)?void 0:t.new)?null!=(u=null==(d=null==(o=l.state.modifications[n.value])?void 0:o.data.new[null==(a=e.selected)?void 0:a.row])?void 0:d[null==(s=e.selected)?void 0:s.column])?u:null:e.selected&&void 0!==(null==(r=null==c?void 0:c[e.selected.row])?void 0:r[e.selected.column])?null==(i=null==c?void 0:c[e.selected.row])?void 0:i[e.selected.column]:e.selected?e.selected.value:void 0},set(t){var a,o,s,d,u,r;l.commit((null==(a=e.selected)?void 0:a.new)?"setModifiedDataNew":"setModifiedDataUpdate",{tableName:n.value,columnName:null==(o=e.selected)?void 0:o.column,[(null==(s=e.selected)?void 0:s.new)?"newIndex":"rowNumber"]:null==(d=e.selected)?void 0:d.row,updateValue:(null==(u=e.selected)?void 0:u.value)!==t||(null==(r=e.selected)?void 0:r.new)?t:void 0})}}),s=w((()=>{var t,a,o;return void 0!==(null==(t=e.selected)?void 0:t.column)?null==(o=l.state.tables[n.value].columns)?void 0:o[null==(a=e.selected)?void 0:a.column]:void 0})),d=w((()=>{var e,l;const t=null==(l=null==(e=s.value)?void 0:e.type)?void 0:l.toUpperCase();return void 0===t?void 0:t.includes("INT")?"number":t.includes("CHAR")||t.includes("CLOB")||t.includes("TEXT")||t.includes("BLOB")||""===t?"input":t.includes("REAL")||t.includes("FLOA")||t.includes("DOUB")?"number":"input"})),u=w((()=>{const e=l.state.modifications[n.value].data;return e.new.length>0||Object.values(e.updates).some((e=>Object.values(e).some((e=>void 0!==e))))}));return{inputType:d,tableName:n,column:s,currentValue:o,tableHasChanges:u,revertTableChanges:()=>{l.commit("setModifiedData",{tableName:n.value,dataValue:{updates:{},new:[]}})},commit:async()=>{await l.dispatch("alterTableData",{tableName:n.value}),a&&g(a)},addRow:()=>{l.commit("setModifiedDataNew",{tableName:n.value,newIndex:l.state.modifications[n.value].data.new.length})}}}});const I=R();b("data-v-4ef0e450");const A={class:"data-editor"},_={key:1};f();const E=I(((e,l,t,a,n,o)=>{var s,d;const u=y("v-button");return N(),C("div",A,[e.selected?(N(),C(O,{key:0},[V("h1",null,k(e.tableName)+"."+k(e.selected.column)+" @ row "+k(e.selected.row),1),(N(),C(j(`v-${e.inputType}`),{modelValue:e.currentValue,"onUpdate:modelValue":l[1]||(l[1]=l=>e.currentValue=l),placeholder:null===e.currentValue?"null":"",variant:"primary"},null,8,["modelValue","placeholder"])),(null==(s=e.column)?void 0:s.notNull)?M("",!0):(N(),C(u,{key:0,text:"Set Null",variant:"primary",onClick:l[2]||(l[2]=l=>e.currentValue=null)})),(null==(d=e.selected)?void 0:d.new)?M("",!0):(N(),C(u,{key:1,text:"Revert changes",variant:"error",disabled:e.currentValue===e.selected.value,onClick:l[3]||(l[3]=l=>e.currentValue=void 0)},null,8,["disabled"]))],64)):(N(),C("h1",_," Select a cell to edit it ")),V(u,{class:"mt-auto mb-2",text:"Add row",variant:"primary",onClick:e.addRow},null,8,["onClick"]),V(u,{text:"Commit changes",variant:"success",disabled:!e.tableHasChanges,onClick:e.commit},null,8,["disabled","onClick"]),V(u,{text:"Disscard changes",variant:"error",disabled:!e.tableHasChanges,onClick:e.revertTableChanges},null,8,["disabled","onClick"])])}));$.render=E,$.__scopeId="data-v-4ef0e450";var S=v({props:{value:{type:[String,Number],default:null},header:{type:Boolean,default:!1},start:{type:Boolean,default:!1},end:{type:Boolean,default:!1},highlight:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},modified:{type:Boolean,default:!1}},setup:()=>({})});const U=R()(((e,l,t,a,n,o)=>(N(),C("div",{class:{header:e.header,start:e.start,end:e.end,highlight:e.highlight,selected:e.selected,modified:e.modified,null:null===e.value}},k(null===e.value?"null":e.value),3))));S.render=U,S.__scopeId="data-v-04397182";var L=v({components:{TableDataCell:S},props:{headers:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},selected:{type:Object,default:()=>null}},emits:["update:selected"],setup(e){const l=m(),t=p(),a=T({row:-1,col:-1}),n=w((()=>{var e;return null==(e=l.state.modifications[t.params.name].data)?void 0:e.updates})),o=w((()=>{var e,a;return null!=(a=null==(e=l.state.modifications[t.params.name])?void 0:e.data.new)?a:[]})),s=w((()=>[...e.rows.map((e=>({value:e,new:!1}))),...o.value.map((e=>({value:e,new:!0})))]));return{hovering:a,updates:n,newRows:o,allRows:s}}});const P=R()(((e,l,t,a,n,o)=>{const s=y("table-data-cell");return N(),C("div",{style:`--cols: ${e.headers.length+1}; --rows: ${e.rows.length+1}`,class:"table",onMouseleave:l[5]||(l[5]=l=>e.hovering=e.selected)},[V("div",{onMouseover:l[1]||(l[1]=B((l=>e.hovering=e.selected),["self"]))},null,32),(N(!0),C(O,null,D(e.headers,((t,a)=>(N(),C(s,{key:`header-${t}`,value:t,header:!0,highlight:e.hovering.col===a,class:"top",onMouseover:l[2]||(l[2]=l=>e.hovering=e.selected)},null,8,["value","highlight"])))),128)),(N(!0),C(O,null,D(e.allRows,(({value:t,new:a},n)=>(N(),C(O,{key:n},[V(s,{header:!0,value:a?"+"+(n-e.rows.length+1):n+1,highlight:e.hovering.row===n,class:"left col-start-1",onMouseover:l[3]||(l[3]=l=>e.hovering=e.selected)},null,8,["value","highlight"]),(N(!0),C(O,null,D(e.headers,((l,o)=>{var d,u,r,i,c,v,m;return N(),C(s,{key:`${n}-${o}`,start:0===o,end:o===e.headers.length-1,value:void 0!==(null==(u=null==(d=e.updates)?void 0:d[n])?void 0:u[l])?null==(i=null==(r=e.updates)?void 0:r[n])?void 0:i[l]:null!=(c=t[l])?c:null,highlight:e.hovering.col===o&&e.hovering.row===n,selected:e.selected.new===a&&e.selected.col===o&&e.selected.row===(a?n-e.rows.length:n),modified:void 0!==(null==(m=null==(v=e.updates)?void 0:v[n])?void 0:m[e.headers[o]])&&e.updates[n][e.headers[o]]!==t[l],onMouseover:l=>e.hovering={col:o,row:n},onMousedown:l=>e.$emit("update:selected",{new:a,col:o,row:n})},null,8,["start","end","value","highlight","selected","modified","onMouseover","onMousedown"])})),128))],64)))),128)),V("span",{class:"w-full",style:`grid-row: 1 / ${e.allRows.length+2}; grid-column: -1;`,onMouseover:l[4]||(l[4]=B((l=>e.hovering=e.selected),["self"]))},null,36)],36)}));L.render=P,L.__scopeId="data-v-e13993d6";var H=v({components:{TableDataTable:L,TableDataEditor:$},props:{name:{type:String,required:!0}},setup(e){const l=m(),t=w((()=>{var t;return null==(t=l.state.database)?void 0:t.connection.prepare(`SELECT * FROM [${e.name}]`)})),a=w((()=>{var e;return null==(e=t.value)?void 0:e.getColumnNames()})),n=w((()=>{if(t.value){const e=[];for(;t.value.step();){const l=t.value.getAsObject();e.push(l)}return t.value.reset(),e}}));x("statment",t);return{columnNames:a,dataRows:n,selected:T({row:-1,col:-1})}}});H.render=function(e,a,n,o,s,u){var r,i;const c=y("table-data-table"),v=y("table-data-editor");return N(),C(O,null,[V(c,{selected:e.selected,"onUpdate:selected":a[1]||(a[1]=l=>e.selected=l),headers:e.columnNames,rows:e.dataRows},null,8,["selected","headers","rows"]),V(v,{selected:-1!==e.selected.row&&-1!==e.selected.col?(m=d({},e.selected),p={value:null==(i=null==(r=e.dataRows)?void 0:r[e.selected.row])?void 0:i[e.columnNames[e.selected.col]],column:e.columnNames[e.selected.col]},l(m,t(p))):null},null,8,["selected"])],64);var m,p};export{H as default};
