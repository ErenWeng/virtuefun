<template>
  <div class="app-footer">
    <div class="logo">
      <img src="@/assets/img/logo.png" alt="logo">
    </div>
    <p class="copyright">©2021 Virtuefun Company Ltd., All Rights Reserved.</p>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style lang="scss" scoped>
.app-footer {
  max-width: 100%;
  height: 128px;
  background: linear-gradient(87deg, #49c5f4 0%, #35399e 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  @include ipad{
    height: 100px;
  }
  @include mobile{
    height: 40px;
  }
  .logo {
    width: 240px;
    margin-right: 24px;
    @include pc-small{
      width: 216px;
      margin-right: 20px;
    }
    @include ipad{
      width: 175px;
      margin-right: 16px;
    }
    @include mobile{
      display: none;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
  .copyright {
    font-size: 20px;
    @include pc-small{
      font-size: 16px;
    }
    @include mobile{
      font-size: 10px;
    }
  }
}
</style>
