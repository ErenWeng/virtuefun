<template>
  <div class="app-provide">
    <div class="pic">
      <img src="@/assets/img/provide-bg.jpg" />
    </div>
    <div class="provide-content">
      <div class="title">高質量服務與成果</div>
      <div class="subtitle">PROVIDE BETTER EXPERIENCES</div>
      <div class="desc">
        <p>專業的團隊為用戶提供最好的服務，</p>
        <p>主動把關每一個環節。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppProvide'
}
</script>

<style lang="scss" scoped>
.app-provide {
  position: relative;
  color: #fff;
  background: rgb(7,23,54);
  .pic {
    max-width: 100%;
    overflow: hidden;
    @include pc-small{
      height: 664px;
    }
    @include mobile{ 
      height: 475px;
    }
    img {
      display: block;
      max-height: 100%;
      z-index: -1;
      object-fit: contain;
    }
  }
  &::before {
    content: '';
    position: absolute;
    top: 744px;
    left: 0;
    width: 78px;
    height: 26px;
    background: linear-gradient(74deg, #42c9be -99%, #acc31b);
    @include pc-small{
      top: 580px;
    }
    @include mobile{ 
      display: none;
    }
  }
}
.provide-content {
  position: absolute;
  top: 500px;
  right: 156px;
  text-align: right;
  @include pc-small{
    top: 368px;
    right: 80px;
  }
  @include ipad{
    top: 436px;
    right: 56px;
  }
  @include mobile{ 
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    left: 0;
    margin: auto;
    max-width: 297px;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(25, 25, 25, 0.6));
    padding: 40px 20px 20px;
  }
  .title {
    font-size: 54px;
    margin-bottom: 36px;
    @include pc-small{
      font-size: 48px;
      margin-bottom: 24px;
    }
    @include ipad{
      font-size: 40px;
      margin-bottom: 20px;
    }
    @include mobile{ 
      font-size: 28px;
      margin-bottom: 16px;
    }
  }
  .subtitle {
    font-size: 36px;
    color: #389aec;
    margin-bottom: 96px;
    @include pc-small{
      font-size: 30px;
      margin-bottom: 54px;
    }
    @include ipad{
      font-size: 24px;
      margin-bottom: 32px;
    }
    @include mobile{ 
      font-size: 18px;
      padding-bottom: 16px;
      margin-bottom: 24px;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 60px;
        height: 2px;
        background: linear-gradient(to left, #42c9be 78%, #acc31b);
      }
    }
  }
  .desc {
    font-size: 24px;
    font-weight: 300;
    line-height: 36px;
    color: #e2e2e2;
    @include ipad{
      font-size: 20px;
      line-height: 28px;
    }
    @include ipad{
      font-size: 16px;
      line-height: 24px;
    }
  }
}
</style>
