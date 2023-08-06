<template>
  <div :class="['app-header-toggler', { openNavBar } ]" @click="$emit('toggleNavBar')">
    <div class="line">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeaderToggler',
  props: {
    openNavBar: {
      type: Boolean,
      default: () => false
    }
  },
}
</script>

<style lang="scss" scoped>
.app-header-toggler {
  display: none;
}
@include mobile{
  .app-header-toggler {
    display: block;
    z-index: 10000;
    position: fixed;
    top: 0;
    right: 4vw;
    width: 36px;
    height: 36px;
    margin: 12px auto;
    transform: rotate(0deg);
    transition: .5s ease-in-out;
    cursor: pointer;
    .line {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      height: 60%;
      width: 60%;
    }
    span {
      display: block;
      position: absolute;
      height: 1px;
      width: 100%;
      background: #fff;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: .25s ease-in-out;
      &:nth-child(1) {
        top: 0px;
      }
      &:nth-child(2), &:nth-child(3) {
        top: 8px;
      }
      &:nth-child(4) {
        top: 16px;
      }
    }
    &.openNavBar {
      span {
        &:nth-child(1), &:nth-child(4) {
          top: 8px;
          width: 0%;
          left: 25%;
          opacity: 0;
        }
        &:nth-child(2) {
          transform: rotate(45deg);
        }
        &:nth-child(3) {
          transform: rotate(-45deg);
        }
      }
    }
  }
}
</style>
