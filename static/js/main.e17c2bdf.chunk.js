(this.webpackJsonpcarslist=this.webpackJsonpcarslist||[]).push([[0],{59:function(e,a,t){e.exports=t(73)},68:function(e,a,t){},73:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(7),l=t.n(c),i=t(26),o=(t(68),t(123)),u=t(109),m=Object(u.a)((function(e){return console.log("theme = ",e),{header:{width:"100%",height:"100px",background:e.palette.primary.main}}})),s=function(){var e=m();return r.a.createElement("header",{className:e.header})},p=Object(u.a)((function(e){return console.log("theme = ",e),{footer:{width:"100%",height:"100px",background:e.palette.primary.main}}})),d=function(){var e=p();return r.a.createElement("footer",{className:e.footer})},f=t(32),y=t(19),g=t(44),b=t(45),h=t(50),v=t(112),E=t(125),j=t(74),O=t(124),w=t(46),_=t.n(w),k=t(115),D=function(e){var a=e.label,t=e.id,n=e.type,c=e.changed,l=e.adorment,i=e.fileName,o=e.style,u=e.value;return"file"!==n?r.a.createElement(v.a,{item:!0},r.a.createElement(O.a,{label:a,id:t,type:n,style:o,value:u,InputProps:{endAdornment:r.a.createElement(k.a,{position:"end"},l)},onChange:c})):r.a.createElement(v.a,{item:!0,style:{width:"20em",marginTop:"5px"}},r.a.createElement("input",{accept:"image/*",style:{display:"none"},id:"raised-button-file",multiple:!0,type:n,value:u,onChange:c}),r.a.createElement("label",{htmlFor:"raised-button-file"},r.a.createElement(E.a,{component:"span",variant:"contained",startIcon:r.a.createElement(_.a,null)},i||"\u0424\u043e\u0442\u043e")))},C="ADD_CAR",x="REMOVE_CAR",A="INPUT_CHANGE",N="RESET_VALUES",L=function(e){function a(){var e,t;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(g.a)(this,(e=Object(b.a)(a)).call.apply(e,[this].concat(r)))).createCarsArray=function(e){var a=[];for(var t in e)a.push({id:t,config:e[t]});return a},t.useStyles=function(){return Object(u.a)((function(e){return{form12:{width:"20em"}}}))},t.addCarHandler=function(e){t.props.addCar(e),t.props.resetValues()},t}return Object(h.a)(a,e),Object(y.a)(a,[{key:"render",value:function(){var e=this,a=(this.useStyles(),this.createCarsArray(this.props.carData));return r.a.createElement(v.a,{item:!0},r.a.createElement(v.a,{item:!0,container:!0,style:{width:"20em",marginTop:"50px"}},r.a.createElement(j.a,{variant:"h3",style:{lineHeight:1}}," ","ADD NEW CAR"),a.map((function(a){return r.a.createElement(D,{key:a.id,type:a.config.type,label:a.config.label,style:{width:"20em",marginTop:"5px"},value:e.props.carData[a.id].value,fileName:a.config.imageName,adorment:a.config.adornment,changed:function(t){return e.props.inputChange(t,a.config.type,a.id)}})})),r.a.createElement(v.a,{item:!0,container:!0,justify:"center"},r.a.createElement(E.a,{variant:"contained",color:"primary",size:"large",style:{marginTop:"10px"},onClick:function(a){return e.addCarHandler(e.props.carData)}},"\u0414\u043e\u0434\u0430\u0442\u0438"))))}}]),a}(r.a.Component),R=Object(i.b)((function(e){return{carData:e.car.carData}}),(function(e){return{inputChange:function(a,t,n){return e(function(e,a,t){return{type:A,payload:{event:e,type:a,id:t}}}(a,t,n))},addCar:function(a){return e(function(e){return{type:C,payload:e}}(a))},resetValues:function(){return e({type:N})}}}))(L),T=t(13),H=t(117),I=t(121),S=t(120),V=t(116),F=t(118),U=t(119),J=t(114),M=t(122),P=function(){return"_"+Math.random().toString(36).substr(2,9)},W=Object(i.b)((function(e){return{carsList:e.car.carsList,carData:e.car.carData}}),(function(e){return{removeCar:function(a){return e(function(e){return{type:x,payload:e}}(a))}}}))((function(e){var a=e.carsList,t=function(e){var a=[];for(var t in e)a.push({id:P(),label:e[t].label});return a=[].concat(Object(T.a)(a),[{id:"remove",label:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"}])}(e.carData);return r.a.createElement(V.a,{component:J.a,style:{margin:"50px"}},r.a.createElement(H.a,{"aria-label":"simple table"},r.a.createElement(F.a,{style:{background:"#ccc"}},r.a.createElement(U.a,null,a.length>0?t.map((function(e){return r.a.createElement(S.a,{align:"center",key:e.id},e.label)})):null)),r.a.createElement(I.a,null,a.map((function(a){return r.a.createElement(U.a,{key:a.id},r.a.createElement(S.a,{component:"th",align:"center",scope:"row"},a.name),r.a.createElement(S.a,{align:"center"},a.liters_per_100km),r.a.createElement(S.a,{align:"center"},a.cylinders),r.a.createElement(S.a,{align:"center"},a.horsepower),r.a.createElement(S.a,{align:"center"},a.weight_in_kg),r.a.createElement(S.a,{align:"center"},a.acceleration),r.a.createElement(S.a,{align:"center"},a.year),r.a.createElement(S.a,{align:"center"},r.a.createElement("img",{src:a.photo,style:{height:"50px"}})),r.a.createElement(S.a,{align:"center"},r.a.createElement(M.a,{onClick:function(){return e.removeCar(a.id)}},"delete")))})))))})),z=Object(u.a)({container:{minHeight:"84vh",display:"flex",alignItems:"center",flexDirection:"column"}}),B=function(){var e=z();return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,null),r.a.createElement(o.a,{maxWidth:!1,alignitems:"center",className:e.container},r.a.createElement(R,null),r.a.createElement(W,null)),r.a.createElement(d,null))};var G=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(B,null))},q=t(47),K=t(14),Q=t(48),X=t.n(Q),Y=t(34),Z=t(49),$=t.n(Z),ee=t(17),ae={carData:{name:{type:"text",label:"\u041d\u0430\u0437\u0432\u0430",value:"",adornment:""},liters_per_100km:{type:"number",label:"\u041b/100\u043a\u043c",value:"",adornment:"\u043b"},cylinders:{type:"number",label:"\u0426\u0438\u043b\u0456\u043d\u0434\u0440\u0456\u0432",value:"",adornment:"\u0448\u0442"},horsepower:{type:"number",label:"\u041f\u043e\u0442\u0443\u0436\u043d\u0456\u0441\u0442\u044c",value:"",adornment:"\u043b.\u0441"},weight_in_kg:{type:"number",label:"\u0412\u0430\u0433\u0430",value:"",adornment:"\u043a\u0433"},acceleration:{type:"number",label:"\u041f\u0440\u0438\u0441\u043a\u043e\u0440\u0435\u043d\u043d\u044f",value:"",adornment:"\u0441\u0435\u043a"},year:{type:"number",label:"\u0420\u0456\u043a \u0432\u0438\u043f\u0443\u0441\u043a\u0443",value:"",adornment:"\u0440.\u0432"},photo:{type:"file",label:"\u0424\u043e\u0442\u043e",imageName:"",src:"",adornment:""}},carsList:[]},te=function(e){var a=Object(ee.a)({},e.carData);for(var t in a)a[t].value="",a[t].src="";return Object(ee.a)({},e,{carData:a})},ne=function(e,a){var t=a.name,n=a.liters_per_100km,r=a.cylinders,c=a.horsepower,l=a.weight_in_kg,i=a.acceleration,o=a.year,u=a.photo,m={id:P(),name:t.value,liters_per_100km:n.value,cylinders:r.value,horsepower:c.value,weight_in_kg:l.value,acceleration:i.value,year:o.value,photo:u.src};return Object(ee.a)({},e,{carsList:[].concat(Object(T.a)(e.carsList),[m])})},re=function(e,a){var t=a,n=e.carsList.filter((function(e){return e.id!==t}));return Object(ee.a)({},e,{carsList:n})},ce=function(e,a){var t=a.type,n=a.event,r=Object(ee.a)({},e.carData);if("file"!==t)return r[a.id].value=n.currentTarget.value,Object(ee.a)({},e,{carData:r});var c=n.target.files[0],l=new FileReader;return l.readAsDataURL(c),l.onload=function(){return r[a.id].src=l.result,Object(ee.a)({},e,{carData:r})},Object(ee.a)({},e)},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case C:return ne(e,a.payload);case x:return re(e,a.payload);case A:return ce(e,a.payload);case N:return te(e);default:return e}},ie={key:"root",storage:$.a,whitelist:["car"]},oe=Object(K.c)({car:le}),ue=Object(Y.a)(ie,oe),me=[X.a],se=Object(K.d)(ue,K.a.apply(void 0,me)),pe=Object(Y.b)(se);l.a.render(r.a.createElement(i.a,{store:se},r.a.createElement(q.a,{persistor:pe},r.a.createElement(G,null))),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.e17c2bdf.chunk.js.map