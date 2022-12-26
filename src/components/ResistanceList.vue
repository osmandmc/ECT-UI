<template>
  <h4 class="ui dividing header">
    <router-link
      style="position: absolute; top: 0em; right: 1em"
      to="add-resistance"
    >
      <i class="plus icon"></i>
    </router-link>
    Vakalar
  </h4>

  <!-- <router-link style="position:absolute; top:0em; right:1em" to="/add"><i class="redo alternate icon"></i></router-link> -->
  <div class="ui attached secondary segment resistanceFilter">
    <div class="ui accordion field">
      <div class="title">
        <i class="icon dropdown"></i>
        Filtreler
      </div>
      <div class="content ui form">
        <div class="field">
          <label class="transition visible">Şirket</label>
          <select
            v-model="companyId"
            class="ui fluid search selection dropdown"
            name="filterCompanyId"
          >
            <option value="">--Seçiniz--</option>
          </select>
        </div>
        <div class="field">
          <label class="transition visible">Ana Şirket</label>
          <select
            v-model="cainCompanyId"
            class="ui fluid search selection dropdown"
            name="filterMainCompanyId"
          >
            <option value="">--Seçiniz--</option>
          </select>
        </div>
        <div class="field">
          <label class="transition visible">Vaka Niteliği</label>
          <select
            v-model="categoryId"
            class="ui fluid selection dropdown"
            name="filterCategoryId"
          >
            <option value="">--Seçiniz--</option>
          </select>
        </div>
        <div class="fields">
          <div class="field">
            <label class="transition visible">Eylem Yıl</label>
            <select
              class="ui fluid selection dropdown"
              name="filterProtestoYearId"
              asp-for="@Model.Filter.YearId"
            >
              <option value="">--Seçiniz--</option>
            </select>
          </div>
          <div class="field">
            <label class="transition visible">Eylem Ay</label>
            <select
              class="ui fluid search selection dropdown"
              name="filterProtestoMonthId"
              asp-for="@Model.Filter.MonthId"
            >
              <option value="">--Seçiniz--</option>
              <option value="1">Ocak</option>
              <option value="2">Şubat</option>
              <option value="3">Mart</option>
              <option value="4">Nisan</option>
              <option value="5">Mayıs</option>
              <option value="6">Haziran</option>
              <option value="7">Temmuz</option>
              <option value="8">Ağustos</option>
              <option value="9">Eylül</option>
              <option value="10">Ekim</option>
              <option value="11">Kasım</option>
              <option value="12">Aralık</option>
            </select>
          </div>
        </div>
        <div class="field">
          <label class="transition visible">Kişisel Notlar</label>
          <select
            class="ui fluid search selection dropdown"
            name="filterPersonalNote"
            asp-for="@Model.Filter.PersonalNote"
          >
            <option value="">--Seçiniz--</option>
            <option value="false">Yok</option>
            <option value="true">Var</option>
          </select>
        </div>
        <div class="field">
          <button id="btnFilter" class="ui button">Filtrele</button>
          <button id="btnClearFilter" class="ui basic button clear">
            Temizle
          </button>
          <button id="btnExport" class="ui green basic button clear">
            Dışa Aktar
          </button>
        </div>
      </div>
    </div>
  </div>
  <table class="ui celled selectable striped table">
    <tbody>
      <tr v-for="resistance in resistances" :key="resistance.id">
        <td>
          <router-link :to="'edit-resistance/' + resistance.id">{{
            resistance.categoryName
          }}</router-link>
        </td>
        <td>{{ resistance.companyName }}</td>
        <td>{{ resistance.startDate }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ResistanceList",
  computed: {
    resistances() {
      return this.$store.getters["resistance/resistances"];
    },
  },
  methods: {
    ...mapActions("resistance", ["getResistances"]),
  },
  created() {
    this.getResistances();
  },
};
</script>
