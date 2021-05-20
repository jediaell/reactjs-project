import Firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAVBBNeT5W6DJVbUeZwukBveLdfMhuCvRs',
  authDomain: 'templates-react.firebaseapp.com',
  databaseURL: 'https://templates-react.firebaseio.com',
  projectId: 'templates-react',
  storageBucket: 'templates-react.appspot.com',
  messagingSenderId: '933925321535',
  appId: '1:933925321535:web:90d62f8d2273c1df6d718a',
  measurementId: 'G-BB9YDR4FB4',
};

Firebase.initializeApp(firebaseConfig);
const analytics = Firebase.analytics();

if (process.env.NODE_ENV === 'PROD') {
  analytics.setAnalyticsCollectionEnabled(true);
} else {
  analytics.setAnalyticsCollectionEnabled(false);
}

export default class Analytics {
  static logEvent(
    eventName: string,
    eventParams?: Firebase.analytics.EventParams,
    option?: Firebase.analytics.AnalyticsCallOptions,
  ): void {
    analytics.logEvent(eventName, eventParams, option);
  }
}
