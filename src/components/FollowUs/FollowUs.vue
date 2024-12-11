<template>
  <section class="follow">

      <h1 class="follow__heading">Follow Us On Instagram</h1>
      <p class="follow__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
        <ul class="follow__images-list">
          <li class="follow__images-item mb"><img src="./assets/1.jpg" alt="image"></li>
          <li class="follow__images-item"><img src="./assets/2.jpg" alt="image"></li>
          <li class="follow__images-item mb"><img src="./assets/3.jpg" alt="image"></li>
          <li class="follow__images-item"><img src="./assets/4.jpg" alt="image"></li>
          <li class="follow__images-item mb"><img src="./assets/5.jpg" alt="image"></li>
          <li class="follow__images-item"><img src="./assets/6.jpg" alt="image"></li>
          <li class="follow__images-item mb"><img src="./assets/7.jpg" alt="image"></li>
        </ul>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.follow {
  width: 100%;
  height: 610px;
  background-color: antiquewhite;
  padding: 156px 0 150px 0;
  text-align: center;
}
.follow__heading {
  margin-bottom: 28px;

}
.follow__p {
  width: 600px;
  margin: 0 auto;
  line-height: 26px;
  margin-bottom: 98px;
}
.follow__images-list {
  display:flex
}
.mb {
  margin-top: 35px;
}
</style>