(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports={CardList:"CardList_CardList__Yp_Jr"}},function(e,t,n){e.exports={Card:"Card_Card__30v86"}},function(e,t,n){e.exports={SearchBox:"SearchBox_SearchBox__1VTMB"}},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),c=n.n(s),a=n(3),o=n.n(a),i=(n(16),n(4)),h=n(5),d=n(10),l=n(9),u=n(6),j=n.n(u),m=n(7),p=n.n(m),x=function(e){return Object(r.jsxs)("div",{className:p.a.Card,children:[Object(r.jsx)("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set1&size=180x180"),alt:e.monster.name}),Object(r.jsx)("h3",{children:e.monster.name}),Object(r.jsx)("p",{children:e.monster.email})]})},f=function(e){return Object(r.jsx)("div",{className:j.a.CardList,children:e.monsters.map((function(e){return Object(r.jsx)(x,{monster:e},e.id)}))})},b=n(8),C=n.n(b),O=function(e){var t=e.placeholder,n=e.handleChange;return Object(r.jsx)("div",{children:Object(r.jsx)("input",{className:C.a.SearchBox,type:"search",placeholder:t,onChange:n})})},v=(n(17),function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={monsters:[],searchField:""},e.handleChange=function(t){e.setState({searchField:t.target.value})},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,s=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{children:"Monsters Rolodex"}),Object(r.jsx)(O,{placeholder:"Search Monsters",handleChange:this.handleChange}),Object(r.jsx)(f,{monsters:s})]})}}]),n}(s.Component)),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),c(e),a(e)}))};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(v,{})}),document.getElementById("root")),g()}],[[18,1,2]]]);
//# sourceMappingURL=main.390af591.chunk.js.map