webpackJsonp([114,209],{

/***/ 1003:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "Tree selection control."], ["h2", "When To Use"], ["p", ["code", "TreeSelect"], " is similar to ", ["code", "Select"], ", but the values are provided in a tree like structure.\nAny data whose entries are defined in a hierarchical manner is fit to use this control. Examples of such case may include a corporate hierarchy, a directory structure, and so on."]],
	  "meta": {
	    "category": "Components",
	    "type": "Data Entry",
	    "title": "TreeSelect",
	    "filename": "components/tree-select/index.en-US.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#When-To-Use"
	  }, "When To Use"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["h3", "Tree props"], ["table", ["thead", ["tr", ["th", "Property"], ["th", "Description"], ["th", "Type"], ["th", "Default"]]], ["tbody", ["tr", ["td", "value"], ["td", "To set the current selected treeNode(s)."], ["td", ["strong", "Default:"], " String/Array", ["string"], ". ", ["strong", "With ", ["code", "labelInValue"], " set:"], " { value: String, label: React.Node }/Array<{ value, label }>. ", ["strong", "With ", ["code", "treeCheckStrictly"], " set(", ["code", "halfChecked"], " is set to ", ["code", "false"], "):"], " { value: String, label: React.Node, halfChecked }/Array<{ value, label, halfChecked }>."], ["td", "-"]], ["tr", ["td", "labelInValue"], ["td", "Determine whether to put ", ["code", "label"], " into ", ["code", "value"], ", the type of ", ["code", "value"], " as specified in the above"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "defaultValue"], ["td", "To set the initial selected treeNode(s)."], ["td", "String/Array", ["string"]], ["td", "-"]], ["tr", ["td", "multiple"], ["td", "Support multiple or not, will be ", ["code", "true"], " when enable ", ["code", "treeCheckable"], "."], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "onSelect"], ["td", "A callback function, can be executed when you select a treeNode."], ["td", "function(value, node, extra)"], ["td", "-"]], ["tr", ["td", "onChange"], ["td", "A callback function, can be executed when selected treeNodes or input value change"], ["td", "function(value, label, extra)"], ["td", "-"]], ["tr", ["td", "allowClear"], ["td", "Whether allow clear"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "onSearch"], ["td", "A callback function, can be executed when the search input changes."], ["td", "function(value: String)"], ["td", "-"]], ["tr", ["td", "placeholder"], ["td", "Placeholder of the select input"], ["td", "String"], ["td", "-"]], ["tr", ["td", "searchPlaceholder"], ["td", "Placeholder of the search input"], ["td", "String"], ["td", "-"]], ["tr", ["td", "dropdownStyle"], ["td", "To set the style of the dropdown menu"], ["td", "Object"], ["td", "-"]], ["tr", ["td", "dropdownMatchSelectWidth"], ["td", "Determine whether the dropdown menu and the select input are the same width"], ["td", "Boolean"], ["td", "-"]], ["tr", ["td", "size"], ["td", "To set the size of the select input, options: ", ["code", "large"], " ", ["code", "small"]], ["td", "String"], ["td", "default"]], ["tr", ["td", "showSearch"], ["td", "Whether to display a search input in the dropdown menu(valid only in the single mode)"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "disabled"], ["td", "Disabled or not"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "showCheckedStrategy"], ["td", ["strong", "Default:"], " just show child nodes. ", ["strong", ["code", "TreeSelect.SHOW_ALL"], ":"], " show all checked treeNodes (include parent treeNode). ", ["strong", ["code", "TreeSelect.SHOW_PARENT"], ":"], " show checked treeNodes (just show parent treeNode)."], ["td", "enum{TreeSelect.SHOW_ALL, TreeSelect.SHOW_PARENT, TreeSelect.SHOW_CHILD }"], ["td", "TreeSelect.SHOW_CHILD"]], ["tr", ["td", "treeDefaultExpandAll"], ["td", "Whether to expand all treeNodes by default"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "treeCheckable"], ["td", "Whether to show checkbox on the treeNodes"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "treeCheckStrictly"], ["td", "Whether to check nodes precisely(in the ", ["code", "checkable"], " mode), means parent and child nodes are not associated"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "filterTreeNode"], ["td", "Whether to filter treeNodes by input value. The value of ", ["code", "treeNodeFilterProp"], " is used for filtering by default."], ["td", "Boolean/Function(inputValue: string, treeNode: TreeNode) (should return Boolean)"], ["td", "Function"]], ["tr", ["td", "treeNodeFilterProp"], ["td", "Will be used for filtering if ", ["code", "filterTreeNode"], " returns true"], ["td", "String"], ["td", "'value'"]], ["tr", ["td", "treeNodeLabelProp"], ["td", "Will render as content of select"], ["td", "String"], ["td", "'title'"]], ["tr", ["td", "treeData"], ["td", "Data of the treeNodes, manual construction work is no longer needed if this property has been set(ensure the Uniqueness of each value)"], ["td", "array<{ value, label, children, ", "[disabled, selectable]", " }>"], ["td", "[]"]], ["tr", ["td", "treeDataSimpleMode"], ["td", "Enable simple mode of treeData.(treeData should like this: ", "[{id:1, pid:0, value:'1', label:\"test1\",...},...]", ", pId is parent node's id)"], ["td", "Boolean/Object{ id: 'id', pId: 'pId', rootPId: null }"], ["td", "false"]], ["tr", ["td", "loadData"], ["td", "Load data asynchronously."], ["td", "function(node)"], ["td", "-"]], ["tr", ["td", "getPopupContainer"], ["td", "To set the container of the dropdown menu. The default is to create a ", ["code", "div"], " element in ", ["code", "body"], ", you can reset it to the scrolling area and make a relative reposition. ", ["a", {
	    "title": null,
	    "href": "http://codepen.io/anon/pen/xVBOVQ?editors=001"
	  }, "example"]], ["td", "Function(triggerNode)"], ["td", "() => document.body"]]]], ["h3", "TreeNode props"], ["blockquote", ["p", "We recommend you to use ", ["code", "treeData"], " rather than ", ["code", "TreeNode"], ", to avoid the trouble of manual construction."]], ["table", ["thead", ["tr", ["th", "Property"], ["th", "Description"], ["th", "Type"], ["th", "Default"]]], ["tbody", ["tr", ["td", "disabled"], ["td", "Disabled or not"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "key"], ["td", "Required property, should be unique in the tree"], ["td", "String"], ["td", "-"]], ["tr", ["td", "value"], ["td", "Will be treated as ", ["code", "treeNodeFilterProp"], " by default, should be unique in the tree"], ["td", "String"], ["td", "-"]], ["tr", ["td", "title"], ["td", "Content showed on the treeNodes"], ["td", "String/element"], ["td", "'---'"]], ["tr", ["td", "isLeaf"], ["td", "Leaf node or not"], ["td", "Boolean"], ["td", "false"]]]]]
	};

/***/ }

});