(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/placeholder.130260f7.svg"},23:function(e,t,a){e.exports=a.p+"static/media/price-tag.0e28cfa5.svg"},24:function(e,t,a){e.exports=a.p+"static/media/reduce.faeaa24f.svg"},25:function(e,t,a){e.exports=a.p+"static/media/counting.2b57835a.svg"},41:function(e,t,a){e.exports=a(81)},54:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){},60:function(e,t,a){},62:function(e,t,a){},64:function(e,t,a){},67:function(e,t,a){},69:function(e,t,a){},71:function(e,t,a){},75:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(10),n=a(16),r=a(26),l=a(11),s=a.n(l),i=a(15),o=[{createdAt:"",task:"",task_desc:"",task_status:"",updatedAt:"",__v:0,_id:""}],d=function(){var e=Object(i.a)(s.a.mark(function e(t){var a,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/task_management",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return a=e.sent,e.next=5,a.json();case 5:if(c=e.sent,200===a.status){e.next=8;break}throw Error(c.message);case 8:return e.abrupt("return",c);case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(i.a)(s.a.mark(function e(t){var a,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/task_management/"+t,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}});case 2:return a=e.sent,e.next=5,a.json();case 5:if(c=e.sent,200===a.status){e.next=8;break}throw Error(c.message);case 8:return e.abrupt("return",c);case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();var u="";var m=a(18),f={filterTypes:{districts:{listOpen:!1,mobileOpen:!1,headerTitle:"\u0420\u0430\u0439\u043e\u043d",titleHelper:"\u0440\u0430\u0439\u043e\u043d",options:[{id:0,title:"\u0412\u0441\u0435 \u0440\u0430\u0439\u043e\u043d\u044b",value:["\u041c\u0430\u043b\u0438\u043d\u043e\u0432\u0441\u043a\u0438\u0439","\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439","\u0421\u0443\u0432\u043e\u0440\u043e\u0432\u0441\u043a\u0438\u0439","\u041a\u0438\u0435\u0432\u0441\u043a\u0438\u0439"],selected:!0,key:"districts"},{id:1,title:"\u041c\u0430\u043b\u0438\u043d\u043e\u0432\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",value:"\u041c\u0430\u043b\u0438\u043d\u043e\u0432\u0441\u043a\u0438\u0439",selected:!1,key:"districts"},{id:2,title:"\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",value:"\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439",selected:!1,key:"districts"},{id:3,title:"\u0421\u0443\u0432\u043e\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",value:"\u0421\u0443\u0432\u043e\u0440\u043e\u0432\u0441\u043a\u0438\u0439",selected:!1,key:"districts"},{id:4,title:"\u041a\u0438\u0435\u0432\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",value:"\u041a\u0438\u0435\u0432\u0441\u043a\u0438\u0439",selected:!1,key:"districts"}]},prices:{listOpen:!1,headerTitle:"\u0426\u0435\u043d\u044b",titleHelper:"\u0446\u0435\u043d\u044b",options:[{id:0,title:"\u041b\u044e\u0431\u0430\u044f",value:["0","1000000"],selected:!0,key:"prices"},{id:1,title:"\u0434\u043e 30 000 $",value:["0","30000"],selected:!1,key:"prices"},{id:2,title:"\u0434\u043e 40 000 $",value:["0","40000"],selected:!1,key:"prices"},{id:3,title:"\u0434\u043e 60 000 $",value:["0","60000"],selected:!1,key:"prices"},{id:4,title:"\u0434\u043e 100 000 $",value:["0","100000"],selected:!1,key:"prices"}]},spaces:{listOpen:!1,headerTitle:"\u041f\u043b\u043e\u0449\u0430\u0434\u044c \u043a\u0432\u0430\u0440\u0442\u0438\u0440",titleHelper:"\u043f\u043b\u043e\u0449\u0430\u0434\u044c \u043a\u0432\u0430\u0440\u0442\u0438\u0440",options:[{id:0,title:"\u041b\u044e\u0431\u0430\u044f",value:["0","1000000"],selected:!0,key:"spaces"},{id:1,title:"\u043e\u0442 30 \u0434\u043e 40",value:["30","40"],selected:!1,key:"spaces"},{id:2,title:"\u043e\u0442 40 \u0434\u043e 50",value:["40","50"],selected:!1,key:"spaces"},{id:3,title:"\u043e\u0442 50 \u0434\u043e 60",value:["50","60"],selected:!1,key:"spaces"},{id:4,title:"\u043e\u0442 60 \u0434\u043e 70",value:["60","70"],selected:!1,key:"spaces"},{id:5,title:"\u043e\u0442 70 \u0434\u043e 80",value:["70","80"],selected:!1,key:"spaces"},{id:6,title:"\u043e\u0442 80 \u0434\u043e 90",value:["80","90"],selected:!1,key:"spaces"},{id:7,title:"\u043e\u0442 90 \u0434\u043e 100",value:["90","100"],selected:!1,key:"spaces"},{id:8,title:"\u0431\u043e\u043b\u044c\u0448\u0435 100",value:["100","1000000"],selected:!1,key:"spaces"}]},rooms:{listOpen:!1,headerTitle:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043e\u043c\u043d\u0430\u0442",titleHelper:"\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043e\u043c\u043d\u0430\u0442",options:[{id:0,title:"\u0412\u0441\u0435",value:[1,2,3],selected:!0,key:"rooms"},{id:1,title:"1 \u043a\u043e\u043c\u043d\u0430\u0442\u043d\u044b\u0435",value:[1],selected:!1,key:"rooms"},{id:2,title:"2 \u043a\u043e\u043c\u043d\u0430\u0442\u043d\u044b\u0435",value:[2],selected:!1,key:"rooms"},{id:3,title:"3 \u043a\u043e\u043c\u043d\u0430\u0442\u043d\u044b\u0435",value:[3],selected:!1,key:"rooms"}]}}},v=function(e,t,a){return e.filterTypes[a].options.map(function(e){e.id===t.payload.id&&(e.selected=!e.selected)}),0===t.payload.id?(e.filterTypes[a].options.map(function(e){e.id===t.payload.id?e.selected=!e.selected:e.selected=!1}),e.filterTypes[a].options[0].selected=!0):0===e.filterTypes[a].options.filter(function(e){return!0===e.selected}).length?e.filterTypes[a].options[0].selected=!0:e.filterTypes[a].options[0].selected=!1,e};var h=["\u041c\u0430\u043b\u0438\u043d\u043e\u0432\u0441\u043a\u0438\u0439","\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439","\u0421\u0443\u0432\u043e\u0440\u043e\u0432\u0441\u043a\u0438\u0439","\u041a\u0438\u0435\u0432\u0441\u043a\u0438\u0439"];var E=Object(c.combineReducers)({routing:n.routerReducer,cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;if("ADD_CARD"===t.type)return d(t.payload),[].concat(Object(r.a)(e),[t.payload]);if("FETCH_CARDS_SUCCESS"===t.type)return t.payload;if("DELETE_CARD"===t.type){p(t.payload);var a=e.map(function(e){return e._id}).indexOf(t.payload);return e.splice(a,1),Object(r.a)(e)}return e},filterCards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;return"FIND_CARD"===t.type?t.payload:e},lists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;return"FETCH_LISTS_SUCCESS"===t.type?t.payload:"TOGGLE_LIST"===t.type?(e.filterTypes[t.payload].listOpen=!e.filterTypes[t.payload].listOpen,Object(m.a)({},e)):"TOGGLE_MOBILE"===t.type?(e.filterTypes.toggleMobile=!e.filterTypes.toggleMobile,Object(m.a)({},e)):"TOGGLE_SELECTED_ITEM"===t.type?(e=v(e,t,t.payload.key),Object(m.a)({},e)):e},filterByLists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;return"FILTER_BY_LISTS"===t.type?t.payload.value:e}}),y=a(34),g=a(35),b=a(0),O=a.n(b),k=a(36),T=a.n(k),N=a(13),_=function(){var e=Object(i.a)(s.a.mark(function e(){var t,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/notes");case 2:return t=e.sent,e.next=5,t.json();case 5:if(a=e.sent,200===t.status){e.next=8;break}throw Error(a.message);case 8:return e.abrupt("return",a);case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),C=function(e){switch(e){case"01":case"02":case"03":return"1 \u043a\u0432\u0430\u0440\u0442\u0430\u043b";case"04":case"05":case"06":return"2 \u043a\u0432\u0430\u0440\u0442\u0430\u043b";case"07":case"08":case"09":return"3 \u043a\u0432\u0430\u0440\u0442\u0430\u043b";case"10":case"11":case"12":return"4 \u043a\u0432\u0430\u0440\u0442\u0430\u043b";default:return e}},j=function(e){if("undefined"!==typeof e&&null!==e&&""!==e)return C(e.split("/")[0])+" "+e.split("/")[2]+"\u0433"},M=(a(54),a(56),a(58),a(60),a(62),a(64),a(67),a(69),a(71),a(4)),w=a(5),S=a(7),x=a(6),L=a(8),z=function(e){function t(){return Object(M.a)(this,t),Object(S.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(L.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return O.a.createElement("div",{className:"row"},O.a.createElement("h2",{className:"text-black text-center section_title loop_title "},"\u0412\u0441\u0435 \u0436\u0438\u043b\u044b\u0435 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u044b ",O.a.createElement("span",{className:"bold"},"\xab\u0421\u041a \u0411\u0423\u0414\u041e\u0412\u0410\xbb")))}}]),t}(b.Component),V=a(9),I=a.n(V),H=(a(75),a(14)),D=a.n(H),G=a(23),A=a.n(G),B=a(24),R=a.n(B),F=a(25),J=a.n(F),P=function(){return O.a.createElement("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 58 58"},O.a.createElement("g",null,O.a.createElement("path",{fill:"#3d85cd",d:"M56.079,16.086L5,7.914v4.33l-3-0.24v4.083H0v34h58v-34H56.079z M7,10.259l26.802,4.288L7,12.403V10.259z M4,14.169l1,0.08\r v0.001l6.757,0.54l16.203,1.296H4V14.169z M56,48.086H2v-30h51h3V48.086z"}),O.a.createElement("path",{d:"M6.5,26.086c1.93,0,3.5-1.57,3.5-3.5s-1.57-3.5-3.5-3.5s-3.5,1.57-3.5,3.5S4.57,26.086,6.5,26.086z M6.5,21.086\r c0.827,0,1.5,0.673,1.5,1.5s-0.673,1.5-1.5,1.5S5,23.414,5,22.586S5.673,21.086,6.5,21.086z"}),O.a.createElement("path",{fill:"#3d85cd",d:"M48,22.586c0,1.93,1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5s-1.57-3.5-3.5-3.5S48,20.657,48,22.586z M53,22.586\r c0,0.827-0.673,1.5-1.5,1.5s-1.5-0.673-1.5-1.5s0.673-1.5,1.5-1.5S53,21.759,53,22.586z"}),O.a.createElement("path",{fill:"#3d85cd",d:"M6.5,40.086c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5S8.43,40.086,6.5,40.086z M6.5,45.086\r c-0.827,0-1.5-0.673-1.5-1.5s0.673-1.5,1.5-1.5s1.5,0.673,1.5,1.5S7.327,45.086,6.5,45.086z"}),O.a.createElement("path",{fill:"#3d85cd",d:"M51.5,40.086c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5S53.43,40.086,51.5,40.086z M51.5,45.086\r c-0.827,0-1.5-0.673-1.5-1.5s0.673-1.5,1.5-1.5s1.5,0.673,1.5,1.5S52.327,45.086,51.5,45.086z"}),O.a.createElement("path",{fill:"#3d85cd",d:"M31.548,46.843c0.123-0.023,0.247-0.041,0.369-0.067c0.368-0.079,0.733-0.173,1.093-0.282\r c0.166-0.05,0.328-0.108,0.491-0.164c0.212-0.073,0.423-0.149,0.632-0.232c0.18-0.071,0.359-0.144,0.535-0.222\r c0.198-0.089,0.393-0.186,0.588-0.284c0.272-0.137,0.538-0.281,0.8-0.435c0.04-0.023,0.08-0.047,0.12-0.071h10.941l-0.097-1.088\r C47.01,43.862,47,43.726,47,43.586c0-2.481,2.019-4.5,4.5-4.5c0.138,0,0.273,0.009,0.408,0.021l1.092,0.1V26.965l-1.092,0.1\r c-0.135,0.012-0.271,0.021-0.408,0.021c-2.481,0-4.5-2.019-4.5-4.5c0-0.139,0.01-0.276,0.021-0.412l0.097-1.088H36.174\r c-2.101-1.261-4.55-2-7.174-2s-5.073,0.739-7.174,2H10.879l0.1,1.091C10.991,22.313,11,22.448,11,22.586c0,2.481-2.019,4.5-4.5,4.5\r c-0.138,0-0.274-0.009-0.409-0.021L5,26.965v12.242l1.091-0.1c0.135-0.012,0.271-0.021,0.409-0.021c2.481,0,4.5,2.019,4.5,4.5\r c0,0.138-0.009,0.274-0.021,0.409l-0.1,1.091h10.923c0.159,0.096,0.319,0.189,0.481,0.278c0.05,0.028,0.102,0.053,0.153,0.08\r c0.325,0.173,0.655,0.332,0.991,0.478c0.077,0.033,0.153,0.067,0.23,0.099c0.381,0.158,0.767,0.302,1.161,0.426\r c0.01,0.003,0.02,0.007,0.03,0.01c0.407,0.126,0.821,0.231,1.239,0.319c0.098,0.021,0.198,0.037,0.297,0.055\r c0.323,0.061,0.648,0.111,0.976,0.149c0.119,0.014,0.237,0.029,0.357,0.04c0.425,0.039,0.852,0.065,1.283,0.065\r c0.422,0,0.841-0.026,1.259-0.064c0.13-0.012,0.259-0.027,0.388-0.042C30.949,46.945,31.249,46.898,31.548,46.843z M26.231,44.751\r c-0.063-0.015-0.126-0.033-0.189-0.049c-0.326-0.081-0.647-0.179-0.965-0.288c-0.147-0.051-0.293-0.104-0.438-0.16\r c-0.229-0.088-0.452-0.188-0.675-0.29c-0.109-0.051-0.217-0.103-0.325-0.157l2.652-1.306c0.574-0.283,0.931-0.857,0.931-1.497\r v-1.655l-0.604-0.26c-1.282-0.552-2.116-1.61-2.55-3.235l-0.143-0.533l-0.527-0.164c-0.316-0.098-0.528-0.38-0.528-0.701v-0.871\r c0-0.32,0.208-0.545,0.402-0.648l0.47-0.25l0.055-0.529c0.083-0.804,0.263-1.545,0.532-2.202c0.115-0.281,0.213-0.491,0.292-0.661\r c0.266-0.572,0.385-0.911,0.358-1.46c1.003,0.516,2.184,0.735,3.454,0.634c0.131-0.011,0.266-0.016,0.402-0.016\r c3.18,0,4.732,1.146,5.034,3.715l0.061,0.522l0.465,0.246c0.196,0.104,0.405,0.329,0.405,0.65v0.871\r c0,0.321-0.212,0.603-0.528,0.701l-0.527,0.164l-0.143,0.533c-0.434,1.625-1.268,2.684-2.55,3.235l-0.604,0.26v1.662\r c0,0.629,0.348,1.198,0.91,1.487l2.777,1.419c-0.037,0.018-0.073,0.036-0.111,0.053c-0.346,0.16-0.698,0.304-1.057,0.429\r c-0.043,0.015-0.085,0.032-0.128,0.047C30.715,45.157,28.401,45.253,26.231,44.751z M38.787,23.086h6.232\r c0.244,3.187,2.794,5.737,5.981,5.981v8.038c-3.187,0.244-5.737,2.794-5.981,5.981h-6.232c0.015-0.015,0.028-0.031,0.043-0.046\r c0.171-0.169,0.329-0.35,0.491-0.528c0.156-0.17,0.318-0.334,0.464-0.511c0.056-0.068,0.105-0.142,0.16-0.211\r c1.64-2.05,2.679-4.523,2.967-7.179c0.004-0.033,0.011-0.065,0.015-0.098C42.975,34.043,43,33.567,43,33.086\r s-0.025-0.957-0.072-1.428c-0.003-0.033-0.011-0.065-0.015-0.098c-0.288-2.655-1.328-5.129-2.967-7.179\r c-0.055-0.069-0.104-0.143-0.16-0.211c-0.147-0.176-0.308-0.341-0.464-0.511c-0.162-0.177-0.32-0.359-0.491-0.528\r C38.815,23.118,38.802,23.101,38.787,23.086z M35.412,22.961c0.826,0.524,1.569,1.138,2.229,1.82\r c0.09,0.093,0.174,0.191,0.261,0.287c0.215,0.237,0.418,0.483,0.613,0.735c0.101,0.132,0.203,0.264,0.299,0.4\r c0.182,0.258,0.349,0.526,0.51,0.797c0.071,0.119,0.149,0.233,0.216,0.355c0.205,0.376,0.388,0.765,0.551,1.162\r c0.062,0.15,0.112,0.305,0.168,0.457c0.102,0.28,0.197,0.562,0.279,0.85c0.047,0.165,0.089,0.331,0.128,0.498\r c0.072,0.304,0.13,0.612,0.178,0.922c0.023,0.147,0.05,0.293,0.068,0.442C40.965,32.148,41,32.614,41,33.086\r s-0.035,0.938-0.089,1.399c-0.017,0.149-0.045,0.294-0.068,0.442c-0.048,0.311-0.106,0.619-0.178,0.922\r c-0.04,0.167-0.082,0.334-0.128,0.498c-0.081,0.288-0.176,0.57-0.279,0.85c-0.056,0.153-0.106,0.308-0.168,0.457\r c-0.164,0.397-0.346,0.786-0.551,1.162c-0.067,0.122-0.145,0.236-0.216,0.355c-0.161,0.271-0.328,0.539-0.51,0.797\r c-0.096,0.136-0.198,0.268-0.299,0.4c-0.194,0.252-0.398,0.498-0.613,0.735c-0.087,0.096-0.171,0.194-0.261,0.287\r c-0.473,0.489-1.002,0.93-1.562,1.34c-0.17-0.124-0.343-0.245-0.532-0.34l-3.1-1.583v-0.182c1.399-0.786,2.388-2.056,2.949-3.787\r c0.858-0.477,1.404-1.377,1.404-2.384v-0.871c0-0.83-0.378-1.601-1.013-2.116c-0.418-2.391-2.005-5.018-6.952-5.018\r c-0.193,0-0.382,0.007-0.564,0.022c-0.732,0.058-1.802-0.003-2.724-0.624c-0.345-0.232-0.604-0.456-0.768-0.665\r c-0.33-0.419-0.88-0.564-1.373-0.361c-0.49,0.202-0.778,0.693-0.717,1.219c0.038,0.329,0.093,0.712,0.176,1.131\r c0.161,0.808,0.161,0.808-0.058,1.277c-0.089,0.192-0.2,0.43-0.33,0.747c-0.287,0.701-0.493,1.468-0.612,2.285\r c-0.625,0.515-0.996,1.281-0.996,2.103v0.871c0,1.007,0.546,1.908,1.404,2.384c0.561,1.731,1.55,3.001,2.949,3.787v0.171\r l-3.214,1.584c-0.102,0.056-0.198,0.132-0.296,0.2c-0.482-0.369-0.94-0.762-1.355-1.191c-0.09-0.093-0.174-0.191-0.261-0.287\r c-0.215-0.237-0.418-0.483-0.613-0.735c-0.101-0.132-0.203-0.264-0.299-0.4c-0.182-0.258-0.349-0.526-0.51-0.797\r c-0.071-0.119-0.149-0.233-0.216-0.355c-0.205-0.376-0.388-0.765-0.551-1.162c-0.062-0.15-0.112-0.305-0.168-0.457\r c-0.102-0.28-0.197-0.562-0.279-0.85c-0.047-0.165-0.089-0.331-0.128-0.498c-0.072-0.304-0.13-0.612-0.178-0.922\r c-0.023-0.147-0.05-0.293-0.068-0.442C17.035,34.024,17,33.559,17,33.086s0.035-0.938,0.089-1.399\r c0.017-0.149,0.045-0.294,0.068-0.442c0.048-0.311,0.106-0.619,0.178-0.922c0.04-0.167,0.082-0.334,0.128-0.498\r c0.081-0.288,0.176-0.57,0.279-0.85c0.056-0.153,0.106-0.308,0.168-0.457c0.164-0.397,0.346-0.786,0.551-1.162\r c0.067-0.122,0.145-0.236,0.216-0.355c0.161-0.271,0.328-0.539,0.51-0.797c0.096-0.136,0.198-0.268,0.299-0.4\r c0.194-0.252,0.398-0.498,0.613-0.735c0.087-0.096,0.171-0.194,0.261-0.287c0.66-0.682,1.403-1.296,2.229-1.82\r c1.857-1.181,4.053-1.875,6.412-1.875S33.555,21.78,35.412,22.961z M12.981,43.086C12.737,39.9,10.187,37.349,7,37.105v-8.038\r c3.187-0.244,5.737-2.794,5.981-5.981h6.232c-0.015,0.015-0.028,0.031-0.043,0.046c-0.171,0.169-0.329,0.35-0.491,0.528\r c-0.156,0.17-0.318,0.334-0.464,0.511c-0.056,0.068-0.105,0.142-0.16,0.211c-1.64,2.05-2.679,4.523-2.967,7.179\r c-0.004,0.033-0.011,0.065-0.015,0.098C15.025,32.129,15,32.606,15,33.086s0.025,0.957,0.072,1.428\r c0.003,0.033,0.011,0.065,0.015,0.098c0.288,2.655,1.328,5.129,2.967,7.179c0.055,0.069,0.104,0.143,0.16,0.211\r c0.147,0.176,0.308,0.341,0.464,0.511c0.162,0.177,0.32,0.359,0.491,0.528c0.015,0.015,0.028,0.031,0.043,0.046H12.981z"})))},$=function(){return O.a.createElement("svg",{version:"1.1",id:"Capa_1",viewBox:"0 0 58 58"},O.a.createElement("g",null,O.a.createElement("path",{fill:"#3d85cd",d:"M57,4h-7V1c0-0.553-0.447-1-1-1h-7c-0.553,0-1,0.447-1,1v3H19V1c0-0.553-0.447-1-1-1h-7c-0.553,0-1,0.447-1,1v3H3\r C2.447,4,2,4.447,2,5v11v43c0,0.553,0.447,1,1,1h54c0.553,0,1-0.447,1-1V16V5C58,4.447,57.553,4,57,4z M43,2h5v3v3h-5V5V2z M12,2h5\r v3v3h-5V5V2z M4,6h6v3c0,0.553,0.447,1,1,1h7c0.553,0,1-0.447,1-1V6h22v3c0,0.553,0.447,1,1,1h7c0.553,0,1-0.447,1-1V6h6v9H4V6z\r M4,58V17h52v41H4z"}),O.a.createElement("path",{fill:"#3d85cd",d:"M38,23h-7h-2h-7h-2h-9v9v2v7v2v9h9h2h7h2h7h2h9v-9v-2v-7v-2v-9h-9H38z M31,25h7v7h-7V25z M38,41h-7v-7h7V41z M22,34h7v7h-7\r V34z M22,25h7v7h-7V25z M13,25h7v7h-7V25z M13,34h7v7h-7V34z M20,50h-7v-7h7V50z M29,50h-7v-7h7V50z M38,50h-7v-7h7V50z M47,50h-7\r v-7h7V50z M47,41h-7v-7h7V41z M47,25v7h-7v-7H47z"})))},U=function(e){function t(e){var a;return Object(M.a)(this,t),(a=Object(S.a)(this,Object(x.a)(t).call(this,e))).props=e,a}return Object(L.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this;return O.a.createElement("div",{className:"dd-wrapper"},O.a.createElement("div",{className:"dd-header",onClick:function(t){return e.props.toggleList(t,e.props.filterTypes[e.props.field].options[0].key)}},O.a.createElement("div",{className:"dd-header-title"},this.props.filterTypes[this.props.field].headerTitle),this.props.filterTypes[this.props.field].listOpen?O.a.createElement(I.a,{name:"angle-up"}):O.a.createElement(I.a,{name:"angle-down"}),O.a.createElement("span",{className:"gray_icon"},O.a.createElement("img",{alt:"search",src:this.props.Icon}))),this.props.filterTypes[this.props.field].listOpen&&O.a.createElement("ul",{className:"dd-list"},this.props.filterTypes[this.props.field].options.map(function(t){return O.a.createElement("li",{className:"dd-list-item",key:t.title,onClick:function(){return e.props.selectedOption(t.id,t.key,t.value)}},t.title," ",t.selected&&O.a.createElement(I.a,{name:"check"}))})))}}]),t}(O.a.Component),W=function(e){function t(e){var a;return Object(M.a)(this,t),(a=Object(S.a)(this,Object(x.a)(t).call(this,e))).props=e,a}return Object(L.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this;return O.a.createElement("div",{className:"dd-wrapper"},O.a.createElement("strong",null," ",this.props.filterTypes[this.props.field].headerTitle),O.a.createElement("ul",{className:"dd-list"},this.props.filterTypes[this.props.field].options.map(function(t){return O.a.createElement("li",{className:"dd-list-item",key:t.title,onClick:function(){return e.props.selectedOption(t.id,t.key,t.value)}},O.a.createElement("span",{className:"selectsquare"},t.selected&&O.a.createElement(I.a,{name:"check"})),t.title)})))}}]),t}(O.a.Component),q=function(e){return"NaN"===e||!(!isNaN(e)||"undefined"!==typeof e)},Y=function(e){return q(e)?e:Number(e.replace(",","."))},K=Object(N.b)(function(e,t){return{cards:e.cards.filter(function(t){return"\u041e\u0431\u044a\u0435\u043a\u0442"===t.note_type&&t.title.toLowerCase().includes(e.filterCards.toLowerCase())&&function(e,t){var a;return a=[],e.lists.filterTypes.districts.options.forEach(function(e){!1!==e.selected&&("string"===typeof e.value?a.push(e.value):a=e.value)}),Boolean(a.includes(t.block))}(e,t)&&function(e,t){var a=[];return e.lists.filterTypes.prices.options.map(function(e){a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return!1!==t.selected&&("string"===typeof t.value?e.push(t.value):e=t.value),e}(a,e)}),Number(JSON.parse(t.prices)[1].text)<a[1]}(e,t)&&function(e,t){var a=[];e.lists.filterTypes.spaces.options.map(function(e){!1!==e.selected&&a.push(e.value)});var c=!1,n=JSON.parse(t.prices),r=[Y(n[0].text),Y(n[2].text),Y(n[4].text)];return 1===a.length?(a[0][0]<r[0]&&r[0]<a[0][1]&&(c=!0),a[0][0]<r[1]&&r[1]<a[0][1]&&(c=!0),a[0][0]<r[2]&&r[2]<a[0][1]&&(c=!0),(q(r[0])||q(r[1])||q(r[2]))&&(c=!0),c||console.log(a[0][0],"<",r[0],"&&",r[0],"<",a[1])):a.map(function(e){e[0]<r[0]&&r[0]<e[1]&&(c=!0),e[0]<r[1]&&r[1]<e[1]&&(c=!0),e[0]<r[2]&&r[2]<e[1]&&(c=!0),(q(r[0])||q(r[1])||q(r[2]))&&(c=!0)}),c}(e,t)&&function(e,t){var a=[],c={},n=JSON.parse(t.prices);e.lists.filterTypes.rooms.options.map(function(e){!1!==e.selected&&(e.value.length<2?a.push(e.value):a=e.value)}),isNaN(Y(n[0].text))||isNaN(Y(n[1].text))?c[0]=!1:c[0]=!0,isNaN(Y(n[2].text))||isNaN(Y(n[3].text))?c[1]=!1:c[1]=!0,isNaN(Y(n[4].text))||isNaN(Y(n[5].text))?c[2]=!1:c[2]=!0;var r=!1;for(var l in a)!0===c[a[l]-1]&&(r=!0);return r||console.log(t.title,c),r}(e,t)}),filterTypes:e.lists.filterTypes,ownProps:t}},function(e){return{onFindCard:function(t){e({type:"FIND_CARD",payload:t})},onGetCards:function(){e(function(e){_().then(function(e){return e}).then(function(t){t.filter(function(e){return"\u041e\u0431\u044a\u0435\u043a\u0442"===e.note_type}),e({type:"FETCH_CARDS_SUCCESS",payload:t})})})},onToggleList:function(t){e({type:"TOGGLE_LIST",payload:t})},onToggleMobile:function(t){e({type:"TOGGLE_MOBILE",payload:t})},onSelectedDistrict:function(t,a,c){e({type:"TOGGLE_SELECTED_ITEM",payload:{id:t,key:a}}),e({type:"FILTER_BY_LISTS",payload:{id:t,value:c}})},onSelectedPrice:function(t,a,c){e({type:"TOGGLE_SELECTED_ITEM",payload:{id:t,key:a}})}}})(function(e){var t=e.cards,a=e.filterTypes,c=e.onFindCard,n=e.onGetCards,r=e.onToggleMobile,l=e.onSelectedDistrict,s=e.onSelectedPrice,i=e.onToggleList,o=(e.ownProps,""),d=function(){c(o.value)},p=function(e,t){i(t)},u=function(e,t){r(t)},m=function(e,t,a){l(e,t,a)},f=function(e,t,a){s(e,t,a)};return O.a.createElement("div",{className:"Cards"},O.a.createElement("div",{className:"fields"},O.a.createElement("div",{className:"row blueb"},O.a.createElement("div",{className:"container"},O.a.createElement("div",{className:"col-lg-12 col-xs-12 flex cardsearch"},O.a.createElement("input",{type:"text",onChange:d,ref:function(e){o=e}}),O.a.createElement("button",{onClick:d}," ",O.a.createElement("img",{alt:"search",src:"/brief/magnifying-glass.svg"})," ")),O.a.createElement("div",{className:"dropdown_menu onlydesk"},O.a.createElement(U,{filterTypes:a,Icon:D.a,toggleList:p,selectedOption:m,field:"districts"}),O.a.createElement(U,{filterTypes:a,Icon:A.a,toggleList:p,selectedOption:f,field:"prices"}),O.a.createElement(U,{filterTypes:a,Icon:R.a,toggleList:p,selectedOption:m,field:"spaces"}),O.a.createElement(U,{filterTypes:a,Icon:J.a,toggleList:p,selectedOption:m,field:"rooms"}),O.a.createElement("button",{className:"desktop search"},O.a.createElement("span",null,"\u041f\u043e\u0438\u0441\u043a"),O.a.createElement("img",{alt:"search",src:"/brief/magnifying-glass.svg"}))),O.a.createElement("div",{className:"dropdown_proto"})))),O.a.createElement(z,null),O.a.createElement("div",{className:"container"},O.a.createElement("div",{className:"mobile_filters onlymob"},O.a.createElement("button",{className:a.toggleMobile?"toggled btn":"untoggled btn",onClick:function(e){return u(0,a.mobileOpen)}},"\u0424\u0438\u043b\u044c\u0442\u0440\u044b",O.a.createElement(I.a,{name:"filter"}))),O.a.createElement("div",{className:a.toggleMobile?"dropdown_menu onlymob opened":"dropdown_menu onlymob closed"},O.a.createElement("button",{className:"close",onClick:function(e){return u(0,a.mobileOpen)}},O.a.createElement(I.a,{name:"times"})),O.a.createElement("div",{className:"dropdown_bearer"},O.a.createElement("div",{className:"col-lg-12 col-xs-12 flex cardsearch"},O.a.createElement("input",{type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a",onChange:d,ref:function(e){o=e}}),O.a.createElement("button",{onClick:d},O.a.createElement("img",{alt:"search",src:"/brief/magnifying-glass.svg"})," ")),O.a.createElement("div",{className:"mobile_filter"},"  ",O.a.createElement(W,{filterTypes:a,Icon:D.a,toggleList:p,selectedOption:m,field:"districts"}),"    "),O.a.createElement("div",{className:"mobile_filter"},"  ",O.a.createElement(W,{filterTypes:a,Icon:A.a,toggleList:p,selectedOption:f,field:"prices"}),"    "),O.a.createElement("div",{className:"mobile_filter"},"  ",O.a.createElement(W,{filterTypes:a,Icon:R.a,toggleList:p,selectedOption:m,field:"spaces"}),"    "),O.a.createElement("div",{className:"mobile_filter"},"  ",O.a.createElement(W,{filterTypes:a,Icon:J.a,toggleList:p,selectedOption:m,field:"rooms"}),"    "),O.a.createElement("button",{className:"search"},"\u041f\u043e\u0438\u0441\u043a"))),O.a.createElement("div",{className:"row"},t.map(function(e,t){return O.a.createElement("div",{key:t,className:"col-md-3 col-sm-6"},O.a.createElement("div",null,O.a.createElement("div",{className:"el_card"},O.a.createElement("div",{className:"image_c"},O.a.createElement("a",{href:"/doma/"+e.page_link,style:(a=e.home_background,{backgroundSize:"cover",display:"block",height:"100%",backgroundImage:"url(/uploads/"+a+")"})})),O.a.createElement("div",{className:"panel bordered"},O.a.createElement("div",{className:"installments_icon",id:"installments_icon"},O.a.createElement("img",{alt:"search",src:"/brief/icons8-money-52.png"})),O.a.createElement("a",{href:"/doma/zhknagagarinskomplato"},O.a.createElement("h4",null,e.title),O.a.createElement("p",null," ",e.address),O.a.createElement("span",null,O.a.createElement("span",{className:"svg_price"},O.a.createElement(P,null)),O.a.createElement("span",{className:"bold"},"\u043e\u0442 ",e.prices_start_at_per_meter,"  \u0443.\u0435./\u043c",O.a.createElement("sup",null,"2"))),O.a.createElement("span",null,O.a.createElement("span",{className:"svg_calendar"},O.a.createElement($,null)," "),j(e.house_deploy_date)),"\u0423\u0437\u043d\u0430\u0442\u044c \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 ",O.a.createElement("i",{className:"fa fa-arrow-right"}))))));var a}))),O.a.createElement("div",{style:{display:"none"}},O.a.createElement("button",{id:"getcard",onClick:n},"Get cards")))}),Q=a(82),X=function(e){function t(){return Object(M.a)(this,t),Object(S.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(L.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return O.a.createElement("div",null,O.a.createElement(Q.a,{to:"/"},"Cards"),O.a.createElement(Q.a,{to:"/About"},"About"))}}]),t}(b.Component),Z=function(e){function t(){return Object(M.a)(this,t),Object(S.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(L.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return O.a.createElement("div",null,O.a.createElement(X,null),O.a.createElement("div",null," Welcome to page ./About "))}}]),t}(b.Component),ee=a(83),te=a(84),ae=a(37),ce=a.n(ae),ne=Object(N.b)(function(e,t){return{card:e.cards.find(function(e){return Number(e.id)===Number(t.match.params.id)})}})(function(e){var t=e.card;return O.a.createElement("div",null,O.a.createElement(X,null),t.task)}),re=Object(c.createStore)(E,Object(y.composeWithDevTools)(Object(c.applyMiddleware)(g.a)));Object(n.syncHistoryWithStore)(ce()(),re);re.subscribe(function(){}),T.a.render(O.a.createElement(N.a,{store:re},O.a.createElement(ee.a,null,O.a.createElement("div",null,O.a.createElement(te.a,{exact:!0,path:"/",component:K}),O.a.createElement(te.a,{path:"/about",component:Z}),O.a.createElement(te.a,{path:"/cards/:id",component:ne})))),document.getElementById("budova_estate")),document.getElementById("getcard").click(),setTimeout(function(){document.querySelectorAll(".Cards")[0].classList+=" loaded"},1500)}},[[41,2,1]]]);
//# sourceMappingURL=main.2d96caca.chunk.js.map