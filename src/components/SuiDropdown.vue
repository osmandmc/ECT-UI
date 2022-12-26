<template>
  <multiselect
    v-model="selectedItem"
    :multiple="true"
    @change="updateSelection"
  >
    <option v-for="item in items" :key="item.id" :value="item">
      {{ item.name }}
    </option>
  </multiselect>
</template>

<script>
import Multiselect from "vue-multiselect";

export default {
  name: "SuiDropdown",
  components: {
    Multiselect,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedItem: null,
    };
  },
  methods: {
    updateSelection() {
      this.$emit("selectionChanged", this.selectedItem);
    },
  },
};
</script>
