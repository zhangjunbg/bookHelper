module.exports =  {
    DataManage:{
        FlowConfig:
        {List:{listColumns:[{label:'工作流名称',prop:'prop1',width:'160'},{label:'编号',prop:'prop41',width:'160'},{label:'类型',prop:'prop56',width:'160'},{label:'创建时间',prop:'prop16',width:'160'},{label:'说明',prop:'prop2',width:'160'},{label:'操作',prop:'prop3',width:'240'},],buttonProps:[{label:'查看',prop:'view'},{label:'删除',prop:'del'},],},
Edit:{formColumns:[{label:'工作流名称',prop:'formProp1',type:'input'},{label:'编号',prop:'formProp2',type:'input'},{label:'工作流类型',prop:'formProp3',type:'select'},{label:'说明',prop:'formProp4',type:'textarea'},]},
View:{},},
Schedule:{List:{listColumns:[{label:'任务名称',prop:'prop4',width:'160'},{label:'编号',prop:'prop41',width:'160'},{label:'创建时间',prop:'prop16',width:'160'},{label:'运行方式',prop:'prop69',width:'160'},{label:'运行时间',prop:'prop5',width:'160'},{label:'说明',prop:'prop2',width:'160'},{label:'操作',prop:'prop3',width:'240'},],buttonProps:[{label:'查看',prop:'view'},{label:'编辑',prop:'edit'},{label:'删除',prop:'del'},],formColumns:[{label:'任务管理',prop:'formProp5',type:'input'},{label:'运行方式',prop:'formProp6',type:'select'},]},
Add:{listColumns:[{label:'工作流名称',prop:'prop1',width:'160'},{label:'编号',prop:'prop41',width:'160'},{label:'创建时间',prop:'prop16',width:'160'},{label:'说明',prop:'prop2',width:'160'},{label:'checkbox',prop:'prop6',width:'160'},],formColumns:[{label:'任务名称',prop:'formProp7',type:'input'},{label:'编号',prop:'formProp2',type:'input'},{label:'任务说明',prop:'formProp8',type:'input'},{label:'运行方式',prop:'formProp6',type:'complex'},{label:'状态代码',prop:'formProp10',type:'input'},]},
View:{formColumns:[{label:'任务名称',prop:'formProp7',type:'input'},{label:'运行方式',prop:'formProp6',type:'select'},{label:'返回码',prop:'formProp11',type:'select'},]},},
TaskMonitor:{List:{listColumns:[{label:'序号',prop:'prop7',width:'160'},{label:'任务名称',prop:'prop4',width:'160'},{label:'编号',prop:'prop41',width:'160'},{label:'运行方式',prop:'prop69',width:'160'},{label:'返回码',prop:'prop8',width:'160'},{label:'开始时间',prop:'prop9',width:'160'},{label:'结束时间',prop:'prop10',width:'160'},{label:'用时',prop:'prop11',width:'160'},],},},},
MetaDataManage:{MetaData:{List:{listColumns:[{label:'序号',prop:'prop7',width:'160'},{label:'数据项',prop:'prop42',width:'160'},{label:'数据集合',prop:'prop57',width:'160'},{label:'数据维度',prop:'prop70',width:'160'},{label:'数据集合类型',prop:'prop12',width:'160'},{label:'存储大小',prop:'prop13',width:'160'},{label:'生命周期',prop:'prop14',width:'160'},{label:'授权信息',prop:'prop15',width:'160'},{label:'创建时间',prop:'prop16',width:'160'},{label:'操作',prop:'prop3',width:'240'},],buttonProps:[{label:'详情',prop:'view'},{label:'血缘',prop:'relationship'},],formColumns:[{label:'数据库',prop:'formProp12',type:'input'},{label:'类目',prop:'formProp13',type:'select'},{label:'表名称',prop:'formProp14',type:'select'},]},
View:{listColumns:[{label:'序号',prop:'prop7',width:'160'},{label:'纳税类型',prop:'prop43',width:'160'},{label:'类目',prop:'prop58',width:'160'},{label:'应报税额',prop:'prop71',width:'160'},{label:'起始时间',prop:'prop17',width:'160'},{label:'截止时间',prop:'prop18',width:'160'},],formColumns:[{label:'数据项名称',prop:'formProp15',type:'数据项名称'},{label:'创建时间',prop:'formProp16',type:'创建时间'},{label:'数据维度',prop:'formProp17',type:'数据维度'},{label:'描述',prop:'formProp18',type:'描述'},{label:'总存储量',prop:'formProp19',type:'总存储量'},{label:'昨日新增',prop:'formProp20',type:'昨日新增'},{label:'生命周期',prop:'formProp21',type:'生命周期'},{label:'授权日期',prop:'formProp22',type:'授权日期'},]},
Relationship:{listColumns:[{label:'序号',prop:'prop7',width:'160'},{label:'数据字段',prop:'prop44',width:'160'},{label:'类目',prop:'prop58',width:'160'},{label:'长度',prop:'prop72',width:'160'},{label:'描述',prop:'prop19',width:'160'},],},},
Datasource:{List:{listColumns:[{label:'序号',prop:'prop7',width:'160'},{label:'数据表',prop:'prop45',width:'160'},{label:'创建时间',prop:'prop16',width:'160'},{label:'状态',prop:'prop73',width:'160'},{label:'操作',prop:'prop3',width:'240'},],buttonProps:[{label:'撤销发布',prop:'cancel'},],},
Add:{},
View:{},
Edit:{},},},
StandardManage:{DataStandard:{List:{listColumns:[{label:'序号',prop:'prop7',width:'160'},{label:'业务编号',prop:'prop46',width:'160'},{label:'业务名称',prop:'prop59',width:'160'},{label:'标准主题',prop:'prop74',width:'160'},{label:'标准大类',prop:'prop20',width:'160'},{label:'标准子类',prop:'prop21',width:'160'},{label:'标准细类',prop:'prop22',width:'160'},{label:'数据类型',prop:'prop23',width:'160'},{label:'创建时间',prop:'prop16',width:'160'},{label:'操作',prop:'prop3',width:'240'},],buttonProps:[{label:'详情',prop:'view'},{label:'编辑',prop:'edit'},{label:'删除',prop:'del'},],formColumns:[{label:'标准编号',prop:'formProp23',type:'input'},{label:'业务名称',prop:'formProp24',type:'select'},{label:'创时间',prop:'formProp25',type:'dataArr'},]},
Add:{formColumns:[{label:'业务编号',prop:'formProp26',type:'input'},{label:'业务名称',prop:'formProp24',type:'input'},{label:'业务含义',prop:'formProp28',type:'input'},{label:'标准主题',prop:'formProp29',type:'input'},{label:'是否有度量单位',prop:'formProp30',type:'select'},{label:'数据类型',prop:'formProp31',type:'select'},{label:'非空',prop:'formProp32',type:'select'},{label:'唯一',prop:'formProp33',type:'select'},]},
Report:{},
Rule:{},
Config:{},},
StandardCode:{List:{listColumns:[{label:'序号',prop:'prop7',width:'160'},{label:'代码编号',prop:'prop34',width:'160'},{label:'代码名称',prop:'prop52',width:'160'},{label:'代码描述',prop:'prop75',width:'160'},{label:'创建时间',prop:'prop16',width:'160'},{label:'操作',prop:'prop3',width:'240'},],buttonProps:[{label:'删除',prop:'del'},{label:'查看',prop:'view'},{label:'编辑',prop:'edit'},],formColumns:[{label:'代码编号',prop:'formProp34',type:'select'},{label:'代码名称',prop:'formProp35',type:'select'},]},
Add:{formColumns:[{label:'代码编号',prop:'formProp34',type:'input'},{label:'代码名称',prop:'formProp35',type:'input'},{label:'代码详情',prop:'formProp38',type:'textarea'},{label:'代码描述',prop:'formProp39',type:'textarea'},{label:'代码描述',prop:'formProp39',type:'textarea'},]},
View:{},
Edit:{},},
RefData:{List:{listColumns:[{label:'序号',prop:'prop7',width:'160'},{label:'业务编号',prop:'prop46',width:'160'},{label:'业务名称',prop:'prop59',width:'160'},{label:'英文名称',prop:'prop76',width:'160'},{label:'业务含义',prop:'prop24',width:'160'},{label:'创建时间',prop:'prop16',width:'160'},{label:'操作',prop:'prop3',width:'240'},],buttonProps:[{label:'详情',prop:'view'},{label:'编辑',prop:'edit'},{label:'删除',prop:'del'},],formColumns:[{label:'业务编号',prop:'formProp26',type:'inptu'},{label:'业务名称',prop:'formProp24',type:'select'},{label:'创建时间',prop:'formProp16',type:'date'},]},
Add:{formColumns:[{label:'业务编号',prop:'formProp26',type:'input'},{label:'业务名称',prop:'formProp24',type:'input'},{label:'英文名称',prop:'formProp42',type:'input'},{label:'业务含义',prop:'formProp28',type:'input'},{label:'参考数据设定',prop:'',type:'input'},]},
View:{},
Edit:{},},
Standard:{List:{listColumns:[{label:'序号',prop:'prop7',width:'160'},{label:'业务编号',prop:'prop46',width:'160'},{label:'词汇',prop:'prop60',width:'160'},{label:'业务含义',prop:'prop24',width:'160'},{label:'创建时间',prop:'prop16',width:'160'},{label:'操作',prop:'prop3',width:'240'},],buttonProps:[{label:'详情',prop:'view'},{label:'编辑',prop:'edit'},{label:'删除',prop:'del'},],formColumns:[{label:'业务编号',prop:'formProp26',type:'inptu'},{label:'业务名称',prop:'formProp24',type:'select'},{label:'创建时间',prop:'formProp16',type:'date'},]},
Add:{},
View:{},
Edit:{},},},
QualityManage:{DataQuality:{List:{listColumns:[{label:'序号',prop:'prop7',width:'160'},{label:'数据项名称',prop:'prop47',width:'160'},{label:'数据集合',prop:'prop57',width:'160'},{label:'数据集合类型',prop:'prop12',width:'160'},{label:'数据类型',prop:'prop23',width:'160'},{label:'监控类型',prop:'prop25',width:'160'},{label:'警告方式',prop:'prop26',width:'160'},{label:'数据更新时间',prop:'prop27',width:'160'},{label:'操作',prop:'prop3',width:'240'},],buttonProps:[{label:'查看报告',prop:'viewReport'},{label:'查看规则',prop:'viewRule'},{label:'配置规则',prop:'configRule'},],},
Add:{},
Report:{},
Rule:{},
Config:{},},
MonitorStrategy:{List:{listColumns:[{label:'序号',prop:'prop7',width:'160'},{label:'策略编号',prop:'prop33',width:'160'},{label:'策略名称',prop:'prop51',width:'160'},{label:'规则类型',prop:'prop77',width:'160'},{label:'监控类型',prop:'prop25',width:'160'},{label:'对比对象',prop:'prop28',width:'160'},{label:'强弱',prop:'prop29',width:'160'},{label:'创建时间',prop:'prop16',width:'160'},{label:'操作',prop:'prop3',width:'240'},],buttonProps:[{label:'删除',prop:'del'},{label:'查看',prop:'view'},{label:'编辑',prop:'edit'},],},
Add:{formColumns:[{label:'规则编号',prop:'formProp52',type:'input'},{label:'规则名称',prop:'formProp61',type:'input'},{label:'监控类型',prop:'formProp62',type:'input'},{label:'规则类型',prop:'formProp63',type:'input'},{label:'对比对象',prop:'formProp64',type:'input'},{label:'强弱',prop:'formProp65',type:'input'},{label:'监控策略',prop:'formProp66',type:'select'},{label:'策略说明',prop:'formProp67',type:'textarea'},]},
View:{},
Edit:{},},
MonitorReport:{List:{listColumns:[{label:'序号',prop:'prop7',width:'160'},{label:'预警时间',prop:'prop48',width:'160'},{label:'数据源名称',prop:'prop35',width:'160'},{label:'命中策略',prop:'prop78',width:'160'},{label:'当前状态',prop:'prop30',width:'160'},{label:'操作',prop:'prop3',width:'240'},],buttonProps:[{label:'处理',prop:'handle'},],formColumns:[{label:'数据源名称',prop:'formProp53',type:'input'},{label:'命中策略',prop:'formProp68',type:'select'},{label:'当前状态',prop:'formProp69',type:'select'},{label:'预警时间',prop:'formProp70',type:'complex'},]},},},
SafeManage:{DataSafe:{List:{listColumns:[{label:'等级',prop:'prop31',width:'160'},{label:'名称',prop:'prop49',width:'160'},{label:'处理方式',prop:'prop61',width:'160'},{label:'关联数据量',prop:'prop79',width:'160'},{label:'创建时间',prop:'prop16',width:'160'},{label:'操作',prop:'prop3',width:'240'},],buttonProps:[{label:'查看关联数据',prop:'viewRelative'},{label:'删除',prop:'del'},{label:'查看',prop:'view'},{label:'编辑',prop:''},],},
Add:{},
Relationship:{},
View:{},
Edit:{},},},
ServiceManage:{API:{List:{listColumns:[{label:'api中文名称',prop:'prop32',width:'160'},{label:'api英文名称',prop:'prop50',width:'160'},{label:'数据源类型',prop:'prop53',width:'160'},{label:'创建时间',prop:'prop16',width:'160'},{label:'操作',prop:'prop3',width:'240'},],buttonProps:[{label:'查看',prop:'view'},{label:'编辑',prop:'edit'},],formColumns:[{label:'接口名称',prop:'formProp54',type:'input'},{label:'接口分类',prop:'formProp71',type:'select'},{label:'类型',prop:'formProp72',type:'select'},]},
Add:{formColumns:[{label:'API中文名称',prop:'formProp55',type:'input'},{label:'API英文名称',prop:'formProp73',type:'input'},{label:'数据源类型',prop:'formProp57',type:'select'},]},
View:{},
Edit:{},},
APIStratedy:{List:{listColumns:[{label:'策略编号',prop:'prop33',width:'160'},{label:'策略名称',prop:'prop51',width:'160'},{label:'策略说明',prop:'prop62',width:'160'},{label:'创建时间',prop:'prop16',width:'160'},{label:'操作',prop:'prop3',width:'240'},],buttonProps:[{label:'删除',prop:'del'},{label:'查看',prop:'view'},{label:'编辑',prop:'edit'},],formColumns:[{label:'策略编号',prop:'formProp56',type:'input'},{label:'策略名称',prop:'formProp74',type:'input'},]},
Add:{formColumns:[{label:'策略编号',prop:'formProp56',type:'input'},{label:'策略名称',prop:'formProp74',type:'input'},{label:'策略说明',prop:'formProp67',type:'textarea'},{label:'请求前方法集',prop:'formProp75',type:'select'},{label:'请求后方法集',prop:'formProp76',type:'select'},{label:'日志处理方法集',prop:'formProp77',type:'select'},{label:'测试请求数据',prop:'formProp78',type:'textarea'},]},
View:{},
Edit:{},},
APILogic:{List:{listColumns:[{label:'代码编号',prop:'prop34',width:'160'},{label:'代码名称',prop:'prop52',width:'160'},{label:'代码类型',prop:'prop63',width:'160'},{label:'创建时间',prop:'prop16',width:'160'},{label:'操作',prop:'prop3',width:'240'},],buttonProps:[{label:'删除',prop:'del'},{label:'查看',prop:'view'},{label:'编辑',prop:'edit'},],formColumns:[{label:'代码编号',prop:'formProp34',type:'input'},{label:'代码名称',prop:'formProp35',type:'input'},{label:'代码类型',prop:'formProp88',type:'select'},]},
Add:{formColumns:[{label:'代码编号',prop:'formProp34',type:'input'},{label:'代码名称',prop:'formProp35',type:'input'},{label:'代码类型',prop:'formProp88',type:'select'},{label:'代码详情',prop:'formProp38',type:'textarea'},{label:'备注',prop:'formProp89',type:'textarea'},]},
View:{},
Edit:{},},},
MonitorManage:{EnterMonitor:{List:{listColumns:[{label:'数据源名称',prop:'prop35',width:'160'},{label:'数据源类型',prop:'prop53',width:'160'},{label:'数据源状态',prop:'prop64',width:'160'},{label:'异常发生时间',prop:'prop80',width:'160'},{label:'处理转台',prop:'prop36',width:'160'},{label:'操作',prop:'prop3',width:'240'},],buttonProps:[{label:'处理',prop:'handle'},],formColumns:[{label:'数据源类型',prop:'formProp57',type:'select'},{label:'处理状态',prop:'formProp79',type:'select'},]},},
BugMonitor:{List:{listColumns:[{label:'序号',prop:'prop7',width:'160'},{label:'所属数据源',prop:'prop54',width:'160'},{label:'所属数据表',prop:'prop65',width:'160'},{label:'预警时间',prop:'prop48',width:'160'},{label:'处理状态',prop:'prop37',width:'160'},{label:'操作',prop:'prop3',width:'240'},],buttonProps:[{label:'查看详情',prop:'view'},],},},
ServiceMonitor:{List:{},},},
SystemManage:{SystemRole:{List:{listColumns:[{label:'角色名称',prop:'prop38',width:'160'},{label:'创建时间',prop:'prop16',width:'160'},{label:'角色描述',prop:'prop66',width:'160'},{label:'操作',prop:'prop3',width:'240'},],buttonProps:[{label:'查看',prop:'view'},{label:'编辑',prop:'edit'},{label:'删除',prop:'del'},],},
Add:{formColumns:[{label:'角色名称',prop:'formProp58',type:'input'},{label:'角色描述',prop:'formProp80',type:'textarea'},{label:'设置权限',prop:'formProp81',type:'tree'},]},
View:{},},
User:{List:{listColumns:[{label:'序号',prop:'prop7',width:'160'},{label:'名称',prop:'prop49',width:'160'},{label:'部门',prop:'prop67',width:'160'},{label:'创建时间',prop:'prop16',width:'160'},{label:'角色',prop:'prop39',width:'160'},{label:'操作',prop:'prop3',width:'240'},],buttonProps:[{label:'查看',prop:'view'},{label:'编辑',prop:'edit'},{label:'删除',prop:'del'},],},
Add:{formColumns:[{label:'姓名',prop:'formProp59',type:'input'},{label:'所在部门',prop:'formProp82',type:'input'},{label:'账号',prop:'formProp83',type:'input'},{label:'密码',prop:'formProp84',type:'input'},{label:'选择角色',prop:'formProp85',type:'select'},]},
View:{},},
Log:{List:{listColumns:[{label:'序号',prop:'prop7',width:'160'},{label:'时间',prop:'prop55',width:'160'},{label:'操作人',prop:'prop68',width:'160'},{label:'角色',prop:'prop39',width:'160'},{label:'操作事项',prop:'prop40',width:'160'},],formColumns:[{label:'操作人',prop:'formProp60',type:'select'},{label:'角色',prop:'formProp86',type:'select'},{label:'时间',prop:'formProp87',type:'date'},]},



}}}




										
																																																																																																																																		
																																																																																																																																		
																																																																																																																																		
																																																																																																																																		
																																																																																																																																		
																																																																																																																																		
																																																																																																																																		
																																																																																																																																		
																																																																																																																																		
																																																																																																																																		
																																																																																																																																		
																																																																																																																																		
																																																																																																																																		
																																																																																																																																		
																																																																																																																																		
																																																																																																																																		
																																																																																																																																		
																																																																																																																																		
																																																																																																																																		
																																																																																																																																		
																																																																																																																																		
																																																																																																																																		
																																																																																																																																		