<template>
  <ul class="t ">
    <li>
      <div class="num digitalFont">1</div>
      <p class="des">dfvdf</p>
    </li>
    <li>
      <div class="num digitalFont">1</div>
      <p class="des">dfvdf</p>
    </li>
    <li>
      <div class="num digitalFont">{{ this.min }}</div>
      <p class="des">dfvdf</p>
    </li>
    <li>
      <div class="num digitalFont">{{ this.sec }}</div>
      <p class="des">dfvdf</p>
    </li>

  </ul>
</template>

<script>
export default {
  data() {
    return {
      sec: 0,
      min: 0
    }
  },

  methods: {
    startSeconds() {
      setInterval(() => {
        if (this.sec < 59) {
          this.sec++
        }
        else {
          this.sec = 0
          this.min++
        }
      },1000)
    }
  },
  mounted() {
    this.startSeconds();
  },
}
</script>

<style>
.t {
  width: 394px;
  height: 120px;
  font-size: 45px;
  display: flex;
  justify-content: space-between;
}
.des {
  color: black;
}
</style>