(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{243:function(t,e,n){"use strict";n.r(e);var o={name:"TituloFixed",props:{titulo:{type:String,required:!0,default:"Titulo"},tituloSize:{type:String,required:!1,default:"h5"},claseTitulo:{type:String,required:!1,default:"font-weight-bold"},classTituloFixed:{type:String,required:!1,default:"bg-primary p-1 text-center"}}},r=n(28),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("b-row",[e("b-col",{attrs:{cols:"12"}},[e("div",{class:this.classTituloFixed},[e(this.tituloSize,{tag:"component",class:"mb-0 title-up "+this.claseTitulo},[this._v("\n          "+this._s(this.titulo)+"\n        ")])],1)])],1)],1)}),[],!1,null,null,null);e.default=component.exports},245:function(t,e,n){"use strict";n.r(e);n(64),n(154),n(247),n(65);var o=n(243),r={id:"",nombre:"",fechaInicio:"",fechaFin:"",encargado:"",lugar:"",aforo:0},l={name:"ControlEvento",components:{TituloFixed:o.default},props:{disabled:{type:Boolean,default:!1},act:{type:String,default:"LISTAR"}},data:function(){return{evento:r,action:"LISTAR",listaEvento:[],listaPersonas:[],fields:[{key:"nombre",label:"Evento"},{key:"fechaInicio",label:"Fecha Inicio"},{key:"fechaFin",label:"Fecha Fin"},{key:"lugar",label:"Lugar"},{key:"action",label:""}],fieldsPersona:[{key:"nombre",label:"Nombre"},{key:"apellido",label:"Apellido"},{key:"codigo",label:"Código"},{key:"documento",label:"Documento"},{key:"etiqueta",labale:"Etiqueta RFID"},{key:"action",label:""}],asistencias:[],listaAsistentes:[],listaNoAsistentes:[]}},created:function(){this.action=this.act,this.listaEvento=this.$store.getters.getListEvent,this.listaPersonas=this.$store.getters.getListUserInfo,this.listaPersonas.length>0&&this.listaPersonas.forEach((function(p){p.text=p.nombre+" "+p.apellido+" - "+p.documento}))},methods:{validar:function(){return!1},cargar:function(t){this.cargarAsistencia(t),this.evento=t,this.action="REGISTRAR"},volver:function(){this.evento=r,this.action="LISTAR"},agregar:function(t){var e=this.$store.getters.getAsistencias,n={idEvento:this.evento.id,idPersona:t.id};e.push(n),this.$store.dispatch("setAsistencias",e),this.cargarAsistencia(this.evento)},eliminar:function(t){var e=this.$store.getters.getAsistencias,n={idEvento:this.evento.id,idPersona:t.id},o=e.indexOf(n);o>=-1&&e.splice(o,1),this.$store.dispatch("setAsistencias",e),this.cargarAsistencia(this.evento)},cargarAsistencia:function(t){var e=this;this.asistencias=[],this.listaAsistentes=[],this.listaNoAsistentes=[];var n=this.$store.getters.getAsistencias;n.length>0&&n.forEach((function(n){n.idEvento===t.id&&(e.asistencias.push(n),e.listaAsistentes.push(e.cargarPersona(n.idPersona)))})),this.cargarNoAsistentes()},cargarPersona:function(t){var e={};return this.listaPersonas.forEach((function(p){p.id===t&&(e=p)})),e},cargarNoAsistentes:function(){var t=this;this.listaNoAsistentes=[],this.listaPersonas.forEach((function(e){t.listaAsistentes.indexOf(e)<0&&t.listaNoAsistentes.push(e)}))}}},c=n(28),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["LISTAR"===t.action?n("div",[n("titulo-fixed",{attrs:{"class-titulo-fixed":"bg-danger p-1 text-center text-white",titulo:"Eventos"}}),t._v(" "),n("b-card",{staticStyle:{"background-color":"#f0f2f6 !important"}},[t.listaEvento.length>0?n("b-table",{attrs:{striped:"",hover:"",items:t.listaEvento,fields:t.fields},scopedSlots:t._u([{key:"cell(action)",fn:function(e){return[n("b-button",{attrs:{variant:"danger",size:"sm"},on:{click:function(n){return t.cargar(e.item)}}},[n("i",{staticClass:"fa fa-arrow-right"})])]}}],null,!1,1909604244)}):n("b-alert",{attrs:{variant:"info",show:""}},[t._v("No se encontraron eventos registrados")])],1)],1):n("div",[n("titulo-fixed",{attrs:{"class-titulo-fixed":"bg-danger p-1 text-center text-white",titulo:"Evento"}}),t._v(" "),n("b-card",{staticClass:"mb-3",staticStyle:{"background-color":"#f0f2f6 !important"}},[n("b-form",[n("b-row",[n("b-col",{attrs:{cols:"12",lg:"6",md:"6"}},[n("b-form-group",{attrs:{id:"input-group-1",label:"Nombre del Evento:","label-for":"input-1"}},[n("b-form-input",{attrs:{id:"input-1",type:"text",required:"",placeholder:"Nombre del Evento",disabled:""},model:{value:t.evento.nombre,callback:function(e){t.$set(t.evento,"nombre",e)},expression:"evento.nombre"}})],1)],1),t._v(" "),n("b-col",{attrs:{cols:"12",lg:"4",md:"4"}},[n("b-form-group",{attrs:{id:"input-group-5",label:"Lugar:","label-for":"input-5"}},[n("b-form-input",{attrs:{id:"input-5",type:"text",required:"",placeholder:"Lugar",disabled:""},model:{value:t.evento.lugar,callback:function(e){t.$set(t.evento,"lugar",e)},expression:"evento.lugar"}})],1)],1),t._v(" "),n("b-col",{attrs:{cols:"12",lg:"2",md:"2"}},[n("b-form-group",{attrs:{id:"input-group-6",label:"Aforo:","label-for":"input-6"}},[n("b-form-input",{attrs:{id:"input-6",type:"number",required:"",placeholder:"Aforo",disabled:""},model:{value:t.evento.aforo,callback:function(e){t.$set(t.evento,"aforo",e)},expression:"evento.aforo"}})],1)],1)],1)],1)],1),t._v(" "),n("titulo-fixed",{attrs:{"class-titulo-fixed":"bg-danger p-1 text-center text-white",titulo:"Asistentes"}}),t._v(" "),n("b-card",{staticClass:"mb-3",staticStyle:{"background-color":"#f0f2f6 !important"}},[t.listaAsistentes.length>0?n("b-table",{attrs:{striped:"",hover:"",items:t.listaAsistentes,fields:t.fieldsPersona},scopedSlots:t._u([{key:"cell(action)",fn:function(e){return[n("b-button",{attrs:{variant:"danger",size:"sm"},on:{click:function(n){return t.eliminar(e.item)}}},[n("i",{staticClass:"fa fa-trash-o"})])]}}],null,!1,562074915)}):n("b-alert",{attrs:{variant:"info",show:""}},[t._v("No se encontraron asistentes al evento")])],1),t._v(" "),n("titulo-fixed",{attrs:{"class-titulo-fixed":"bg-danger p-1 text-center text-white",titulo:"Lista Personas"}}),t._v(" "),n("b-card",{staticStyle:{"background-color":"#f0f2f6 !important"}},[t.listaNoAsistentes.length>0?n("b-table",{attrs:{striped:"",hover:"",items:t.listaNoAsistentes,fields:t.fieldsPersona},scopedSlots:t._u([{key:"cell(action)",fn:function(e){return[n("b-button",{attrs:{variant:"success",size:"sm"},on:{click:function(n){return t.agregar(e.item)}}},[n("i",{staticClass:"fa fa-plus"})])]}}],null,!1,20624227)}):n("b-alert",{attrs:{variant:"info",show:""}},[t._v("No se encontraron personas registradas")])],1),t._v(" "),n("b-btn",{staticClass:"mt-1 float-left",on:{click:t.volver}},[t._v("Volver")])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TituloFixed:n(243).default})},247:function(t,e,n){"use strict";var o=n(3),r=n(93),l=n(36),c=n(11),d=n(22),f=n(94),h=n(66),v=n(47),m=n(15),x=v("splice"),A=m("splice",{ACCESSORS:!0,0:0,1:2}),y=Math.max,E=Math.min;o({target:"Array",proto:!0,forced:!x||!A},{splice:function(t,e){var n,o,v,m,x,A,k=d(this),_=c(k.length),S=r(t,_),w=arguments.length;if(0===w?n=o=0:1===w?(n=0,o=_-S):(n=w-2,o=E(y(l(e),0),_-S)),_+n-o>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(v=f(k,o),m=0;m<o;m++)(x=S+m)in k&&h(v,m,k[x]);if(v.length=o,n<o){for(m=S;m<_-o;m++)A=m+n,(x=m+o)in k?k[A]=k[x]:delete k[A];for(m=_;m>_-o+n;m--)delete k[m-1]}else if(n>o)for(m=_-o;m>S;m--)A=m+n-1,(x=m+o-1)in k?k[A]=k[x]:delete k[A];for(m=0;m<n;m++)k[m+S]=arguments[m+2];return k.length=_-o+n,v}})},251:function(t,e,n){"use strict";n.r(e);var o={name:"ControlEventoPages",components:{ControlEvento:n(245).default}},r=n(28),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("control-evento")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ControlEvento:n(245).default})}}]);