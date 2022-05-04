// pages/hot/hot.js
Page({
  data: {
    rankingState: 'undefined',
    timeState: 'undefined',
    rankingData: [{
      text: '实战排行',
      type: 'project'
    }, {
      text: '路径排行',
      type: 'path'
    }],
    timeData: [{
      text: '周',
      type: 'week'
    }, {
      text: '月',
      type: 'month'
    }],
    hotData: [],
    dataList: []
  },

  // 实战、路径排行
  handleRankingState(e) {
    this.setData({
      rankingState: e.target.dataset.type
    });
    wx.setStorageSync('rankingState', e.target.dataset.type);
    this.handleDataList(this.data.rankingState, this.data.timeState);
  },
  // 周、月
  handleTimeState(e) {
    this.setData({
      timeState: e.target.dataset.type
    });
    wx.setStorageSync('timeState', e.target.dataset.type);
    this.handleDataList(this.data.rankingState, this.data.timeState)
  },
  // 切换数据 
  handleDataList(rankingState, timeState) {
    if (rankingState === 'project' && timeState === 'week') {
      this.setData({
        dataList: this.data.hotData.projectWeek
      });
    } else if (rankingState === 'project' && timeState === 'month') {
      this.setData({
        dataList: this.data.hotData.projectMonth
      });
    } else if (rankingState === 'path' && timeState === 'week') {
      this.setData({
        dataList: this.data.hotData.pathWeek
      });
    } else if (rankingState === 'path' && timeState === 'month') {
      this.setData({
        dataList: this.data.hotData.pathMonth
      });
    }
  },

  onLoad() {
    wx.request({
      url: 'https://www.fastmock.site/mock/d2122846b26705f336756703ae23a031/lqs329/lqs/hot',
      success: (response) => {
        // 解构数据
        const {
          data: {
            data: {
              pathMonth,
              pathWeek,
              projectMonth,
              projectWeek
            }
          }
        } = response;
        // 初始化
        const rankingState = wx.getStorageSync('rankingState') || 'project';
        const timeState = wx.getStorageSync('timeState') || 'week'
        this.setData({
          hotData: {
            pathMonth,
            pathWeek,
            projectMonth,
            projectWeek
          },rankingState,timeState
        });

        this.handleDataList(rankingState,timeState)
      }
    })
  },
})