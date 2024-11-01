<template>
<div class="DealsSlider">
  <button class="slider__button">'--'</button>
  <button class="slider__button">'--'</button>
  <div class="heroCard"></div>
  <div class="secondCard"></div>
  <div class="thirdCard"></div>
  <div class="fourCard"></div>
</div>

</template>

<script>
export default {
  data()  {
    return {

    }
  },
  methods: {


  }
}
</script>

<style>
.DealsSlider {
  display: flex;
  overflow: visible;
}
.heroCard {
  width: 406px;
  height: 582px;
  background-color: antiquewhite;
  margin-right: 24px;
}
.secondCard {
  width: 372px;
  height: 490px;
  background-color: rgb(142, 108, 63);
  margin-right: 24px;
}
.thirdCard {
  width: 372px;
  height: 486px;
  background-color: rgb(84, 59, 26);
  margin-right: 24px;
}
.fourCard {
  width: 372px;
  height: 486px;
  background-color: rgb(19, 13, 5);
}
.slider__button {
  margin-right: 14px;
  background-color: #fff;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-top: auto;
  transform: translate(-13px, 2px);
}
</style>