<template>
  <main class="main">
    <div class="background">
      <div class="artist">
        <p>
          * 由艺术家 <a href="https://www.pixiv.net/artworks/114649225">Ringein</a> 创作的插画作品
        </p>
      </div>
    </div>

    <div class="logo">
      <p class="iconfont icon-logo" />
      <p>NekoBlog</p>
    </div>

    <div class="shapes">
      <div class="shape_1" />
      <div class="shape_2" />
    </div>

    <div class="auth">
      <n-card class="card">
        <p class="title">立即加入 NekoBlog</p>
        <n-tabs
          class="card-tabs"
          default-value="signin"
          size="large"
          animated
          pane-wrapper-style="margin: 0 -4px"
          pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
        >
          <n-tab-pane name="signin" tab="登录">
            <n-form>
              <n-form-item-row label="用户名">
                <n-input placeholder="在此输入用户名" type="text" />
              </n-form-item-row>
              <n-form-item-row label="密码">
                <n-input placeholder="在此输入密码" type="password" />
              </n-form-item-row>
            </n-form>
            <n-button type="primary" block secondary strong> 登录 </n-button>
          </n-tab-pane>
          <n-tab-pane name="signup" tab="注册">
            <n-form>
              <n-form-item-row label="用户名">
                <n-input placeholder="在此输入用户名" type="text" />
              </n-form-item-row>
              <n-form-item-row label="密码">
                <n-input placeholder="在此输入密码" type="password" />
              </n-form-item-row>
              <n-form-item-row label="重复密码">
                <n-input placeholder="在此再次输入密码" type="password" />
              </n-form-item-row>
            </n-form>
            <n-button type="primary" block secondary strong> 注册 </n-button>
          </n-tab-pane>
        </n-tabs>
      </n-card>
    </div>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped>
.background {
  @apply fixed w-4/5 h-full top-0 right-0  bg-cover -z-20;
  background-image: url('@/assets/background.jpg');
}

.background > .artist {
  @apply absolute right-8 bottom-6;
}

.background > .artist > p {
  @apply text-xl text-white drop-shadow-md;
  font-family: 'Mulish', 'Noto Serif SC', sans-serif;
}

.logo {
  @apply fixed flex top-4 left-4 select-none items-center;
}

.logo p {
  @apply text-white text-2xl px-1 drop-shadow-md;
  font-family: 'Raleway', sans-serif;
}

.shapes {
  @apply fixed top-0 left-0 block -z-10;
}

.shapes > .shape_1 {
  @apply fixed w-full h-full bg-[var(--primaryColor)];
  clip-path: polygon(0% 0%, 45% 0%, 20% 100%, 0% 100%);
}

.shapes > .shape_2 {
  @apply fixed w-full h-full bg-[var(--primaryColor)] opacity-50;
  clip-path: polygon(0% 0%, 25% 0%, 35% 100%, 0% 100%);
}

.auth {
  @apply fixed top-0 left-0 w-1/3 h-full;
}

.auth > .card {
  @apply top-1/2 w-[75%] mx-auto drop-shadow-xl -translate-y-1/2;
}

.auth > .card .title {
  @apply text-xl my-2 text-[var(--primaryColor)] drop-shadow-sm;
  font-family: 'Raleway', 'Noto Sans SC', sans-serif;
}
</style>
