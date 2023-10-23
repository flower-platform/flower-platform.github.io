import{j as e}from"./jsx-runtime-440fbad5.js";import{r as m}from"./shim-6ae0d66e.js";import{I as D}from"./Segment-8082b898.js";import{c as g,T as d,C as j}from"./timeline-b18108dd.js";import{d as n,m as s,a as C}from"./sampleData-e117e292.js";import{m as a}from"./main-69be654f.js";import{A as w}from"./index-793f5c9e.js";import"./inheritsLoose-b7013776.js";import"./Scrollbar-7f4972f2.js";import"./iframe-f6d13d56.js";import"../sb-preview/runtime.js";import"./util-852c488d.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./moment-fbc5633a.js";import"./isNativeReflectConstruct-26aa4442.js";import"./reactNode-8e0fde82.js";import"./toString-1be86d39.js";const c={propertyTable:"PROPERTY table",propertyOnTableResize:"PROOPERTY onTableResize"},R=g("Table",{row:""}),k=260,L={title:"Features/Table",component:d},r=()=>e.jsx(m.Fragment,{children:e.jsx(d,{startDate:n("2018-09-20"),endDate:n("2018-09-21"),groups:s,items:C})});r.parameters={scenarios:[c.propertyTable]};const i={color:"#000",fontSize:"12px",lineHeight:"1",background:"#CCFFEE",border:"none"},l=()=>{const[o,y]=m.useState(k);return e.jsxs(m.Fragment,{children:[e.jsx(w,{message:e.jsxs("span",{children:[" Table width: ",o," "]})}),e.jsx(d,{startDate:n("2018-09-20"),endDate:n("2018-09-21"),groups:s,items:C,onTableResize:t=>{y(t)},table:e.jsxs(a.Table,{rowHeight:50,width:o,isColumnResizing:!0,rowAttributesGetter:t=>({"data-testid":R.row+"_"+t}),children:[e.jsx(a.Column,{columnKey:0,width:100,header:e.jsx(a.DataCell,{style:i,children:"Title"}),cell:({rowIndex:t})=>e.jsx(a.DataCell,{children:t<s.length?s[t].title:""})},0),e.jsx(a.Column,{columnKey:1,width:60,header:e.jsxs(a.DataCell,{style:i,children:[e.jsx(D,{type:"check-circle"})," ",e.jsx("span",{children:"Custom check"})]}),cell:({rowIndex:t})=>e.jsx(a.DataCell,{children:t<s.length?e.jsx(j,{}):""})},1),e.jsx(a.Column,{columnKey:2,width:100,header:e.jsx(a.DataCell,{style:i,children:"Job"}),cell:({rowIndex:t})=>e.jsx(a.DataCell,{children:t<s.length?s[t].job:""})},2)]})})]})};l.parameters={scenarios:[...Object.keys(c).map(o=>c[o])]};var u,h,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <Fragment>
            <Timeline startDate={d('2018-09-20')} endDate={d('2018-09-21')} groups={manyHumanResources} items={someTasks} />
        </Fragment>;
}`,...(p=(h=r.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var b,T,x;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [tableWidth, setTableWidth] = useState<number>(DEMO_TABLE_WIDTH);
  return <Fragment>
            <Alert message={<span> Table width: {tableWidth} </span>} />
            <Timeline startDate={d('2018-09-20')} endDate={d('2018-09-21')} groups={manyHumanResources} items={someTasks} onTableResize={size => {
      setTableWidth(size);
    }} table={<Table rowHeight={50} width={tableWidth} isColumnResizing={true} rowAttributesGetter={index => {
      return {
        "data-testid": tableTestIds.row + "_" + index
      };
    }}>
                            <Column key={0} columnKey={0} width={100} header={<DataCell style={headerStyle}>Title</DataCell>} cell={({
        rowIndex
      }) => <DataCell>
                                                        {rowIndex < manyHumanResources.length ? manyHumanResources[rowIndex].title : ""}
                                                    </DataCell>} />
                            <Column key={1} columnKey={1} width={60} header={<DataCell style={headerStyle}><Icon type="check-circle" /> <span>Custom check</span></DataCell>} cell={({
        rowIndex
      }) => <DataCell>
                                                    {rowIndex < manyHumanResources.length ? <Checkbox /> : ""}
                                                </DataCell>} />
                            <Column key={2} columnKey={2} width={100} header={<DataCell style={headerStyle}>Job</DataCell>} cell={({
        rowIndex
      }) => <DataCell>
                                                    {rowIndex < manyHumanResources.length ? manyHumanResources[rowIndex].job : ""}
                                                </DataCell>} />
                        </Table>} />
        </Fragment>;
}`,...(x=(T=l.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};const M=["GanttWithoutTable","ProvidingCustomTable"];export{r as GanttWithoutTable,l as ProvidingCustomTable,M as __namedExportsOrder,L as default};
//# sourceMappingURL=Table.stories-014b2809.js.map
