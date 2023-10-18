import{j as e}from"./jsx-runtime-b3cc59b7.js";import{T as j,c as H,B as P,a as v}from"./timeline-a73f9426.js";import{h as E}from"./moment-e9e012b5.js";import{r as m}from"./shim-e439b993.js";import{I as k}from"./Segment-1ca6e48e.js";import{a as M,d as u,s as o}from"./sampleData-ca030df0.js";import{m as a}from"./main-ed718f39.js";import{A as R}from"./index-711cd10a.js";import"./Scrollbar-5e9a6ca6.js";import"./inheritsLoose-b7013776.js";import"./iframe-dddab8fb.js";import"../sb-preview/runtime.js";import"./util-ded76818.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./getDataOrAriaProps-9dcb482f.js";import"./index-05549b61.js";const T={whenRightClickThenContextMenu:"WHEN right click on gantt, THEN a context menu is shown containing actions (each having a label and an icon)",whenClickActionThenRunAndCloseMenu:"WHEN click an action, THEN a specific action is run and the context menu is closed",propertyOnContextMenuShow:"PROPERTY onContextMenuShow",propertyDontCloseContextMenuAfterRunAutomatically:"PROPERTY IActionParamForRun.dontCloseContextMenuAfterRunAutomatically"},S={whenClickOrDragToSelectThenItemsSelected:"WHEN click or drag to select THEN items are selected/deselected",propertyOnSelectionChange:"PROPERTY onSelectionChange",propertySelectedItems:"PROPERTY selectedItems"},oe={title:"Features/Context Menu And Selection",includeStories:/^[A-Z]/},F="Add task for ",y="plus",O="Add task: not possible. Please right click over a row with a person.",K="Edit",N="Delete",L="trash",W="red",c=()=>{const[s,d]=m.useState([...M]),[l,p]=m.useState(40);return e.jsxs(e.Fragment,{children:[e.jsx(R,{message:e.jsxs(e.Fragment,{children:[e.jsx("b",{children:"Add task"})," action is provided only for empty selection. It also has a different label depending on which row is displayed"]})}),e.jsx("div",{style:{display:"flex",height:"400px"},children:e.jsx(j,{startDate:u("2018-09-20"),endDate:u("2018-09-21"),groups:o,items:s,itemHeight:l,onContextMenuShow:n=>{const h=[{icon:"edit",label:K,isVisible:t=>t.selection.length==1,run:t=>{t.dontCloseContextMenuAfterRunAutomatically=!0,setTimeout(()=>{t.closeContextMenu(),s.find(i=>i.key==t.selection[0]),setTimeout(()=>{},10)},10)}},{isVisible:t=>t.selection.length>0,renderInMenu:t=>e.jsxs(v.Item,{onClick:()=>{d(s.filter(i=>!t.selection.includes(i.key))),t.closeContextMenu()},children:[e.jsx("span",{style:{color:"red"},children:N}),e.jsx(k,{name:L,color:W})]})}];return n.actionParam.row<o.length?h.splice(0,0,{icon:e.jsx(k,{name:y}),label:t=>F+o[t.row].title,run:t=>{let i=E(t.time);i.hours(i.hours()+3);const D=s.reduce((g,x)=>g>x.key?g:x.key,0);d([...s,{key:D+1,row:t.row,title:"NEW TASK",start:t.time,end:i}])}}):h.splice(0,0,{icon:y,label:()=>O}),h},table:e.jsx(a.Table,{width:100,children:e.jsx(a.Column,{columnKey:"title",width:100,header:e.jsx(a.DataCell,{children:"Title"}),cell:({rowIndex:n})=>e.jsx(a.DataCell,{children:n<o.length?o[n].title:""})})})})})]})};c.parameters={scenarios:[...Object.keys(T).map(s=>T[s])]};const B=H("SelectionStory",{selectedItemsSpan:""}),r=()=>{const[s,d]=m.useState([]),[l,p]=m.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs("span",{children:[e.jsx(P,{toggle:!0,active:l,onClick:()=>p(!l),children:"Force selection programmatically"}),"(The user cannot change the selection via interaction)"]}),e.jsx(R,{message:e.jsxs(e.Fragment,{children:["Selected segments: ",e.jsx("span",{"data-testid":B.selectedItemsSpan,children:s.sort().join(", ")})]})}),e.jsx("div",{style:{display:"flex",height:"400px"},children:e.jsx(j,{startDate:u("2018-09-20"),endDate:u("2018-09-21"),groups:o,items:M,selectedItems:l?[0,1]:void 0,onSelectionChange:n=>d(n),table:e.jsx(a.Table,{width:100,children:e.jsx(a.Column,{columnKey:"title",width:100,header:e.jsx(a.DataCell,{children:"Title"}),cell:({rowIndex:n})=>e.jsx(a.DataCell,{children:n<o.length?o[n].title:""})})})})})]})};r.parameters={scenarios:[...Object.keys(S).map(s=>S[s])]};var C,b,I;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [tasks, setTasks] = useState<Item[]>([...someTasks]);
  const [segmentHeight, setSegmentHeight] = useState<number>(40);
  return <>
                <Alert message={<><b>Add task</b> action is provided only for empty selection. It also has a different label depending on which row is displayed</>} />
                <div style={{
      display: 'flex',
      height: '400px'
    }}>
                    <Timeline startDate={d('2018-09-20')} endDate={d('2018-09-21')} groups={someHumanResources} items={tasks} itemHeight={segmentHeight} onContextMenuShow={(contextMenuShowParam: IGanttOnContextMenuShowParam) => {
        const actions: IGanttAction[] = [{
          icon: "edit",
          label: editActionLabel,
          isVisible: param => param.selection.length == 1,
          run: param => {
            param.dontCloseContextMenuAfterRunAutomatically = true;
            // This timeout is just for exemplify a delayed closing of the CM 
            setTimeout(() => {
              param.closeContextMenu();
              const selectedTask = tasks.find(task => task.key == param.selection[0]);
              // This timeout for the menu to actual close before the prompt is shown
              setTimeout(() => {
                // TODO CS: se pare ca nu e o idee buna sa folosim prompt, fiindca blocheaza testul
                // si nu putem simula scrierea.
                // let newTitle = prompt("Task new title:", selectedTask.title);
                let newTitle;
                newTitle && setTasks(tasks.map(task => task == selectedTask ? {
                  ...task,
                  title: newTitle
                } : task));
              }, 10);
            }, 10);
          }
        }, {
          isVisible: param => param.selection.length > 0,
          /** This is a trivial example for customizing the content of an action renderer 
           * but this content can be replaced according to application needs with a more complex one: 
           * e.g. maybe containing a color picker (for an action that changes the color of a segment)*/
          renderInMenu: param => {
            return <Menu.Item onClick={() => {
              setTasks(tasks.filter(task => !param.selection.includes(task.key)));
              param.closeContextMenu();
            }}>        
                                                    <span style={{
                color: "red"
              }}>{deleteActionLabel}</span> 
                                                    <Icon name={deleteActionIcon} color={deleteActionIconColor} />      
                                                </Menu.Item>;
          }
        }];
        // We can filter the actions that will be displayed directly here in the actions provider    
        if (contextMenuShowParam.actionParam.row < someHumanResources.length) {
          actions.splice(0, 0, {
            icon: <Icon name={addTaskActionIcon} />,
            label: param => addTaskActionLabel + someHumanResources[param.row].title,
            run: param => {
              let end = moment(param.time);
              end.hours(end.hours() + 3);
              const maxKey = tasks.reduce((maxKey, task) => maxKey > (task.key as number) ? maxKey : (task.key as number), 0);
              setTasks([...tasks, {
                key: maxKey + 1,
                row: param.row,
                title: 'NEW TASK',
                start: param.time,
                end: end
              }]);
            }
          });
        } else {
          actions.splice(0, 0, {
            icon: addTaskActionIcon,
            label: () => addTaskNotPossibleAction
          });
        }
        return actions;
      }} table={<Table width={100}>
                                    <Column columnKey="title" width={100} header={<DataCell>Title</DataCell>} cell={({
          rowIndex
        }) => <DataCell>{rowIndex < someHumanResources.length ? someHumanResources[rowIndex].title : ""}</DataCell>} />
                                </Table>} />
                </div>
            </>;
}`,...(I=(b=c.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var A,f,w;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  const [selectedItems, setSelectedItems] = useState<(number | string)[]>([]);
  const [isSelectionForced, setIsSelectionForced] = useState<boolean>(false);
  return <>
        <span>
            <Button toggle active={isSelectionForced} onClick={() => setIsSelectionForced(!isSelectionForced)}>
                Force selection programmatically
            </Button>
            (The user cannot change the selection via interaction)
        </span>
        <Alert message={<>Selected segments: <span data-testid={selectionStoryTestIds.selectedItemsSpan}>{selectedItems.sort().join(", ")}</span></>} />
        {/* This is an example illustrates: 
            1.adding onSelectionChange handler 
            2.setting selectedItems property */}
        <div style={{
      display: 'flex',
      height: '400px'
    }}>
          <Timeline startDate={d('2018-09-20')} endDate={d('2018-09-21')} groups={someHumanResources} items={someTasks} selectedItems={isSelectionForced ? [0, 1] : undefined} onSelectionChange={selectedItems => setSelectedItems(selectedItems)} table={<Table width={100}>
                                    <Column columnKey="title" width={100} header={<DataCell>Title</DataCell>} cell={({
          rowIndex
        }) => <DataCell>{rowIndex < someHumanResources.length ? someHumanResources[rowIndex].title : ""}</DataCell>} />
                                </Table>} />
        </div>
      </>;
}`,...(w=(f=r.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};const ae=["addTaskActionLabel","addTaskActionIcon","addTaskNotPossibleAction","editActionLabel","deleteActionLabel","deleteActionIcon","deleteActionIconColor","ContextMenu","selectionStoryTestIds","Selection"];export{c as ContextMenu,r as Selection,ae as __namedExportsOrder,y as addTaskActionIcon,F as addTaskActionLabel,O as addTaskNotPossibleAction,oe as default,L as deleteActionIcon,W as deleteActionIconColor,N as deleteActionLabel,K as editActionLabel,B as selectionStoryTestIds};
//# sourceMappingURL=ContextMenuAndSelection.stories-fdeb973d.js.map
