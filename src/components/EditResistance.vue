<script>
import { mapActions } from "vuex";
import Multiselect from "@vueform/multiselect";

export default {
  components: { Multiselect },
  name: "EditResistance",
  data() {
    return {
      resistanceDescription: "",
      categoryId: 0,
      isOutsource: false,
      companyId: 0,
      resistanceReasons: [],
      developRight: "",
      employeeCount: "",
      employeeCountId: 0,
      corporationIds: [],
      tradeUnionAuthorityId: 0,
      tradeUnionId: 0,
      employmentTypeIds: [],
      genderId: 0,
      firedEmployeeCountByProtesto: "",
      resistanceResult: "",
      protestoTypeIds: [],
      strikeDuration: "",
      simpleProtestoDescription: "",
      protestoStartDate: "",
      protestoEndDate: "",
      protestoPlaceIds: [],
      locations: [],
      employeeCountInProtesto: "",
      employeeCountInProtestoId: 0,
      interventionTypeIds: [],
      custodyCount: "",
      note: "",
      resistanceNews: [],
      protestos: [],
    };
  },
  computed: {
    selected() {
      return this.$store.getters["resistance/selected"];
    },
    companyList() {
      return this.$store.getters["company/companies"];
    },
    resistanceReasonList() {
      return this.$store.getters["resistanceReason/resistanceReasons"];
    },
    categoryList() {
      return this.$store.getters["category/categories"];
    },
    employeeCountList() {
      return this.$store.getters["parameters/employeeCounts"];
    },
    employmentTypeList() {
      return this.$store.getters["parameters/employmentTypes"];
    },
    genderList() {
      return this.$store.getters["parameters/genders"];
    },

    corporationList() {
      return this.$store.getters["corporation/corporations"];
    },
    tradeUnionAuthorityList() {
      return this.$store.getters["parameters/tradeUnionAuthorities"];
    },
    tradeUnionList() {
      return this.$store.getters["parameters/tradeUnions"];
    },
  },
  methods: {
    ...mapActions("company", ["getCompanies"]),
    ...mapActions("resistanceReason", ["getResistanceReasons"]),
    ...mapActions("category", ["getCategories"]),
    ...mapActions("parameters", ["getEmployeeCounts"]),
    ...mapActions("parameters", ["getEmploymentTypes"]),
    ...mapActions("parameters", ["getGenders"]),

    ...mapActions("corporation", ["getCorporations"]),
    ...mapActions("parameters", ["getTradeUnionAuthorities"]),
    ...mapActions("parameters", ["getTradeUnions"]),
    ...mapActions("resistance", ["getSelected"]),
    submitResistance() {},
  },
  mounted() {},
  created() {
    this.getCompanies();
    this.getResistanceReasons();
    this.getCategories();
    this.getEmploymentTypes();
    this.getEmployeeCounts();
    this.getGenders();
    this.getCorporations();
    this.getTradeUnionAuthorities();
    this.getTradeUnions();
    this.getSelected(this.$route.params.id);
    this.resistanceDescription = this.selected.resistanceDescription;
    this.categoryId = this.selected.categoryId;
    this.isOutsource = this.selected.mainCompanyId !== null;
    this.companyId = this.selected.companyId;
    this.resistanceReasonIds = this.selected.resistanceReasonIds;
    this.developRight = this.selected.developRight;
    this.employeeCount = this.selected.employeeCount;
    this.employeeCountId = this.selected.employeeCountId;
    this.corporationIds = this.selected.corporationIds;
    this.tradeUnionAuthorityId = this.selected.tradeUnionAuthorityId;
    this.tradeUnionId = this.selected.tradeUnionId;
    this.employmentTypeIds = this.selected.employmentTypeIds;
    this.genderId = this.selected.genderId;
    this.firedEmployeeCountByProtesto =
      this.selected.firedEmployeeCountByProtesto;
    this.resistanceResult = this.selected.resistanceResult;

    this.resistanceNews = this.selected.resistanceNews;
    this.protestos = this.selected.protestos;
  },
};
</script>

