<template>

  <div class="controller _index">
    看啥啊呀看，怎么看我也是主页(index)！
  </div>
  
</template>

<script>

export default {
  name: 'index',
  data (){
    return {
      bottomNav: 'movies'
    }
  },
  mounted: function(){
    this.init();
  },
  methods: {
    init: function(){
      
    }

  }
}
</script>

<style type="text/css" scoped>
  
</style>

