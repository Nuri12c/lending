<template>
  <body>
    <HeaderApp />
    <HeroApp />
    <LogosList />
    <div class="dark-bg">
      <DealsBlock/>
    </div>
    <ArrivalsApp/>
  </body>
</template>

<script>

import HeaderApp from "./components/header/HeaderApp.vue";
import HeroApp from "./components/HeroApp/HeroApp.vue";
import LogosList from "./components/LogosList/LogosList.vue";
import DealsBlock from "./components/DealsBlock/DealsBlock.vue";
import ArrivalsApp from "./components/NewArriwals/ArrivalsApp.vue";

export default {
  name: "App",
  components: {
    HeaderApp,
    HeroApp,
    LogosList,
    DealsBlock,
    ArrivalsApp
  },
};
</script>

<style>
.dark-bg {
  background-color: #F5F5F5;
}
</style>
