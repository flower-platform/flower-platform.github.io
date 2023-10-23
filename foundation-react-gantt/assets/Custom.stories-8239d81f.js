import{j as e}from"./jsx-runtime-b3cc59b7.js";import{b as h,r as n}from"./shim-e439b993.js";import{S as D}from"./Segment-1ca6e48e.js";import{d as m,s as a,a as x}from"./sampleData-ca030df0.js";import{P as E}from"./index-05549b61.js";import{T as c,I as b}from"./timeline-f7939cca.js";import{m as o}from"./main-c36d81bb.js";import"./inheritsLoose-b7013776.js";import"./moment-e9e012b5.js";import"./Scrollbar-5e9a6ca6.js";import"./iframe-d891a21f.js";import"../sb-preview/runtime.js";import"./util-fea827ce.js";import"./_commonjs-dynamic-modules-302442b1.js";class p extends c{renderMenuButton(){return this.props.toolbarDomElement?h.createPortal(super.renderMenuButton(),this.props.toolbarDomElement):super.renderMenuButton()}}p.propTypes={...c.propTypes,toolbarDomElement:E.object.isRequired};const i={renderCustomMenuButton:"RENDERE for custom menu button",rendererMenuButton:"RENDERER for extern menu button"},P={title:"Features/Custom"},r=()=>{const t=n.useRef(),[f,R]=n.useState(0);return n.useEffect(()=>{!f&&R(s=>s+1)}),e.jsxs(e.Fragment,{children:[e.jsx(D,{size:"mini",children:e.jsx("div",{ref:t,children:" "})}),e.jsx(p,{startDate:m("2018-09-20"),endDate:m("2018-09-21"),groups:a,items:x,table:e.jsx(o.Table,{width:100,children:e.jsx(o.Column,{columnKey:"title",width:100,header:e.jsx(o.DataCell,{children:"Title"}),cell:({rowIndex:s})=>e.jsx(o.DataCell,{children:s<a.length?a[s].title:""})})}),toolbarDomElement:t.current,itemRenderer:b})]})};r.parameters={scenarios:Object.keys(i).map(t=>i[t])};var u,l,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Custom.stories-8239d81f.js.map
