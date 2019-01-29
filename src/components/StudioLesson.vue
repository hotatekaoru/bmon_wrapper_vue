<template>
  <div>
    <div v-if="!lessons">
      loading...
    </div>
    <div v-else>
      <h3>レッスン一覧</h3>
      <table>
        <tbody>
          <tr v-for="(item, index) in lessons" :key="index">
            <a :href="item.link" target= "_blank">
              <td>
                {{item.dateOn}}
                {{item.startAt}}〜{{item.endAt}}
              </td>
              <td>
                {{item.studio}}
              </td>
              <td>
                {{item.performer}}
              </td>
              <td>
                {{item.mode}}
              </td>
            </a>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <p @click="handleOnClickPreventDate($event, date)">＜＜前の日へ</p>
      <p @click="handleOnClickNextDate($event, date)">次の日へ＞＞</p>
    </div>
  </div>
</template>

<script>
  import BMonsterService from '../services/WrapBMonsterService'

  async function init() {
    const res = await BMonsterService.lesson({studio: this.studio, cource: this.cource})
    this.lessons = res.data
  }

  export default {
    name: 'studioLesson',
    components: {},
    data: function () {
      return {
        lessons: null
      }
    },
    watch: {
      studio: init,
      cource: init
    },
    methods: {
      handleOnClickStudio: function(e, code) {
        e.preventDefault();
        this.$emit('clickStudio', code)
      }
    },
    props: ['studio', 'cource'],
    beforeMount: init
  }
</script>

<style>
  table {
    font-size: 12px;
  }

  tr {
    width: 100%;
    text-align: center;
  }
</style>
