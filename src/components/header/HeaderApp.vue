<template>
  <section class="header">
    <div class="container header__container">
      <h1 class="logo volkhowRegular">FASCO</h1>
      <div class="nav ">
        <p class="nav__element">Home</p>
        <p class="nav__element">Deals</p>
        <p class="nav__element">New Arrivals</p>
        <p class="nav__element">Packages</p>
        <p class="nav__element">Sign in</p>
        <button class="button nav__button"><p class="button-text">Sign Up</p></button>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.header {
  padding-top: 70px;
  height: 56px;
  padding-bottom: 94px;
  
}
.header__container {
  height: 56px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 94px;
}
.logo {
  font-size: 52px;
  transform: translateY(1px);
}
.nav {
  display: flex;
  max-width: 764px;
  width: 764px;
  align-items: center;
  transform: translateY(2px);
}
.nav__element:not(:last-child) {
  margin-right: 58px;
}
.nav__button {
  width: 152px;
  transform: translateY(-2px);
}
</style>