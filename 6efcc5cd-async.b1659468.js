(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["6efcc5cd"],{"5a960b0a":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"components",{enumerable:!0,get:function(){return a;}});let a=null;},"6efcc5cd":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return h;}});var a=n("852bbaa9"),o=n("f19d2b93"),s=a._(n("5b220c3d")),l=n("9c86e52a"),i=n("c9b4b3d1"),r=n("847c54fd"),u=n("5a960b0a"),d=n("9f01e7aa");let c={},m={name:"antd",description:"An enterprise-class UI design language and React components implementation",version:"5.24.0",license:"MIT",repository:{type:"git",url:"https://github.com/ant-design/ant-design"}},f="browser",p=void 0,g={footer:'Copyright \xa9 2025 | Powered by <a href="https://d.umijs.org" target="_blank" rel="noreferrer">dumi</a>',prefersColor:{default:"light",switch:!0},nprogress:!0,lastUpdated:!0,sourceLink:"https://github.com/ant-design/ant-design/tree/HEAD/{fileName}#L{line}",editLink:"https://github.com/ant-design/ant-design/edit/HEAD/{filename}"};function h(){let e=(0,l.useOutlet)(),[t,n]=(0,s.useState)(!1),a=(0,s.useRef)(l.history.location.pathname);(0,s.useEffect)(()=>l.history.listen(e=>{e.location.pathname!==a.current&&(a.current=e.location.pathname,document.documentElement.scrollTo(0,0));}),[]);let h=s.default.useMemo(()=>{let e={pkg:m,historyType:f,entryExports:c,demos:null,components:u.components,locales:d.locales,loading:t,setLoading:n,hostname:p,themeConfig:g,_2_level_nav_available:!0};return Object.defineProperty(e,"demos",{get:()=>((0,i.warning)(!1,"`demos` return empty in latest version, please use `useDemo` instead."),{})}),e;},[m,f,c,u.components,d.locales,t,n,p,g,!0]);return(0,o.jsx)(r.SiteContext.Provider,{value:h,children:e});}}}]);