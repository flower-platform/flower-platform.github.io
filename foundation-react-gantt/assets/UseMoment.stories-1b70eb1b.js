import{M as a,A as l}from"./chunk-HLWAVYOI-89effc94.js";import{T as m}from"./timeline-f7939cca.js";import{e as t}from"./StorybookUtils-ad0167ac.js";import{j as e}from"./jsx-runtime-b3cc59b7.js";import{u as i}from"./index-4a013e66.js";import"./iframe-d891a21f.js";import"../sb-preview/runtime.js";import"./shim-e439b993.js";import"./index-f1d0b849.js";import"./_baseAssignValue-80f6ee9e.js";import"./util-fea827ce.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./_baseSet-58a335be.js";import"./index-356e4a49.js";import"./Scrollbar-5e9a6ca6.js";import"./inheritsLoose-b7013776.js";import"./Segment-1ca6e48e.js";function o(r){const n=Object.assign({h2:"h2",p:"p",a:"a",strong:"strong",code:"code",ul:"ul",li:"li",blockquote:"blockquote"},i(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Internal/Use moment/Doc",parameters:{viewMode:"docs",previewTabs:{canvas:{hidden:!0}}}}),`
`,e.jsx(n.h2,{id:"use-moment",children:"Use moment"}),`
`,e.jsxs(n.p,{children:["The Timeline was originally designed to handle date/times w/ ",e.jsx(n.a,{href:"https://momentjs.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Moment.js"}),`,
a popular lib. However there are 2 drawbacks. `,e.jsx(n.strong,{children:"#1"}),`: even the authors/maintainers of Moment.js don't
quite `,e.jsx(n.a,{href:"https://momentjs.com/docs/",target:"_blank",rel:"nofollow noopener noreferrer",children:"recomment"}),` it any more for use with new projects. The major
complain seems to be the mutability of "moment" objects. `,e.jsx(n.strong,{children:"#2"}),`: "moment" objects are not friendly with
`,e.jsx(n.a,{href:"https://redux.js.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Redux"}),`, a popular framework for state management. Many folk use React for
state management. And not being able to store the state that feeds the Timeline is a big drawback, since
additional conversions are necessary.`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsxs(n.strong,{children:["property ",e.jsx(n.code,{children:"useMoment"})]})," to the rescue! If ",e.jsx(n.code,{children:"false"}),`, then you when you "talk" date/times to the Timeline, then you use
plain timestamps (i.e. number of millis, e.g. `,e.jsx(n.code,{children:"new Date().valueOf()"}),`). And this everywhere where
a date/time is needed (e.g. for an item, for global start/end, etc.). This is the `,e.jsx(n.strong,{children:"recommended"}),` way to
go, especially if you use Redux. But be aware that this property is by default `,e.jsx(n.code,{children:"true"}),`, in order
to maintain backward compatibility.`]}),`
`,e.jsx(n.p,{children:`NOTE: the Timeline still uses "moment" internally. And this because it was quicker to refactor this way.
This may change in the future, if we find reasons and time to refactor more.`}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(l,{of:m,include:["useMoment","startDate","endDate","items","rowLayers"]}),`
`,e.jsxs(n.p,{children:["Default date fields in an ",e.jsx(n.strong,{children:"item"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"start - moment object or date in milliseconds(number) - start of an item"}),`
`,e.jsx(n.li,{children:"end - moment object or date in milliseconds(number) - end of an item"}),`
`]}),`
`,e.jsxs(n.p,{children:["Default date fields in a ",e.jsx(n.strong,{children:"row layer"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"start - moment object or date in milliseconds(number) - start of a row layer"}),`
`,e.jsx(n.li,{children:"end - moment object or date in milliseconds(number) - end of a row layer"}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"WARNING!"}),`
It is `,e.jsx(n.strong,{children:"forbidden"}),` to manipulate the dates directly from props. In case you want to modify/override the code
that involve the dates you should read the documentation from `,e.jsx(n.a,{href:"?path=/docs/api-doc--page",children:"API Doc"})," for the following functions:"]}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx("a",{href:t("/classes/Timeline.html#getStartDate"),children:"Timeline.getStartDate()"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx("a",{href:t("/classes/Timeline.html#getEndDate"),children:"Timeline.getEndDate()"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx("a",{href:t("/classes/Timeline.html#getStartFromItem"),children:"Timeline.getStartFromItem(item)"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx("a",{href:t("/classes/Timeline.html#getEndFromItem"),children:"Timeline.getEndFromItem(item)"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx("a",{href:t("/classes/Timeline.html#setStartToItem"),children:"Timeline.setStartToItem(item, newDateAsMoment)"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx("a",{href:t("/classes/Timeline.html#setEndToItem"),children:"Timeline.setEndToItem(item, newDateAsMoment)"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx("a",{href:t("/classes/Timeline.html#getStartFromRowLayer"),children:"Timeline.getStartFromRowLayer(layer)"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx("a",{href:t("/classes/Timeline.html#getEndFromRowLayer"),children:"Timeline.getEndFromRowLayer(layer)"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx("a",{href:t("/classes/Timeline.html#setStartToRowLayer"),children:"Timeline.setStartToRowLayer(layer, newDateAsMoment)"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx("a",{href:t("/classes/Timeline.html#setEndToRowLayer"),children:"Timeline.setEndToRowLayer(layer, newDateAsMoment)"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx("a",{href:t("functions/convertDateToMoment.html"),children:"utils: convertDateToMoment(date, useMoment)"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx("a",{href:t("functions/convertMomentToDateType.html"),children:"utils: convertMomentToDateType(dateAsMoment, useMoment)"}),`
`]}),`
`]})]})}function d(r={}){const{wrapper:n}=Object.assign({},i(),r.components);return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}const c=()=>{throw new Error("Docs-only story")};c.parameters={docsOnly:!0};const s={title:"Internal/Use moment/Doc",parameters:{viewMode:"docs",previewTabs:{canvas:{hidden:!0}}},tags:["stories-mdx"],includeStories:["__page"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:d};const A=["__page"];export{A as __namedExportsOrder,c as __page,s as default};
//# sourceMappingURL=UseMoment.stories-1b70eb1b.js.map
