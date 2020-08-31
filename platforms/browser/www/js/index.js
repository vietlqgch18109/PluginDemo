/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        
    }
};
function callAlert(){
    navigator.notificaton.alert(
        'you are the winner!', //message
        alertDismissed, //callback
        'Game Over', //title
        'Done'); //buttonName
}
function alertDismissed(){
    alert('you dismissed the alert!')
}
function callConfirm(){
    navigator.notification.confirm(
        'You are the winner!', //message
        onConfirm, //callback in to invoke the with index of pressed button
        'Game Over', //title
        ['Restart','Exit']); //Button Labels
}
function onConfirm(buttonIndex) {
    alert('You selected button ' + buttonIndex);
}
function callPrompt(){
    function onPrompt(results) {
    alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
}

navigator.notification.prompt(
    'Please enter your name',  // message
    onPrompt,                  // callback to invoke
    'Registration',            // title
    ['Ok','Exit'],             // buttonLabels
    'Jane Doe'                 // defaultText
);
}
function callBeep(){
    navigator.notification.beep(1);
    navigator.vibrate(3000);
}
function takePicture(){
    navigator.camera.getPicture(onSuccess, onFail,{
        quality:50,
        allowEdit:true,
        destinationType:Camera.DestinationType.FILE_URI,
    })
}
function onSuccess(url){
    alert(url);
    //Get a handle to the image container div 
    ic=document.getElementById('imageContainer');
    //URL we received the picter now display inside this div
    ic.innerHTML='<img src="'+url+'"width="50%"/>';
}
function onFail(message){
    alert('Failed because:'+message);
}