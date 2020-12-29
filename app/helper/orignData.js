module.exports = {
        '数据管理': {
            '工作流配置': {
                '列表': {
                    list: '工作流名称	编号	工作流类型	创建时间	说明	操作				',
                    buttons: '查看	删除			',
                    forms: '								',
                    isfinish: 1
                },
                '编辑': {
                    list: '									',
                    buttons: '				',
                    forms: '工作流名称|input	工作流类型|select	说明|textarea						',
                    isfinish: 0
                },
                '查看': {
                    list: '									',
                    buttons: '				',
                    forms: '								',
                    isfinish: 0
                },
            },
            '调度管理': {
                '列表': {
                    list: '任务名称	编号	创建时间	运行策略	运行状态	说明	操作			',
                    buttons: '详情	编辑	删除	停止运行	启动运行',
                    forms: '任务名称|input	运行方式|select	运行状态|select						',
                    isfinish: 0
                },
                '新增任务': {
                    list: '工作流名称	编号	创建时间	说明	checkbox					',
                    buttons: '				',
                    forms: '任务名称|input		任务说明|input	运行策略|complex					',
                    isfinish: 0
                },
                '查看': {
                    list: '									',
                    buttons: '				',
                    forms: '任务名称|input	运行方式|select	返回码|select						',
                    isfinish: 0
                },
            },
            '任务监控': {
                '列表': {
                    list: '序号	任务名称	运行方式	运行状态	开始时间	用时				',
                    buttons: '				',
                    forms: '								',
                    isfinish: 0
                },
            },
        },
        '元数据管理': {
            '元数据管理': {
                '列表': {
                    list: '序号	数据对象	数据集合	数据维度	数据集合类型	存储大小	授权信息	创建时间	操作	',
                    buttons: '详情				',
                    forms: '数据集合|input	数据维度|select	数据对象|select						',
                    isfinish: 0
                },
                '详情': {
                    list: '序号	数据对象	数据对象类型	长度	描述					',
                    buttons: '				',
                    forms: '数据对象名称	创建时间	数据维度	描述	总存储量	昨日新增	授权日期		',
                    isfinish: 0
                },
                '血缘': {
                    list: '序号	数据字段	类目	长度	描述					',
                    buttons: '				',
                    forms: '								',
                    isfinish: 0
                },
            },
            '数据源管理': {
                '首页': {
                    list: '序号	数据项	数据项类型	长度	描述					',
                    buttons: '保存	发布	撤销发布		',
                    forms: '								',
                    isfinish: 0
                },
                '新增标准': {
                    list: '									',
                    buttons: '				',
                    forms: '								',
                    isfinish: 0
                },
                '详情': {
                    list: '									',
                    buttons: '				',
                    forms: '								',
                    isfinish: 0
                },
                '编辑': {
                    list: '									',
                    buttons: '				',
                    forms: '								',
                    isfinish: 0
                },
            },
        },
        '数据标准管理': {
            '数据标准管理': {
                '列表': {
                    list: '序号	业务编号	业务名称	数据类型	创建时间	操作				',
                    buttons: '详情	编辑	删除		',
                    forms: '业务名称|select	创建时间|dataArr							',
                    isfinish: 0
                },
                '新增': {
                    list: '									',
                    buttons: '				',
                    forms: '业务名称|input	业务含义|input	是否有度量单位|select	t标准设定	数据类型|select	非空|select	唯一|select		',
                    isfinish: 0
                },
                '详情': {
                    list: '									',
                    buttons: '				',
                    forms: '								',
                    isfinish: 0
                },
                '编辑': {
                    list: '									',
                    buttons: '				',
                    forms: '								',
                    isfinish: 0
                },
            },
            '数据标准代码管理': {
                '列表': {
                    list: '序号	代码编号	代码名称	代码描述	创建时间	操作				',
                    buttons: '详情	编辑	删除		',
                    forms: '代码编号|select	代码名称|select							',
                    isfinish: 0
                },
                '新增': {
                    list: '									',
                    buttons: '				',
                    forms: '代码编号|input	代码名称|input	代码详情|textarea	代码描述|textarea					',
                    isfinish: 0
                },
                '查看': {
                    list: '									',
                    buttons: '				',
                    forms: '								',
                    isfinish: 0
                },
                '编辑': {
                    list: '									',
                    buttons: '				',
                    forms: '								',
                    isfinish: 0
                },
            },
            '参考数据管理': {
                '列表': {
                    list: '序号	业务编号	业务名称	业务含义	创建时间	操作				',
                    buttons: '详情	编辑	删除		',
                    forms: '业务编号|inptu	业务名称|select	创建时间|date						',
                    isfinish: 0
                },
                '新增': {
                    list: '									',
                    buttons: '				',
                    forms: '业务名称|input	业务含义	参考数据设定	枚举取值					',
                    isfinish: 0
                },
                '详情': {
                    list: '									',
                    buttons: '				',
                    forms: '								',
                    isfinish: 0
                },
                '编辑': {
                    list: '									',
                    buttons: '				',
                    forms: '								',
                    isfinish: 0
                },
            },
            '元素标准管理': {
                '列表': {
                    list: '序号	业务编号	元素词汇	业务含义	创建时间	操作				',
                    buttons: '详情	编辑	删除		',
                    forms: '业务编号|inptu	元素词汇|select	创建时间|date						',
                    isfinish: 0
                },
                '新增': {
                    list: '									',
                    buttons: '				',
                    forms: '								',
                    isfinish: 0
                },
                '详情': {
                    list: '									',
                    buttons: '				',
                    forms: '								',
                    isfinish: 0
                },
                '编辑': {
                    list: '									',
                    buttons: '				',
                    forms: '								',
                    isfinish: 0
                },
            },
        },
        '数据质量管理': {
            '数据质量管理': {
                '列表': {
                    list: '序号	数据对象	数据集合	数据集合类型	监控类型	警告方式	操作			',
                    buttons: '查看报告	查看规则	配置规则		',
                    forms: '数据集合	数据对象	监控类型						',
                    isfinish: 0
                },
                '查看报告': {
                    list: '									',
                    buttons: '				',
                    forms: '								',
                    isfinish: 0
                },
                '查看规则': {
                    list: '序号	规则名称	监控类型	警告方式	创建日期	操作				',
                    buttons: '查看	删除			',
                    forms: '								',
                    isfinish: 0
                },
                '新增': {
                    list: '									',
                    buttons: '				',
                    forms: '								',
                    isfinish: 0
                },
                '查看': {
                    list: '									',
                    buttons: '				',
                    forms: '								',
                    isfinish: 0
                },
                '配置规则': {
                    list: '									',
                    buttons: '				',
                    forms: '								',
                    isfinish: 0
                },
            },
            '数据监控策略': {
                '列表': {
                    list: '序号	规则编号	规则名称	规则类型	数据集类型	监控类型	对比对象	创建时间	操作	',
                    buttons: '详情	编辑	删除		',
                    forms: '规则编号|input	规则名称|input	监控类型|input						',
                    isfinish: 0
                },
                '新增': {
                    list: '									',
                    buttons: '				',
                    forms: '规则名称|input	数据集类型	监控类型|input	规则类型	对比对象	"监控方式|select	规则说明|textarea"			',
                    isfinish: 0
                },
                '查看': {
                    list: '									',
                    buttons: '				',
                    forms: '								',
                    isfinish: 0
                },
                '编辑': {
                    list: '									',
                    buttons: '				',
                    forms: '								',
                    isfinish: 0
                },
            },
            '数据监控报告': {
                '列表': {
                    list: '序号	预警时间	数据对象	规则类型	命中规则	操作				',
                    buttons: '已处理				',
                    forms: '预警对象	命中规则|select	当前状态|select	预警时间|complex					',
                    isfinish: 0
                },
            },
        },
        '数据安全管理': {
            '数据安全管理': {
                '列表': {
                    list: '等级	名称	处理方式	关联数据量	创建时间	操作				',
                    buttons: '查看关联数据	详情	编辑	删除	',
                    forms: '								',
                    isfinish: 0
                },
                '新增': {
                    list: '									',
                    buttons: '				',
                    forms: '								',
                    isfinish: 0
                },
                '查看关联数据': {
                    list: '数据名称	处理方式	创建时间	操作						',
                    buttons: '				',
                    forms: '								',
                    isfinish: 0
                },
                '查看': {
                    list: '									',
                    buttons: '				',
                    forms: '								',
                    isfinish: 0
                },
                '修改': {
                    list: '									',
                    buttons: '				',
                    forms: '								',
                    isfinish: 0
                },
            },
        },
        '数据服务管理': {
            '数据服务管理': {
                '列表': {
                    list: '									',
                    buttons: '				',
                    forms: '中文名称	英文名称	版本号	封装时间	说明				',
                    isfinish: 0
                },
            },
            'API定义管理': {
                '列表': {
                    list: 'api中文名称	api英文名称	数据源类型	创建时间	操作					',
                    buttons: '详情	编辑	删除		',
                    forms: 'API中文名称|input	API英文名称|input	数据源类型|select						',
                    isfinish: 0
                },
                '新增': {
                    list: '									',
                    buttons: '				',
                    forms: 'API中文名称|input	API英文名称|input	数据源类型|select	API说明					',
                    isfinish: 0
                },
                '查看': {
                    list: '									',
                    buttons: '				',
                    forms: '								',
                    isfinish: 0
                },
                '修改': {
                    list: '									',
                    buttons: '				',
                    forms: '								',
                    isfinish: 0
                },
            },
            'API策略管理': {
                '列表': {
                    list: '策略编号	策略名称	策略说明	创建时间	操作					',
                    buttons: '详情	编辑	删除		',
                    forms: '策略编号|input	策略名称|input							',
                    isfinish: 0
                },
                '新增': {
                    list: '									',
                    buttons: '				',
                    forms: 't基本信息设置	策略名称|input	策略说明|textarea	t策略设置	请求前方法集|select	请求后方法集|select	日志处理方法集|select	测试请求数据|textarea	',
                    isfinish: 0
                },
                '查看': {
                    list: '									',
                    buttons: '				',
                    forms: '								',
                    isfinish: 0
                },
                '修改': {
                    list: '									',
                    buttons: '				',
                    forms: '								',
                    isfinish: 0
                },
            },
            'API处理逻辑管理': {
                '列表': {
                    list: '代码编号	代码名称	代码类型	创建时间	操作					',
                    buttons: '详情	编辑	删除		',
                    forms: '代码编号|input	代码名称|input	代码类型|select						',
                    isfinish: 0
                },
                '新增': {
                    list: '									',
                    buttons: '				',
                    forms: '代码名称|input	代码类型|select	代码详情|textarea	备注|textarea					',
                    isfinish: 0
                },
                '查看': {
                    list: '									',
                    buttons: '				',
                    forms: '								',
                    isfinish: 0
                },
                '编辑': {
                    list: '									',
                    buttons: '				',
                    forms: '								',
                    isfinish: 0
                },
            },
        },
        '数据监控管理': {
            '数据接入监控': {
                '列表': {
                    list: '序号	数据源名称	数据源类型	数据源状态	异常发生时间	处理状态	操作			',
                    buttons: '处理				',
                    forms: '数据源类型|select	处理状态|select							',
                    isfinish: 0
                },
            },
            '数据处理异常监控': {
                '列表': {
                    list: '序号	所属数据源	所属数据对象	预警时间	处理状态	操作				',
                    buttons: '查看详情				',
                    forms: '所属数据源|select	所属数据对象|select	处理状态|select						',
                    isfinish: 0
                },
            },
            '数据服务监控': {
                '首页': {
                    list: '									',
                    buttons: '				',
                    forms: '								',
                    isfinish: 0
                },
            },
        },
        '系统管理': {
            '系统角色管理': {
                '列表': {
                    list: '角色名称	创建时间	角色描述	操作						',
                    buttons: '详情	编辑	删除		',
                    forms: '								',
                    isfinish: 0
                },
                '新增': {
                    list: '									',
                    buttons: '				',
                    forms: '角色名称|input	角色描述|textarea	设置权限|tree						',
                    isfinish: 0
                },
                '查看': {
                    list: '									',
                    buttons: '				',
                    forms: '								',
                    isfinish: 0
                },
            },
            '用户管理': {
                '列表': {
                    list: '序号	名称	部门	创建时间	角色	操作				',
                    buttons: '详情	编辑	删除		',
                    forms: '								',
                    isfinish: 0
                },
                '新增': {
                    list: '									',
                    buttons: '				',
                    forms: '姓名|input	所在部门|input	账号|input	密码|input	选择角色|select				',
                    isfinish: 0
                },
                '编辑': {
                    list: '									',
                    buttons: '				',
                    forms: '								',
                    isfinish: 0
                },
                '查看': {
                    list: '									',
                    buttons: '				',
                    forms: '								',
                    isfinish: 0
                },
            },
            '日志管理': {
                '列表': {
                    list: '序号	时间	操作人	角色	操作事项					',
                    buttons: '				',
                    forms: '操作人|select	角色|select	时间|date						',
                    isfinish: 0
                },
            }
        }
    }