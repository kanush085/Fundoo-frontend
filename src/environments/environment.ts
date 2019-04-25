// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: "http://localhost:3000/",
  //  baseUrl:"http://35.173.134.196:3000/"
  firebase: {
    apiKey: "AIzaSyB2bAAXhB-A2hPQhSvV4gJ4dtipdVLigec",
    authDomain: "fundoo-notes-57ac2.firebaseapp.com",
    databaseURL: "https://fundoo-notes-57ac2.firebaseio.com",
    projectId: "fundoo-notes-57ac2",
    storageBucket: "fundoo-notes-57ac2.appspot.com",
    messagingSenderId: "274182103612"
  }
};



/**
 * copy and paste your firebase config in firebase console
 * Authentication > Web Setub
 */

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
