<template>
  <div :class="['app-header', { changeBg: scrollPosition > 0 }]">
    <div class="logo">
      <img src="@/assets/img/logo.png" alt="logo">
    </div>
    <ul :class="['navbar', { openNavBar} ]">
      <div 
        v-for="item in menu" 
        :key="item" 
        :class="['nav-item', { 'active': ( item === activePoint ) }]"
        @click="goToPoint(item)"
      >
        {{ item }}
      </div>
    </ul>
    <span v-show="openNavBar" class="mask" @click="openNavBar = false"></span>
    <AppHeaderToggler :open-nav-bar="openNavBar" @toggleNavBar="toggleNavBar"/>
  </div>
</template>

<script>
import AppHeaderToggler from '@/components/AppHeaderToggler.vue'

export default {
  name: 'AppHeader',
  components: {
    AppHeaderToggler
  },
  props: {
    menu: {
      type: Array,
      default: () => []
    },
    activePoint: {
      type: String,
      default: () => ''
    }
  },
  data() {
    return {
      scrollPosition: null,
      observeOptions: {
        threshold: [0]
      },
      openNavBar: false
    }
  },
  mounted() {
    if (window.scrollY > 0) this.scrollPosition = 1
    setTimeout(this.observeScrollPosition(), 1000)
  },
  methods: {
    observeScrollPosition() {
      window.addEventListener("scroll", () => {
        this.scrollPosition = window.scrollY
      });
    },
    toggleNavBar() {
      this.openNavBar = !this.openNavBar
    },
    goToPoint(item) {
      this.$emit('goToPoint', item)
      this.openNavBar = false
    }
  }
}
</script>

<style lang="scss" scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  max-width: 100%;
  height: 120px;
  padding: 0 180px;
  display: flex;
  justify-content: space-between;
  z-index: 1000;
  @include pc-small{
    padding: 0 120px;
  }
  @include ipad{
    padding: 0 72px;
  }
  @include mobile{
    height: 60px;
    padding: 0 4vw;
    align-items: center;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(86deg, #49c5f4 0%, #35399e 100%);
    opacity: 0;
    transition: 0.3s;
  }
  &.changeBg {
    &::before {
      opacity: 1;
    }
  }
}
.logo {
  height: auto;
  max-width: 320px;
  z-index: 1000;
  @include ipad{
    width: 260px;
  }
  @include mobile{
    width: 30%;
    min-width: 144px;
  }
  img {
    display: block;
    max-width: 100%;
    margin: 40px 0 13px;
    @include ipad{
      margin: 52px 0 13px;
    }
    @include mobile{
      margin: auto;
    }
  }
}
.navbar {
  display: flex;
  align-items: flex-end;
  margin-top: 20px;
  cursor: pointer;
  & > * + * {
    margin-left: 60px;
    @include pc-small{
      margin-left: 40px;
    }
    @include ipad{
      margin-left: 24px;
    }
  }
  .nav-item {
    font-family: Optima;
    font-size: 24px;
    padding: 13px 0;
    color: #fff;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    @include pc-small{
      font-size: 20px;
    }
    @include ipad{
      font-size: 18px;
      padding: 14px 0;
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 5px;
      z-index: 1;
      background: linear-gradient(90deg, #42c9be 0%, #acc31b 100%);
      transition: 0.3s;
      transition-delay: 0.3s;
      transform: translate(-120%);
      border-radius: 5px;
    }
    &.active::after {
      transform: translate(0);
    }
  }
}
.mask {
  display: none;
}
// only for navbar mobile
@include mobile{
  .navbar {
    position: fixed;
    margin-top: 0;
    padding-top: 80px;
    top: 0;
    right: 0;
    width: 45%;
    min-height: 100%;
    z-index: 10000;
    flex-flow: column;
    transition: 0.3s;
    transform: translateX(100%);
    & > * + * {
      margin-left: 0;
      margin-top: 24px;
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(29deg, #424242 24%, #1f1f1f 67%);
      opacity: 0.9;
      z-index: -1;
    }
    &.openNavBar {
      transform: translateX(0);
    }
    .nav-item {
      margin-right: 5vw;
      font-size: 18px;
      padding: 6px;
      color: #fff;
      overflow: hidden;
      position: relative;
      cursor: pointer;
      &::after {
        content: '';
        height: 2px;
      }
    }
  }
  .mask {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
  }
}
</style>
