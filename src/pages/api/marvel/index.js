import axios from "axios";
const CryptoJS = require("crypto-js");
const privateKey = process.env.NEXT_PUBLIC_PRIVATEKEY;
const apikey = process.env.NEXT_PUBLIC_PUBLICKEY;
const ts = new Date().getTime();
const hash = CryptoJS.MD5(ts + privateKey + apikey).toString();

export async function getStaticProps() {
  return {
    props: {},
  };
}

const api = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/",
  params: {
    ts,
    apikey,
    hash,
  },
});

export default api;
