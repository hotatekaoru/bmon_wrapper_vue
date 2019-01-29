<template>
  <div id="app" class="container">
    <aside class="sub-container">
      <StudioList @clickStudio="handleOnClickStudio" title="スタジオ一覧" />
      <CourseList @clickCourse="handleOnClickCourse" />
    </aside>
    <main class="main-container">
      <StudioLesson :studio= "selectedStudio" :cource= "selectedCourse" v-if="selectedStudio || selectedCourse"/>
    </main>
  </div>
</template>
<script>
  import store from './store';
  import StudioList from './components/StudioList';
  import CourseList from './components/CourseList';
  import StudioLesson from './components/StudioLesson';
  export default {
    name: 'app',
    components: {
      StudioList,
      CourseList,
      StudioLesson,
    },
    data: () => store.state,
    methods: {
      handleOnClickStudio: function(studio) {
        this.selectedCourse = null
        this.selectedStudio = studio
      },
      handleOnClickCourse: function(course) {
        this.selectedStudio = null
        this.selectedCourse = course
      },
    }
  }
</script>
<style>
  html {
    width: 100%;
    height: 100%;
  }
  body {
    margin: 0;
    width: 100%;
    height: 100%;
    font-size: 14px;
  }
  a {
    display: block;
    text-decoration: none;
    border-bottom: none;
    color: black;
  }
  a:hover {
    background-color: rgba(0,0,0,.03);
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;
    height: 100%;
    box-sizing: content-box;
    background: #efefef;
  }
  .sub-container {
    width: 200px;
    margin: 8px 0 8px 8px;
    padding: 8px;
    background: #fff;
  }
  .main-container {
    flex: 1;
    margin: 8px;
    padding: 8px;
    background: #fff;
  }
</style>
