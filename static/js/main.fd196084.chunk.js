(this.webpackJsonpformhandling=this.webpackJsonpformhandling||[]).push([[0],{26:function(t,e,n){},48:function(t,e,n){},49:function(t,e,n){"use strict";n.r(e);var a=n(2),r=n.n(a),c=n(19),i=n.n(c),s=(n(26),n(27),n(10)),o=n.n(s),u=n(20),m=n(3),l=n(4),h=n(6),j=n(5),f=n(0),b=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={trim:""},t.onFormSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state.trim)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("form",{onSubmit:this.onFormSubmit,children:Object(f.jsxs)("div",{className:"form-group d-flex justify-content-center align-items-center flex-column mt-5 w-75  p-5 mx-auto border ",children:[Object(f.jsx)("label",{children:"Image Search:"}),Object(f.jsx)("input",{value:this.state.trim,onChange:function(e){return t.setState({trim:e.target.value.toLocaleLowerCase()})},className:"form-control w-75 m-auto",type:"text"})]})})})}}]),n}(a.Component),p=b,d=n(21),g=n.n(d).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID kkf-ubCTR4rXL9uoQx9MPJqyrPBcgiBHBt2vexSV2Ao"}}),v=(n(48),function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(m.a)(this,n),(a=e.call(this,t)).setSpans=function(){var t=a.imageRef.current.clientHeight,e=Math.ceil(t/10);a.setState({spans:e})},a.state={spans:0},a.imageRef=r.a.createRef(),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){var t=this.props.image,e=t.description,n=t.urls;return Object(f.jsx)("div",{style:{gridRowEnd:"span ".concat(this.state.spans)},children:Object(f.jsx)("img",{ref:this.imageRef,alt:e,src:n.regular})})}}]),n}(a.Component)),O=function(t){var e=t.images.map((function(t){return Object(f.jsx)(v,{image:t},t.id)}));return Object(f.jsx)("div",{className:"image-list m-5",children:e})},x=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={images:[]},t.onSearchSubmit=function(){var e=Object(u.a)(o.a.mark((function e(n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/search/photos",{params:{query:n}});case 2:a=e.sent,t.setState({images:a.data.results});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return Object(l.a)(n,[{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(p,{onSubmit:this.onSearchSubmit}),Object(f.jsx)(O,{images:this.state.images})]})}}]),n}(a.Component);i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(x,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.fd196084.chunk.js.map