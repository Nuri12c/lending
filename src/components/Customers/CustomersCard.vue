<template>
  <div class="customers">

  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },

 

};
</script>

<style scoped>
.customers {
  height: 840px;
  background-color: #b56f6f;
  overflow: hidden;
  width: 100%;
}

.slider {
  margin: 0 auto;
  overflow: hidden;
  width: 410px; /* Настройте ширину слайдера */
  overflow: hidden;
}

.slider-inner {
  display: flex;
  transition: transform 0.3s ease-in-out;

}

.slide {
  width: 300px; /* Настройте ширину слайда */
  height: 200px; /* Настройте высоту слайда */
  box-sizing: border-box;
}

.slide-content {
  padding: 20px;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
