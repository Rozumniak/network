(this["webpackJsonpreakt-kabzda-1"]=this["webpackJsonpreakt-kabzda-1"]||[]).push([[0],{122:function(e,t,n){e.exports={paginator:"Paginator_paginator__1Iho1",pageNumber:"Paginator_pageNumber__22Q7G",selectedPage:"Paginator_selectedPage__3bTZ4"}},143:function(e,t,n){e.exports={item:"Post_item__2wbef"}},145:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__1_3D0",posts:"MyPosts_posts__2pbVp"}},148:function(e,t,n){e.exports={formControl:"FormControls_formControl__1eOjv",error:"FormControls_error__2N7hq",formSummaryError:"FormControls_formSummaryError__3iq5l"}},151:function(e,t,n){e.exports={item:"Dialog_item__17cN9",active:"Dialog_active__2-gcu"}},152:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__211G3",followButton:"Users_followButton__3nDI7"}},153:function(e,t,n){e.exports={header:"Header_header__1lg1W",loginBlock:"Header_loginBlock__1-bOJ"}},199:function(e,t,n){e.exports={item:"Message_item__2TQ9e"}},235:function(e,t,n){},236:function(e,t,n){},340:function(e,t,n){},359:function(e,t,n){},360:function(e,t,n){},361:function(e,t,n){},362:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),i=n(35),a=n.n(i),c=(n(235),n(41)),o=n(42),l=n(45),u=n(44),d=(n(236),n(8)),j=n(61),b=n(143),h=n.n(b),p=n(202),f=n(371),O=n.p+"static/media/1.a2446033.png",g=n(1),m=function(e){return e.profile?Object(g.jsxs)("div",{className:h.a.item,children:[Object(g.jsx)("img",{src:e.profile.photos.small||O,className:h.a.userPhoto}),e.message,Object(g.jsx)("div",{children:Object(g.jsxs)("span",{children:["like ",e.like]})}),Object(g.jsx)("div",{children:Object(g.jsx)(p.a,{onClick:function(){},icon:Object(g.jsx)(f.a,{})})})]}):null},x=n(145),v=n.n(x),P=n(186),_=function(e){if(!e)return"Field is required"},w=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}},C=n(367),y=n(366),S={labelCol:{span:8},wrapperCol:{span:16}},N=(C.a.TextArea,w(100),Object(P.a)({form:"addPost"})((function(e){return Object(g.jsxs)(y.a,Object(d.a)(Object(d.a)({},S),{},{name:"nest-messages",onFinish:e.onSubmit,children:[Object(g.jsx)(y.a.Item,{name:"post",size:"large",children:Object(g.jsx)(C.a.TextArea,{})}),Object(g.jsx)(y.a.Item,{wrapperCol:Object(d.a)(Object(d.a)({},S.wrapperCol),{},{offset:6,span:100}),children:Object(g.jsx)(p.a,{type:"primary",htmlType:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]}))}))),k=s.a.memo((function(e){console.log("RENDER");var t=Object(j.a)(e.profilePage.posts).reverse().map((function(t){return Object(g.jsx)(m,{message:t.text,like:t.likesCount,dispatch:e.dispatch,profile:e.profile})}));if(!e.profile)return null;return Object(g.jsxs)("div",{className:v.a.postsBlock,children:[Object(g.jsx)("h3",{children:"My posts"}),Object(g.jsx)(N,{onSubmit:function(t){var n=t.post;e.addPost(n),t.post=null}}),Object(g.jsx)("div",{className:v.a.posts,children:t})]})})),E=k,I=(n(340),n(70)),T=n.n(I),U=n.p+"static/media/Curve-Loading.5e01ee79.gif",A=function(){return Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:U})})},F=n(93),M=function(e){var t=Object(r.useState)(!1),n=Object(F.a)(t,2),s=n[0],i=n[1],a=Object(r.useState)(e.status),c=Object(F.a)(a,2),o=c[0],l=c[1];Object(r.useEffect)((function(){l(e.status)}),[e.status]);return Object(g.jsxs)("div",{children:[!s&&Object(g.jsxs)("div",{children:[Object(g.jsx)("b",{children:"Status:   "}),Object(g.jsx)("span",{onDoubleClick:function(){e.isOwner&&i(!0)},children:e.status||"------"})]}),s&&Object(g.jsx)("div",{children:Object(g.jsx)("input",{autoFocus:!0,onBlur:function(){i(!1),e.updateStatus(o)},onChange:function(e){l(e.currentTarget.value)},value:o})})]})},D=n(372),R=n(124),z=n(148),L=n.n(z),B=n(185),G=function(e){e.input;var t=e.meta,n=(e.child,Object(R.a)(e,["input","meta","child"])),r=t.error&&t.touched;return Object(g.jsxs)("div",{className:L.a.formControl+" "+(r?L.a.error:" "),children:[Object(g.jsx)("div",{children:n.children}),Object(g.jsx)("div",{children:r&&Object(g.jsx)("span",{children:t.error})})]})},H=function(e){var t=e.input,n=(e.meta,e.child,Object(R.a)(e,["input","meta","child"]));return Object(g.jsx)(G,Object(d.a)(Object(d.a)({},e),{},{children:Object(g.jsx)("textarea",Object(d.a)(Object(d.a)({},t),n))}))},J=function(e,t,n,r){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(g.jsxs)("div",{children:[Object(g.jsx)(B.a,Object(d.a)({placeholder:e,name:t,validate:n,component:r},s))," ",i]})},V=Object(P.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,n=e.props,r=e.profile;return Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:T.a.photoUpload,children:Object(g.jsx)(C.a,{icon:Object(g.jsx)(D.a,{}),type:"file",onChange:function(e){e.target.files.length&&n.savePhoto(e.target.files[0])}})}),Object(g.jsxs)("form",{onSubmit:t,children:[Object(g.jsx)("div",{children:Object(g.jsx)("button",{onClick:function(){},children:"Save"})}),Object(g.jsxs)("div",{children:[Object(g.jsx)("b",{children:"Full name:"})," ",J("Full name","fullName",[],"input")]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("b",{children:"\u0412 \u043f\u043e\u0438\u0441\u043a\u0430\u0445 \u0440\u0430\u0431\u043e\u0442\u044b:"})," ",J("","lookingForAJob",[],"input",{type:"checkbox"})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("b",{children:"\u041c\u043e\u0438 \u043d\u0430\u0432\u044b\u043a\u0438:"})," ",J("","lookingForAJobDescription",[],H)]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("b",{children:"\u041e\u0431\u043e \u043c\u043d\u0435:"})," ",J("","aboutMe",[],H)]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("b",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b:"})," ",Object.keys(r.contacts).map((function(e){return Object(g.jsxs)("div",{children:[Object(g.jsxs)("b",{children:[e,":"]})," ",J(e,"contacts."+e,[],"input")]})}))]})]})]})})),W=function(e){return Object(g.jsxs)("div",{className:T.a.discriptionBlock,children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("b",{children:"Full name:"})," ",e.profile.fullName]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("b",{children:"looking For A Job:"})," ",e.profile.lookingForAJob?"yes":"no"]}),e.profile.lookingForAJob&&Object(g.jsxs)("div",{children:[Object(g.jsx)("b",{children:"My professional skills:"})," ",e.profile.lookingForAJobDescription]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("b",{children:"About me:"})," ",e.profile.aboutMe]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("b",{children:"Contacts:"})," ",Object.keys(e.profile.contacts).map((function(t){return Object(g.jsx)(Y,{contactTitle:t,contactValue:e.profile.contacts[t]},t)}))]})]})},Y=function(e){var t=e.contactTitle,n=e.contactValue;return Object(g.jsxs)("div",{className:T.a.contacts,children:[Object(g.jsxs)("b",{children:[t,":"]})," ",n]})},q=function(e){if(!e.profile)return Object(g.jsx)("div",{children:Object(g.jsx)(A,{})});return Object(g.jsxs)("div",{children:[e.isOwner&&Object(g.jsx)("div",{className:T.a.editProfile,children:Object(g.jsxs)(p.a,{onClick:e.editMode?e.deactivateProfileEditMode:e.activateProfileEditMode,children:[" ",e.editMode?"Cancel":"Edit"]})}),Object(g.jsxs)("div",{children:[Object(g.jsx)("img",{src:e.profile.photos.large||O,className:T.a.largeUserPhoto}),Object(g.jsx)(M,{id:e.id,status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner}),e.isOwner&&e.editMode?Object(g.jsx)(V,{initialValues:e.profile,profile:e.profile,savePhoto:e.savePhoto,onSubmit:function(t){e.saveProfile(t)}}):Object(g.jsx)(W,{profile:e.profile})]})]})},Q=n(142).create({withCredentials:!0,headers:{"API-KEY":"cc3bd8cc-4d54-4fd5-94a6-1a89051413f6"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),K=function(e,t){return Q.get("users?page=".concat(e," &count=").concat(t)).then((function(e){return e.data}))},Z=function(e){return Q.delete("follow/".concat(e))},X=function(e){return Q.post("follow/".concat(e))},$=function(e){return Q.get("profile/"+e)},ee=function(e){return Q.get("profile/status/"+e)},te=function(e){return Q.put("profile/status",{status:e})},ne=function(e){var t=new FormData;return t.append("image",e),Q.put("profile/photo",t,{headers:{"Content-Type":"multipart/form/data"}})},re=function(e){return Q.put("profile",e)},se=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Q.post("auth/login",{email:e,password:t,rememberMe:n})},ie=function(){return Q.delete("auth/login")},ae="ADD-POST",ce="SET_USER_PROFILE",oe="SET_USER_STATUS",le="STATUS_UPDATE",ue="SAVE_PHOTO_SUCCESS",de="ACTIVATE_EDIT_MODE",je="DEACTIVATE_EDIT_MODE",be={posts:[{id:1,text:"Hello world",likesCount:12},{id:2,text:"This is my first post",likesCount:10}],profile:null,status:"",profileEditMode:!1},he=function(e){return{type:ce,profile:e}},pe=function(e){return{type:oe,status:e}},fe=function(e){return{type:ue,photos:e}},Oe=function(){return{type:de}},ge=function(){return{type:je}},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ae:return Object(d.a)(Object(d.a)({},e),{},{posts:[].concat(Object(j.a)(e.posts),[{id:6,text:t.newText,likesCount:0}])});case ce:return Object(d.a)(Object(d.a)({},e),{},{profile:t.profile});case oe:return Object(d.a)(Object(d.a)({},e),{},{status:t.status});case le:return Object(d.a)(Object(d.a)({},e),{},{statusInProgress:t.isUpdate});case ue:return Object(d.a)(Object(d.a)({},e),{},{profile:Object(d.a)(Object(d.a)({},e.profile),{},{photos:t.photos})});case de:return Object(d.a)(Object(d.a)({},e),{},{profileEditMode:!0});case je:return Object(d.a)(Object(d.a)({},e),{},{profileEditMode:!1});default:return e}},xe=n(24),ve=Object(xe.b)((function(e){return{profilePage:e.profilePage,profile:e.profilePage.profile}}),(function(e){return{addPost:function(t){var n=function(e){return{type:ae,newText:e}}(t);e(n)}}}))(E),Pe=function(e){return Object(g.jsxs)("div",{className:"",children:[Object(g.jsx)(q,{profile:e.profile,id:e.id,status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner,savePhoto:e.savePhoto,activateProfileEditMode:e.activateProfileEditMode,deactivateProfileEditMode:e.deactivateProfileEditMode,editMode:e.editMode,saveProfile:e.saveProfile}),Object(g.jsx)(ve,{})]})},_e=n(30),we=function(e){return{isAuth:e.authReducer.isAuth}},Ce=function(e){var t=function(t){Object(l.a)(r,t);var n=Object(u.a)(r);function r(){return Object(c.a)(this,r),n.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){return this.props.isAuth?Object(g.jsx)(e,Object(d.a)({},this.props)):Object(g.jsx)(_e.a,{to:"/login"})}}]),r}(s.a.Component);return Object(xe.b)(we)(t)},ye=n(20),Se=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userID;e||(e=this.props.id),this.props.getProfileTh(e),this.props.getUserStatusTh(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.match.params.userID!=e.match.params.userID&&this.refreshProfile()}},{key:"render",value:function(){return Object(g.jsx)("div",{children:Object(g.jsx)(Pe,Object(d.a)(Object(d.a)({},this.props),{},{profile:this.props.profile,id:this.props.id,status:this.props.status,updateStatus:this.props.updateStatusTh,isOwner:!this.props.match.params.userID,savePhoto:this.props.savePhoto,activateProfileEditMode:this.props.activateProfileEditMode,deactivateProfileEditMode:this.props.deactivateProfileEditMode,editMode:this.props.editMode,saveProfile:this.props.saveProfile}))})}}]),n}(s.a.Component),Ne=Object(ye.d)(Object(xe.b)((function(e){return{profile:e.profilePage.profile,id:e.authReducer.id,status:e.profilePage.status,editMode:e.profilePage.profileEditMode}}),{setUserProfile:he,getProfileTh:function(e){return function(t){$(e).then((function(e){t(he(e.data))}))}},getUserStatusTh:function(e){return function(t){ee(e).then((function(e){t(pe(e.data))}))}},updateStatusTh:function(e){return function(t){te(e).then((function(n){0===n.data.resultCode&&t(pe(e))}))}},savePhoto:function(e){return function(t){ne(e).then((function(e){0===e.data.resultCode&&t(fe(e.data.data.photos))}))}},activateProfileEditMode:function(){return function(e){e(Oe())}},deactivateProfileEditMode:function(){return function(e){e(ge())}},saveProfile:function(e){return function(t,n){t(ge());var r=n().authReducer.id;re(e).then((function(e){0===e.data.resultCode&&$(r).then((function(e){t(he(e.data))}))}))}}}),Ce,_e.g)(Se),ke=(n(359),function(e){return Object(g.jsx)("div",{children:"News"})}),Ee=n(31),Ie=(n(360),function(e){return Object(g.jsx)("div",{children:"Music"})}),Te=(n(361),function(e){return Object(g.jsx)("div",{children:"Settings"})}),Ue="SEND-MESSAGE",Ae={dialogs:[{id:1,name:"Ruslan"},{id:2,name:"Ihor"},{id:3,name:"Diana"}],messages:[{id:1,message:"Hello world"},{id:2,message:"Yo"},{id:3,message:"Yo"},{id:3,message:"Yawawdaao"}]},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ue:return Object(d.a)(Object(d.a)({},e),{},{messageText:"",messages:[].concat(Object(j.a)(e.messages),[{id:1,message:t.messageText}])});default:return e}},Me=n(95),De=n.n(Me),Re=n(151),ze=n.n(Re),Le=function(e){var t="/dialogs/"+e.id;return Object(g.jsx)("div",{className:ze.a.item,children:Object(g.jsxs)(Ee.b,{to:t,activeClassName:ze.a.active,children:[" ",e.name]})})},Be=n(199),Ge=n.n(Be),He=function(e){return Object(g.jsx)("div",{className:Ge.a.item,children:e.messages})},Je=w(50),Ve=Object(P.a)({form:"message"})((function(e){return Object(g.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(g.jsx)("div",{children:Object(g.jsx)(B.a,{name:"message",component:H,validate:[_,Je]})}),Object(g.jsx)("div",{children:Object(g.jsx)("button",{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]})})),We=function(e){var t=e.messagesPage.messages.map((function(e){return Object(g.jsx)(He,{messages:e.message})})),n=e.messagesPage.dialogs.map((function(e){return Object(g.jsx)(Le,{name:e.name,activeClassName:De.a.active,id:e.id})}));return Object(g.jsxs)("div",{className:De.a.dialogs,children:[Object(g.jsx)("div",{className:De.a.dialogsItem,children:n}),Object(g.jsxs)("div",{className:De.a.messages,children:[t,Object(g.jsx)(Ve,{onSubmit:function(t){var n=t.message;e.sendMessage(n),t.message=null}})]})]})},Ye=Object(ye.d)(Object(xe.b)((function(e){return{messagesPage:e.messagesPage}}),(function(e){return{sendMessage:function(t){e(function(e){return{type:Ue,messageText:e}}(t))}}})),Ce)(We),qe=n(40),Qe=n.n(qe),Ke=function(e){return Object(g.jsx)("div",{className:Qe.a.navbar,children:Object(g.jsxs)("nav",{className:Qe.a.nav,children:[Object(g.jsx)("div",{className:Qe.a.item,children:Object(g.jsx)(Ee.b,{to:"/news",activeClassName:Qe.a.active,children:" \u041d\u043e\u0432\u043e\u0441\u0442\u0438"})}),Object(g.jsx)("div",{className:Qe.a.item,children:Object(g.jsx)(Ee.b,{to:"/music",activeClassName:Qe.a.active,children:"\u041c\u0443\u0437\u044b\u043a\u0430"})}),Object(g.jsx)("div",{className:Qe.a.item,children:Object(g.jsx)(Ee.b,{to:"/settings",activeClassName:Qe.a.active,children:" \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"})})]})})},Ze=(Object(xe.b)((function(e){return{sidebar:e.sidebar}}),(function(){return{}}))(Ke),n(67)),Xe="FOLLOW",$e="UNFOLLOW",et="SET_USERS",tt="SET_CURRENT_PAGE",nt="SET_USERS_TOTAL_COUNT",rt="TOGGLE_IS_FETCHING",st="TOGGLE_IS_FOLLOWING_IN_PROGRESS",it={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},at=function(e){return{type:Xe,userID:e}},ct=function(e){return{type:$e,userID:e}},ot=function(e){return{type:tt,currentPage:e}},lt=function(e){return{type:rt,isFetching:e}},ut=function(e,t){return{type:st,isFollowing:e,userId:t}},dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Xe:return Object(d.a)(Object(d.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(d.a)(Object(d.a)({},e),{},{followed:!0}):e}))});case $e:return Object(d.a)(Object(d.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(d.a)(Object(d.a)({},e),{},{followed:!1}):e}))});case et:return Object(d.a)(Object(d.a)({},e),{},{users:t.users});case tt:return Object(d.a)(Object(d.a)({},e),{},{currentPage:t.currentPage});case nt:return Object(d.a)(Object(d.a)({},e),{},{totalUsersCount:t.count});case rt:return Object(d.a)(Object(d.a)({},e),{},{isFetching:t.isFetching});case st:return Object(d.a)(Object(d.a)({},e),{},{followingInProgress:t.isFollowing?[].concat(Object(j.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},jt=n(152),bt=n.n(jt),ht=n(122),pt=n.n(ht),ft=n(5),Ot=n.n(ft),gt=function(e){for(var t=e.totalItemsCount,n=e.portionSize,s=e.currentPage,i=e.onPageChange,a=Math.ceil(t/n),c=[],o=1;o<=a;o++)c.push(o);var l=Math.ceil(a/n),u=Object(r.useState)(1),d=Object(F.a)(u,2),j=d[0],b=d[1],h=(j-1)*n+1,f=j*n;return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:pt.a.paginator,children:[j>1&&Object(g.jsx)(p.a,{onClick:function(){b(1)},children:"First"}),j>1&&Object(g.jsx)(p.a,{onClick:function(){b(j-1)},children:"Previous"}),c.filter((function(e){return e>=h&&e<=f})).map((function(e){return Object(g.jsx)(p.a,{className:Ot()(Object(Ze.a)({},pt.a.selectedPage,s===e),pt.a.pageNumber),onClick:function(t){i(e)},children:e},e)})),l>j&&Object(g.jsx)(p.a,{onClick:function(){b(j+1)},children:"Next"}),l>j&&Object(g.jsx)(p.a,{onClick:function(){b(l)},children:"Last"})]})})},mt=(n(141),function(e){return Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{children:Object(g.jsx)(gt,{totalItemsCount:e.totalUsersCount,onPageChange:e.onPageChange,currentPage:e.currentPage,portionSize:e.pageSize})}),e.users.map((function(t){return Object(g.jsxs)("div",{children:[Object(g.jsxs)("span",{children:[Object(g.jsx)("div",{children:Object(g.jsx)(Ee.b,{to:"/profile/"+t.id,children:Object(g.jsx)("img",{src:null!=t.photos.small?t.photos.small:O,className:bt.a.userPhoto})})}),Object(g.jsx)("div",{className:bt.a.followButton,children:t.followed?Object(g.jsx)(p.a,{type:"primary",size:"middle",disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:" Unfollow "}):Object(g.jsx)(p.a,{type:"primary",size:"middle",disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"Follow"})})]}),Object(g.jsx)("span",{children:Object(g.jsxs)("span",{children:[Object(g.jsx)("div",{children:t.name}),Object(g.jsx)("div",{children:t.status})]})})]},t.id)}))]})}),xt=n(200),vt=Object(xt.a)((function(e){return e.usersPage.users}),(function(e){return e})),Pt=function(e){return e.usersPage.pageSize},_t=function(e){return e.usersPage.totalUsersCount},wt=function(e){return e.usersPage.currentPage},Ct=function(e){return e.usersPage.isFetching},yt=function(e){return e.usersPage.followingInProgress},St=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).onPageChange=function(t){e.props.getUsersTh(t,e.props.pageSize)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersTh(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){var e;return Object(g.jsxs)(g.Fragment,{children:[this.props.isFetching?Object(g.jsx)(A,{}):null,Object(g.jsx)(mt,(e={totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChange:this.onPageChange,follow:this.props.follow,unfollow:this.props.unfollow,users:this.props.users,isFetching:this.props.isFetching,followingInProgress:this.props.followingInProgress,toggleFollowingInProgress:this.props.toggleFollowingInProgress},Object(Ze.a)(e,"unfollow",this.props.unfollowTh),Object(Ze.a)(e,"follow",this.props.followTh),e))]})}}]),n}(s.a.Component),Nt=Object(ye.d)(Object(xe.b)((function(e){return{users:vt(e),pageSize:Pt(e),totalUsersCount:_t(e),currentPage:wt(e),isFetching:Ct(e),followingInProgress:yt(e)}}),{follow:at,unfollow:ct,setCurrentPage:ot,getUsersTh:function(e,t){return function(n){n(lt(!0)),n(ot(e)),K(e,t).then((function(e){var t,r;n(lt(!1)),n((t=e.items,{type:et,users:t})),n((r=e.totalCount,{type:nt,count:r}))}))}},unfollowTh:function(e){return function(t){t(ut(!0,e)),Z(e).then((function(n){0==n.data.resultCode&&t(ct(e)),t(ut(!1,e))}))}},followTh:function(e){return function(t){t(ut(!0,e)),X(e).then((function(n){0==n.data.resultCode&&t(at(e)),t(ut(!1,e))}))}}}))(St),kt=n(153),Et=n.n(kt),It=n(370),Tt=function(e){return Object(g.jsxs)("header",{className:Et.a.header,children:[Object(g.jsx)("img",{src:"https://logoza.ru/img/rock.png"}),Object(g.jsx)("div",{className:Et.a.loginBlock,children:e.isAuth?Object(g.jsxs)("div",{children:[" ",e.login," - ",Object(g.jsx)(It.a,{onClick:e.logout,children:"Log out"})]}):Object(g.jsx)(Ee.b,{to:"/login",children:"Login"})})]})},Ut=n(72),At=n.n(Ut),Ft=n(123),Mt=n(58),Dt="SET_USER_DATA",Rt="SET_AUTH_PROFILE",zt={id:null,login:null,email:null,isAuth:!1,isFetching:!1,authUserProfile:null},Lt=function(e,t,n,r){return{type:Dt,payload:{id:e,login:t,email:n,isAuth:r}}},Bt=function(){return function(){var e=Object(Ft.a)(At.a.mark((function e(t){var n,r,s,i,a;return At.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.get("auth/me");case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,s=r.id,i=r.login,a=r.email,t(Lt(s,i,a,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Gt=function(){return function(){var e=Object(Ft.a)(At.a.mark((function e(t){return At.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie();case 2:0===e.sent.data.resultCode&&t(Lt(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ht=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:zt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Dt:return Object(d.a)(Object(d.a)(Object(d.a)({},e),t.payload),t.payload.isAuth);case Rt:return Object(d.a)(Object(d.a)({},e),{},{authUserProfile:t.authProfile});default:return e}},Jt=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(g.jsx)(Tt,Object(d.a)({},this.props))}}]),n}(s.a.Component),Vt=(Object(xe.b)((function(e){return{login:e.authReducer.login,isAuth:e.authReducer.isAuth,authUserProfile:e.authReducer.authUserProfile}}),{logout:Gt})(Jt),n(368)),Wt=function(e){return Object(g.jsxs)(y.a,{name:"basic",labelCol:{span:3},wrapperCol:{span:10},initialValues:{remember:!0},onFinish:e.onSubmit,children:[Object(g.jsx)(y.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(g.jsx)(C.a,{})}),Object(g.jsx)(y.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(g.jsx)(C.a.Password,{})}),Object(g.jsx)(y.a.Item,{name:"remember",valuePropName:"checked",wrapperCol:{offset:8,span:16},children:Object(g.jsx)(Vt.a,{children:"Remember me"})}),Object(g.jsx)(y.a.Item,{wrapperCol:{offset:8,span:16},children:Object(g.jsx)(p.a,{type:"primary",htmlType:"submit",children:"Submit"})})]})},Yt=function(e){return e.isAuth?Object(g.jsx)(_e.a,{to:"/profile"}):Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Login"}),Object(g.jsx)(Wt,{onSubmit:function(t){e.login(t.username,t.password,t.remember)}})]})},qt=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{children:Object(g.jsx)(Yt,{login:this.props.login,isAuth:this.props.isAuth})})}}]),n}(s.a.Component),Qt=Object(ye.d)(Object(xe.b)((function(e){return{isAuth:e.authReducer.isAuth}}),{login:function(e,t,n){return function(){var r=Object(Ft.a)(At.a.mark((function r(s){var i,a;return At.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,se(e,t,n);case 2:0===(i=r.sent).data.resultCode?s(Bt()):(a=i.data.messages.length>0?i.data.messages[0]:"Some error",s(Object(Mt.a)("login",{_error:a})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}}))(qt),Kt="INITIALIZED_SUCCESS",Zt={initialized:!1},Xt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Zt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Kt:return Object(d.a)(Object(d.a)({},e),{},{initialized:!0});default:return e}},$t=n(365),en=n(369),tn=n(373),nn=n(374),rn=n(375),sn=n(376),an=n(377),cn=$t.a.Header,on=$t.a.Sider,ln=$t.a.Content,un=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={collapsed:!1,size:"large"},e.toggle=function(){e.setState({collapsed:!e.state.collapsed})},e.catchAllUnhandledError=function(){alert("Some Error")},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledError)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledError)}},{key:"render",value:function(){this.state.size;return this.props.initialized?Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)($t.a,{children:[Object(g.jsxs)(on,{trigger:null,collapsible:!0,collapsed:this.state.collapsed,children:[Object(g.jsx)("div",{className:"logo"}),Object(g.jsxs)(en.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"],children:[Object(g.jsx)(en.a.Item,{icon:Object(g.jsx)(tn.a,{}),children:Object(g.jsx)(Ee.b,{to:"/profile",activeClassName:Qe.a.active,children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"})},"1"),Object(g.jsx)(en.a.Item,{icon:Object(g.jsx)(nn.a,{}),children:Object(g.jsx)(Ee.b,{to:"/dialogs",activeClassName:Qe.a.active,children:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"})},"2"),Object(g.jsx)(en.a.Item,{icon:Object(g.jsx)(rn.a,{}),children:Object(g.jsx)(Ee.b,{to:"/users",activeClassName:Qe.a.active,children:" \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"})},"3")]})]}),Object(g.jsxs)($t.a,{className:"site-layout",children:[Object(g.jsxs)(cn,{className:"site-layout-background",style:{padding:0},children:[Object(g.jsxs)("div",{className:"auth-block",children:[" ",this.props.isAuth?Object(g.jsxs)("div",{children:[" ",this.props.login," - ",Object(g.jsx)(p.a,{onClick:this.props.logout,children:"Logout"})]}):Object(g.jsx)(Ee.b,{to:"/login",children:"Login"})]}),s.a.createElement(this.state.collapsed?sn.a:an.a,{className:"trigger",onClick:this.toggle})]}),Object(g.jsx)(ln,{className:"site-layout-background",style:{margin:"24px 16px",padding:24,minHeight:280},children:Object(g.jsxs)(_e.d,{children:[Object(g.jsx)(_e.b,{path:"/",exact:!0,children:Object(g.jsx)(_e.a,{to:"/profile"})}),Object(g.jsx)(_e.b,{path:"/dialogs",render:function(){return Object(g.jsx)(Ye,{})}}),Object(g.jsx)(_e.b,{path:"/profile/:userID?",render:function(){return Object(g.jsx)(Ne,{})}}),Object(g.jsx)(_e.b,{path:"/news",render:function(){return Object(g.jsx)(ke,{})}}),Object(g.jsx)(_e.b,{path:"/music",render:function(){return Object(g.jsx)(Ie,{})}}),Object(g.jsx)(_e.b,{path:"/settings",render:function(){return Object(g.jsx)(Te,{})}}),Object(g.jsx)(_e.b,{path:"/users",render:function(){return Object(g.jsx)(Nt,{})}}),Object(g.jsx)(_e.b,{path:"/login",render:function(){return Object(g.jsx)(Qt,{})}}),Object(g.jsx)(_e.b,{path:"*",render:function(){return Object(g.jsx)("div",{children:"404 NOT FOUND"})}})]})})]})]})}):Object(g.jsx)(A,{})}}]),n}(s.a.Component),dn=Object(ye.d)(_e.g,Object(xe.b)((function(e){return{initialized:e.app.initialized,login:e.authReducer.login,isAuth:e.authReducer.isAuth,authUserProfile:e.authReducer.authUserProfile}}),{initializeApp:function(){return function(e){e(Bt()).then((function(){e({type:Kt})}))}},logout:Gt}))(un),jn={friendName:[{friendsName:"Diana"},{friendsName:"Ihor"},{friendsName:"Ruslan"}]},bn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jn;return e},hn=n(201),pn=n(187),fn=Object(ye.c)({profilePage:me,messagesPage:Fe,sidebar:bn,usersPage:dt,authReducer:Ht,app:Xt,form:pn.a}),On=Object(ye.e)(fn,Object(ye.a)(hn.a));window.store=On;var gn=On;Object(P.a)(a.a.render(Object(g.jsx)(Ee.a,{children:Object(g.jsx)(xe.a,{store:gn,children:Object(g.jsx)(dn,{})})}),document.getElementById("root")))},40:function(e,t,n){e.exports={nav:"Navbar_nav__RYyOr",item:"Navbar_item__W2X-F",active:"Navbar_active__fLD78",navbar:"Navbar_navbar__3131I"}},70:function(e,t,n){e.exports={discriptionBlock:"ProfileInfo_discriptionBlock__19wiO",largeUserPhoto:"ProfileInfo_largeUserPhoto__2yYk9",photoUpload:"ProfileInfo_photoUpload__7g6P4",editProfile:"ProfileInfo_editProfile__1pQwz",contacts:"ProfileInfo_contacts__2z143"}},95:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__1tPrg"}}},[[362,1,2]]]);
//# sourceMappingURL=main.98daf1d2.chunk.js.map