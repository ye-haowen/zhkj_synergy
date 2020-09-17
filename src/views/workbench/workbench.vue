<template>
  <div id='workbench'
    class='indexMain'>
    <div class="top_info">
      <div class="left">
        <div class="avater">周</div>
        <div class="info">
          <span class="name">周凯</span>
          <span class="basic_info">
            <span class="item">桐庐凯瑞针纺有限公司</span>
            <span class="item">岗位名称</span>
            <span class="item">18888888888</span>
          </span>
        </div>
      </div>
      <div class="right">
        <div class="item">
          <span class="title">项目数</span>
          <span class="content">100</span>
        </div>
        <div class="item">
          <span class="title">团队内排名</span>
          <span class="content">
            8
            <span class="inconspicuous">/</span>
            <span class="inconspicuous">24</span>
          </span>
        </div>
        <div class="item">
          <span class="title">项目访问</span>
          <span class="content">2,223</span>
        </div>
      </div>
    </div>
    <div class="bottom_content">
      <div class="bottom_content_left">
        <div class="modules">
          <div class="titleCtn">
            <span class="title">最新需求</span>
            <span class="rightBtn">
              <span class="btn blue">全部项目</span>
            </span>
          </div>
          <div class="contentCtn needCtn">
            <div class="need_item"></div>
            <div class="need_item"></div>
            <div class="need_item"></div>
            <div class="need_item"></div>
            <div class="need_item"></div>
            <div class="need_item"></div>
          </div>
        </div>
        <div class="modules">
          <div class="titleCtn">
            <span class="title">产品询价</span>
            <span class="rightBtn">
              <span class="btn blue">全部项目</span>
            </span>
          </div>
          <div class="contentCtn enquiryCtn">

          </div>
        </div>
      </div>
      <div class="bottom_content_right">
        <div class="modules">
          <div class="titleCtn">
            <span class="title">发布需求</span>
          </div>
          <div class="contentCtn addNeedCtn">

          </div>
        </div>
        <div class="modules">
          <div class="titleCtn">
            <span class="title">数据统计</span>
          </div>
          <div class="contentCtn dataCountCtn">

          </div>
        </div>
        <div class="modules">
          <div class="titleCtn">
            <span class="title">团队</span>
          </div>
          <div class="contentCtn groupCtn">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped lang='less'>
@import "~@/assets/less/workbench/workbench.less";
</style>
 