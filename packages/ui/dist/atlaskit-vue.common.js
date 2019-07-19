'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ClassesProviderMixin = {
  data() {
    const classesProvider = [];

    classesProvider.add = (type, fn) => {
      if (!fn) {
        fn = type;
        type = 'root';
      }

      fn.type = type;

      classesProvider.push(fn);
    };

    return {
      classesProvider,
    }
  },
  computed: {
    /**
     * Compute dynamically provided classes from mixins
     */
    classes() {
      return this.classesProvider.reduce((acc, fn) => {
        const rule = fn();

        if (!acc[fn.type]) acc[fn.type] = [];

        acc[fn.type].push(rule);
        acc.push(rule);

        return acc
      }, [])
    },
  },
};

var script = {
  name: 'AvContainer',
  mixins: [ClassesProviderMixin],
  props: {
    fluid: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    this.classesProvider.add(() => ({
      '-fluid': this.fluid,
    }));
  },
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */
const __vue_script__ = script;
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "container", class: _vm.classes },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var AvContainer = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

/**
 * Responsive breakpoints and their values.
 */

/**
 * Available window breakpoints. The emtpy string is required for generating class names without breakpoints.
 *
 * @type {string[]}
 */
const breakpointKeys = ['', 'xs', 'sm', 'md', 'lg', 'xl'];

/**
 * Capitalize first letter of a string
 *
 * @param string
 * @returns {string}
 */
const capitalizeFirst = string => string.charAt(0).toUpperCase() + string.slice(1);

const toKebabCase = (string, from = 'camel') => {
  const regExp = from === 'camel' ? /([A-Z])/g : /_([a-zA-Z])/g;
  return string.replace(regExp, (_, p) => '-' + p.toLowerCase())
};

/**
 * Convert given class name into dash case and append the given breakpoint string. Required in order to turn camel case
 * props into dash case.
 *
 * @param className
 * @param breakpoint
 * @returns {string}
 */
const breakpointClass = (className, breakpoint) => {
  if (['string', 'number'].indexOf(typeof breakpoint) > -1 && breakpoint !== '') {
    return `${toKebabCase(className)}-${breakpoint}`
  }

  return toKebabCase(className)
};

const modifierClass = className => '-' + className;

const properties = {};

breakpointKeys.forEach(breakpoint => {
  const props = [
    'start',
    'center',
    'end',
    'top',
    'middle',
    'bottom',
    'around',
    'between',
    'reverse',
  ];
  props.forEach(property => {
    properties[property + capitalizeFirst(breakpoint)] = {
      type: Boolean,
      default: false,
    };
  });
});

var script$1 = {
  name: 'AvRow',
  props: {
    noGutter: {
      type: Boolean,
      default: false,
    },
    noCollapse: {
      type: Boolean,
      default: false,
    },
    ...properties,
  },
  computed: {
    classes() {
      return [
        this.noGutter ? '-no-gutter' : '',
        this.noCollapse ? '-no-collapse' : '',
        ...Object.keys(properties).map(p =>
          this[p] ? breakpointClass(modifierClass(p), this[p]) : '',
        ),
      ].filter(p => p !== '')
    },
  },
};

/* script */
const __vue_script__$1 = script$1;
/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "row", class: _vm.classes },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var AvRow = normalizeComponent_1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    undefined,
    undefined
  );

const properties$1 = {};
breakpointKeys.forEach(breakpoint => {
  if (breakpoint !== '') {
    properties$1[breakpoint] = {
      type: [String, Boolean, Number],
      default: false,
    };
  }
  let props = ['first', 'last'];
  props.forEach(property => {
    properties$1[property + capitalizeFirst(breakpoint)] = {
      type: Boolean,
      default: false,
    };
  });
  props = [('pull')];
  props.forEach(property => {
    properties$1[property + capitalizeFirst(breakpoint)] = {
      type: [String, Number],
      default: '',
    };
  });
});

var script$2 = {
  name: 'AvCol',
  props: properties$1,
  computed: {
    classes() {
      return [
        ...Object.keys(properties$1).map(p =>
          this[p] ? breakpointClass(modifierClass(p), this[p]) : '',
        ),
      ].filter(p => p !== '')
    },
  },
};

/* script */
const __vue_script__$2 = script$2;
/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "col", class: _vm.classes },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = undefined;
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var AvColumn = normalizeComponent_1(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    undefined,
    undefined
  );

var script$3 = {
  name: 'AvButton',
};

/* script */
const __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("button", [_vm._v("Ahihi")])
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

  /* style */
  const __vue_inject_styles__$3 = undefined;
  /* scoped */
  const __vue_scope_id__$3 = undefined;
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var AvButton = normalizeComponent_1(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    undefined,
    undefined
  );

var script$4 = {
  name: 'AvIcon',
  mixins: [ClassesProviderMixin],
  props: {
    name: {
      type: String,
      required: true,
    },
    iconStyle: {
      type: String,
      default: 'solid',
      validator(v) {
        return ['solid', 'regular', 'brands'].includes(v)
      },
    },
    size: {
      type: String,
      default: '1em',
    },
    color: {
      type: String,
    },
    bgColor: {
      type: String,
    },
  },
  computed: {
    fontStyle() {
      switch (this.iconStyle) {
        case 'regular':
          return 'far'
        case 'solid':
          return 'fas'
        case 'brands':
          return 'fab'
        default:
          return 'fas'
      }
    },
  },
  created() {
    this.classesProvider.add(() => ({
      [this.fontStyle]: true,
      [`fa-${this.name}`]: Boolean(this.name),
    }));
  },
};

/* script */
const __vue_script__$4 = script$4;

/* template */
var __vue_render__$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("i", {
    staticClass: "av-icon",
    class: _vm.classes,
    style:
      "font-size: " +
      _vm.size +
      "; color: " +
      _vm.color +
      "; background-color: " +
      _vm.bgColor
  })
};
var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;

  /* style */
  const __vue_inject_styles__$4 = undefined;
  /* scoped */
  const __vue_scope_id__$4 = undefined;
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var AvIcon = normalizeComponent_1(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    undefined,
    undefined
  );

const components = [AvContainer, AvRow, AvColumn, AvButton, AvIcon];

const Atlaskit = {
  install(Vue, options = {}) {
(options.components || components).forEach(component => {
      Vue.component(component.name, component);
    });
  },
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Atlaskit);
}

exports.Atlaskit = Atlaskit;
exports.AvColumn = AvColumn;
exports.AvContainer = AvContainer;
exports.AvRow = AvRow;
exports.default = Atlaskit;
