<template>
<section class="deals">
  <div class=" deals__container">
    <div class="deals__left-item">
      <div class="deals__hero">
        <h1 class="deals__hero-heading">
          Deals Of The Month
        </h1>
        <p class="deals__p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin
        </p>
        <button class="deals__button button">
          <p class="button-text">Buy Now</p>
        </button>
      </div>
      <div class="deals__timer">
        <h2 class="deals__timer-heading">Hurry, Before It’s Too Late!</h2>
        <DealsTimer/>
      </div>
    </div>
    <div class="deals__right-item">
      <DealsSlider/>
    </div>
  </div>
</section>
</template>

<script>
import DealsSlider from './components/DealsSlider.vue';
import DealsTimer from './components/DealsTimer.vue';
export default {
  components: {
    DealsSlider,
    DealsTimer
  }
}
</script>

<style>
.deals {
  margin: 0 auto;
  max-width: 1280px;
  height: 882px;
  padding-top: 150px;
}
.deals__hero {
  padding-top: 9px;

}
.deals__container {
display: flex;
position: absolute;
width: 1548px + 444px;
}
.deals__left-item {
  width: 444px;
  text-align: left;
}
.deals__hero-heading {
  white-space: nowrap;
  margin-bottom: 28px;

}
.deals__p {
  line-height: 26px;
  width: 98%;
  margin-bottom: 39px;
}
.deals__button {
  width: 207px;
  margin-bottom: 56px;
}
.deals__right-item {
  position: relative;
}
.deals__timer-heading {
  margin-bottom: 20px;
}

</style>