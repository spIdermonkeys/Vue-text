<template>
  <div id="app">
    <!--头部-->

    <mt-header fixed title="丫儿呦！你怕是要翻水水">
      <router-link to="/NewsList" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <router-view></router-view>
    <!--底部-->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/tabbar-with-contact">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/tabbar-with-cart">
        <span class="mui-icon mui-icon-trash"><span class="mui-badge">9</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/tabbar-with-search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

</style>
