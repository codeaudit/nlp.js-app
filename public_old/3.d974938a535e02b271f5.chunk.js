webpackJsonp([3],{"./app/components/ActionButton/index.js":function(e,t,n){"use strict";function o(e){return s("div",{style:e.customStyle,className:"btn-action"},void 0,s("a",{className:"btn-floating btn-large",onClick:e.onClick},void 0,a.a.createElement(i.d,e.label)))}var r=n("./node_modules/react/react.js"),a=n.n(r),i=n("./node_modules/react-intl/lib/index.es.js"),s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s]);else n||(n=a||{});if(1===i)n.children=r;else if(i>1){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}();t.a=o},"./app/components/Content/index.js":function(e,t,n){"use strict";function o(e){return i("section",{className:"content-area"},void 0,i("div",{className:"container"},void 0,a.a.Children.toArray(e.children)))}var r=n("./node_modules/react/react.js"),a=n.n(r),i=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s]);else n||(n=a||{});if(1===i)n.children=r;else if(i>1){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}();t.a=o},"./app/components/ContentHeader/index.js":function(e,t,n){"use strict";function o(e){return l(s.a,{},void 0,l("header",{style:e.headerStyle,className:"main-title"},void 0,l("h1",{},void 0,a.a.createElement(i.d,e.title)),l("p",{},void 0,a.a.createElement(i.d,e.subTitle)),e.children))}var r=n("./node_modules/react/react.js"),a=n.n(r),i=n("./node_modules/react-intl/lib/index.es.js"),s=n("./app/components/Row/index.js"),l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s]);else n||(n=a||{});if(1===i)n.children=r;else if(i>1){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}();o.defaultProps={headerStyle:{}},t.a=o},"./app/components/Form/index.js":function(e,t,n){"use strict";function o(e){return i("div",{id:"form-section",style:e.style},void 0,a.a.Children.toArray(e.children))}var r=n("./node_modules/react/react.js"),a=n.n(r),i=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s]);else n||(n=a||{});if(1===i)n.children=r;else if(i>1){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}();t.a=o},"./app/components/FormTextInput/index.js":function(e,t,n){"use strict";function o(e){return i("div",{className:"input-field col s"+e.s},void 0,i(a.a,{id:e.id,label:e.label,placeholder:e.placeholder,value:e.value,onChange:e.onChange,onKeyDown:e.onKeyDown,required:e.required,style:e.style,disabled:e.disabled,className:e.className,tooltip:e.tooltip,defaultValue:e.defaultValue,icon:e.icon}))}var r=n("./node_modules/react/react.js"),a=(n.n(r),n("./app/components/TextInput/index.js")),i=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s]);else n||(n=a||{});if(1===i)n.children=r;else if(i>1){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}();o.defaultProps={s:12},t.a=o},"./app/components/Header/index.js":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n("./node_modules/react/react.js"),s=n.n(i),l=n("./node_modules/react-router/es/index.js"),u=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s]);else n||(n=a||{});if(1===i)n.children=r;else if(i>1){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),d=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.breadcrumbs,n=e.actionButtons;return u("header",{style:{position:"fixed",width:"calc(100% - 500px)"},className:"valign-wrapper"},void 0,u("div",{className:"nav-wrapper"},void 0,u("div",{className:"col s12 "},void 0,t.map(function(e,t){return e.link?u(l.d,{to:e.link,className:"breadcrumb"},"breadcrumb-"+t,u("span",{},void 0,e.label)):u("span",{className:"breadcrumb"},"breadcrumb-"+t,e.label)})),n))}}]),t}(s.a.Component);d.defaultProps={actionButtons:[]},t.a=d},"./app/components/Preloader/Spinner.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("./node_modules/react/react.js"),a=o(r),i=n("./node_modules/prop-types/index.js"),s=o(i),l=n("./node_modules/classnames/index.js"),u=o(l),c=function(e){var t=e.color,n=e.only,o={"spinner-layer":!0};return n?o["spinner-"+t+"-only"]=!0:o["spinner-"+t]=!0,a.default.createElement("div",{className:(0,u.default)(o)},a.default.createElement("div",{className:"circle-clipper left"},a.default.createElement("div",{className:"circle"})),a.default.createElement("div",{className:"gap-patch"},a.default.createElement("div",{className:"circle"})),a.default.createElement("div",{className:"circle-clipper right"},a.default.createElement("div",{className:"circle"})))};c.defaultProps={only:!0},c.propTypes={color:s.default.string,only:s.default.bool},t.default=c},"./app/components/Preloader/index.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":s(t))&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":s(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n("./node_modules/react/react.js"),c=o(u),d=n("./node_modules/prop-types/index.js"),f=o(d),p=n("./node_modules/classnames/index.js"),m=o(p),y=n("./app/components/Preloader/Spinner.js"),h=o(y),g=["blue","red","yellow","green"],b=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){var e={"preloader-wrapper":!0,active:this.props.active};this.props.size&&(e[this.props.size]=!0);var t=void 0;return this.props.flashing?(t=[],g.map(function(e){t.push(c.default.createElement(h.default,{color:e,only:!1,key:e}))})):t=c.default.createElement(h.default,{color:this.props.color}),c.default.createElement("div",{className:(0,m.default)(this.props.className,e)},t)}}]),t}(u.Component);b.propTypes={className:f.default.string,size:f.default.oneOf(["big","small","medium"]),active:f.default.bool,color:f.default.string,flashing:f.default.bool},b.defaultProps={active:!0,flashing:!1,color:"blue"},t.default=b},"./app/components/Row/index.js":function(e,t,n){"use strict";function o(e){return i("div",{className:"row"},void 0,a.a.Children.toArray(e.children))}var r=n("./node_modules/react/react.js"),a=n.n(r),i=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s]);else n||(n=a||{});if(1===i)n.children=r;else if(i>1){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}();t.a=o},"./app/components/SliderInput/index.js":function(e,t,n){"use strict";function o(e){return u("div",{},void 0,e.label?u("label",{style:{pointerEvents:"all"},htmlFor:e.id},void 0,e.tooltip?u("div",{},void 0,a.a.createElement(i.d,e.label),u(l.a,{tooltip:e.tooltip,delay:50,position:"top"},void 0,c)):a.a.createElement(i.d,e.label)):"",u("p",{className:"range-field"},void 0,u("input",{id:e.id,type:"range",value:e.value,min:e.min,max:e.max,onChange:e.onChange})))}var r=n("./node_modules/react/react.js"),a=n.n(r),i=n("./node_modules/react-intl/lib/index.es.js"),s=n("./node_modules/react-materialize/lib/index.js"),l=(n.n(s),n("./app/components/Tooltip/index.js")),u=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s]);else n||(n=a||{});if(1===i)n.children=r;else if(i>1){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),c=u("a",{},void 0,u(s.Icon,{tiny:!0},void 0,"help_outline"));t.a=o},"./app/components/Toggle/index.js":function(e,t,n){"use strict";function o(e){var t={};return e.right&&(t.float="right"),e.inline&&(t.display="inline"),i("div",{className:"switch",style:t},void 0,i("label",{},void 0,e.strongLabel?i("strong",{},void 0,e.label?e.label:null,":"):e.label?e.label+":":null,i("input",{type:"checkbox",disabled:e.disabled,onChange:e.onChange,checked:!!e.checked}),s))}var r=n("./node_modules/react/react.js"),a=(n.n(r),n("./node_modules/material-ui/utils/propTypes.js")),i=(n.n(a),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s]);else n||(n=a||{});if(1===i)n.children=r;else if(i>1){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}()),s=i("span",{className:"lever"});o.defaultProps={strongLabel:!0,disabled:!1},t.a=o},"./app/containers/DomainPage/actions.js":function(e,t,n){"use strict";function o(e){return{type:l.a,payload:e}}function r(){return{type:l.b}}function a(e){return{type:l.c,error:e}}function i(e){return{type:l.d,domain:e}}function s(e){return{type:l.e,apiCall:!0,id:e}}var l=n("./app/containers/DomainPage/constants.js");t.a=o,t.b=r,t.e=a,t.d=i,t.c=s},"./app/containers/DomainPage/constants.js":function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r}),n.d(t,"e",function(){return a}),n.d(t,"d",function(){return i}),n.d(t,"c",function(){return s});var o="DomainPage/CHANGE_DOMAIN_DATA",r="DomainPage/RESET_DOMAIN_DATA",a="DomainPage/LOAD_DOMAIN",i="DomainPage/LOAD_DOMAIN_SUCCESS",s="DomainPage/LOAD_DOMAIN_ERROR"},"./app/containers/DomainPage/index.js":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{onChangeDomainData:function(t,o){e(n.i(M.a)()),"extraTrainingData"===t.field&&(t.value=o.target.checked),e(n.i(x.a)(t))},onCreate:function(){e(n.i(M._8)())},onUpdate:function(){e(n.i(M._9)())},resetForm:function(){e(n.i(x.b)())},onSuccess:function(t){e(n.i(M.a)()),e(t?n.i(p.push)("/wizard/entity-intent"):n.i(p.push)("/domains"))},onEditMode:function(t){e(n.i(x.c)(t))}}}Object.defineProperty(t,"__esModule",{value:!0});var s=n("./node_modules/react/react.js"),l=n.n(s),u=n("./node_modules/react-helmet/lib/Helmet.js"),c=n.n(u),d=n("./node_modules/react-materialize/lib/index.js"),f=(n.n(d),n("./node_modules/react-redux/lib/index.js")),p=(n.n(f),n("./node_modules/react-router-redux/lib/index.js")),m=(n.n(p),n("./node_modules/react-s-alert/index.js")),y=n.n(m),h=n("./node_modules/reselect/es/index.js"),g=n("./app/components/ActionButton/index.js"),b=n("./app/components/Content/index.js"),v=n("./app/components/ContentHeader/index.js"),T=n("./app/components/Form/index.js"),_=n("./app/components/FormTextInput/index.js"),E=n("./app/components/Header/index.js"),S=n("./app/components/Preloader/index.js"),P=n.n(S),j=n("./app/components/SliderInput/index.js"),A=n("./app/components/Toggle/index.js"),O=n("./app/components/Tooltip/index.js"),M=n("./app/containers/App/actions.js"),w=n("./app/containers/App/selectors.js"),x=n("./app/containers/DomainPage/actions.js"),C=n("./app/containers/DomainPage/messages.js"),D=n("./app/containers/DomainPage/selectors.js");n.d(t,"DomainPage",function(){return L}),t.mapDispatchToProps=i;var N=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),R=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s]);else n||(n=a||{});if(1===i)n.children=r;else if(i>1){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),k=function(e){try{return e.map(function(e,t){return R("option",{value:e.value},t,e.text)})}catch(e){return[R("option",{value:""},0,C.a.errorParsingOptions.defaultMessage)]}},I=R(P.a,{color:"#00ca9f",size:"big"}),G=R("a",{},void 0,R(d.Icon,{tiny:!0},void 0,"help_outline")),L=function(e){function t(){o(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={editMode:!1},e.onChangeInput=e.onChangeInput.bind(e),e.setEditMode=e.setEditMode.bind(e),e.submitForm=e.submitForm.bind(e),e}return a(t,e),N(t,[{key:"componentDidMount",value:function(){this.setEditMode("domainEdit"===this.props.route.name),document.getElementById("domainName").focus()}},{key:"componentWillUpdate",value:function(e){var t=e.currentAgent;t!==this.props.currentAgent&&this.props.onChangeDomainData({value:t.agentName,field:"agent"})}},{key:"onChangeInput",value:function(e,t){void 0!==e&&e.preventDefault&&e.preventDefault(),this.props.onChangeDomainData({value:e.target.value,field:t})}},{key:"componentDidUpdate",value:function(e,t,n){this.props.route!==e.route&&this.setEditMode("domainEdit"===this.props.route.name),this.props.success&&(y.a.success(this.state.editMode?C.a.successMessageEdit.defaultMessage:C.a.successMessage.defaultMessage,{position:"bottom"}),this.props.onSuccess.bind(null,this.props.inWizard)()),this.props.error&&y.a.error(this.props.error.message,{position:"bottom"})}},{key:"setEditMode",value:function(e){if(e)this.setState({editMode:!0}),this.props.onEditMode(this.props.params.id);else{this.props.resetForm(),this.props.onChangeDomainData({value:this.props.globalSettings.defaultAgentLanguage,field:"language"}),this.setState({editMode:!1});var t=this.props.currentAgent;t&&this.props.onChangeDomainData({value:t.agentName,field:"agent"})}}},{key:"submitForm",value:function(e){void 0!==e&&e.preventDefault&&e.preventDefault(),this.state.editMode?this.props.onUpdate():this.props.onCreate()}},{key:"render",value:function(){var e=this,t=this.props,n=t.loading,o=t.error,r=t.success,a=t.domain,i=t.currentAgent,s=t.globalSettings,l={loading:n,success:r,error:o,domain:a},u=[{label:"Agent"}];i&&u.push({link:"/agent/"+i.id,label:""+i.agentName}),u.push({link:"/domains",label:"Domains"}),u.push({label:this.state.editMode?"Edit":"+ Create"});var f=this.state.editMode?C.a.editDomainTitle:C.a.createDomainTitle,p=this.state.editMode?C.a.editDomainDescription:C.a.createDomainDescription;return R("div",{},void 0,R(d.Col,{style:{zIndex:2,position:"fixed",top:"50%",left:"45%"},s:12},void 0,l.loading?I:null),R(c.a,{title:this.state.editMode?"Edit Domain":"Create Domain",meta:[{name:"description",content:"Create/Edit a domain for your agent"}]}),R(E.a,{breadcrumbs:u,actionButtons:R(g.a,{label:this.state.editMode?C.a.editButton:C.a.createButton,onClick:this.submitForm})}),R(b.a,{},void 0,R(v.a,{title:f,subTitle:p}),R(T.a,{},void 0,R(d.Row,{},void 0,R(_.a,{id:"domainName",label:C.a.domainName,placeholder:C.a.domainNamePlaceholder.defaultMessage,value:a.domainName,onChange:function(t){return e.onChangeInput(t,"domainName")},required:!0})),R(d.Row,{},void 0,R(d.Input,{s:6,name:"language",type:"select",label:C.a.language.defaultMessage,value:a.language,onChange:function(t){return e.onChangeInput(t,"language")}},void 0,k(s.agentLanguages)))),R(d.Row,{},void 0,R(j.a,{label:C.a.intentThreshold,tooltip:C.a.intentThresholdDescription.defaultMessage,min:"0",max:"100",name:"intentThreshold",onChange:function(t){return e.onChangeInput(t,"intentThreshold")},value:a.intentThreshold.toString()})),R(T.a,{},void 0,R(d.Row,{},void 0,R(A.a,{inline:!0,strongLabel:!1,label:C.a.expandedTrainingData.defaultMessage,onChange:this.props.onChangeDomainData.bind(null,{field:"extraTrainingData"}),checked:l.domain.extraTrainingData}),R(O.a,{tooltip:C.a.expandedTrainingDataTooltip.defaultMessage,delay:50,position:"top"},void 0,G)))))}}]),t}(l.a.PureComponent),H=n.i(h.b)({domain:n.i(D.a)(),loading:n.i(w.c)(),error:n.i(w.d)(),success:n.i(w.e)(),inWizard:n.i(w.f)(),currentAgent:n.i(w.g)(),globalSettings:n.i(w.b)()});t.default=n.i(f.connect)(H,i)(L)},"./app/containers/DomainPage/messages.js":function(e,t,n){"use strict";var o=n("./node_modules/react-intl/lib/index.es.js");t.a=n.i(o.c)({createDomainTitle:{id:"containers.DomainPage.create_domain.title",defaultMessage:"Creating New Domain"},createDomainDescription:{id:"containers.DomainPage.create_domain.description",defaultMessage:"A domain is a unit the forms part of an agent. With a Domain you can represent a set of expressions that belongs to an specific context in your agent. Good examples of domains are: Sales, Order Tracking, Customer Service."},editDomainTitle:{id:"containers.DomainPage.edit_domain.title",defaultMessage:"Edit Domain"},editDomainDescription:{id:"containers.DomainPage.edit_domain.description",defaultMessage:"A domain is a unit the forms part of an agent. With a Domain you can represent a set of expressions that belongs to an specific context in your agent. Good examples of domains are: Sales, Order Tracking, Customer Service."},agent:{id:"containers.DomainPage.create_domain.agent",defaultMessage:"Agent"},language:{id:"containers.DomainPage.create_domain.language",defaultMessage:"Language"},domainName:{id:"containers.DomainPage.create_domain.domain_name",defaultMessage:"Domain Name"},domainNamePlaceholder:{id:"containers.DomainPage.create_domain.domain_name_placeholder",defaultMessage:"Type a name here"},intentThreshold:{id:"containers.DomainPage.create_domain.intent_threshold",defaultMessage:"Intent Recognition Threshold"},intentThresholdDescription:{id:"containers.DomainPage.create_domain.intent_threshold_description",defaultMessage:"This threshold determines how confident your agent has to be that a user's request matches an intent inside the domain. Higher values are likely to fallback. Lower values are more likely to mis-classify."},createButton:{id:"containers.DomainPage.create_domain.create_button",defaultMessage:"+ Create"},editButton:{id:"containers.DomainPage.create_domain.edit_button",defaultMessage:"+ Update"},successMessage:{id:"containers.DomainPage.create_domain.success_message",defaultMessage:"Domain created"},successMessageEdit:{id:"containers.DomainPage.create_agent.success_message_edit",defaultMessage:"Domain updated"},expandedTrainingData:{id:"containers.DomainPage.create_agent.expanded_training_data",defaultMessage:"Generate extra training examples"},expandedTrainingDataTooltip:{id:"containers.DomainPage.create_agent.expanded_training_data_tooltip",defaultMessage:"Create combinations between your entities and intents. On small agents this can improve classification, as your agent grows this may increase training time."}})},"./app/containers/DomainPage/selectors.js":function(e,t,n){"use strict";var o=n("./node_modules/reselect/es/index.js");n.d(t,"a",function(){return a});var r=function(e){return e.domain},a=function(){return n.i(o.a)(r,function(e){return e.domainData})}},"./node_modules/material-ui/utils/propTypes.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("./node_modules/prop-types/index.js"),a=o(r),i=a.default.oneOf(["left","middle","right"]),s=a.default.oneOf(["top","center","bottom"]);t.default={corners:a.default.oneOf(["bottom-left","bottom-right","top-left","top-right"]),horizontal:i,vertical:s,origin:a.default.shape({horizontal:i,vertical:s}),cornersAndCenter:a.default.oneOf(["bottom-center","bottom-left","bottom-right","top-center","top-left","top-right"]),stringOrNumber:a.default.oneOfType([a.default.string,a.default.number]),zDepth:a.default.oneOf([0,1,2,3,4,5])}},"./node_modules/react-helmet/lib/Helmet.js":function(e,t,n){function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.__esModule=!0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=n("./node_modules/react/react.js"),d=o(c),f=n("./node_modules/react-side-effect/lib/index.js"),p=o(f),m=n("./node_modules/deep-equal/index.js"),y=o(m),h=n("./node_modules/object-assign/index.js"),g=o(h),b=n("./node_modules/react-helmet/lib/HelmetConstants.js"),v=n("./node_modules/react-helmet/lib/PlainComponent.js"),T=o(v),_="data-react-helmet",E=function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},S=function(e,t){for(var n=e.length-1;n>=0;n--){var o=e[n];if(o[t])return o[t]}return null},P=function(e){var t=S(e,"title"),n=S(e,"titleTemplate");if(n&&t)return n.replace(/%s/g,function(){return t});var o=S(e,"defaultTitle");return t||o||""},j=function(e){return S(e,"onChangeClientState")||function(){}},A=function(e){return e.filter(function(e){return void 0!==e[b.TAG_NAMES.HTML]}).map(function(e){return e[b.TAG_NAMES.HTML]}).reduce(function(e,t){return u({},e,t)},{})},O=function(e,t){return t.filter(function(e){return void 0!==e[b.TAG_NAMES.BASE]}).map(function(e){return e[b.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var o=Object.keys(n),r=0;r<o.length;r++){var a=o[r],i=a.toLowerCase();if(-1!==e.indexOf(i))return t.concat(n)}return t},[])},M=function(e,t,n){var o={};return n.filter(function(t){return void 0!==t[e]}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var r={};n.filter(function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var s=a[i],l=s.toLowerCase();-1===t.indexOf(l)||n===b.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===b.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(s)||s!==b.TAG_PROPERTIES.INNER_HTML&&s!==b.TAG_PROPERTIES.CSS_TEXT||(n=s)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][u]&&(r[n][u]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var a=Object.keys(r),i=0;i<a.length;i++){var s=a[i],l=(0,g.default)({},o[s],r[s]);o[s]=l}return e},[]).reverse()},w=function(e){document.title=e||document.title},x=function(e){for(var t=document.getElementsByTagName("html")[0],n=t.getAttribute(_),o=n?n.split(","):[],r=[].concat(o),a=Object.keys(e),i=0;i<a.length;i++){var s=a[i],l=e[s]||"";t.setAttribute(s,l),-1===o.indexOf(s)&&o.push(s);var u=r.indexOf(s);-1!==u&&r.splice(u,1)}for(var c=r.length-1;c>=0;c--)t.removeAttribute(r[c]);o.length===r.length?t.removeAttribute(_):t.setAttribute(_,o.join(","))},C=function(e,t){var n=document.head||document.querySelector("head"),o=n.querySelectorAll(e+"["+_+"]"),r=Array.prototype.slice.call(o),a=[],i=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var o in t)if(t.hasOwnProperty(o))if("innerHTML"===o)n.innerHTML=t.innerHTML;else if("cssText"===o)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[o]?"":t[o];n.setAttribute(o,s)}n.setAttribute(_,"true"),r.some(function(e,t){return i=t,n.isEqualNode(e)})?r.splice(i,1):a.push(n)}),r.forEach(function(e){return e.parentNode.removeChild(e)}),a.forEach(function(e){return n.appendChild(e)}),{oldTags:r,newTags:a}},D=function(e){for(var t=Object.keys(e),n="",o=0;o<t.length;o++){var r=t[o];n+=(void 0!==e[r]?r+'="'+e[r]+'"':""+r)+" "}return n.trim()},N=function(e,t){return"<"+e+" "+_+'="true">'+E(t)+"</"+e+">"},R=function(e,t){return t.map(function(t){var n=Object.keys(t).filter(function(e){return!("innerHTML"===e||"cssText"===e)}).map(function(e){return void 0===t[e]?e:e+'="'+E(t[e])+'"'}).join(" ").trim(),o=t.innerHTML||t.cssText||"",r=-1===[b.TAG_NAMES.NOSCRIPT,b.TAG_NAMES.SCRIPT,b.TAG_NAMES.STYLE].indexOf(e);return"<"+e+" "+_+'="true" '+n+(r?"/>":">"+o+"</"+e+">")}).join("")},k=function(e,t){return[d.default.createElement(b.TAG_NAMES.TITLE,s({key:t},_,!0),t)]},I=function(e,t){return t.map(function(t,n){var o=s({key:n},_,!0);return Object.keys(t).forEach(function(e){var n=b.REACT_TAG_MAP[e]||e;if("innerHTML"===n||"cssText"===n){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),d.default.createElement(e,o)})},G=function(e,t){switch(e){case b.TAG_NAMES.TITLE:return{toComponent:function(){return k(e,t)},toString:function(){return N(e,t)}};case b.TAG_NAMES.HTML:return{toComponent:function(){return t},toString:function(){return D(t)}};default:return{toComponent:function(){return I(e,t)},toString:function(){return R(e,t)}}}},L=function(e){var t=e.htmlAttributes,n=e.title,o=e.baseTag,r=e.metaTags,a=e.linkTags,i=e.scriptTags,s=e.noscriptTags,l=e.styleTags;return{htmlAttributes:G(b.TAG_NAMES.HTML,t),title:G(b.TAG_NAMES.TITLE,n),base:G(b.TAG_NAMES.BASE,o),meta:G(b.TAG_NAMES.META,r),link:G(b.TAG_NAMES.LINK,a),script:G(b.TAG_NAMES.SCRIPT,i),noscript:G(b.TAG_NAMES.NOSCRIPT,s),style:G(b.TAG_NAMES.STYLE,l)}},H=function(e){var t=function(t){function n(){return r(this,n),a(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,t),l(n,[{key:"shouldComponentUpdate",value:function(e){return!(0,y.default)(this.props,e)}},{key:"render",value:function(){return d.default.createElement(e,this.props)}}],[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(d.default.Component);return t.propTypes={htmlAttributes:d.default.PropTypes.object,title:d.default.PropTypes.string,defaultTitle:d.default.PropTypes.string,titleTemplate:d.default.PropTypes.string,base:d.default.PropTypes.object,meta:d.default.PropTypes.arrayOf(d.default.PropTypes.object),link:d.default.PropTypes.arrayOf(d.default.PropTypes.object),script:d.default.PropTypes.arrayOf(d.default.PropTypes.object),noscript:d.default.PropTypes.arrayOf(d.default.PropTypes.object),style:d.default.PropTypes.arrayOf(d.default.PropTypes.object),onChangeClientState:d.default.PropTypes.func},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=L({htmlAttributes:[],title:"",baseTag:[],metaTags:[],linkTags:[],scriptTags:[],noscriptTags:[],styleTags:[]})),t},t},U=function(e){return{htmlAttributes:A(e),title:P(e),baseTag:O([b.TAG_PROPERTIES.HREF],e),metaTags:M(b.TAG_NAMES.META,[b.TAG_PROPERTIES.NAME,b.TAG_PROPERTIES.CHARSET,b.TAG_PROPERTIES.HTTPEQUIV,b.TAG_PROPERTIES.PROPERTY],e),linkTags:M(b.TAG_NAMES.LINK,[b.TAG_PROPERTIES.REL,b.TAG_PROPERTIES.HREF],e),scriptTags:M(b.TAG_NAMES.SCRIPT,[b.TAG_PROPERTIES.SRC,b.TAG_PROPERTIES.INNER_HTML],e),noscriptTags:M(b.TAG_NAMES.NOSCRIPT,[b.TAG_PROPERTIES.INNER_HTML],e),styleTags:M(b.TAG_NAMES.STYLE,[b.TAG_PROPERTIES.CSS_TEXT],e),onChangeClientState:j(e)}},$=function(e){var t=e.htmlAttributes,n=e.title,o=e.baseTag,r=e.metaTags,a=e.linkTags,i=e.scriptTags,s=e.noscriptTags,l=e.styleTags,u=e.onChangeClientState;x(t),w(n);var c={baseTag:C(b.TAG_NAMES.BASE,o),metaTags:C(b.TAG_NAMES.META,r),linkTags:C(b.TAG_NAMES.LINK,a),scriptTags:C(b.TAG_NAMES.SCRIPT,i),noscriptTags:C(b.TAG_NAMES.NOSCRIPT,s),styleTags:C(b.TAG_NAMES.STYLE,l)},d={},f={};Object.keys(c).forEach(function(e){var t=c[e],n=t.newTags,o=t.oldTags;n.length&&(d[e]=n),o.length&&(f[e]=c[e].oldTags)}),u(e,d,f)},B=(0,p.default)(U,$,L);t.default=H(B(T.default)),e.exports=t.default},"./node_modules/react-helmet/lib/HelmetConstants.js":function(e,t){t.__esModule=!0;t.TAG_NAMES={HTML:"htmlAttributes",TITLE:"title",BASE:"base",META:"meta",LINK:"link",SCRIPT:"script",NOSCRIPT:"noscript",STYLE:"style"},t.TAG_PROPERTIES={NAME:"name",CHARSET:"charset",HTTPEQUIV:"http-equiv",REL:"rel",HREF:"href",PROPERTY:"property",SRC:"src",INNER_HTML:"innerHTML",CSS_TEXT:"cssText"},t.REACT_TAG_MAP={charset:"charSet","http-equiv":"httpEquiv"}},"./node_modules/react-helmet/lib/PlainComponent.js":function(e,t,n){function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n("./node_modules/react/react.js"),u=o(l),c=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),s(t,[{key:"render",value:function(){return null}}]),t}(u.default.Component);t.default=c,e.exports=t.default},"./node_modules/react-side-effect/lib/index.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n("./node_modules/react/react.js"),l=o(s),u=n("./node_modules/react-side-effect/node_modules/fbjs/lib/ExecutionEnvironment.js"),c=o(u),d=n("./node_modules/react-side-effect/node_modules/fbjs/lib/shallowEqual.js"),f=o(d);e.exports=function(e,t,n){function o(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(u){function d(){m=e(p.map(function(e){return e.props})),y.canUseDOM?t(m):n&&(m=n(m))}if("function"!=typeof u)throw new Error("Expected WrappedComponent to be a React component.");var p=[],m=void 0,y=function(e){function t(){r(this,t),e.apply(this,arguments)}return a(t,e),t.peek=function(){return m},t.rewind=function(){if(t.canUseDOM)throw new Error("You may ony call rewind() on the server. Call peek() to read the current state.");var e=m;return m=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!f.default(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),d()},t.prototype.componentDidUpdate=function(){d()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),d()},t.prototype.render=function(){return l.default.createElement(u,this.props)},i(t,null,[{key:"displayName",value:"SideEffect("+o(u)+")",enumerable:!0},{key:"canUseDOM",value:c.default.canUseDOM,enumerable:!0}]),t}(s.Component);return y}}},"./node_modules/react-side-effect/node_modules/fbjs/lib/ExecutionEnvironment.js":function(e,t,n){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),r={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen,isInWorker:!o};e.exports=r},"./node_modules/react-side-effect/node_modules/fbjs/lib/shallowEqual.js":function(e,t,n){"use strict";function o(e,t){if(e===t)return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(var a=r.bind(t),i=0;i<n.length;i++)if(!a(n[i])||e[n[i]]!==t[n[i]])return!1;return!0}var r=Object.prototype.hasOwnProperty;e.exports=o}});