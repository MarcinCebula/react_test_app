export default {
  apiUrl: '#api#',
};
const siteConfig = {
  siteName: 'Learn React with Rocket3.io',
  siteIcon: 'ion-rocket',
  footerText: 'Learn React with Rocket3.io ©2017 Created by Marcin K Cebula',
};


// Initialize Firebase
const fireBaseConfig = {
  apiKey: "AIzaSyCvMI-PN-a_fPMwsFwdjxD6TDgDByLeKeA",
  authDomain: "rocket3-8c8ab.firebaseapp.com",
  databaseURL: "https://rocket3-8c8ab.firebaseio.com",
  projectId: "rocket3-8c8ab",
  storageBucket: "",
  messagingSenderId: "380782848180"
};
// firebase.initializeApp(fireBaseConfig);

const aniListConfig = {
  grant_type    :  'client_credentials',
  client_id     :  'marcinkcebula-nny6l',
  client_secret :  'jVAfgqHGh1J9bwjjZxLzR3OLV6Eu'
}

export {
  aniListConfig,
  fireBaseConfig,
  siteConfig
};
