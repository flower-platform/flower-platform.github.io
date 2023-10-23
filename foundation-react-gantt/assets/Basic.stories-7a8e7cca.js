import{j as t}from"./jsx-runtime-b3cc59b7.js";import{T as m}from"./timeline-f7939cca.js";import"./BackgroundLayer-eefef92a.js";import{t as r}from"./TimelineScenarios-c7967451.js";import{s as o,a as c,d as e}from"./sampleData-ca030df0.js";import{m as s}from"./main-c36d81bb.js";import"./shim-e439b993.js";import"./Scrollbar-5e9a6ca6.js";import"./inheritsLoose-b7013776.js";import"./Segment-1ca6e48e.js";import"./iframe-d891a21f.js";import"../sb-preview/runtime.js";import"./util-fea827ce.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./moment-e9e012b5.js";const M={title:"Features/Basic"},l=()=>{const a=[...o,{id:4,title:"George Walsh"}],d=[...c,{key:11,row:4,title:"Task GW1",start:e("2018-09-20 7:00"),end:e("2018-09-20 8:00")},{key:12,row:4,title:"Task GW2",start:e("2018-09-20 17:00"),end:e("2018-09-20 19:00")}];return t.jsx(t.Fragment,{children:t.jsx("div",{style:{display:"flex",height:"400px"},children:t.jsx(m,{startDate:e("2018-09-20"),endDate:e("2018-09-21"),groups:a,items:d,table:t.jsx(s.Table,{width:100,children:t.jsx(s.Column,{columnKey:"title",width:100,header:t.jsx(s.DataCell,{children:"Title"}),cell:({rowIndex:u})=>t.jsx(s.DataCell,{children:u<a.length?a[u].title:""})})})})})})};l.parameters={scenarios:[r.rendererForGroups,r.rendererForItems,r.whenMouseMovesThenRedBar]};const i=()=>t.jsx(t.Fragment,{children:t.jsx("div",{style:{display:"flex",height:"400px"},children:t.jsx(m,{startDate:e("2018-09-20"),endDate:e("2018-09-21"),groups:o,items:c,rowClassName:"story-custom-row",rowEvenClassName:"story-custom-row-even",rowOddClassName:"story-custom-row-odd",table:t.jsx(s.Table,{width:100,children:t.jsx(s.Column,{columnKey:"title",width:100,header:t.jsx(s.DataCell,{children:"Title"}),cell:({rowIndex:a})=>t.jsx(s.DataCell,{children:a<o.length?o[a].title:""})})})})})});i.parameters={scenarios:[r.propertyRowClassName,r.propertyRowEvenClassName,r.propertyRowOddClassName]};const n=()=>{const a=[...c,{key:11,row:4,title:"Task GW1",start:e("2018-09-19 7:00"),end:e("2018-09-19 8:00")},{key:12,row:4,title:"Task GW2",start:e("2018-09-19 17:00"),end:e("2018-09-19 19:00")},{key:14,row:1,title:"Task GW3",start:e("2018-09-21 12:00"),end:e("2018-09-21 14:00")},{key:15,row:1,title:"Task GW4",start:e("2018-09-21 15:00"),end:e("2018-09-21 17:00")},{key:16,row:1,title:"Task GW5",start:e("2018-09-19 12:00"),end:e("2018-09-19 14:00")},{key:17,row:1,title:"Task GW6",start:e("2018-09-19 9:00"),end:e("2018-09-19 12:00")}];return t.jsx(t.Fragment,{children:t.jsx("div",{style:{display:"flex",height:"400px"},children:t.jsx(m,{startDate:e("2018-09-20"),endDate:e("2018-09-21"),minDate:e("2018-09-19"),maxDate:e("2018-09-22"),groups:o,items:a,table:t.jsx(s.Table,{width:100,children:t.jsx(s.Column,{columnKey:"title",width:100,header:t.jsx(s.DataCell,{children:"Title"}),cell:({rowIndex:d})=>t.jsx(s.DataCell,{children:d<o.length?o[d].title:""})})})})})})};n.parameters={scenarios:[r.propertyMinDate,r.propertyMaxDate]};var h,p,w;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  // the rows (aka groups)
  // id is mandatory; should: be numeric, start from 0, have consecutive values
  const humanResources: Group[] = [...someHumanResources, {
    id: 4,
    title: 'George Walsh'
  }];

  // the segments
  // key is mandatory; row should point to the "id" of a row/group
  const tasks: Item[] = [...someTasks,
  // we split this array in 2 parts for illustration purposes, i.e. to capture the data shape in the storybook
  {
    key: 11,
    row: 4,
    title: 'Task GW1',
    start: d('2018-09-20 7:00'),
    end: d('2018-09-20 8:00')
  }, {
    key: 12,
    row: 4,
    title: 'Task GW2',
    start: d('2018-09-20 17:00'),
    end: d('2018-09-20 19:00')
  }];

  // NOTE: for DRY purposes, we store the sample data (e.g. humanResources, segments) in sampleData.ts.
  // If you look at this function from within Storybook, you don't see easily sampleData.ts.
  // That's why we added some additional records here, so that the shape of data is clear.

  return <>
      {/* This is a trivial example to illustrate how Timeline "glues" to its "flex" parent. Notes: */}
      {/* 1/ In other stories we don't have this, because we have a Storybook decorator that wraps w/ a div + CSS class. */}
      {/* 2/ You'll probably have a better flex-box layout, i.e. not hardcoded. 3/ Use CSS classes and not styles. */}
      <div style={{
      display: 'flex',
      height: '400px'
    }}>
        <Timeline startDate={d('2018-09-20')} endDate={d('2018-09-21')} groups={humanResources} items={tasks} table={<Table width={100}>
                            <Column columnKey="title" width={100} header={<DataCell>Title</DataCell>} cell={({
          rowIndex
        }) => <DataCell>{rowIndex < humanResources.length ? humanResources[rowIndex].title : ""}</DataCell>} />
                        </Table>} />
      </div>
    </>;
}`,...(w=(p=l.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};var y,x,k;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  return <>
      {/* This is an example to illustrate how you can customize your gantt to customize the row coloring by setting 'rowClassName',  'rowEvenClassName' and 'rowClassOddName'
           And defining your custom classes in your css file:
           .story-custom-row {
            border: 1px solid #94b9cf!important;
            border-top: 0 !important;
          }
           .story-custom-row-even {
            background-color: #DBE8F0 !important;
          }
           .story-custom-row-odd {
            background-color: #f4f7f8 !important;
          }
       */}
      <div style={{
      display: 'flex',
      height: '400px'
    }}>
        <Timeline startDate={d('2018-09-20')} endDate={d('2018-09-21')} groups={someHumanResources} items={someTasks} rowClassName='story-custom-row' rowEvenClassName='story-custom-row-even' rowOddClassName='story-custom-row-odd' table={<Table width={100}>
                            <Column columnKey="title" width={100} header={<DataCell>Title</DataCell>} cell={({
          rowIndex
        }) => <DataCell>{rowIndex < someHumanResources.length ? someHumanResources[rowIndex].title : ""}</DataCell>} />
                        </Table>} />
      </div>
    </>;
}`,...(k=(x=i.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var T,C,g;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const tasks: Item[] = [...someTasks,
  // Tasks that are outside the display interval  
  {
    key: 11,
    row: 4,
    title: 'Task GW1',
    start: d('2018-09-19 7:00'),
    end: d('2018-09-19 8:00')
  }, {
    key: 12,
    row: 4,
    title: 'Task GW2',
    start: d('2018-09-19 17:00'),
    end: d('2018-09-19 19:00')
  }, {
    key: 14,
    row: 1,
    title: 'Task GW3',
    start: d('2018-09-21 12:00'),
    end: d('2018-09-21 14:00')
  }, {
    key: 15,
    row: 1,
    title: 'Task GW4',
    start: d('2018-09-21 15:00'),
    end: d('2018-09-21 17:00')
  }, {
    key: 16,
    row: 1,
    title: 'Task GW5',
    start: d('2018-09-19 12:00'),
    end: d('2018-09-19 14:00')
  }, {
    key: 17,
    row: 1,
    title: 'Task GW6',
    start: d('2018-09-19 9:00'),
    end: d('2018-09-19 12:00')
  }];
  return <>
      {/* This is a trivial example to illustrate how Timeline "glues" to its "flex" parent. Notes: */}
      {/* 1/ In other stories we don't have this, because we have a Storybook decorator that wraps w/ a div + CSS class. */}
      {/* 2/ You'll probably have a better flex-box layout, i.e. not hardcoded. 3/ Use CSS classes and not styles. */}
      <div style={{
      display: 'flex',
      height: '400px'
    }}>
        <Timeline startDate={d('2018-09-20')} endDate={d('2018-09-21')} minDate={d('2018-09-19')} maxDate={d('2018-09-22')} groups={someHumanResources} items={tasks} table={<Table width={100}>
                            <Column columnKey="title" width={100} header={<DataCell>Title</DataCell>} cell={({
          rowIndex
        }) => <DataCell>{rowIndex < someHumanResources.length ? someHumanResources[rowIndex].title : ""}</DataCell>} />
                        </Table>} />
      </div>
    </>;
}`,...(g=(C=n.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};const O=["Main","AlternativeRowColoring","HorizontalScroll"];export{i as AlternativeRowColoring,n as HorizontalScroll,l as Main,O as __namedExportsOrder,M as default};
//# sourceMappingURL=Basic.stories-7a8e7cca.js.map
