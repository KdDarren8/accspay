(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b5d02f76"],{"593b":function(e,t,n){"use strict";n("60fe")},"60fe":function(e,t,n){},bc34:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"record"},[n("h3",{staticClass:"component-title"},[e._v("交易記錄")]),n("div",{staticClass:"order-container"},[n("el-form",{ref:"formInline",staticClass:"demo-form-inline",attrs:{inline:!0,"hide-required-asterisk":!0,model:e.formInline,size:"medium",rules:e.rules}},[n("el-form-item",{attrs:{label:"交易單號",prop:"code"}},[n("el-input",{style:{width:"300px"},attrs:{placeholder:"請輸入交易單號"},model:{value:e.formInline.code,callback:function(t){e.$set(e.formInline,"code",t)},expression:"formInline.code"}})],1),n("el-form-item",{attrs:{label:"業務單號",prop:"bizCode"}},[n("el-input",{style:{width:"300px"},attrs:{placeholder:"請輸入業務單號"},model:{value:e.formInline.bizCode,callback:function(t){e.$set(e.formInline,"bizCode",t)},expression:"formInline.bizCode"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){return e.inquire("formInline")}}},[e._v("搜索")]),n("el-button",{on:{click:function(t){return e.reset("formInline")}}},[e._v("重置")])],1)],1),n("el-divider")],1),n("div",{staticClass:"tableContainer"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{stripe:!0,"element-loading-text":"加載中...",data:e.tableDataRecordList,align:"center","header-cell-style":e.headStyle,"cell-style":{textAlign:"center"}}},[n("el-table-column",{attrs:{prop:"code",label:"交易單號",width:"180"}}),n("el-table-column",{attrs:{prop:"changeAmount",label:"變動金額",width:"100"}}),n("el-table-column",{attrs:{prop:"beforeChangeAmount",label:"變動前金額",width:"100"}}),n("el-table-column",{attrs:{prop:"afterChangeAmount",label:"變動後金額",width:"100"}}),n("el-table-column",{attrs:{prop:"remark",label:"備註",width:"140"}}),n("el-table-column",{attrs:{prop:"type",label:"交易類型",width:"120","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[e._l(e.way,(function(a){return[n("span",{directives:[{name:"show",rawName:"v-show",value:t.row.type==a.dictValue,expression:"scope.row.type == item.dictValue"}],key:a.id},[e._v(e._s(a.dictLabel))])]}))]}}])}),n("el-table-column",{attrs:{prop:"bizType",label:"業務類型",width:"120","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[e._l(e.businessType,(function(a){return[n("span",{directives:[{name:"show",rawName:"v-show",value:t.row.bizType==a.dictValue,expression:"scope.row.bizType == item.dictValue"}],key:a.id},[e._v(e._s(a.dictLabel))])]}))]}}])}),n("el-table-column",{attrs:{prop:"createTime",label:"交易時間",width:"160"}}),n("el-table-column",{attrs:{prop:"bizCode",label:"業務單號",width:"180"}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"paginationClass"},[n("el-pagination",{ref:"pagination",attrs:{background:"",layout:"prev, pager, next, jumper, slot","prev-text":"上一頁","next-text":"下一頁",total:e.total,align:"center","page-size":e.pageSize},on:{"current-change":e.currentChange}},[n("el-button",{attrs:{size:"small"},on:{click:e.goPage}},[e._v("確定")])],1)],1)],1)])},r=[],i=n("1da1"),o=(n("96cf"),n("b775")),l=n("4360"),s=function(e){return Object(o["a"])({method:"GET",url:"/api/mall/walletRecord/list",params:e,headers:{Authorization:"Bearer ".concat(l["a"].state.user)}})},c=function(e){return Object(o["a"])({method:"GET",url:"system/dict/data/type/"+e,headers:{Authorization:"Bearer ".concat(l["a"].state.user)}})},u={created:function(){this.getQueryTransactionRecordsList(),this.getRansactionType(),this.getBusinessType()},data:function(){return{loading:!0,isShow:!1,way:[],businessType:[],headStyle:{textAlign:"center",background:"#F66F45",color:"#fff",fontWeight:"bold"},formInline:{bizCode:"",code:""},rules:{bizCode:[{required:!0,message:"請輸入業務單號",trigger:"blur"}],code:[{required:!0,message:"請輸入賬單號",trigger:"blur"}]},total:null,pageSize:7,currentPage:1,tableDataRecordList:[]}},methods:{getQueryTransactionRecordsList:function(){var e=this;s({pageNum:this.currentPage,pageSize:this.pageSize}).then((function(t){console.log(t,"交易列表"),e.total=t.data.total,e.tableDataRecordList=t.data.rows,e.loading=!1,e.isShow=!0}))},currentChange:function(e){console.log(e,"abc"),this.currentPage=e,this.getQueryTransactionRecordsList()},getRansactionType:function(){var e=this;c("product_wallet_transfer_type").then((function(t){e.way=t.data.data}))},getBusinessType:function(){var e=this;c("mall_biz_type").then((function(t){e.businessType=t.data.data}))},goPage:function(){var e=this;this.$nextTick((function(){console.log(e.$refs.pagination.internalCurrentPage),e.currentPage=e.$refs.pagination.internalCurrentPage}))},inquire:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.$nextTick((function(){t.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;s(t.formInline).then((function(e){console.log(e,"查詢交易列表"),t.currentPage=1,t.tableDataRecordList=e.data.rows,t.total=e.data.total}))}))}));case 1:case"end":return n.stop()}}),n)})))()},handleClick:function(e){console.log(e)},reset:function(e){var t=this;this.$nextTick((function(){t.$refs[e].resetFields(),t.getQueryTransactionRecordsList()}))}}},d=u,p=(n("593b"),n("2877")),f=Object(p["a"])(d,a,r,!1,null,"1b45935d",null);t["default"]=f.exports}}]);