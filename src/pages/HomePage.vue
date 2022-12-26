<template>
  <div class="ui two column divided grid">
    <div class="row">
      <div class="column">
        <div id="leftColumn">
          <router-view></router-view>
        </div>
      </div>
      <div class="column">
        <news-list />
      </div>
    </div>
  </div>
</template>

<script>
import NewsList from "../components/NewsList.vue";

export default {
  name: "HomePage",

  components: { NewsList },
};
</script>
