<template>
  <section class="hero">
    <ul class="container hero__container">
      <li class="hero__item hero__left-block"></li>
      <li class="hero__item hero__ceter-block">
        <div class="hero__top-img"></div>
        <div class="hero__main-description">
          <h1 class="hero__text size-91 poppinsMedium">ULTIMATE</h1>
          <h1 class="hero__text size-187 poppinsMedium">SALE</h1>
          <h1 class="hero__text size-20 poppinsRegular">NEW COLLECTION</h1>
          <button class="button hero__button"><p class="button-text">SHOP NOW</p></button>
        </div>
        <div class="hero__bottom-img"></div>
      </li>
      <li class="hero__item hero__right-block"></li>
    </ul>
  </section>

</template>

<script>
export default {

}
</script>

<style>
.size-91 {
  font-size: 91px;
  letter-spacing: -0.0410em;
  text-shadow: 1px 3px 4px #4848484e;
}
.size-187 {
  font-size: 189px;
  letter-spacing: -0.0590em;
  transform: translateX(-7px);
  line-height: 100%;
  margin-bottom: 4px;
  color: white; /* Цвет текста */
  -webkit-text-stroke: 1.4px #484848; /* Толщина и цвет обводки */

}
.size-20 {
  font-size: 20px;
  letter-spacing: 0.1em;
  margin-bottom: 23px;
  transform: translate(1px, -1px);
}

.hero {
  margin-bottom: 30px;
  
}
.hero__container {
  display: flex;
}
.hero-container {
  margin-bottom: 27px;
}
.hero__item {
  border-radius: 10px;
}
.hero__item:not(:last-child) {
  margin-right: 35px;
}
.hero__left-block {
  width: 392px;
  height: 756px;
  background-color: #88c7fe;
}
.hero__ceter-block {
  width: 426px;
  height: 756px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.hero__right-block {
  width: 392px;
  height: 756px;
  background-color: #88c7fe;
}
.hero__top-img {
  height: 150px;
  background-color: #6fc4b6;
  border-radius: 10px;
  margin-bottom: 0px;
  width: 426px;
}
.hero__main-description {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hero__bottom-img {
  height: 150px;
  background-color: #6fc4b6;
  border-radius: 10px;
  width: 426px;
  margin-top: 1px;
}

.hero__button {
  font-size: 16px;
  width: 207px;
  transform: translateX(-1px);
}


</style>