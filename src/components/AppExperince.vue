<template>
  <div class="app-experince">
    <div class="title">更好的體驗</div>
    <div class="subtitle">通過我們的解決方案得到更好的體驗</div>
    <ul class="experince-content">
      <li v-for="item in experinceData" :key="item" class="experince-item">
        <img :src="require(`@/assets/img/experince-${item}.png`)" />
      </li>
    </ul>
    <div class="footer">
      <p>我們滿足各個行業的不同的需求，</p>
      <p>是一支致力於技術領域的靈魂團隊。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppExperince',
  data() {
    return {
      experinceData: ['solution', 'apex', 'better']
    }
  }
}
</script>

<style lang="scss" scoped>
.app-experince {
  position: relative;
  text-align: center;
  font-family: NotoSansTC;
  .title {
    font-size: 70px;
    padding-top: 88px;
    color: #6c6c6c;
    @include pc-small{
      font-size: 62px;
    }
    @include ipad{
      padding-top: 112px;
      font-size: 48px;
    }
    @include mobile{
      padding-top: 40px;
      font-size: 24px;
    }
  }
  .subtitle {
    font-size: 48px;
    font-weight: 300;
    color: #004885;
    padding: 32px 0;
    margin-bottom: 100px;
    position: relative;
    @include pc-small{
      font-size: 40px;
      padding-bottom: 24px;
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
.experince-content {
  padding: 0 96px;
  margin: auto;
  max-width: 1200px;
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  @include mobile{
    flex-flow: wrap;
  }
  & > * + * {
    margin-left: 48px;
    @include ipad{
      margin-left: 24px;
    }
    @include mobile{
      margin-left: 0;
      margin-top: 30px;
    }
  }
  .experince-item {
    flex: 0 0 33%;
    @include mobile{
      flex: 0 0 100%;
      display: grid;
      place-items: center;
    }
    img {
      display: block;
      max-width: 100%;
      @include mobile{
        max-width: 280px;
      }
    }
  }
}
.footer {
  color: #3e3e3e;
  font-size: 24px;
  font-weight: 300;
  line-height: 36px;
  padding: 112px 0 96px;
  margin: auto;
  & > p {
    display: inline-block;
  }
  @include pc-small{
    padding: 80px 0 112px;
  }
  @include ipad{
    font-size: 18px;
    line-height: 28px;
    padding: 100px 0 136px;
  }
  @include mobile{
    font-size: 12px;
    line-height: 20px;
    padding: 24px 16px 56px;
  }
}
</style>
