<template>
  <div class="DealsSlider" >
    <button class="slider__button" @click="() => { prevSlide(); animateBlock(); }">
      <p class="button__symbol">&lt;</p>
    </button>
    <button class="slider__button" @click="() => { nextSlide(); animateBlock(); }">
      <p class="button__symbol">&gt;</p>
    </button>
    <div
      :class="{'animated': isAnimated}"
      :style="{
        height: key === 0 ? '534px' : '490px',
        width: key === 0 ? '358px' : '368px',
        padding: key === 0 ? '24px' : '0',
        backgroundImage: `url(${hihi[item].imgUrl})`,
      }"
      v-for="(item, key) in currentIndexes"
      :key="key"
      class="slider__card"

    >
      <div v-if="item === currentIndexes[0]" class="card__description">
        <p class="card__p">{{ hihi[item].e }}</p>
        <h2 class="card__sale-h2">30% OFF</h2>
      </div>
    </div>
    <div class="points__container" >
      <div v-for="(point, index) in points" :key="index">
        <div :class="{ activePoint: point > 0, pointDefault: point === 0 }">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndexes: [0, 1, 2, 3],
      hihi: [
        {
          e: "01 - Spring Sale",
          imgUrl: require("../assets/0-slider-img.jpg"),
        },
        {
          e: "02 - Spring Sale",
          imgUrl: require("../assets/2-slider-img.jpg"),
        },
        {
          e: "03 - Spring Sale",
          imgUrl: require("../assets/1-slider-img.jpg"),
        },
        {
          e: "04 - Spring Sale",
          imgUrl: require("../assets/3-slider-img.jpg"),
        },
      ],
      points: [1, 0, 0, 0],
      isAnimated: false
    };
  },
  methods: {
    nextSlide() {
      this.currentIndexes = this.currentIndexes.map((index) => {
        return (index + 1) % 4;
      });

      // Обновление points (исправленный код)
      let activeIndex = this.points.findIndex((point) => point === 1);

      if (activeIndex !== 3) {
        this.points[activeIndex + 1] = 1;
        this.points[activeIndex] = 0;
      } else {
        this.points[3] = 0;
        this.points[0] = 1;
      }
    },
    prevSlide() {
      this.currentIndexes = this.currentIndexes.map((index) => {
        return (index - 1 + 4) % 4;
      });

      let activeIndex = this.points.findIndex((point) => point === 1);

      if (activeIndex !== 0) {
        this.points[activeIndex - 1] = 1;
        this.points[activeIndex] = 0;
      } else {
        this.points[3] = 1;
        this.points[0] = 0;
      }
    },
    animateBlock() {
      this.isAnimated = true;
      // Убираем анимацию через 1 секунду, чтобы можно было запустить её снова
      setTimeout(() => {
        this.isAnimated = false;
      }, 500); // Длительность анимации
    }
  },
};
</script>


<style>
.points__container {
  display: flex;
  flex-direction: row;
  position: absolute;
  left: 560px;
  top: 550px;
  align-items: center;
  width: 120px;
  justify-content: space-between;
}
.pointDefault {
  background: url(../assets/Ellipse.svg);
  background-size: cover;
  width: 11px;
  height: 11px;
}
.activePoint {
  background: url(../assets/Active.svg);
  background-size: cover;
  width: 27px;
  height: 27px;
}
.DealsSlider {
  display: flex;
  overflow: visible;
}
.slider__card {
  display: flex;
  margin-right: 24px;
  background-size: cover;
  align-items: flex-end;
}
.animated {
  animation-duration: 1s;
  animation-name: hi;
  opacity: 1;
}
@keyframes hi {
  0% {opacity: 0;};
  100% {opacity: 1;}
}
.card__description {
  width: 188px;
  height: 95px;
  background-color: #fff;
  padding-left: 26px;
  padding-top: 32px;
}
.card__p {
  text-align: start;
  margin-bottom: 30px;
}
.card__sale-h2 {
  text-align: start;
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