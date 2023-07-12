(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{jOAW:function(e,n,o){"use strict";o.r(n),o.d(n,"_frontmatter",(function(){return p})),o.d(n,"default",(function(){return b}));o("5hJT"),o("W1QL"),o("K/PF"),o("t91x"),o("75LO"),o("PJhk");var t=o("mXGw"),s=o("/FXl"),r=o("TjRS"),i=o("ZFoC"),a=o("bzer");o("aD51");function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e}).apply(this,arguments)}var p={};void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/Popover/Popover.mdx"}});var l={_frontmatter:p},u=r.a;function b(e){var n,o,b=e.components,d=function(e,n){if(null==e)return{};var o,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(s[o]=e[o]);return s}(e,["components"]);return Object(s.b)(u,c({},l,d,{components:b,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"popover"},"Popover"),Object(s.b)("p",null,"A Popover is used to display extra information or actions in a compact way."),Object(s.b)("h2",{id:"best-practices"},"Best practices"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Make sure the correct popover events are covered, depending on the event. (Click, hover, focus, etc...).")),Object(s.b)("h2",{id:"examples"},"Examples"),Object(s.b)("h3",{id:"basic-usage"},"Basic usage"),Object(s.b)(i.c,{__position:0,__code:"() => {\n  const [isVisible, setIsVisible] = React.useState(false)\n  const popoverContent = (\n    <Menu>\n      <Menu.Item>Option 1</Menu.Item>\n      <Menu.Item prefixIcon={<Trash />}>Option 2</Menu.Item>\n    </Menu>\n  )\n  const onClose = () => {\n    setIsVisible(false)\n  }\n  return (\n    <Popover isVisible={isVisible} onClose={onClose} content={popoverContent}>\n      <Button onClick={() => setIsVisible(!isVisible)}>\n        Open basic modal\n      </Button>\n    </Popover>\n  )\n}",__scope:(n={props:d,DefaultLayout:r.a,Playground:i.c,Props:i.d,Popover:a.s,Menu:a.n,Button:a.d,Trash:a.C},n.DefaultLayout=r.a,n._frontmatter=p,n),mdxType:"Playground"},(function(){var e=t.useState(!1),n=e[0],o=e[1],r=Object(s.b)(a.n,{mdxType:"Menu"},Object(s.b)(a.n.Item,null,"Option 1"),Object(s.b)(a.n.Item,{prefixIcon:Object(s.b)(a.C,{mdxType:"Trash"})},"Option 2"));return Object(s.b)(a.s,{isVisible:n,onClose:function(){o(!1)},content:r,mdxType:"Popover"},Object(s.b)(a.d,{onClick:function(){return o(!n)},mdxType:"Button"},"Open basic modal"))})),Object(s.b)("h3",{id:"popover-on-hover"},"Popover on hover"),Object(s.b)(i.c,{__position:1,__code:"() => {\n  const [isVisible, setIsVisible] = React.useState(false)\n  const popoverContent = <span>A handy tooltip!</span>\n  const closePopover = () => {\n    setIsVisible(false)\n  }\n  const openPopover = () => {\n    setIsVisible(true)\n  }\n  return (\n    <Popover\n      placement={'top'}\n      isVisible={isVisible}\n      onClose={closePopover}\n      content={popoverContent}\n    >\n      <Trash onMouseEnter={openPopover} onMouseLeave={closePopover} />\n    </Popover>\n  )\n}",__scope:(o={props:d,DefaultLayout:r.a,Playground:i.c,Props:i.d,Popover:a.s,Menu:a.n,Button:a.d,Trash:a.C},o.DefaultLayout=r.a,o._frontmatter=p,o),mdxType:"Playground"},(function(){var e=t.useState(!1),n=e[0],o=e[1],r=Object(s.b)("span",null,"A handy tooltip!"),i=function(){o(!1)};return Object(s.b)(a.s,{placement:"top",isVisible:n,onClose:i,content:r,mdxType:"Popover"},Object(s.b)(a.C,{onMouseEnter:function(){o(!0)},onMouseLeave:i,mdxType:"Trash"}))})),Object(s.b)("h2",{id:"api"},"API"),Object(s.b)(i.d,{of:a.s,mdxType:"Props"}))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/Popover/Popover.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-popover-popover-mdx-93083d178ad90c9b034d.js.map