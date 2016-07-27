/**
 * Created by AQ on 7/26/2016.
 */


(function()
{
  'use strict'

  angular.module('starter')

    .controller("smsListController",function($cordovaSms)
    {

      var _self = this;

      var options = {
        replaceLineBreaks: false, // true to replace \n by a new line, false by default
        android: {
          //intent: 'INTENT'  // send SMS with the native android SMS messaging
          intent: '' // send SMS without open any other app
        }
      };

      _self.sendMsg = function()
      {
        //console.log("User Data : ",_self.user);
        $cordovaSms
          .send('+923453320212', 'helo Ali', options).then(function(data) {

            console.log('Data : ',data);

          }, function(error) {

            console.log('Error : ',error);

          });
      };

    });


})();