<template>
  <form id="resistanceForm" class="ui form" @submit.prevent="submitResistance">
    <h4 class="ui dividing header">
      <router-link
        style="position: absolute; top: 0em; right: 1em"
        to="resistances"
      >
        <i class="angle double left icon"></i
      ></router-link>
      Vakalar
    </h4>
    <div class="field">
      <label for="ResistanceDescription">Kısa Açıklama</label>
      <textarea
        type="text"
        id="ResistanceDescription"
        rows="3"
        v-model="resistanceDescription"
      ></textarea>
    </div>
    <div class="field">
      <label for="CategoryId">Vaka Niteliği</label>
      <select v-model="this.categoryId">
        <option
          v-for="category in categoryList"
          :key="category.Id"
          :value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </div>
    <div class="fields">
      <div class="six wide field">
        <label for="IsOutsource">Şirket Taşeron mu?</label>
        <select id="isOutsource" v-model="this.isOutsource">
          <option :value="false">Hayır</option>
          <option :value="true">Evet</option>
        </select>
      </div>
      <div class="ten wide field">
        <label for="CompanyId">Şirket</label>
        <div class="two fields">
          <div class="field">
            <select
              v-model="this.companyId"
              class="ui fluid search selection dropdown"
              onchange="checkExisiting()"
            >
              <option value="0">--Seçiniz--</option>
              <option
                v-for="company in companyList"
                :key="company.Id"
                :value="company.id"
              >
                {{ company.name }}
              </option>
            </select>
          </div>
          <div class="field">
            <button type="button" onclick="openModal(false)" class="ui button">
              Yeni Şirket Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
    <div id="outsource" style="display: none">
      <label for="MainCompanyId">Ana Şirket</label>
      <div class="two fields">
        <div class="field">
          <select
            v-model="this.mainCompanyId"
            class="ui fluid search selection dropdown"
          >
            <option value="0">--Seçiniz--</option>
            <option
              v-for="company in companies"
              :key="company.Id"
              :value="company.id"
            >
              {{ company.name }}
            </option>
          </select>
        </div>
        <div class="field">
          <button type="button" onclick="openModal(true)" class="ui button">
            <i class="chevron circle up icon"></i>Ana Şirket Ekle
          </button>
        </div>
      </div>
    </div>
    <div class="two fields">
      <div class="field">
        <label for="ResistanceReasonIds">Vaka Nedeni</label>
        <Multiselect
          v-model="resistanceReasonIds"
          label="name"
          trackBy="name"
          :options="resistanceReasonList"
        >
          <template v-slot:singleLabel="{ value }">
            <div class="multiselect-single-label">
              <img height="26" style="margin: 0 6px 0 0" :src="value.icon" />
              {{ value.name }}
            </div>
          </template>

          <template v-slot:option="{ option }">
            <img height="22" style="margin: 0 6px 0 0" :src="option.icon" />{{
              option.name
            }}
          </template>
        </Multiselect>
        <!-- <select
          class="ui fluid search dropdown"
          multiple=""
          v-model="resistanceReasonIds"
        >
          <option value="">--Seçiniz--</option>
          <option
            v-for="resistanceReason in resistanceReasonList"
            :key="resistanceReason.id"
            :value="resistanceReason.id"
          >
            {{ resistanceReason.name }}
          </option>
        </select> -->
      </div>
      <div class="field">
        <label for="DevelopRight">Hak Geliştirme/Hak Savunma Özelliği</label>
        <select v-model="developRight">
          <option value="">--Seçiniz--</option>
          <option :value="true">Hak Geliştirme</option>
          <option :value="false">Hak Savunma</option>
        </select>
      </div>
    </div>
    <div class="two fields">
      <div class="field">
        <label for="EmployeeCount">İş Yerindeki İşçi Sayısı (Tam)</label>
        <input type="number" v-model="this.employeeCount" id="EmployeeCount" />
      </div>
      <div class="field">
        <label for="EmployeeCountId">İş Yerindeki İşçi Sayısı</label>
        <select v-model="this.employeeCountId">
          <option value="">--Seçiniz--</option>
          <option
            v-for="employeeCount in employeeCountList"
            :key="employeeCount.Id"
            :value="employeeCount.id"
          >
            {{ employeeCount.name }}
          </option>
        </select>
      </div>
    </div>

    <div class="field">
      <label for="CorporationIds">Kurumsallık</label>
      <select
        v-model="corporationIds"
        class="ui fluid search dropdown"
        multiple=""
      >
        <option value="0">Seçiniz</option>
        <option
          v-for="corporation in corporationList"
          :key="corporation.id"
          :value="corporation.id"
        >
          {{ corporation.name }}
        </option>
      </select>
    </div>
    <div class="field tradeUnionAuthorityGroup" style="display: none">
      <label for="TradeUnionAuthorityId">Sendikanın Yetki Durumu</label>
      <select v-model="tradeUnionAuthorityId">
        <option value="">--Seçiniz--</option>
        <option
          v-for="tradeUnionAuthority in tradeUnionAuthorityList"
          :key="tradeUnionAuthority.Id"
          :value="tradeUnionAuthority.id"
        >
          {{ tradeUnionAuthority.name }}
        </option>
      </select>
    </div>
    <div class="field">
      <label for="TradeUnionId">Tepki Gösterilen Sendika</label>
      <select v-model="tradeUnionId">
        <option value="0">Seçiniz</option>
        <option
          v-for="tradeUnion in tradeUnionList"
          :key="tradeUnion.id"
          :value="tradeUnion.id"
        >
          {{ tradeUnion.name }}
        </option>
      </select>
    </div>
    <div class="two fields">
      <div class="field">
        <label for="EmploymentTypeIds">İstihdam Türü</label>
        <select
          v-model="employmentTypeIds"
          class="ui fluid search dropdown"
          multiple=""
        >
          <option value="">--Seçiniz--</option>
          <option
            v-for="employmentType in employmentTypeList"
            :key="employmentType.id"
            :value="employmentType.id"
          >
            {{ employmentType.name }}
          </option>
        </select>
      </div>
      <div class="field">
        <label for="GenderId">Cinsiyet</label>
        <select v-model="genderId">
          <option value="">--Seçiniz--</option>
          <option
            v-for="gender in genderList"
            :key="gender.id"
            :value="gender.id"
          >
            {{ gender.name }}
          </option>
        </select>
      </div>
    </div>
    <div class="field">
      <label for="FiredEmployeeCountByProtesto"
        >Mücadele Ettiği için İşten Atılan İşçi Sayısı</label
      >
      <input v-model="firedEmployeeCountByProtesto" />
    </div>
    <div class="field">
      <label for="ResistanceResult">Sonuç</label>
      <select v-model="resistanceResult" class="ui fluid search dropdown">
        <option value="0">Bilinmiyor</option>
        <option value="1">Tam Kazanım</option>
        <option value="2">Yarım Kazanım</option>
        <option value="3">Sıfır Kazanım</option>
      </select>
    </div>

    <h3 class="ui dividing header">Eylemler</h3>
    <router-link :to="'../add-protesto'">Ekle</router-link>

    <table class="ui celled table">
      <tbody>
        <tr v-for="protesto in protestos" :key="protesto.id">
          <td>
            <ul>
              <li
                v-for="protestoType in protesto.protestoTypes"
                :key="protestoType"
              >
                {{ protestoType }}
              </li>
            </ul>
          </td>
          <td>{{ protesto.protestoStartDate }}</td>
          <td>
            <router-link :to="'../edit-protesto/' + protesto.protestoId"
              >Görüntüle</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
    <h4 class="ui dividing header">Haberler</h4>
    <div class="ui divided items" id="resistanceNews">
      <div
        v-for="resistanceNew in resistanceNews"
        :key="resistanceNew.id"
        class="item"
        data-id="@Model.ResistanceNews[i].Id"
      >
        <div class="content">
          <a href="#" data-id="@Model.ResistanceNews[i].Id" data-open="0">
            {{ resistanceNew.header }}</a
          >
          <a href="@Model.ResistanceNews[i].Link" target="_blank"
            ><i class="arrow alternate circle right outline icon"></i
          ></a>
          <div class="meta">
            <span class="date">{{ resistanceNew.date }}</span>
            <button
              type="button"
              class="ui icon button red basic mini btnRemove"
              data-id="@Model.ResistanceNews[i].Id"
            >
              <i class="trash icon"></i>
            </button>
          </div>
          <div
            class="description"
            data-id="@Model.ResistanceNews[i].Id"
            style="display: none"
          ></div>
        </div>
      </div>
    </div>
    <button type="submit" class="ui ok green button">KAYDET</button>
    <div class="ui error message"></div>
  </form>
</template>

<style src="@vueform/multiselect/themes/default.css"></style>
