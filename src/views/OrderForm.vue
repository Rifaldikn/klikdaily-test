<template>
  <v-container>
    <v-row justify="center" class="py-10">
      <v-col cols="12" class="title"> Create Order </v-col>
      <v-col cols="12" md="12">
        <v-card elevation="5" width="100%" class="pa-5">
          <v-container>
            <Detail @changedForms="Object.assign(forms, $event)" />

            <ProductsOrder
              @changedItems="Object.assign(forms, $event)"
              v-if="forms.payment && forms.expiredDate"
            />
          </v-container>

          <v-card-actions class="white" style="bottom: 0; position: sticky">
            <v-row>
              <v-col cols="12" md="12" class="d-flex justify-end">
                <v-btn plain color="black" class="mx-5" width="100"
                  >cancel</v-btn
                >
                <v-btn
                  elevation="0"
                  color="success"
                  class="mx-5"
                  width="100"
                  :disabled="isValid"
                  >confirm</v-btn
                >
              </v-col>
            </v-row>
          </v-card-actions>
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
  data() {
    return {
      forms: {
        name: null,
        distribution: null,
        payment: null,
        expiredDate: null,
        notes: null,
        itemStatus: false,
        items: [],
      },
    };
  },
  computed: {
    isValid() {
      return (
        !this.forms.name ||
        !this.forms.distribution ||
        !this.forms.payment ||
        !this.forms.expiredDate ||
        !this.forms.itemStatus
      );
    },
  },
};
</script>

    ProductsOrder