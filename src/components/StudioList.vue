<template>
  <div>
    <div>
      <h3>{{title}}</h3>
      <div v-if="!studios">
        loading...
      </div>
      <ul class="list" v-else>
        <li v-for="(item, index) in studios" :key="index">
          <a @click="handleOnClickStudio($event, item.code)"> <small>{{item.name}}</small></a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import BMonsterService from '../services/WrapBMonsterService'

  async function init() {
    const res = await BMonsterService.studio()
    this.studios = res.data
  }

  export default {
    name: 'studioList',
    components: {},
    data: function () {
      return {
        studios: null
      }
    },
    methods: {
      handleOnClickStudio: function(e, code) {
        e.preventDefault();
        this.$emit('clickStudio', code)
      }
    },
    props: ['title'],
    beforeMount: init
  }
</script>
<style>

</style>
