module.exports = {
    "DataManage": {
        "FlowConfig": {
            "List": {
                "listColumns": [{
                    "label": "工作流名称",
                    "prop": "list_prop_1"
                }, {
                    "label": "编号",
                    "prop": "list_prop_2"
                }, {
                    "label": "工作流类型",
                    "prop": "list_prop_3"
                }, {
                    "label": "创建时间",
                    "prop": "list_prop_4"
                }, {
                    "label": "说明",
                    "prop": "list_prop_5"
                }, {
                    "label": "操作",
                    "width": 200,
                    "render": "(row, column, index) => {return (<span><Button size=\"small\" type=\"text\" onClick={this.handleView.bind(this, index)}>查看</Button><Button size=\"small\" type=\"text\" onClick={this.handleDel.bind(this, index)}>删除</Button></span>);}"
                }],
                "buttonProps": [{
                    "label": "查看",
                    "prop": "view"
                }, {
                    "label": "删除",
                    "prop": "del"
                }],
                "formColumns": [],
                "isfinish": 1
            },
            "Edit": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [{
                    "label": "工作流名称",
                    "prop": "forms_prop_1",
                    "type": "input"
                }, {
                    "label": "工作流类型",
                    "prop": "forms_prop_2",
                    "type": "select"
                }, {
                    "label": "说明",
                    "prop": "forms_prop_3",
                    "type": "textarea"
                }],
                "isfinish": 0
            },
            "View": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [],
                "isfinish": 0
            }
        },
        "Schedule": {
            "List": {
                "listColumns": [{
                    "label": "任务名称",
                    "prop": "list_prop_7"
                }, {
                    "label": "编号",
                    "prop": "list_prop_2"
                }, {
                    "label": "创建时间",
                    "prop": "list_prop_4"
                }, {
                    "label": "运行策略",
                    "prop": "list_prop_8"
                }, {
                    "label": "运行状态",
                    "prop": "list_prop_9"
                }, {
                    "label": "说明",
                    "prop": "list_prop_5"
                }, {
                    "label": "操作",
                    "width": 200,
                    "render": "(row, column, index) => {return (<span><Button size=\"small\" type=\"text\" onClick={this.handleView.bind(this, index)}>详情</Button><Button size=\"small\" type=\"text\" onClick={this.handleEdit.bind(this, index)}>编辑</Button><Button size=\"small\" type=\"text\" onClick={this.handleDel.bind(this, index)}>删除</Button></span>);}"
                }],
                "buttonProps": [{
                    "label": "详情",
                    "prop": "view"
                }, {
                    "label": "编辑",
                    "prop": "edit"
                }, {
                    "label": "删除",
                    "prop": "del"
                }, {
                    "label": "停止运行",
                    "prop": "XXX"
                }, {
                    "label": "启动运行",
                    "prop": "XXX"
                }],
                "formColumns": [{
                    "label": "任务名称",
                    "prop": "forms_prop_4",
                    "type": "input"
                }, {
                    "label": "运行方式",
                    "prop": "forms_prop_5",
                    "type": "select"
                }, {
                    "label": "运行状态",
                    "prop": "forms_prop_6",
                    "type": "select"
                }],
                "isfinish": 0
            },
            "Add": {
                "listColumns": [{
                    "label": "工作流名称",
                    "prop": "list_prop_1"
                }, {
                    "label": "编号",
                    "prop": "list_prop_2"
                }, {
                    "label": "创建时间",
                    "prop": "list_prop_4"
                }, {
                    "label": "说明",
                    "prop": "list_prop_5"
                }, {
                    "label": "checkbox",
                    "prop": "list_prop_10"
                }],
                "buttonProps": [],
                "formColumns": [{
                    "label": "任务名称",
                    "prop": "forms_prop_4",
                    "type": "input"
                }, {
                    "label": "任务说明",
                    "prop": "forms_prop_7",
                    "type": "input"
                }, {
                    "label": "运行策略",
                    "prop": "forms_prop_8",
                    "type": "complex"
                }],
                "isfinish": 0
            },
            "View": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [{
                    "label": "任务名称",
                    "prop": "forms_prop_4",
                    "type": "input"
                }, {
                    "label": "运行方式",
                    "prop": "forms_prop_5",
                    "type": "select"
                }, {
                    "label": "返回码",
                    "prop": "forms_prop_9",
                    "type": "select"
                }],
                "isfinish": 0
            }
        },
        "TaskMonitor": {
            "List": {
                "listColumns": [{
                    "label": "序号",
                    "prop": "list_prop_11"
                }, {
                    "label": "任务名称",
                    "prop": "list_prop_7"
                }, {
                    "label": "运行方式",
                    "prop": "list_prop_12"
                }, {
                    "label": "运行状态",
                    "prop": "list_prop_9"
                }, {
                    "label": "开始时间",
                    "prop": "list_prop_13"
                }, {
                    "label": "用时",
                    "prop": "list_prop_14"
                }],
                "buttonProps": [],
                "formColumns": [],
                "isfinish": 0
            }
        }
    },
    "MetaDataManage": {
        "MetaData": {
            "List": {
                "listColumns": [{
                    "label": "序号",
                    "prop": "list_prop_11"
                }, {
                    "label": "数据对象",
                    "prop": "list_prop_15"
                }, {
                    "label": "数据集合",
                    "prop": "list_prop_16"
                }, {
                    "label": "数据维度",
                    "prop": "list_prop_17"
                }, {
                    "label": "数据集合类型",
                    "prop": "list_prop_18"
                }, {
                    "label": "存储大小",
                    "prop": "list_prop_19"
                }, {
                    "label": "授权信息",
                    "prop": "list_prop_20"
                }, {
                    "label": "创建时间",
                    "prop": "list_prop_4"
                }, {
                    "label": "操作",
                    "width": 200,
                    "render": "(row, column, index) => {return (<span><Button size=\"small\" type=\"text\" onClick={this.handleView.bind(this, index)}>详情</Button></span>);}"
                }],
                "buttonProps": [{
                    "label": "详情",
                    "prop": "view"
                }],
                "formColumns": [{
                    "label": "数据集合",
                    "prop": "forms_prop_10",
                    "type": "input"
                }, {
                    "label": "数据维度",
                    "prop": "forms_prop_11",
                    "type": "select"
                }, {
                    "label": "数据对象",
                    "prop": "forms_prop_12",
                    "type": "select"
                }],
                "isfinish": 1
            },
            "View": {
                "listColumns": [{
                    "label": "序号",
                    "prop": "list_prop_11"
                }, {
                    "label": "数据对象",
                    "prop": "list_prop_15"
                }, {
                    "label": "数据对象类型",
                    "prop": "list_prop_21"
                }, {
                    "label": "长度",
                    "prop": "list_prop_22"
                }, {
                    "label": "描述",
                    "prop": "list_prop_23"
                }],
                "buttonProps": [],
                "formColumns": [{
                    "label": "数据对象名称",
                    "prop": "forms_prop_13",
                    "type": "input"
                }, {
                    "label": "创建时间",
                    "prop": "forms_prop_14",
                    "type": "input"
                }, {
                    "label": "数据维度",
                    "prop": "forms_prop_11",
                    "type": "input"
                }, {
                    "label": "描述",
                    "prop": "forms_prop_15",
                    "type": "input"
                }, {
                    "label": "总存储量",
                    "prop": "forms_prop_16",
                    "type": "input"
                }, {
                    "label": "昨日新增",
                    "prop": "forms_prop_17",
                    "type": "input"
                }, {
                    "label": "授权日期",
                    "prop": "forms_prop_18",
                    "type": "input"
                }],
                "isfinish": 0
            },
            "Relationship": {
                "listColumns": [{
                    "label": "序号",
                    "prop": "list_prop_11"
                }, {
                    "label": "数据字段",
                    "prop": "list_prop_24"
                }, {
                    "label": "类目",
                    "prop": "list_prop_25"
                }, {
                    "label": "长度",
                    "prop": "list_prop_22"
                }, {
                    "label": "描述",
                    "prop": "list_prop_23"
                }],
                "buttonProps": [],
                "formColumns": [],
                "isfinish": 0
            }
        },
        "Datasource": {
            "List": {
                "listColumns": [{
                    "label": "序号",
                    "prop": "list_prop_11"
                }, {
                    "label": "数据项",
                    "prop": "list_prop_26"
                }, {
                    "label": "数据项类型",
                    "prop": "list_prop_27"
                }, {
                    "label": "长度",
                    "prop": "list_prop_22"
                }, {
                    "label": "描述",
                    "prop": "list_prop_23"
                }],
                "buttonProps": [{
                    "label": "保存",
                    "prop": "XXX"
                }, {
                    "label": "发布",
                    "prop": "XXX"
                }, {
                    "label": "撤销发布",
                    "prop": "cancel"
                }],
                "formColumns": [],
                "isfinish": 0
            },
            "Add": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [],
                "isfinish": 0
            },
            "View": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [],
                "isfinish": 0
            },
            "Edit": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [],
                "isfinish": 0
            }
        }
    },
    "StandardManage": {
        "DataStandard": {
            "List": {
                "listColumns": [{
                    "label": "序号",
                    "prop": "list_prop_11"
                }, {
                    "label": "业务编号",
                    "prop": "list_prop_28"
                }, {
                    "label": "业务名称",
                    "prop": "list_prop_29"
                }, {
                    "label": "数据类型",
                    "prop": "list_prop_30"
                }, {
                    "label": "创建时间",
                    "prop": "list_prop_4"
                }, {
                    "label": "操作",
                    "width": 200,
                    "render": "(row, column, index) => {return (<span><Button size=\"small\" type=\"text\" onClick={this.handleView.bind(this, index)}>详情</Button><Button size=\"small\" type=\"text\" onClick={this.handleEdit.bind(this, index)}>编辑</Button><Button size=\"small\" type=\"text\" onClick={this.handleDel.bind(this, index)}>删除</Button></span>);}"
                }],
                "buttonProps": [{
                    "label": "详情",
                    "prop": "view"
                }, {
                    "label": "编辑",
                    "prop": "edit"
                }, {
                    "label": "删除",
                    "prop": "del"
                }],
                "formColumns": [{
                    "label": "业务名称",
                    "prop": "forms_prop_19",
                    "type": "select"
                }, {
                    "label": "创建时间",
                    "prop": "forms_prop_14",
                    "type": "dataArr"
                }],
                "isfinish": 0
            },
            "Add": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [{
                    "label": "业务名称",
                    "prop": "forms_prop_19",
                    "type": "input"
                }, {
                    "label": "业务含义",
                    "prop": "forms_prop_20",
                    "type": "input"
                }, {
                    "label": "是否有度量单位",
                    "prop": "forms_prop_21",
                    "type": "select"
                }, {
                    "label": "t标准设定",
                    "prop": "forms_prop_22",
                    "type": "input"
                }, {
                    "label": "数据类型",
                    "prop": "forms_prop_23",
                    "type": "select"
                }, {
                    "label": "非空",
                    "prop": "forms_prop_24",
                    "type": "select"
                }, {
                    "label": "唯一",
                    "prop": "forms_prop_25",
                    "type": "select"
                }],
                "isfinish": 0
            },
            "View": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [],
                "isfinish": 0
            },
            "Edit": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [],
                "isfinish": 0
            }
        },
        "StandardCode": {
            "List": {
                "listColumns": [{
                    "label": "序号",
                    "prop": "list_prop_11"
                }, {
                    "label": "代码编号",
                    "prop": "list_prop_31"
                }, {
                    "label": "代码名称",
                    "prop": "list_prop_32"
                }, {
                    "label": "代码描述",
                    "prop": "list_prop_33"
                }, {
                    "label": "创建时间",
                    "prop": "list_prop_4"
                }, {
                    "label": "操作",
                    "width": 200,
                    "render": "(row, column, index) => {return (<span><Button size=\"small\" type=\"text\" onClick={this.handleView.bind(this, index)}>详情</Button><Button size=\"small\" type=\"text\" onClick={this.handleEdit.bind(this, index)}>编辑</Button><Button size=\"small\" type=\"text\" onClick={this.handleDel.bind(this, index)}>删除</Button></span>);}"
                }],
                "buttonProps": [{
                    "label": "详情",
                    "prop": "view"
                }, {
                    "label": "编辑",
                    "prop": "edit"
                }, {
                    "label": "删除",
                    "prop": "del"
                }],
                "formColumns": [{
                    "label": "代码编号",
                    "prop": "forms_prop_26",
                    "type": "select"
                }, {
                    "label": "代码名称",
                    "prop": "forms_prop_27",
                    "type": "select"
                }],
                "isfinish": 0
            },
            "Add": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [{
                    "label": "代码编号",
                    "prop": "forms_prop_26",
                    "type": "input"
                }, {
                    "label": "代码名称",
                    "prop": "forms_prop_27",
                    "type": "input"
                }, {
                    "label": "代码详情",
                    "prop": "forms_prop_28",
                    "type": "textarea"
                }, {
                    "label": "代码描述",
                    "prop": "forms_prop_29",
                    "type": "textarea"
                }],
                "isfinish": 0
            },
            "View": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [],
                "isfinish": 0
            },
            "Edit": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [],
                "isfinish": 0
            }
        },
        "RefData": {
            "List": {
                "listColumns": [{
                    "label": "序号",
                    "prop": "list_prop_11"
                }, {
                    "label": "业务编号",
                    "prop": "list_prop_28"
                }, {
                    "label": "业务名称",
                    "prop": "list_prop_29"
                }, {
                    "label": "业务含义",
                    "prop": "list_prop_34"
                }, {
                    "label": "创建时间",
                    "prop": "list_prop_4"
                }, {
                    "label": "操作",
                    "width": 200,
                    "render": "(row, column, index) => {return (<span><Button size=\"small\" type=\"text\" onClick={this.handleView.bind(this, index)}>详情</Button><Button size=\"small\" type=\"text\" onClick={this.handleEdit.bind(this, index)}>编辑</Button><Button size=\"small\" type=\"text\" onClick={this.handleDel.bind(this, index)}>删除</Button></span>);}"
                }],
                "buttonProps": [{
                    "label": "详情",
                    "prop": "view"
                }, {
                    "label": "编辑",
                    "prop": "edit"
                }, {
                    "label": "删除",
                    "prop": "del"
                }],
                "formColumns": [{
                    "label": "业务编号",
                    "prop": "forms_prop_30",
                    "type": "inptu"
                }, {
                    "label": "业务名称",
                    "prop": "forms_prop_19",
                    "type": "select"
                }, {
                    "label": "创建时间",
                    "prop": "forms_prop_14",
                    "type": "date"
                }],
                "isfinish": 0
            },
            "Add": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [{
                    "label": "业务名称",
                    "prop": "forms_prop_19",
                    "type": "input"
                }, {
                    "label": "业务含义",
                    "prop": "forms_prop_20",
                    "type": "input"
                }, {
                    "label": "参考数据设定",
                    "prop": "forms_prop_31",
                    "type": "input"
                }, {
                    "label": "枚举取值",
                    "prop": "forms_prop_32",
                    "type": "input"
                }],
                "isfinish": 0
            },
            "View": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [],
                "isfinish": 0
            },
            "Edit": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [],
                "isfinish": 0
            }
        },
        "Standard": {
            "List": {
                "listColumns": [{
                    "label": "序号",
                    "prop": "list_prop_11"
                }, {
                    "label": "业务编号",
                    "prop": "list_prop_28"
                }, {
                    "label": "元素词汇",
                    "prop": "list_prop_35"
                }, {
                    "label": "业务含义",
                    "prop": "list_prop_34"
                }, {
                    "label": "创建时间",
                    "prop": "list_prop_4"
                }, {
                    "label": "操作",
                    "width": 200,
                    "render": "(row, column, index) => {return (<span><Button size=\"small\" type=\"text\" onClick={this.handleView.bind(this, index)}>详情</Button><Button size=\"small\" type=\"text\" onClick={this.handleEdit.bind(this, index)}>编辑</Button><Button size=\"small\" type=\"text\" onClick={this.handleDel.bind(this, index)}>删除</Button></span>);}"
                }],
                "buttonProps": [{
                    "label": "详情",
                    "prop": "view"
                }, {
                    "label": "编辑",
                    "prop": "edit"
                }, {
                    "label": "删除",
                    "prop": "del"
                }],
                "formColumns": [{
                    "label": "业务编号",
                    "prop": "forms_prop_30",
                    "type": "inptu"
                }, {
                    "label": "元素词汇",
                    "prop": "forms_prop_33",
                    "type": "select"
                }, {
                    "label": "创建时间",
                    "prop": "forms_prop_14",
                    "type": "date"
                }],
                "isfinish": 0
            },
            "Add": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [],
                "isfinish": 0
            },
            "View": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [],
                "isfinish": 0
            },
            "Edit": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [],
                "isfinish": 0
            }
        }
    },
    "QualityManage": {
        "DataQuality": {
            "List": {
                "listColumns": [{
                    "label": "序号",
                    "prop": "list_prop_11"
                }, {
                    "label": "数据对象",
                    "prop": "list_prop_15"
                }, {
                    "label": "数据集合",
                    "prop": "list_prop_16"
                }, {
                    "label": "数据集合类型",
                    "prop": "list_prop_18"
                }, {
                    "label": "监控类型",
                    "prop": "list_prop_36"
                }, {
                    "label": "警告方式",
                    "prop": "list_prop_37"
                }, {
                    "label": "操作",
                    "width": 200,
                    "render": "(row, column, index) => {return (<span><Button size=\"small\" type=\"text\" onClick={this.handleViewreport.bind(this, index)}>查看报告</Button><Button size=\"small\" type=\"text\" onClick={this.handleViewrule.bind(this, index)}>查看规则</Button><Button size=\"small\" type=\"text\" onClick={this.handleConfigrule.bind(this, index)}>配置规则</Button></span>);}"
                }],
                "buttonProps": [{
                    "label": "查看报告",
                    "prop": "viewReport"
                }, {
                    "label": "查看规则",
                    "prop": "viewRule"
                }, {
                    "label": "配置规则",
                    "prop": "configRule"
                }],
                "formColumns": [{
                    "label": "数据集合",
                    "prop": "forms_prop_10",
                    "type": "input"
                }, {
                    "label": "数据对象",
                    "prop": "forms_prop_12",
                    "type": "input"
                }, {
                    "label": "监控类型",
                    "prop": "forms_prop_34",
                    "type": "input"
                }],
                "isfinish": 0
            },
            "Report": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [],
                "isfinish": 0
            },
            "Rule": {
                "listColumns": [{
                    "label": "序号",
                    "prop": "list_prop_11"
                }, {
                    "label": "规则名称",
                    "prop": "list_prop_38"
                }, {
                    "label": "监控类型",
                    "prop": "list_prop_36"
                }, {
                    "label": "警告方式",
                    "prop": "list_prop_37"
                }, {
                    "label": "创建日期",
                    "prop": "list_prop_39"
                }, {
                    "label": "操作",
                    "width": 200,
                    "render": "(row, column, index) => {return (<span><Button size=\"small\" type=\"text\" onClick={this.handleView.bind(this, index)}>查看</Button><Button size=\"small\" type=\"text\" onClick={this.handleDel.bind(this, index)}>删除</Button></span>);}"
                }],
                "buttonProps": [{
                    "label": "查看",
                    "prop": "view"
                }, {
                    "label": "删除",
                    "prop": "del"
                }],
                "formColumns": [],
                "isfinish": 0
            },
            "Add": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [],
                "isfinish": 0
            },
            "View": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [],
                "isfinish": 0
            },
            "Config": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [],
                "isfinish": 0
            }
        },
        "MonitorStrategy": {
            "List": {
                "listColumns": [{
                    "label": "序号",
                    "prop": "list_prop_11"
                }, {
                    "label": "规则编号",
                    "prop": "list_prop_40"
                }, {
                    "label": "规则名称",
                    "prop": "list_prop_38"
                }, {
                    "label": "规则类型",
                    "prop": "list_prop_41"
                }, {
                    "label": "数据集类型",
                    "prop": "list_prop_42"
                }, {
                    "label": "监控类型",
                    "prop": "list_prop_36"
                }, {
                    "label": "对比对象",
                    "prop": "list_prop_43"
                }, {
                    "label": "创建时间",
                    "prop": "list_prop_4"
                }, {
                    "label": "操作",
                    "width": 200,
                    "render": "(row, column, index) => {return (<span><Button size=\"small\" type=\"text\" onClick={this.handleView.bind(this, index)}>详情</Button><Button size=\"small\" type=\"text\" onClick={this.handleEdit.bind(this, index)}>编辑</Button><Button size=\"small\" type=\"text\" onClick={this.handleDel.bind(this, index)}>删除</Button></span>);}"
                }],
                "buttonProps": [{
                    "label": "详情",
                    "prop": "view"
                }, {
                    "label": "编辑",
                    "prop": "edit"
                }, {
                    "label": "删除",
                    "prop": "del"
                }],
                "formColumns": [{
                    "label": "规则编号",
                    "prop": "forms_prop_35",
                    "type": "input"
                }, {
                    "label": "规则名称",
                    "prop": "forms_prop_36",
                    "type": "input"
                }, {
                    "label": "监控类型",
                    "prop": "forms_prop_34",
                    "type": "input"
                }],
                "isfinish": 0
            },
            "Add": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [{
                    "label": "规则名称",
                    "prop": "forms_prop_36",
                    "type": "input"
                }, {
                    "label": "数据集类型",
                    "prop": "forms_prop_37",
                    "type": "input"
                }, {
                    "label": "监控类型",
                    "prop": "forms_prop_34",
                    "type": "input"
                }, {
                    "label": "规则类型",
                    "prop": "forms_prop_38",
                    "type": "input"
                }, {
                    "label": "对比对象",
                    "prop": "forms_prop_39",
                    "type": "input"
                }, {
                    "label": "监控方式",
                    "type": "select"
                }, {
                    "label": "规则说明",
                    "prop": "forms_prop_41",
                    "type": "textarea"
                }],
                "isfinish": 0
            },
            "View": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [],
                "isfinish": 0
            },
            "Edit": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [],
                "isfinish": 0
            }
        },
        "MonitorReport": {
            "List": {
                "listColumns": [{
                    "label": "序号",
                    "prop": "list_prop_11"
                }, {
                    "label": "预警时间",
                    "prop": "list_prop_44"
                }, {
                    "label": "数据对象",
                    "prop": "list_prop_15"
                }, {
                    "label": "规则类型",
                    "prop": "list_prop_41"
                }, {
                    "label": "命中规则",
                    "prop": "list_prop_45"
                }, {
                    "label": "操作",
                    "width": 200,
                    "render": "(row, column, index) => {return (<span></span>);}"
                }],
                "buttonProps": [{
                    "label": "已处理",
                    "prop": "XXX"
                }],
                "formColumns": [{
                    "label": "预警对象",
                    "prop": "forms_prop_42",
                    "type": "input"
                }, {
                    "label": "命中规则",
                    "prop": "forms_prop_43",
                    "type": "select"
                }, {
                    "label": "当前状态",
                    "prop": "forms_prop_44",
                    "type": "select"
                }, {
                    "label": "预警时间",
                    "prop": "forms_prop_45",
                    "type": "complex"
                }],
                "isfinish": 0
            }
        }
    },
    "SafeManage": {
        "DataSafe": {
            "List": {
                "listColumns": [{
                    "label": "等级",
                    "prop": "list_prop_46"
                }, {
                    "label": "名称",
                    "prop": "list_prop_47"
                }, {
                    "label": "处理方式",
                    "prop": "list_prop_48"
                }, {
                    "label": "关联数据量",
                    "prop": "list_prop_49"
                }, {
                    "label": "创建时间",
                    "prop": "list_prop_4"
                }, {
                    "label": "操作",
                    "width": 200,
                    "render": "(row, column, index) => {return (<span><Button size=\"small\" type=\"text\" onClick={this.handleViewrelative.bind(this, index)}>查看关联数据</Button><Button size=\"small\" type=\"text\" onClick={this.handleView.bind(this, index)}>详情</Button><Button size=\"small\" type=\"text\" onClick={this.handleEdit.bind(this, index)}>编辑</Button><Button size=\"small\" type=\"text\" onClick={this.handleDel.bind(this, index)}>删除</Button></span>);}"
                }],
                "buttonProps": [{
                    "label": "查看关联数据",
                    "prop": "viewRelative"
                }, {
                    "label": "详情",
                    "prop": "view"
                }, {
                    "label": "编辑",
                    "prop": "edit"
                }, {
                    "label": "删除",
                    "prop": "del"
                }],
                "formColumns": [],
                "isfinish": 0
            },
            "Add": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [],
                "isfinish": 0
            },
            "Relationship": {
                "listColumns": [{
                    "label": "数据名称",
                    "prop": "list_prop_50"
                }, {
                    "label": "处理方式",
                    "prop": "list_prop_48"
                }, {
                    "label": "创建时间",
                    "prop": "list_prop_4"
                }, {
                    "label": "操作",
                    "prop": "list_prop_6",
                    "width": 200
                }],
                "buttonProps": [],
                "formColumns": [],
                "isfinish": 0
            },
            "View": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [],
                "isfinish": 0
            },
            "Edit": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [],
                "isfinish": 0
            }
        }
    },
    "ServiceManage": {
        "DataService": {
            "List": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [{
                    "label": "中文名称",
                    "prop": "forms_prop_46",
                    "type": "input"
                }, {
                    "label": "英文名称",
                    "prop": "forms_prop_47",
                    "type": "input"
                }, {
                    "label": "版本号",
                    "prop": "forms_prop_48",
                    "type": "input"
                }, {
                    "label": "封装时间",
                    "prop": "forms_prop_49",
                    "type": "input"
                }, {
                    "label": "说明",
                    "prop": "forms_prop_3",
                    "type": "input"
                }],
                "isfinish": 0
            }
        },
        "API": {
            "List": {
                "listColumns": [{
                    "label": "api中文名称",
                    "prop": "list_prop_51"
                }, {
                    "label": "api英文名称",
                    "prop": "list_prop_52"
                }, {
                    "label": "数据源类型",
                    "prop": "list_prop_53"
                }, {
                    "label": "创建时间",
                    "prop": "list_prop_4"
                }, {
                    "label": "操作",
                    "width": 200,
                    "render": "(row, column, index) => {return (<span><Button size=\"small\" type=\"text\" onClick={this.handleView.bind(this, index)}>详情</Button><Button size=\"small\" type=\"text\" onClick={this.handleEdit.bind(this, index)}>编辑</Button><Button size=\"small\" type=\"text\" onClick={this.handleDel.bind(this, index)}>删除</Button></span>);}"
                }],
                "buttonProps": [{
                    "label": "详情",
                    "prop": "view"
                }, {
                    "label": "编辑",
                    "prop": "edit"
                }, {
                    "label": "删除",
                    "prop": "del"
                }],
                "formColumns": [{
                    "label": "API中文名称",
                    "prop": "forms_prop_50",
                    "type": "input"
                }, {
                    "label": "API英文名称",
                    "prop": "forms_prop_51",
                    "type": "input"
                }, {
                    "label": "数据源类型",
                    "prop": "forms_prop_52",
                    "type": "select"
                }],
                "isfinish": 0
            },
            "Add": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [{
                    "label": "API中文名称",
                    "prop": "forms_prop_50",
                    "type": "input"
                }, {
                    "label": "API英文名称",
                    "prop": "forms_prop_51",
                    "type": "input"
                }, {
                    "label": "数据源类型",
                    "prop": "forms_prop_52",
                    "type": "select"
                }, {
                    "label": "API说明",
                    "prop": "forms_prop_53",
                    "type": "input"
                }],
                "isfinish": 0
            },
            "View": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [],
                "isfinish": 0
            },
            "Edit": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [],
                "isfinish": 0
            }
        },
        "APIStratedy": {
            "List": {
                "listColumns": [{
                    "label": "策略编号",
                    "prop": "list_prop_54"
                }, {
                    "label": "策略名称",
                    "prop": "list_prop_55"
                }, {
                    "label": "策略说明",
                    "prop": "list_prop_56"
                }, {
                    "label": "创建时间",
                    "prop": "list_prop_4"
                }, {
                    "label": "操作",
                    "width": 200,
                    "render": "(row, column, index) => {return (<span><Button size=\"small\" type=\"text\" onClick={this.handleView.bind(this, index)}>详情</Button><Button size=\"small\" type=\"text\" onClick={this.handleEdit.bind(this, index)}>编辑</Button><Button size=\"small\" type=\"text\" onClick={this.handleDel.bind(this, index)}>删除</Button></span>);}"
                }],
                "buttonProps": [{
                    "label": "详情",
                    "prop": "view"
                }, {
                    "label": "编辑",
                    "prop": "edit"
                }, {
                    "label": "删除",
                    "prop": "del"
                }],
                "formColumns": [{
                    "label": "策略编号",
                    "prop": "forms_prop_54",
                    "type": "input"
                }, {
                    "label": "策略名称",
                    "prop": "forms_prop_55",
                    "type": "input"
                }],
                "isfinish": 0
            },
            "Add": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [{
                    "label": "t基本信息设置",
                    "prop": "forms_prop_56",
                    "type": "input"
                }, {
                    "label": "策略名称",
                    "prop": "forms_prop_55",
                    "type": "input"
                }, {
                    "label": "策略说明",
                    "prop": "forms_prop_57",
                    "type": "textarea"
                }, {
                    "label": "t策略设置",
                    "prop": "forms_prop_58",
                    "type": "input"
                }, {
                    "label": "请求前方法集",
                    "prop": "forms_prop_59",
                    "type": "select"
                }, {
                    "label": "请求后方法集",
                    "prop": "forms_prop_60",
                    "type": "select"
                }, {
                    "label": "日志处理方法集",
                    "prop": "forms_prop_61",
                    "type": "select"
                }, {
                    "label": "测试请求数据",
                    "prop": "forms_prop_62",
                    "type": "textarea"
                }],
                "isfinish": 0
            },
            "View": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [],
                "isfinish": 0
            },
            "Edit": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [],
                "isfinish": 0
            }
        },
        "APILogic": {
            "List": {
                "listColumns": [{
                    "label": "代码编号",
                    "prop": "list_prop_31"
                }, {
                    "label": "代码名称",
                    "prop": "list_prop_32"
                }, {
                    "label": "代码类型",
                    "prop": "list_prop_57"
                }, {
                    "label": "创建时间",
                    "prop": "list_prop_4"
                }, {
                    "label": "操作",
                    "width": 200,
                    "render": "(row, column, index) => {return (<span><Button size=\"small\" type=\"text\" onClick={this.handleView.bind(this, index)}>详情</Button><Button size=\"small\" type=\"text\" onClick={this.handleEdit.bind(this, index)}>编辑</Button><Button size=\"small\" type=\"text\" onClick={this.handleDel.bind(this, index)}>删除</Button></span>);}"
                }],
                "buttonProps": [{
                    "label": "详情",
                    "prop": "view"
                }, {
                    "label": "编辑",
                    "prop": "edit"
                }, {
                    "label": "删除",
                    "prop": "del"
                }],
                "formColumns": [{
                    "label": "代码编号",
                    "prop": "forms_prop_26",
                    "type": "input"
                }, {
                    "label": "代码名称",
                    "prop": "forms_prop_27",
                    "type": "input"
                }, {
                    "label": "代码类型",
                    "prop": "forms_prop_63",
                    "type": "select"
                }],
                "isfinish": 0
            },
            "Add": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [{
                    "label": "代码名称",
                    "prop": "forms_prop_27",
                    "type": "input"
                }, {
                    "label": "代码类型",
                    "prop": "forms_prop_63",
                    "type": "select"
                }, {
                    "label": "代码详情",
                    "prop": "forms_prop_28",
                    "type": "textarea"
                }, {
                    "label": "备注",
                    "prop": "forms_prop_64",
                    "type": "textarea"
                }],
                "isfinish": 0
            },
            "View": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [],
                "isfinish": 0
            },
            "Edit": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [],
                "isfinish": 0
            }
        }
    },
    "MonitorManage": {
        "EnterMonitor": {
            "List": {
                "listColumns": [{
                    "label": "序号",
                    "prop": "list_prop_11"
                }, {
                    "label": "数据源名称",
                    "prop": "list_prop_58"
                }, {
                    "label": "数据源类型",
                    "prop": "list_prop_53"
                }, {
                    "label": "数据源状态",
                    "prop": "list_prop_59"
                }, {
                    "label": "异常发生时间",
                    "prop": "list_prop_60"
                }, {
                    "label": "处理状态",
                    "prop": "list_prop_61"
                }, {
                    "label": "操作",
                    "width": 200,
                    "render": "(row, column, index) => {return (<span><Button size=\"small\" type=\"text\" onClick={this.handleHandle.bind(this, index)}>处理</Button></span>);}"
                }],
                "buttonProps": [{
                    "label": "处理",
                    "prop": "handle"
                }],
                "formColumns": [{
                    "label": "数据源类型",
                    "prop": "forms_prop_52",
                    "type": "select"
                }, {
                    "label": "处理状态",
                    "prop": "forms_prop_65",
                    "type": "select"
                }],
                "isfinish": 0
            }
        },
        "BugMonitor": {
            "List": {
                "listColumns": [{
                    "label": "序号",
                    "prop": "list_prop_11"
                }, {
                    "label": "所属数据源",
                    "prop": "list_prop_62"
                }, {
                    "label": "所属数据对象",
                    "prop": "list_prop_63"
                }, {
                    "label": "预警时间",
                    "prop": "list_prop_44"
                }, {
                    "label": "处理状态",
                    "prop": "list_prop_61"
                }, {
                    "label": "操作",
                    "width": 200,
                    "render": "(row, column, index) => {return (<span><Button size=\"small\" type=\"text\" onClick={this.handleView.bind(this, index)}>查看详情</Button></span>);}"
                }],
                "buttonProps": [{
                    "label": "查看详情",
                    "prop": "view"
                }],
                "formColumns": [{
                    "label": "所属数据源",
                    "prop": "forms_prop_66",
                    "type": "select"
                }, {
                    "label": "所属数据对象",
                    "prop": "forms_prop_67",
                    "type": "select"
                }, {
                    "label": "处理状态",
                    "prop": "forms_prop_65",
                    "type": "select"
                }],
                "isfinish": 0
            }
        },
        "ServiceMonitor": {
            "List": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [],
                "isfinish": 0
            }
        }
    },
    "SystemManage": {
        "SystemRole": {
            "List": {
                "listColumns": [{
                    "label": "角色名称",
                    "prop": "list_prop_64"
                }, {
                    "label": "创建时间",
                    "prop": "list_prop_4"
                }, {
                    "label": "角色描述",
                    "prop": "list_prop_65"
                }, {
                    "label": "操作",
                    "width": 200,
                    "render": "(row, column, index) => {return (<span><Button size=\"small\" type=\"text\" onClick={this.handleView.bind(this, index)}>详情</Button><Button size=\"small\" type=\"text\" onClick={this.handleEdit.bind(this, index)}>编辑</Button><Button size=\"small\" type=\"text\" onClick={this.handleDel.bind(this, index)}>删除</Button></span>);}"
                }],
                "buttonProps": [{
                    "label": "详情",
                    "prop": "view"
                }, {
                    "label": "编辑",
                    "prop": "edit"
                }, {
                    "label": "删除",
                    "prop": "del"
                }],
                "formColumns": [],
                "isfinish": 1
            },
            "Add": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [{
                    "label": "角色名称",
                    "prop": "forms_prop_68",
                    "type": "input"
                }, {
                    "label": "角色描述",
                    "prop": "forms_prop_69",
                    "type": "textarea"
                }, {
                    "label": "设置权限",
                    "prop": "forms_prop_70",
                    "type": "tree"
                }],
                "isfinish": 1
            },
            "View": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [],
                "isfinish": 1
            }
        },
        "User": {
            "List": {
                "listColumns": [{
                    "label": "序号",
                    "prop": "list_prop_11"
                }, {
                    "label": "名称",
                    "prop": "list_prop_47"
                }, {
                    "label": "部门",
                    "prop": "list_prop_66"
                }, {
                    "label": "创建时间",
                    "prop": "list_prop_4"
                }, {
                    "label": "角色",
                    "prop": "list_prop_67"
                }, {
                    "label": "操作",
                    "width": 200,
                    "render": "(row, column, index) => {return (<span><Button size=\"small\" type=\"text\" onClick={this.handleView.bind(this, index)}>详情</Button><Button size=\"small\" type=\"text\" onClick={this.handleEdit.bind(this, index)}>编辑</Button><Button size=\"small\" type=\"text\" onClick={this.handleDel.bind(this, index)}>删除</Button></span>);}"
                }],
                "buttonProps": [{
                    "label": "详情",
                    "prop": "view"
                }, {
                    "label": "编辑",
                    "prop": "edit"
                }, {
                    "label": "删除",
                    "prop": "del"
                }],
                "formColumns": [],
                "isfinish": 1
            },
            "Add": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [{
                    "label": "姓名",
                    "prop": "forms_prop_71",
                    "type": "input"
                }, {
                    "label": "所在部门",
                    "prop": "forms_prop_72",
                    "type": "input"
                }, {
                    "label": "账号",
                    "prop": "forms_prop_73",
                    "type": "input"
                }, {
                    "label": "密码",
                    "prop": "forms_prop_74",
                    "type": "input"
                }, {
                    "label": "选择角色",
                    "prop": "forms_prop_75",
                    "type": "select"
                }],
                "isfinish": 1
            },
            "Edit": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [],
                "isfinish": 1
            },
            "View": {
                "listColumns": [],
                "buttonProps": [],
                "formColumns": [],
                "isfinish": 1
            }
        },
        "Log": {
            "List": {
                "listColumns": [{
                    "label": "序号",
                    "prop": "list_prop_11"
                }, {
                    "label": "时间",
                    "prop": "list_prop_68"
                }, {
                    "label": "操作人",
                    "prop": "list_prop_69"
                }, {
                    "label": "角色",
                    "prop": "list_prop_67"
                }, {
                    "label": "操作事项",
                    "prop": "list_prop_70"
                }],
                "buttonProps": [],
                "formColumns": [{
                    "label": "操作人",
                    "prop": "forms_prop_76",
                    "type": "select"
                }, {
                    "label": "角色",
                    "prop": "forms_prop_77",
                    "type": "select"
                }, {
                    "label": "时间",
                    "prop": "forms_prop_78",
                    "type": "date"
                }],
                "isfinish": 1
            }
        }
    }
}