<template>
  <v-app app>
    <v-app-bar app outlined hide-on-scroll>
      <v-row align="center" justify="start">
        <v-col cols="auto">
          <v-img
            contain
            height="150"
            width="100"
            class="mx-5"
            aspect-ratio="auto"
            :src="require(`@/assets/Klikdaily_Logo.png`)"
          ></v-img
        ></v-col>
        <v-col cols="auto">
          <div class="title">Assesment Test</div>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-main app>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
body {
  background-color: #fafafa;
}
</style>
