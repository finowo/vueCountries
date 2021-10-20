<template>
  <div>
    <p>
      Name:
      <router-link
        :to="{ name: 'country', params: { country: country.name.official } }"
        >{{ country.name.common }}</router-link
      >
    </p>
    <p>
      Flag:
      {{ country.flag }}
    </p>
    <p>Capital: {{ country.capital[0] }}</p>
    <hr />
  </div>
</template>


<script>
export default {
  name: "CountryViewer",
  props: {
    country: Object,
  },
};
</script>

<style>
</style>
