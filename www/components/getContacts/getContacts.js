/**
 * Created by AQ on 7/26/2016.
 */


(function()
{
  'use strict'

  angular.module('starter')

    .controller("contactsListController",function()
    {

      var _self = this;


      function onSuccess(contacts) {
        //alert('Found ' + contacts.length + ' contacts.');
        console.log("Success : ",contacts);
      };

      function onError(contactError) {
        //alert('onError!');
        console.log("Error : ",contactError);
      };


      // find all contacts with 'Bob' in any name field
      /*var options      = new ContactFindOptions();
      options.filter   = "Bob";
      options.multiple = true;
      options.desiredFields = [navigator.contacts.fieldType.id];
      options.hasPhoneNumber = true;*/


      _self.getContactsList = function()
      {
        console.log("function call ");
        /*var  options ;
        options.multiple = true;*/
        navigator.contacts.find([navigator.contacts.fieldType.phoneNumbers], onSuccess, onError);

      };

      _self.saveUser = function()
      {
        var myContact = navigator.contacts.create({"displayName": "Test User"});
      };

    });

})();
