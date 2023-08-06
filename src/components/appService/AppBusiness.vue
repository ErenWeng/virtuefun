<template>
  <div class="app-business">
    <div class="title">您成功的後盾</div>
    <div class="subtitle">WE SUPPORT YOUR BUSINESS</div>
    <ul class="business-content">
      <li v-for="item in businessData" :key="item.title" class="business-item">
        <img :src="require(`@/assets/img/business-${item.icon}.png`)" />
        <div class="business-count">{{ item.count }}</div>
        <div class="business-title">{{ item.title }}</div>
        <div v-for="p in item.desc" :key="p" class="business-desc">{{ p }}</div>
      </li>
    </ul>
    <div class="footer">
      <p>由最好的菁英顧問與開發人員，為用戶和企業帶來微笑。</p>
      <p>輕鬆解決所有棘手的技術問題，確保解決方案的可用性。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppBusiness',
  data() {
    return {
      businessData: [
        {
          icon: 'plus',
          count: '120',
          title: '受惠客戶',
          desc: ['提出並完成解決方案，消除阻礙人們工作的障礙，推動您的成功。']
        },
        {
          icon: 'percent',
          count: '99',
          title: '效率提升',
          desc: ['我們提升了所有工作上的效率，大幅減少您成功所需要的成本與時間。']
        },
        {
          icon: 'degrees',
          count: '360',
          title: '全方位',
          desc: ['針對各行各業獨特視角的','專案計畫，','量身打造最佳方案。']
        },
        {
          icon: 'check',
          count: '600',
          title: '成功案例',
          desc: ['實戰經驗豐富，','各式問題迎刃而解，','深受信賴。']
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.app-business {
  position: relative;
  background-color: #020E22;
  color: #fff;
  text-align: center;
  font-family: NotoSansTC;
  .title {
    font-size: 54px;
    padding-top: 144px;
    @include pc-small{
      font-size: 48px;
    }
    @include ipad{
      padding-top: 72px;
      font-size: 36px;
    }
    @include mobile{
      padding-top: 40px;
      font-size: 24px;
    }
  }
  .subtitle {
    font-size: 36px;
    color: #389aec;
    padding: 24px 0;
    margin-bottom: 100px;
    position: relative;
    @include pc-small{
      font-size: 32px;
    }
    @include ipad{
      padding: 18px 0;
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
.business-content {
  display: grid;
  grid-template-areas: '1 2 3 4';
  justify-content: center;
  column-gap: 5%;
  margin-bottom: 142px;
  @include pc-small{
    column-gap: 36px;
  }
  @include ipad{
    grid-template-areas: '1 2' '3 4';
    gap: 58px 40px;
    margin-bottom: 108px;
  }
  @include mobile{
    gap: 28px 4%;
    margin-bottom: 40px;
  }
  .business-item {
    width: 272px;
    height: 376px;
    display: flex;
    flex-flow: column;
    position: relative;
    @include pc-small{
      width: 216px;
      height: 296px;
    }
    @include mobile{
      width: 136px;
      height: 172px;
    }
    &::before, &::after {
      content: '';
      background-color: #979797;
      position: absolute;
    }
    &::before {
      // 直線
      width: 1px;
      height: 160px;
      top: 104px;
      right: 32px;
      @include pc-small{
        height: 128px;
        top: 86px;
        right: 26px;
      }
      @include mobile{
        height: 72px;
        top: 48px;
        right: 14px;
      }
    }
    &::after {
      // 橫線
      height: 1px;
      width: 100%;
      top: 250px;
      @include pc-small{
        top: 200px;
      }
      @include mobile{
        top: 112px;
      }
    }
    img {
      position: absolute;
      top: 0;
      right: 0;
      @include pc-small{
        width: 52px;
        height: 52px;
      }
      @include mobile{
        width: 30px;
        height: 30px;
      }
    }
    .business-count {
      text-align: right;
      margin: 28px 62px 28px 0;
      font-family: Roboto;
      font-size: 120px;
      font-weight: 900;
      @include pc-small{
        font-size: 96px;
        margin: 20px 48px 20px 0;
      }
      @include mobile{
        font-size: 54px;
        margin: 12px 30px 12px 0;
      }
    }
    .business-title {
      text-align: right;
      font-size: 48px;
      font-weight: 300;
      margin: 0 62px 54px 0;
      @include pc-small{
        font-size: 38px;
        margin: 0 48px 50px 0;
      }
      @include mobile {
        font-size: 22px;
        margin: 0 30px 24px 0;
      }
    }
    .business-desc {
      font-size: 24px;
      font-weight: 300;
      line-height: 32px;
      @include pc-small{
        font-size: 18px;
        line-height: 24px;
      }
      @include mobile{
        font-size: 12px;
        line-height: 16px;
      }
    }
  }
}
.footer {
  font-size: 24px;
  font-weight: 300;
  line-height: 32px;
  padding-bottom: 104px;
  @include pc-small{
    padding-bottom: 160px;
  }
  @include ipad{
    padding-bottom: 104px;
  }
  @include mobile{
    font-size: 12px;
    line-height: 20px;
    padding-bottom: 48px;
    padding: 0 8px 104px;
  }
}
</style>
