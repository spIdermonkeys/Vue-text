<template>
  <div class="tpl">
    <mt-header fixed title="丫儿呦！你怕是要翻水水">
      <router-link to="/NewsList" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <router-view></router-view>
    <h3 v-text="article.title"></h3>
    <div class="article-content" v-html="article.content"></div>
  </div>
</template>

<script>
export default{
  name:"app",
  name:"newsdetail",
  data(){
    return{
      article: {}
    }
  },
  created(){
    this.$http.get("http://127.0.0.1:8899/api/getnew/" + this.$route.params.id).then(res=>{
      this.article = res.body.message[0];
  });
  }
}
</script>
