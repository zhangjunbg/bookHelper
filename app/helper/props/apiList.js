module.exports = {
    "DataManage": {
        "FlowConfig": {
            "List": {
                "main": []
            },
            "Edit": {
                "main": []
            },
            "View": {
                "main": []
            }
        },
        "Schedule": {
            "List": {
                "main": []
            },
            "Add": {
                "main": []
            },
            "View": {
                "main": []
            }
        },
        "TaskMonitor": {
            "List": {
                "main": ["TASK_MONITOR_LIST"]
            }
        }
    },
    "MetaDataManage": {
        "MetaData": {
            "List": {
                "main": []
            },
            "View": {
                "main": []
            },
            "Relationship": {
                "main": []
            }
        },
        "Datasource": {
            "List": {
                "main": ["DATA-SOURCE-HTTP-MANAGEMENT_DATA-SOURCE_LIST", " DATA-SOURCE-HTTP-MANAGEMENT_ADDSOURCE", " DATA-SOURCE-HTTP-MANAGEMENT_ADDADDRESS"]
            },
            "Add": {
                "main": []
            },
            "View": {
                "main": []
            },
            "Edit": {
                "main": []
            }
        }
    },
    "StandardManage": {
        "DataStandard": {
            "List": {
                "main": ["DATA-STANDARD-BUSINESS_QUERYLIST"],
                "del": ["DATA-STANDARD-BUSINESS_DELETE"]
            },
            "Add": {
                "main": []
            },
            "View": {
                "main": ["DATA-STANDARD-BUSINESS_QUERY"]
            },
            "Edit": {
                "main": []
            }
        },
        "StandardCode": {
            "List": {
                "main": ["DATA-STANDARD-CODE_QUERYLIST"],
                "del": ["DATA-STANDARD-CODE_DELETE"]
            },
            "Add": {
                "main": ["DATA-STANDARD-BUSINESS_ADD"]
            },
            "View": {
                "main": ["DATA-STANDARD-CODE_QUERY"]
            },
            "Edit": {
                "main": ["DATA-STANDARD-BUSINESS_UPDATE"]
            }
        },
        "RefData": {
            "List": {
                "main": ["DATA-STANDARD-REFER_QUERYLIST"],
                "del": ["DATA-STANDARD-REFER_DELETE"]
            },
            "Add": {
                "main": ["DATA-STANDARD-REFER_ADD"]
            },
            "View": {
                "main": ["DATA-STANDARD-REFER_QUERY"]
            },
            "Edit": {
                "main": ["DATA-STANDARD-REFER_UPDATE"]
            }
        },
        "Standard": {
            "List": {
                "main": ["DATA-STANDARD-ELEMENT_QUERYLIST"],
                "del": ["DATA-STANDARD-ELEMENT_DELETE"]
            },
            "Add": {
                "main": ["DATA-STANDARD-ELEMENT_ADD"]
            },
            "View": {
                "main": ["DATA-STANDARD-ELEMENT_QUERY"]
            },
            "Edit": {
                "main": ["DATA-STANDARD-ELEMENT_UPDATE"]
            }
        }
    },
    "QualityManage": {
        "DataQuality": {
            "List": {
                "main": ["QUALITY_MANAGER_DATALIST", " QUALITY_MANAGE_BASE"]
            },
            "Report": {
                "main": []
            },
            "Rule": {
                "main": ["QUALITY_MANAGER_MANAGELIST"],
                "del": ["QUALITY_MANAGE_DELETE"]
            },
            "Add": {
                "main": []
            },
            "View": {
                "main": ["QUALITY_MANAGE_DETAIL"]
            },
            "Config": {
                "main": ["QUALITY_MANAGE_SAVE"]
            }
        },
        "MonitorStrategy": {
            "List": {
                "main": ["QUALITY_STRATEGY_LIST", " QUALITY_STRATEGY_BASE", " QUALITY_STRATEGY_DELETECHECK"],
                "del": ["QUALITY_STRATEGY_DELETE"]
            },
            "Add": {
                "main": ["QUALITY_STRATEGY_SAVE"]
            },
            "View": {
                "main": ["QUALITY_STRATEGY_DETAIL"]
            },
            "Edit": {
                "main": ["QUALITY_STRATEGY_SAVE"]
            }
        },
        "MonitorReport": {
            "List": {
                "main": []
            }
        }
    },
    "SafeManage": {
        "DataSafe": {
            "List": {
                "main": []
            },
            "Add": {
                "main": []
            },
            "Relationship": {
                "main": []
            },
            "View": {
                "main": []
            },
            "Edit": {
                "main": []
            }
        }
    },
    "ServiceManage": {
        "DataService": {
            "List": {
                "main": []
            }
        },
        "API": {
            "List": {
                "main": ["API_APIMANAGEMENT_QUERYAPIMANAGEMENT"],
                "del": ["API_APIMANAGEMENT_DELETEAPIMANAGEMENT"]
            },
            "Add": {
                "main": ["API_APIMANAGEMENT_UPDATEAPIMANAGEMENT"]
            },
            "View": {
                "main": []
            },
            "Edit": {
                "main": ["API_APIMANAGEMENT_UPDATEAPIMANAGEMENT"]
            }
        },
        "APIStratedy": {
            "List": {
                "main": []
            },
            "Add": {
                "main": []
            },
            "View": {
                "main": []
            },
            "Edit": {
                "main": []
            }
        },
        "APILogic": {
            "List": {
                "main": ["API_APIPROCESSLOGIC_QUERYAPIPROCESSLOGIC"],
                "del": ["API_APIPROCESSLOGIC_DELETEAPIPROCESSLOGIC"]
            },
            "Add": {
                "main": ["API_APIPROCESSLOGIC_CREATEAPIPROCESSLOGIC"]
            },
            "View": {
                "main": []
            },
            "Edit": {
                "main": ["API_APIPROCESSLOGIC_CREATEAPIPROCESSLOGIC"]
            }
        }
    }
}