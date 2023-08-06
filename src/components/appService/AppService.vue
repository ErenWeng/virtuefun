<template>
  <div class="app-service">
    <div class="title">出色的服務</div>
    <div class="subtitle">SERVICE ITEMS</div>
    <ul class="service-content">
      <li v-for="item in serviceData" :key="item.title" class="service-item">
        <div class="service-icon">
          <img :src="require(`@/assets/img/service-${item.icon}.png`)" />
        </div>
        <div class="service-title">{{ item.title }}</div>
        <div v-for="p in item.desc" :key="p" class="service-desc">{{ p }}</div>
      </li>
    </ul>
    <AppBusiness />
    <AppProvide />
  </div>
</template>

<script>
import AppBusiness from '@/components/appService/AppBusiness.vue'
import AppProvide from '@/components/appService/AppProvide.vue'

export default {
  name: 'AppService',
  components: {
    AppBusiness,
    AppProvide,
  },
  data() {
    return {
      serviceData: [
        {
          icon: 'solution',
          title: '分析解決方案',
          desc: ['提供專人服務分析需求','與提供建議']
        },
        {
          icon: 'risk',
          title: '風險管理',
          desc: ['全方位的服務']
        },
        {
          icon: 'plan',
          title: '商業計畫',
          desc: ['根據需求制定符合商業計畫','的解決方案']
        },
        {
          icon: 'time',
          title: '省時省力',
          desc: ['由專門的項目經理服務專案','時程化繁為簡']
        },
        {
          icon: 'ensure',
          title: '品質保證',
          desc: ['專業把關所有環節','鉅細彌遺完全掌握']
        },
        {
          icon: 'secret',
          title: '安全保密',
          desc: ['嚴格控管商業機密','安心有保障']
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.app-service {
  position: relative;
  background-color: #333;
  color: #fff;
  text-align: center;
  font-family: NotoSansTC;
  .title {
    font-size: 70px;
    padding-top: 88px;
    @include pc-small{
      font-size: 62px;
    }
    @include ipad{
      padding-top: 72px;
      font-size: 48px;
    }
    @include mobile{
      padding-top: 40px;
      font-size: 24px;
    }
  }
  .subtitle {
    font-size: 50px;
    color: #389aec;
    padding: 24px 0;
    margin-bottom: 100px;
    position: relative;
    @include pc-small{
      font-size: 40px;
      margin-bottom: 88px;
    }
    @include ipad{
      font-size: 32px;
      padding: 16px 0;
    }
    @include mobile{
      font-size: 16px;
      padding: 10px 0;
      margin-bottom: 36px;
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 250px;
      height: 5px;
      background: linear-gradient(to left, #42c9be 78%, #acc31b);
      @include ipad{
        width: 118px;
        height: 2.5px;
      }
    }
  }
}
.service-content {
  display: grid;
  grid-template-areas: '1 2 3' '4 5 6';
  gap: 40px 80px;
  justify-content: center;
  padding-bottom: 56px;
  @include pc-small{
    gap: 56px 64px;
    padding-bottom: 72px;
  }
  @include ipad{
    gap: 36px 2%;
    padding-bottom: 72px;
  }
  @include mobile{ 
    gap: 28px 1%;
    grid-template-areas: '1 2' '3 4' '5 6';
    padding-bottom: 40px;
  }
  .service-item {
    height: 328px;
    width: 294px;
    @include ipad{
      height: 235px;
      width: 240px;
    }
    @include mobile{ 
      height: 139px;
      width: 157px;
    }
    &:hover {
      .service-icon {
        border: 1px solid #389aec;
      }
    }
    .service-icon {
      width: 128px;
      height: 128px;
      margin: auto;
      display: grid;
      place-items: center;
      border-radius: 50%;
      border: 1px solid #979797;
      transition: 0.3s;
      @include ipad{
        height: 100px;
        width: 100px;
      }
      @include mobile{ 
        height: 60px;
        width: 60px;
      }
      img {
        height: 56px;
        width: 56px;
        @include ipad{
          height: 44px;
          width: 44px;
        }
        @include mobile{ 
          height: 28px;
          width: 28px;
        }
      }
    }
    .service-title {
      font-size: 42px;
      color: #389aec;
      margin: 24px auto;
      @include ipad{
        font-size: 32px;
        margin: 18px auto;
      }
      @include mobile{ 
        font-size: 20px;
        margin: 12px auto;
      }
    }
    .service-desc {
      font-size: 24px;
      font-weight: 300;
      color: #e2e2e2;
      line-height: 36px;
      @include ipad{
        font-size: 20px;
        line-height: 28px;
      }
      @include mobile{ 
        font-size: 12px;
        line-height: 20px;
      }
    }
  }
}
</style>
