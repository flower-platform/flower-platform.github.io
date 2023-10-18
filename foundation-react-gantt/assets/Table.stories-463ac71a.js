import{j as e}from"./jsx-runtime-b3cc59b7.js";import{r as m}from"./shim-e439b993.js";import{I as D}from"./Segment-1ca6e48e.js";import{c as g,T as d,C as j}from"./timeline-a73f9426.js";import{d as n,m as s,a as C}from"./sampleData-ca030df0.js";import{m as a}from"./main-ed718f39.js";import{A as w}from"./index-711cd10a.js";import"./inheritsLoose-b7013776.js";import"./Scrollbar-5e9a6ca6.js";import"./iframe-dddab8fb.js";import"../sb-preview/runtime.js";import"./util-ded76818.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./moment-e9e012b5.js";import"./getDataOrAriaProps-9dcb482f.js";import"./index-05549b61.js";const c={propertyTable:"PROPERTY table",propertyOnTableResize:"PROOPERTY onTableResize"},R=g("Table",{row:""}),k=260,J={title:"Features/Table",component:d},r=()=>e.jsx(m.Fragment,{children:e.jsx(d,{startDate:n("2018-09-20"),endDate:n("2018-09-21"),groups:s,items:C})});r.parameters={scenarios:[c.propertyTable]};const i={color:"#000",fontSize:"12px",lineHeight:"1",background:"#CCFFEE",border:"none"},l=()=>{const[o,y]=m.useState(k);return e.jsxs(m.Fragment,{children:[e.jsx(w,{message:e.jsxs("span",{children:[" Table width: ",o," "]})}),e.jsx(d,{startDate:n("2018-09-20"),endDate:n("2018-09-21"),groups:s,items:C,onTableResize:t=>{y(t)},table:e.jsxs(a.Table,{rowHeight:50,width:o,isColumnResizing:!0,rowAttributesGetter:t=>({"data-testid":R.row+"_"+t}),children:[e.jsx(a.Column,{columnKey:0,width:100,header:e.jsx(a.DataCell,{style:i,children:"Title"}),cell:({rowIndex:t})=>e.jsx(a.DataCell,{children:t<s.length?s[t].title:""})},0),e.jsx(a.Column,{columnKey:1,width:60,header:e.jsxs(a.DataCell,{style:i,children:[e.jsx(D,{type:"check-circle"})," ",e.jsx("span",{children:"Custom check"})]}),cell:({rowIndex:t})=>e.jsx(a.DataCell,{children:t<s.length?e.jsx(j,{}):""})},1),e.jsx(a.Column,{columnKey:2,width:100,header:e.jsx(a.DataCell,{style:i,children:"Job"}),cell:({rowIndex:t})=>e.jsx(a.DataCell,{children:t<s.length?s[t].job:""})},2)]})})]})};l.parameters={scenarios:[...Object.keys(c).map(o=>c[o])]};var u,h,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(x=(T=l.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};const L=["GanttWithoutTable","ProvidingCustomTable"];export{r as GanttWithoutTable,l as ProvidingCustomTable,L as __namedExportsOrder,J as default};
//# sourceMappingURL=Table.stories-463ac71a.js.map
