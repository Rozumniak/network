(this["webpackJsonpreakt-kabzda-1"]=this["webpackJsonpreakt-kabzda-1"]||[]).push([[0],{104:function(e,t,n){e.exports={paginator:"Paginator_paginator__TmYM-",pageNumber:"Paginator_pageNumber__VTzaX",selectedPage:"Paginator_selectedPage__3SkPi"}},124:function(e,t,n){e.exports={item:"Post_item__qgLu_"}},125:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__IKVWh",posts:"MyPosts_posts__2281S"}},128:function(e,t,n){e.exports={discriptionBlock:"ProfileInfo_discriptionBlock__18aui",largeUserPhoto:"ProfileInfo_largeUserPhoto__2cOi9"}},131:function(e,t,n){e.exports={item:"Dialog_item__1E3wH",active:"Dialog_active__22o0r"}},133:function(e,t,n){e.exports={header:"Header_header__1Ya28",loginBlock:"Header_loginBlock__AUhM_"}},169:function(e,t,n){e.exports={item:"Message_item__3PE_v"}},170:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__3V6cJ"}},215:function(e,t,n){},216:function(e,t,n){},320:function(e,t,n){},340:function(e,t,n){},341:function(e,t,n){},342:function(e,t,n){},344:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n.n(s),i=n(28),c=n.n(i),a=(n(215),n(30)),o=n(31),u=n(33),l=n(32),j=(n(216),n(8)),d=n(52),b=n(124),h=n.n(b),f=n.p+"static/media/Curve-Loading.5e01ee79.gif",p=n(1),O=function(){return Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:f})})},g=n.p+"static/media/1.a2446033.png",m=function(e){return e.profile?Object(p.jsxs)("div",{className:h.a.item,children:[Object(p.jsx)("img",{src:e.profile.photos.small||g,className:h.a.userPhoto}),e.message,Object(p.jsx)("div",{children:Object(p.jsxs)("span",{children:["like ",e.like]})}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{onClick:function(){},children:"Like"})})]}):null},x=n(125),v=n.n(x),P=n(165),_=n(166),C=function(e){if(!e)return"Field is required"},S=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}},w=n(105),y=n(78),N=n.n(y),k=function(e){e.input;var t=e.meta,n=(e.child,Object(w.a)(e,["input","meta","child"])),s=t.error&&t.touched;return Object(p.jsxs)("div",{className:N.a.formControl+" "+(s?N.a.error:" "),children:[Object(p.jsx)("div",{children:n.children}),Object(p.jsx)("div",{children:s&&Object(p.jsx)("span",{children:t.error})})]})},I=function(e){var t=e.input,n=(e.meta,e.child,Object(w.a)(e,["input","meta","child"]));return Object(p.jsx)(k,Object(j.a)(Object(j.a)({},e),{},{children:Object(p.jsx)("textarea",Object(j.a)(Object(j.a)({},t),n))}))},T=function(e){var t=e.input,n=(e.meta,e.child,Object(w.a)(e,["input","meta","child"]));return Object(p.jsx)(k,Object(j.a)(Object(j.a)({},e),{},{children:Object(p.jsx)("input",Object(j.a)(Object(j.a)({},t),n))}))},U=S(100),E=Object(_.a)({form:"addPost"})((function(e){return Object(p.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(p.jsx)("div",{children:Object(p.jsx)(P.a,{validate:[C,U],placeholder:"Post",name:"Post",component:I})}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:"New post"})})]})})),A=r.a.memo((function(e){console.log("RENDER");var t=Object(d.a)(e.profilePage.posts).reverse().map((function(t){return Object(p.jsx)(m,{message:t.text,like:t.likesCount,dispatch:e.dispatch,profile:e.profile})}));if(!e.profile)return null;return Object(p.jsxs)("div",{className:v.a.postsBlock,children:[Object(p.jsx)("h3",{children:"My posts"}),Object(p.jsx)(E,{onSubmit:function(t){var n=t.Post;e.addPost(n),t.Post=null}}),Object(p.jsx)("div",{className:v.a.posts,children:t})]})})),F=(n(320),n(128)),R=n.n(F),D=(r.a.Component,n(83)),z=function(e){var t=Object(s.useState)(!1),n=Object(D.a)(t,2),r=n[0],i=n[1],c=Object(s.useState)(e.status),a=Object(D.a)(c,2),o=a[0],u=a[1];Object(s.useEffect)((function(){u(e.status)}),[e.status]);return Object(p.jsxs)("div",{children:[!r&&Object(p.jsx)("div",{children:Object(p.jsx)("span",{onDoubleClick:function(){i(!0)},children:e.status||"------"})}),r&&Object(p.jsx)("div",{children:Object(p.jsx)("input",{autoFocus:!0,onBlur:function(){i(!1),e.updateStatus(o)},onChange:function(e){u(e.currentTarget.value)},value:o})})]})},L=function(e){return e.profile?Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("img",{src:e.profile.photos.large||g,className:R.a.largeUserPhoto}),e.isOwner&&Object(p.jsx)("input",{type:"file"}),Object(p.jsx)(z,{id:e.id,status:e.status,updateStatus:e.updateStatus})]}),Object(p.jsx)("div",{className:R.a.discriptionBlock})]}):Object(p.jsx)("div",{children:Object(p.jsx)(O,{})})},M=n(123).create({withCredentials:!0,headers:{"API-KEY":"cc3bd8cc-4d54-4fd5-94a6-1a89051413f6"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),B=function(e,t){return M.get("users?page=".concat(e," &count=").concat(t)).then((function(e){return e.data}))},G=function(e){return M.delete("follow/".concat(e))},H=function(e){return M.post("follow/".concat(e))},Y=function(e){return M.get("profile/"+e)},J=function(e){return M.get("profile/status/"+e)},V=function(e){return M.put("profile/status",{status:e})},W=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return M.post("auth/login",{email:e,password:t,rememberMe:n})},K=function(){return M.delete("auth/login")},q="FOLLOW",Q="UNFOLLOW",Z="SET_USERS",X="SET_CURRENT_PAGE",$="SET_USERS_TOTAL_COUNT",ee="TOGGLE_IS_FETCHING",te="TOGGLE_IS_FOLLOWING_IN_PROGRESS",ne={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},se=function(e){return{type:q,userID:e}},re=function(e){return{type:Q,userID:e}},ie=function(e){return{type:X,currentPage:e}},ce=function(e){return{type:ee,isFetching:e}},ae=function(e,t){return{type:te,isFollowing:e,userId:t}},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(j.a)(Object(j.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(j.a)(Object(j.a)({},e),{},{followed:!0}):e}))});case Q:return Object(j.a)(Object(j.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(j.a)(Object(j.a)({},e),{},{followed:!1}):e}))});case Z:return Object(j.a)(Object(j.a)({},e),{},{users:t.users});case X:return Object(j.a)(Object(j.a)({},e),{},{currentPage:t.currentPage});case $:return Object(j.a)(Object(j.a)({},e),{},{totalUsersCount:t.count});case ee:return Object(j.a)(Object(j.a)({},e),{},{isFetching:t.isFetching});case te:return Object(j.a)(Object(j.a)({},e),{},{followingInProgress:t.isFollowing?[].concat(Object(d.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},ue="ADD-POST",le="SET_USER_PROFILE",je="SET_USER_STATUS",de="STATUS_UPDATE",be={posts:[{id:1,text:"Hello world",likesCount:12},{id:2,text:"This is my first post",likesCount:10}],profile:null,status:""},he=function(e){return{type:le,profile:e}},fe=function(e){return{type:je,status:e}},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ue:return Object(j.a)(Object(j.a)({},e),{},{posts:[].concat(Object(d.a)(e.posts),[{id:6,text:t.newText,likesCount:0}])});case le:return Object(j.a)(Object(j.a)({},e),{},{profile:t.profile});case je:return Object(j.a)(Object(j.a)({},e),{},{status:t.status});case de:return Object(j.a)(Object(j.a)({},e),{},{statusInProgress:t.isUpdate});default:return e}},Oe=n(17),ge=Object(Oe.b)((function(e){return{profilePage:e.profilePage,profile:e.profilePage.profile}}),(function(e){return{addPost:function(t){var n=function(e){return{type:ue,newText:e}}(t);e(n)}}}))(A),me=function(e){return Object(p.jsxs)("div",{className:"",children:[Object(p.jsx)(L,{profile:e.profile,id:e.id,status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner}),Object(p.jsx)(ge,{})]})},xe=n(21),ve=function(e){return{isAuth:e.authReducer.isAuth}},Pe=function(e){var t=function(t){Object(u.a)(s,t);var n=Object(l.a)(s);function s(){return Object(a.a)(this,s),n.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return this.props.isAuth?Object(p.jsx)(e,Object(j.a)({},this.props)):Object(p.jsx)(xe.a,{to:"/login"})}}]),s}(r.a.Component);return Object(Oe.b)(ve)(t)},_e=n(14),Ce=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userID;e||(e=this.props.id),this.props.getProfileTh(e),this.props.getUserStatusTh(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.match.params.userID!=e.match.params.userID&&this.refreshProfile()}},{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsx)(me,Object(j.a)(Object(j.a)({},this.props),{},{profile:this.props.profile,id:this.props.id,status:this.props.status,updateStatus:this.props.updateStatusTh,isOwner:!this.props.match.params.userID}))})}}]),n}(r.a.Component),Se=Object(_e.d)(Object(Oe.b)((function(e){return{profile:e.profilePage.profile,id:e.authReducer.id,status:e.profilePage.status}}),{setUserProfile:he,getProfileTh:function(e){return function(t){Y(e).then((function(e){t(he(e.data))}))}},getUserStatusTh:function(e){return function(t){J(e).then((function(e){t(fe(e.data))}))}},updateStatusTh:function(e){return function(t){V(e).then((function(n){0===n.data.resultCode&&t(fe(e))}))}}}),Pe,xe.f)(Ce),we=(n(340),function(e){return Object(p.jsx)("div",{children:"News"})}),ye=n(22),Ne=(n(341),function(e){return Object(p.jsx)("div",{children:"Music"})}),ke=(n(342),function(e){return Object(p.jsx)("div",{children:"Settings"})}),Ie="SEND-MESSAGE",Te={dialogs:[{id:1,name:"Ruslan"},{id:2,name:"Ihor"},{id:3,name:"Diana"}],messages:[{id:1,message:"Hello world"},{id:2,message:"Yo"},{id:3,message:"Yo"},{id:3,message:"Yawawdaao"}]},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ie:return Object(j.a)(Object(j.a)({},e),{},{messageText:"",messages:[].concat(Object(d.a)(e.messages),[{id:1,message:t.messageText}])});default:return e}},Ee=n(84),Ae=n.n(Ee),Fe=n(131),Re=n.n(Fe),De=function(e){var t="/dialogs/"+e.id;return Object(p.jsx)("div",{className:Re.a.item,children:Object(p.jsxs)(ye.b,{to:t,activeClassName:Re.a.active,children:[" ",e.name]})})},ze=n(169),Le=n.n(ze),Me=function(e){return Object(p.jsx)("div",{className:Le.a.item,children:e.messages})},Be=S(50),Ge=Object(_.a)({form:"message"})((function(e){return Object(p.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(p.jsx)("div",{children:Object(p.jsx)(P.a,{name:"message",component:I,validate:[C,Be]})}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]})})),He=function(e){var t=e.messagesPage.messages.map((function(e){return Object(p.jsx)(Me,{messages:e.message})})),n=e.messagesPage.dialogs.map((function(e){return Object(p.jsx)(De,{name:e.name,activeClassName:Ae.a.active,id:e.id})}));return Object(p.jsxs)("div",{className:Ae.a.dialogs,children:[Object(p.jsx)("div",{className:Ae.a.dialogsItem,children:n}),Object(p.jsxs)("div",{className:Ae.a.messages,children:[t,Object(p.jsx)(Ge,{onSubmit:function(t){var n=t.message;e.sendMessage(n),t.message=null}})]})]})},Ye=Object(_e.d)(Object(Oe.b)((function(e){return{messagesPage:e.messagesPage}}),(function(e){return{sendMessage:function(t){e(function(e){return{type:Ie,messageText:e}}(t))}}})),Pe)(He),Je=n(37),Ve=n.n(Je),We=function(e){return Object(p.jsx)("div",{className:Ve.a.navbar,children:Object(p.jsxs)("nav",{className:Ve.a.nav,children:[Object(p.jsx)("div",{className:Ve.a.item,children:Object(p.jsx)(ye.b,{to:"/news",activeClassName:Ve.a.active,children:" \u041d\u043e\u0432\u043e\u0441\u0442\u0438"})}),Object(p.jsx)("div",{className:Ve.a.item,children:Object(p.jsx)(ye.b,{to:"/music",activeClassName:Ve.a.active,children:"\u041c\u0443\u0437\u044b\u043a\u0430"})}),Object(p.jsx)("div",{className:Ve.a.item,children:Object(p.jsx)(ye.b,{to:"/settings",activeClassName:Ve.a.active,children:" \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"})})]})})},Ke=(Object(Oe.b)((function(e){return{sidebar:e.sidebar}}),(function(){return{}}))(We),n(57)),qe=n(170),Qe=n.n(qe),Ze=n(104),Xe=n.n(Ze),$e=n(7),et=n.n($e),tt=n(348),nt=function(e){for(var t=e.totalItemsCount,n=e.portionSize,r=e.currentPage,i=e.onPageChange,c=Math.ceil(t/n),a=[],o=1;o<=c;o++)a.push(o);var u=Math.ceil(c/n),l=Object(s.useState)(1),j=Object(D.a)(l,2),d=j[0],b=j[1],h=(d-1)*n+1,f=d*n;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:Xe.a.paginator,children:[d>1&&Object(p.jsx)(tt.a,{onClick:function(){b(1)},children:"First"}),d>1&&Object(p.jsx)(tt.a,{onClick:function(){b(d-1)},children:"Previous"}),a.filter((function(e){return e>=h&&e<=f})).map((function(e){return Object(p.jsx)(tt.a,{className:et()(Object(Ke.a)({},Xe.a.selectedPage,r===e),Xe.a.pageNumber),onClick:function(t){i(e)},children:e},e)})),u>d&&Object(p.jsx)(tt.a,{onClick:function(){b(d+1)},children:"Next"}),u>d&&Object(p.jsx)(tt.a,{onClick:function(){b(u)},children:"Last"})]})})},st=(n(164),function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:Object(p.jsx)(nt,{totalItemsCount:e.totalUsersCount,onPageChange:e.onPageChange,currentPage:e.currentPage,portionSize:e.pageSize})}),e.users.map((function(t){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:Object(p.jsx)(ye.b,{to:"/profile/"+t.id,children:Object(p.jsx)("img",{src:null!=t.photos.small?t.photos.small:g,className:Qe.a.userPhoto})})}),Object(p.jsx)("div",{children:t.followed?Object(p.jsx)(tt.a,{type:"primary",size:"middle",disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:" Unfollow "}):Object(p.jsx)(tt.a,{type:"primary",size:"middle",disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"Follow"})})]}),Object(p.jsxs)("span",{children:[Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:t.name}),Object(p.jsx)("div",{children:t.status})]}),Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:'"u.location.country"'}),Object(p.jsx)("div",{children:"u.location.city"})]})]})]},t.id)}))]})}),rt=n(175),it=Object(rt.a)((function(e){return e.usersPage.users}),(function(e){return e})),ct=function(e){return e.usersPage.pageSize},at=function(e){return e.usersPage.totalUsersCount},ot=function(e){return e.usersPage.currentPage},ut=function(e){return e.usersPage.isFetching},lt=function(e){return e.usersPage.followingInProgress},jt=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onPageChange=function(t){e.props.getUsersTh(t,e.props.pageSize)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersTh(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){var e;return Object(p.jsxs)(p.Fragment,{children:[this.props.isFetching?Object(p.jsx)(O,{}):null,Object(p.jsx)(st,(e={totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChange:this.onPageChange,follow:this.props.follow,unfollow:this.props.unfollow,users:this.props.users,isFetching:this.props.isFetching,followingInProgress:this.props.followingInProgress,toggleFollowingInProgress:this.props.toggleFollowingInProgress},Object(Ke.a)(e,"unfollow",this.props.unfollowTh),Object(Ke.a)(e,"follow",this.props.followTh),e))]})}}]),n}(r.a.Component),dt=Object(_e.d)(Pe,Object(Oe.b)((function(e){return{users:it(e),pageSize:ct(e),totalUsersCount:at(e),currentPage:ot(e),isFetching:ut(e),followingInProgress:lt(e)}}),{follow:se,unfollow:re,setCurrentPage:ie,getUsersTh:function(e,t){return function(n){n(ce(!0)),n(ie(e)),B(e,t).then((function(e){var t,s;n(ce(!1)),n((t=e.items,{type:Z,users:t})),n((s=e.totalCount,{type:$,count:s}))}))}},unfollowTh:function(e){return function(t){t(ae(!0,e)),G(e).then((function(n){0==n.data.resultCode&&t(re(e)),t(ae(!1,e))}))}},followTh:function(e){return function(t){t(ae(!0,e)),H(e).then((function(n){0==n.data.resultCode&&t(se(e)),t(ae(!1,e))}))}}}))(jt),bt=n(133),ht=n.n(bt),ft=n(350),pt=function(e){return Object(p.jsxs)("header",{className:ht.a.header,children:[Object(p.jsx)("img",{src:"https://logoza.ru/img/rock.png"}),Object(p.jsx)("div",{className:ht.a.loginBlock,children:e.isAuth?Object(p.jsxs)("div",{children:[" ",e.login," - ",Object(p.jsx)(ft.a,{onClick:e.logout,children:"Log out"})]}):Object(p.jsx)(ye.b,{to:"/login",children:"Login"})})]})},Ot=n(62),gt="SET_USER_DATA",mt="SET_AUTH_PROFILE",xt={id:null,login:null,email:null,isAuth:!1,isFetching:!1,authUserProfile:null},vt=function(e,t,n,s){return{type:gt,payload:{id:e,login:t,email:n,isAuth:s}}},Pt=function(){return function(e){return M.get("auth/me").then((function(t){if(0===t.data.resultCode){var n=t.data.data,s=n.id,r=n.login,i=n.email;e(vt(s,r,i,!0))}}))}},_t=function(){return function(e){K().then((function(t){0===t.data.resultCode&&e(vt(null,null,null,!1))}))}},Ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case gt:return Object(j.a)(Object(j.a)(Object(j.a)({},e),t.payload),t.payload.isAuth);case mt:return Object(j.a)(Object(j.a)({},e),{},{authUserProfile:t.authProfile});default:return e}},St=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)(pt,Object(j.a)({},this.props))}}]),n}(r.a.Component),wt=(Object(Oe.b)((function(e){return{login:e.authReducer.login,isAuth:e.authReducer.isAuth,authUserProfile:e.authReducer.authUserProfile}}),{logout:_t})(St),S(20)),yt=Object(_.a)({form:"login"})((function(e){return Object(p.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(p.jsx)("div",{children:Object(p.jsx)(P.a,{placeholder:"Email",name:"email",component:T,validate:[C,wt]})}),Object(p.jsx)("div",{children:Object(p.jsx)(P.a,{placeholder:"Password",name:"password",type:"password",component:T,validate:[C,wt]})}),Object(p.jsxs)("div",{children:[Object(p.jsx)(P.a,{type:"checkbox",name:"rememberMe",component:T})," Remember me"]}),e.error&&Object(p.jsx)("div",{className:N.a.formSummaryError,children:e.error}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:"Login"})})]})})),Nt=function(e){return e.isAuth?Object(p.jsx)(xe.a,{to:"/profile"}):Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Login"}),Object(p.jsx)(yt,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})},kt=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsx)(Nt,{login:this.props.login,isAuth:this.props.isAuth})})}}]),n}(r.a.Component),It=Object(_e.d)(Object(Oe.b)((function(e){return{isAuth:e.authReducer.isAuth}}),{login:function(e,t,n){return function(s){W(e,t,n).then((function(e){if(0===e.data.resultCode)s(Pt());else{var t=e.data.messages.length>0?e.data.messages[0]:"Some error";s(Object(Ot.a)("login",{_error:t}))}}))}}}))(kt),Tt="INITIALIZED_SUCCESS",Ut={initialized:!1},Et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ut,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Tt:return Object(j.a)(Object(j.a)({},e),{},{initialized:!0});default:return e}},At=n(347),Ft=n(349),Rt=n(351),Dt=n(352),zt=n(353),Lt=n(354),Mt=n(355),Bt=At.a.Header,Gt=At.a.Sider,Ht=At.a.Content,Yt=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={collapsed:!1},e.toggle=function(){e.setState({collapsed:!e.state.collapsed})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(At.a,{children:[Object(p.jsxs)(Gt,{trigger:null,collapsible:!0,collapsed:this.state.collapsed,children:[Object(p.jsx)("div",{className:"logo"}),Object(p.jsxs)(Ft.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"],children:[Object(p.jsx)(Ft.a.Item,{icon:Object(p.jsx)(Rt.a,{}),children:Object(p.jsx)(ye.b,{to:"/profile",activeClassName:Ve.a.active,children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"})},"1"),Object(p.jsx)(Ft.a.Item,{icon:Object(p.jsx)(Dt.a,{}),children:Object(p.jsx)(ye.b,{to:"/dialogs",activeClassName:Ve.a.active,children:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"})},"2"),Object(p.jsx)(Ft.a.Item,{icon:Object(p.jsx)(zt.a,{}),children:Object(p.jsx)(ye.b,{to:"/users",activeClassName:Ve.a.active,children:" \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"})},"3")]})]}),Object(p.jsxs)(At.a,{className:"site-layout",children:[Object(p.jsxs)(Bt,{className:"site-layout-background",style:{padding:0},children:[Object(p.jsxs)("div",{className:"auth-block",children:[" ",this.props.isAuth?Object(p.jsxs)("div",{children:[" ",this.props.login," - ",Object(p.jsx)(ft.a,{onClick:this.props.logout,children:"Log out"})]}):Object(p.jsx)(ye.b,{to:"/login",children:"Login"})]}),r.a.createElement(this.state.collapsed?Lt.a:Mt.a,{className:"trigger",onClick:this.toggle})]}),Object(p.jsxs)(Ht,{className:"site-layout-background",style:{margin:"24px 16px",padding:24,minHeight:280},children:[Object(p.jsx)(xe.b,{path:"/dialogs",render:function(){return Object(p.jsx)(Ye,{})}}),Object(p.jsx)(xe.b,{path:"/profile/:userID?",render:function(){return Object(p.jsx)(Se,{})}}),Object(p.jsx)(xe.b,{path:"/news",render:function(){return Object(p.jsx)(we,{})}}),Object(p.jsx)(xe.b,{path:"/music",render:function(){return Object(p.jsx)(Ne,{})}}),Object(p.jsx)(xe.b,{path:"/settings",render:function(){return Object(p.jsx)(ke,{})}}),Object(p.jsx)(xe.b,{path:"/users",render:function(){return Object(p.jsx)(dt,{})}}),Object(p.jsx)(xe.b,{path:"/login",render:function(){return Object(p.jsx)(It,{})}})]})]})]})}):Object(p.jsx)(O,{})}}]),n}(r.a.Component),Jt=Object(_e.d)(xe.f,Object(Oe.b)((function(e){return{initialized:e.app.initialized,login:e.authReducer.login,isAuth:e.authReducer.isAuth,authUserProfile:e.authReducer.authUserProfile}}),{initializeApp:function(){return function(e){e(Pt()).then((function(){e({type:Tt})}))}},logout:_t}))(Yt),Vt={friendName:[{friendsName:"Diana"},{friendsName:"Ihor"},{friendsName:"Ruslan"}]},Wt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Vt;return e},Kt=n(182),qt=n(167),Qt=Object(_e.c)({profilePage:pe,messagesPage:Ue,sidebar:Wt,usersPage:oe,authReducer:Ct,app:Et,form:qt.a}),Zt=Object(_e.e)(Qt,Object(_e.a)(Kt.a));window.store=Zt;var Xt=Zt;c.a.render(Object(p.jsx)(ye.a,{children:Object(p.jsx)(Oe.a,{store:Xt,children:Object(p.jsx)(Jt,{})})}),document.getElementById("root"))},37:function(e,t,n){e.exports={nav:"Navbar_nav__1BCBQ",item:"Navbar_item__3RZJI",active:"Navbar_active__3bnlt",navbar:"Navbar_navbar__2QnsP"}},78:function(e,t,n){e.exports={formControl:"FormControls_formControl__2Y3MO",error:"FormControls_error__3fwNV",formSummaryError:"FormControls_formSummaryError__3uC7c"}},84:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__3d0hk"}}},[[344,1,2]]]);
//# sourceMappingURL=main.d08844ef.chunk.js.map