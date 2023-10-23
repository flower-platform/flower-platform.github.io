import{j as e}from"./jsx-runtime-440fbad5.js";import{T as h,I as c}from"./timeline-b18108dd.js";import{a as u,d as s,s as o}from"./sampleData-e117e292.js";import{t as b}from"./TimelineScenarios-c7967451.js";import{m as r}from"./main-69be654f.js";import{A as g}from"./index-793f5c9e.js";import"./shim-6ae0d66e.js";import"./Scrollbar-7f4972f2.js";import"./inheritsLoose-b7013776.js";import"./Segment-8082b898.js";import"./iframe-f6d13d56.js";import"../sb-preview/runtime.js";import"./util-852c488d.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./moment-fbc5633a.js";import"./isNativeReflectConstruct-26aa4442.js";import"./reactNode-8e0fde82.js";import"./toString-1be86d39.js";const a={title:"PROPERTY title",tooltip:"PROPERTY tooltip",height:"PROPERTY height",glowOnHover:"PROPERTY glowOnHover",color:"PROPERTY color",gradientBrightness:"PROPERTY gradientBrightness",gradientStop:"PROPERTY gradientStop",gradientReverseDirection:"PROPERTY gradientReverseDirection",style:"PROPERTY style",className:"PROPERTY className"},L={title:"Features/Item Renderer"},i=()=>{const t=[...u,{key:11,row:3,title:"With style",start:s("2018-09-20 7:00"),end:s("2018-09-20 8:00"),style:{opacity:.5,border:"2px blue solid",borderRadius:"7px"}},{key:12,row:3,title:"With class",start:s("2018-09-20 9:00"),end:s("2018-09-20 10:00"),className:"story-custom-item-class"},{key:13,row:3,title:"With color and tooltip",start:s("2018-09-20 10:30"),end:s("2018-09-20 12:45"),color:"#FFA215",tooltip:"I am tooltip"},{key:14,row:3,title:"With gradient, but w/o glow",start:s("2018-09-20 13:00"),end:s("2018-09-20 15:25"),color:"red",gradientStop:10,gradientBrightness:.7,gradientReverseDirection:!0,glowOnHover:!1}];return e.jsxs(e.Fragment,{children:[e.jsx(g,{message:e.jsxs(e.Fragment,{children:["The last row has items w/ props that are rendered by ",e.jsx("code",{children:"ItemRenderer"}),"."]})}),e.jsx(h,{startDate:s("2018-09-20"),endDate:s("2018-09-21"),groups:o,items:t,table:e.jsx(r.Table,{width:100,children:e.jsx(r.Column,{columnKey:"title",width:100,header:e.jsx(r.DataCell,{children:"Title"}),cell:({rowIndex:p})=>e.jsx(r.DataCell,{children:p<o.length?o[p].title:""})})})})]})};i.parameters={scenarios:[a.title,a.tooltip,a.glowOnHover,a.color,a.gradientBrightness,a.gradientStop,a.gradientReverseDirection,a.className,a.style]};const d=()=>e.jsxs(e.Fragment,{children:[e.jsx(g,{message:e.jsxs(e.Fragment,{children:["All the ",e.jsx("code",{children:"ItemRenderer"}),"s have the same (default) props."]})}),e.jsx(h,{startDate:s("2018-09-20"),endDate:s("2018-09-21"),groups:o,items:u,table:e.jsx(r.Table,{width:100,children:e.jsx(r.Column,{columnKey:"title",width:100,header:e.jsx(r.DataCell,{children:"Title"}),cell:({rowIndex:t})=>e.jsx(r.DataCell,{children:t<o.length?o[t].title:""})})}),itemRendererDefaultProps:{className:"story-custom-item-class",color:"red"}})]});d.parameters={scenarios:[b.propertyItemRendererDefaultProps]};const m=()=>{const t=[...u];t[0].type="analysis",t[0].spentHours=24,t[3].type="analysis",t[3].spentHours=4,t[1].type="development",t[2].type="testing",t[2].allTestsPassed=!0,t[4].type="testing",t[4].allTestsPassed=!1;class p extends c{render(){const{type:l}=this.props.item;return l?l==="analysis"?e.jsx(j,{...this.props}):l==="development"?e.jsx(f,{...this.props}):e.jsx(P,{...this.props}):super.render()}}class j extends c{getTitle(){return e.jsxs(e.Fragment,{children:[e.jsx("b",{children:"[A]"})," ",super.getTitle()," ",e.jsx("u",{children:this.props.item.spentHours})]})}getTextColor(){const{spentHours:l}=this.props.item;return l&&l>10?"yellow":"black"}}class f extends c{getBackgroundGradient(){return this.getColor()}getClassName(){return super.getClassName()+" story-custom-item-class"}}class P extends c{getColor(){return this.props.item.allTestsPassed?"green":"red"}getStyle(){return{...super.getStyle(),borderRadius:"8px"}}getHeight(){return"20px"}}return e.jsxs(e.Fragment,{children:[e.jsx(g,{message:e.jsxs(e.Fragment,{children:['We have different custom item renderers, based on the "task type". They can modify the known props, based on logic specific to each item. And they can also process new props, unknown to ',e.jsx("code",{children:"ItemRenderer"}),"."]})}),e.jsx(h,{startDate:s("2018-09-20"),endDate:s("2018-09-21"),groups:o,items:u,table:e.jsx(r.Table,{width:100,children:e.jsx(r.Column,{columnKey:"title",width:100,header:e.jsx(r.DataCell,{children:"Title"}),cell:({rowIndex:n})=>e.jsx(r.DataCell,{children:n<o.length?o[n].title:""})})}),itemRenderer:p})]})};m.parameters={scenarios:[b.propertyItemRenderer]};var R,y,x;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const tasks: Item[] = [...someTasks, {
    key: 11,
    row: 3,
    title: 'With style',
    start: d('2018-09-20 7:00'),
    end: d('2018-09-20 8:00'),
    style: {
      opacity: 0.5,
      border: '2px blue solid',
      borderRadius: '7px'
    }
  }, {
    key: 12,
    row: 3,
    title: 'With class',
    start: d('2018-09-20 9:00'),
    end: d('2018-09-20 10:00'),
    className: 'story-custom-item-class'
  }, {
    key: 13,
    row: 3,
    title: 'With color and tooltip',
    start: d('2018-09-20 10:30'),
    end: d('2018-09-20 12:45'),
    color: '#FFA215',
    tooltip: 'I am tooltip'
  }, {
    key: 14,
    row: 3,
    title: 'With gradient, but w/o glow',
    start: d('2018-09-20 13:00'),
    end: d('2018-09-20 15:25'),
    color: 'red',
    gradientStop: 10,
    gradientBrightness: 0.7,
    gradientReverseDirection: true,
    glowOnHover: false
  }];
  return <>
      <Alert message={<>
            The last row has items w/ props that are rendered by <code>ItemRenderer</code>.
          </>} />
      <Timeline startDate={d('2018-09-20')} endDate={d('2018-09-21')} groups={someHumanResources} items={tasks} table={<Table width={100}>
                    <Column columnKey="title" width={100} header={<DataCell>Title</DataCell>} cell={({
        rowIndex
      }) => <DataCell>{rowIndex < someHumanResources.length ? someHumanResources[rowIndex].title : ""}</DataCell>} />
                </Table>} />
    </>;
}`,...(x=(y=i.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var T,w,C;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <>
      <Alert message={<>
            All the <code>ItemRenderer</code>s have the same (default) props.
          </>} />
      <Timeline startDate={d('2018-09-20')} endDate={d('2018-09-21')} groups={someHumanResources} items={someTasks} table={<Table width={100}>
                  <Column columnKey="title" width={100} header={<DataCell>Title</DataCell>} cell={({
        rowIndex
      }) => <DataCell>{rowIndex < someHumanResources.length ? someHumanResources[rowIndex].title : ""}</DataCell>} />
              </Table>} itemRendererDefaultProps={{
      className: 'story-custom-item-class',
      color: 'red'
    }} />
    </>;
}`,...(C=(w=d.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var k,D,I;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const tasks: CustomTask[] = [...someTasks];
  tasks[0].type = 'analysis';
  tasks[0].spentHours = 24;
  tasks[3].type = 'analysis';
  tasks[3].spentHours = 4;
  tasks[1].type = 'development';
  tasks[2].type = 'testing';
  tasks[2].allTestsPassed = true;
  tasks[4].type = 'testing';
  tasks[4].allTestsPassed = false;

  // custom item renderer that delegates to other renders based on the type of task
  class CustomItemRenderer extends ItemRenderer {
    render() {
      const {
        type
      }: CustomTask = this.props.item;
      if (!type) {
        return super.render();
      }
      if (type === 'analysis') {
        return <AnalysisItemRenderer {...this.props} />;
      } else if (type === 'development') {
        return <DevelopmentItemRenderer {...this.props} />;
      } else {
        return <TestingItemRenderer {...this.props} />;
      }
    }
  }
  class AnalysisItemRenderer extends ItemRenderer {
    // we override the actual renderer of the title
    getTitle() {
      return <>
          <b>[A]</b> {super.getTitle()} <u>{(this.props.item as CustomTask).spentHours}</u>
        </>;
    }

    // text color depending data in the item
    getTextColor() {
      const {
        spentHours
      } = (this.props.item as CustomTask);
      return spentHours && spentHours > 10 ? 'yellow' : 'black';
    }
  }
  class DevelopmentItemRenderer extends ItemRenderer {
    // override to return a solid color
    getBackgroundGradient() {
      return this.getColor();
    }
    getClassName() {
      return super.getClassName() + ' story-custom-item-class';
    }
  }
  class TestingItemRenderer extends ItemRenderer {
    getColor() {
      return (this.props.item as CustomTask).allTestsPassed ? 'green' : 'red';
    }
    getStyle() {
      return {
        ...super.getStyle(),
        borderRadius: '8px'
      };
    }
    getHeight() {
      return '20px';
    }
  }
  return <>
      <Alert message={<>
            We have different custom item renderers, based on the "task type". They can modify the known props, based on
            logic specific to each item. And they can also process new props, unknown to <code>ItemRenderer</code>.
          </>} />
      <Timeline startDate={d('2018-09-20')} endDate={d('2018-09-21')} groups={someHumanResources} items={someTasks} table={<Table width={100}>
                  <Column columnKey="title" width={100} header={<DataCell>Title</DataCell>} cell={({
        rowIndex
      }) => <DataCell>{rowIndex < someHumanResources.length ? someHumanResources[rowIndex].title : ""}</DataCell>} />
              </Table>} itemRenderer={CustomItemRenderer} />
    </>;
}`,...(I=(D=m.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const Q=["Main","DefaultPropsForItemRenderer","CustomItemRenderer"];export{m as CustomItemRenderer,d as DefaultPropsForItemRenderer,i as Main,Q as __namedExportsOrder,L as default};
//# sourceMappingURL=ItemRenderer.stories-7e4177e0.js.map
