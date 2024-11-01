<template>
  <section class="logos">
    <div class="container logos-container">
      <div class="logos__item">1</div>
      <div class="logos__item">2</div>
      <div class="logos__item">3</div>
      <div class="logos__item">4</div>
      <div class="logos__item">5</div>
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
.logos__item {
  width: 196px;
  height: 32px;
  background-color: #ffb2b2;
  text-align: center;
}
</style>