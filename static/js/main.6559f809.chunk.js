(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{180:function(e,t,a){e.exports=a(362)},185:function(e,t,a){},187:function(e,t,a){},362:function(e,t,a){"use strict";a.r(t);var s=a(1),i=a.n(s),l=a(175),n=a.n(l),c=a(66),r=a(67),m=a(72),o=a(68),d=a(73),h=(a(185),a(187),a(364)),u=function(e){var t=e.name,a=e.data1,s=e.data2,l=e.sub;return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-container-pie"},i.a.createElement("div",{className:"card-top"},t),i.a.createElement("div",{className:"card-context-pie"},i.a.createElement(h.a,{colorScale:["#b27b00","#6e4c00"],data:[{x:"".concat(a,"%"),y:a},{x:"".concat(s,"%"),y:s}],padAngle:3,innerRadius:100,labelRadius:110,style:{labels:{fill:"black",fontSize:20,fontWeight:"bold",fontFamily:"Titillium Web, sans-serif"}}})),i.a.createElement("div",{className:"card-sub"},l," ")))},v=function(e){var t=e.name,a=e.data,s=e.sub;return i.a.createElement("div",null,i.a.createElement("div",{className:"card-container"},i.a.createElement("div",{className:"card-top"}," ",t),i.a.createElement("div",{className:"card-context"},a),i.a.createElement("div",{className:"card-sub"},s," ")))},f=a(179),E=a.n(f),g=function(e,t){return!(arguments.length>2&&void 0!==arguments[2])||arguments[2]?Math.floor(e/t*100):(e/t).toString().slice(0,6)},b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return e.toString().slice(0,t)},p=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={username:"MenahemCohen",level:null,lifetime:[],hits:0,misses:0,hs:0,wins:0,losses:0,suicides:0,longestKillstreak:0,prestige:0,damagePerMinute:0,damagePerGame:0,headshotPercentage:0,ekiaPerGame:0,ekia:0,deaths:0,kills:0,assists:0},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;(function(e){var t="https://my.callofduty.com/api/papi-client/crm/cod/v2/title/bo4/platform/xbl/gamer/".concat(e,"/profile/");return fetch(t,{headers:{"Access-Control-Allow-Origin":"*"}}).then(function(e){return e.json()})})(this.state.username).then(function(e){return e.data}).then(function(t){var a=t.username,s=t.mp;console.log(s),e.setState({username:a,level:s.level,hits:s.lifetime.all.hits,misses:s.lifetime.all.misses,hs:s.lifetime.all.headshots,headshotPercentage:s.lifetime.all.headshotPercentage,wins:s.lifetime.all.wins,losses:s.lifetime.all.losses,suicides:s.lifetime.all.suicides,longestKillstreak:s.lifetime.all.longestKillstreak,prestige:s.prestige,damagePerMinute:s.lifetime.all.damagePerMinute,damagePerGame:s.lifetime.all.damagePerGame,ekiaPerGame:s.lifetime.all.ekiaPerGame,ekia:s.lifetime.all.ekia,deaths:s.lifetime.all.deaths,kills:s.lifetime.all.kills,assists:s.lifetime.all.assists})})}},{key:"render",value:function(){var e=this.state.misses+this.state.hits,t=this.state.wins+this.state.losses;return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"top"},i.a.createElement("div",{className:"left"},this.state.username),i.a.createElement("div",{className:"right"},i.a.createElement("div",{className:"right-sub"},"Level: ",this.state.level,i.a.createElement(E.a,{completed:g(this.state.level,55),colors:[30,70,95]})),i.a.createElement("div",{className:"right-sub"},"Prestige: ",this.state.prestige))),i.a.createElement("div",{className:"middle"},i.a.createElement("div",{className:"middle-left"},i.a.createElement("div",null,i.a.createElement(u,{name:"Win/Lose (".concat(t,")"),data1:g(this.state.wins,t),data2:g(this.state.losses,t),sub:"Wins: ".concat(this.state.wins," | Losses: ").concat(this.state.losses)})),i.a.createElement("div",null,i.a.createElement(u,{name:"Shots (".concat(e,")"),data1:g(this.state.hits,e),data2:g(this.state.misses,e),sub:"Hits: ".concat(this.state.hits," | Miss: ").concat(this.state.misses)}))),i.a.createElement("div",{className:"middle-right"},i.a.createElement("div",null,i.a.createElement(v,{name:"Headshots",data:"".concat(g(this.state.hs,this.state.hits,!1),"%"),sub:"".concat(this.state.hs," Headshots in ").concat(this.state.hits," Hits")})),i.a.createElement("div",null,i.a.createElement(v,{name:"Suicides",data:this.state.suicides,sub:"You commit a suicides ".concat(this.state.suicides," times")})),i.a.createElement("div",null,i.a.createElement(v,{name:"Longest Kill streak",data:this.state.longestKillstreak,sub:this.state.longestKillstreak>10?"Nice!!!":"Try to work on yourself dude"})),i.a.createElement("div",null,i.a.createElement(v,{name:"Damage Per Minute",data:b(this.state.damagePerMinute,5),sub:"".concat((this.state.damagePerMinute/100).toString().split(".")[0]," +/- People in minute")})),i.a.createElement("div",null,i.a.createElement(v,{name:"Damage Per Game",data:b(this.state.damagePerGame),sub:"".concat((this.state.damagePerGame/100).toString().split(".")[0]," +/- People in game")})),i.a.createElement("div",null,i.a.createElement(v,{name:"Avg. EKIA Per Game",data:b(this.state.ekiaPerGame),sub:this.state.ekiaPerGame>10?"Nice!!!!":"Need to practise"})),i.a.createElement("div",null,i.a.createElement(v,{name:"K/D Ratio",data:b(this.state.kills/this.state.deaths),sub:"Kills: ".concat(this.state.kills,"\n                                  | Deaths: ").concat(this.state.deaths)})),i.a.createElement(v,{name:"EKIA (Kills + Assists) Ratio",data:b((this.state.kills+this.state.assists)/this.state.deaths),sub:"EKIA: ".concat(this.state.assists+this.state.kills," | Death:").concat(this.state.deaths)}),i.a.createElement(v,{name:"Title",data:"data"}))))}}]),t}(i.a.Component),k=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(p,null))}}]),t}(i.a.Component);n.a.render(i.a.createElement(k,null),document.getElementById("root"))}},[[180,2,1]]]);
//# sourceMappingURL=main.6559f809.chunk.js.map