(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{220:function(e,t,a){},222:function(e,t,a){},224:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(63),s=a.n(i),c=a(4),o=a(6),l=a(8),u=a(7),m=a(9),p=(a(70),a(72),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return"".concat(e.toString().split(".")[0],".").concat(e.toString().split(".")[1].slice(0,t))}),d=function(e){return["","https://image.ibb.co/ideMDA/L1.png","https://image.ibb.co/jFtgDA/L2.png","https://image.ibb.co/idRe0q/L3.png","https://image.ibb.co/jsoRfq/L4.png","https://image.ibb.co/cwviRV/L5.png","https://image.ibb.co/iRMe0q/L6.png","https://image.ibb.co/i9bq6V/L7.png","https://image.ibb.co/cPXK0q/L8.png","https://image.ibb.co/mZvHmV/L9.png","https://image.ibb.co/dzGe0q/L10.png"][e]},h=function(){return r.a.createElement("img",{className:"logo",src:"https://image.ibb.co/inYpYA/07ef4a2a-37ba-4f4d-8be6-1be1b61bc102.png",alt:"logo"})},f=function(e){return e.split("")[0].toUpperCase()+e.split("").slice(1).map(function(e){return e===e.toUpperCase()?" ".concat(e):e}).join("")},b=function(e){return r.a.createElement("div",{className:"small-card"},r.a.createElement("div",null,r.a.createElement("div",{className:"mall-card-top"},f(e.name)),r.a.createElement("div",{className:"small-card-context"},e.children),r.a.createElement("div",{className:"small-card-sub"},e.text," ")))},g="https://my.callofduty.com/api/papi-client/crm/cod/v2/title/bo4/platform/xbl/gamer/",v=function(e){return e.json()},y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"profile",a=t.match("matches")?"".concat(g).concat(e,"/").concat(t,"/mp/start/0/end/0/details"):"".concat(g).concat(e,"/").concat(t);return Promise.resolve(fetch(a).then(v))},E=(a(74),function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("i",{id:"loading",className:"fas fa-spinner"}),r.a.createElement("div",null,"Loading...")))}),k=(a(76),a(40)),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).refreshData=function(){a.setState({name:a.props.name,data:a.props.data,dates:a.props.dates,type:a.props.type})},a.normalizeDate=function(e){return e.map(function(e){return"".concat(new Date(1e3*e).toLocaleDateString("en-US")).concat(new Date(1e3*e).getHours(),":").concat(new Date(1e3*e).getMinutes())})},a.createDataForGraph=function(e,t,n){for(var r=a.normalizeDate(n),i=[],s=a.state.data?a.state.data.reduce(function(e,t){return e+t}):0,c=0;c<20;c++)i.push(s/20);return{labels:r.reverse(),datasets:[{type:"line",fill:!1,label:"Average",backgroundColor:"rgba(255, 255, 255,0.5)",borderColor:"rgba(255, 255, 255,0.5)",data:i,steppedLine:!1,lineTension:.6,pointRadius:0,pointHitRadius:10,borderDash:[3]},{type:"bar",fill:!1,borderDash:[],label:e.toUpperCase(),backgroundColor:"rgba(255,140,0)",borderColor:"rgb(255,140,0)",data:t,lineTension:.1,pointRadius:1,pointHitRadius:10}]}},a.getBar=function(e,t,n){var i=a.createDataForGraph(e,t,n);return r.a.createElement(k.a,{height:400,width:300,data:i,redraw:!0})},a.getPie=function(e,t,n){var i=a.createDataForPie(e,t,n);return r.a.createElement(k.b,{height:250,width:200,data:i,redraw:!0,options:{maintainAspectRatio:!1}})},a.createDataForPie=function(e,t,a){return{labels:[t.action,a.action],datasets:[{data:[t.result,a.result],backgroundColor:["#b17a1a","#6d4c0c"],hoverBackgroundColor:["#7e5812","#4a310d"]}]}},a.state={name:"",data:[],dates:[],type:"",mySize:301},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.refreshData()}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.name,n=e.dates;return r.a.createElement("div",null,this.state.type?this.state.type.match("line")?this.getBar(a,t,n):this.getPie(a,t,n):r.a.createElement(E,null))}}]),t}(r.a.Component),D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).refreshData=function(){var e=a.props.playerName;y(e,"matches").then(function(e){var t=e.data;a.setState({data:{killList:{data:t.matches.map(function(e){return e.playerStats.kills}),name:"kill"},ekiaList:{data:t.matches.map(function(e){return e.playerStats.ekia}),name:"ekia"},deathList:{data:t.matches.map(function(e){return e.playerStats.deaths}),name:"death"},assistsList:{data:t.matches.map(function(e){return e.playerStats.assists}),name:"assists"},ekiadRatioList:{data:t.matches.map(function(e){return e.playerStats.ekiadRatio}),name:"ekiadRatio"}},times:{data:t.matches.map(function(e){return e.utcStartSeconds})}})})},a.state={username:"",data:[],times:[],type:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillUpdate",value:function(e){this.props.data!==e.data&&this.refreshData()}},{key:"componentDidMount",value:function(){this.refreshData()}},{key:"render",value:function(){var e=this,t=Object.keys(this.state.data).map(function(t){return e.state.data[t]}),a=Object.keys(this.state.times).map(function(t){return e.state.times[t]})[0];return r.a.createElement("div",{className:"graph-container"},t.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(j,{name:e.name,dates:a,data:e.data,type:"line"}))}))}}]),t}(r.a.Component),O=(a(220),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).getData=function(e){y(e,"profile").then(function(e){var t=e.data;a.setState({allData:Object.keys(t.mp.lifetime.all).map(function(e){return Object.assign({action:e,result:t.mp.lifetime.all[e]})})})})},a.pieFactory=function(e,t){var n=a.state.allData;console.log(n);var i=a.hardFilter(n,e),s=a.hardFilter(n,t);return r.a.createElement("div",{className:"middel"},r.a.createElement("div",{className:"card-wrapper"},r.a.createElement(b,{name:"".concat(i.action.toUpperCase(),"/").concat(s.action.toUpperCase()),text:"Ratio ".concat(100*p(i.result/s.result),"%")},r.a.createElement(j,{name:"test",data:i,dates:s,type:"pie",size:500}))))},a.cardFactory=function(e){var t=a.state.allData,n=a.hardFilter(t,e);return r.a.createElement(b,{name:n.action},n.result)},a.lifeTime=function(){return r.a.createElement("div",{className:"cards-wrapper"},[{obj1:"ekia",obj2:"deaths"},{obj1:"wins",obj2:"losses"},{obj1:"kills",obj2:"deaths"},{obj1:"statsHeadshot",obj2:"kills"}].map(function(e,t){return r.a.createElement("div",{key:t},a.pieFactory(e.obj1,e.obj2))}),["scoreCore","scorePerGame","scorePerMinute","kills","damagePerGame","damagePerMinute","healsPerGame"].map(function(e,t){return r.a.createElement("div",{key:t},a.cardFactory(e))}))},a.hardFilter=function(e,t){return e.filter(function(e){return e.action.split(" ").join("")===t})[0]},console.log("this is props",e),a.state={allData:null},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getData(this.props.name)}},{key:"render",value:function(){var e=null!==this.state.allData?this.state.allData:[];return r.a.createElement("div",null,e.length>0?this.lifeTime():r.a.createElement(E,null))}}]),t}(r.a.Component)),S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).getData=function(e){y(e,"profile").then(function(e){var t=e.data,n=t.username,r=t.mp,i=r.level,s=r.prestige,c=t.mp.lifetime.all;a.setState({allData:Object.keys(c).map(function(e){return Object.assign({ction:e,result:c[e]})}),playerStats:{username:n,level:i,prestige:s},page:"Team Deathmatch"})})},a.Top=function(){var e={backgroundImage:"url(".concat(d(a.state.playerStats.prestige),")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return r.a.createElement("div",{className:"top",style:e},r.a.createElement("div",{className:"left"},r.a.createElement("div",null,a.state.playerStats.username)),r.a.createElement("div",{className:"right"},r.a.createElement("div",{className:"right-sub"},"Level: ",a.state.playerStats.level),r.a.createElement("div",{className:"right-sub"},"Prestige: ",a.state.playerStats.prestige)))},a.hardFilter=function(e,t){return e.filter(function(e){return e.action.split(" ").join("")===t})[0]},a.pagesLabels=function(){var e={marginLeft:"1px",border:"#fc6621 solid thin",borderRadius:"10px 10px 0 0",borderBottom:"#fc6621 solid thin",color:"#553400",backgroundColor:"#1b1b1b",shdowBox:"10px 10px 10px white",padding:"10px"},t={backgroundColor:"#101010",padding:"10px",marginLeft:"1px",border:"#fc6621 solid thin",borderRadius:"10px 10px 0 0",borderBottom:"none"};return r.a.createElement("div",{className:"page-labels"},r.a.createElement("div",{style:"Team Deathmatch"===a.state.page?t:e,onClick:function(){return a.setState({page:"Team Deathmatch"})}},"Life time"),r.a.createElement("div",{style:"Team Deathmatch"!==a.state.page?t:e,onClick:function(){return a.setState({page:"BlackOut"})}},"Weekly"))},a.pages=function(e){switch(e){case"BlackOut":return r.a.createElement(D,{type:"mp",playerName:a.state.playerStats.username});default:return r.a.createElement(O,{name:a.state.playerStats.username})}},a.state={allData:null,playerStats:{username:"",level:null,prestige:0},page:"",array:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getData(this.props.name)}},{key:"render",value:function(){var e=null!==this.state.allData?this.state.allData:[];return r.a.createElement("div",{className:"container"},r.a.createElement("div",null,this.Top(),e.length>0?r.a.createElement("div",null,this.pagesLabels(),r.a.createElement("div",{className:"pagination-border"},this.pages(this.state.page))):r.a.createElement(E,null)))}}]),t}(r.a.Component),L=(a(222),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).changeList=function(e){e.show=!e.show,a.setState({user:e})},a.getAllUsers=function(){return a.state.list.map(function(e){return{data:e.data,color:e.color}})},a.validateName=function(e){y(e).then(function(e){var t=e.status;return a.setState({isAutorise:"success"===t})})},a.state={query:"FormingSpoon801",list:[],com:!1,isAutorise:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({list:N()})}},{key:"render",value:function(){var e=this,t=this.getAllUsers(),a=this.state.isAutorise;return r.a.createElement("div",null,r.a.createElement(h,null),a?r.a.createElement("div",{className:"App"},this.state.list.map(function(a,n){return t.length>0?r.a.createElement("div",{key:n,className:"statistic-container"},r.a.createElement(S,{name:e.state.query,color:"rgb(".concat(a.color,")")})):r.a.createElement("div",{key:n},r.a.createElement(E,null))})):r.a.createElement("div",null,r.a.createElement("div",{className:"login-step"},"Enter User name ",r.a.createElement("input",{width:300,onChange:function(t){return e.setState({query:t.target.value})}}),r.a.createElement("button",{onClick:function(){return e.validateName(e.state.query)}},"check"))))}}]),t}(r.a.Component)),N=function(){return[{show:!0,name:"FormingSpoon801",color:"0, 255, 0",data:[]}]};s.a.render(r.a.createElement(L,null),document.getElementById("root"))},65:function(e,t,a){e.exports=a(224)},70:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){},76:function(e,t,a){}},[[65,2,1]]]);
//# sourceMappingURL=main.2337220e.chunk.js.map