<template>
  <section class="logos">
    <div class="container logos-container">
      <div class="logos__item chanel"></div>
      <div class="logos__item vuton"></div>
      <div class="logos__item prada"></div>
      <div class="logos__item klein"></div>
      <div class="logos__item denim"></div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>

.logos-container {
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chanel {
  background: url(./assets/chanel-img.svg);
  transform: translate(-1px, -2px)
}
.vuton {
  background: url(./assets/vuton-img.svg);
  transform: translate(-6px, 2px)
}
.prada {
  background: url(./assets/prada-img.svg);
  transform: translate(-3px, -5px)
}
.klein {
  background: url(./assets/klein-img.svg);
  transform: translate(-6px, -5px)
}
.denim {
  background: url(./assets/denim-img.svg);
  transform: translate( 11px, -2px)
}
.logos__item {
  width: 196px;
  height: 32px;
  text-align: center;
  background-repeat: no-repeat;
}
</style>