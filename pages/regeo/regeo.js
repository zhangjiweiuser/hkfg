// pages/regeo/regeo.js
var amapFile = require("../../libs/amap-wx.js")
var config = require("../../libs/config.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers:[],
    longitude:'',
    latitude:'',
    textData:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var key = config.Config.key;
    var myAmapFun = new amapFile.AMapWX({key:key})
    myAmapFun.getRegeo({
      iconPath:"../../images/marker.png",
      iconWidth:22,
      iconHeight:32,
      success:function(data){
        console.log(data)
        var marker = [{
          id:data[0].id,
          longitude: data[0].longitude,
          latitude: data[0].latitude,
          iconPath:data[0].iconPath,
          width:data[0].width,
          height:data[0].height
        }]
        that.setData({
          markers:marker,
          longitude: data[0].longitude,
          latitude: data[0].latitude,
          textData: {
            name: data[0].name,
            desc: data[0].desc
          }
        })

      },
      fail:function(msg){
        console.log("msg:",msg)
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