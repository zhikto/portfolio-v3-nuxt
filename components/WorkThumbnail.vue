<script setup>
const ctx = useRuntimeConfig();

const { data } = await useFetch("/work", {
  baseURL: ctx.baseURL,
  headers: {
    "X-MICROCMS-API-KEY": ctx.apiKey,
  },
});
</script>

<template>
  <nuxt-link
    v-for="article in data.contents"
    :key="article.id"
    :to="`/${article.id}`"
    class="work-thumbnail"
  >
    <!--作品名・制作年-->
    <div class="work-info">
      <p class="work-title">{{ article.title }}</p>
      <p class="work-date">{{ article.period }}</p>
    </div>
    <!--作品画像-->
    <div class="work-image">
      <img :src="article.thumbnail.url" alt="" />
    </div>
  </nuxt-link>
</template>

<style lang="scss">
@import "assets/style/global.scss";
@import "assets/style/reset.css";

.work-thumbnail {
  position: relative;
  width: 100%;

  .work-info {
    position: absolute;
    bottom: 0;
    left: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    color: $white;

    z-index: 100;

    width: 100%;
    height: 64px;

    padding-left: 24px;
    padding-right: 24px;

    .work-title {
      font-size: 16px;
    }

    .work-date {
      font-size: 16px;
    }

    .work-title,
    .work-date {
      line-height: 100%;
    }
  }

  .work-image {
    position: absolute;
    top: 0;
    left: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: grayscale(100%);
      transition: 0.3s;
    }
  }

  //画像のグラデーション用
  .work-image::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0.5) 100%
    );
  }

  .work-image:hover::after img {
    filter: grayscale(0);
  }

  //画像とグラデーションのサイズ合わせ
  .work-image,
  .work-image::after {
    width: 100%;
    height: 100%;
  }
}

.work-thumbnail:hover {
  .work-image {
    img {
      filter: grayscale(0);
      transition: 0.2s;
    }
  }
}

.work-thumbnail::before {
  content: "";
  display: block;
  padding-top: 66.67%;
}

@media screen and (max-width: 800px) {
  .work-thumbnail {
    .work-info {
      height: 44px;

      padding-left: 16px;
      padding-right: 16px;

      .work-title {
        font-size: 12px;
      }

      .work-date {
        font-size: 12px;
      }
    }
  }
}
</style>