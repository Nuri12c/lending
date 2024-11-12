<template>
  <div class="DealsSlider">
    <button class="slider__button" @click="nextSlide"><p class="button__symbol">&lt;</p></button>
    <button class="slider__button" @click="prevSlide"><p class="button__symbol">&gt;</p></button>
    <div :style="{ height: index === currentIndexes[0] ? '582px' : '490px' }" v-for="(index, key) in currentIndexes" :key="key" :class="CardImg + index">
      <div v-if="index === currentIndexes[0]" class="ho">sfvsfdvb</div>
    </div>
  </div>
  <p>fff</p>
</template>

<script>
export default {
  data() {
    return {
      CardImg: 'CardImg', // Класс для карточек
      currentIndexes: [0, 1, 2, 3],
      maxIndex: 3, // Максимальное значение индекса
    };
  },
  methods: {
    nextSlide() {
      this.currentIndexes = this.currentIndexes.map((index) => {
        return (index + 1) % (this.maxIndex + 1); // Используем модуль для циклического сдвига
      });
    },
    prevSlide() {
      this.currentIndexes = this.currentIndexes.map((index) => {
        return (index - 1 + this.maxIndex + 1) % (this.maxIndex + 1); // Используем модуль для циклического сдвига
      });
    },
  },
};
</script>


<style>
.DealsSlider {
  display: flex;
  overflow: visible;
}
.CardImg0 {
  width: 406px;
  height: 582px;
  background: url(../assets/first-slider-img.jpg);
  margin-right: 24px;
  background-size: cover;
}
.CardImg1 {
  width: 372px;
  height: 490px;
  background: url(../assets/second-slider-img.jpg);
  margin-right: 24px;
  background-size: cover;
}
.CardImg2 {
  width: 372px;
  height: 486px;
  background: url(../assets/third-slider-img.jpg);
  margin-right: 24px;
  background-size: cover;
}
.CardImg3 {
  width: 372px;
  height: 486px;
  background: url(../assets/four-slider-img.jpeg);
  margin-right: 24px;
  background-size: cover;
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
.button__symbol {
  font-size: 25px;
}
</style>