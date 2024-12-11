<template>
  <section class="quality">
    <div class="container container__quality">
      <ul class="quality__list">
        <li class="quality__item">
          <img class="quality__img" src="./assets/first.svg" alt="first-image">
          <div class="quality__text">
            <h3 class="quality__heading">High Quality</h3>
            <p class="quality__description">crafted from top materials</p>
          </div>
        </li>
        <li class="quality__item">
          <img class="quality__img" src="./assets/second.svg" alt="first-image">
          <div class="quality__text">
            <h3 class="quality__heading">Warrany Protection</h3>
            <p class="quality__description">Over 2 years</p>
          </div>
        </li>
        <li class="quality__item">
          <img class="quality__img" src="./assets/third.svg" alt="first-image">
          <div class="quality__text">
            <h3 class="quality__heading">Free Shipping</h3>
            <p class="quality__description">Order over 150 $</p>
          </div>
        </li>
        <li class="quality__item">
          <img class="quality__img" src="./assets/four.svg" alt="first-image">
          <div class="quality__text">
            <h3 class="quality__heading">24 / 7 Support</h3>
            <p class="quality__description">Dedicated support</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
}
</script>
<style>
.quality {
  height: 200px;
  width: 100%;
  align-content: center;
  background-color: #ffffff;
  box-shadow: 2px 2px 6px #cecece4e;
}

.quality__list {
  display: flex;
  width: 100%;
  justify-content: space-between;
  transform: translateX(-39px);
}
.quality__item {
  display: flex;
}
.quality__img {
  margin-right: 13px; /* Общий отступ для всех изображений */
}

</style>