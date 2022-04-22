<script setup>
const ctx = useRuntimeConfig();

const { data } = await useFetch("/profile", {
  baseURL: ctx.baseURL,
  headers: {
    "X-MICROCMS-API-KEY": ctx.apiKey,
  },
});
</script>

<template>
  <div class="profile-container">
    <div class="profile-image">
      <img :src="data.profileImage.url" alt="" />
    </div>
    <div class="profile">
      <section>
        <h1>{{ data.name }}</h1>
        <h2>{{ data.nameEn }}</h2>
      </section>

      <section>
        {{ data.career }}
      </section>

      <section>
        <p>{{ data.field }}</p>
      </section>

      <section>
        <ul>
          <li>
            <p>TWITTER</p>
            <a :href="data.twitterLink">{{ data.twitter }}</a>
          </li>
          <li>
            <p>INSTAGRAM</p>
            <a :href="data.instagramLink">{{ data.instagram }}</a>
          </li>
          <li>
            <p>CONTACT</p>
            <a :href="data.contact">{{ data.contact }}</a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<style lang="scss">
@import "assets/style/global.scss";
.profile-container {
  display: none;
  align-items: center;
  margin-left: 88px;
  width: auto;
  height: 100vh;

  .profile-image {
    width: 50%;

    img {
      width: 100%;
      filter: grayscale(100%);
    }
  }

  .profile {
    padding: 0 40px 0 40px;
    width: 50%;
    color: $white;

    section {
      margin-bottom: 40px;
      line-height: 100%;

      h1 {
        font-size: 20px;
        margin-bottom: 12px;
      }

      h2 {
        font-size: 14px;
      }

      span {
        font-size: 12px;
        margin-bottom: 4px;
      }

      p {
        font-size: 14px;
      }

      ul {
        list-style: none;
        padding: 0;

        li {
          width: 100%;
          height: 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;

          a {
            font-size: 14px;
            color: $accent;
            text-decoration: none;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 800px) {
  .profile-container {
    padding-top: 80px;
    margin-left: 48px;

    .profile-image {
      width: 100%;
    }

    .profile {
      padding: 72px 12px 0 12px;
      width: 100%;

      section {
        margin-bottom: 32px;

        h1 {
          font-size: 14px;
          margin-bottom: 8px;
        }

        h2 {
          font-size: 10px;
        }

        span {
          font-size: 8px;
          margin-bottom: 4px;
        }

        p {
          font-size: 10px;
        }

        ul {
          li {
            height: 32px;

            a {
              font-size: 10px;
            }
          }
        }
      }
    }
  }
}
</style>