//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js')
var order = ['red', 'yellow', 'blue', 'green', 'red']
var initData = 'this is first line\nthis is second line'
var extraLine = [];
Page({
  
  //页面的初始数据
  data: {
    time: '12:01',
    array: ['美国', '中国', '巴西', '日本'],
    index2:0,
    countryArray: [
      {
        id: 0,
        name: '美国'
      },
      {
        id: 1,
        name: '中国'
      },
      {
        id: 2,
        name: '巴西'
      },
      {
        id: 3,
        name: '日本'
      }
    ],
    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ],
    percent:0,
    text: initData,
    iconSize: [20, 30, 40, 50, 60, 70],
    iconColor: [
      'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
    ],
    iconType: [
      'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
    ],
    toView: 'red',
    scrollTop: 100,
    a:1,
    b:2,
    zero:0,
    object:{
      key:"hello"
    },
    array2:["MINA"],
    message:"小程序大法",
    condition:true,
    location:'',
    country:'',
    sliderList:[
      { selected: true, imageSource: 'http://up.enterdesk.com/edpic/7d/35/13/7d3513ecabdf1f7eb4f1407f0e82f23c.jpg' },
      { selected: false, imageSource: '../../images/2.jpg' },
      { selected: false, imageSource: 'http://pic1.win4000.com/wallpaper/9/538544be6ae36.jpg' },
    ],
    today:'',
    inTheaters:{},
    containerShow:true,
    weatherData:'',
    air:'',
    dress:'',
    objectArray: [
      { id: 5, unique: 'unique_5' },
      { id: 4, unique: 'unique_4' },
      { id: 3, unique: 'unique_3' },
      { id: 2, unique: 'unique_2' },
      { id: 1, unique: 'unique_1' },
      { id: 0, unique: 'unique_0' },
    ],
    numberArray: [1, 2, 3, 4],
    date: '2016-09-01',
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部'
  },
  getLocationm:function(e){
    wx.getLocation({
      type:'gcj02',
      success: function(res) {
        console.log(res)
      },
    })
  },
  naviToRegeo:function(e){
    wx.navigateTo({
      url: '../regeo/regeo',
    })
  },
  naviTostaticmap:function(e){
    wx.navigateTo({
      url: '../staticmap/staticmap',
    })
  },
  naviToaliweather(e){
    wx.navigateTo({
      url: '../aliweather/aliweather',
    })
  },
  naviToNavi(e){
    wx.navigateTo({
      url: '../navigation_car/navigation',
    })
  },
  naviToPoi(e){
    wx.navigateTo({
      url: '../poi/poi',
    })
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  startDown:function(e){
    this.setData({
      percent: this.data.percent+5
    })
  },
  add: function (e) {
    extraLine.push('other            line')
    this.setData({
      text: initData + '\n' + extraLine.join('\n')
    })
  },
  remove: function (e) {
    if (extraLine.length > 0) {
      extraLine.pop()
      this.setData({
        text: initData + '\n' + extraLine.join('\n')
      })
    }
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  tap: function (e) {
    console.log(e)
    for (var i = 0; i < order.length; ++i) {
      console.log(order[i] + "==" + this.data.toView)
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  tapName:function(event){
    console.log(event)
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // 更新当前日期
    app.globalData.day=util.formatTime(new Date()).split(' ')[0];
    this.setData({
      today: app.globalData.day
    })
    // 定位当前城市
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getLocation:function(){
    var that = this;
    wx.getLocation({
      type:'wgs84',
      success: function(res) {
        let latitude = res.latitude
        let longitude = res.longitude
        wx.request({
          url: 'https://apis.map.qq.com/ws/geocoder/v1/?location=${latitude},${longitude}&key=${app.globalData.tencentMapKey}',
          success: res =>{
            app.globalData.defaultCity = app.globalDatadefaultCity?gpp.globalData.defaultCity:res.data.result.ad_info.city;
            app.glibalData.defaultCountry = app.globalData.defaultCountry?app.globalData.defaultCountry:res.data.result.ad_info_district;
            that.setData({
              location:app.globalData.defaultCity,
              country:app.globalData.defaultCountry
            });
            that.getWeather();
          }
        })
      },
    })
  },
  getWeather:function(e){
    var length = this.data.location.length;
    var city = this.data.location.slice(0,length-1);
    console.log(city)
    var that = this;
    var param = {
      key : app.globalData.heWeatherKey,
      location: city
    };
    wx.request({
      url: app.globalData.heWeatherBase+ '/s6/weather',
      data:param,
      header:{
        'content-type':'application/json'
      },
      success:function(res){
        app.globalFata.weatherData = res.data.HeWeather6[0].status == 'unkonwn city'?"":res.data.HeWeather6[0];
        var weatherData = app.globalDFata.weatherData?app.globalData.weatherData.now:'暂无该城市天气信息'
        dress = app.globalData.weatherData ? res.data.HeWeather6[0].lifestyle[1] : { txt: "暂无该城市天气信息" };
        that.setData({
          weatherData: weatherData, //今天天气情况数组 
          dress: dress //生活指数
        });
      }
    })
  },
  switch: function (e) {
    const length = this.data.objectArray.length
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.objectArray[x]
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp
    }
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addToFront: function (e) {
    const length = this.data.objectArray.length
    this.data.objectArray = [{ id: length, unique: 'unique_' + length }].concat(this.data.objectArray)
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addNumberToFront: function (e) {
    this.data.numberArray = [this.data.numberArray.length + 1].concat(this.data.numberArray)
    this.setData({
      numberArray: this.data.numberArray
    })
  }
})
