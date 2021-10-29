(window["aioseopjsonp"]=window["aioseopjsonp"]||[]).push([["redirects-pro-partials-ImportOthers-vue"],{"06e3":function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("core-card",{staticClass:"aioseo-redirects-import-others",attrs:{id:"aioseo-redirects-import-others",slug:"importOtherPluginsRedirects",toggles:!1,"no-slide":"","header-text":t.strings.importRedirectsFromOtherPlugins},scopedSlots:t._u([{key:"header-icon",fn:function(){return[i("svg-download")]},proxy:!0}])},[i("div",{staticClass:"aioseo-section-description"},[t._v(" "+t._s(t.strings.importOthersDescription)+" ")]),t.importSuccess?i("core-alert",{staticClass:"import-success",attrs:{type:"green"}},[t._v(" "+t._s(t.importSuccessful)+" ")]):t._e(),t.importError?i("core-alert",{staticClass:"import-error",attrs:{type:"red"}},[t._v(" "+t._s(t.importErrorMessage)+" ")]):t._e(),i("base-select",{attrs:{size:"medium",options:t.plugins,placeholder:t.strings.selectPlugin},scopedSlots:t._u([{key:"option",fn:function(s){var e=s.option;return[i("div",{staticClass:"import-plugin-label"},[i("span",{staticClass:"plugin-label"},[t._v(t._s(e.label))]),e.$isDisabled?i("span",{staticClass:"plugin-status"},[t._v(t._s(t.strings.notInstalled))]):t._e()])]}}]),model:{value:t.plugin,callback:function(s){t.plugin=s},expression:"plugin"}}),i("base-button",{staticClass:"import",attrs:{type:"blue",size:"medium",disabled:!t.plugin,loading:t.loading},on:{click:t.processImportPlugin}},[t._v(" "+t._s(t.strings.import)+" ")])],1)},r=[],o=i("5530"),n=(i("159b"),i("b0c0"),i("4de4"),i("b64b"),i("2f62")),l={data:function(){return{importSuccess:!1,importError:!1,options:{},plugin:null,loading:!1,strings:{importRedirectsFromOtherPlugins:this.$t.__("Import Redirects From Other Plugins",this.$td),importOthersDescription:this.$t.sprintf(this.$t.__("Choose a plugin to import redirects directly into %1$s.",this.$td),"AIOSEO"),selectPlugin:this.$t.__("Select a plugin...",this.$td),import:this.$t.__("Import",this.$td),allRedirects:this.$t.__("All Redirects",this.$td),notInstalled:this.$t.__("not installed",this.$td)}}},watch:{plugin:function(){this.importSuccess=!1,this.importError=!1,this.options={}}},computed:{plugins:function(){var t=[];return this.$aioseo.redirects.importers.forEach((function(s){t.push({value:s.slug,label:s.name,canImport:s.canImport,version:s.version,$isDisabled:!s.installed})})),t},importSuccessful:function(){return this.$t.sprintf(this.$t.__("%1$s was successfully imported!",this.$td),this.plugin.label)},importErrorMessage:function(){return this.$t.sprintf(this.$t.__("An error occurred while importing %1$s. Please try again.",this.$td),this.plugin.label)}},methods:Object(o["a"])(Object(o["a"])({},Object(n["b"])("redirects",["importPlugins"])),{},{processImportPlugin:function(){var t=this;this.importSuccess=!1,this.importError=!1,this.loading=!0;var s=[];this.options.all?this.settings.filter((function(t){return"all"!==t.value})).forEach((function(t){s.push(t.value)})):Object.keys(this.options).forEach((function(i){t.options[i]&&s.push(i)})),this.importPlugins([{plugin:this.plugin.value,settings:s}]).then((function(){t.loading=!1,t.importSuccess=!0,t.options={}})).catch((function(){t.loading=!1,t.importError=!0,t.options={}}))},invalidVersion:function(t){return this.$t.sprintf(this.$t.__("We do not support importing from the currently installed version of %1$s (%2$s). Please upgrade to the latest version and try again.",this.$td),t.label,t.version)}})},a=l,c=(i("38ed"),i("2877")),p=Object(c["a"])(a,e,r,!1,null,null,null);s["default"]=p.exports},"38ed":function(t,s,i){"use strict";i("6048")},6048:function(t,s,i){}}]);