import React from "react";
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = React, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, g) {
  var b, d = {}, e = null, h = null;
  g !== void 0 && (e = "" + g);
  a.key !== void 0 && (e = "" + a.key);
  a.ref !== void 0 && (h = a.ref);
  for (b in a)
    m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      d[b] === void 0 && (d[b] = a[b]);
  return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime.exports.jsx;
function Slot(props) {
  return /* @__PURE__ */ jsx(React.Fragment, {
    children: props.children
  }, `slot#${props.name}`);
}
function findSlots(children) {
  if (!children || children.length === 0)
    return {
      defaultSlot: /* @__PURE__ */ jsx(React.Fragment, {})
    };
  if (!Array.isArray(children))
    children = [children];
  else
    children = children.slice();
  const childrenArr = children;
  const slots = childrenArr.reduce((slots2, child, i) => {
    if (child.type === Slot) {
      if (!child.props.name)
        throw new Error('Prop "name" is required for Slot.');
      slots2[child.props.name] = child.props.children;
      childrenArr[i] = null;
    }
    return slots2;
  }, {});
  slots.defaultSlot = childrenArr.filter((child) => child !== null);
  return slots;
}
export { Slot, findSlots };
