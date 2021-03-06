// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    console.log("Contacts in :",navigator.contacts);

  });
})


  .config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider)
  {

    // $stateProvider.state('main',{
    //     url:'/main',
    //     templateUrl: 'components/main/main.html',
    //     controller: 'mainController',
    //     controllerAs: 'main'
    //   })

    $stateProvider.state('home',{
      url:'/home',
          templateUrl: 'components/home/home.html',
          controller: 'homeController',
          controllerAs: 'home'
    })


    //     .state('home',{
    //   url:'/home',
    //   views: {
    //     'groups': {
    //       templateUrl: 'components/groups/groups.html',
    //       controller: 'groupsController',
    //       controllerAs: 'groups'
    //     },
    //     'contacts': {
    //       templateUrl: 'components/contacts/contacts.html',
    //       controller: 'contactsController',
    //       controllerAs: 'contacts'
    //     }
    //   }
    // })

      .state('groupdetails',{
        url:'/groupdetails',
        templateUrl: 'components/group_details/group_details.html',
        controller: 'groupDetailsController',
        controllerAs: 'groupDetails'
      })



    $ionicConfigProvider.tabs.position('top');


    /*$stateProvider.state('contactslist',{
      url:'/contactslist',
      templateUrl: 'components/getContacts/getContacts.html',
      controller: 'contactsListController',
      controllerAs: 'contactsList'
    })

    .state('sendsms',{
    url:'/sendsms',
    templateUrl: 'components/sendSms/sendSms.html',
    controller: 'smsListController',
    controllerAs: 'sms'
    })

      .state('main',{
        url:'/main',
        abstract:true,
        templateUrl: 'components/main/main.html'
      })

      .state('dash',{
        url:"/dash",
        templateUrl:'components/main/main.html',
        Abstract:true
      })






    .state('groups',{
    url:'/groups',
    templateUrl: 'components/groups/groups.html',
    controller: 'groupsController',
    controllerAs: 'groups'
    })

      .state('contacts',{
        url:'/contacts',
        templateUrl: 'components/contacts/contacts.html',
        controller: 'contactsController',
        controllerAs: 'contacts'
      })*/


    $urlRouterProvider.otherwise('home');

  });
