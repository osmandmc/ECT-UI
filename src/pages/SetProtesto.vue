<script>
import ProtestoControl from "@/components/ProtestoControl.vue";
import { mapActions } from "vuex";

export default {
  components: { ProtestoControl },
  methods: {
    ...mapActions("resistance", ["getSelectedProtesto"]),
  },
  computed: {
    selectedProtesto() {
      return this.$store.getters["resistance/selectedProtesto"];
    },
  },
  created() {
    this.getSelectedProtesto(this.$route.params.id);
  },
};
</script>

<template>
  <form class="ui form">
    <div asp-validation-summary="ModelOnly" class="text-danger"></div>
    <a
      href="#"
      onclick="back(@ViewBag.ResistanceId)"
      class="ui labeled icon button"
    >
      <i class="left arrow icon"></i>
    </a>
    <h3 class="ui dividing header">Eylem</h3>
    <protesto-control :protesto="this.selectedProtesto" />
    <button type="submit" class="ui primary button">KAYDET</button>
  </form>
</template>
