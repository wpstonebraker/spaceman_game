!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n.r(t);var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.height=200,this.width=100,this.game=t,this.energy}var t,n,r;return t=e,(n=[{key:"check",value:function(){return!(this.game.player.energy-this.cost<0&&(document.getElementById("card-description").innerText="Not enough energy",1))}}])&&i(t.prototype,n),r&&i(t,r),e}();function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o=function(){function e(t,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.image=document.getElementById("img_shields"),this.position={x:t,y:n},this.width=256,this.height=256,this.loopIndex=0,this.frames=0,this.game=i}var t,n,i;return t=e,(n=[{key:"drawFrame",value:function(e,t,n){n.drawImage(this.image,e*this.width,t*this.height,this.width,this.height,this.game.player.position.x-5,this.game.player.position.y+10,150,150)}},{key:"draw",value:function(e){this.frames>1?(this.loopIndex+=1,this.frames=0,this.drawFrame(this.loopIndex,0,e)):(this.drawFrame(this.loopIndex,0,e),this.frames+=1),this.loopIndex>11&&this.game.elements.pop()}},{key:"update",value:function(e){}}])&&s(t.prototype,n),i&&s(t,i),e}();function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var c=function(){function e(t,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.image=document.getElementById("img_explosion"),this.position={x:t,y:n},this.width=96,this.height=96,this.loop=[0,1,2,3,4,5,6,7,8,9,10,11],this.loopIndex=0,this.frames=0,this.game=i}var t,n,i;return t=e,(n=[{key:"drawFrame",value:function(e,t,n){n.drawImage(this.image,e*this.width,t*this.height,this.width,this.height,this.position.x-50,this.position.y-50,100,100)}},{key:"draw",value:function(e){this.frames>1?(this.loopIndex++,this.frames=0,this.drawFrame(this.loopIndex,0,e)):(this.drawFrame(this.loopIndex,0,e),this.frames++),this.loopIndex>11&&this.game.elements.pop()}},{key:"update",value:function(e){}}])&&a(t.prototype,n),i&&a(t,i),e}();function h(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var u=function(){function e(t,n,i,r,s,o,a,c){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.position={x:t,y:n},this.speed=o,this.sprite=i,this.width=r,this.height=s,this.game=a,this.atkType=c}var t,n,i;return t=e,(n=[{key:"draw",value:function(e){e.drawImage(this.sprite,this.position.x,this.position.y,this.width,this.height),this.game.player.shields>0&&this.position.x<this.game.player.receiveAttack+10?(this.game.playerStatus.render(),this.game.elements.pop(),this.game.elements.push(new o(this.position.x,this.position.y,this.game)),this.game.player.receiveDamage(this.atkType)):this.position.x<this.game.player.receiveAttack&&(this.game.playerStatus.render(),this.game.elements.pop(),this.game.elements.push(new c(this.position.x,this.position.y,this.game)),this.game.player.receiveDamage(this.atkType))}},{key:"update",value:function(e){this.position.x+=this.speed}}])&&h(t.prototype,n),i&&h(t,i),e}();function l(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var f=function(){function e(t,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.image=document.getElementById("img_npc1shields"),this.position={x:t,y:n},this.width=256,this.height=256,this.loop=[0,1,2,3,4,5,6,7,8,9,10,11],this.loopIndex=0,this.frames=0,this.game=i}var t,n,i;return t=e,(n=[{key:"drawFrame",value:function(e,t,n){n.drawImage(this.image,e*this.width,t*this.height,this.width,this.height,this.game.enemy.position.x,this.game.enemy.position.y,256,256)}},{key:"draw",value:function(e){this.frames>1?(this.loopIndex+=1,this.frames=0,this.drawFrame(this.loopIndex,0,e)):(this.frames++,this.drawFrame(this.loopIndex,0,e)),this.loopIndex>11&&this.game.elements.pop()}},{key:"update",value:function(e){}}])&&l(t.prototype,n),i&&l(t,i),e}();function m(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var y=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.image=document.getElementById("img_npc1"),this.position={x:1e3,y:100},this.laserSprite=document.getElementById("img_npc1a1"),this.missleSprite=document.getElementById("img_npc1a2"),this.speed=.2,this.game=t,this.width=256,this.height=256,this.shields=50,this.shieldCharge=2,this.armor=100,this.lasers=40,this.missles=40,this.receiveAttack=1050}var t,n,i;return t=e,(n=[{key:"draw",value:function(e){e.drawImage(this.image,this.position.x,this.position.y,this.width,this.height)}},{key:"update",value:function(e){this.position.y<120||(this.speed=-this.speed),this.position.y+=this.speed,this.position.y>80||(this.speed=-this.speed),this.position.y+=this.speed}},{key:"action",value:function(){var e=this;0===this.shields&&this.shieldCharge>0?this.heal():0===this.shieldCharge?this.rechargeShields():this.game.player.shields>0?this.attackLasers():this.attackMissles(),setTimeout((function(){e.game.hand.startTurn()}),2500)}},{key:"rechargeShields",value:function(){this.shieldCharge=2,document.getElementById("enemy-display").innerText="Recharging shield core...",setTimeout((function(){document.getElementById("enemy-display").innerText=""}),3e3)}},{key:"heal",value:function(){this.shieldCharge--,document.getElementById("enemy-display").innerText="Enemy boosts shields by 20",setTimeout((function(){document.getElementById("enemy-display").innerText=""}),3e3),this.shields+=20,this.game.elements.push(new f(this.game.enemy.position.x-50,this.game.enemy.position.y-50,this.game)),this.game.enemyStatus.render()}},{key:"attackLasers",value:function(){document.getElementById("enemy-display").innerText="Enemy attacks for ".concat(this.lasers," laser damage"),setTimeout((function(){document.getElementById("enemy-display").innerText=""}),3e3),this.game.elements.push(new u(this.position.x,this.position.y+190,this.laserSprite,32,16,-7,this.game,"laser"))}},{key:"attackMissles",value:function(){document.getElementById("enemy-display").innerText="Enemy attacks for ".concat(this.missles," projectile damage"),setTimeout((function(){document.getElementById("enemy-display").innerText=""}),3e3),this.game.elements.push(new u(this.position.x,this.position.y+120,this.missleSprite,50,50,-7,this.game,"missle"))}},{key:"receiveDamage",value:function(e){var t,n;switch(e){case"laser":this.shields>=this.game.player.lasers?(t=this.game.player.lasers,n="shields",this.shields-=t):this.shields-this.game.player.lasers<0?(t=-(this.shields-this.game.player.lasers),this.armor-=t,this.shields=0,n="armor"):0===this.shields&&(t=this.game.player.lasers/2,this.armor-=t,n="armor");break;case"overcharge":this.shields>=this.game.player.lasers+20?(t=this.game.player.lasers+20,this.shields-=t,n="shields"):this.shields-(this.game.player.lasers+20)<0?(t=-(this.shields-(this.game.player.lasers+20)),this.armor-=dm/2,this.shields=0,n="armor"):0===this.shields&&(t=(this.game.player.lasers+20)/2,this.armor-=t,n="armor");break;case"missle":this.shields>this.game.player.missles/2?(t=this.game.player.missles/2,this.shields-=t,n="shields"):0!==this.shields&&this.shields<=this.game.player.missles?(t=this.shields,this.shields=0,n="armor"):0===this.shields&&(t=this.game.player.missles,this.armor-=t,n="armor")}document.getElementById("enemy-display").innerText="Enemy's ".concat(n," receives ").concat(t," damage!"),this.game.enemyStatus.render()}}])&&m(t.prototype,n),i&&m(t,i),e}();function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=w(e);if(t){var r=w(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return v(this,n)}}function v(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(s,e);var t,n,i,r=b(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=r.call(this,e)).cost=0,t.image="assets/installUpdate.png",t.description="Install the latest AI update, max energy + 1. Restarts automatically (ends turn)",t}return t=s,(n=[{key:"action",value:function(){this.game.player.maxEnergy++,this.game.player.energy-=this.cost,this.game.playerStatus.render();var e=this.game.hand.deck.indexOf(this);this.game.hand.deck.splice(e,e+1),this.game.hand.endTurn()}}])&&d(t.prototype,n),i&&d(t,i),s}(r);function x(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var E=function(){function e(t,n,i,r,s,o,a,c){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.position={x:t+a.player.position.x,y:n+a.player.position.y},this.speed=o,this.sprite=i,this.width=r,this.height=s,this.game=a,this.atkType=c}var t,n,i;return t=e,(n=[{key:"draw",value:function(e){e.drawImage(this.sprite,this.position.x,this.position.y,this.width,this.height),this.game.enemy.shields>0&&this.position.x>this.game.enemy.receiveAttack-20?(this.game.enemyStatus.render(),this.game.elements.pop(),this.game.elements.push(new f(this.position.x,this.position.y,this.game)),this.game.enemy.receiveDamage(this.atkType)):this.position.x>this.game.enemy.receiveAttack&&(this.game.enemyStatus.render(),this.game.elements.pop(),this.game.elements.push(new c(this.position.x,this.position.y,this.game)),this.game.enemy.receiveDamage(this.atkType))}},{key:"update",value:function(e){this.position.x+=this.speed}}])&&x(t.prototype,n),i&&x(t,i),e}();function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=P(e);if(t){var r=P(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return j(this,n)}}function j(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(s,e);var t,n,i,r=S(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=r.call(this,e)).cost=1,t.image="assets/laserAtk.png",t.description="Fire your lasers. Lasers do full damage vs Shields and half damage vs Armor",t.speed=5,t.lastTime=0,t.position={x:t.game.player.laserPos.x,y:t.game.player.laserPos.y},t.sprite=document.getElementById("img_laser"),t.game=e,t.atkType="laser",t}return t=s,(n=[{key:"action",value:function(){this.game.player.energy-=this.cost,this.game.playerStatus.render(),this.game.elements.push(new E(this.position.x,this.position.y,this.sprite,20,3,7,this.game,this.atkType))}}])&&I(t.prototype,n),i&&I(t,i),s}(r);function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function A(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=L(e);if(t){var r=L(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return D(this,n)}}function D(e,t){return!t||"object"!==B(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(s,e);var t,n,i,r=A(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=r.call(this,e)).cost=1,t.image="assets/missleAtk.png",t.description="Fire your missles. Missles do full damage vs Armor and half damage vs Shields",t.position={x:t.game.player.misslePos.x,y:t.game.player.misslePos.y},t.sprite=document.getElementById("img_missle"),t.game=e,t.atkType="missle",t}return t=s,(n=[{key:"action",value:function(){this.game.player.energy-=this.cost,this.game.playerStatus.render(),this.game.elements.push(new E(this.position.x,this.position.y,this.sprite,20,20,7,this.game,this.atkType))}}])&&R(t.prototype,n),i&&R(t,i),s}(r);function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function H(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function U(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=q(e);if(t){var r=q(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return Y(this,n)}}function Y(e,t){return!t||"object"!==M(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(s,e);var t,n,i,r=U(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=r.call(this,e)).cost=1,t.power=20,t.image="assets/overcharge.png",t.description="Sacrifice 20 shield points to boost your lasers by 20 for one attack",t.position={x:t.game.player.laserPos.x,y:t.game.player.laserPos.y},t.sprite=document.getElementById("img_laser"),t.atkType="overcharge",t}return t=s,(n=[{key:"check",value:function(){return this.game.player.energy-this.cost<0?(document.getElementById("card-description").innerText="Not enough energy",!1):!(this.game.player.shields-this.power<0&&(document.getElementById("card-description").innerText="Need at least 20 shields",1))}},{key:"action",value:function(){this.game.player.shields-=20,this.game.player.energy-=this.cost,this.game.playerStatus.render(),this.game.elements.push(new E(this.position.x,this.position.y,this.sprite,20,6,7,this.game,this.atkType))}}])&&H(t.prototype,n),i&&H(t,i),s}(r);function W(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var $=function(){function e(t,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.image=document.getElementById("img_newshields"),this.position={x:t,y:n},this.width=256,this.height=256,this.loopIndex=0,this.frames=0,this.game=i}var t,n,i;return t=e,(n=[{key:"drawFrame",value:function(e,t,n){n.drawImage(this.image,e*this.width,t*this.height,this.width,this.height,this.game.player.position.x-5,this.game.player.position.y+10,150,150)}},{key:"draw",value:function(e){this.frames>2?(this.loopIndex+=1,this.frames=0,this.drawFrame(this.loopIndex,0,e)):(this.drawFrame(this.loopIndex,0,e),this.frames+=1),this.loopIndex>37&&this.game.elements.pop()}},{key:"update",value:function(e){}}])&&W(t.prototype,n),i&&W(t,i),e}();function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function G(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function K(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=X(e);if(t){var r=X(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return Q(this,n)}}function Q(e,t){return!t||"object"!==V(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function X(e){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(s,e);var t,n,i,r=K(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=r.call(this,e)).cost=1,t.image="assets/recharge.png",t.power=20,t.description="Charge your shields by ".concat(t.power),t.game=e,t}return t=s,(n=[{key:"action",value:function(){this.game.player.shields+=this.power,this.game.player.energy-=this.cost,this.game.elements.push(new $(this.game.player.position.x,this.game.player.position.y,this.game)),this.game.playerStatus.render()}}])&&G(t.prototype,n),i&&G(t,i),s}(r);function ee(e){return(ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function te(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function ne(e,t){return(ne=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ie(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=se(e);if(t){var r=se(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return re(this,n)}}function re(e,t){return!t||"object"!==ee(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function se(e){return(se=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var oe=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ne(e,t)}(s,e);var t,n,i,r=ie(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=r.call(this,e)).cost=0,t.image="assets/syphonEnergy.png",t.description="Double laser damage at cost of -1 max energy",t}return t=s,(n=[{key:"action",value:function(){this.game.player.maxEnergy-=1,this.game.player.lasers*=2,this.game.playerStatus.render()}}])&&te(t.prototype,n),i&&te(t,i),s}(r);function ae(e){return function(e){if(Array.isArray(e))return ce(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return ce(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ce(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function he(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var ue=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.game=t;var i=[new Z(this.game),new Z(this.game),new Z(this.game),new _(this.game),new _(this.game),new _(this.game),new F(this.game),new F(this.game),new F(this.game)];this.deck=i.slice(),this.cardPile=this.deck.slice(),this.playerCards=[],this.currentHand=[],this.discardPile=[],this.disabled=!1,this.initializeDeck(n),this.startTurn()}var t,n,i;return t=e,(n=[{key:"initializeDeck",value:function(e){switch(e){case"overcharge":this.deck.push(new z(this.game));break;case"syphon":this.deck.push(new oe(this.game));break;case"update":this.deck.push(new k(this.game))}}},{key:"resetDeck",value:function(){for(this.cardPile=this.deck.slice();this.cardPile.length;){var e,t=~~(Math.random()*this.cardPile.length);(e=this.playerCards).push.apply(e,ae(this.cardPile.splice(t,t+1)))}}},{key:"startTurn",value:function(){this.game.playerTurn=!0,this.disabled=!1,this.game.player.energy=this.game.player.maxEnergy,this.game.playerStatus.render();for(var e=0;e<5;e++)this.playerCards.length||this.resetDeck(),this.currentHand.push(this.playerCards.shift());this.render()}},{key:"endTurn",value:function(){document.getElementById("player-hand").childNodes.forEach((function(e){e.classList.add("discardCard")})),this.game.playerTurn=!1,this.discardHand(),this.game.computerTurn()}},{key:"discardHand",value:function(){for(;this.currentHand.length;)this.discardPile.push(this.currentHand.pop())}},{key:"render",value:function(){var e=this;document.getElementById("player-hand").innerHTML="",this.currentHand.forEach((function(t,n){var i=document.createElement("img");i.src=t.image,i.classList.add("card");var r=document.createElement("li").appendChild(i);r.id="card-".concat(n),r.addEventListener("click",(function(){e.game.playerTurn&&t.check()&&!1===e.disabled&&(e.disabled=!0,setTimeout((function(){e.disabled=!1}),2500),t.action(),e.discardPile.push(t),document.getElementById("card-".concat(n)).classList.add("playCard"),setTimeout((function(){document.getElementById("card-".concat(n)).remove()}),1500))})),r.addEventListener("mouseover",(function(){document.getElementById("card-description").innerText="".concat(t.description)})),r.addEventListener("mouseout",(function(){document.getElementById("card-description").innerText=""})),document.getElementById("player-hand").appendChild(r)}))}}])&&he(t.prototype,n),i&&he(t,i),e}();function le(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var fe=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.image=document.getElementById("testship"),this.gameHeight=t.gameHeight,this.position={x:200,y:200},this.width=64,this.height=64,this.shields=50,this.armor=50,this.maxEnergy=3,this.energy=this.maxEnergy,this.lasers=10,this.missles=10,this.laserPos={x:115,y:100},this.misslePos={x:90,y:105},this.receiveAttack=305,this.speed=.1,this.game=t,this.loopIndex=0,this.frames=0}var t,n,i;return t=e,(n=[{key:"receiveDamage",value:function(e){var t;switch(e){case"laser":this.shields>=this.game.enemy.lasers?(t=this.game.enemy.lasers,this.shields-=t):this.shields-this.game.enemy.lasers<0?(t=-(this.shields-this.game.enemy.lasers),this.armor-=t/2,this.shields=0):0===this.shields&&(t=this.game.enemy.lasers/2,this.armor-=t);break;case"missle":this.shields>this.game.enemy.missles?(t=this.game.enemy.missles/2,this.shields-=t):0!==this.shields&&this.shields<=this.game.enemy.missles?(t=this.shields,this.shields=0):0===this.shields&&(t=this.game.enemy.missles,this.armor-=t)}}},{key:"drawFrame",value:function(e,t,n){n.drawImage(this.image,e*this.width,t*this.height,this.width,this.height,this.game.player.position.x,this.game.player.position.y,130,130)}},{key:"draw",value:function(e){this.frames>5?(this.loopIndex+=1,this.frames=0,this.drawFrame(this.loopIndex,0,e)):(this.drawFrame(this.loopIndex,0,e),this.frames+=1),5===this.loopIndex&&(this.loopIndex=0)}},{key:"update",value:function(e){this.position.y<210||(this.speed=-this.speed),this.position.y+=this.speed,this.position.y>190||(this.speed=-this.speed),this.position.y+=this.speed}}])&&le(t.prototype,n),i&&le(t,i),e}();function me(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var ye=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.game=t,this.armor=t.player.armor,this.energy=t.player.energy,this.stats=[this.shields,this.armor,this.energy],this.render()}var t,n,i;return t=e,(n=[{key:"render",value:function(){this.renderShields(),this.renderArmor(),this.renderEnergy(),this.renderLasers(),this.renderMissles()}},{key:"renderShields",value:function(){this.shields=this.game.player.shields,document.getElementById("player-shields-num").innerText="".concat(this.shields)}},{key:"renderArmor",value:function(){this.armor=this.game.player.armor,document.getElementById("player-armor-num").innerText="".concat(this.armor)}},{key:"renderEnergy",value:function(){this.energy=this.game.player.energy,document.getElementById("player-energy-num").innerText="".concat(this.energy)}},{key:"renderLasers",value:function(){this.lasers=this.game.player.lasers,document.getElementById("player-lasers-num").innerText="".concat(this.lasers)}},{key:"renderMissles",value:function(){this.missles=this.game.player.missles,document.getElementById("player-missles-num").innerText="".concat(this.missles)}}])&&me(t.prototype,n),i&&me(t,i),e}();function pe(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var de=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.game=t,this.render()}var t,n,i;return t=e,(n=[{key:"render",value:function(){this.renderShields(),this.renderArmor()}},{key:"renderShields",value:function(){this.shields=this.game.enemy.shields,document.getElementById("enemy-shields-num").innerText="".concat(this.shields)}},{key:"renderArmor",value:function(){this.armor=this.game.enemy.armor,document.getElementById("enemy-armor-num").innerText="".concat(this.armor)}}])&&pe(t.prototype,n),i&&pe(t,i),e}();function ge(e){return function(e){if(Array.isArray(e))return be(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return be(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return be(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function be(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function ve(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var we=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.gameWidth=t,this.gameHeight=n,this.background=document.getElementById("img_background"),this.playerTurn=!0,this.projectiles=[],this.elements=[],this.hasStarted=!1}var t,n,i;return t=e,(n=[{key:"start",value:function(e){this.hasStarted=!0,this.player=new fe(this),this.enemy=new y(this),this.playerStatus=new ye(this),this.hand=new ue(this,e),this.enemyStatus=new de(this),this.elements=[this.player,this.enemy].concat(ge(this.projectiles))}},{key:"computerTurn",value:function(){this.playerTurn||this.enemy.action()}},{key:"update",value:function(e){this.elements.forEach((function(t){return t.update(e)}))}},{key:"isOver",value:function(){if(this.hasStarted)return this.enemy.armor<=0?(document.getElementById("enemy-display").innerText="ENEMY DESTROYED! YOU WIN!",this.hand.disabled=!0,!0):this.player.armor<=0&&(document.getElementById("enemy-display").innerText="ABANDON SHIP! YOU HAVE LOST THE BATTLE!",this.hand.disabled=!0,!0)}},{key:"draw",value:function(e){e.drawImage(this.background,0,0,1400,800),this.elements.forEach((function(t){return t.draw(e)}))}}])&&ve(t.prototype,n),i&&ve(t,i),e}();n(0);document.addEventListener("DOMContentLoaded",(function(){document.getElementById("rules-button").addEventListener("click",(function(){document.getElementById("rules").classList.remove("hidden"),document.getElementById("rules").classList.add("visible")}));var e=new we(1400,500);Array.from(document.getElementById("popup-bottom-row").children).forEach((function(t){t.addEventListener("click",(function(){e.start(t.id),document.getElementById("rules").classList.remove("visible"),document.getElementById("rules").classList.add("hidden")}))}));var t=document.getElementById("game-screen").getContext("2d"),n=0;document.getElementById("end-turn-button").addEventListener("click",(function(){!e.hand.disabled&&e.playerTurn&&e.hand.endTurn()})),requestAnimationFrame((function i(r){var s=r-n;n=r,e.update(s),e.draw(t),e.isOver()||requestAnimationFrame(i)}))}))}]);
//# sourceMappingURL=main.js.map