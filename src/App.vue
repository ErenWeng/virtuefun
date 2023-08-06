<template>
  <div ref="app" id="app">
    <AppHeader 
      :menu="menu"
      :active-point="activePoint" 
      @goToPoint="goToPoint"
    />
    <AppSlider :data-observe-point="menu[0]" />
    <AppService :data-observe-point="menu[1]" />
    <AppExperince :data-observe-point="menu[2]" />
    <AppContact :data-observe-point="menu[3]" />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppSlider from '@/components/AppSlider.vue'
import AppService from '@/components/appService/AppService.vue'
import AppExperince from '@/components/AppExperince.vue'
import AppContact from '@/components/AppContact.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppSlider,
    AppService,
    AppExperince,
    AppContact,
    AppFooter,
  },
  data() {
    return {
      menu: ['Home', 'Service', 'Experince', 'Contact Us'],
      headerHeight: null,
      observer: null,
      activePoint: '',
      observeOptions: {
        threshold: 0.2
      }
    }
  },
  mounted() {
    this.initObserver();
    this.observeSetting();
    this.handleHeaderHeightResize()
  },
  destroyed() {
    this.handleHeaderHeightResize()
  },
  methods: {
    handleHeaderHeightResize() {
      window.addEventListener("resize", () => {
        this.headerHeight = document.querySelector('.app-header').offsetHeight
      });
    },
    initObserver() {
      this.observer = new IntersectionObserver(entries => {
        const active = entries.filter(e => e.isIntersecting);
        if(active.length) this.activePoint = active[0].target?.dataset?.observePoint;
      }, this.observeOptions)
    },
    observeSetting() {
      this.$refs.app.childNodes.forEach(e => {
        // initheaderheight
        if (e.className === 'app-header') this.headerHeight = e.offsetHeight
        // setObserver
        if (e.dataset.observePoint) this.observer.observe(e)
      })
    },
    goToPoint(item) {
      let top;
      this.$refs.app.childNodes.forEach(e => {
        if (e.dataset.observePoint === item) top = e.offsetTop - this.headerHeight
      })
      window.scrollTo({ top, behavior: 'smooth' });
    },
  },
}
</script>

<style lang="scss" scoped>
#app {
  position: relative;
  max-width: 100vw;
}
</style>
