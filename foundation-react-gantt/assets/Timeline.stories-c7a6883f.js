import{j as t}from"./jsx-runtime-440fbad5.js";import{R as b}from"./shim-6ae0d66e.js";import{h as e}from"./moment-fbc5633a.js";import{D as g}from"./demo-381f0114.js";import{T as f}from"./timeline-b18108dd.js";import{A as j}from"./index-793f5c9e.js";import"./BackgroundLayer-df2e3be3.js";import"./Scrollbar-7f4972f2.js";import"./inheritsLoose-b7013776.js";import"./main-69be654f.js";import"./isNativeReflectConstruct-26aa4442.js";import"./reactNode-8e0fde82.js";import"./toString-1be86d39.js";import"./_baseIsEqual-592aa6fc.js";import"./Segment-8082b898.js";import"./iframe-f6d13d56.js";import"../sb-preview/runtime.js";import"./util-852c488d.js";import"./_commonjs-dynamic-modules-302442b1.js";const H={title:"Internal/Timeline"},o=()=>t.jsx(g,{}),y=[{id:0,title:"John Doe"},{id:1,title:"Alex Randal"},{id:2,title:"Mary Danton"}],w=[{key:0,row:0,title:"T1",color:"red",start:e("2018-09-20 8:00"),end:e("2018-09-20 9:00")},{key:1,row:0,title:"T2",color:"red",start:e("2018-09-20 18:00"),end:e("2018-09-20 19:00")},{key:2,row:0,title:"T3",color:"red",start:e("2018-09-20 20:00"),end:e("2018-09-20 21:00")},{key:3,row:1,title:"T1",color:"yellow",start:e("2018-09-20 7:00"),end:e("2018-09-20 8:00")},{key:4,row:1,title:"T2",color:"yellow",start:e("2018-09-20 17:00"),end:e("2018-09-20 20:00")},{key:5,row:1,title:"T3",color:"yellow",start:e("2018-09-20 19:00"),end:e("2018-09-20 20:00")},{key:6,row:2,title:"T1",color:"blue",start:e("2018-09-20 8:00"),end:e("2018-09-20 10:00")},{key:7,row:2,title:"T2",color:"blue",start:e("2018-09-20 18:00"),end:e("2018-09-20 20:00")},{key:8,row:2,title:"T3",color:"blue",start:e("2018-09-20 20:00"),end:e("2018-09-20 21:00")}],T=w.map(r=>({...r,start:r.start.valueOf(),end:r.end.valueOf()})),a=()=>t.jsxs("div",{className:"demo",children:[t.jsx(j,{message:t.jsxs(b.Fragment,{children:[t.jsxs("p",{children:["The Timeline was originally designed to handle date/times w/ ",t.jsx("a",{href:"https://momentjs.com/",children:"Moment.js"}),", a popular lib. However there are 2 drawbacks. ",t.jsx("b",{children:"#1"}),": even the authors/maintainers of Moment.js don't quite ",t.jsx("a",{href:"https://momentjs.com/docs/",children:"recommend"}),' it any more for use with new projects. The major complain seems to be the mutability of "moment" objects. ',t.jsx("b",{children:"#2"}),': "moment" objects are not friendly with'," ",t.jsx("a",{href:"https://redux.js.org/",children:"Redux"}),", a popular framework for state management. Many folk use React for state management. And not being able to store the state that feeds the Timeline is a big drawback, since additional conversions are necessary."]}),t.jsxs("p",{children:["The"," ",t.jsxs("b",{children:["property ",t.jsx("code",{children:"useMoment"})]})," ","to the rescue! If ",t.jsx("code",{children:"false"}),', then you when you "talk" date/times to the Timeline, then you use plain timestamps (i.e. number of millis, e.g. ',t.jsx("code",{children:"new Date().valueOf()"}),"). And this everywhere where a date/time is needed (e.g. for an item, for global start/end, etc.). This is the ",t.jsx("b",{children:"recommended"})," way to go, especially if you use Redux. But be aware that this property is by default ",t.jsx("code",{children:"true"}),", in order to maintain backward compatibility."]}),t.jsx("p",{children:'NOTE: the Timeline still uses "moment" internally. And this because it was quicker to refactor this way. This may change in the future, if we find reasons and time to refactor more.'})]})}),t.jsx(f,{shallowUpdateCheck:!0,useMoment:!1,items:T,groups:y,startDate:e("2018-09-20").valueOf(),endDate:e("2018-09-21").valueOf()})]}),s=()=>t.jsx("div",{className:"demo",children:t.jsx(f,{shallowUpdateCheck:!0,items:w,groups:y,startDate:e("2018-09-20"),endDate:e("2018-09-21")})});var i,n,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:"() => <DemoTimeline />",...(m=(n=o.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var l,d,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`() => <div className="demo">
    <Alert message={<React.Fragment>
          <p>
            The Timeline was originally designed to handle date/times w/ <a href="https://momentjs.com/">Moment.js</a>,
            a popular lib. However there are 2 drawbacks. <b>#1</b>: even the authors/maintainers of Moment.js don't
            quite <a href="https://momentjs.com/docs/">recommend</a> it any more for use with new projects. The major
            complain seems to be the mutability of "moment" objects. <b>#2</b>: "moment" objects are not friendly with{' '}
            <a href="https://redux.js.org/">Redux</a>, a popular framework for state management. Many folk use React for
            state management. And not being able to store the state that feeds the Timeline is a big drawback, since
            additional conversions are necessary.
          </p>
          <p>
            The{' '}
            <b>
              property <code>useMoment</code>
            </b>{' '}
            to the rescue! If <code>false</code>, then you when you "talk" date/times to the Timeline, then you use
            plain timestamps (i.e. number of millis, e.g. <code>new Date().valueOf()</code>). And this everywhere where
            a date/time is needed (e.g. for an item, for global start/end, etc.). This is the <b>recommended</b> way to
            go, especially if you use Redux. But be aware that this property is by default <code>true</code>, in order
            to maintain backward compatibility.
          </p>
          <p>
            NOTE: the Timeline still uses "moment" internally. And this because it was quicker to refactor this way.
            This may change in the future, if we find reasons and time to refactor more.
          </p>
        </React.Fragment>} />
    <Timeline shallowUpdateCheck useMoment={false} items={tasksWithoutMoment} groups={humanResources} startDate={moment('2018-09-20').valueOf()} endDate={moment('2018-09-21').valueOf()} />
  </div>`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var h,u,p;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`() => <div className="demo">
    <Timeline shallowUpdateCheck items={tasksWithMoment} groups={humanResources} startDate={moment('2018-09-20')} endDate={moment('2018-09-21')} />
  </div>`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};o.__docgenInfo={description:"",methods:[],displayName:"OriginalDemo"};a.__docgenInfo={description:"",methods:[],displayName:"BasicUsageWithoutMoment"};s.__docgenInfo={description:"",methods:[],displayName:"BasicUsageWithMoment"};const J=["OriginalDemo","BasicUsageWithoutMoment","BasicUsageWithMoment"];export{s as BasicUsageWithMoment,a as BasicUsageWithoutMoment,o as OriginalDemo,J as __namedExportsOrder,H as default};
//# sourceMappingURL=Timeline.stories-c7a6883f.js.map