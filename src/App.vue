<template>
  <body>
    <div class="bg-white">
      <HeaderApp />
      <HeroApp />
      <LogosList />
    </div>
    <DealsBlock/>
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

.bg-white {
  background-color: #fff;
}
</style>
