// index.js
Page({
  // 小程序API
  data: {
    name: 'lqs',
    list: [{
        'day': '周1',
        'show': true,
        'content': ['语文', '数学', '英语']
      }, {
        'day': '周2',
        'show': true,
        'content': ['语文', '物理', '英语']
      },
      {
        'day': '周3',
        'show': false,
        'content': ['语文', '英语', '化学']
      },
      {
        'day': '周4',
        'show': true,
        'content': ['体育', '数学', '英语']
      },
      {
        'day': '周5',
        'show': true,
        'content': ['语文', '数学', '英语']
      }
    ]
  },
  changeName() {
    this.setData({
      name: 'LQS',
    })
  },
  lqsShowModal() {
    wx.showModal({
      title: 'APPPPPPP',
      cancelColor: 'black',
    })
  },
  lqsSwitchTab() {
    wx.switchTab({
      url: '/pages/main/index',
    })
  },
  lqsReqest() {
    wx.request({
      url: 'https://www.fastmock.site/mock/d2122846b26705f336756703ae23a031/lqs329/api/getTestData',
      success(res) {
        wx.showToast({
          title: '请求成功',
        })
        console.log(res.data.data);
      }
    })
  },

})