(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{X5CZ:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),o=function(){return function(){}}(),a=u("zl1X"),b=u("pMnS"),r=u("+Xo0"),t=u("0G9f"),s=u("gIcY"),i=u("xLE1"),c=u("QkwE"),d=u("vAyd"),p=function(){return function(){this.example='\n<div class="login-wrapper">\n    <form class="login">\n        <section class="title">\n            <h3 class="welcome">Welcome to</h3>\n            Company Product Name\n            <h5 class="hint">Use your Company ID to sign in or create one now</h5>\n        </section>\n        <div class="login-group">\n            <clr-select-container>\n                <select clrSelect name="type" [(ngModel)]="form.type">\n                    <option value="local">Local Users</option>\n                    <option value="admin">Administrator</option>\n                </select>\n            </clr-select-container>\n            <clr-input-container>\n                <input type="text" name="username" clrInput placeholder="Username" [(ngModel)]="form.username"/>\n            </clr-input-container>\n            <clr-password-container>\n                <input type="password" name="password" clrPassword placeholder="Password" [(ngModel)]="form.password"/>\n            </clr-password-container>\n            <clr-checkbox-wrapper>\n                <label>Remember me</label>\n                <input type="checkbox" name="rememberMe" clrCheckbox [(ngModel)]="form.rememberMe"/>\n            </clr-checkbox-wrapper>\n            <div class="error active">\n                Invalid user name or password\n            </div>\n            <button type="submit" class="btn btn-primary">NEXT</button>\n            <a href="javascript://" class="signup">Sign up for a Company ID</a>\n        </div>\n    </form>\n</div>\n',this.form={type:"local",username:"",password:"",rememberMe:!1}}}(),g=e.ob({encapsulation:2,styles:[],data:{}});function m(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,86,"div",[["class","clr-example"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,85,"div",[["class","login-wrapper"]],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,84,"form",[["class","login"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var o=!0;return"submit"===n&&(o=!1!==e.Ab(l,4).onSubmit(u)&&o),"reset"===n&&(o=!1!==e.Ab(l,4).onReset()&&o),o},null,null)),e.pb(3,16384,null,0,s.B,[],null,null),e.pb(4,4210688,null,0,s.r,[[8,null],[8,null]],null,null),e.Fb(2048,null,s.d,null,[s.r]),e.pb(6,16384,null,0,s.q,[[4,s.d]],null,null),(l()(),e.qb(7,0,null,null,5,"section",[["class","title"]],null,null,null,null,null)),(l()(),e.qb(8,0,null,null,1,"h3",[["class","welcome"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Welcome to"])),(l()(),e.Ib(-1,null,[" Company Product Name "])),(l()(),e.qb(11,0,null,null,1,"h5",[["class","hint"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Use your Company ID to sign in or create one now"])),(l()(),e.qb(13,0,null,null,73,"div",[["class","login-group"]],null,null,null,null,null)),(l()(),e.qb(14,0,null,null,22,"clr-select-container",[],[[2,"clr-form-control",null],[2,"clr-form-control-disabled",null],[2,"clr-row",null]],null,null,a.Rb,a.N)),e.Fb(4608,null,i.Be,i.Be,[]),e.Fb(512,null,i.De,i.De,[]),e.Fb(131584,null,i.Ee,i.Ee,[i.De]),e.Fb(512,null,i.Qc,i.Qc,[]),e.pb(19,180224,null,2,i.Mb,[i.Ee,[2,i.Ce],i.Qc,i.De],null,null),e.Gb(335544320,1,{label:0}),e.Gb(335544320,2,{multiple:0}),(l()(),e.qb(22,16777216,null,1,14,"select",[["clrSelect",""],["name","type"]],[[2,"clr-select",null],[8,"id",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,u){var o=!0,a=l.component;return"change"===n&&(o=!1!==e.Ab(l,23).onChange(u.target.value)&&o),"blur"===n&&(o=!1!==e.Ab(l,23).onTouched()&&o),"blur"===n&&(o=!1!==e.Ab(l,27).triggerValidation()&&o),"ngModelChange"===n&&(o=!1!==(a.form.type=u)&&o),o},null,null)),e.pb(23,16384,null,0,s.x,[e.F,e.k],null,null),e.Fb(1024,null,s.n,function(l){return[l]},[s.x]),e.pb(25,671744,null,0,s.s,[[2,s.d],[8,null],[8,null],[6,s.n]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,s.o,null,[s.s]),e.pb(27,212992,null,0,i.Lb,[e.Q,e.q,[6,s.o],e.F,e.k],null,null),e.pb(28,16384,null,0,s.p,[[4,s.o]],null,null),(l()(),e.qb(29,0,null,null,3,"option",[["value","local"]],null,null,null,null,null)),e.pb(30,147456,null,0,s.t,[e.k,e.F,[2,s.x]],{value:[0,"value"]},null),e.pb(31,147456,null,0,s.E,[e.k,e.F,[8,null]],{value:[0,"value"]},null),(l()(),e.Ib(-1,null,["Local Users"])),(l()(),e.qb(33,0,null,null,3,"option",[["value","admin"]],null,null,null,null,null)),e.pb(34,147456,null,0,s.t,[e.k,e.F,[2,s.x]],{value:[0,"value"]},null),e.pb(35,147456,null,0,s.E,[e.k,e.F,[8,null]],{value:[0,"value"]},null),(l()(),e.Ib(-1,null,["Administrator"])),(l()(),e.qb(37,0,null,null,13,"clr-input-container",[],[[2,"clr-form-control",null],[2,"clr-form-control-disabled",null],[2,"clr-row",null]],null,null,a.Lb,a.H)),e.Fb(4608,null,i.Be,i.Be,[]),e.Fb(512,null,i.De,i.De,[]),e.Fb(131584,null,i.Ee,i.Ee,[i.De]),e.Fb(512,null,i.Qc,i.Qc,[]),e.pb(42,180224,null,1,i.mb,[i.Ee,[2,i.Ce],i.Qc,i.De],null,null),e.Gb(335544320,3,{label:0}),(l()(),e.qb(44,16777216,null,1,6,"input",[["clrInput",""],["name","username"],["placeholder","Username"],["type","text"]],[[2,"clr-input",null],[8,"id",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0,a=l.component;return"input"===n&&(o=!1!==e.Ab(l,45)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==e.Ab(l,45).onTouched()&&o),"compositionstart"===n&&(o=!1!==e.Ab(l,45)._compositionStart()&&o),"compositionend"===n&&(o=!1!==e.Ab(l,45)._compositionEnd(u.target.value)&&o),"blur"===n&&(o=!1!==e.Ab(l,49).triggerValidation()&&o),"ngModelChange"===n&&(o=!1!==(a.form.username=u)&&o),o},null,null)),e.pb(45,16384,null,0,s.e,[e.F,e.k,[2,s.a]],null,null),e.Fb(1024,null,s.n,function(l){return[l]},[s.e]),e.pb(47,671744,null,0,s.s,[[2,s.d],[8,null],[8,null],[6,s.n]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,s.o,null,[s.s]),e.pb(49,212992,null,0,i.lb,[e.Q,e.q,[6,s.o],e.F,e.k],null,null),e.pb(50,16384,null,0,s.p,[[4,s.o]],null,null),(l()(),e.qb(51,0,null,null,15,"clr-password-container",[],[[2,"clr-form-control",null],[2,"clr-form-control-disabled",null],[2,"clr-row",null]],null,null,a.Ob,a.K)),e.Fb(4608,null,i.Be,i.Be,[]),e.Fb(512,null,i.De,i.De,[]),e.Fb(131584,null,i.Ee,i.Ee,[i.De]),e.Fb(512,null,i.Qc,i.Qc,[]),e.Fb(512,null,i.Wc,i.Wc,[]),e.Fb(1024,null,i.Mc,i.Nc,[]),e.pb(58,180224,null,1,i.Db,[i.Ee,[2,i.Ce],i.Qc,i.Wc,i.De,i.Mc,i.s],null,null),e.Gb(335544320,4,{label:0}),(l()(),e.qb(60,16777216,null,1,6,"input",[["clrPassword",""],["name","password"],["placeholder","Password"],["type","password"]],[[2,"clr-input",null],[8,"id",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],function(l,n,u){var o=!0,a=l.component;return"input"===n&&(o=!1!==e.Ab(l,61)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==e.Ab(l,61).onTouched()&&o),"compositionstart"===n&&(o=!1!==e.Ab(l,61)._compositionStart()&&o),"compositionend"===n&&(o=!1!==e.Ab(l,61)._compositionEnd(u.target.value)&&o),"blur"===n&&(o=!1!==e.Ab(l,65).triggerValidation()&&o),"focus"===n&&(o=!1!==e.Ab(l,65).triggerFocus()&&o),"ngModelChange"===n&&(o=!1!==(a.form.password=u)&&o),o},null,null)),e.pb(61,16384,null,0,s.e,[e.F,e.k,[2,s.a]],null,null),e.Fb(1024,null,s.n,function(l){return[l]},[s.e]),e.pb(63,671744,null,0,s.s,[[2,s.d],[8,null],[8,null],[6,s.n]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,s.o,null,[s.s]),e.pb(65,212992,null,0,i.Cb,[e.Q,e.q,[6,s.o],e.F,e.k,[2,i.Wc],[2,i.Mc]],null,null),e.pb(66,16384,null,0,s.p,[[4,s.o]],null,null),(l()(),e.qb(67,0,null,null,13,"clr-checkbox-wrapper",[],[[2,"clr-checkbox-wrapper",null]],null,null,a.tb,a.p)),e.pb(68,114688,null,1,i.q,[],null,null),e.Gb(335544320,5,{label:0}),e.Fb(512,null,i.Be,i.Be,[]),(l()(),e.qb(71,0,null,1,2,"label",[],[[1,"for",0]],null,null,null,null)),e.pb(72,212992,[[5,4]],0,i.ob,[[2,i.Be],[2,i.Ce],[2,i.De],e.F,e.k],null,null),(l()(),e.Ib(-1,null,["Remember me"])),(l()(),e.qb(74,16777216,null,0,6,"input",[["clrCheckbox",""],["name","rememberMe"],["type","checkbox"]],[[8,"id",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,u){var o=!0,a=l.component;return"change"===n&&(o=!1!==e.Ab(l,75).onChange(u.target.checked)&&o),"blur"===n&&(o=!1!==e.Ab(l,75).onTouched()&&o),"blur"===n&&(o=!1!==e.Ab(l,79).triggerValidation()&&o),"ngModelChange"===n&&(o=!1!==(a.form.rememberMe=u)&&o),o},null,null)),e.pb(75,16384,null,0,s.b,[e.F,e.k],null,null),e.Fb(1024,null,s.n,function(l){return[l]},[s.b]),e.pb(77,671744,null,0,s.s,[[2,s.d],[8,null],[8,null],[6,s.n]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,s.o,null,[s.s]),e.pb(79,212992,null,0,i.l,[e.Q,e.q,[6,s.o],e.F,e.k],null,null),e.pb(80,16384,null,0,s.p,[[4,s.o]],null,null),(l()(),e.qb(81,0,null,null,1,"div",[["class","error active"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Invalid user name or password "])),(l()(),e.qb(83,0,null,null,1,"button",[["class","btn btn-primary"],["type","submit"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["NEXT"])),(l()(),e.qb(85,0,null,null,1,"a",[["class","signup"],["href","javascript://"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Sign up for a Company ID"])),(l()(),e.qb(87,0,null,null,1,"clr-code-snippet",[],null,null,null,c.b,c.a)),e.pb(88,4243456,null,0,d.a,[],{code:[0,"code"]},null)],function(l,n){var u=n.component;l(n,25,0,"type",u.form.type),l(n,27,0),l(n,30,0,"local"),l(n,31,0,"local"),l(n,34,0,"admin"),l(n,35,0,"admin"),l(n,47,0,"username",u.form.username),l(n,49,0),l(n,63,0,"password",u.form.password),l(n,65,0),l(n,68,0),l(n,72,0),l(n,77,0,"rememberMe",u.form.rememberMe),l(n,79,0),l(n,88,0,u.example)},function(l,n){l(n,2,0,e.Ab(n,6).ngClassUntouched,e.Ab(n,6).ngClassTouched,e.Ab(n,6).ngClassPristine,e.Ab(n,6).ngClassDirty,e.Ab(n,6).ngClassValid,e.Ab(n,6).ngClassInvalid,e.Ab(n,6).ngClassPending),l(n,14,0,!0,null==e.Ab(n,19).control?null:e.Ab(n,19).control.disabled,e.Ab(n,19).addGrid()),l(n,22,0,!0,e.Ab(n,27).id,e.Ab(n,28).ngClassUntouched,e.Ab(n,28).ngClassTouched,e.Ab(n,28).ngClassPristine,e.Ab(n,28).ngClassDirty,e.Ab(n,28).ngClassValid,e.Ab(n,28).ngClassInvalid,e.Ab(n,28).ngClassPending),l(n,37,0,!0,null==e.Ab(n,42).control?null:e.Ab(n,42).control.disabled,e.Ab(n,42).addGrid()),l(n,44,0,!0,e.Ab(n,49).id,e.Ab(n,50).ngClassUntouched,e.Ab(n,50).ngClassTouched,e.Ab(n,50).ngClassPristine,e.Ab(n,50).ngClassDirty,e.Ab(n,50).ngClassValid,e.Ab(n,50).ngClassInvalid,e.Ab(n,50).ngClassPending),l(n,51,0,!0,null==e.Ab(n,58).control?null:e.Ab(n,58).control.disabled,e.Ab(n,58).addGrid()),l(n,60,0,!0,e.Ab(n,65).id,e.Ab(n,66).ngClassUntouched,e.Ab(n,66).ngClassTouched,e.Ab(n,66).ngClassPristine,e.Ab(n,66).ngClassDirty,e.Ab(n,66).ngClassValid,e.Ab(n,66).ngClassInvalid,e.Ab(n,66).ngClassPending),l(n,67,0,!0),l(n,71,0,e.Ab(n,72).forAttr),l(n,74,0,e.Ab(n,79).id,e.Ab(n,80).ngClassUntouched,e.Ab(n,80).ngClassTouched,e.Ab(n,80).ngClassPristine,e.Ab(n,80).ngClassDirty,e.Ab(n,80).ngClassValid,e.Ab(n,80).ngClassInvalid,e.Ab(n,80).ngClassPending)})}var h=u("mrSG"),y=function(l){function n(){var n=l.call(this,"login")||this;return n.expanded=!1,n}return Object(h.c)(n,l),n}(u("N+3j").a),v=e.ob({encapsulation:2,styles:[],data:{}});function f(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,77,"clr-doc-wrapper",[],[[2,"dox-wrapper",null]],null,null,r.b,r.a)),e.pb(1,49152,null,0,t.a,[],{title:[0,"title"],newLayout:[1,"newLayout"],ui:[2,"ui"],ng:[3,"ng"]},null),(l()(),e.qb(2,0,null,0,75,"article",[],null,null,null,null,null)),(l()(),e.qb(3,0,null,null,1,"h5",[["class","component-summary"],["id","the-login-page-is-a-predefined-form-for-applications-that-require-authentication"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["The login page is a predefined form for applications that require authentication."])),(l()(),e.qb(5,0,null,null,55,"div",[["id","code-examples"]],null,null,null,null,null)),(l()(),e.qb(6,0,null,null,10,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Use Clarity\u2019s login form by extending the "])),(l()(),e.qb(8,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[".login"])),(l()(),e.Ib(-1,null,[" classname on "])),(l()(),e.qb(11,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["form"])),(l()(),e.Ib(-1,null,[" and wrapping it in a container extending the "])),(l()(),e.qb(14,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[".login-wrapper"])),(l()(),e.Ib(-1,null,[" class."])),(l()(),e.qb(17,0,null,null,1,"h6",[["id","title-subtitle-and-trademark"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[".title, .subtitle and .trademark"])),(l()(),e.qb(19,0,null,null,13,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Extend the "])),(l()(),e.qb(21,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[".title"])),(l()(),e.Ib(-1,null,[" and "])),(l()(),e.qb(24,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[".subtitle"])),(l()(),e.Ib(-1,null,[" class on labels indicating the product title and subtitle. If your product title has the trademark symbol, make sure to wrap the trademark symbol in a "])),(l()(),e.qb(27,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["span"])),(l()(),e.Ib(-1,null,[" with the "])),(l()(),e.qb(30,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[".trademark"])),(l()(),e.Ib(-1,null,[" class on it."])),(l()(),e.qb(33,0,null,null,1,"h6",[["id","username"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[".username"])),(l()(),e.qb(35,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Extend the "])),(l()(),e.qb(37,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[".username"])),(l()(),e.Ib(-1,null,[" class on the username input field."])),(l()(),e.qb(40,0,null,null,1,"h6",[["id","password"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[".password"])),(l()(),e.qb(42,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Extend the "])),(l()(),e.qb(44,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[".password"])),(l()(),e.Ib(-1,null,[" class on the password input field."])),(l()(),e.qb(47,0,null,null,1,"h6",[["id","error-active"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[".error, .active"])),(l()(),e.qb(49,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["This wrapper contains a validation message. Extend the "])),(l()(),e.qb(51,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[".active"])),(l()(),e.Ib(-1,null,[" class with "])),(l()(),e.qb(54,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[".error"])),(l()(),e.Ib(-1,null,[" to display the validation message."])),(l()(),e.qb(57,0,null,null,1,"h4",[["id","example"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Example"])),(l()(),e.qb(59,0,null,null,1,"clr-login-example-demo",[],null,null,null,m,g)),e.pb(60,49152,null,0,p,[],null,null),(l()(),e.qb(61,0,null,null,16,"div",[["id","design-guidelines"]],null,null,null,null,null)),(l()(),e.qb(62,0,null,null,1,"h3",[["id","guidelines"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Usage"])),(l()(),e.qb(64,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["This component provides a complete login experience."])),(l()(),e.qb(66,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["To customize the login page, remove the elements you don\u2019t need, per your use case. For example, your app may require fewer fields."])),(l()(),e.qb(68,0,null,null,1,"h4",[["id","validation"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Validation"])),(l()(),e.qb(70,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Validation occurs on submit. If the user enters an incorrect user name or password, a validation message appears below the password field."])),(l()(),e.qb(72,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["For security reasons, Clarity does not call out whether the error occurred in the user name or password field. The validation message text should indicate this situation; for example, \u201cThe user name or password is incorrect.\u201d"])),(l()(),e.qb(74,0,null,null,1,"h4",[["id","responsiveness"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Responsiveness"])),(l()(),e.qb(76,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["The layout adapts to different screen sizes at 768px and 544px."]))],function(l,n){var u=n.component;l(n,1,0,u.title,u.newLayout,u.ui,u.ng)},function(l,n){l(n,0,0,!0)})}function A(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"clr-login-demo",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,f,v)),e.pb(1,49152,null,0,y,[],null,null)],null,function(l,n){l(n,0,0,!0,!0)})}var I=e.mb("clr-login-demo",y,A,{},{},[]),C=u("Ip0R"),q=u("XPsC"),w=u("ZYCi"),F=u("JsA7");u.d(n,"LoginDemoModuleNgFactory",function(){return x});var x=e.nb(o,[],function(l){return e.xb([e.yb(512,e.j,e.db,[[8,[a.uc,a.a,a.b,a.d,a.e,a.f,a.g,a.h,a.c,a.qc,a.rc,a.sc,a.tc,b.a,I]],[3,e.j],e.x]),e.yb(4608,C.q,C.p,[e.u,[2,C.I]]),e.yb(4608,s.C,s.C,[]),e.yb(1073742336,C.c,C.c,[]),e.yb(1073742336,i.gb,i.gb,[]),e.yb(1073742336,i.Pc,i.Pc,[]),e.yb(1073742336,i.ve,i.ve,[]),e.yb(1073742336,i.Y,i.Y,[]),e.yb(1073742336,i.d,i.d,[]),e.yb(1073742336,i.ab,i.ab,[]),e.yb(1073742336,i.r,i.r,[]),e.yb(1073742336,i.He,i.He,[]),e.yb(1073742336,i.p,i.p,[]),e.yb(1073742336,i.Rc,i.Rc,[]),e.yb(1073742336,i.O,i.O,[]),e.yb(1073742336,s.z,s.z,[]),e.yb(1073742336,s.k,s.k,[]),e.yb(1073742336,i.nb,i.nb,[]),e.yb(1073742336,i.Eb,i.Eb,[]),e.yb(1073742336,i.Ib,i.Ib,[]),e.yb(1073742336,i.Nb,i.Nb,[]),e.yb(1073742336,i.ic,i.ic,[]),e.yb(1073742336,i.db,i.db,[]),e.yb(1073742336,i.tb,i.tb,[]),e.yb(1073742336,i.bd,i.bd,[]),e.yb(1073742336,i.S,i.S,[]),e.yb(1073742336,i.Vd,i.Vd,[]),e.yb(1073742336,i.G,i.G,[]),e.yb(1073742336,i.Zb,i.Zb,[]),e.yb(1073742336,i.pc,i.pc,[]),e.yb(1073742336,i.v,i.v,[]),e.yb(1073742336,i.yb,i.yb,[]),e.yb(1073742336,i.sb,i.sb,[]),e.yb(1073742336,i.i,i.i,[]),e.yb(1073742336,i.j,i.j,[]),e.yb(1073742336,i.wb,i.wb,[]),e.yb(1073742336,i.Bb,i.Bb,[]),e.yb(1073742336,i.ce,i.ce,[]),e.yb(1073742336,i.fc,i.fc,[]),e.yb(1073742336,i.vc,i.vc,[]),e.yb(1073742336,i.pb,i.pb,[]),e.yb(1073742336,i.Rb,i.Rb,[]),e.yb(1073742336,i.lc,i.lc,[]),e.yb(1073742336,i.Fb,i.Fb,[]),e.yb(1073742336,i.Ac,i.Ac,[]),e.yb(1073742336,i.a,i.a,[]),e.yb(1073742336,q.a,q.a,[]),e.yb(1073742336,w.p,w.p,[[2,w.v],[2,w.m]]),e.yb(1073742336,F.a,F.a,[]),e.yb(1073742336,o,o,[]),e.yb(1024,w.k,function(){return[[{path:"",component:y}]]},[])])})}}]);