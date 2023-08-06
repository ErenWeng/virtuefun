<template>
  <div class="app-contact">
    <div class="contact-title">
      <div class="title">立即聯繫</div>
      <div class="subtitle">CONTACT US</div>
      <div class="desc">
        <p>我們擁有經驗豐富且經過認證的工程師和設計師，</p>
        <p>隨時可以幫助您。</p>
      </div>
    </div>
    <ul class="contact-info">
      <li v-for="item in contactData" :key="item.icon" class="contact-item">
        <img :src="require(`@/assets/img/contact-${item.icon}.png`)" />
        <div class="contact-desc">
          <p v-for="p in item.desc" :key="p">{{ p }}</p>
        </div>
      </li>
    </ul>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7848051314445!2d121.56278801544701!3d25.041376044148812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb95af3b829%3A0x1f9747fe94692295!2zMTEw5Y-w5YyX5biC5L-h576p5Y2A5b-g5a2d5p2x6Lev5LqU5q61MeS5izLomZ8!5e0!3m2!1szh-TW!2stw!4v1632811575777!5m2!1szh-TW!2stw" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" class="google-map"></iframe>
  </div>
</template>

<script>
export default {
  name: 'AppContact',
  data() {
    return {
      contactData: [
        {
          icon: 'email',
          desc: ['contact@virtuefun.com']
        },
        {
          icon: 'phone',
          desc: ['02-0000-0000']
        },
        {
          icon: 'address',
          desc: ['台北市信義區忠孝東路五段1之2號11樓','11F., NO. 1-2, SEC. 5, ZHONGXIAO E. RD., XINYI DIST., TAIPEI CITY 11071, TAIWAN (R.O.C.)']
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.app-contact {
  position: relative;
  padding: 126px 0 84px;
  background: linear-gradient(68deg, #383837 1%, #000 98%);
  color: #fff;
  display: grid;
  grid-template-areas: 'title map' 'info map';
  grid-template-columns: minmax(580px, 600px) 600px;
  justify-content: center;
  column-gap: 8px;
  @include pc-small{
    padding: 112px 64px 84px;
    grid-template-areas: 'title title' 'info map';
    grid-template-columns: minmax(460px, 1fr) 1fr;
  }
  @include ipad{
    padding: 80px 64px 64px;
    grid-template-areas: 'title title' 'info map';
    grid-template-columns: minmax(360px, 1fr) auto;
  }
  @include mobile{
    font-size: center;
    padding: 40px 32px;
    grid-template-areas: 'title' 'info' 'map';
    grid-template-columns: 1fr;
  }
  &::before {
    content: '';
    position: absolute;
    top: 90px;
    right: 0;
    width: 42px;
    height: 26px;
    background: linear-gradient(to left, #42c9be -99%, #acc31b);
    @include mobile{
      display: none;
    }
  }
}
.contact-title {
  grid-area: title;
  @include pc-small{
    justify-self: center;
    text-align: center;
  }
  .title {
    font-size: 70px;
    margin-top: 16px;
    @include pc-small{
      font-size: 62px;
    }
    @include ipad{
      font-size: 48px;
    }
    @include mobile{
      font-size: 24px;
      margin-top: 0;
    }
  }
  .subtitle {
    position: relative;
    display: inline-block;
    font-family: NotoSansTC;
    font-size: 50px;
    background: linear-gradient(79deg, #42c9be 0%, #acc31b 99%);
    background: -webkit-linear-gradient(79deg, #42c9be 0%, #acc31b 99%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    padding: 32px 0;
    @include pc-small{
      font-size: 40px;
      padding: 24px 0;
    }
    @include ipad{
      font-size: 32px;
      padding: 20px 0;
    }
    @include mobile{
      font-size: 16px;
      padding: 12px 0;
      margin-bottom: 8px;
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        margin: auto;
        width: 260px;
        height: 1px;
        background: linear-gradient(to right, #42c9be, #acc31b);
      }
    }
  }
  .desc {
    font-size: 24px;
    font-weight: 300;
    line-height: 36px;
    margin-bottom: 128px;
    @include pc-small{
      margin-bottom: 96px;
      & > * {
        display: inline-block;
      }
    }
    @include ipad{
      font-size: 20px;
      margin-bottom: 64px;
    }
    @include mobile{
      font-size: 12px;
      line-height: 18px;
      margin-bottom: 32px;
    }
  }
}
.contact-info {
  grid-area: info;
  max-width: 560px;
  // control adress
  @include pc-small{
    max-width: 540px;
  }
  @include ipad{
    max-width: 460px;
  }
  @include mobile{
    max-width: 300px;
    justify-self: center;
    margin-bottom: 24px;
  }
  .contact-item {
    display: flex;
    margin-bottom: 36px;
    @include mobile{
      display: block;
      text-align: center;
      margin-bottom: 20px;
    }
    img {
      align-self: start;
      margin-right: 20px;
      @include pc-small{
        width: 32px;
        height: 32px;
        margin-right: 16px;
      }
      @include mobile{
        margin-right: 0;
        width: 20px;
        height: 20px;
      }
    }
    .contact-desc {
      font-size: 24px;
      font-weight: 300;
      @include ipad{
        font-size: 18px;
      }
      @include mobile{
        font-size: 12px;
      }
      p {
        display: grid;
        align-items: center;
        min-height: 40px;
        @include ipad{
          min-height: 32px;
        }
        @include mobile{
          min-height: 24px;
          // en address space
          line-height: 16px;
        }
        // en address space
        &:not(:first-of-type) {
          margin-top: 24px;
          @include mobile{
            margin-top: 0;
          }
        }
      }
    }
  }
}
.google-map {
  grid-area: map;
  justify-self: end;
  max-width: 679px;
  height: 730px; 
  @include pc-small{
    max-width: 513px;
    height: 376px; 
  }
  @include ipad{
    max-width: 365px;
    height: 290px; 
  }
  @include mobile{
    justify-self: center;
    max-width: 309px;
    height: 274px;
  }
}
</style>
