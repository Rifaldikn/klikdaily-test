<template>
  <v-text-field
    dense
    :maxlength="maxlength"
    :prefix="prefix"
    :outlined="outlined"
    single-line
    :hide-details="hideDetail"
    ref="input"
    :placeholder="label"
    :solo="solo"
    :flat="flat"
    :suffix="suffix"
    full-width="full-width"
    :disabled="disabled"
    v-currency="options"
    :value="formattedValue"
    :clearable="clearable"
    :append-icon="appendIcon"
    :filled="disabled"
    @change="onChange"
    @input="onInput"
    @keypress="isLetter($event)"
    @click:clear="$emit('clearData')"
    :rules="rule"
    :error-messages="errorMessages"
  />
</template>

<script>
export default {
  name: "VCurrencyField",
  props: {
    rule: {
      type: [Array, Object],
    },
    errorMessages: {
      type: String,
      default: "",
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    appendIcon: {
      type: String,
    },
    maxlength: {
      type: Number,
      default: 25,
    },
    suffix: String,
    prefix: String,
    hideDetail: {
      type: Boolean,
      default: true,
    },
    outlined: {
      type: Boolean,
      default: true,
    },
    solo: {
      type: Boolean,
      default: false,
    },
    flat: {
      type: Boolean,
      default: false,
    },
    "full-width": {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [Number, String],
      default: null,
    },
    options: {
      type: Object,
      default: () => {
        return {
          currency: null,
          distractionFree: false,
          "allow-negative": false,
          "auto-decimal-mode": false,
          precision: { min: 0, max: 6 },
        };
      },
    },
  },
  data() {
    return {
      formattedValue: null,
    };
  },
  watch: {
    value(value) {
      this.setValue(value);
    },
  },
  mounted() {
    this.setValue(this.value);
  },
  methods: {
    isLetter(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[A-Za-z]+$/.test(char)) e.preventDefault();
      else return true;
    },
    setValue(value) {
      this.$ci.setValue(this.$refs.input, value);
    },
    onInput(value) {
      this.$emit("input", this.$ci.getValue(this.$refs.input));
      this.formattedValue = value;
    },
    onChange(value) {
      this.$emit("change", this.$ci.getValue(this.$refs.input));
      this.formattedValue = value;
    },
  },
};
</script>
