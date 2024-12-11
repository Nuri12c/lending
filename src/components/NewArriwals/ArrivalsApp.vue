<template>
  <section class="arrivals">
    <div class="container arrivals__container">
      <h1 class="arrivals__heading">New Arrivals</h1>
      <p class="arrivals__p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        duis <br />
        ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
        sollicitudin
      </p>

      <div class="arrivals__buttons">
        <button
          v-for="button in buttons"
          :key="button.label"
          @click="setLabel(button.label)"
          :class="{ active: button.label === labelElement }"
          class="arrivals__button"
        >
          <p class="button-text">{{ button.label }}</p>
        </button>
      </div>

      <div class="arrivals__card-container">
        <div  v-for="(item, index) in getAllData[labelElement]" :key="index">
          <div class="arrivals__card-item">
            <div :style="{ 'background-image': `url(${item[img]})`}" class="arrivals__img"></div>
            <h3>{{ item[name] }}</h3>
            <h3>{{ item[price] }}</h3>
            <div class="">{{ item[rating] }}</div>

          </div>
        </div>
      </div>
      <!-- <button class="arrivals__button-more">
        <p class="button-text">View More</p>
      </button> -->
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      labelElement: `Men's fashion`,
      buttons: [
        { label: `Men's fashion` },
        { label: `Women's fashion` },
        { label: `Women Accessories` },
        { label: `Men Accessories` },
        { label: `Discount Deals` },
      ],
      name: 'name', /* создал отдельную переменную для того чтобы vetur не ругался про типы данных|| через эту переменную он ищет правильный ключ на сервере, конкретно тут - name */
      img: 'img',
      price: 'price',
      rating: 'rating'
    };

  },

  computed: {
    ...mapGetters(["getAllData" ]),

  },

  methods: {
    setLabel(label) {
      this.labelElement = label;
    },
  },

};
</script>

<style scoped>
.arrivals {
  margin-bottom: 135px;
}
.arrivals__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 155px;
  transform: translateX(10px);
}
.arrivals__heading {
  margin-bottom: 30px;
}
.arrivals__p {
  margin: 0 auto;
  line-height: 26px;
  margin-bottom: 50px;
}
.arrivals__buttons {
  display: flex;
  justify-content: space-between;
  padding-left: 60px;
  padding-right: 60px;
  margin-bottom: 50px;
}
.arrivals__button {
  width: 207px;
  background-color: #8a8a8a;
}
.active {
  background-color: #000000;
}
.arrivals__card-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.arrivals__card-item {
  width: 386px;
  height: 428px;
  background-color: rgb(255, 255, 255);
  box-shadow: 1px 1px 60px #cecece4e;
  border-radius: 10px;
  padding-top: 11px;
  display: flex;
  flex-direction: column;
  margin-left: 0;
  margin-right: 40px;
  margin-bottom: 60px;
  transform: translateY(20px);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  animation: fadeInUp 0.3s ease-in-out forwards;
}
.mr-0 {
  margin-right: 0;
}

.arrivals__img {
  width: 335px;
  height: 245px;
  margin: 0 auto;
  background-size: cover;
  background-repeat: no-repeat;
}
.arrivals__button-more {
  width: 208px;
  transform: translateY(-15px);
  margin: 0 auto;
}
</style>