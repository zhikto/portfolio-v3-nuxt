<script setup>
const ctx = useRuntimeConfig();
const route = useRoute();
const slug = route.params.slug;

const { data: article } = await useFetch(`/work/${slug}`, {
  baseURL: ctx.baseURL,
  headers: {
    "X-MICROCMS-API-KEY": ctx.apiKey,
  },
});
</script>


<template>
  <div class="base-container">
    <Header />
    <div class="container">
      <div class="detail-container">
        <!--作品画像ギャラリー-->
        <div class="work-image-gallery">
          <div class="image-list">
            <div class="image-container">
              <img :src="article.thumbnail.url" alt="" />
            </div>
          </div>
        </div>
        <!--作品説明-->
        <div class="work-about">
          <h1>{{ article.title }}</h1>
          <h2>{{ article.subTitle }}</h2>
          <p>{{ article.workTag }}</p>
          {{ article.text }}
          <img :src="article.thumbnail.url" alt="" />
          <span class="copyright">©TAITO HASEGAWA</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "assets/style/global.scss";

.detail-container {
  min-width: calc(100vw - 88px);
  height: 100vh;
  overflow-y: hidden;

  padding-left: 2px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2px;

  overflow-x: hidden;

  background-color: $white;

  .work-image-gallery {
    width: 100%;
    overflow-y: scroll;
    background-color: $black;

    .image-list {
      background-color: $white;

      .image-container {
        padding-bottom: 2px;

        img {
          width: 100%;
        }
      }
    }
  }

  .work-image-gallery::-webkit-scrollbar {
    display: none;
  }

  .work-about {
    width: 100%;
    overflow-y: scroll;
    padding: 80px 40px;
    background-color: $black;
    color: $white;

    .copyright {
      display: block;
      width: 100%;
      text-align: right;
      font-size: 12px;
    }
  }

  .work-about::-webkit-scrollbar {
    display: none;
  }
}

@media screen and (max-width: 800px) {

    .detail-container {
        min-width: calc(100vw - 48px);
        height: 100vh;
        overflow-y: scroll;
    
        padding-left: 1px;
    
        display: block;
    
        overflow-x: hidden;
    
        .work-image-gallery {
            width: 100%;
            overflow-y: initial;
    
            .image-list {
                .image-container {
                    padding-bottom: 1px;
                }

                .image-container:not(:last-child) {
                    display: none;
                }
            }
        }
    
        .work-about {
            width: 100%;
            overflow-y: initial;
            padding: 40px 24px;
    
            .copyright {
                display: block;
                width: 100%;
                font-size: 8px;
            }
        }
    }
}
</style>