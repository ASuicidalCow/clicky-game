(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Goku","image":"https://res.cloudinary.com/diwo1i4i1/image/upload/c_thumb,w_320/v1594436959/dragon-ball-z-characters-8_kgaleq.jpg","clicked":false},{"id":2,"name":"Vegeta","image":"https://res.cloudinary.com/diwo1i4i1/image/upload/c_thumb,w_320/v1594436959/dragon-ball-z-characters-7_hdu9tr.jpg","clicked":false},{"id":3,"name":"Piccolo","image":"https://res.cloudinary.com/diwo1i4i1/image/upload/c_scale,w_320/v1594436958/4ea9f83553e02cd07966f474ce2984aa_ucsv9w.jpg","clicked":false},{"id":4,"name":"Gohan","image":"https://res.cloudinary.com/diwo1i4i1/image/upload/c_scale,w_320/v1594436958/dragon-ball-z-characters-2_tawjlp.jpg","clicked":false},{"id":5,"name":"Bulma","image":"https://res.cloudinary.com/diwo1i4i1/image/upload/c_scale,w_320/v1594436959/main-qimg-620957d1ffb1672bc999d0266a8e6a30_vqruui.jpg","clicked":false},{"id":6,"name":"Android-18","image":"https://res.cloudinary.com/diwo1i4i1/image/upload/c_scale,w_320/v1594436959/images_rhupz6.jpg","clicked":false},{"id":7,"name":"Frieza","image":"https://res.cloudinary.com/diwo1i4i1/image/upload/c_scale,w_320/v1594436959/dragon-ball-z-characters-6_jyobck.jpg","clicked":false},{"id":8,"name":"Majin Buu","image":"https://res.cloudinary.com/diwo1i4i1/image/upload/c_scale,w_320/v1594436958/dragon-ball-z-characters-1_hbkoya.jpg","clicked":false},{"id":9,"name":"Kid Buu","image":"https://res.cloudinary.com/diwo1i4i1/image/upload/c_scale,w_320/v1594436958/dragon-ball-z-characters-3_lrqnoq.jpg","clicked":false},{"id":10,"name":"Beerus","image":"https://res.cloudinary.com/diwo1i4i1/image/upload/c_scale,w_320/v1594436959/dragon-ball-z-characters-9_fktxx4.jpg","clicked":false},{"id":11,"name":"Whis","image":"https://res.cloudinary.com/diwo1i4i1/image/upload/c_scale,w_320/v1594436959/dragon-ball-z-characters-10_gyiu8g.jpg","clicked":false},{"id":12,"name":"Panemba","image":"https://res.cloudinary.com/diwo1i4i1/image/upload/c_scale,w_320/v1594436958/dragon-ball-z-characters-5_ad4uol.jpg","clicked":false}]')},,,function(e,a,t){e.exports=t(15)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),i=t.n(c),n=t(2),o=t.n(n),r=(t(13),t(3)),s=t(4),l=t(7),m=t(6);t(14);var d=function(e){var a=e.clickHandler,t=e.id,c=e.image,n=e.name;return i.a.createElement("div",{className:"card-holder"},i.a.createElement("img",{src:c,alt:n,className:"card-select grow img-thumbnail m-2 pointer",onClick:function(){return a(t)}}))};var u=function(){return i.a.createElement("div",{className:" colors position-relative footer footer-100 footer-mgn navbar p-0"},i.a.createElement("span",{className:"text-muted"}))};var g=function(){return i.a.createElement("div",{className:"align-items-center bg-header jumbotron header-hgt header-pad head-mar-top nav-shadow neon text-center yx-auto text-center"},i.a.createElement("h1",{className:"flicker-1 header-font"},"Click an image to earn point but don't click more than once!"))};var h=function(e){var a=e.message,t=e.score,c=e.topScore;return i.a.createElement("nav",{className:"bg-nav fixed-top navbar nav-height nav-shadow p-0 tp-text"},i.a.createElement("ul",{className:"row center list-inline m-0 nav-fill nav-height nav-width"},i.a.createElement("li",{className:"col list-inline-item my-auto nav-calc-font p-0 m-0 text-center"},i.a.createElement("a",{className:"nav-calc-font navbar-brand p-0 m-0 title-line-hgt",href:"/"},"Dragon Ball Z Memory Game")),i.a.createElement("li",{id:"animate-this",className:"col list-inline-item my-auto nav-calc-font m-0 p-0 text-center"},a),i.a.createElement("li",{className:"col list-inline-item my-auto nav-calc-font m-0 p-0 score-li-width text-center"},"SCORE: ",t," | TOP SCORE: ",c)))},p=t(5),v=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(r.a)(this,t),(e=a.call(this)).removeAnimation=function(){var a=document.getElementById("animate-this");e.state.isGuessCorrect&&a.classList.remove("jello-vertical"),e.state.isGuessCorrect||a.classList.remove("shake-horizontal")},e.addAnimation=function(e){var a=document.getElementById("animate-this");e&&a.classList.add("jello-vertical"),e||a.classList.add("shake-horizontal")},e.toggleAnimation=function(a){a&&(e.addAnimation(!0),setTimeout(e.removeAnimation,500)),a||(e.addAnimation(!1),setTimeout(e.removeAnimation,500))},e.handleSaveClick=function(a){var t=e.state.tiles,c=t.filter((function(e){return e.id===a}));c[0].clicked?(e.handleIncorrectClick(),e.toggleAnimation(!1)):(c[0].clicked=!0,e.handleCorrectClick(),e.toggleAnimation(!0),e.randomizeCharacters(t),e.setState({tilez:t}))},e.randomizeCharacters=function(e){e.sort((function(e,a){return.5-Math.random()}))},e.handleCorrectClick=function(){e.setState({isGuessCorrect:!0}),e.state.score+1>e.state.topScore&&e.setState({topScore:e.state.topScore+1}),e.state.score+1>=e.state.maxScore?e.setState({score:e.state.score+1,message:" You WIN! ",messageClass:"correct"}):e.setState({score:e.state.score=1,message:"You Guessed Correctly!",messageClass:"correct"})},e.handleIncorrectClick=function(){e.setState({message:"Incorrect, Play Again?",isGuessCorrect:!1}),e.resetGame()},e.resetGame=function(a){for(var t=e.state.tiles,c=0;c<t.length;c++)t[c].clicked=!1;e.setState({score:0})},e.state={isGuessCorrect:!0,tiles:p,score:0,maxScore:10,topScore:0,message:"Click an Image to begin."},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.message,c=a.score,n=a.tiles,o=a.topScore;return i.a.createElement("div",{className:"fluid-container lodge h-100vh"},i.a.createElement(h,{classname:"row",score:c,topScore:o,message:t}),i.a.createElement(g,{className:"bg-header row"}),i.a.createElement("div",{className:"d-flex justify-content-center main-content mx-auto padding-main flex-wrap row"},n.map((function(a){var t=a.id,c=a.name,n=a.image,o=a.clicked;return i.a.createElement(d,{key:t,id:t,name:c,image:n,clicked:o,clickHandler:e.handleSaveClick})}))),i.a.createElement(u,{className:"footer-mgn row"}))}}]),t}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.433f2756.chunk.js.map