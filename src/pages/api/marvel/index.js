import axios from "axios";
const CryptoJS = require("crypto-js");
const privateKey = process.env.NEXT_PUBLIC_PRIVATEKEY;
const publicKey = process.env.NEXT_PUBLIC_PUBLICKEY;
const time = new Date().getTime();
const hash = CryptoJS.MD5(time + privateKey + publicKey).toString();

export async function getStaticProps() {
  return {
    props: {},
  };
}

const api = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/",
  params: {
    ts: time,
    apikey: publicKey,
    hash,
  },
});

export default api;
