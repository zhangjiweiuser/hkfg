// pages/poi/poi.js
var amapFile = require("../../libs/amap-wx.js")
var config = require("../../libs/config.js")
var markersData = [];

Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers:[],
    latitude:'',
    longitude:'',
    textData:{},
    city:'',
  },
  makertap:function(e){
    var that = this;
    var id = e.markerId;
    that.showMarkerInfo(markersData,id);
    that.changeMarkerColor(markersData,id)
  },
  showMarkerInfo:function(data,i){
    var that = this;
    that.setData({
      textData:{
        name:data[i].name,
        desc:data[i].address
      }
    })
  },
  changeMarkerColor:function(data,i){
    var that = this;
    var markers = [];
    for(var j = 0;j<data.length;j++){
      if(j == i){
        data[j].iconPath = "../../images/marker_checked.png";
      }else{
        data[j].iconPath = "../../images/marker.png";
      }
      markers.push({
        id: data[j].id,
        latitude: data[j].latitude,
        longitude: data[j].longitude,
        iconPath: data[j].iconPath,
        width: data[j].width,
        height: data[j].height
      })
    }
    that.setData({
      markers:markers
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var that = this;
    var key = config.Config.key;
    var myAmapFun = new amapFile.AMapWX({key:key});
    var params = {
      iconPathSelected :'../../images/marker_checked.png',
      iconPath:'../../images/marker.png',
      success:function(data){
        console.log('请求成功',data)
        markersData = data.markers;
        var poisData = data.poisData;
        var markers_new = [];
        markersData.forEach(function(item,index){
          markers_new.push({
            id:item.id,
            latitude:item.latitude,
            longitude:item.longitude,
            iconPath:item.iconPath,
            width:item.width,
            height:item.height
          })
        })
        if(markersData.length>0){
          that.setData({
            markers:markers_new,
            city:poisData[0].cityname||'',
            latitude:markersData[0].latitude,
            longitude:markersData[0].longitude
          });
          that.showMarkerInfo(markersData,0)
        }else{
          wx.getLocation({
            type:'gcj02',
            success: function(res) {
              console.log('gcj02',res);
              that.setData({
                latitude:res.latitude,
                longitude:res.longitude,
                city:'北京市'
              })
            },
            fail:function(){
              that.setData({
                latitude: 39.909729
              });
              that.setData({
                longitude: 116.398419
              });
              that.setData({
                city: '北京市'
              });
            }
          })
          that.setData({
            textData:{
              name:'抱歉，未找到结果',
              desc:''
            }
          })
        }
      }
    }
    if (options && options.keywords){
      console.log('关键字',options.keywords)
      params.querykeywords = options.keywords;
    }
    console.log('请求参数',params)
    myAmapFun.getPoiAround(params)
    
  },
  bindInput:function(e){
    console.log("binInput",e);
    var that = this;
    var url = "../inputtips/inputtips";
    if(e.target.dataset.latitude &&
    e.target.dataset.longitude &&
    e.target.dataset.city){
      var dataset = e.target.dataset
      url = url+"?lonlat="+dataset.longitude+","+dataset.latitude+"&city="+dataset.city;

    }
    console.log("url:",url)
    wx.redirectTo({
      url: url,
    })

  },
  sayhello:function(){
    console.log("我说的hello")
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