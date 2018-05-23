const app = getApp()

Page({
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      cityType: options.cityType
    })
    if (this.data.cityResults == null) {
      this.setData({
        cityResults: this.data.citys
      })
    }
  },
  bindAZ: function (e) {
    var currentCityName = e.currentTarget.dataset.id
    var that = this;
    //放入A-Z的scrollTop参数
    if (that.data.scrollAZ == null) {
      wx.createSelectorQuery().selectAll('.city-item-A-Z').fields({
        dataset: true,
        size: true,
        rect: true
      }, function (res) {
        res.forEach(function (re) {
          if (currentCityName == re.dataset.cityname) {
            wx.pageScrollTo({
              scrollTop: re.top + that.data.scrollNow - 55.5,
              duration: 0
            })
          }
        })
      }).exec();
    } else {
      this.data.scrollAZ.forEach(function (re) {
        if (currentCityName == re.dataset.cityname) {
          wx.pageScrollTo({
            scrollTop: re.top + that.data.scrollNow - 55.5,
            duration: 0
          })
        }
      })
    }


  },
  onPageScroll: function (e) { // 获取滚动条当前位置
    this.setData({
      scrollNow: e.scrollTop
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  citySelected: function (e) {
    var cityNameTemp = e.currentTarget.dataset.cityname
    this.setdata({cityNameTemp});
      // app.globalData.trainEndCity = cityNameTemp,
    wx.navigateBack()
  },
  bindSarchInput: function (e) {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 0
    })

    var inputVal = e.detail.value;
    var cityResultsTemp = new Array()
    var citys = this.data.citys;

    if (inputVal == null || inputVal.trim() == '') {
      this.setData({
        cityResults: citys
      })
      return;
    }

    for (var i = 0; i < citys.length; i++) {
      if (citys[i].cityName.indexOf(inputVal) == 0 || citys[i].cityPY.indexOf(inputVal.toLowerCase()) == 0 || citys[i].cityPinYin.indexOf(inputVal.toLowerCase()) == 0) {
        //去除热门城市
        if (citys[i].cityPY.indexOf("#") != -1) {
          continue;
        }
        var ifHas = false;
        for (var j = 0; j < cityResultsTemp.length; j++) {
          if (cityResultsTemp[j] == citys[i]) {
            ifHas = true;
            break;
          }
        }
        if (!ifHas) {
          cityResultsTemp.push(citys[i]);
        }
      }
    }
    this.setData({
      cityResults: cityResultsTemp
    })
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
    setTimeout(function () {
      wx.stopPullDownRefresh();
    }, 1000)

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

  }, /**
   * 页面的初始数据
   */
  data: {
    scrollAZ: null,
    scrollNow: 0,
    cityType: 'begin',
    cityResults: null,
    cityAZ: [ { cityName: 'A' }, { cityName: 'B' }, { cityName: 'C' }, { cityName: 'D' }, { cityName: 'E' }, { cityName: 'F' }, { cityName: 'G' }, { cityName: 'H' }, { cityName: 'J' }, { cityName: 'K' }, { cityName: 'L' }, { cityName: 'M' }, { cityName: 'N' }, { cityName: 'P' }, { cityName: 'Q' }, { cityName: 'R' }, { cityName: 'S' }, { cityName: 'T' }, { cityName: 'W' }, { cityName: 'X' }, { cityName: 'Y' }, { cityName: 'Z' },],
    citys: [{ cityName: 'A', cityPinYin: 'a', cityPY: 'a' }, { cityName: '安徽', cityPinYin: 'anhui', cityPY: 'ah' },  { cityName: 'B', cityPinYin: 'b', cityPY: 'b' }, { cityName: '北京', cityPinYin: 'beijing', cityPY: 'bj' }, { cityName: 'C', cityPinYin: 'c', cityPY: 'c' }, { cityName: '重庆', cityPinYin: 'chongqing', cityPY: 'cq' }, { cityName: 'F', cityPinYin: 'f', cityPY: 'f' }, { cityName: '福建', cityPinYin: 'fujian', cityPY: 'fj' }, { cityName: 'G', cityPinYin: 'g', cityPY: 'g' }, { cityName: '广东', cityPinYin: 'guangdong', cityPY: 'gd' }, { cityName: '贵州', cityPinYin: 'guizhou', cityPY: 'gz' }, { cityName: '甘肃', cityPinYin: 'gansu', cityPY: 'gs' }, { cityName: '广西', cityPinYin: 'guangxi', cityPY: 'gx' }, { cityName: 'H', cityPinYin: 'h', cityPY: 'h' }, { cityName: '河北', cityPinYin: 'hebei', cityPY: 'hb' }, { cityName: '河南', cityPinYin: 'henan', cityPY: 'hn' }, { cityName: '湖北', cityPinYin: 'hubei', cityPY: 'hub' }, { cityName: '湖南', cityPinYin: 'hunan', cityPY: 'hn' }, { cityName: '海南', cityPinYin: 'hainan', cityPY: 'hn' }, { cityName: '黑龙江', cityPinYin: 'heilongjiang', cityPY: 'hlj' }, { cityName: 'J', cityPinYin: 'j', cityPY: 'j' }, { cityName: '吉林', cityPinYin: 'jiling', cityPY: 'jl' }, { cityName: '江苏', cityPinYin: 'jiangsu', cityPY: 'js' }, { cityName: '江西', cityPinYin: 'jiangxi', cityPY: 'jx' }, { cityName: 'L', cityPinYin: 'l', cityPY: 'l' }, { cityName: '辽宁', cityPinYin: 'liaoning', cityPY: 'ln' }, { cityName: 'N', cityPinYin: 'n', cityPY: 'n' }, { cityName: '内蒙古', cityPinYin: 'neimenggu', cityPY: 'nmg' }, { cityName: '宁夏', cityPinYin: 'ningxia', cityPY: 'nx' }, { cityName: 'Q', cityPinYin: 'q', cityPY: 'q' }, { cityName: '青海', cityPinYin: 'qinghai', cityPY: 'qh' }, { cityName: 'S', cityPinYin: 's', cityPY: 's' }, { cityName: '上海', cityPinYin: 'shanghai', cityPY: 'sh' }, { cityName: '山西', cityPinYin: 'shanxi', cityPY: 'sx' }, { cityName: '山东', cityPinYin: 'shandong', cityPY: 'sd' }, { cityName: '四川', cityPinYin: 'sichuan', cityPY: 'sc' }, { cityName: '陕西', cityPinYin: 'shanxi', cityPY: 'sx' }, { cityName: 'T', cityPinYin: 't', cityPY: 't' }, { cityName: '台湾', cityPinYin: 'taiwan', cityPY: 'tw' }, { cityName: 'X', cityPinYin: 'x', cityPY: 'x' }, { cityName: '西藏', cityPinYin: 'xizan', cityPY: 'xz' }, { cityName: '新疆', cityPinYin: 'xinjiang', cityPY: 'xj' },{ cityName: 'Y', cityPinYin: 'y', cityPY: 'y' }, { cityName: '云南', cityPinYin: 'yunnan', cityPY: 'yn' },{ cityName: 'Z', cityPinYin: 'z', cityPY: 'z' }, { cityName: '浙江', cityPinYin: 'zhejiang', cityPY: 'zj' },]
  }
})