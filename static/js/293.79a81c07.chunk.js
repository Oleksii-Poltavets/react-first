"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[293],{293:function(a,s,e){e.r(s),e.d(s,{default:function(){return Y}});var n=e(683),t=e(791),i="Dialogs_dialogs__jB9rX",r="Dialogs_dialogs__items__-LCJI",o="Dialogs_messages__vueWT",c="Dialogs_messages__inner__M5PRM",l="Dialogs_message__9NYEX",m="Dialogs_from__shGcN",u="Dialogs_avatar__rJTvX",_="Dialogs_text__siFkE",g="Dialogs_sendMessage__jDL8x",d="Dialogs_sendMessage__textArea__0PFmM",v="Dialogs_sendButton__lzxph",h="Dialogs_sendMessageForm__JO8Qe",x=e(504),f="DialogItem_dialog__rhUWc",j="DialogItem_avatar__YaNVB",N="DialogItem_active__Ybk2G",p=e(184),D=function(a){var s=a.id,e=a.avatar,n=a.name;return(0,p.jsxs)("div",{className:"".concat(f," ").concat(N),children:[(0,p.jsx)("img",{className:j,src:e,alt:"img"}),(0,p.jsx)(x.OL,{className:f,to:"/dialogs/".concat(s),children:n})]})},M=function(a){return(0,p.jsxs)("div",{className:a.className,children:[(0,p.jsx)("img",{className:u,src:a.avatar,alt:"img"}),(0,p.jsx)("p",{className:_,children:a.messageText})]})},b=e(78),A=e(394),k=function(a){var s=a.dialogsPage,e=s.dialogItemsData,n=s.messagesData,t=e.map((function(a){return(0,p.jsx)(D,{avatar:a.avatar,name:a.name,id:a.id},a.id)})),u=n.map((function(a){return"from"===a.from?(0,p.jsx)(M,{className:"".concat(l),avatar:a.avatar,messageText:a.message,id:a.id},a.id):"to"===a.from?(0,p.jsx)(M,{className:"".concat(l," ").concat(m),avatar:a.avatar,messageText:a.message,id:a.id},a.id):'Your message have no "from" vlaue'})),_=function(s){var e=s.newMessage;a.sendMessage(e)},x=function(a){return(0,p.jsx)(b.l0,{onSubmit:_,render:function(a){var s=a.handleSubmit;return(0,p.jsxs)("form",{onSubmit:s,className:h,children:[(0,p.jsx)(b.gN,{component:"textarea",placeholder:"Message",name:"newMessage",className:d,validate:A.C1}),(0,p.jsx)("button",{className:v,type:"submit",children:"Send"})]})}})};return(0,p.jsxs)("div",{className:i,children:[(0,p.jsx)("div",{className:r,children:t}),(0,p.jsxs)("div",{className:o,children:[(0,p.jsx)("div",{className:c,children:u}),(0,p.jsx)("div",{className:g,children:(0,p.jsx)(x,{})})]})]})},C=e(687),y=e(804),I=e(671),P=e(144),T=e(340),Z=e(716),w=e(871),F=function(a){return{isAuth:a.userAuth.isAuth}},S=function(a){var s=function(s){(0,T.Z)(n,s);var e=(0,Z.Z)(n);function n(){return(0,I.Z)(this,n),e.apply(this,arguments)}return(0,P.Z)(n,[{key:"render",value:function(){return this.props.isAuth?(0,p.jsx)(a,{}):(0,p.jsx)(w.Fg,{to:"/login"})}}]),n}(t.Component);return(0,C.$j)(F)(s)},Y=(0,e(781).qC)(S,(0,C.$j)((function(a){return{dialogsPage:a.dialogsPage,isAuth:a.userAuth.isAuth}}),{sendMessage:y.b}))((function(a){return(0,p.jsx)(k,(0,n.Z)({},a))}))}}]);
//# sourceMappingURL=293.79a81c07.chunk.js.map