<template>
  <section class="arrivals">
    <div class="container arrivals__container">
      <h1 class="arrivals__heading">New Arrivals</h1>
      <p class="arrivals__p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis <br> ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin
      </p>

      <div class="arrivals__buttons">
        <button
          v-for="(button, index) in buttons"
          :key="index"
          @click="setLabel(button.label)"
          class="arrivals__button"
        ><p class="button-text">{{ button.label }}</p>

        </button>
      </div>

      <div class="arrivals__card-container" >
        <ul v-for="(card, index) in cards" :key="index" class="arrivals__card-list" >
          <li :class="{ 'mr-0': (index + 1) % 3 === 0 }" class="arrivals__card-item" :style="{ animationDelay: `${index * 0.1}s` }">
            <img class="arrivals__img" :src="card.img" alt="img">
            {{ card.heading }}
          </li>

        </ul>
      </div>
      <button class="arrivals__button-more"><p class="button-text">View More</p></button>
    </div>
  </section>
</template>

<script>
import DataMixin from '@/services/DataMixin';

export default {
  data() {
    return {
      labelElement: `Men's fashion`,
      buttons: [
        { label: `Men's fashion` },
        { label: `Womens's fashion` },
        { label: `Women Accessories` },
        { label: `Men Accessories` },
        { label: `Discount Deals` },
      ],

    };
  },
  mixins: [DataMixin],
  computed: {

  },
  methods: {
    setLabel(label) {
      this.labelElement = label
    }
  }
};
</script>

<style>
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
  margin-right: 60px;
  margin-bottom: 60px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  animation: fadeInUp 0.3s ease-in-out forwards;
}
.mr-0 {
  margin-right: 0;
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.arrivals__img {
  width: 335px;
  height: 245px;
  margin: 0 auto;
}
.arrivals__button-more {
  width: 208px;
  transform: translateY(-15px);
  margin: 0 auto;
}
</style>