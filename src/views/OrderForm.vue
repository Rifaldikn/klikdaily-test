<template>
  <v-container>
    <v-row justify="center" class="py-10">
      <v-col cols="12" class="title"> Create Order </v-col>
      <v-col cols="12" md="12">
        <v-card elevation="5" width="100%" class="pa-5">
          <v-container>
            <Detail />

            <ProductsOrder />
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

import Detail from "@/components/DetailOrder";
import ProductsOrder from "@/components/ProductsOrder";

export default {
  name: "OrderForm_Page",
  components: {
    Detail,
    ProductsOrder,
  },
};
</script>

    ProductsOrder