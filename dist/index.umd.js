(function(n,f){typeof exports=="object"&&typeof module!="undefined"?f(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],f):(n=typeof globalThis!="undefined"?globalThis:n||self,f(n["react-slot"]={},n.React))})(this,function(n,f){"use strict";function y(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var l=y(f),a={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=l.default,S=Symbol.for("react.element"),v=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,j=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,u){var r,o={},s=null,c=null;u!==void 0&&(s=""+u),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(c=t.ref);for(r in t)x.call(t,r)&&!O.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:S,type:e,key:s,ref:c,props:o,_owner:j.current}}i.Fragment=v,i.jsx=p,i.jsxs=p,a.exports=i;const d=a.exports.jsx;function _(e){return d(l.default.Fragment,{children:e.children},`slot#${e.name}`)}function R(e){if(!e||e.length===0)return{defaultSlot:d(l.default.Fragment,{})};Array.isArray(e)?e=e.slice():e=[e];const t=e,u=t.reduce((r,o,s)=>{if(o.type===_){if(!o.props.name)throw new Error('Prop "name" is required for Slot.');r[o.props.name]=o.props.children,t[s]=null}return r},{});return u.defaultSlot=t.filter(r=>r!==null),u}n.Slot=_,n.findSlots=R,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
