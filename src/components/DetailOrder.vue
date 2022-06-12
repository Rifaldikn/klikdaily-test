<template>
  <!-- Detail Section -->
  <v-row >
    <v-col cols="12" md="4">
      <div class="font-weight-bold body-2">Detail</div>
    </v-col>
    <v-col cols="12" md="8">
      <v-row no-gutters>
        <v-col cols="12" class="py-0">
          <div>Name <span class="error--text">*</span></div>
          <v-text-field outlined dense single-line> </v-text-field>
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col cols="12" md="6" class="py-0">
          <div>Distribution Center <span class="error--text">*</span></div>
          <v-autocomplete outlined dense single-line> </v-autocomplete>
        </v-col>
      </v-row>

      <v-row class="py-0">
        <v-col cols="12" md="6" class="py-0">
          <div>Payment Type <span class="error--text">*</span></div>
          <v-autocomplete outlined dense single-line> </v-autocomplete>
        </v-col>
        <v-col cols="12" md="6" class="py-0">
          <div>Expired Date <span class="error--text">*</span></div>
          <v-autocomplete outlined dense single-line> </v-autocomplete>
        </v-col>
      </v-row>
      <v-row no-gutters>
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
export default {
  name: "DetailOrder_Forms",
  data() {
    return {
      listErrorForms: [],
      forms: {
        name: "",
        distirbution: null,
        payment: null,
        expiredDate: null,
        notes: "",
      },
    };
  },
  methods: {
    getErrorInfo() {
      let status, errorMessage;
      return { status, errorMessage };
    },
  },
};
</script>