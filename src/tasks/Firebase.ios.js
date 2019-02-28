import firebase from 'react-native-firebase';
import type { Notification, NotificationOpen } from 'react-native-firebase';
import {refreshTokenServer} from "../actions/session.actions";

async function initialSetting(){
  const notificationOpen: NotificationOpen = await firebase.notifications().getInitialNotification();
  if (notificationOpen) {
    const notification: Notification = notificationOpen.notification;
    var seen = [];
    alert(JSON.stringify(notification.data, function(key, val) {
      if (val != null && typeof val == "object") {
        if (seen.indexOf(val) >= 0) {
          return;
        }
        seen.push(val);
      }
      return val;
    }));
  }
}
async function setup(){
  await initialSetting();
  let listeners = [];
  listeners.push(await onNotificationDisplayed());
  listeners.push(await onNotification());
  listeners.push(await onNotificationOpened());
  await showUserToken();
  return listeners;
}

async function onNotificationDisplayed(){
  const notificationDisplayedListener = firebase.notifications().onNotificationDisplayed((notification: Notification) => {
    // Process your notification as required
    // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
    console.log('On Notification Displayed');
  });
  return notificationDisplayedListener;
}

async function onNotification(){
  const notificationListener = firebase.notifications().onNotification((notification: Notification) => {
    // Process your notification as required
    console.log('On Notification');
    notification
        .setSound('default')
        .setNotificationId(notification.notificationId)
        .setTitle(notification.title)
        .setSubtitle(notification.subtitle)
        .setBody(notification.body)
        .setData(notification.data)
        .ios.setBadge(notification.ios.badge);
    firebase.notifications()
        .displayNotification(notification);
  });
  return notificationListener;
}

async function onNotificationOpened(){
  const notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen: NotificationOpen) => {
    // Get the action triggered by the notification being opened
    const action = notificationOpen.action;
    // Get information about the notification that was opened
    const notification: Notification = notificationOpen.notification;
    console.log('ON NOTIFICATION OPENED');
    console.log(notification.data);
    // console.log(JSON.parse(notification.data));
    firebase.notifications().removeDeliveredNotification(notification.notificationId);
  });
  return notificationOpenedListener;
}


function removeListenerFirebase(listeners=[]){
  // listeners.forEach((listener)=>{
  //   listener();
  // });
}

async function showUserToken() {
  const fcmToken = await firebase.messaging().getToken();
  if (fcmToken) {
    // user has a device token
    refreshTokenServer(fcmToken);
  } else {
    // user doesn't have a device token yet
    console.log('User Doesn\'t have a device token yet',fcmToken);
  }
}

export {setup,removeListenerFirebase};



