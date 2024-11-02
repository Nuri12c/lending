<template>
  <section class="arrivals">
    <div class="container arrivals__container">
      <h1 class="arrivals__heading">New Arrivals</h1>
      <p class="arrivals__p">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
        totam modi, ex sapiente quaerat consequatur est eaque nisi ea enim!
      </p>

      <div class="arrivals__buttons">
        <button
          v-for="(button, index) in buttons"
          :key="index"
          @click="setLabel(button.label)"
          class="arrivals__button"
        >
          {{ button.label }}
        </button>
      </div>

      <div class="arrivals__card-container" >
        <ul v-for="(card, index) in cards" :key="index" class="arrivals__card-list" >
          <li v-if="card.label === labelElement" class="arrivals__card-item" :style="{ animationDelay: `${index * 0.1}s` }">
            <img class="arrivals__img" :src="card.img" alt="img">
            {{ card.heading }}
          </li>

        </ul>
      </div>
      <button>dfbdf</button>
    </div>
  </section>
</template>

<script>


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
      cards: [
        {
          label: `Men's fashion`,
          heading: "new kurtka",
          description: "horoshaya",
          stars: 1,
          price: 123,
          img: require('./assets/107847.jpg')
        },
        {
          label: `Men's fashion`,
          heading: "new kurtka",
          description: "horoshaya",
          stars: 1,
          price: 123,
          img: require('./assets/107847.jpg')
        },
        {
          label: `Men's fashion`,
          heading: "new kurtka",
          description: "horoshaya",
          stars: 1,
          price: 123,
          img: require('./assets/107847.jpg')
        },
        {
          label: `Men's fashion`,
          heading: "new kurtka",
          description: "horoshaya",
          stars: 1,
          price: 123,
          img: require('./assets/107847.jpg')
        },
        {
          label: `Men's fashion`,
          heading: "new kurtka",
          description: "horoshaya",
          stars: 1,
          price: 123,
          img: require('./assets/107847.jpg')
        },
        {
          label: `Men's fashion`,
          heading: "new kurtka",
          description: "horoshaya",
          stars: 1,
          price: 123,
          img: require('./assets/107847.jpg')
        },
        {
          label: `Womens's fashion`,
          heading: "new kurtka",
          description: "horoshaya",
          stars: 1,
          price: 123,
          img: require('./assets/Images.jpg')
        },
        {
          label: `Womens's fashion`,
          heading: "new kurtka",
          description: "horoshaya",
          stars: 1,
          price: 123,
          img: require('./assets/Images.jpg')
        },
        {
          label: `Womens's fashion`,
          heading: "new kurtka",
          description: "horoshaya",
          stars: 1,
          price: 123,
          img: require('./assets/Images.jpg')
        },
        {
          label: `Womens's fashion`,
          heading: "new kurtka",
          description: "horoshaya",
          stars: 1,
          price: 123,
          img: require('./assets/Images.jpg')
        },
        {
          label: `Womens's fashion`,
          heading: "new kurtka",
          description: "horoshaya",
          stars: 1,
          price: 123,
          img: require('./assets/Images.jpg')
        },
        {
          label: `Womens's fashion`,
          heading: "new kurtka",
          description: "horoshaya",
          stars: 1,
          price: 123,
          img: require('./assets/Images.jpg')
        },
        {
          label: `Womens's fashion`,
          heading: "new kurtka",
          description: "horoshaya",
          stars: 1,
          price: 123,
          img: require('./assets/Images.jpg')
        },

      ],
    };
  },
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
.arrivals__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.arrivals__p {
  width: 400px;
  margin: 0 auto;
  margin-bottom: 50px;
}
.arrivals__buttons {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.arrivals__card-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.arrivals__card-item {
  width: 300px;
  height: 300px;
  background-color: cadetblue;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 50px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  animation: fadeInUp 0.3s ease-in-out forwards;
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
  width: 300px;
}
</style>