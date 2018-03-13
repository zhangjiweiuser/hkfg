var amapFile = require('../../libs/amap-wx.js');
// pages/amap/amap.js
var markersData = [];
Page({
  data: {
    markers: [],
    latitude: '',
    longitude: '',
    textData: {},
    tips: {}
  },
  makertap: function (e) {
    var id = e.markerId;
    var that = this;
    that.showMarkerInfo(markersData, id);
    that.changeMarkerColor(markersData, id);
  },
  bindInput:function(e){
    var that = this;
    var keywords = e.detail.value;
    console.log("关键字:",keywords);
    var myAmapFun = new amapFile.AMapWX({ key: 'cebc18668f7aeb5c53160b15c6b406c6' });
    myAmapFun.getInputtips({
      keywords:keywords,
      location:'',
      success:function(data){
        console.log("是否成功",data);
        if(data && data.tips){
          that.setData({
            tips:data.tips
          })
        }
      }
    });
  },
  bindSearch:function(e){
    var keywords = e.target.dataset.keywords;
    var url = '../poi/poi?keywords='+keywords;
    console.log(url);
    wx.redirectTo({
      url: url,
    })
  },
  onLoad: function () {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({ key: 'cebc18668f7aeb5c53160b15c6b406c6' });
    myAmapFun.getPoiAround({
      iconPathSelected: '../../images/marker_blue.png', //如：..­/..­/img/marker_checked.png
      iconPath: '../../images/marker_red.png', //如：..­/..­/img/marker.png
      success: function (data) {
        markersData = data.markers;
        that.setData({
          markers: markersData
        });
        that.setData({
          latitude: markersData[0].latitude
        });
        that.setData({
          longitude: markersData[0].longitude
        });
        that.showMarkerInfo(markersData, 0);
      },
      fail: function (info) {
        wx.showModal({ title: info.errMsg })
      }
    })
  },
  showMarkerInfo: function (data, i) {
    var that = this;
    that.setData({
      textData: {
        name: data[i].name,
        desc: data[i].address
      }
    });
  },
  changeMarkerColor: function (data, i) {
    var that = this;
    var markers = [];
    for (var j = 0; j < data.length; j++) {
      if (j == i) {
        data[j].iconPath = "../../images/marker_blue.png"; //如：..­/..­/img/marker_checked.png
      } else {
        data[j].iconPath = "../../images/marker_red.png"; //如：..­/..­/img/marker.png
      }
      markers.push(data[j]);
    }
    that.setData({
      markers: markers
    });
  }

})