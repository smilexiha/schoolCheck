Page({
  data: {
    
    cateItems: [
      {
        cate_id: 1,
        cate_name: "学校排名",
        ishaveChild: true,
        // children:
        // [
        //   {
        //     child_id: 1,
        //     name:2256999

        //   }
        // ]
      },
      {
        cate_id: 2,
        cate_name: "双一流学科"
      },
      {
        cate_id: 3,
        cate_name: "985院校"
      },
      {
        cate_id: 4,
        cate_name: "211院校"
      },
      {
        cate_id: 5,
        cate_name: "一本院校"
      }
    ],
    curNav: 1,
    curIndex: 0
  },

 

 


  //事件处理函数 
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值 
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index 
    this.setData({
      curNav: id,
      curIndex: index
    })
  },

   city: function () {
    wx.navigateTo({
      url: '../city/city'
    })
  },
 
})
