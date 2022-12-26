<template>
  <button @click="add" type="button" class="ui button">
    Lokasyon Ekle (İl/ilçe)
  </button>
  <div class="fields" v-for="item in locations" :key="item.id">
    <div class="four field">
      <select v-model="item.cityId" class="ui selection dropdown">
        <option value="0">Seçiniz</option>
        <option v-for="city in cities" :key="city.Id">
          {{ city.name }}
        </option>
      </select>
    </div>
    <div class="four field">
      <select v-model="item.districtId" class="ui selection dropdown district">
        <option value="0">Seçiniz</option>
        <option v-for="d in districts" :key="d.Id">
          {{ d.name }}
        </option>
      </select>
    </div>
    <div class="four field">
      <input type="text" v-model="item.districtName" />
    </div>
    <div class="four field">
      <button
        type="button"
        class="ui icon button red basic"
        @click="remove(item.id)"
      >
        <i class="trash icon"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "LocationControl",
  props: {
    protestoLocations: Array,
  },
  data() {
    return {
      locations: this.protestoLocations,
      districts: [],
    };
  },
  computed: {
    cities() {
      return this.$store.getters["city/cities"];
    },
  },
  methods: {
    ...mapActions("city", ["getCities"]),
    add() {
      this.locations.push({
        id: this.locations.length + 1,
        cityId: 0,
        districtId: 0,
        districtName: "",
      });
    },
    remove(id) {
      this.locations = this.locations.filter((s) => s.id !== id);
    },
  },
  created() {
    this.getCities();
  },
};
</script>
