Page({
  // 小程序生命周期函数：
  // 页面第一次启动被加载到内存的时候，
  onLoad(){
    console.log('onLoad');
  },
  // 页面第一次启动被加载到内存之后，并且页面渲染完成之后执行
  onReady(){
   console.log('onReady');
  },
  // 页面每次被展示的时候执行
  onShow(){
    console.log('onshow');
  },
  // 页面每次被取消展示的时候执行
  onHide(){
    console.log('onHide');
  },
  // 下拉刷新时执行
  onPullDownRefresh(){
      console.log('onPullDownRefresh');
  },
  // 页面到最底部时执行
  onReachBottom(){
    console.log('onReachBottom');
  },
  // 当点击分享时执行
  onShareAppMessage(){
    console.log('onShareAppMessage');
    return {
      title:'share',
      path: 'pages/index/index'
    }
  },
  // 页面滚动时执行
  onPageScroll(){
    console.log('onPageScroll');
  },
})
