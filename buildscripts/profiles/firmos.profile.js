dependencies = {
	action:"release",
	mini:"true",
	cssOptimize: "comments",
    releaseDir: "../../../js",

    basePath: "../..",
    packages:[{
      name: "dojo",
      location: "dojo"
    },{
      name: "dijit",
      location: "dijit"
    },{
      name: "dojox",
      location: "dojox"
    }],
    layers: [
		{
			name: "dojo.js",
			dependencies: [
			   "dojo/_base/array","dojo/dom-geometry","dojo/aspect","dojo/i18n",
			   "dojo/selector/acme","dojo/selector/lite",
               "dojo/dnd/Target","dojo/dnd/AutoSource","dojo/fx/Toggler",
               "dgrid.OnDemandGrid","dgrid/Grid","dgrid/Selection","dgrid/selector","dgrid/tree",
               "dgrid/extensions/ColumnResizer","dgrid/extensions/ColumnHider","dgrid/extensions/ColumnReorder","dgrid/extensions/DijitRegistry","dgrid/extensions/DnD",
               "dojox/form/CheckedMultiSelect","dojox/form/FileInput","dojox/form/Uploader","dojox/form/uploader/FileList","dojox/validate/web","dojox/validate/check","dojox/widget/Calendar",
               "dojox/gfx","dojox/gfx/path","dojox/gfx/svg","dojox/gfx/fx","dojox/gfx/utils","dojox/gfx/Moveable","dojox/gesture/tap","dojox/gesture/swipe",
               "dojox/html/styles","dojo/dom-construct",
               "dojox/charting/widget/Chart","dojox/charting/widget/Legend","dojox/charting/axis2d/Default","dojox/charting/plot2d/Lines","dojox/charting/plot2d/Pie","dojox/charting/plot2d/ClusteredColumns",
               "dojox/charting/Theme","dojox/color/_base","dojo/colors","dojox/charting/themes/common",
               "dijit/_base","dijit/ToolbarSeparator","dijit/TooltipDialog","dijit/form/RadioButton","dijit/CheckedMenuItem","dijit/PopupMenuItem",
               "dijit/Menu","dijit/Dialog","dijit/Tree","dijit/Toolbar","dijit/ProgressBar","dijit/Tooltip",
               "dijit/form/TextBox","dijit/form/DateTextBox","dijit/form/Form","dijit/form/FilteringSelect","dijit/form/Textarea","dijit/form/NumberTextBox","dijit/form/ComboBox","dijit/form/TimeTextBox","dijit/form/Select","dijit/form/NumberSpinner","dijit/form/HorizontalSlider",
               "dijit/layout/ContentPane","dijit/layout/TabContainer","dijit/layout/BorderContainer","dijit/layout/AccordionContainer","dijit/layout/AccordionPane",
               "dojo/io/iframe","xstyle/core/load-css"
			]
		}
	],
    prefixes: [
	  [ "dijit", "../dijit" ],
	  [ "dojox", "../dojox" ],
	  [ "dgrid", "../dgrid" ],
	  [ "put-selector", "../put-selector" ],
	  [ "xstyle", "../xstyle" ],
	]

}
