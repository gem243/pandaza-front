(function(e){function t(t){for(var n,o,s=t[0],c=t[1],l=t[2],u=0,v=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&v.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(v.length)v.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},i=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},2551:function(e){e.exports=JSON.parse('[{"id":"2e41fee0-1837-11ec-9621-0242ac130002","createdUser":"5c7e06e6-1837-11ec-9621-0242ac130002","title":"Pastas de la abuela","steps":"Caliente agua y agregue las pastas y espere hasta que esten blandas.","images":["https://holycowvegan.net/wp-content/uploads/2020/08/vegan-arroz-con-pollo-spanish-chicken-rice-1.jpg","https://www.goya.com/media/3854/southwestern-chicken-and-rice.jpg"],"ingridients":[{"id":"8428391e-1837-11ec-9621-0242ac130002","name":"Agua","quantity":"1 lt"},{"id":"9d0f4a62-1837-11ec-9621-0242ac130002","name":"Pastas","quantity":"1 paquete"}]},{"id":"2e41fee0-1837-11ec-9621-0242ac130002","createdUser":"5c7e06e6-1837-11ec-9621-0242ac130002","title":"Pastas de la abuela","steps":"Caliente agua y agregue las pastas y espere hasta que esten blandas.","images":["https://media.nbclosangeles.com/2020/07/portosarrozfrito.jpeg?quality=85&strip=all&fit=2100%2C1181&w=975&h=548&crop=1","https://www.goya.com/media/3854/southwestern-chicken-and-rice.jpg"],"ingridients":[{"id":"8428391e-1837-11ec-9621-0242ac130002","name":"Agua","quantity":"1 lt"},{"id":"9d0f4a62-1837-11ec-9621-0242ac130002","name":"Pastas","quantity":"1 paquete"}]}]')},"2cfd":function(e,t,a){e.exports=a.p+"img/banner_2.3d41c665.jpg"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("8c4f"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("PandazaLogin"),n("v-img",{attrs:{"lazy-src":a("2cfd"),"max-height":"300","max-width":"1400",src:a("2cfd")}}),n("br"),n("h1",[e._v("Bienvenido a Pandaza")]),n("h4",[e._v("El recetario colaborativo mas grande del mundo")]),n("RecipeConsult")],1)},o=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h4",{directives:[{name:"show",rawName:"v-show",value:!e.isUserLoggedIn,expression:"!isUserLoggedIn"}]},[e._v("LOGIN")]),a("v-form",{directives:[{name:"show",rawName:"v-show",value:!e.isUserLoggedIn,expression:"!isUserLoggedIn"}]},[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{rules:[e.rules.required,e.rules.email],label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Password","append-icon":e.showPassword?"mdi-eye":"mdi-eye-off",rules:[e.rules.required],type:e.showPassword?"text":"password",required:""},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-btn",{attrs:{depressed:"",color:"primary"},on:{click:e.login}},[e._v(" LOGIN ")])],1)],1)],1)],1),a("h3",{directives:[{name:"show",rawName:"v-show",value:e.isUserLoggedIn,expression:"isUserLoggedIn"}]},[e._v(" "+e._s(e.message)+" ")])],1)},c=[],l=a("1da1"),d=(a("96cf"),a("b0c0"),a("bc3a")),u=a.n(d),v={methods:{login:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,a={email:e.email,password:e.password},t.next=4,u.a.post("https://pandaza-backend.herokuapp.com/api/usuarios/login",a);case 4:n=t.sent,localStorage.setItem("pandaza-token",n.data.token),e.isUserLoggedIn=!0,e.message="Bienvenido ".concat(n.data.name," a tu recetario"),t.next=15;break;case 10:throw t.prev=10,t.t0=t["catch"](0),e.isUserLoggedIn=!1,e.message="Email o Password incorrectos",t.t0;case 15:case"end":return t.stop()}}),t,null,[[0,10]])})))()}},data:function(){return{showPassword:!1,email:"",password:"",message:"",isUserLoggedIn:!1,rules:{required:function(e){return!!e||"Campo requerido."},email:function(e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)||"Correo invalido."}}}}},p=v,m=a("2877"),g=a("6544"),h=a.n(g),f=a("8336"),b=a("62ad"),w=a("a523"),x=a("4bd4"),_=a("0fd9"),y=a("8654"),C=Object(m["a"])(p,s,c,!1,null,null,null),V=C.exports;h()(C,{VBtn:f["a"],VCol:b["a"],VContainer:w["a"],VForm:x["a"],VRow:_["a"],VTextField:y["a"]});var R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("v-text-field",{attrs:{label:"Consulta tu receta",placeholder:"Placeholder"}}),a("v-btn",{attrs:{depressed:""}},[e._v(" Consultar ")])],1),a("div",{attrs:{id:"resultado"}},[a("v-row",e._l(e.recipes,(function(t){return a("v-col",{key:t.id},[e._v("> "),a("v-card",{staticClass:"mx-auto my-12",attrs:{loading:e.loading,"max-width":"374"}},[[a("v-progress-linear",{attrs:{color:"blue darken-4",height:"10",indeterminate:""}})],a("v-img",{attrs:{height:"250",src:t.image}}),a("v-card-title",[e._v(e._s(t.title)+" ")]),a("v-card-text",[a("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[a("v-rating",{attrs:{value:4.5,color:"amber",dense:"","half-increments":"",readonly:"",size:"14"}}),a("div",{staticClass:"grey--text ms-4"},[e._v(" 4.5 (413) ")])],1),a("div",{staticClass:"my-4 text-subtitle-1"},[e._v(" $ • Italian, Cafe ")]),a("div",[e._v(e._s(t.base))])],1),a("v-divider",{staticClass:"mx-4"}),a("v-card-title",[e._v("Tonight's availability")]),a("v-card-text",[a("v-chip-group",{attrs:{"active-class":"deep-purple accent-4 white--text",column:""},model:{value:e.selection,callback:function(t){e.selection=t},expression:"selection"}},[a("v-chip",[e._v("5:30PM")]),a("v-chip",[e._v("7:30PM")]),a("v-chip",[e._v("8:00PM")]),a("v-chip",[e._v("9:00PM")])],1)],1),a("v-card-actions",[a("v-btn",{attrs:{color:"deep-purple lighten-2",text:""},on:{click:e.reserve}},[e._v(" Reserve ")])],1)],2)],1)})),1)],1),a("div",[e._v(" PRUEBAS DE MUESTRA DE registros "),a("v-row",e._l(e.registros,(function(t){return a("v-col",{key:t.name},[e._v(" "+e._s(t.name)+" ")])})),1)],1)])},k=[],I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),a("div",[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"10",md:"8",lg:"6"}},[a("v-card",{ref:"form"},[a("v-card-text",[a("v-text-field",{ref:"name",attrs:{label:"Full Name",placeholder:"John Connor",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("v-text-field",{ref:"address",attrs:{label:"Address Line",placeholder:"Snowy Rock Pl",counter:"25",required:""},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}}),a("v-text-field",{ref:"city",attrs:{label:"City",placeholder:"El Paso",required:""},model:{value:e.city,callback:function(t){e.city=t},expression:"city"}}),a("v-text-field",{ref:"state",attrs:{label:"State/Province/Region",required:"",placeholder:"TX"},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}}),a("v-text-field",{ref:"zip",attrs:{label:"ZIP / Postal Code",required:"",placeholder:"79938"},model:{value:e.zip,callback:function(t){e.zip=t},expression:"zip"}}),a("v-autocomplete",{ref:"country",attrs:{items:e.countries,label:"Country",placeholder:"Select...",required:""},model:{value:e.country,callback:function(t){e.country=t},expression:"country"}}),a("v-text-field",{ref:"email",attrs:{label:"Email",required:"",placeholder:"test@test.com"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{ref:"password",attrs:{label:"Password","append-icon":e.showPassword?"mdi-eye":"mdi-eye-off",type:e.showPassword?"text":"password",required:""},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),a("v-divider",{staticClass:"mt-12"}),a("v-card-actions",[a("v-btn",{attrs:{text:""}},[e._v(" Cancel ")]),a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:e.submit}},[e._v(" Submit ")])],1)],1)],1)],1)],1),a("br"),a("div",[e._m(1),a("v-row",[a("v-col",{on:{click:e.submit}},[a("br"),e._v(" "+e._s(e.mensaje)+" ")])],1)],1)])},S=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Registrarse")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",[a("b",[e._v("↓↓↓ CONFIRMACION DE REGISTRO: ↓↓↓")])])}],P={data:function(){return{countries:["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"],errorMessages:"",name:null,address:null,city:null,state:null,zip:null,country:null,email:null,password:null,showPassword:!1,registros:[],mensaje:""}},mounted:function(){var e=JSON.parse(localStorage.getItem("userList"));void 0!=e&&(this.registros=e)},methods:{submit:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={name:e.name,address:e.address,city:e.city,state:e.state,zip:e.zip,country:e.country,email:e.email,password:e.password},t.next=3,u.a.post("https://pandaza-backend.herokuapp.com/api/usuarios",a);case 3:n=t.sent,e.mensaje=n.data.message;case 5:case"end":return t.stop()}}),t)})))()}}},j=P,A=a("c6a6"),T=a("b0af"),z=a("99d9"),E=a("ce7e"),L=a("2fa4"),B=Object(m["a"])(j,I,S,!1,null,null,null),O=B.exports;h()(B,{VAutocomplete:A["a"],VBtn:f["a"],VCard:T["a"],VCardActions:z["a"],VCardText:z["c"],VCol:b["a"],VDivider:E["a"],VRow:_["a"],VSpacer:L["a"],VTextField:y["a"]});var M={name:"recipeConsult",props:{msg:String},pages:{SignUp:O},data:function(){return{registros:[],recipes:[{id:"2e41fee0-1837-11ec-9621-0242ac130002",createdUser:"5c7e06e6-1837-11ec-9621-0242ac130002",title:"Pastas de la abuela",base:"Plato tipico de abuela tradicional italiana.",image:"https://www.goya.com/media/3854/southwestern-chicken-and-rice.jpg"},{id:"2e41fee0-1837-11ec-9621-0242ac130002",createdUser:"5c7e06e6-1837-11ec-9621-0242ac130002",title:"Sancocho",base:"Caldo tipico en las tierras del valle del cauca -col.",image:"https://media-cdn.tripadvisor.com/media/photo-s/16/8b/be/32/sancocho-valluno-de-gallina.jpg"},{id:"2e41fee0-1837-11ec-9621-0242ac130002",createdUser:"5c7e06e6-1837-11ec-9621-0242ac130002",title:"Bandeja Paisa",base:"Bandeja caracteristica de la region antioqueña.",image:"http://c.files.bbci.co.uk/DBBF/production/_105055265_bandejapaisa.jpg"}]}},mounted:function(){var e=JSON.parse(localStorage.getItem("userList"));void 0!=e&&(this.registros=e)}},q=M,N=a("cc20"),U=a("ef9a"),F=a("adda"),G=a("8e36"),D=a("1d4d"),$=Object(m["a"])(q,R,k,!1,null,null,null),J=$.exports;h()($,{VBtn:f["a"],VCard:T["a"],VCardActions:z["a"],VCardText:z["c"],VCardTitle:z["d"],VChip:N["a"],VChipGroup:U["a"],VCol:b["a"],VDivider:E["a"],VImg:F["a"],VProgressLinear:G["a"],VRating:D["a"],VRow:_["a"],VTextField:y["a"]});var K={components:{RecipeConsult:J,PandazaLogin:V}},H=K,Z=Object(m["a"])(H,i,o,!1,null,null,null),Q=Z.exports;h()(Z,{VImg:F["a"]});var W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"transition-swing text-h3 mb--1"},[e._v(e._s(e.titulo))]),a("v-form",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{ref:"nameReceta",attrs:{outlined:"",label:"titulo receta",placeholder:"Ej: Arroz frito con gambas",rules:e.rules},model:{value:e.nameReceta,callback:function(t){e.nameReceta=t},expression:"nameReceta"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{ref:"nameReceta",attrs:{outlined:"",rules:e.rules,label:"photo receta"},model:{value:e.photoReceta,callback:function(t){e.photoReceta=t},expression:"photoReceta"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"4"}},[a("v-text-field",{ref:"nameIngre",attrs:{outlined:"",label:"Nombre Ingrediente:",rules:e.rules,placeholder:"Arroz"},model:{value:e.ingre,callback:function(t){e.ingre=t},expression:"ingre"}})],1),a("v-col",{attrs:{cols:"4"}},[a("v-text-field",{ref:"qtyIngre",attrs:{outlined:"",label:"Cantidad/Unidad de medida:",placeholder:"100 gr, 2 unidades, 2 tasas ....",rules:e.rules},model:{value:e.cant,callback:function(t){e.cant=t},expression:"cant"}})],1),a("v-col",{attrs:{cols:"3"}}),a("v-col",{attrs:{cols:"1"}},[a("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",color:"indigo"},on:{click:function(t){return e.agregarIngredientes()}}},[a("v-icon",{attrs:{dark:""}},[e._v(" mdi-plus ")])],1)],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{ref:"descReceta",attrs:{outlined:"",name:"input-7-4",rules:e.rules,label:"Descripcion",hint:"Calentar sarten, agregar pollo y arroz"},model:{value:e.descReceta,callback:function(t){e.descReceta=t},expression:"descReceta"}})],1)],1),a("v-row",{attrs:{align:"center",justify:"space-around"}},[e.isEdit?e._e():a("v-btn",{attrs:{depressed:"",color:"primary"},on:{click:function(t){return e.guardarReceta()}}},[e._v(" Guardar ")]),e.isEdit?a("v-btn",{attrs:{depressed:"",color:"success"},on:{click:function(t){return e.actualizarReceta()}}},[e._v(" Actualizar ")]):e._e()],1)],1)],1)],1)},X=[],Y=u.a.create({timeout:3e3,headers:{"Content-type":"application/json"}}),ee=Y,te="https://pandaza-backend.herokuapp.com/api/recetas",ae=function(){return ee.get(te)},ne=function(e){return ee.post(te,e)},re=function(e){return ee.get(te+"/"+e)},ie=function(e,t){return ee.put(te+"/"+e,t)},oe=function(e){return ee.delete(te+"/"+e)},se={data:function(){return{titulo:"Agregar receta",isEdit:!1,nameReceta:"",photoReceta:"",ingre:"",cant:"",listaIngredientes:[],descReceta:"",rules:[function(e){return!!e||"Required."}]}},created:function(){var e=this,t=this.$route.params.nameReceta;console.log("¿Tiene nombre? ... "+t),void 0!=t&&re(t).then((function(t){var a=t.data;e.nameReceta=a.nameReceta,e.photoReceta=a.photoReceta,e.listaIngredientes=a.listaIngredientes,e.ingre=a.ingre,e.cant=a.cant,e.descReceta=a.descReceta,e.titulo="Editar Receta",e.isEdit=!0})).catch((function(){return console.log("Datos no encontrados")}))},methods:{guardarReceta:function(){if(void 0==this.nameReceta||""==this.nameReceta||void 0==this.photoReceta||""==this.photoReceta||void 0==this.listaIngredientes||this.listaIngredientes==[]||void 0==this.descReceta||""==this.descReceta)return console.log("no llenaste alguno de loscampos obligatorios");var e={nameReceta:this.nameReceta,photoReceta:this.photoReceta,listaIngredientes:this.listaIngredientes,descReceta:this.descReceta};ne(e).then((function(e){console.log("Se ha creado la receta",e.data._id)})).catch((function(e){return console.error(e)}))},actualizarReceta:function(){var e=this;if(void 0==this.nameReceta||""==this.nameReceta||void 0==this.photoReceta||""==this.photoReceta||void 0==this.listaIngredientes||this.listaIngredientes==[]||void 0==this.descReceta||""==this.descReceta)return console.log("no llenaste alguno de loscampos obligatorios");var t={nameReceta:this.nameReceta,photoReceta:this.photoReceta,listaIngredientes:this.listaIngredientes,cant:this.cant,ingre:this.ingre,descReceta:this.descReceta};ie(this.nameReceta,t).then((function(){console.log("Se ha Actualizado la receta "+e.nameReceta)})).catch((function(e){return console.error(e)}))},agregarIngredientes:function(){var e={ingre:this.ingre,cant:this.cant};this.listaIngredientes.push(e),this.ingre="",this.cant=""}}},ce=se,le=a("132d"),de=a("a844"),ue=Object(m["a"])(ce,W,X,!1,null,null,null),ve=ue.exports;h()(ue,{VBtn:f["a"],VCol:b["a"],VContainer:w["a"],VForm:x["a"],VIcon:le["a"],VRow:_["a"],VTextField:y["a"],VTextarea:de["a"]});var pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"transition-swing text-h3 mb--1"},[e._v("Ver Receta")]),a("v-form",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{outlined:"",label:"Titulo Receta",placeholder:"Arroz con pollo"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-carousel",e._l(e.recipe.images,(function(e,t){return a("v-carousel-item",{key:t,attrs:{src:e,"reverse-transition":"fade-transition",transition:"fade-transition"}})})),1)],1)],1),e._l(e.recipe.ingridients,(function(t){return a("v-row",{key:t.id},[a("v-col",{attrs:{cols:"6"}},[a("v-subheader",{domProps:{textContent:e._s(t.name)}})],1),a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{label:"Cantidad",suffix:"lbs"},domProps:{textContent:e._s(t.quantity)}})],1)],1)})),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{outlined:"",name:"input-7-4",label:"Descripcion",hint:"Calentar sarten, agregar pollo y arroz"}})],1)],1)],2)],1)],1)},me=[],ge=a("2551"),he={components:{},data:function(){return{recipe:ge[0]}}},fe=he,be=a("5e66"),we=a("3e35"),xe=a("e0c7"),_e=Object(m["a"])(fe,pe,me,!1,null,null,null),ye=_e.exports;h()(_e,{VCarousel:be["a"],VCarouselItem:we["a"],VCol:b["a"],VContainer:w["a"],VForm:x["a"],VRow:_["a"],VSubheader:xe["a"],VTextField:y["a"],VTextarea:de["a"]});var Ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"transition-swing text-h3 mb--1"},[e._v("Editar Receta")]),a("v-form",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{outlined:"",label:"Titulo Receta",placeholder:"Arroz con pollo"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-carousel",e._l(e.recipe.images,(function(e,t){return a("v-carousel-item",{key:t,attrs:{src:e,"reverse-transition":"fade-transition",transition:"fade-transition"}})})),1)],1)],1),e._l(e.recipe.ingridients,(function(t){return a("v-row",{key:t.id},[a("v-col",{attrs:{cols:"6"}},[a("v-subheader",{domProps:{textContent:e._s(t.name)}})],1),a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{label:"Cantidad",suffix:"lbs"},domProps:{textContent:e._s(t.quantity)}})],1)],1)})),a("v-row",{attrs:{align:"center",justify:"space-around"}},[a("v-btn",{attrs:{depressed:"",color:"primary"}},[e._v(" Agregar Ingrediente ")]),a("v-btn",{attrs:{depressed:"",color:"primary"}},[e._v(" Eliminar Ingrediente ")])],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{outlined:"",name:"input-7-4",label:"Descripcion",hint:"Calentar sarten, agregar pollo y arroz"}})],1)],1),a("v-row",{attrs:{align:"center",justify:"space-around"}},[a("v-btn",{attrs:{depressed:"",color:"primary"}},[e._v(" Guardar ")]),a("v-btn",{attrs:{depressed:"",color:"primary"}},[e._v(" Eliminar ")])],1)],2)],1)],1)},Ve=[],Re={components:{},data:function(){return{recipe:ge[0]}}},ke=Re,Ie=Object(m["a"])(ke,Ce,Ve,!1,null,null,null),Se=Ie.exports;h()(Ie,{VBtn:f["a"],VCarousel:be["a"],VCarouselItem:we["a"],VCol:b["a"],VContainer:w["a"],VForm:x["a"],VRow:_["a"],VSubheader:xe["a"],VTextField:y["a"],VTextarea:de["a"]});var Pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("add-comment")},je=[],Ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"pa-md-4 mx-lg-auto",attrs:{fluid:""}},[n("h3",{staticClass:"text-justify pa-2 font-weight-bold font font-italic"},[e._v("Agregar comentarios")]),n("v-row",[n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-textarea",{attrs:{id:"textarea",outlined:"",rows:"4","no-resize":"",clearable:"","clear-icon":"mdi-eraser",solo:"",name:"textArea-1",rules:e.rules,readonly:e.readonly,label:"Deje sus comentarios aquí"},model:{value:e.comentInput,callback:function(t){e.comentInput=t},expression:"comentInput"}}),n("div",{staticClass:"text-center"},[n("v-btn",{staticClass:"ma-2",attrs:{id:"boton",outlined:"",color:"indigo"},on:{click:function(t){return e.saveComent()}}},[e._v("Enviar comentario ")]),n("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"green"},on:{click:function(t){return e.activarCampo()}}},[e._v("Habilitar ")])],1)],1)],1),n("v-row",[n("v-container",{attrs:{fluid:""}},[n("v-container",[n("v-row",{attrs:{dense:""}},[n("v-col",{attrs:{cols:"6"}},[n("v-card",{staticClass:"mx-auto",attrs:{color:"#26c6da",dark:"","max-width":"600"}},[n("v-card-title",[n("v-icon",{attrs:{large:"",left:""}},[e._v("mdi-food-croissant")]),n("span",{staticClass:"text-h5 font-weight-light"},[e._v("Comentarios...")])],1),n("v-card-text",{staticClass:"text-h5 font-weight-bold"},[n("v-list",{attrs:{dense:""}},[n("v-subheader",[e._v("REPORTS")]),n("v-list-item-group",{attrs:{color:"primary"},model:{value:e.selectedItem,callback:function(t){e.selectedItem=t},expression:"selectedItem"}},e._l(e.items,(function(t,a){return n("v-list-item",{key:a},[e._v(" "+e._s(a+1)+" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(t.mensaje)}})],1)],1)})),1)],1)],1),n("v-card-actions",[n("v-list-item",{staticClass:"grow"},[n("v-list-item-avatar",{attrs:{color:"grey darken-3"}},[n("v-img",{staticClass:"elevation-6",attrs:{alt:"",src:a("5fbe")}})],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Pandaza Team")])],1),n("v-row",{attrs:{align:"center",justify:"end"}})],1)],1)],1)],1)],1)],1),n("v-list-item",[n("v-list-item-content",{attrs:{"v-model":e.comentInput}},[n("v-list-item-title"),n("div",{staticStyle:{"text-align":"justify"}})],1)],1)],1)],1)],1)},Te=[],ze={data:function(){return{readonly:!0,comentInput:"",textarea:"",items:[{mensaje:"First"},{mensaje:"Second"}],rules:[function(e){return e.length<=200||"Max 200 characters"}]}},mounted:function(){var e=JSON.parse(localStorage.getItem("coment"));void 0!=e&&(this.comentInput=e.cInput)},methods:{activarCampo:function(){this.readonly=!this.readonly},saveComent:function(){var e=JSON.parse(localStorage.getItem("comentarios"));void 0==e&&(e=[]);var t=localStorage.getItem("idco");t=void 0==t?1:parseInt(t)+1;var a={id:t,comentInput:this.comentInput};e.push(a),this.idComentario="",localStorage.setItem("comentarios",JSON.stringify(e)),localStorage.setItem("idco",t)}}},Ee=ze,Le=a("8860"),Be=a("da13"),Oe=a("8270"),Me=a("5d23"),qe=a("1baa"),Ne=Object(m["a"])(Ee,Ae,Te,!1,null,"43e2917e",null),Ue=Ne.exports;h()(Ne,{VBtn:f["a"],VCard:T["a"],VCardActions:z["a"],VCardText:z["c"],VCardTitle:z["d"],VCol:b["a"],VContainer:w["a"],VIcon:le["a"],VImg:F["a"],VList:Le["a"],VListItem:Be["a"],VListItemAvatar:Oe["a"],VListItemContent:Me["a"],VListItemGroup:qe["a"],VListItemTitle:Me["b"],VRow:_["a"],VSubheader:xe["a"],VTextarea:de["a"]});var Fe={components:{AddComment:Ue}},Ge=Fe,De=Object(m["a"])(Ge,Pe,je,!1,null,null,null),$e=De.exports,Je=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"recetas"},[a("h2",[e._v("Recetario")]),a("v-container",[a("v-fab-transition",[a("v-btn",{attrs:{color:"primary",fab:"",dark:"",medium:"",absolute:"",top:"",right:"",link:"",to:"/AddRecipe"}},[a("v-icon",[e._v("mdi-plus")])],1)],1),a("v-row",e._l(e.recetas,(function(t){return a("v-col",{key:t,attrs:{md:"3",sm:"6",lg:"4"}},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[a("v-img",{attrs:{src:t.photoReceta,height:"200px"}}),a("v-card-title",[e._v(" "+e._s(t.nameReceta)+" ")]),a("div",[a("v-divider"),a("v-simple-table",{attrs:{dense:"",dark:""},scopedSlots:e._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-center"},[a("b",[e._v("Ingredientes")])]),a("th",{staticClass:"text-center"},[a("b",[e._v("Cantidades")])])])]),a("tbody",e._l(t.listaIngredientes,(function(t){return a("tr",{key:t.name},[a("td",[e._v(e._s(t.ingre))]),a("td",[e._v(e._s(t.cant))])])})),0)]},proxy:!0}],null,!0)})],1),a("v-card-actions",[a("v-btn",{attrs:{outlined:"",color:"success",text:""},on:{click:function(a){return e.editarReceta(t.nameReceta)}}},[e._v(" Editar ")]),a("v-btn",{attrs:{outlined:"",color:"red dark",text:""},on:{click:function(a){return e.eliminarReceta(t.nameReceta)}}},[e._v(" Borrar ")]),a("v-spacer"),a("v-btn",{attrs:{icon:"",text:"",color:"#033"},on:{click:function(t){e.show=!e.show}}},[a("v-icon",[e._v(e._s(e.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),a("v-expand-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[a("v-card-subtitle",[a("b",[e._v("Preparación:")])]),a("v-card-text",[e._v(" "+e._s(t.descReceta)+" ")])],1)])],1)],1)})),1)],1)],1)},Ke=[],He=(a("4de4"),{data:function(){return{recetas:[],valid:!0,show:function(){return{show:!1}},selectedItem:1}},mounted:function(){var e=this;ae().then((function(t){e.recetas=t.data,console.log(t.data)})).catch((function(e){return console.error(e)}))},methods:{editarReceta:function(e){this.$router.push("/AddRecipe/".concat(e))},eliminarReceta:function(e){var t=this;oe(e).then((function(){console.log("exito"),t.recetas=t.recetas.filter((function(t){return t.nameReceta!=e}))})).catch((function(){console.log("error")}))}}}),Ze=He,Qe=a("0789"),We=a("1f4f"),Xe=Object(m["a"])(Ze,Je,Ke,!1,null,null,null),Ye=Xe.exports;h()(Xe,{VBtn:f["a"],VCard:T["a"],VCardActions:z["a"],VCardSubtitle:z["b"],VCardText:z["c"],VCardTitle:z["d"],VCol:b["a"],VContainer:w["a"],VDivider:E["a"],VExpandTransition:Qe["a"],VFabTransition:Qe["c"],VIcon:le["a"],VImg:F["a"],VRow:_["a"],VSimpleTable:We["a"],VSpacer:L["a"]}),n["a"].use(r["a"]);var et=[{path:"/",component:Q},{path:"/AddRecipe",component:ve},{path:"/AddRecipe/:nameReceta",component:ve},{path:"/EditRecipe/",component:Se},{path:"/ViewRecipe",component:ye},{path:"/Login",component:O},{path:"/PComent",component:$e},{path:"/ListRecipe",component:Ye}],tt=new r["a"]({routes:et,mode:"history"}),at=tt,nt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-navigation-drawer",{staticClass:"deep-purple accent-4",attrs:{src:"https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg",dark:"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",e._l(e.items,(function(t){return a("v-list-item",{key:t.title,attrs:{to:t.page,link:""}},[a("v-list-item-icon",[a("v-icon",{attrs:{color:"yellow accent-2"}},[e._v(e._s(t.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),1)],1),a("v-app-bar",{attrs:{color:"deep-purple accent-4",dark:"",app:"",src:"https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"}},[a("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),a("v-toolbar-title",[e._v(e._s(e.title))]),a("v-spacer"),a("v-menu",{attrs:{left:"",bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[a("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",r,!1),n),[a("v-icon",[e._v("mdi-dots-vertical")])],1)]}}])},[a("v-list",e._l(5,(function(t){return a("v-list-item",{key:t,on:{click:function(){}}},[a("v-list-item-title",[e._v("Option "+e._s(t))])],1)})),1)],1)],1),a("v-main",[a("v-container",{attrs:{fluid:""}},[a("router-view")],1)],1),a("v-footer",{attrs:{app:""}})],1)},rt=[],it={data:function(){return{title:"Pandaza",drawer:!1,items:[{icon:"mdi-home-outline",title:"Home",page:"/"},{icon:"mdi-email",title:"Coments",page:"/PComent"},{icon:"mdi-account-plus",title:"Login",page:"/Login"},{icon:"mdi-silverware-fork-knife",title:"Add recipe",page:"/AddRecipe"},{icon:"mdi-food",title:"View recipe",page:"/ViewRecipe"},{icon:"mdi-shaker-outline",title:"Edit recipe",page:"/EditRecipe/"},{icon:"mdi-book-open-outline",title:"Recetas",page:"/ListRecipe"}]}},method:{loadToken:function(){var e=localStorage.getItem("pandaza-token");return e}}},ot=it,st=(a("034f"),a("7496")),ct=a("40dc"),lt=a("5bc1"),dt=a("553a"),ut=a("34c3"),vt=a("f6c4"),pt=a("e449"),mt=a("f774"),gt=a("2a7f"),ht=Object(m["a"])(ot,nt,rt,!1,null,null,null),ft=ht.exports;h()(ht,{VApp:st["a"],VAppBar:ct["a"],VAppBarNavIcon:lt["a"],VBtn:f["a"],VContainer:w["a"],VFooter:dt["a"],VIcon:le["a"],VList:Le["a"],VListItem:Be["a"],VListItemContent:Me["a"],VListItemIcon:ut["a"],VListItemTitle:Me["b"],VMain:vt["a"],VMenu:pt["a"],VNavigationDrawer:mt["a"],VSpacer:L["a"],VToolbarTitle:gt["a"]});var bt=a("f309");a("bf40");n["a"].use(bt["a"]);var wt=new bt["a"]({});new n["a"]({router:at,vuetify:wt,render:function(e){return e(ft)}}).$mount("#app")},"5fbe":function(e,t,a){e.exports=a.p+"img/logo2.38468e0b.png"},"85ec":function(e,t,a){}});
//# sourceMappingURL=app.45a0ed29.js.map