import{j as e}from"./jsx-runtime-440fbad5.js";import{a as h,r as n}from"./shim-6ae0d66e.js";import{S as D}from"./Segment-8082b898.js";import{d as m,s as a,a as x}from"./sampleData-e117e292.js";import{P as E}from"./index-a9d9d6ad.js";import{T as c,I as C}from"./timeline-b18108dd.js";import{m as o}from"./main-69be654f.js";import"./inheritsLoose-b7013776.js";import"./moment-fbc5633a.js";import"./Scrollbar-7f4972f2.js";import"./iframe-f6d13d56.js";import"../sb-preview/runtime.js";import"./util-852c488d.js";import"./_commonjs-dynamic-modules-302442b1.js";class p extends c{renderMenuButton(){return this.props.toolbarDomElement?h.createPortal(super.renderMenuButton(),this.props.toolbarDomElement):super.renderMenuButton()}}p.propTypes={...c.propTypes,toolbarDomElement:E.object.isRequired};const i={renderCustomMenuButton:"RENDERE for custom menu button",rendererMenuButton:"RENDERER for extern menu button"},P={title:"Features/Custom"},r=()=>{const t=n.useRef(),[f,R]=n.useState(0);return n.useEffect(()=>{!f&&R(s=>s+1)}),e.jsxs(e.Fragment,{children:[e.jsx(D,{size:"mini",children:e.jsx("div",{ref:t,children:" "})}),e.jsx(p,{startDate:m("2018-09-20"),endDate:m("2018-09-21"),groups:a,items:x,table:e.jsx(o.Table,{width:100,children:e.jsx(o.Column,{columnKey:"title",width:100,header:e.jsx(o.DataCell,{children:"Title"}),cell:({rowIndex:s})=>e.jsx(o.DataCell,{children:s<a.length?a[s].title:""})})}),toolbarDomElement:t.current,itemRenderer:C})]})};r.parameters={scenarios:Object.keys(i).map(t=>i[t])};var u,l,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const divRef = useRef<any>();
  const [value, setValue] = useState(0);
  // after first render when the div dom element is created for re-render 
  useEffect(() => {
    !value && setValue(value => value + 1);
  });
  return <>
    <Segment size="mini">
      <div ref={divRef}> </div>
    </Segment>
    <CustomTimeline startDate={d('2018-09-20')} endDate={d('2018-09-21')} groups={someHumanResources} items={someTasks} table={<Table width={100}>
                <Column columnKey="title" width={100} header={<DataCell>Title</DataCell>} cell={({
        rowIndex
      }) => <DataCell>{rowIndex < someHumanResources.length ? someHumanResources[rowIndex].title : ""}</DataCell>} />
            </Table>} toolbarDomElement={divRef.current} itemRenderer={ItemRenderer} />
  </>;
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const V=["CustomMenuButtonRenderer"];export{r as CustomMenuButtonRenderer,V as __namedExportsOrder,P as default};
//# sourceMappingURL=Custom.stories-4bf71e06.js.map
