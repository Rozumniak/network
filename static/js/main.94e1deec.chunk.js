(this["webpackJsonpreakt-kabzda-1"]=this["webpackJsonpreakt-kabzda-1"]||[]).push([[0],{100:function(e,t,n){e.exports={header:"Header_header__1Ya28",loginBlock:"Header_loginBlock__AUhM_"}},137:function(e,t,n){e.exports={item:"Message_item__3PE_v"}},140:function(e,t,n){"use strict";var r=n(16),s=n(17),i=n(19),c=n(18),a=n(1),o=n.n(a),u=(n(174),n(3)),l=n(90),d=n.n(l),j=n.p+"static/media/Curve-Loading.5e01ee79.gif",b=n(0),f=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:j})})},h=n.p+"static/media/1.a2446033.png",p=function(e){return e.profile?Object(b.jsxs)("div",{className:d.a.item,children:[Object(b.jsx)("img",{src:null!=e.profile.photos.small?e.profile.photos.small:h,className:d.a.userPhoto}),e.message,Object(b.jsx)("div",{children:Object(b.jsxs)("span",{children:["like ",e.like]})}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{onClick:function(){},children:"Like"})})]}):null},O=n(91),g=n.n(O),m=n(133),x=n(134),v=function(e){if(!e)return"Field is required"},P=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}},_=n(72),w=n(52),C=n.n(w),S=function(e){e.input;var t=e.meta,n=(e.child,Object(_.a)(e,["input","meta","child"])),r=t.error&&t.touched;return Object(b.jsxs)("div",{className:C.a.formControl+" "+(r?C.a.error:" "),children:[Object(b.jsx)("div",{children:n.children}),Object(b.jsx)("div",{children:r&&Object(b.jsx)("span",{children:t.error})})]})},N=function(e){var t=e.input,n=(e.meta,e.child,Object(_.a)(e,["input","meta","child"]));return Object(b.jsx)(S,Object(u.a)(Object(u.a)({},e),{},{children:Object(b.jsx)("textarea",Object(u.a)(Object(u.a)({},t),n))}))},k=function(e){var t=e.input,n=(e.meta,e.child,Object(_.a)(e,["input","meta","child"]));return Object(b.jsx)(S,Object(u.a)(Object(u.a)({},e),{},{children:Object(b.jsx)("input",Object(u.a)(Object(u.a)({},t),n))}))},y=P(10),I=Object(x.a)({form:"addPost"})((function(e){return Object(b.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(b.jsx)("div",{children:Object(b.jsx)(m.a,{validate:[v,y],placeholder:"Post",name:"Post",component:N})}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{children:"New post"})})]})})),T=function(e){var t=e.profilePage.posts.map((function(t){return Object(b.jsx)(p,{message:t.text,like:t.likesCount,dispatch:e.dispatch,profile:e.profile})}));if(!e.profile)return null;return Object(b.jsxs)("div",{className:g.a.postsBlock,children:[Object(b.jsx)("h3",{children:"My posts"}),Object(b.jsx)(I,{onSubmit:function(t){var n=t.Post;e.addPost(n)}}),Object(b.jsx)("div",{className:g.a.posts,children:t})]})},U=(n(278),n(94)),E=n.n(U),A=(o.a.Component,n(101)),F=function(e){var t=Object(a.useState)(!1),n=Object(A.a)(t,2),r=n[0],s=n[1],i=Object(a.useState)(e.status),c=Object(A.a)(i,2),o=c[0],u=c[1];return Object(b.jsxs)("div",{children:[!r&&Object(b.jsx)("div",{children:Object(b.jsx)("span",{onDoubleClick:function(){s(!0)},children:e.status||"------"})}),r&&Object(b.jsx)("div",{children:Object(b.jsx)("input",{autoFocus:!0,onBlur:function(){s(!1),e.updateStatus(o)},onChange:function(e){u(e.currentTarget.value)},value:o})})]})},R=function(e){return e.profile?Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:null!=e.profile.photos.large?e.profile.photos.large:h,className:E.a.largeUserPhoto}),Object(b.jsx)(F,{id:e.id,status:e.status,updateStatus:e.updateStatus})]}),Object(b.jsx)("div",{className:E.a.discriptionBlock,children:"avatar + description"})]}):Object(b.jsx)("div",{children:Object(b.jsx)(f,{})})},L=n(29),D=n(10),z=Object(D.b)((function(e){return{profilePage:e.profilePage,profile:e.profilePage.profile}}),(function(e){return{addPost:function(t){var n=Object(L.a)(t);e(n)}}}))(T),M=function(e){return Object(b.jsxs)("div",{className:"",children:[Object(b.jsx)(R,{profile:e.profile,id:e.id,status:e.status,updateStatus:e.updateStatus}),Object(b.jsx)(z,{})]})},B=(n(89),n(11)),G=function(e){return{isAuth:e.authReducer.isAuth}},H=function(e){var t=function(t){Object(i.a)(a,t);var n=Object(c.a)(a);function a(){return Object(r.a)(this,a),n.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return this.props.isAuth?Object(b.jsx)(e,Object(u.a)({},this.props)):Object(b.jsx)(B.a,{to:"/login"})}}]),a}(o.a.Component);return Object(D.b)(G)(t)},Y=n(9),J=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userID;e||(e=this.props.id),this.props.getProfileTh(e),this.props.getUserStatusTh(e)}},{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)(M,Object(u.a)(Object(u.a)({},this.props),{},{profile:this.props.profile,id:this.props.id,status:this.props.status,updateStatus:this.props.updateStatusTh}))})}}]),n}(o.a.Component),W=Object(Y.d)(Object(D.b)((function(e){return{profile:e.profilePage.profile,id:e.authReducer.id,status:e.profilePage.status}}),{setUserProfile:L.e,getProfileTh:L.c,getUserStatusTh:L.d,updateStatusTh:L.f}),H,B.f)(J),V=(n(297),function(e){return Object(b.jsx)("div",{children:"News"})}),Z=(n(298),function(e){return Object(b.jsx)("div",{children:"Music"})}),q=(n(299),function(e){return Object(b.jsx)("div",{children:"Settings"})}),K=n(69),Q=n(56),X=n.n(Q),$=n(97),ee=n.n($),te=n(12),ne=function(e){var t="/dialogs/"+e.id;return Object(b.jsx)("div",{className:ee.a.item,children:Object(b.jsxs)(te.b,{to:t,activeClassName:ee.a.active,children:[" ",e.name]})})},re=n(137),se=n.n(re),ie=function(e){return Object(b.jsx)("div",{className:se.a.item,children:e.messages})},ce=P(50),ae=Object(x.a)({form:"message"})((function(e){return Object(b.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(b.jsx)("div",{children:Object(b.jsx)(m.a,{name:"message",component:N,validate:[v,ce]})}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]})})),oe=function(e){var t=e.messagesPage.messages.map((function(e){return Object(b.jsx)(ie,{messages:e.message})})),n=e.messagesPage.dialogs.map((function(e){return Object(b.jsx)(ne,{name:e.name,activeClassName:X.a.active,id:e.id})}));return Object(b.jsxs)("div",{className:X.a.dialogs,children:[Object(b.jsx)("div",{className:X.a.dialogsItem,children:n}),Object(b.jsxs)("div",{className:X.a.messages,children:[t,Object(b.jsx)(ae,{onSubmit:function(t){var n=t.message;e.sendMessage(n),t.message=null}})]})]})},ue=Object(Y.d)(Object(D.b)((function(e){return{messagesPage:e.messagesPage}}),(function(e){return{sendMessage:function(t){e(Object(K.b)(t))}}})),H)(oe),le=n(15),de=n.n(le),je=function(e){return Object(b.jsx)("div",{className:de.a.navbar,children:Object(b.jsxs)("nav",{className:de.a.nav,children:[Object(b.jsx)("div",{className:de.a.item,children:Object(b.jsx)(te.b,{to:"/profile",activeClassName:de.a.active,children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"})}),Object(b.jsx)("div",{className:de.a.item,children:Object(b.jsx)(te.b,{to:"/dialogs",activeClassName:de.a.active,children:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"})}),Object(b.jsx)("div",{className:de.a.item,children:Object(b.jsx)(te.b,{to:"/news",activeClassName:de.a.active,children:" \u041d\u043e\u0432\u043e\u0441\u0442\u0438"})}),Object(b.jsx)("div",{className:de.a.item,children:Object(b.jsx)(te.b,{to:"/music",activeClassName:de.a.active,children:"\u041c\u0443\u0437\u044b\u043a\u0430"})}),Object(b.jsx)("div",{className:de.a.item,children:Object(b.jsx)(te.b,{to:"/settings",activeClassName:de.a.active,children:" \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"})}),Object(b.jsx)("div",{className:de.a.item,children:Object(b.jsx)(te.b,{to:"/users",activeClassName:de.a.active,children:" \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"})})]})})},be=(Object(D.b)((function(e){return{sidebar:e.sidebar}}),(function(){return{}}))(je),n(51)),fe=n(28),he=n(98),pe=n.n(he),Oe=(n(132),n(300)),ge=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],r=1;r<=t;r++)n.push(r);return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:n.map((function(t){return Object(b.jsx)("button",{className:e.currentPage===t&&pe.a.selectedPage,onClick:function(n){e.onPageChange(t)},children:t})}))}),e.users.map((function(t){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("span",{children:[Object(b.jsx)("div",{children:Object(b.jsx)(te.b,{to:"/profile/"+t.id,children:Object(b.jsx)("img",{src:null!=t.photos.small?t.photos.small:h,className:pe.a.userPhoto})})}),Object(b.jsx)("div",{children:t.followed?Object(b.jsx)(Oe.a,{size:"sm",disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:" Unfollow "}):Object(b.jsx)(Oe.a,{size:"sm",disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"Follow"})})]}),Object(b.jsxs)("span",{children:[Object(b.jsxs)("span",{children:[Object(b.jsx)("div",{children:t.name}),Object(b.jsx)("div",{children:t.status})]}),Object(b.jsxs)("span",{children:[Object(b.jsx)("div",{children:'"u.location.country"'}),Object(b.jsx)("div",{children:"u.location.city"})]})]})]},t.id)}))]})},me=n(138),xe=Object(me.a)((function(e){return e.usersPage.users}),(function(e){return e})),ve=function(e){return e.usersPage.pageSize},Pe=function(e){return e.usersPage.totalUsersCount},_e=function(e){return e.usersPage.currentPage},we=function(e){return e.usersPage.isFetching},Ce=function(e){return e.usersPage.followingInProgress},Se=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).onPageChange=function(t){e.props.getUsersTh(t,e.props.pageSize)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersTh(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){var e;return Object(b.jsxs)(b.Fragment,{children:[this.props.isFetching?Object(b.jsx)(f,{}):null,Object(b.jsx)(ge,(e={totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChange:this.onPageChange,follow:this.props.follow,unfollow:this.props.unfollow,users:this.props.users,isFetching:this.props.isFetching,followingInProgress:this.props.followingInProgress,toggleFollowingInProgress:this.props.toggleFollowingInProgress},Object(be.a)(e,"unfollow",this.props.unfollowTh),Object(be.a)(e,"follow",this.props.followTh),e))]})}}]),n}(o.a.Component),Ne=Object(Y.d)(H,Object(D.b)((function(e){return{users:xe(e),pageSize:ve(e),totalUsersCount:Pe(e),currentPage:_e(e),isFetching:we(e),followingInProgress:Ce(e)}}),{follow:fe.b,unfollow:fe.f,setCurrentPage:fe.e,getUsersTh:fe.d,unfollowTh:fe.g,followTh:fe.c}))(Se),ke=n(100),ye=n.n(ke),Ie=function(e){return Object(b.jsxs)("header",{className:ye.a.header,children:[Object(b.jsx)("img",{src:"https://logoza.ru/img/rock.png"}),Object(b.jsx)("div",{className:ye.a.loginBlock,children:e.isAuth?Object(b.jsxs)("div",{children:[" ",e.login," - ",Object(b.jsx)(Oe.a,{onClick:e.logout,children:"Log out"})]}):Object(b.jsx)(te.b,{to:"/login",children:"Login"})})]})},Te=n(33),Ue=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(b.jsx)(Ie,Object(u.a)({},this.props))}}]),n}(o.a.Component),Ee=Object(D.b)((function(e){return{login:e.authReducer.login,isAuth:e.authReducer.isAuth,authUserProfile:e.authReducer.authUserProfile}}),{logout:Te.d})(Ue),Ae=P(20),Fe=Object(x.a)({form:"login"})((function(e){return Object(b.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(b.jsx)("div",{children:Object(b.jsx)(m.a,{placeholder:"Email",name:"email",component:k,validate:[v,Ae]})}),Object(b.jsx)("div",{children:Object(b.jsx)(m.a,{placeholder:"Password",name:"password",type:"password",component:k,validate:[v,Ae]})}),Object(b.jsxs)("div",{children:[Object(b.jsx)(m.a,{type:"checkbox",name:"rememberMe",component:k})," Remember me"]}),e.error&&Object(b.jsx)("div",{className:C.a.formSummaryError,children:e.error}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{children:"Login"})})]})})),Re=function(e){return e.isAuth?Object(b.jsx)(B.a,{to:"/profile"}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Login"}),Object(b.jsx)(Fe,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})},Le=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)(Re,{login:this.props.login,isAuth:this.props.isAuth})})}}]),n}(o.a.Component),De=Object(Y.d)(Object(D.b)((function(e){return{isAuth:e.authReducer.isAuth}}),{login:Te.c}))(Le),ze=n(70),Me=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(b.jsxs)("div",{className:"app-wrapper",children:[Object(b.jsx)(Ee,{}),Object(b.jsxs)("div",{className:"app-wrapper-content",children:[Object(b.jsx)(B.b,{path:"/dialogs",render:function(){return Object(b.jsx)(ue,{})}}),Object(b.jsx)(B.b,{path:"/profile/:userID?",render:function(){return Object(b.jsx)(W,{})}}),Object(b.jsx)(B.b,{path:"/news",render:function(){return Object(b.jsx)(V,{})}}),Object(b.jsx)(B.b,{path:"/music",render:function(){return Object(b.jsx)(Z,{})}}),Object(b.jsx)(B.b,{path:"/settings",render:function(){return Object(b.jsx)(q,{})}}),Object(b.jsx)(B.b,{path:"/users",render:function(){return Object(b.jsx)(Ne,{})}}),Object(b.jsx)(B.b,{path:"/login",render:function(){return Object(b.jsx)(De,{})}})]}),Object(b.jsx)(je,{})]}):Object(b.jsx)(f,{})}}]),n}(o.a.Component);t.a=Object(Y.d)(B.f,Object(D.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:ze.b}))(Me)},141:function(e,t,n){"use strict";var r=n(9),s=n(29),i=n(69),c={friendName:[{friendsName:"Diana"},{friendsName:"Ihor"},{friendsName:"Ruslan"}]},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c;return e},o=n(28),u=n(33),l=n(139),d=n(135),j=n(70),b=Object(r.c)({profilePage:s.b,messagesPage:i.a,sidebar:a,usersPage:o.a,authReducer:u.b,app:j.a,form:d.a}),f=Object(r.e)(b,Object(r.a)(l.a));window.store=f;t.a=f},142:function(e,t,n){"use strict";n.r(t),function(e){n(1);var t=n(65),r=n.n(t),s=(n(173),n(140)),i=n(141),c=n(12),a=n(10),o=n(0);r.a.render(Object(o.jsx)(c.a,{basename:e.eny.PUBLIC_URL,children:Object(o.jsx)(a.a,{store:i.a,children:Object(o.jsx)(s.a,{})})}),document.getElementById("root"))}.call(this,n(102))},15:function(e,t,n){e.exports={nav:"Navbar_nav__1BCBQ",item:"Navbar_item__3RZJI",active:"Navbar_active__3bnlt",bestFriend:"Navbar_bestFriend__2bEkG",navbar:"Navbar_navbar__2QnsP"}},173:function(e,t,n){},174:function(e,t,n){},23:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(89),s=r.create({withCredentials:!0,headers:{"API-KEY":"cc3bd8cc-4d54-4fd5-94a6-1a89051413f6"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),i={getUsers:function(e,t){return s.get("users?page=".concat(e," &count=").concat(t)).then((function(e){return e.data}))},unfollow:function(e){return s.delete("follow/".concat(e))},follow:function(e){return s.post("follow/".concat(e))}},c={getProfile:function(e){return s.get("profile/"+e)},getStatus:function(e){return s.get("profile/status/"+e)},updateStatus:function(e){return s.put("profile/status",{status:e})}},a={login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return s.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return s.delete("auth/login")}},o=function(){return s.get("auth/me")}},278:function(e,t,n){},28:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"f",(function(){return h})),n.d(t,"e",(function(){return p})),n.d(t,"d",(function(){return m})),n.d(t,"g",(function(){return x})),n.d(t,"c",(function(){return v}));var r=n(44),s=n(3),i=n(23),c="FOLLOW",a="UNFOLLOW",o="SET_USERS",u="SET_CURRENT_PAGE",l="SET_USERS_TOTAL_COUNT",d="TOGGLE_IS_FETCHING",j="TOGGLE_IS_FOLLOWING_IN_PROGRESS",b={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},f=function(e){return{type:c,userID:e}},h=function(e){return{type:a,userID:e}},p=function(e){return{type:u,currentPage:e}},O=function(e){return{type:d,isFetching:e}},g=function(e,t){return{type:j,isFollowing:e,userId:t}},m=function(e,t){return function(n){n(O(!0)),n(p(e)),i.d.getUsers(e,t).then((function(e){var t,r;n(O(!1)),n((t=e.items,{type:o,users:t})),n((r=e.totalCount,{type:l,count:r}))}))}},x=function(e){return function(t){t(g(!0,e)),i.d.unfollow(e).then((function(n){0==n.data.resultCode&&t(h(e)),t(g(!1,e))}))}},v=function(e){return function(t){t(g(!0,e)),i.d.follow(e).then((function(n){0==n.data.resultCode&&t(f(e)),t(g(!1,e))}))}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return Object(s.a)(Object(s.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(s.a)(Object(s.a)({},e),{},{followed:!0}):e}))});case a:return Object(s.a)(Object(s.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(s.a)(Object(s.a)({},e),{},{followed:!1}):e}))});case o:return Object(s.a)(Object(s.a)({},e),{},{users:t.users});case u:return Object(s.a)(Object(s.a)({},e),{},{currentPage:t.currentPage});case l:return Object(s.a)(Object(s.a)({},e),{},{totalUsersCount:t.count});case d:return Object(s.a)(Object(s.a)({},e),{},{isFetching:t.isFetching});case j:return Object(s.a)(Object(s.a)({},e),{},{followingInProgress:t.isFollowing?[].concat(Object(r.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}}},29:function(e,t,n){"use strict";n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return j})),n.d(t,"f",(function(){return b})),n.d(t,"a",(function(){return f})),n.d(t,"e",(function(){return h}));var r=n(44),s=n(3),i=n(23),c=(n(28),"ADD-POST"),a="SET_USER_PROFILE",o="SET_USER_STATUS",u="STATUS_UPDATE",l={posts:[{id:1,text:"Hello world",likesCount:12},{id:2,text:"This is my first post",likesCount:10},{id:3,text:"Yo, i know what is the .map",likesCount:10},{id:4,text:"Motherfucker",likesCount:10},{id:5,text:"Component- is the great thing",likesCount:22},{id:6,text:"I know what is the props",likesCount:30},{id:7,text:"Component- is the great thing",likesCount:1}],newPostText:"kek",profile:null,status:""},d=function(e){return function(t){i.c.getProfile(e).then((function(e){t(h(e.data))}))}},j=function(e){return function(t){i.c.getStatus(e).then((function(e){t(p(e.data))}))}},b=function(e){return function(t){i.c.updateStatus(e).then((function(n){0===n.data.resultCode&&t(p(e))}))}},f=function(e){return{type:c,newText:e}},h=function(e){return{type:a,profile:e}},p=function(e){return{type:o,status:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return Object(s.a)(Object(s.a)({},e),{},{posts:[].concat(Object(r.a)(e.posts),[{id:6,text:t.newText,likesCount:0}])});case a:return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case o:return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case u:return Object(s.a)(Object(s.a)({},e),{},{statusInProgress:t.isUpdate});default:return e}}},297:function(e,t,n){},298:function(e,t,n){},299:function(e,t,n){},33:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return j}));var r=n(3),s=n(23),i=n(39),c="SET_USER_DATA",a="SET_AUTH_PROFILE",o={id:null,login:null,email:null,isAuth:!1,isFetching:!1,authUserProfile:null},u=function(e,t,n,r){return{type:c,payload:{id:e,login:t,email:n,isAuth:r}}},l=function(){return function(e){return Object(s.a)().then((function(t){if(0===t.data.resultCode){var n=t.data.data,r=n.id,s=n.login,i=n.email;e(u(r,s,i,!0))}}))}},d=function(e,t,n){return function(r){s.b.login(e,t,n).then((function(e){if(0===e.data.resultCode)r(l());else{var t=e.data.messages.length>0?e.data.messages[0]:"Some error";r(Object(i.a)("login",{_error:t}))}}))}},j=function(){return function(e){s.b.logout().then((function(t){0===t.data.resultCode&&e(u(null,null,null,!1))}))}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return Object(r.a)(Object(r.a)(Object(r.a)({},e),t.payload),t.payload.isAuth);case a:return Object(r.a)(Object(r.a)({},e),{},{authUserProfile:t.authProfile});default:return e}}},52:function(e,t,n){e.exports={formControl:"FormControls_formControl__2Y3MO",error:"FormControls_error__3fwNV",formSummaryError:"FormControls_formSummaryError__3uC7c"}},56:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__3d0hk"}},69:function(e,t,n){"use strict";n.d(t,"b",(function(){return a}));var r=n(44),s=n(3),i="SEND-MESSAGE",c={dialogs:[{id:1,name:"Ruslan"},{id:2,name:"Ihor"},{id:3,name:"Diana"}],messages:[{id:1,message:"Hello world"},{id:2,message:"Yo"},{id:3,message:"Yo"},{id:3,message:"Yawawdaao"}]},a=function(e){return{type:i,messageText:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(s.a)(Object(s.a)({},e),{},{messageText:"",messages:[].concat(Object(r.a)(e.messages),[{id:1,message:t.messageText}])});default:return e}}},70:function(e,t,n){"use strict";n.d(t,"b",(function(){return a}));var r=n(3),s=n(33),i="INITIALIZED_SUCCESS",c={initialized:!1},a=function(){return function(e){e(Object(s.a)()).then((function(){e({type:i})}))}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(r.a)(Object(r.a)({},e),{},{initialized:!0});default:return e}}},90:function(e,t,n){e.exports={item:"Post_item__qgLu_"}},91:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__IKVWh",posts:"MyPosts_posts__2281S"}},94:function(e,t,n){e.exports={discriptionBlock:"ProfileInfo_discriptionBlock__18aui",largeUserPhoto:"ProfileInfo_largeUserPhoto__2cOi9"}},97:function(e,t,n){e.exports={item:"Dialog_item__1E3wH",active:"Dialog_active__22o0r"}},98:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__3V6cJ",selectedPage:"Users_selectedPage__30Z6v"}}},[[142,1,2]]]);
//# sourceMappingURL=main.94e1deec.chunk.js.map