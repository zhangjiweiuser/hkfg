// pages/aliweather/aliweather.js
var amapFile = require('../../libs/amap-wx.js');
var config = require('../../libs/config.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weather:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var that = this;
    var key = config.Config.key;
    var myAmapFun = new amapFile.AMapWX({key:key})
    myAmapFun.getWeather({
      success:function(data){
        console.log(data)
        that.setData({
          weather:data
        })
      },
      fail:function(info){
        console.log('错误',info)
      }
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