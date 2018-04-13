<template>
  <div id="app">
    <aside class="sidbar">
      <ul>
        <li v-for="(route,index) in $router.options.routes" v-bind:class="{ active: (isActive == route.name) }"><router-link :to="route.path">{{route.name}}</router-link></li>
      </ul>
    </aside>
    <article class="container">
      <router-view/>
    </article>
  </div>
</template>

<script>
export default {
//  name: 'App',
  data () {
    return {
      isActive: ''
    }
  },
  created (r) {
    /*
    console.log(r)
    console.log(r)
    this.data.isActive = $router.options.routes[0].name
    */
  }
}
</script>

<style>
  html,body {
    padding:0;
    margin:0;
    width: 100%;
    height: 100%;
  }
  h1,h1,h3,h4,h5,h6 {
    padding: 0;
    margin:0;
  }
  a {
    text-decoration: none;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
.router-link-exact-active {
  color: rgb(140, 203, 255)!important;
}
  .sidbar {
    display: inline-block;
    float: left;
    height: 100%;
    background: #99b1b6;
  }
  .sidbar ul {
    width: 200px;
    height: 100%;
    padding: 0px;
    margin: 0;
  }
.sidbar li {
  width: 100%;
  height: 56px;
  background: #2b4a73;
  line-height: 56px;
}
.sidbar li:nth-child(even) {
  background: #3e6ba6;
}
  .sidbar li a {
    display: inline-block;
    width: 100%;
    height: 100%;
    color: #fff;
    font-size: 28px;
    text-align: center;
    
  }
  .container {
    width: 100%;
    height: 100%;
    padding-left: 200px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
</style>
