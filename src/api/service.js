import axios from "axios";

const service = axios.create({
  baseURL: process.env.VUE_APP_MAIN_API + "api/v1/",
  // baseURL: "http://10.1.86.99:8081/api/v1/",
  timeout: 3000000,
  headers: {
    // Authorization: `Bearer ${token?.auth?.token || ""}`,
    Authorization: {
      toString() {
        const token = JSON.parse(localStorage.getItem("userData")) || "";

        return `Bearer ${token?.auth?.token || ""}`;
      },
    },
    IdUnitOwner: idUnit,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    Accept: "*/*",
  },
});

export default service;
