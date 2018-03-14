Page({
  data: {
    markers: [{
      iconPath: "../../images/marker.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      title:'hello every one',
      width: 22,
      height: 32,
      callout:{
        content:'我是气泡',
        color:'#c3c3c3',
        fontSize: 16, 
        borderRadius:30,
        bgColor:'#666666',
        padding:10,
        display:'BYCLICK',
        textAlign:'right'
      },
      label:{
        content:'我是一个label',
        color:'#222222',
        fontSize:16,
        x:20,
        y:-40,
        borderWidth:2,
        borderColor:'#d323f3',
        borderRadius:10,
        bgColor:'#474747',
        padding:10,
        textAlign:'left'
      }
     
    }],
    circles: [{
      latitude: 24.099994,
      longitude: 114.324520,
      color:'FF0000DD',
      radius: 50,

    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '../../images/marker_blue.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  regionchange:function(e) {
    console.log(e.type)
  },
  markertap: function(e) {
    console.log(e.markerId)
  },
  controltap: function(e) {
    console.log(e.controlId)
  }
})