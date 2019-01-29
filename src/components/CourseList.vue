<template>
  <div>
    <div>
      <h3>コース一覧</h3>
      <div v-if="!courses">
        loading...
      </div>
      <ul class="list" v-else>
        <li v-for="(item, index) in courses" :key="index">
          <a @click="handleOnClickCourses($event, item.id)"> <small>{{item.name}} {{item.mode}}</small></a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import BMonsterService from '../services/WrapBMonsterService'

  async function init() {
    const res = await BMonsterService.course()
    this.courses = res.data
  }

  export default {
    name: 'coursesList',
    components: {},
    data: function () {
      return {
        courses: null
      }
    },
    methods: {
      handleOnClickCourses: function(e, code) {
        e.preventDefault();
        this.$emit('clickCourse', code)
      }
    },
    beforeMount: init
  }
</script>
<style>

</style>
