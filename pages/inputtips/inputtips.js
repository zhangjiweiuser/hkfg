// pages/inputtips/inputtips.js
var amapFile = require("../../libs/amap-wx.js")
var config = require("../../libs/config.js")
var lonlat;
var city;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tips:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('搜索条件',options)
    lonlat = options.lonlat;
    city = options.city;
  },
  bindInput:function(e){
    var that = this;
    var keywords = e.detail.value;
    var key = config.Config.key;
    console.log('aaaaaaaaaa')
    var myAmapFun = new amapFile.AMapWX({key:key})
    myAmapFun.getInputtips({
      keywords:keywords,
      location:lonlat,
      city:city,
      success:function(data){
        if(data && data.tips){
          that.setData({
            tips:data.tips
          })
        }
      }
    })
  },
  bindSearch:function(e){
    var keywords = e.target.dataset.keywords;
    var url = "../poi/poi?keywords="+keywords;
    wx.redirectTo({
      url: url,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})