<template>
  <div class="app-slider">
    <Swiper class="swiper" :options="swiperOption">
      <SwiperSlide v-for="(item, idx) in swiperData" :key="item.title" class="swiper-slide">
        <img :src="require(`@/assets/img/slider-${idx + 1}.jpg`)" />
        <section class="swiper-content">
          <div class="title">{{ item.title }}</div>
          <div class="subtitle">{{ item.subtitle }}</div>
          <div v-for="p in item.desc" :key="p" class="desc">{{ p }}</div>
        </section>
      </SwiperSlide>
      <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'AppSlider',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          disableOnInteraction: false,
          delay: 3500,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      },
      swiperData: [
        {
          title: '專業技術團隊',
          subtitle: 'Expert Team',
          desc: [
            '我們提供您的企業或生意最佳的解決方案',
            '為您建構和部屬您的軟體服務或者創造新的生意'
          ]
        },
        {
          title: '持續招募菁英',
          subtitle: 'We are recruiting talents',
          desc: [
            '歡迎更多研發與設計菁英的加入',
            '讓別人看見自己的價值從加入我們開始'
          ]
        },
        {
          title: '關於德采',
          subtitle: 'About Virtuefun',
          desc: [
            '我們創建於2020年11月',
            '雖然創新但這裡聚集著菁英'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.app-slider {
  .swiper {
    /deep/ .swiper-pagination {
      bottom: 4%;
      .swiper-pagination-bullet {
        height: 4px;
        width: 72px;
        border-radius: 0;
        margin: 0 6px;
        background-color: #fff;
        @include pc-small{
          width: 60px;
        }
        @include mobile{
          height: 2px; 
          width: 36px;
          margin: 0 4px;
        }
      }
    }
  }
}
.swiper-slide {
  position: relative;
  img {
    display: block;
    object-fit: cover;
    width:100%;
    height:100vh;
    @include ipad{
      width: 120%;
      height: 900px;
      max-height: 100vh;
    }
    @include mobile{ 
      width: 100%;
      max-height: 140vw;
    }
  }
  .swiper-content {
    position: absolute;
    top: 50%;
    left: 10%;
    padding-left: 36px;
    font-family: NotoSansTC;
    color: #fff;
    @include mobile{ 
      top: 64%;
      left: 0.5%;
      padding-right: 16px;
    }
    &::before {
      content: '';
      position: absolute;
      left: 0;
      height: 100%;
      width: 2px;
      background: linear-gradient(to top, #42c9be 4%, #acc31b 88%);
      text-shadow:1px 1px #000;
      @include pc-small{
        width: 1px;
      }
      @include mobile{ 
        display: none;
      }
    }
    .title {
      font-size: 80px;
      margin-bottom: 8px;
      @include pc-small{
        font-size: 56px;
      }
      @include mobile{ 
        font-size: 24px;
        text-shadow:1px 1px #666;
      }
    }
    .subtitle {
      font-size: 60px;
      font-weight: 300;
      margin-bottom: 64px;
      @include pc-small{
        font-size: 36px;
      }
      @include mobile{ 
        font-size: 22px;
        margin-bottom: 24px;
        text-shadow:1px 1px #666;
      }
    }
    .desc {
      font-size: 32px;
      font-weight: 300;
      line-height: 48px;
      @include pc-small{
        font-size: 24px;
        line-height: 36px;
      }
      @include mobile{ 
        font-size: 12px;
        line-height: 20px;
      }
    }
  }
}
</style>