// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const e=async e=>{const t=await e.getFile();return t.handle=e,t};var t=async(t={})=>{const i={};t.mimeTypes?t.mimeTypes.map((e=>{i[e]=t.extensions||[]})):i["*/*"]=t.extensions||[];const s=await window.showOpenFilePicker({types:[{description:t.description||"",accept:i}],multiple:t.multiple||!1}),n=await Promise.all(s.map(e));return t.multiple?n:n[0]};export{t as default};
