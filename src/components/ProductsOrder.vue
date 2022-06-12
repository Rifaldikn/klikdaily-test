<template>
  <v-row>
    <v-col cols="12" md="4">
      <div class="font-weight-bold body-2">Products</div>
    </v-col>

    <!-- Right Side -->
    <v-col cols="12" md="8" class="d-flex pa-0">
      <v-col cols="12" class="pa-0">
        <v-col cols="12" class="pa-0">
          <v-alert text color="error" type="info">
            Mohon Lengkapi Data Produk untuk Menambahkan Produk Baru
          </v-alert>
        </v-col>
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
                :disabled="items.length == 1 || items.length >= 10"
                :dark="items.length == 1 || items.length >= 10"
                elevation="0"
                fab
                x-small
                color="error"
                @click="deleteItemByIndex(index)"
              >
                <v-icon color="white">mdi-minus</v-icon>
              </v-btn>
            </v-col>
            <!-- Product Item -->
            <v-col cols="12" md="11">
              <v-row>
                <v-col cols="12" md="6" class="pb-0">
                  <div>Product <span class="error--text">*</span></div>
                  <v-autocomplete
                    outlined
                    dense
                    single-line
                    return-object
                    placeholder="Select Product"
                    class="body-2"
                    :items="products"
                    item-text="product_name"
                    v-model="item.item"
                    :rules="[() => !!item.item || 'Please Select Product']"
                    :error-messages="errorMessages"
                  >
                  </v-autocomplete>
                </v-col>
                <v-col cols="12" md="6" class="pb-0">
                  <div>Unit <span class="error--text">*</span></div>
                  <v-autocomplete
                    outlined
                    dense
                    single-line
                    return-object
                    placeholder="Select Unit"
                    class="body-2"
                    v-model="item.unit"
                    item-text="name"
                    :items="item.item != null ? item.item.units : []"
                    @input="item.price = item.unit.price"
                    :rules="[() => !!item.unit || 'Please Select Unit']"
                    :error-messages="errorMessages"
                  >
                  </v-autocomplete>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" md="3" class="py-0">
                  <div>Quantity <span class="error--text">*</span></div>

                  <v-currency-field
                    dense
                    outlined
                    single-line
                    :hideDetail="false"
                    v-model="item.quantity"
                    class="body-2"
                    label="Quantity"
                    :disabled="item.unit == null"
                  ></v-currency-field>
                </v-col>
                <v-col cols="12" md="3" class="py-0">
                  <div>Price <span class="error--text">*</span></div>
                  <v-currency-field
                    dense
                    outlined
                    single-line
                    :disabled="item.unit == null"
                    :hideDetail="false"
                    v-model="item.price"
                    class="body-2"
                    label="Price Product"
                  >
                  </v-currency-field>
                </v-col>
                <v-col cols="12" md="6" class="py-0">
                  <div>Total Price <span class="error--text">*</span></div>
                  <v-currency-field
                    dense
                    single-line
                    :hideDetail="false"
                    v-model="item.totalPrice"
                    class="body-2"
                    :disabled="true"
                    label="Total Price"
                  ></v-currency-field>
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
                    <div class="body-2 font-weight-bold">
                      {{ item.totalPrice | VMask(numberMask) }}
                    </div>
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
            color="#F7AA11"
            dark
            @click="addItem()"
            :disabled="!isItemFilled"
            >New Item <v-icon color="white" right>mdi-plus</v-icon></v-btn
          ></v-col
        >
      </v-col>
    </v-col>
    <v-col cols="12">
      <v-col
        md="5"
        cols="12"
        offset-md="7"
        class="d-flex justify-space-between align-center"
      >
        <div class="font-weight-bold subtitle-1">Total</div>
        <div class="font-weight-bold subtitle-1">
          {{ totalNettPrice ? totalNettPrice : 0 | VMask(numberMask) }}
        </div>
      </v-col>
      <v-divider></v-divider>
    </v-col>
  </v-row>
</template>

<script>
// import useVuelidate from "@vuelidate/core";
// import { required, helpers } from "@vuelidate/validators";

import VCurrencyField from "@/components/Currency_Field";

import createNumberMask from "text-mask-addons/dist/createNumberMask";
const numberMask = createNumberMask({
  prefix: "",
  suffix: "",
  thousandsSeparatorSymbol: ".",
});

export default {
  name: "ProductsOrder_Forms",
  components: { VCurrencyField },
  //   setup() {
  //     return { v$: useVuelidate() };
  //   },
  //   validations() {
  //     return {
  //       items: {
  //         $each: helpers.forEach({
  //           unit: {
  //             required,
  //           },
  //           item: {
  //             required,
  //           },
  //           quantity: {
  //             required,
  //           },
  //           price: {
  //             required,
  //           },
  //         }),
  //       },
  //     };
  //   },
  data() {
    return {
      errorMessages: "",
      numberMask,
      products: [
        {
          product_name: "Morning Dew Milk",
          units: [
            {
              name: "Pcs",
              price: 3000,
            },
            {
              name: "Pak",
              price: 15000,
            },
            {
              name: "Karton",
              price: 60000,
            },
          ],
        },
        {
          product_name: "Le Minerale 600ml",
          units: [
            {
              name: "Pak",
              price: 26000,
            },
            {
              name: "Karton",
              price: 52000,
            },
          ],
        },
        {
          product_name: "Greenfield Full Cream Milk 1 Lt",
          units: [
            {
              name: "Pcs",
              price: 15000,
            },
            {
              name: "Pak",
              price: 30000,
            },
            {
              name: "Karton",
              price: 150000,
            },
          ],
        },
      ],
      items: [
        {
          item: null,
          unit: null,
          quantity: null,
          price: null,
          totalPrice: null,
        },
      ],
      totalNettPrice: 0,
    };
  },
  computed: {
    isItemFilled() {
      return this.items.every(
        (item) =>
          item.item &&
          item.unit &&
          item.quantity &&
          item.price &&
          item.totalPrice
      );
    },
  },
  watch: {
    items: {
      handler(newVal) {
        console.log(newVal);

        let total = 0;
        newVal.forEach((item) => {
          if (item.quantity && item.price) {
            item.totalPrice = (item.quantity || 0) * (item.price || 0);

            total += item.totalPrice;
          }
        });

        this.totalNettPrice = total;
        this.$emit("changedItems", {
          itemStatus: this.isItemFilled,
          items: [...this.items],
        });
      },
      deep: true,
    },
  },
  methods: {
    addItem() {
      this.items.push({
        item: null,
        unit: null,
        quantity: null,
        price: null,
        totalPrice: null,
      });
    },
    deleteItemByIndex(index) {
      this.items.splice(index, 1);
    },
  },
};
</script>