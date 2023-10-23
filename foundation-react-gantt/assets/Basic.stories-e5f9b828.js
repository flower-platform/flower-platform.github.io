import{M as c,A as o}from"./chunk-HLWAVYOI-9e67f5e3.js";import{T as i}from"./timeline-b18108dd.js";import{p as l,e as t}from"./StorybookUtils-ad0167ac.js";import{j as e}from"./jsx-runtime-440fbad5.js";import{u as d}from"./index-7bfd511f.js";import"./iframe-f6d13d56.js";import"../sb-preview/runtime.js";import"./shim-6ae0d66e.js";import"./index-c4837b09.js";import"./_baseIsEqual-592aa6fc.js";import"./toString-1be86d39.js";import"./util-852c488d.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./isNativeReflectConstruct-26aa4442.js";import"./index-356e4a49.js";import"./Scrollbar-7f4972f2.js";import"./inheritsLoose-b7013776.js";import"./Segment-8082b898.js";function a(s){const n=Object.assign({h2:"h2",p:"p",code:"code",a:"a",strong:"strong",ul:"ul",li:"li",pre:"pre"},d(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Features/Basic/Doc",parameters:l}),`
`,e.jsx(n.h2,{id:"parent-component",children:"Parent component"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Timeline"})," is meant to have a parent w/ ",e.jsx(n.code,{children:"display: flex"}),". This way, it's height adapts to the one of the parent."]}),`
`,e.jsxs(n.h2,{id:"timeline-mandatory-props",children:[e.jsx(n.code,{children:"Timeline"}),": mandatory props"]}),`
`,e.jsx(o,{of:i,sort:"none",include:["startDate","endDate","items","groups"]}),`
`,e.jsx(n.h2,{id:"about-momentjs",children:"About moment.js"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Timeline"})," was originally designed to handle date/times w/ ",e.jsx(n.a,{href:"https://momentjs.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Moment.js"}),`,
a popular lib. However there are 2 drawbacks.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"#1"}),`: even the authors/maintainers of Moment.js don't
quite `,e.jsx(n.a,{href:"https://momentjs.com/docs/",target:"_blank",rel:"nofollow noopener noreferrer",children:"recommend"}),` it any more for use with new projects. The major
complaint seems to be the mutability of "moment" objects.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"#2"}),`: "moment" objects are not friendly with
`,e.jsx(n.a,{href:"https://redux.js.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Redux"}),`, a popular framework for state management. Many folks use Redux for
state management. And not being able to store the state that feeds the `,e.jsx(n.code,{children:"Timeline"}),` is a big drawback, since
additional conversions are necessary.`]}),`
`,e.jsxs(n.p,{children:["The property ",e.jsx(n.code,{children:"useMoment"})," to the rescue:"]}),`
`,e.jsx(o,{of:i,sort:"none",include:["useMoment"]}),`
`,e.jsxs(n.h2,{id:"extending-timeline--overriding-date-handling",children:["Extending ",e.jsx(n.code,{children:"Timeline"})," / overriding date handling"]}),`
`,e.jsxs(n.p,{children:["The default start/end fields for an ",e.jsx(n.strong,{children:"item"})," (segment) and for a ",e.jsx(n.strong,{children:"row layer"})," are ",e.jsx(n.code,{children:"start"})," and ",e.jsx(n.code,{children:"end"}),`. Every date manipulation (read or write) is done exclusively via these functions
(the links point to the `,e.jsx(n.a,{href:"?path=/docs/api-doc--page",children:"API Doc"}),")."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx("code",{children:e.jsx("a",{href:t("/classes/Timeline.html#getStartDate"),children:"Timeline.getStartDate()"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx("code",{children:e.jsx("a",{href:t("/classes/Timeline.html#getEndDate"),children:"Timeline.getEndDate()"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx("code",{children:e.jsx("a",{href:t("/classes/Timeline.html#getStartFromItem"),children:"Timeline.getStartFromItem(item)"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx("code",{children:e.jsx("a",{href:t("/classes/Timeline.html#getEndFromItem"),children:"Timeline.getEndFromItem(item)"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx("code",{children:e.jsx("a",{href:t("/classes/Timeline.html#setStartToItem"),children:"Timeline.setStartToItem(item, newDateAsMoment)"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx("code",{children:e.jsx("a",{href:t("/classes/Timeline.html#setEndToItem"),children:"Timeline.setEndToItem(item, newDateAsMoment)"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx("code",{children:e.jsx("a",{href:t("/classes/Timeline.html#getStartFromRowLayer"),children:"Timeline.getStartFromRowLayer(layer)"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx("code",{children:e.jsx("a",{href:t("/classes/Timeline.html#getEndFromRowLayer"),children:"Timeline.getEndFromRowLayer(layer)"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx("code",{children:e.jsx("a",{href:t("/classes/Timeline.html#setStartToRowLayer"),children:"Timeline.setStartToRowLayer(layer, newDateAsMoment)"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx("code",{children:e.jsx("a",{href:t("/classes/Timeline.html#setEndToRowLayer"),children:"Timeline.setEndToRowLayer(layer, newDateAsMoment)"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx("code",{children:e.jsx("a",{href:t("functions/convertDateToMoment.html"),children:"utils: convertDateToMoment(date, useMoment)"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx("code",{children:e.jsx("a",{href:t("functions/convertMomentToDateType.html"),children:"utils: convertMomentToDateType(dateAsMoment, useMoment)"})}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:["If you create your ",e.jsxs(n.strong,{children:["own subclass of ",e.jsx(n.code,{children:"Timeline"})]}),", you may override these functions. Some possible scenarios:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"the start/end fields are named differently for all the objects;"}),`
`,e.jsx(n.li,{children:"or maybe depending of the type of object, some are called in a way, and others in another way;"}),`
`,e.jsx(n.li,{children:"or for some objects such fields are calculated;"}),`
`,e.jsx(n.li,{children:"or the data type is not timestamp or moment, and an additional conversion is needed."}),`
`]}),`
`,e.jsxs(n.p,{children:["The scenarios above are examples for the case you are constrained to adapt the ",e.jsx(n.code,{children:"Timeline"}),` to the shape of the data. However, this is something that you should avoid. By default,
try to shape the data according to the defaults that `,e.jsx(n.code,{children:"Timeline"})," expects."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"IMPORTANT"}),": if you extend ",e.jsx(n.code,{children:"Timeline"})," and manipulate dates, please use always use the functions above. E.g."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// bad
const start = item.start;

// good
const start = this.getStartFromItem(item);
`})}),`
`,e.jsx(n.h2,{id:"providing-a-table-associated-with-the-gantt",children:"Providing a table associated with the gantt"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"IMPORTANT"}),": By default the gantt diagram displayes without any table associated."]}),`
`,e.jsxs(n.p,{children:["If you want to display a table (like in the majority of our examples) you should set the ",e.jsx("code",{children:"table"})," property:"]}),`
`,e.jsx(o,{of:i,sort:"none",include:["table"]})]})}function h(s={}){const{wrapper:n}=Object.assign({},d(),s.components);return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}const m=()=>{throw new Error("Docs-only story")};m.parameters={docsOnly:!0};const r={title:"Features/Basic/Doc",parameters:l,tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:h};const _=["__page"];export{_ as __namedExportsOrder,m as __page,r as default};
//# sourceMappingURL=Basic.stories-e5f9b828.js.map
