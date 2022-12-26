<script>
import { mapActions } from "vuex";
import LocationControl from "./LocationControl.vue";

export default {
  components: { LocationControl },
  name: "ProtestoControl",
  props: {
    protesto: Object,
  },
  data() {
    return {
      protestoTypeIds: this.protesto?.protestoTypeIds,
      strikeDuration: this.protesto?.strikeDuration,
      simpleProtestoDescription: this.protesto?.simpleProtestoDescription,
      protestoStartDate: this.protesto?.protestoStartDate,
      protestoEndDate: this.protesto?.protestoEndDate,
      protestoPlaceIds: this.protesto?.protestoPlaceIds,
      locations: this.protesto?.locations,
      employeeCountInProtesto: this.protesto?.employeeCountInProtesto,
      employeeCountInProtestoId: this.protesto?.employeeCountInProtestoId,
      interventionTypeIds: this.protesto?.interventionTypeIds,
      custodyCount: this.protesto?.custodyCount,
      note: this.protesto?.note,
      resistanceNewsIds: this.protesto?.resistanceNewsIds,
    };
  },
  computed: {
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
  },
  methods: {
    ...mapActions("parameters", ["getProtestoEmployeeCounts"]),
    ...mapActions("parameters", ["getInterventionTypes"]),
    ...mapActions("protestoType", ["getProtestoTypes"]),
    ...mapActions("protestoPlace", ["getProtestoPlaces"]),
  },
  created() {
    console.log(this.protesto);
    this.getProtestoEmployeeCounts();
    this.getInterventionTypes();
    this.getProtestoTypes();
    this.getProtestoPlaces();
  },
};
</script>

<template>
  <h3 class="ui dividing header">Eylem</h3>
  <div class="field">
    <label for="ProtestoTypeIds">Eylemin Türü</label>
    <select
      v-model="protestoTypeIds"
      class="ui fluid search dropdown"
      multiple="multiple"
    >
      <option value="">--Seçiniz--</option>
      <option
        v-for="protestoType in protestoTypeList"
        :key="protestoType.Id"
        :value="protestoType.id"
      >
        {{ protestoType.name }}
      </option>
    </select>
  </div>
  <div class="field" style="display: none">
    <label for="StrikeDuration">Eylemin Süresi</label>
    <input v-model="strikeDuration" />
  </div>
  <div class="field" style="display: none">
    <label for="SimpleProtestoDescription"
      >İş yerinde Basit Eylem Açıklama</label
    >
    <input v-model="simpleProtestoDescription" type="text" />
  </div>
  <div class="two fields">
    <div class="field">
      <label for="ProtestoStartDate">Eylemin Başlangıç Tarihi</label>
      <input v-model="protestoStartDate" type="text" />
    </div>
    <div class="field">
      <label for="ProtestoEndDate">Eylemin Bitiş Tarihi</label>
      <input v-model="protestoEndDate" type="text" />
    </div>
  </div>
  <div class="field">
    <label for="ProtestoPlaceIds">Eylemin Mekanı</label>
    <select
      v-model="protestoPlaceIds"
      class="ui fluid search dropdown"
      multiple="multiple"
    >
      <option value="">--Seçiniz--</option>
      <option
        v-for="protestoPlace in protestoPlaceList"
        :key="protestoPlace.Id"
        :value="protestoPlace.id"
      >
        {{ protestoPlace.name }}
      </option>
    </select>
  </div>
  <div class="field">
    <location-control :protestoLocations="locations"></location-control>
  </div>
  <div class="two fields">
    <div class="field">
      <label for="EmployeeCountInProtesto">Eylemdeki İşçi Sayısı (Tam)</label>
      <input v-model="employeeCountInProtesto" />
    </div>
    <div class="field">
      <label for="EmployeeCountInProtestoId">Eylemdeki İşçi Sayısı</label>
      <select v-model="employeeCountInProtestoId">
        <option value="">--Seçiniz--</option>
        <option
          v-for="employeeCountInProtesto in protestoEmployeeCountList"
          :key="employeeCountInProtesto.Id"
          :value="employeeCountInProtesto.id"
        >
          {{ employeeCountInProtesto.name }}
        </option>
      </select>
    </div>
  </div>

  <div class="field">
    <label for="InterventionTypeId">Müdahale Tipi</label>
    <select
      v-model="interventionTypeIds"
      class="ui fluid search dropdown"
      multiple=""
    >
      <option value="">--Seçiniz--</option>
      <option
        v-for="interventionType in interventionTypeList"
        :key="interventionType.Id"
        :value="interventionType.id"
      >
        {{ interventionType.name }}
      </option>
    </select>
  </div>
  <div class="field" style="display: none">
    <label for="CustodyCount">Gözaltı Sayısı</label>
    <input type="text" v-model="custodyCount" id="CustodyCount" />
  </div>
  <div class="field">
    <label for="Note">Kontrol Kişisine Notlar</label>
    <textarea type="text" v-model="note" id="Note" rows="2"></textarea>
  </div>
</template>
