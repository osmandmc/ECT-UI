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
      <select v-model="categoryId">
        <option v-for="category in categoryList" :key="category.Id">
          {{ category.name }}
        </option>
      </select>
    </div>
    <div class="fields">
      <div class="six wide field">
        <label for="IsOutsource">Şirket Taşeron mu?</label>
        <select id="isOutsource" v-model="isOutsource">
          <option value="false">Hayır</option>
          <option value="true">Evet</option>
        </select>
      </div>
      <div class="ten wide field">
        <label for="CompanyId">Şirket</label>
        <div class="two fields">
          <div class="field">
            <select
              v-model="companyId"
              class="ui fluid search selection dropdown"
              onchange="checkExisiting()"
            >
              <option value="0">--Seçiniz--</option>
              <option v-for="company in companyList" :key="company.Id">
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
            v-model="mainCompanyId"
            class="ui fluid search selection dropdown"
          >
            <option value="0">--Seçiniz--</option>
            <option v-for="company in companies" :key="company.Id">
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
        <!-- <sui-dropdown
          fluid
          multiple
          :options="resistanceReasonList"
          selection
          v-model="resistanceReasons"
        /> -->
        <!-- <option value="0">--Seçiniz--</option>
          <option
            v-for="resistanceReason in resistanceReasonList"
            :key="resistanceReason.Id"
          >
            {{ resistanceReason.name }}
          </option> -->
      </div>
      <div class="field">
        <label for="DevelopRight">Hak Geliştirme/Hak Savunma Özelliği</label>
        <select v-model="developRight">
          <option value="">--Seçiniz--</option>
          <option value="true">Hak Geliştirme</option>
          <option value="false">Hak Savunma</option>
        </select>
      </div>
    </div>
    <div class="two fields">
      <div class="field">
        <label for="EmployeeCount">İş Yerindeki İşçi Sayısı (Tam)</label>
        <input type="number" v-model="employeeCount" id="EmployeeCount" />
      </div>
      <div class="field">
        <label for="EmployeeCountId">İş Yerindeki İşçi Sayısı</label>
        <select v-model="employeeCountId">
          <option value="">--Seçiniz--</option>
          <option
            v-for="employeeCount in employeeCountList"
            :key="employeeCount.Id"
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
        <option v-for="corporation in corporationList" :key="corporation.Id">
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
        >
          {{ tradeUnionAuthority.name }}
        </option>
      </select>
    </div>
    <div class="field">
      <label for="TradeUnionId">Tepki Gösterilen Sendika</label>
      <select v-model="tradeUnionId">
        <option value="0">Seçiniz</option>
        <option v-for="tradeUnion in tradeUnionList" :key="tradeUnion.Id">
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
            :key="employmentType.Id"
          >
            {{ employmentType.name }}
          </option>
        </select>
      </div>
      <div class="field">
        <label for="GenderId">Cinsiyet</label>
        <select v-model="genderId">
          <option value="">--Seçiniz--</option>
          <option v-for="gender in genderList" :key="gender.Id">
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
    <protesto-control v-model="protesto" />
    <button type="submit" class="ui ok green button">KAYDET</button>
    <div class="ui error message"></div>
  </form>
</template>

<script>
import { mapActions } from "vuex";
import ProtestoControl from "./ProtestoControl.vue";
export default {
  components: { ProtestoControl },
  name: "AddResistance",
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
      protesto: {
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
      },
      resistanceNewsIds: [],
    };
  },
  computed: {
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
    protestoEmployeeCountList() {
      return this.$store.getters["parameters/protestoEmployeeCounts"];
    },
    interventionTypeList() {
      return this.$store.getters["parameters/interventionTypes"];
    },
    protestoTypeList() {
      return this.$store.getters["protestoType/protestoTypes"];
    },
    protestoPlaceList() {
      return this.$store.getters["protestoPlace/protestoPlaces"];
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
    ...mapActions("parameters", ["getProtestoEmployeeCounts"]),
    ...mapActions("parameters", ["getInterventionTypes"]),
    ...mapActions("protestoType", ["getProtestoTypes"]),
    ...mapActions("protestoPlace", ["getProtestoPlaces"]),
    ...mapActions("corporation", ["getCorporations"]),
    ...mapActions("parameters", ["getTradeUnionAuthorities"]),
    ...mapActions("parameters", ["getTradeUnions"]),

    submitResistance() {
      console.log();
      console.log("submit");
    },
  },
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
  },
};
</script>
