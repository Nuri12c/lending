<template>
  <body>
    <HeaderApp />
    <HeroApp />
    <LogosList />
    <div class="dark-bg">
      <DealsBlock/>
    </div>
    <ArrivalsApp/>
    <PeakyBlinders/>
    <SectionQuality/>
    <FollowUs/>
    <h1>wdvef</h1>
    <div>
    <CustomersCard/>
    <SubscribeUs/>
    <footerApp/>
    </div>

  </body>
</template>

<script>

import HeaderApp from "./components/header/HeaderApp.vue";
import HeroApp from "./components/HeroApp/HeroApp.vue";
import LogosList from "./components/LogosList/LogosList.vue";
import DealsBlock from "./components/DealsBlock/DealsBlock.vue";
import ArrivalsApp from "./components/NewArriwals/ArrivalsApp.vue";
import PeakyBlinders from "./components/PeakyBlinders/PeakyBlinders.vue";
import SectionQuality from "./components/Sectionquality/SectionQuality.vue";
import FollowUs from "./components/FollowUs/FollowUs.vue";
import CustomersCard from "./components/Customers/CustomersCard.vue";
import SubscribeUs from "./components/SubscribeUs/SubscribeUs.vue";
import footerApp from "./components/footer/footerApp.vue";




export default {
  name: "App",
  components: {
    HeaderApp,
    HeroApp,
    LogosList,
    DealsBlock,
    ArrivalsApp,
    PeakyBlinders,
    SectionQuality,
    FollowUs,
    CustomersCard,
    SubscribeUs,
    footerApp
  },
  data() {
    return {

    }
  },
};
</script>

<style>
.dark-bg {
  background-color: #F5F5F5;
}
</style>
