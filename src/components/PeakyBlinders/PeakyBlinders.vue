<template>
  <section class="peaky">
    <div class="peaky__container">
       <div class="peaky__left-item">
        <img class="peaky-img" src="./assets/peaky.png" alt="gg">
      </div>
       <div class="peaky__right-item">
        <p class="peaky__p grey">Women Collection</p>
        <h1 class="peaky__heading">Peaky Blinders</h1>
        <p class="peaky__p  underline">DESCRIPTION</p>
        <p class="peaky__description grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin.
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis.
        </p>
        <div class="peaky__size-block">
          <p class="size__item grey">Size:</p>
          <p class="size-letter">M</p>
        </div>
        <h2 class="peaky__price">
          $100.<span class="lowsize">00</span>
        </h2>
        <button class="peaky__button"><p class="button-text">Buy Now</p></button>
       </div>
    </div>
  </section>
</template>

<script>
export default {
 
}
</script>

<style>
.peaky {
  padding: 0 !important;
}
.peaky-img {
  width: 1055px;
  transform: translateX(-10px);
}
.peaky__container {
  width: 100%;
  height: 570px;
  background-color: #f1dddd;
  display: flex;
}
.peaky__right-item {
  padding-top: 65px;
  padding-left: 19px;
}
.peaky__p {
  margin-bottom: 30px;
}
.peaky__heading {
  margin-bottom: 32px;
}
.underline {
  text-decoration: underline;
  font-weight: 500;
  margin-bottom: 23px;
}
.peaky__description {
  line-height: 24px;
  width: 515px;
  margin-bottom: 19px;
}
.peaky__size-block {
  display: flex;
  margin-bottom: 28px;
}
.size__item {
  margin-right: 15px;
  align-content: center;
  transform: translateY(1px);
}
.size-letter {
  background-color: #000000;
  padding: 7px 19px 5px 20px;
  border-radius: 10px;
  color: white;
}
.peaky__price {
  color: #000000;
  margin-bottom: 25px;
}
.lowsize {
  font-size: 24px;
}
.peaky__button {
  padding: 20px 70px 20px 69px;
}
</style>