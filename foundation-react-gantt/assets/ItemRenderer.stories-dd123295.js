import{M as d,A as o}from"./chunk-HLWAVYOI-9e67f5e3.js";import{T as a,I as m}from"./timeline-b18108dd.js";import{e as c}from"./StorybookUtils-ad0167ac.js";import{j as e}from"./jsx-runtime-440fbad5.js";import{u as i}from"./index-7bfd511f.js";import"./iframe-f6d13d56.js";import"../sb-preview/runtime.js";import"./shim-6ae0d66e.js";import"./index-c4837b09.js";import"./_baseIsEqual-592aa6fc.js";import"./toString-1be86d39.js";import"./util-852c488d.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./isNativeReflectConstruct-26aa4442.js";import"./index-356e4a49.js";import"./Scrollbar-7f4972f2.js";import"./inheritsLoose-b7013776.js";import"./Segment-8082b898.js";function s(r){const t=Object.assign({h2:"h2",code:"code",p:"p",strong:"strong",ul:"ul",li:"li"},i(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Features/Item Renderer/Doc"}),`
`,e.jsx(t.h2,{id:"timeline",children:e.jsx(t.code,{children:"Timeline"})}),`
`,e.jsx(o,{of:a,sort:"none",include:["items","itemRenderer","itemRendererDefaultProps","itemHeight"]}),`
`,e.jsx(t.h2,{id:"itemrenderer",children:e.jsx(t.code,{children:"ItemRenderer"})}),`
`,e.jsxs(t.p,{children:["For each item, an ",e.jsx(t.code,{children:"ItemRenderer"})," component is rendered. It has the following interesting props:"]}),`
`,e.jsx(o,{of:m,sort:"none"}),`
`,e.jsxs(t.h2,{id:"extendingoverriding-itemrenderer",children:["Extending/overriding ",e.jsx(t.code,{children:"ItemRenderer"})]}),`
`,e.jsxs(t.p,{children:["If you create your ",e.jsxs(t.strong,{children:["own subclass of ",e.jsx(t.code,{children:"ItemRenderer"})]}),", you may override its functions (see ",e.jsx("a",{href:c("classes/ItemRenderer.html"),children:"ItemRenderer API Doc"}),"). Some possible scenarios:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"the fields are named differently for all the items;"}),`
`,e.jsx(t.li,{children:"or the background of the items should be a solid color, not be a gradient;"}),`
`,e.jsx(t.li,{children:"or maybe depending on the type of item, some should use a gradient, and some should not;"}),`
`,e.jsx(t.li,{children:"or the title of item is based on multiple fiels, i.e. the duration of the item should be shown in the title;"}),`
`,e.jsx(t.li,{children:"or maybe some items need different style or class name depending on the type of item."}),`
`]}),`
`,e.jsxs(t.p,{children:["The scenarios above are examples for the case you are constrained to adapt the ",e.jsx(t.code,{children:"ItemRenderer"}),` to the shape of the data. However, this is something that you should avoid. By default,
try to shape the data according to the properties that `,e.jsx(t.code,{children:"ItemRenderer"})," expects."]})]})}function l(r={}){const{wrapper:t}=Object.assign({},i(),r.components);return t?e.jsx(t,{...r,children:e.jsx(s,{...r})}):s(r)}const h=()=>{throw new Error("Docs-only story")};h.parameters={docsOnly:!0};const n={title:"Features/Item Renderer/Doc",tags:["stories-mdx"],includeStories:["__page"]};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:l};const O=["__page"];export{O as __namedExportsOrder,h as __page,n as default};
//# sourceMappingURL=ItemRenderer.stories-dd123295.js.map
