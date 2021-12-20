const sa = (function() {
  var sa = null, th = {};
  var _ = {
    d:document,
    w:window,
    n:navigator,
    ES_TEST_ID : "es_test_id",
    POSITION_ID: "position_id",
    ENTRY_POSITION_ID: "entry_position_id",
    session_props:["entry_position_id"]
  };
  th.para = {
    SDK_URL:'https://h5.test.bestpay.net/common/js/sensorsdata-1.15.4.js',
    CHECK_DATA_URL: 'https://h5.test.bestpay.net/common/js/trackingHelper/checkTrack.min.js',
    SA_SERVER_URL: "https://motion.bestpay.cn:8106/sa?project=",
    SA_TEST_SERVER_URL:"https://motion.bestpay.cn:8106/sa",
    VIEW_PATH_LENGTH:3,
    CLICK_PATH_LENGTH:3,
    SDK_VERSION: "0.0.6"
  };
  _.isNotEmptyString = function(s) {
    return typeof s == "string" && s.trim().length > 0
  };
  _.isNotObject = function(s){
    return typeof s == null || typeof s !== "object"
  };
  _.log = function() {
    if (window.console && typeof console.log !== "undefined") {
      console.log.apply(console, Array.prototype.slice.call(arguments, 0))
    }
  };
  _.assign = function(target){
    if (typeof Object.assign != "function") {
      "use strict";
      if (target == null) {
        throw new TypeError("Cannot convert undefined or null to object")
      }
      target = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source != null) {
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key]
            }
          }
        }
      }
      return target

    }else{
      return Object.assign(target)
    }
  };
  _.extend = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      for (var prop in source) {
        if (source[prop] !== void 0) {
          obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };
  _.cookieAvailable = function() {
    var available = false;
    var documentObj = this.d;
    var navigatorObj = this.n;
    try {
      if ("cookie" in documentObj && !!navigatorObj.cookieEnabled) {
        documentObj.cookie = "es_feature_cookie=1";
        available = documentObj.cookie.indexOf("ac_feature_cookie") !== -1;
        documentObj.cookie = "es_feature_cookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
      }
    } catch(err) {}
    return available
  };
  _.localStorageAvailable = function () {
    var windowObj = _.w;
    var available = false;
    try {
      available = !!(windowObj.localStorage && windowObj.localStorage.non_existent !== null)
    } catch(err) {}
    return available
  };
  _.cookieWrite = function(e, t, i) {
    var r = new Date;
    r.setTime(r.getTime() + 24 * i * 60 * 60 * 1e3);
    var o = "expires=" + r.toGMTString();
    document.cookie = e + "=" + escape(t) + "; " + o
  };
  _.cookieRead = function(e) {
    for (var t = e + "",
           i = document.cookie.split(";"), r = 0; r < i.length; r++) {
      var o = i[r].trim();
      if (0 == o.indexOf(t)) return unescape(o.substring(t.length + 1, o.length))
    }
    return null
  };
  _.isJSONString = function(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };
  _.api_localStorage = function(){
    try {
      var api = window.localStorage;
    } catch(e) {}
    return {
      available: _.localStorageAvailable(),
      getItem: function (key) {
        return api.getItem(key)
      },
      setItem: function (key, value) {
        api.setItem(key, value);
        return true
      },
      removeItem: function (key) {
        api.removeItem(key);
        return true
      }
    };
  };
  _.getQueryString = function(name){
    var reg = new RegExp("(\\?|&)"+ name +"=([^&|^#]*)","g");
    var r = window.location.href.substr(1).match(reg);
    if (r != null){
      return r[r.length-1].split("=")[1];
    }else {
      return null;
    }
  };
  _.isDeugMode = function(){
    var r = _.getQueryString(_.ES_TEST_ID);
    if (r != null){
      return true;
    }
  };
  _.sensorDataTrack = function(event,props){
    if (!_.isNotEmptyString(event)){
      console.warn("鍙傛暟涓璭vent涓嶈兘涓虹┖");
      return;
    }
    checkData(event, props);
    if ((typeof EShip_APP_JS_Bridge === 'object') && EShip_APP_JS_Bridge.tracker) {
      props.event = event;
      EShip_APP_JS_Bridge.tracker(JSON.stringify(props));
      props.event = event;
    }else if ((/sensors-verify/.test(navigator.userAgent) || /sa-sdk-ios/.test(navigator.userAgent)) && !window.MSStream){
      var iframe = document.createElement('iframe');
      iframe.setAttribute('src', 'TrackingHelper://trackEvent?data=' + encodeURIComponent(JSON.stringify(props)));
      document.documentElement.appendChild(iframe);
      iframe.parentNode.removeChild(iframe);
      iframe = null;
      (typeof callback === 'function') && callback();
    }else {
      SA.track(event,props);
    }
  };
  _.getContextData = function(props){
    var sd = {};
    for (var i in _.session_props){
      var key = _.session_props[i];
      if (_.isNotEmptyString(key)) {
        var val = th.store._internal_state[key];
        if (_.isNotEmptyString(val)){
          sd[key] = val
        }
      }
    }
    return Object.assign(sd,th.store._state,props||{});
  };
  th.store = {
    _state:{},
    _internal_state:{},
    setState: function(e, t) {
      this._state[e] = t;
      SA.registerPage(this._state);
      _.cookieWrite("th_store",JSON.stringify(this._state),3650);
    },
    setStateWithJsonObject:function(e){
      if (e !== null && typeof e == "object") {
        this._state = Object.assign({},this._state,e);
        SA.registerPage(this._state);
        _.cookieWrite("th_store",JSON.stringify(this._state),3650);
      }
    },
    getState: function(){
      var data= _.cookieRead("th_store");
      var state = null;
      if (data !== null && (typeof(state = JSON.parse(data)) === 'object')) {
        this._state = state || {};
      }
    },
    setInternal: function(e, t) {
      this._internal_state[e] = t;
      _.cookieWrite("th_internal_store",JSON.stringify(this._internal_state))
    },
    getInternalState: function(){
      var data= _.cookieRead("th_internal_store");
      var in_state = null;
      if (data !== null && (typeof(in_state = JSON.parse(data)) === 'object')) {
        this._internal_state = in_state || {};
      }
    },
    init:function () {
      this.getState();
      this.getInternalState();
      this._internal_state.pagesStartTime = {};
    },
    updateViewPath : function(pageName){
      var viewPathArray = this._internal_state.viewPathArray;
      if (viewPathArray == null ){
        viewPathArray = [pageName];
      }else if(viewPathArray.length<th.para.VIEW_PATH_LENGTH){
        viewPathArray.push(pageName);
      } else if(viewPathArray.length === th.para.VIEW_PATH_LENGTH){
        viewPathArray.shift();
        viewPathArray.push(pageName);
      }
      this.setInternal("viewPathArray",viewPathArray);
      return viewPathArray.join("#");
    },
    updateClickPath : function(element_name){
      var clickPathArray = this._internal_state.clickPathArray;
      if (clickPathArray == null ){
        clickPathArray = [element_name];
      } else if(clickPathArray.length < th.para.CLICK_PATH_LENGTH){
        clickPathArray.push(element_name)
      } else if(clickPathArray.length === th.para.CLICK_PATH_LENGTH){
        clickPathArray.shift();
        clickPathArray.push(element_name);
      }
      this.setInternal("clickPathArray",clickPathArray);
      return clickPathArray.join("#");
    },
    setPageStart:function(pageName){
      if (_.isNotEmptyString(pageName)){
        var date = new Date;
        this._internal_state.pagesStartTime[pageName] = date.getTime();
      }
    },
    setPageStop:function(pageName){
      if (_.isNotEmptyString(pageName)){
        var startTime = this._internal_state.pagesStartTime[pageName];
        if( typeof startTime == "number"){
          var date= new Date;
          var pd = 0;
          if (pd>24*60*60) {
            pd = 0
          }else {
            pd = ((date.getTime()- startTime)/1000).toFixed(1);
          }
          delete this._internal_state.pagesStartTime[pageName];
          return pd;
        }
      }
    }
  };
  th.init= function(devEnv, product, props){
    if (_.isDeugMode()){
      devEnv = true;
    }
    var para = {
      sdk_url: th.para.SDK_URL,
      name: 'SA',
      server_url:devEnv === true?th.para.SA_TEST_SERVER_URL:
        _.isNotEmptyString(product)?th.para.SA_SERVER_URL + product:th.para.SA_TEST_SERVER_URL,
      use_app_track:false
    };
    para = _.assign(para,props);
    this.mount(para);
    this.store.init();
    if (_.isDeugMode()){
      SA.registerPage({
        es_test_id: _.getQueryString(_.ES_TEST_ID)
      });
    }
  };
  th.mount = function(para) {
    var p = para.sdk_url, n = para.name, w = window, d = document, s = 'script',x = null,y = null;
    w['sensorsDataAnalytic201505'] = n;
    w[n] = w[n] || function(a) {return function() {(w[n]._q = w[n]._q || []).push([a, arguments]);}};
    var ifs = ['track','quick','register','registerPage','registerOnce','clearAllRegister','trackSignup', 'trackAbtest',    'setProfile','setOnceProfile','appendProfile', 'incrementProfile', 'deleteProfile', 'unsetProfile',     'identify','login','logout','trackLink','clearAllRegister'];
    for (var i = 0; i < ifs.length; i++) {
      w[n][ifs[i]] = w[n].call(null, ifs[i]);
    }
    if (!w[n]._t) {
      x = d.createElement(s), y = d.getElementsByTagName(s)[0];
      x.async = 1;
      x.src = p;
      w[n].para = para;
      y.parentNode.insertBefore(x, y);
      var checkjs =  d.createElement(s);
      checkjs.async = 1
      checkjs.src = th.para.CHECK_DATA_URL;
      y.parentNode.insertBefore(checkjs, y);
    }
  };
  th.enableDebugMode = function(sensorDataObj){
    sensorDataObj.registerPage({
      es_test_id: _.getQueryString(_.ES_TEST_ID),
    });
  };
  th.trackAction = function(props){
    if (!!props) {
      var eventType = props.event;
      if (!_.isNotEmptyString(eventType)) {
        console.warn("event 鍙傛暟涓嶈兘涓虹┖");
      }else if(eventType === "pageview"){
        delete props.event;
        th.trackPageView(props);
      }else if(eventType === "click"){
        delete props.event;
        th.trackClick(props);
      }else {
        _.sensorDataTrack(eventType,props);
      }
    }
  };
  th.trackPageView = function(props){
    if (_.isNotObject(props)){
      _.log("TrackingHelper.trackPageView : 鍙傛暟蹇呴』涓轰竴涓狫SON瀵硅薄");
      return
    }
    var position_id =  _.getQueryString(_.POSITION_ID);
    if (_.isNotEmptyString(position_id)){
      props['position_id'] = position_id
    }
    var entry_position_id =  _.getQueryString(_.ENTRY_POSITION_ID);
    if (_.isNotEmptyString(entry_position_id)){
      props['entry_position_id'] = entry_position_id;
      this.store.setInternal("entry_position_id",entry_position_id);
    }
    var data = _.getContextData(props);
    var currentPage = data.position_name;
    if(_.isNotEmptyString(currentPage)){
      this.store.setPageStart(currentPage);
      var viewPath = this.store.updateViewPath(currentPage);
      this.store.setState("view_path",viewPath);
      _.sensorDataTrack("pageview",data);
      this.store.setState("last_page",currentPage);
    }
  };
  th.trackClick = function(props){
    if (_.isNotObject(props)){
      _.log("TrackingHelper.trackClick : 鍙傛暟蹇呴』涓轰竴涓狫SON瀵硅薄");
      return
    }
    var data = _.getContextData(props);
    var element_name = data.position_name;
    if(_.isNotEmptyString(element_name)){
      var clickPath = this.store.updateClickPath(element_name);
      this.store.setState("click_path",clickPath);
      _.sensorDataTrack("click",data);
    }
  };
  th.trackLogin = function(accountId,loginType,props){
    var data = _.getContextData(props);
    if (_.isNotEmptyString(accountId)) {
      SA.login(accountId);
      this.store.setState("account_id",accountId)
    }
    if (_.isNotEmptyString(loginType)){
      data["login_type"] = loginType;
    }
    this.store.setState("login_state","login");
    _.sensorDataTrack("login",data)
  };
  th.trackLogout = function(){
    SA.logout();
    this.store.setState("login_state","logout");
    var data = _.getContextData();
    _.sensorDataTrack("logout",data)
  };
  th.registerGlobalProps = function(props){
    this.store.setStateWithJsonObject(props);
  };
  th.trackPageStart = function(position_name){
    if(_.isNotEmptyString(position_name)){
      this.store.setPageStart(position_name);
    }else {
      _.log("TrackingHelper.trackPageStart : 鍙傛暟涓嶈兘涓虹┖")
    }

  };
  th.trackPageStop = function(props){
    if (_.isNotObject(props)){
      _.log("TrackingHelper.trackPageStop : 鍙傛暟涓嶈兘涓虹┖");
      return
    }
    var data = _.getContextData(props);
    var currentPage = data.position_name;
    if(_.isNotEmptyString(currentPage)){
      var pd = this.store.setPageStop(currentPage);
      if (pd){
        data["pageview_duration"] = pd;
        _.sensorDataTrack("pagestay",data);
      }
    }
  };
  th._ = _;
  sa = {
    enable: false,
    pageEventId: '',
    clickEventId: '',
    track() {
      var eventId = arguments.length > 1 ? arguments[0] : this.clickEventId;
      var props = arguments.length > 1 ? arguments[1] : arguments[0];
      if (!eventId) {
          console.warn('璇疯缃〉闈d锛岀劧鍚庤繘琛屼娇鐢�');
          return;
      }
      checkData(eventId, props);
      SA.track(eventId, props || {});
    },
    trackPage() {
      if (!this.enable) {
        return;
      }
      var pageEventId = arguments.length > 1 ? arguments[0] : this.pageEventId;
      var props = arguments.length > 1 ? arguments[1] : arguments[0];
      if (!pageEventId) {
        console.warn('璇疯缃〉闈d锛岀劧鍚庤繘琛屼娇鐢�');
        return;
      }
      checkData(pageEventId, props);
      SA.track(pageEventId, props);
    },
    trackClick() {
      if (!this.enable) {
        return;
      }
      var clickEventId = arguments.length > 1 ? arguments[0] : this.clickEventId;
      var props = arguments.length > 1 ? arguments[1] : arguments[0];
      if (!clickEventId) {
          console.warn('璇疯缃偣鍑讳簨浠禝d锛岀劧鍚庤繘琛屼娇鐢�');
          return;
      }
      checkData(clickEventId, props);
      SA.track(clickEventId, props);
    },
    login(accountId) {
      SA.login(accountId)
    },
    TrackingHelper :th
  };
  window.sa = sa;
  window.TrackingHelper = th;
  return sa;
}());

export default sa;