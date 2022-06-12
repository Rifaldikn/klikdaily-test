<template>
  <v-row>
    <v-col cols="12" md="4">
      <div class="font-weight-bold body-2">Products</div>
    </v-col>

    <!-- Right Side -->
    <v-col cols="12" md="8" class="d-flex pa-0">
      <v-col cols="12">
        <v-card
          outlined
          rounded="lg"
          v-for="(item, index) in items"
          :key="index"
          flat
          width="100%"
          class="my-5 pa-3"
        >
          <v-row no-gutters>
            <v-col cols="12" md="auto" class="mt-6 justify-end d-flex pr-5">
              <v-btn
                :disabled="index == items.length - 1"
                :dark="index == items.length - 1"
                elevation="0"
                fab
                x-small
                color="error"
              >
                <v-icon color="white">mdi-minus</v-icon>
              </v-btn>
            </v-col>
            <!-- Product Item -->
            <v-col cols="12" md="11">
              <v-row>
                <v-col cols="12" md="6" class="pb-0">
                  <div>Product <span class="error--text">*</span></div>
                  <v-autocomplete outlined dense single-line> </v-autocomplete>
                </v-col>
                <v-col cols="12" md="6" class="pb-0">
                  <div>Unit <span class="error--text">*</span></div>
                  <v-autocomplete outlined dense single-line> </v-autocomplete>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" md="3" class="py-0">
                  <div>Quantity <span class="error--text">*</span></div>
                  <v-text-field outlined dense single-line> </v-text-field>
                </v-col>
                <v-col cols="12" md="3" class="py-0">
                  <div>Price <span class="error--text">*</span></div>
                  <v-text-field outlined dense single-line> </v-text-field>
                </v-col>
                <v-col cols="12" md="6" class="py-0">
                  <div>Total Price <span class="error--text">*</span></div>
                  <v-text-field disabled filled outlined dense single-line>
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col cols="12" md="6" offset-md="6">
                  <v-col cols="12">
                    <v-divider></v-divider>
                  </v-col>
                  <v-col cols="12" class="d-flex">
                    <div class="body-2 font-weight-bold">Total Nett Price</div>
                    <v-spacer></v-spacer>
                    <div class="body-2 font-weight-bold">300.00</div>
                  </v-col>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
        <v-col
          ><v-btn
            :block="$vuetify.breakpoint.smAndDown"
            width="175"
            height="40"
            elevation="0"
            dark
            color="#F7AA11"
            >New Item <v-icon right>mdi-plus</v-icon></v-btn
          ></v-col
        >
      </v-col>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ProductsOrder_Forms",
  data() {
    return {
      items: [
        {
          item: null,
          unit: null,
          quantity: null,
          price: null,
          totalPrice: null,
        },
      ],
    };
  },
};
</script>