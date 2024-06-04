import axios from 'axios';
// import { Preferences } from "@capacitor/preferences";

const ip = 'https://indodax.com/'

const instance = axios.create({
  baseURL: ip,
});

instance.interceptors.request.use(async (req) => {

  // const token = await Preferences.get({ key: "token" });
  // let token = await Preferences.get({ key: "token" });
  // let token = store.state.user.token;
  // console.log(token);
  // req.headers.API = `LFZOUA6A-SLU7OHGV-NARNROL9-5FONH5TI-G229DPD4`;
  // req.headers.Sign = ``;
  return req;
});

export default instance;
