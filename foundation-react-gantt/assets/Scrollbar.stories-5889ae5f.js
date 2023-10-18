import{j as e}from"./jsx-runtime-b3cc59b7.js";import{S as v,M as b,a as d,D as g}from"./Scrollbar-5e9a6ca6.js";import{r}from"./shim-e439b993.js";import{A as C}from"./index-711cd10a.js";import"./inheritsLoose-b7013776.js";import"./getDataOrAriaProps-9dcb482f.js";import"./index-05549b61.js";const L={title:"Components/Scrollbar"},s=()=>{const[y,a]=r.useState(400),[h,c]=r.useState(0),n=r.useRef(),i=r.useRef();return e.jsxs(e.Fragment,{children:[e.jsx(C,{message:e.jsx(e.Fragment,{children:"Drag the split panes to rezise the colored divs and the coresponding scrollbars"})}),e.jsx("div",{style:{position:"relative",height:"2em",width:800},children:e.jsxs(v,{split:"vertical",defaultSize:800/2,onChange:t=>(a(t),!0),children:[e.jsx("div",{ref:n,style:{overflow:"hidden"},children:e.jsx("div",{style:{width:700,backgroundColor:"pink",border:"2px solid red"},children:"Some very very very very very very very very very very very very very very very very very very very long text"})}),e.jsx(b,{bounds:!0,onResize:t=>{c(t.bounds?t.bounds.width:0)},children:({measureRef:t})=>e.jsx("div",{ref:o=>{t(o),i.current=o},style:{overflow:"hidden"},children:e.jsx("div",{style:{width:700,backgroundColor:"yellow",border:"2px solid orange"},children:"Another very very very very very very very very very very very very very very very very very very very long text"})})})]})}),e.jsx("div",{style:{position:"relative",height:"1em",width:800},children:e.jsxs(v,{split:"vertical",defaultSize:800/2,children:[e.jsx(d,{pageSize:y,minScrollPosition:0,maxScrollPosition:700,onScroll:t=>n.current.scrollLeft=t}),e.jsx(d,{pageSize:h,minScrollPosition:0,maxScrollPosition:700,onScroll:t=>i.current.scrollLeft=t,hasArrows:!0})]})})]})},l=()=>{const[y,a]=r.useState(250),[h,c]=r.useState(0),n=r.useRef(),i=r.useRef();return e.jsxs(e.Fragment,{children:[e.jsx(C,{message:e.jsx(e.Fragment,{children:"Drag the split panes to rezise the colored divs and the coresponding scrollbars"})}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:30},children:[e.jsx("div",{style:{position:"relative",width:"40px",height:500},children:e.jsxs(v,{split:"horizontal",defaultSize:500/2,onChange:t=>(a(t),!0),children:[e.jsx("div",{ref:n,style:{overflow:"hidden"},children:e.jsx("div",{style:{height:500,backgroundColor:"pink",border:"2px solid red"},children:"Some very very very very very very very very very very very very very very very very very very very long text"})}),e.jsx(b,{bounds:!0,onResize:t=>{c(t.bounds?t.bounds.height:0)},children:({measureRef:t})=>e.jsx("div",{ref:o=>{t(o),i.current=o},style:{overflow:"hidden"},children:e.jsx("div",{style:{height:500,backgroundColor:"yellow",border:"2px solid orange"},children:"Another very very very very very very very very very very very very very very very very very very very long text"})})})]})}),e.jsx("div",{style:{position:"relative",width:"1em",height:500},children:e.jsxs(v,{split:"horizontal",defaultSize:500/2,children:[e.jsx(d,{direction:g.VERTICAL,pageSize:y,minScrollPosition:0,maxScrollPosition:500,onScroll:t=>n.current.scrollTop=t}),e.jsx(d,{direction:g.VERTICAL,pageSize:h,minScrollPosition:0,maxScrollPosition:500,onScroll:t=>i.current.scrollTop=t,hasArrows:!0})]})})]})]})};var u,p,S;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const divContentWidth1 = 700;
  const divContentWidth2 = 700;
  const totalWidth = 800;
  const [divWidth1, setDivWidth1] = useState<number>(totalWidth / 2);
  const [divWidth2, setDivWidth2] = useState<number>(0);
  const div1 = useRef<any>();
  const div2 = useRef<any>();
  return <>
            <Alert message={<>
                    Drag the split panes to rezise the colored divs and the coresponding scrollbars
                </>} />
            <div style={{
      position: "relative",
      height: "2em",
      width: totalWidth
    }}>
                {/** @ts-ignore*/}
                <SplitPane split="vertical" defaultSize={totalWidth / 2} onChange={width => {
        setDivWidth1(width);
        return true;
      }}>
                    <div ref={div1} style={{
          overflow: "hidden"
        }}>
                        <div style={{
            width: divContentWidth1,
            backgroundColor: "pink",
            border: "2px solid red"
          }}>
                            Some very very very very very very very very very very very very very very very very very very very long text
                        </div>
                    </div>
                    <Measure bounds onResize={contentRect => {
          setDivWidth2(contentRect.bounds ? contentRect.bounds.width : 0);
        }}>
                        {({
            measureRef
          }) => {
            return <div ref={node => {
              measureRef(node);
              div2.current = node;
            }} style={{
              overflow: "hidden"
            }}>
                                    <div style={{
                width: divContentWidth2,
                backgroundColor: "yellow",
                border: "2px solid orange"
              }}>
                                    Another very very very very very very very very very very very very very very very very very very very long text
                                    </div>
                                </div>;
          }}
                    </Measure>
                </SplitPane>
            </div>
            <div style={{
      position: "relative",
      height: "1em",
      width: totalWidth
    }}>
                {/** @ts-ignore*/}
                <SplitPane split="vertical" defaultSize={totalWidth / 2}>
                    <Scrollbar pageSize={divWidth1} minScrollPosition={0} maxScrollPosition={divContentWidth1} onScroll={scrollPosition => div1.current.scrollLeft = scrollPosition} />
                    <Scrollbar pageSize={divWidth2} minScrollPosition={0} maxScrollPosition={divContentWidth2} onScroll={scrollPosition => div2.current.scrollLeft = scrollPosition} hasArrows={true} />
                </SplitPane>
            </div>
        </>;
}`,...(S=(p=s.parameters)==null?void 0:p.docs)==null?void 0:S.source}}};var m,x,f;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const divContentHeight1 = 500;
  const divContentHeight2 = 500;
  const totalHeight = 500;
  const [divHeight1, setDivHeight1] = useState<number>(totalHeight / 2);
  const [divHeight2, setDivHeight2] = useState<number>(0);
  const div1 = useRef<any>();
  const div2 = useRef<any>();
  return <>
            <Alert message={<>
                    Drag the split panes to rezise the colored divs and the coresponding scrollbars
                </>} />
            <div style={{
      display: "flex",
      flexDirection: "row",
      gap: 30
    }}>
                <div style={{
        position: "relative",
        width: "40px",
        height: totalHeight
      }}>
                    {/** @ts-ignore*/}
                    <SplitPane split="horizontal" defaultSize={totalHeight / 2} onChange={height => {
          setDivHeight1(height);
          return true;
        }}>
                        <div ref={div1} style={{
            overflow: "hidden"
          }}>
                            <div style={{
              height: divContentHeight1,
              backgroundColor: "pink",
              border: "2px solid red"
            }}>
                                Some very very very very very very very very very very very very very very very very very very very long text
                            </div>
                        </div>
                        <Measure bounds onResize={contentRect => {
            setDivHeight2(contentRect.bounds ? contentRect.bounds.height : 0);
          }}>
                            {({
              measureRef
            }) => {
              return <div ref={node => {
                measureRef(node);
                div2.current = node;
              }} style={{
                overflow: "hidden"
              }}>
                                        <div style={{
                  height: divContentHeight2,
                  backgroundColor: "yellow",
                  border: "2px solid orange"
                }}>
                                        Another very very very very very very very very very very very very very very very very very very very long text
                                        </div>
                                    </div>;
            }}
                        </Measure>
                    </SplitPane>
                </div>
                <div style={{
        position: "relative",
        width: "1em",
        height: totalHeight
      }}>
                    {/** @ts-ignore*/}
                    <SplitPane split="horizontal" defaultSize={totalHeight / 2}>
                        <Scrollbar direction={Direction.VERTICAL} pageSize={divHeight1} minScrollPosition={0} maxScrollPosition={divContentHeight1} onScroll={scrollPosition => div1.current.scrollTop = scrollPosition} />
                        <Scrollbar direction={Direction.VERTICAL} pageSize={divHeight2} minScrollPosition={0} maxScrollPosition={divContentHeight2} onScroll={scrollPosition => div2.current.scrollTop = scrollPosition} hasArrows={true} />
                    </SplitPane>
                </div>
            </div>
        </>;
}`,...(f=(x=l.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const T=["HorizontalScrollBar","VerticalScrollBar"];export{s as HorizontalScrollBar,l as VerticalScrollBar,T as __namedExportsOrder,L as default};
//# sourceMappingURL=Scrollbar.stories-5889ae5f.js.map
