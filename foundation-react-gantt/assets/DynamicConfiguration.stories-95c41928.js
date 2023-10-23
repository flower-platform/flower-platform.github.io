import{j as e}from"./jsx-runtime-440fbad5.js";import{m as t}from"./main-69be654f.js";import{s as a,a as u}from"./sampleData-e117e292.js";import{c,B as h,T as p}from"./timeline-b18108dd.js";import{r as D}from"./shim-6ae0d66e.js";import{h as i}from"./moment-fbc5633a.js";import"./Scrollbar-7f4972f2.js";import"./inheritsLoose-b7013776.js";import"./Segment-8082b898.js";import"./iframe-f6d13d56.js";import"../sb-preview/runtime.js";import"./util-852c488d.js";import"./_commonjs-dynamic-modules-302442b1.js";const k={title:"Features/Dynamic Configuration",includeStories:/^[A-Z]/},x=c("DynamicConfigurationStory",{changeDisplayIntervalButton:""}),o=()=>{const[s,m]=D.useState(0);return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx(h,{primary:!0,"data-testid":x.changeDisplayIntervalButton,onClick:()=>m(s+1),children:"Change display interval: + 1 hour"})}),e.jsx(p,{startDate:i("2018-09-20").clone().add(s,"hours").valueOf(),endDate:i("2018-09-21").clone().add(s,"hours").valueOf(),groups:a,items:u,table:e.jsx(t.Table,{width:100,children:e.jsx(t.Column,{columnKey:"title",width:100,header:e.jsx(t.DataCell,{children:"Title"}),cell:({rowIndex:r})=>e.jsx(t.DataCell,{children:r<a.length?a[r].title:""})})})})]})};var n,l,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const [hoursAddition, setHoursAddition] = useState<number>(0);
  return <>
            <div>
                <Button primary data-testid={testIds.changeDisplayIntervalButton} onClick={() => setHoursAddition(hoursAddition + 1)}>
                    Change display interval: + 1 hour
                </Button>
            </div>
            <Timeline startDate={moment('2018-09-20').clone().add(hoursAddition, 'hours').valueOf()} endDate={moment('2018-09-21').clone().add(hoursAddition, 'hours').valueOf()} groups={someHumanResources} items={someTasks} table={<Table width={100}>
                            <Column columnKey="title" width={100} header={<DataCell>Title</DataCell>} cell={({
        rowIndex
      }) => <DataCell>{rowIndex < someHumanResources.length ? someHumanResources[rowIndex].title : ""}</DataCell>} />
                        </Table>}>
            </Timeline>
        </>;
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const O=["testIds","Main"];export{o as Main,O as __namedExportsOrder,k as default,x as testIds};
//# sourceMappingURL=DynamicConfiguration.stories-95c41928.js.map
