// import * as $ from 'jquery';
// import cytoscape from 'cytoscape';
import * as d3 from 'd3';

export default class Tupu {
    constructor() {
        this.init();
    }

    initGraph(configData, keyNo, hideRelation) {
        this.configData = configData;
        this.hideRelation = hideRelation || false
        this._currentKeyNo = keyNo;
        this.getData(this._currentKeyNo);
    }
    hidden;
    visibilityChange;
    state;
    _isNeedReload;
    _isGraphLoaded;
    length;
    _rootNode;
    _rootData;
    activeNode;
    id;
    configData
    _COLOR = {
        node: {
            person: '#FD485E',
            company: '#4ea2f0',
            current: '#ff9e00'
        },
        border: {
            person: '#FD485E',
            company: '#128BED',
            current: '#EF941B'
        },
        line: {
            invest: '#fd485e',
            employ: '#4ea2f0',
            legal: '#4ea2f0'
        }
    }
    _companyRadius = 35
    _personRadius = 15
    _circleMargin = 10
    _circleBorder = 3
    _layoutNode = {}
    _isFocus = false
    _maxChildrenLength = 0
    hideRelation
    cy
    init() {
        /** 网页当前状态判断 (解决没布局完就切换页面造成点聚集在一起)*/
        if (typeof document.hidden !== "undefined") {
            this.hidden = "hidden";
            this.visibilityChange = "visibilitychange";
            this.state = "visibilityState";
        } else if (typeof document['mozHidden'] !== "undefined") {
            this.hidden = "mozHidden";
            this.visibilityChange = "mozvisibilitychange";
            this.state = "mozVisibilityState";
        } else if (typeof document['msHidden'] !== "undefined") {
            this.hidden = "msHidden";
            this.visibilityChange = "msvisibilitychange";
            this.state = "msVisibilityState";
        } else if (typeof document['webkitHidden'] !== "undefined") {
            this.hidden = "webkitHidden";
            this.visibilityChange = "webkitvisibilitychange";
            this.state = "webkitVisibilityState";
        }
        /** 解决浏览器标签切换排列问题 */
        this._isNeedReload = false;
        this._isGraphLoaded = false;
        document.addEventListener(this.visibilityChange, () => {
            if (document[this.state] == 'visible') {
                if (this._isNeedReload) {
                    $("#graphChart").html('');
                    $('#TrTxt').removeClass('active');
                    this.getData(this._currentKeyNo);
                }
            } else {
                if (!this._isGraphLoaded) {
                    this._isNeedReload = true;
                }
            }
        }, false);
        /** end 解决浏览器标签切换排列问题 */
        //去重操作,普通元素
        Array.prototype['unique'] = () => {
            var res = [];
            var json = {};
            for (var i = 0; i < this.length; i++) {
                if (!json[this[i]]) {
                    res.push(this[i]);
                    json[this[i]] = 1;
                }
            }
            return res;
        };
    }
    _currentKeyNo(_currentKeyNo) {
        throw new Error("Method not implemented.");
    }
    uniqeByKeys(array, keys) {
        //将对象元素转换成字符串以作比较
        let obj2key = (obj, keys) => {
            var n = keys.length,
                key = [];
            while (n--) {
                key.push(obj[keys[n]]);
            }
            return key.join('|');
        }
        var arr = [];
        var hash = {};
        for (var i = 0, j = array.length; i < j; i++) {
            var k = obj2key(array[i], keys);
            if (!(k in hash)) {
                hash[k] = true;
                arr.push(array[i]);
            }
        }
        return arr;
    }
    // 数据处理：将原始数据转换成graph数据
    getRootData(list) {
        var graph = {}
        graph.nodes = [];
        graph.links = [];
        var nodes = list.nodes;
        for (var j = 0; j < nodes.length; j++) {
            var node = nodes[j];
            let o = {};
            o.nodeId = node.id;
            o.data = {};
            o.data.obj = node;
            //o.data.showStatus = 'NORMAL'; // NORMAL HIGHLIGHT DULL
            o.data.showStatus = null; // NORMAL HIGHLIGHT DULL
            o.layout = {}
            o.layout.level = null; // 1 当前查询节点
            o.layout.singleLinkChildren = []; // 只连接自己的node
            graph.nodes.push(o);
            // 设置_rootNode
            if (this._currentKeyNo == o.data.obj.id) {
                this._rootNode = o;
            }
        }
        graph.nodes = this.uniqeByKeys(graph.nodes, ['nodeId']);
        //graph.links
        var relationships = list.relations;
        for (var k = 0; k < relationships.length; k++) {
            var relationship = relationships[k];
            let o = {}
            o.data = {};
            o.data.obj = relationship;
            //o.data.showStatus = 'NORMAL'; // NORMAL HIGHLIGHT DULL
            o.data.showStatus = null; // NORMAL HIGHLIGHT DULL
            o.sourceNode = this.getGraphNode(relationship.startId, graph.nodes);
            o.targetNode = this.getGraphNode(relationship.endId, graph.nodes);
            o.linkId = relationship.id;
            o.source = this.getNodesIndex(relationship.startId, graph.nodes);
            o.target = this.getNodesIndex(relationship.endId, graph.nodes);
            graph.links.push(o);
        }
        graph.links = this.uniqeByKeys(graph.links, ['linkId']);

        this.setLevel(graph.nodes, graph.links);
        this.setCategoryColor(graph.nodes, graph.links);
        return graph;
    }
    // 数据处理：设置节点层级
    setLevel(svg_nodes, svg_links) {
        let getNextNodes = (nodeId, links, parentLevel) => {
            var nextNodes = [];
            for (var i = 0; i < links.length; i++) {
                var link = links[i];
                if (nodeId == link.sourceNode.nodeId && !link.targetNode.layout.level) {
                    link.targetNode.layout.level = parentLevel;
                    nextNodes.push(link.targetNode);
                } else if (nodeId == link.targetNode.nodeId && !link.sourceNode.layout.level) {
                    link.sourceNode.layout.level = parentLevel;
                    nextNodes.push(link.sourceNode);
                }
            }
            nextNodes = this.uniqeByKeys(nextNodes, ['nodeId']);
            return nextNodes;
        }
        var level = 1;
        var nodes = [];
        nodes.push(this._rootNode)
        while (nodes.length) {
            var nextNodes = [];
            for (var i = 0; i < nodes.length; i++) {
                var node = nodes[i] || {
                    layout: {}
                };
                node.layout.level = level;
                nextNodes = nextNodes.concat(getNextNodes(node.nodeId, svg_links, level));
            }
            level++;
            nodes = nextNodes;
        }
    }
    // 数据处理：设置节点角色
    setCategoryColor(nodes, links) {
        for (var i = 0; i < links.length; i++) {
            let sameLink = {}; // 两点间连线信息
            sameLink.length = 0; // 两点间连线数量
            sameLink.currentIndex = 0; // 当前线索引
            sameLink.isSetedSameLink = false;
            links[i].sameLink = sameLink;
        }
        /*链接相同两点的线*/
        for (var i = 0; i < links.length; i++) {
            var baseLink = links[i];
            if (baseLink.sameLink.isSetedSameLink == false) {
                baseLink.sameLink.isSetedSameLink = true;
                var nodeId1 = baseLink.sourceNode.nodeId;
                var nodeId2 = baseLink.targetNode.nodeId;
                var sameLinks = [];
                sameLinks.push(baseLink);
                for (var j = 0; j < links.length; j++) {
                    var otherLink = links[j];
                    if (baseLink.linkId != otherLink.linkId && !otherLink.sameLink.isSetedSameLink) {
                        if ((otherLink.sourceNode.nodeId == nodeId1 && otherLink.targetNode.nodeId == nodeId2) ||
                            (otherLink.sourceNode.nodeId == nodeId2 && otherLink.targetNode.nodeId == nodeId1)) {
                            sameLinks.push(otherLink);
                            otherLink.sameLink.isSetedSameLink = true;
                        }
                    }
                }
                for (var k = 0; k < sameLinks.length; k++) {
                    var oneLink = sameLinks[k];
                    oneLink.sameLink.length = sameLinks.length; // 两点间连线数量
                    oneLink.sameLink.currentIndex = k; // 当前线索引
                }
            }
        }
        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            if (this._currentKeyNo == node.data.obj.id) { // 当前节点
                node.data.color = this._COLOR.node.current;
                node.data.strokeColor = this._COLOR.border.current;
            } else {
                node.data.color = this._COLOR.node.company;
                node.data.strokeColor = this._COLOR.border.company;
            }
        }
    }
    // 数据处理：设置唯一孩子
    setSingleLinkNodes(links) {
        let isSingleLink = (nodeId, links) => {
            var hasLinks = 0;
            var isSingle = true;
            for (var i = 0; i < links.length; i++) {
                var link = links[i];
                if (link.targetNode.nodeId == nodeId || link.sourceNode.nodeId == nodeId) {
                    hasLinks++;
                }
                if (hasLinks > 1) {
                    isSingle = false;
                    break;
                }
            }
            return isSingle;
        } // isSingleLink
        links.forEach((link, i) => {
            if (isSingleLink(link.sourceNode.nodeId, links)) {
                link.targetNode.layout.singleLinkChildren.push(link.sourceNode);
            }
            if (isSingleLink(link.targetNode.nodeId, links)) {
                link.sourceNode.layout.singleLinkChildren.push(link.targetNode);
            }
        });
    }
    // 数据处理：根据nodeId获取node 索引
    getNodesIndex(nodeId, nodes) {
        var index = 0;
        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            if (nodeId == node.nodeId) {
                index = i;
                break;
            }
        }
        return index;
    }
    // 数据处理：node是否存在
    isNodeExist(nodeId, nodes) {
        var exist = false;
        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            if (nodeId == node.nodeId) {
                exist = true;
                break;
            }
        }
        return exist;
    }
    // 数据处理：根据nodeId获取node
    getGraphNode(nodeId, nodes) {
        var node = null;
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].nodeId == nodeId) {
                node = nodes[i];
                break;
            }
        }
        return node;
    }
    // 数据处理：获取子节点
    getSubNodes(node, links) {
        var subNodes = [];
        var nodeId = node.nodeId;
        var level = node.layout.level;
        for (var i = 0; i < links.length; i++) {
            var link = links[i];
            if (link.sourceNode.nodeId == nodeId && link.targetNode.layout.level == level + 1) {
                subNodes.push(link.targetNode);
            }
            if (link.targetNode.nodeId == nodeId && link.sourceNode.layout.level == level + 1) {
                subNodes.push(link.sourceNode);
            }
        }
        subNodes = this.uniqeByKeys(subNodes, ['nodeId']);
        return subNodes;
    }
    drawGraph(elements) {
        this._companyRadius = 35,
            this._personRadius = 15,
            this._circleMargin = 10,
            this._circleBorder = 3;
        this.cy = cytoscape({
            container: document.getElementById('graphChart'),
            motionBlur: false,
            textureOnViewport: false,
            wheelSensitivity: 0.1,
            elements: elements,
            minZoom: 0.4,
            maxZoom: 2.5,
            layout: {
                name: 'preset',
                componentSpacing: 40,
                nestingFactor: 12,
                padding: 10,
                edgeElasticity: 800,
                stop: (e) => {
                    //解决浏览器标签切换排列问题
                    if (document[this.state] == 'hidden') {
                        this._isNeedReload = true;
                    } else {
                        this._isNeedReload = false;
                    }
                    setTimeout(() => {
                        if (document[this.state] == 'hidden') {
                            this._isGraphLoaded = false;
                            console.log('stop _isGraphLoaded=false');
                        } else {
                            this._isGraphLoaded = true;
                        }
                    }, 1000);
                }
            },
            style: [{
                selector: 'node',
                style: {
                    shape: 'ellipse',
                    width: (ele) => {
                        //当前节点有图片
                        if (ele.data("type") == 'Person' && this._currentKeyNo == ele.data('keyNo') && ele.data('hasImage')) {
                            return 80;
                        }
                        //有图片
                        if (ele.data('hasImage') && ele.data('type') == 'Person') {
                            return 60;
                        }
                        //普通
                        if (ele.data("type") == 'Company') {
                            return 60;
                        }
                        return 45;
                    },
                    height: (ele) => {
                        //当前节点有图片
                        if (ele.data("type") == 'Person' && this._currentKeyNo == ele.data('keyNo') && ele.data('hasImage')) {
                            return 80;
                        }
                        //有图片
                        if (ele.data('hasImage') && ele.data('type') == 'Person') {
                            return 60;
                        }
                        //普通
                        if (ele.data("type") == 'Company') {
                            return 60;
                        }
                        return 45;
                    },
                    'background-color': (ele) => {
                        return ele.data('color');
                    },
                    'background-fit': 'cover',
                    'background-image': (ele) => {
                        var hasImage = ele.data('hasImage');
                        var keyNo = ele.data('keyNo');
                        var type = ele.data('type');
                        if (hasImage && type == 'Person') {
                            return 'https://co-image.qichacha.com/PersonImage/' + keyNo + '.jpg';
                        } else {
                            return 'none';
                        }
                    },
                    // 'background-image-crossorigin': 'use-credentials',
                    'border-color': (ele) => {
                        return ele.data("borderColor");
                    },
                    'border-width': (ele) => {
                        if (ele.data('hasImage') && ele.data('type') == 'Person') {
                            return 3;
                        } else {
                            return 1;
                        }
                    },
                    'border-opacity': 1,
                    label: (ele) => {
                        var label = ele.data("name");
                        var length = label.length;
                        if (length <= 5) { // 4 5 4排列
                            return label;
                        } else if (length >= 5 && length <= 9) {
                            return label.substring(0, length - 5) + '\n' + label.substring(length - 5, length);
                        } else if (length >= 9 && length <= 13) {
                            return label.substring(0, 4) + '\n' + label.substring(4, 9) + '\n' + label.substring(9, 13);
                        } else {
                            return label.substring(0, 4) + '\n' + label.substring(4, 9) + '\n' + label.substring(9, 12) + '..';
                        }
                    },
                    'z-index-compare': 'manual',
                    'z-index': 20,
                    color: "#fff",
                    //'padding-top':0,
                    'padding': (ele) => {
                        if (ele.data("type") == 'Company') {
                            return 3;
                        }
                        return 0;
                    },
                    'font-size': 12,
                    //'min-height':'400px',
                    //'ghost':'yes',
                    //'ghost-offset-x':300,
                    //'font-weight':800,
                    //'min-zoomed-font-size':6,
                    'font-family': 'microsoft yahei',
                    'text-wrap': 'wrap',
                    'text-max-width': 60,
                    'text-halign': 'center',
                    'text-valign': 'center',
                    'overlay-color': '#fff',
                    'overlay-opacity': 0,
                    'background-opacity': 1,
                    'text-background-color': '#000',
                    'text-background-shape': 'roundrectangle',
                    'text-background-opacity': (ele) => {
                        if (ele.data('hasImage') && ele.data('type') == 'Person') {
                            return 0.3;
                        } else {
                            return 0
                        }
                    },
                    'text-background-padding': 0,
                    'text-margin-y': (ele) => {
                        //当前节点有图片
                        if (ele.data("type") == 'Person' && this._currentKeyNo == ele.data('keyNo') && ele.data('hasImage')) {
                            return 23;
                        }
                        // 有图片
                        if (ele.data('hasImage') && ele.data('type') == 'Person') {
                            return 16;
                        }
                        //
                        if (ele.data("type") == 'Company') {
                            return 4;
                        }
                        return 2;
                    },
                },
            },
            {
                selector: 'edge',
                style: {
                    color: (ele) => {
                        return '#999';
                        // return ele.data("color");
                    },
                    'line-style': (ele) => {
                        return 'solid';
                        /*if(ele.data('data').obj.type == 'INVEST'){
                            return 'solid';
                        } else {
                            return 'dashed'
                        }*/
                    },
                    'curve-style': 'bezier',
                    'control-point-step-size': 20,
                    'target-arrow-shape': 'triangle',
                    'target-arrow-color': (ele) => {
                        return '#999';
                        //   return ele.data("color");
                    },
                    'arrow-scale': 0.8,
                    'line-color': '#D6D6D6',
                    label: (ele) => {
                        return '';
                    },
                    'text-opacity': 1,
                    'font-size': 12,
                    'background-color': (ele) => {
                        return '#ccc';
                        //   return ele.data("color");
                    },
                    'width': 0.6,
                    'overlay-color': '#fff',
                    'overlay-opacity': 0,
                    'font-family': 'microsoft yahei',
                }
            },
            {
                "selector": ".autorotate",
                "style": {
                    // "edge-text-rotation": "autorotate"
                }
            },
            {
                selector: '.nodeActive',
                style: {
                    'border-color': (ele) => {
                        return ele.data("color");
                    },
                    'border-width': 10,
                    'border-opacity': 0.5
                }
            },
            {
                selector: '.edgeShow',
                style: {
                    'color': '#999',
                    'text-opacity': 1,
                    'font-weight': 400,
                    label: (ele) => {
                        return ele.data("label");
                    },
                    'font-size': 10,
                }
            },
            {
                selector: '.investType',
                style: {
                    color: (ele) => {
                        return "#999";
                    },
                    'arrow-scale': 0.8,
                    'width': 1.5,
                    'text-opacity': 1,
                    'font-size': 12,
                    'text-background-color': '#fff',
                    'text-background-opacity': 0.8,
                    'text-background-padding': 2,
                    'source-text-margin-y': 20,
                    'target-text-margin-y': 20,
                    //'text-margin-y':3,
                    'z-index-compare': 'manual',
                    'z-index': 22,
                    'line-color': (ele) => {
                        return ele.data("color") || '#999';
                    },
                    'target-arrow-color': (ele) => {
                        return ele.data("color") || '#999';
                        // return ele.data("color");
                    },
                    label: (ele) => {
                        // let t = this.hideRelation ? tt : (obj.name + " " + tt);
                        if (this.hideRelation) {
                            return "";
                        } else {
                            return ele.data('data').obj.name;
                        }
                    }
                }
            },
            {
                selector: '.edgeActive',
                style: {
                    color: (ele) => {
                        return "#999";
                    },
                    'arrow-scale': 0.8,
                    'width': 1.5,
                    'text-opacity': 1,
                    'font-size': 12,
                    'text-background-color': '#fff',
                    'text-background-opacity': 0.8,
                    'text-background-padding': 2,
                    'source-text-margin-y': 20,
                    'target-text-margin-y': 20,
                    //'text-margin-y':3,
                    'z-index-compare': 'manual',
                    'z-index': 22,
                    'line-color': (ele) => {
                        return ele.data("color") || '#999';
                        // return ele.data("color");
                    },
                    'target-arrow-color': (ele) => {
                        return ele.data("color") || '#999';
                        // return ele.data("color");
                    },
                    label: (ele) => {
                        /*if(ele.data('data').obj.type == 'INVEST'){
                            return 'solid';
                        } else {
                            return 'dashed'
                        }*/
                        // return "投资";
                        return ele.data("label");
                    }
                }
            },
            {
                selector: '.hidetext',
                style: {
                    'text-opacity': 0,
                }
            },
            {
                selector: '.dull',
                style: {
                    'z-index': 1,
                    opacity: 0.2,
                }
            },
            {
                selector: '.nodeHover',
                style: {
                    shape: 'ellipse',
                    'background-opacity': 0.9,
                }
            },
            {
                selector: '.edgeLevel1',
                style: {
                    label: (ele) => {
                        return ele.data("label");
                    },
                }
            },
            {
                selector: '.edgeShowText',
                style: {
                    label: (ele) => {
                        return ele.data("label");
                    },
                }
            },
            {
                selector: '.lineFixed', // 加载完成后，加载该类，修复线有锯齿的问题
                style: {
                    'overlay-opacity': 0,
                }
            },
            ],
        });
        this.cy.on('click', 'node', (evt) => {
            if (evt.target._private.style['z-index'].value == 20) { // 非暗淡状态
                this._isFocus = true;
                var node = evt.target;
                this.highLight([node._private.data.id], this.cy);
                if (node.hasClass("nodeActive")) {
                    this.activeNode = null;
                    $('#company-detail').hide();
                    node.removeClass("nodeActive");
                    this.cy.collection("edge").removeClass("edgeActive");
                } else {
                    var nodeData = node._private.data;
                    if (nodeData.type == 'Company') {
                        window['showDetail2'](nodeData.data.obj, nodeData.keyNo, 'company_muhou3');
                        this.cy.collection("node").addClass('nodeDull');
                    } else {
                        // showDetail2(nodeData.keyNo, 'company_muhou3', 'person');
                        this.cy.collection("node").addClass('nodeDull');
                    }
                    this.activeNode = node;
                    this.cy.collection("node").removeClass("nodeActive");
                    this.cy.collection("edge").removeClass("edgeActive");
                    node.addClass("nodeActive");
                    node.neighborhood("edge").removeClass("opacity");
                    // node.neighborhood("edge").addClass("edgeActive");
                    node.neighborhood("edge").connectedNodes().removeClass("opacity");
                }
                //_firstTab = false;
            } else {
                this._isFocus = false;
                this.activeNode = null;
                this.cy.collection("node").removeClass("nodeActive");
                $('.tp-detail').fadeOut();
                this.cancelHighLight();
            }
        });
        var showTipsTime = null;
        this.cy.on('mouseover', 'node', (evt) => {
            if (evt.target._private.style['z-index'].value == 20) { // 非暗淡状态
                //
                $("#Main").css("cursor", "pointer");
                //
                var node = evt.target;
                node.addClass('nodeHover');
                if (!this._isFocus) {
                    this.cy.collection("edge").removeClass("edgeShow");
                    this.cy.collection("edge").removeClass("edgeActive");
                    // node.neighborhood("edge").addClass("edgeActive");
                }
                // 提示
                clearTimeout(showTipsTime);
                //if(node._private.data.name.length > 13 || (node._private.data.keyNo[0] == 'p' && node._private.data.name.length > 3) || node._private.data.layout.revel > 2){
                if (node._private.data.name.length > 13 || (node._private.data.keyNo && node._private.data.keyNo[0] == 'p' && node._private.data.name.length > 3)) {
                    showTipsTime = setTimeout(() => {
                        var name = node._private.data.name;

                        // 显示在节点位置
                        /*var tipWidth = name.length * 12 + 16;
                        var x = node._private.data.d3x + 655 - (tipWidth / 2);
                        var y = node._private.data.d3y + 598;
                        if(node._private.data.type == 'Person'){
                            y = node._private.data.d3y + 590;
                        }*/

                        // 显示在鼠标位置
                        var event = evt.originalEvent || window.event;
                        var x = event.clientX + 10;
                        var y = event.clientY + 10;
                        var html = "<div class='tips' style='font-size:12px;background:white;box-shadow:0px 0px 3px #999;border-radius:1px;opacity:1;padding:1px;padding-left:8px;padding-right:8px;display:none;position: absolute;left:" + x + "px;top:" + y + "px;'>" + name + "</div>";
                        $('body').append($(html));
                        $('.tips').fadeIn();
                    }, 600);
                }
            }
        });
        this.cy.on('mouseout', 'node', (evt) => {
            $("#Main").css("cursor", "default");
            // 提示
            $('.tips').fadeOut(() => {
                $('.tips').remove();
            });
            clearTimeout(showTipsTime);
            //
            var node = evt.target;
            node.removeClass('nodeHover');
            if (!this._isFocus) {
                this.cy.collection("edge").removeClass("edgeActive");
                /*if(moveTimeer){
                    clearTimeout(moveTimeer);
                }*/
                /*moveTimeer = setTimeout(function() {
                    this.cy.collection("edge").addClass("edgeActive");
                    //this.cy.collection("edge").addClass("edgeShow");
                }, 300);
                if(this.activeNode){
                    this.activeNode.neighborhood("edge").addClass("edgeActive");
                }*/
            }
        });
        this.cy.on('mouseover', 'edge', (evt) => {
            if (!this._isFocus) {
                var edge = evt.target;
                /*if(moveTimeer){
                    clearTimeout(moveTimeer);
                }*/
                this.cy.collection("edge").removeClass("edgeActive");
                // this.cy.collection("edge").removeClass("edgeActive");
                edge.addClass("edgeActive");
                /*if(this.activeNode){
                    this.activeNode.neighborhood("edge").addClass("edgeActive");
                }*/
            }
        });
        this.cy.on('mouseout', 'edge', (evt) => {
            if (!this._isFocus) {
                var edge = evt.target;
                edge.removeClass("edgeActive");
                // moveTimeer = setTimeout(function() {
                //     this.cy.collection("edge").addClass("edgeActive");
                //     //this.cy.collection("edge").addClass("edgeShow");
                // }, 400);
                if (this.activeNode) {
                    // this.activeNode.neighborhood("edge").addClass("edgeActive");
                }
            }
        });
        this.cy.on('vmousedown', 'node', (evt) => {
            var node = evt.target;
            if (!this._isFocus) {
                this.highLight([node._private.data.id], this.cy);
            }
        });
        this.cy.on('tapend', 'node', (evt) => {
            if (!this._isFocus) {
                this.cancelHighLight();
            }
        });
        this.cy.on('click', 'edge', (evt) => {
            this._isFocus = false;
            this.activeNode = null;
            this.cy.collection("node").removeClass("nodeActive");
            $('.tp-detail').fadeOut();
            this.cancelHighLight();
        });
        this.cy.on('click', (event) => {
            var evtTarget = event.target;
            if (evtTarget === this.cy) {
                this._isFocus = false;
                this.activeNode = null;
                this.cy.collection("node").removeClass("nodeActive");
                this.cy.collection("edge").removeClass("edgeActive");
                $('.tp-detail').fadeOut();
                this.cancelHighLight();
                //this.cy.collection("edge").addClass("edgeActive");
            } else {
                this.cy.collection("edge").removeClass("edgeActive");
            }
        });
        this.cy.on('zoom', () => {
            if (this.cy.zoom() < 0.5) {
                this.cy.collection("node").addClass("hidetext");
                this.cy.collection("edge").addClass("hidetext");
            } else {
                this.cy.collection("node").removeClass("hidetext");
                this.cy.collection("edge").removeClass("hidetext");
            }
            // 加载完成后，加载该类，修复线有锯齿的问题
            setTimeout(() => {
                this.cy.collection("edge").removeClass("lineFixed");
                this.cy.collection("edge").addClass("lineFixed");
            }, 200);
        })
        this.cy.on('pan', () => {
            // 加载完成后，加载该类，修复线有锯齿的问题
            setTimeout(() => {
                this.cy.collection("edge").removeClass("lineFixed");
                this.cy.collection("edge").addClass("lineFixed");
            }, 200);
        });
        // 定位
        this.cy.nodes().positions((node, i) => {
            // 保持居中
            if (node._private.data.keyNo == this._currentKeyNo) {
                var position = this.cy.pan();
                this.cy.pan({
                    x: position.x - node._private.data.d3x,
                    y: position.y - node._private.data.d3y
                });
            }
            //
            return {
                x: node._private.data.d3x,
                y: node._private.data.d3y
            };
        });
        this.cy.ready(() => {

            if (!$('#TrTxt').hasClass('active')) {
                $('#TrTxt').click();
            }
            this.cy.zoom({
                level: 1.0000095043745896, // the zoom level
            });
            $("#load_data").hide();
            this.cy.collection("edge").addClass("investType");
            // 加载完成后，加载该类，修复线有锯齿的问题
            setTimeout(() => {
                this.cy.collection("edge").addClass("lineFixed");
            }, 400);
            // 首页的插入图谱默认高亮第一层
            if (this._rootData && this._rootData.nodes.length > 30 && typeof window['_INSERT_URL'] != 'undefined' && window['_INSERT_URL']) {
                this.highLight([this._rootNode.nodeId], this.cy);
            }
        });
    }

    highLight(nodeIds, cy) {
        cy.collection("node").removeClass("nodeActive");
        cy.collection("edge").removeClass("edgeActive");
        cy.collection("node").addClass('dull');
        cy.collection("edge").addClass('dull');
        for (var i = 0; i < nodeIds.length; i++) {
            var nodeId = nodeIds[i];
            cy.nodes((node) => {
                var nodeData = node._private.data;
                if (nodeData.id == nodeId) {
                    node.removeClass('dull');
                    //node.addClass('nodeActive');
                    node.neighborhood("edge").removeClass("dull");
                    // node.neighborhood("edge").addClass("edgeActive");
                    node.neighborhood("edge").connectedNodes().removeClass("dull");
                    //node.neighborhood("edge").connectedNodes().addClass("nodeActive");
                }
            });
        }
    }
    cancelHighLight() {
        this.cy.collection("node").removeClass("nodeActive");
        this.cy.collection("edge").removeClass("edgeActive");
        this.cy.collection("node").removeClass('dull');
        this.cy.collection("edge").removeClass('dull');
    }
    /**其他*/
    getD3Position(graph) {
        this.getLayoutNode(graph);
        let filterLinks1 = (graph) => {
            // 筛选用于布局的links
            var layoutLinks = [];
            for (var i = 0; i < graph.links.length; i++) {
                var link = graph.links[i];
                var sourceLevel = link.sourceNode.layout.level;
                var targetLevel = link.targetNode.layout.level;
                var sourceNode = link.sourceNode;
                var targetNode = link.targetNode;
                //            sourceNode.layout.isSetLink = false;
                //            targetNode.layout.isSetLink = false;

                //            if(!sourceNode.layout.isSetLink && !targetNode.layout.isSetLink){
                if ((sourceLevel == 1 && targetLevel == 2) || (sourceLevel == 2 && targetLevel == 1)) {
                    //                    sourceNode.layout.isSetLink = true;
                    //                    targetNode.layout.isSetLink = true;
                    layoutLinks.push(link);
                }
                if ((sourceLevel == 2 && targetLevel == 3) || (sourceLevel == 3 && targetLevel == 2)) {
                    //                    sourceNode.layout.isSetLink = true;
                    //                    targetNode.layout.isSetLink = true;
                    layoutLinks.push(link);
                }
                //            }
            }
            layoutLinks.forEach((link, i) => {
                if (link.targetNode.layout.level == 3) {
                    layoutLinks.forEach((alink, j) => {
                        if (alink.linkId != link.linkId &&
                            (alink.targetNode.nodeId == link.targetNode.nodeId || alink.sourceNode.nodeId == link.targetNode.nodeId)) {
                            layoutLinks.splice(j, 1);
                        }
                    })
                }
                if (link.sourceNode.layout.level == 3) {
                    layoutLinks.forEach((alink, j) => {
                        if (alink.linkId != link.linkId &&
                            (alink.targetNode.nodeId == link.sourceNode.nodeId || alink.sourceNode.nodeId == link.sourceNode.nodeId)) {
                            layoutLinks.splice(j, 1);
                        }
                    })
                }
            })
            return layoutLinks;
        }


        let initD3Data = (graph) => { //
            let getIndex = (val, arr) => {
                var index = 0;
                for (var i = 0; i < arr.length; i++) {
                    var obj = arr[i];
                    if (val == obj.nodeId) {
                        index = i;
                        break;
                    }
                }
                return index;
            }
            /*封装符合d3的数据*/
            for (var i = 0; i < graph.nodes.length; i++) {
                var node = graph.nodes[i];
                node.id = node.nodeId;
            }
            for (var i = 0; i < graph.links.length; i++) {
                var link = graph.links[i];
                link.source = getIndex(link.sourceNode.nodeId, graph.nodes);
                link.target = getIndex(link.targetNode.nodeId, graph.nodes);
                link.index = i; //
            }
            graph.layoutLinks = filterLinks1(graph);
            // 围绕节点最大数值
            this.setSingleLinkNodes(graph.layoutLinks);
            graph.nodes.forEach((node, i) => {
                if (node.layout.singleLinkChildren.length && this._maxChildrenLength < node.layout.singleLinkChildren.length) {
                    this._maxChildrenLength = node.layout.singleLinkChildren.length
                }
            })
        }
        initD3Data(graph); //
        var width = $("#MainD3 svg").width();
        var height = $("#MainD3 svg").height();
        var strength = -600,
            distanceMax = 330,
            theta = 0,
            distance = 130,
            colideRadius = 35,
            distanceMin = 400;
        // 根据节点数量调节
        if (graph.nodes.length < 50) {
            strength = -800;
            distanceMax = 400;
        } else if (graph.nodes.length > 50 && graph.nodes.length < 100) {
            strength = -800;
            distanceMax = 350;
            distance = 130;
            colideRadius = 35;
        } else if (graph.nodes.length > 100 && graph.nodes.length < 150) {
            strength = -900;
            distanceMax = 450;
        } else if (graph.nodes.length > 150 && graph.nodes.length < 200) {
            strength = -1000;
            distanceMax = 500;
        } else if (graph.nodes.length > 200) {
            strength = -1600;
            distanceMax = 500;
            theta = 0.6, distance = 100, colideRadius = 35;
        }
        // 根据围绕数量调节
        if (this._maxChildrenLength > 50 && this._maxChildrenLength < 100) {
            strength = -2000;
            distanceMax = 500;
        } else if (this._maxChildrenLength > 1000 && this._maxChildrenLength < 2000) {
            strength = -4000;
            distanceMax = 1500;
        }
        d3.forceSimulation(graph.nodes)
            .force('charge', d3.forceManyBody().strength(strength).distanceMax(distanceMax).theta(theta))
            .force('link', d3.forceLink(graph.layoutLinks).distance(distance))
            .force('center', d3.forceCenter(width / 2, height / 2))
            .force('collide', d3.forceCollide().radius(() => {
                return colideRadius;
            }))
        //.on('tick',ticked);
    }

    //设置符合Layout的node
    getLayoutNode(graphData) {
        var layoutNode = {
            current: this._rootNode,
            level1: [],
            level2: [],
            level3: [],
            level4: [],
            level5: [],
            other: []
        };
        graphData.nodes.forEach((node, i) => {
            switch (node.layout.level) {
                case 1:
                    layoutNode.level1.push(node);
                    break;
                case 2:
                    layoutNode.level2.push(node);
                    break;
                case 3:
                    layoutNode.level3.push(node);
                    break;
                case 4:
                    layoutNode.level4.push(node);
                    break;
                case 5:
                    layoutNode.level5.push(node);
                    break;
                default:
                    layoutNode.other.push(node);
                    break;
            }
        });
        this._layoutNode = layoutNode;
        return layoutNode;
    }
    //将rootData转换成cy图谱框架所需要的数据结构
    transformData(graphData) {
        let getLinkLabel = (link) => {
            var
                obj = link.data.obj;
            let t = (obj.ratio ? ("持股比例：" + parseInt(obj.ratio * 100 + "") / 100 + "%, ") : "") + (obj.property ? obj.property : "");
            return t;
           
        }
        this.id = graphData.nodes[0].nodeId;
        var els = {};
        els.nodes = [];
        els.edges = [];

        graphData.nodes.forEach((node) => {
            els.nodes.push({
                data: {
                    nodeId: node.nodeId,
                    type: 'Company',
                    keyNo: node.data.obj.id,
                    data: node.data,
                    id: node.nodeId,
                    name: node.data.obj.name,
                    category: node.data.category,
                    color: node.data.color,
                    borderColor: node.data.strokeColor,
                    layout: node.layout,
                    d3x: node.x,
                    d3y: node.y,
                    hasImage: node.data.obj.hasImage || false,
                    //labelLine:1 // 解决文字行距问题，第1行
                }
            });
        });
        graphData.links.forEach((link, i) => {
            var color = '#999';
            var label = getLinkLabel(link);
            els.edges.push({
                data: {
                    data: link.data,
                    color: color,
                    // color: "#000000",
                    id: link.linkId,
                    label: label,
                    source: link.sourceNode.nodeId,
                    target: link.targetNode.nodeId
                },
                classes: 'autorotate'
            });
        });
        return els;
    }
    // 图谱、筛选面板更新
    domUpdate() {
        this.getD3Position(this. _rootData);
        setTimeout(() => {
            this.drawGraph(this.transformData(this._rootData));
        }, 500);
    }
    getData(keyNo, param) {
        var defaultParam = {
            keyNo: keyNo,
        }
        param = $.extend(defaultParam, param);
        $("#load_data").show();

        let re = this.configData;
        if (!re || !re.nodes || re.nodes.length == 0) {
            $("#load_data").hide();
            $(".printLogo").hide();
            $(".tp-foot").hide();
            $("#Main").hide();
            $('#no_data').show();
            return;
        } else {
            $(".printLogo").show();
            $(".tp-foot").show();
            $("#Main").show();
            $('#no_data').hide();
        }
        this._rootData = this.getRootData(re);
        this.domUpdate();
    }
}