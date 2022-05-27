<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: "app",
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Unicase:wght@300;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400;1,700;1,800&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Spectral", "Merriweather", "Georgia", serif;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.flex {
  display: flex;
  height: 100%;
}

ul {
  list-style: none;
}

li, a, .link, .headerTitle {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}

.link, .headerTitle {
  font-family: 'Merriweather';
  font-weight: 300;
  transition: 0.2s color ease;
}

.link:hover, .headerTitle:hover {
  color: #e1c1a7;
}

.svgIcon path {
     transition: 0.2s fill ease;
     fill: #ffffff;
}

.svgIcon:hover path {
     fill: #e1c1a7;
}

.home-bg {
     background: rgb(0,0,0);
     background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(74, 0, 37, 1) 100%);
}

.journal-bg {
     background: rgb(0,0,0);
     background: linear-gradient(90deg, rgb(0, 0, 0) 0%, rgba(0,66,74,1) 100%);
}

</style>
