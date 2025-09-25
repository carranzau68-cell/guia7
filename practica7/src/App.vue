<template>
  <div id="app">
    <nav>
      <router-link to="/">Animales</router-link> |
      <router-link to="/calculadora">Calculadora</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #435334;
}
body { margin: 0; }
nav { padding: 30px; background-color: black; }
nav a {
  font-weight: bold; color: white; text-decoration: none;
  border-color: gray; padding: 20px;
}

nav a.router-link-exact-active {
  color: yellowgreen; border-bottom: 1px solid yellowgreen;
}
</style>
