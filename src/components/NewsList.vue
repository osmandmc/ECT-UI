<template>
  <h4 class="ui dividing header">Haberler</h4>
  <div class="ui attached secondary segment">
    <div class="ui small filter form">
      <div class="fields">
        <div class="four wide field">
          <select
            class="ui fluid search selection dropdown"
            id="yearId"
          ></select>
        </div>
        <div class="five wide field">
          <select class="ui fluid search selection dropdown" id="monthId">
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
        <div class="four wide field">
          <button id="btnFilterPeriod" class="ui left labeled icon button">
            <i class="filter icon"></i>Filtrele
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    class="ui divided items"
    id="news"
    style="overflow-y: scroll; height: 700px"
  ></div>
</template>

<script>
export default {
  name: "NewsList",
};
</script>
