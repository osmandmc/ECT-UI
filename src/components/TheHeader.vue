<template>
  <div class="ui fixed inverted menu">
    <div class="ui container">
      <router-link to="home" class="header item"> </router-link>
      <router-link to="/home" class="item">ECT</router-link>
      <router-link to="/home/resistances" class="item">Vakalar</router-link>
      <router-link to="/news" class="item">Haberler</router-link>
      <router-link to="/user" class="item">Kullanıcılar</router-link>
      <router-link to="company" class="item">Şirketler</router-link>

      <div class="ui simple dropdown item">
        Sistem Değişkenleri
        <i class="dropdown icon"></i>
        <div class="menu">
          <router-link to="corporation" class="item">Şirketler</router-link>
          <router-link to="resistanceReason" class="item"
            >Vaka Nedenleri</router-link
          >
          <router-link to="protestoType" class="item"
            >Eylem Türleri</router-link
          >
          <router-link to="protestoPlace" class="item"
            >Eylem Mekanları</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>
