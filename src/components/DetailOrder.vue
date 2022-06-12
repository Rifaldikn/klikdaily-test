<template>
  <!-- Detail Section -->
  <v-row>
    <v-col cols="12" md="4">
      <div class="font-weight-bold body-2">Detail</div>
    </v-col>
    <v-col cols="12" md="8">
      <v-row no-gutters>
        <v-col cols="12" class="py-0">
          <div>Name <span class="error--text">*</span></div>
          <v-autocomplete
            required
            outlined
            dense
            single-line
            :items="employees"
            item-text="employee_name"
            class="body-2 font-weight-medium"
            placeholder="Distributor Name"
            maxlength="35"
            v-model="forms.name"
            :error="v$.forms.name.$error"
            @blur="v$.forms.name.$touch"
            @change="
              forms.distribution = null;
              forms.payment = null;
              forms.expiredDate = null;
            "
            :error-messages="
              v$.forms.name.$error
                ? 'Name is Required, please fill this field'
                : ''
            "
          >
          </v-autocomplete>
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col cols="12" md="6" class="py-0">
          <div>Distribution Center <span class="error--text">*</span></div>
          <v-autocomplete
            required
            outlined
            dense
            single-line
            :items="forms.name ? distributionList : []"
            class="body-2 font-weight-medium"
            placeholder="Select Distribution Center"
            v-model="forms.distribution"
            :error="v$.forms.distribution.$error"
            @blur="v$.forms.distribution.$touch"
            :error-messages="
              v$.forms.distribution.$error
                ? 'Distribution is Required, please select any'
                : ''
            "
            @change="
              forms.payment = null;
              forms.expiredDate = null;
            "
          >
          </v-autocomplete>
        </v-col>
      </v-row>

      <v-row class="py-0" v-if="forms.distribution && forms.name">
        <v-col cols="12" md="6" class="py-0 pb-1">
          <div>Payment Type <span class="error--text">*</span></div>
          <v-select
            required
            outlined
            dense
            single-line
            :items="paymentTypes"
            class="body-2 font-weight-medium"
            placeholder="Select Payment Type"
            v-model="forms.payment"
            :error="v$.forms.payment.$error"
            @blur="v$.forms.payment.$touch"
            :error-messages="
              v$.forms.payment.$error
                ? 'Type of Payment is Required, please select any'
                : ''
            "
          >
          </v-select>
        </v-col>
        <v-col cols="12" md="6" class="py-0 pb-1">
          <div>Pick Expired Date <span class="error--text">*</span></div>
          <v-menu
            attach=""
            ref="datepicker"
            v-model="datepicker"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                clearable
                class="body-2 font-weight-medium"
                placeholder="Expired Date"
                persistent-hint
                :value="forms.expiredDate | toFormatDate('DD/MM/YYYY')"
                append-icon="mdi-calendar"
                v-bind="attrs"
                v-on="on"
                outlined
                dense
                single-line
                @click:clear="forms.expiredDate = null"
                :error="v$.forms.expiredDate.$error"
                @blur="v$.forms.expiredDate.$touch"
                :error-messages="
                  v$.forms.expiredDate.$error
                    ? 'Expired Date Required, please pick date'
                    : ''
                "
              ></v-text-field>
            </template>
            <v-date-picker
              no-title
              elevation="0"
              color="success"
              v-model="forms.expiredDate"
              @input="datepicker = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row dense v-if="forms.distribution && forms.name">
        <v-col cols="12" md="8">
          <div>Notes</div>
          <v-textarea no-resize outlined rows="4"> </v-textarea>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-divider></v-divider>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";

import { data } from "@/api/fakeApi.js";

import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  name: "DetailOrder_Forms",
  setup() {
    return { v$: useVuelidate() };
  },
  watch: {
    forms: {
      handler(newVal) {
        console.log(newVal);
        this.$emit("changedForms", newVal);
      },
      deep: true,
    },
  },

  data() {
    return {
      employees: [],
      distributionList: ["DC Cikarang", "DC Tangerang"],
      paymentTypes: [
        "Cash H+1",
        "Cash H+3",
        "Cash H+7",
        "Transfer H+1",
        "Transfer H+3",
        "Transfer H+7",
      ],
      datepicker: false,
      forms: {
        name: null,
        distribution: null,
        payment: null,
        expiredDate: null,
        notes: null,
      },
    };
  },
  validations() {
    return {
      forms: {
        name: {
          required,
          autoDirty: true,
        },
        distribution: {
          required,
          autoDirty: true,
        },
        payment: {
          required,
          autoDirty: true,
        },
        expiredDate: {
          required,
          autoDirty: true,
        },
      },
    };
  },
  methods: {
    async getEmployee() {
      const url = "https://dummy.restapiexample.com/api/v1/employees";

      //   const url = "https://dummyapi.io/data/v1/user?limit=50";

      await axios
        .get(url)
        .then(function (response) {
          console.log(response);
          this.employees = [...response.data.data];
        })
        .catch((error) => {
          // Catch Too Many Request Atempt, it possible servers limit request
          console.log(error);

          this.employees = [...data.data];
        });
    },
  },
  async mounted() {
    await this.getEmployee();
  },
};
</script>