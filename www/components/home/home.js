

(function()
{
  'use strict'

  angular.module('starter')

    .controller("homeController",function($cordovaSQLite,$ionicTabsDelegate,$scope,$state,$ionicModal,$cordovaImagePicker,$cordovaFile)
    {
        //console.log("Controller Initilize");
        //var db = $cordovaSQLite.openDB({ name: "sms_marketing" ,location: 'default'});

         var _self = this;
         _self.groupFetchLoader = true;
         _self.contactsFetchLoader = true;
         _self.newGroupCreateLoader = false;
         _self.allGroupsList = [];
         _self.allContactsList = [];
         _self.onHold = false;
         _self.selectedItemClass = "selectedItem";
         _self.noClass = "noooo";
         _self.selectedItem ={};
         _self.selected_length = 0;
         _self.default_contact_img = "./img/default_avtar.png";
         _self.group_default_img = "./img/default_group.png";


         var dummy_contacts = [
           {name:"Muhammad Mateen",mobileNo:'32220000000',img:''},
           {name:"Muhammad Ali",mobileNo:'32211111111',img:''},
           {name:"Muhammad Taimoor",mobileNo:'32222222222',img:''},
           {name:"Muhammad Hassan",mobileNo:'32233333333',img:''},
           {name:"Muhammad Sami",mobileNo:'32224444444',img:''}
         ];


         var second_dummy_contacts = [
           {name:"Muhammad Mateen",mobileNo:'32220000000',img:''},
           {name:"Muhammad Ali",mobileNo:'32211111111',img:''},
           {name:"Muhammad Taimoor",mobileNo:'32222222222',img:''},
           {name:"Muhammad Hassan",mobileNo:'32233333333',img:''},
           {name:"Muhammad Sami",mobileNo:'32224444444',img:''},
           {name:"Muhammad Taimoor",mobileNo:'3222555555',img:''},
           {name:"Muhammad Hassan",mobileNo:'3224666666',img:''},
           {name:"Muhammad Sami",mobileNo:'32227777777',img:''}
         ];

         //For develpoment purpose use checking its remove (OKOKOKOKOKOK)
         _self.allContactsList = dummy_contacts;  


         var createGroup = function(){
        var query = "CREATE TABLE IF NOT EXISTS groups (group_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, group_name TEXT NOT NULL, group_image BLOB)";
          $cordovaSQLite.execute(db, query).then(function(res) {
            console.log("Groups Table Created : ",res);
          }, function (err) {
            console.error("Groups table not created Error : ",err);
          });
        };
        //createGroup();        //create table if not exist 

          

          //Ftech Group List
         _self.fetchGroupList = function(){
        var groupList_query = "SELECT * FROM groups;";
        $cordovaSQLite.execute(db, groupList_query).then(function(res) {
          console.log("Data of groups : ",res);
          _self.allGroupsList = res;
          _self.groupFetchLoader = false;
        
          // var alldata = res.rows.item;
          // if(res.rows.length)
          // {
          //   console.log("ID Is : "+res.rows.item(0).group_id+" and group Name : "+res.rows.item(1).group_name);
          //   console.log("ID Is : "+res.rows.item(1).group_id+" and group Name : "+res.rows.item(1).group_name);
          //   console.log("ID Is : "+res.rows.item(2).group_id+" and group Name : "+res.rows.item(2).group_name);
          //   console.log(alldata);
          // }
          // else
          // {
          //   console.log("No record found");
          // }

        }, function (err) {
          console.error("Group fetching Error : ",err);
          _self.groupFetchLoader = false;
        });
      };
      //_self.fetchGroupList();       //fetching fresh groups from database


        var dpPic1;
        var dpPic2;
        var finalPic;

          _self.bb = {};
          //Create New Group
      _self.createNewGroup = function(groupname){

          _self.bb.name = groupname;
          _self.allGroupsList.push(_self.bb);
          _self.group = "";
          _self.modal.hide();




        // _self.newGroupCreateLoader = true;
        // $cordovaFile.readAsArrayBuffer(dpPic1, dpPic2)
        // .then(function (success) {
        //    blob = new Blob([success], {type: 'image/jpeg'});
        //    console.log("Dp pic 1",dpPic1);
        //    console.log("Dp pic 2",dpPic2);

        //   var query = "INSERT INTO groups (group_name,group_image) VALUES (?,?)";
        //   $cordovaSQLite.execute(db, query,[groupname,blob]).then(function(res) {
        //     console.log("New group Created : ",res);
        //     _self.newGroupCreateLoader = false;
        //     //_self.allGroupsList.push();
        //     _self.group = "";
        //     //_self.modal.hide();

        //   }, function (err) {
        //     console.error("Group Not created : ",err);
        //     _self.newGroupCreateLoader = false;
        //     _self.group = "";
        //     //_self.modal.hide();
        //   })

        // }, function (error) {
        //     //_self.modal.hide();
        //     console.error("Error in blob :",error);
        // });

        
      };


        // add contact in group
      _self.add_contact_in_group = function(data)
      {
        var add_InGroup = "INSERT INTO groups_member (group_id,name,phone_no) VALUES (?,?,?)";
        $cordovaSQLite.execute(db, add_InGroup,[data.group_id,data.name,data.phone_no]).then(function(res) {
          console.log("contact added in group  : ",res);
        }, function (err) {
          console.error("contact not added in group : ",err);
        });
      };


      for(var i=0;i<_self.allGroupsList.length;i++)
      {
          _self.selectedItem[i] = false;
      };


      _self.deleteGroup = function() {
        console.log("Selected Memebers : ",_self.selectedItem);

        // for(var key in _self.selectedItem)
        // {
        //   if(_self.selectedItem[key])
        //   {
        //     var delete_group_member = "DELETE FROM groups_member WHERE group_id = '"+key +"'";
        //     $cordovaSQLite.execute(db, delete_group_member, []).then(function(res) {
        //       console.log("Group members deleted in groups_member table " + res);


        //       var delete_group = "DELETE FROM groups WHERE WHERE group_id = '"+key +"'";
        //       $cordovaSQLite.execute(db, delete_group, []).then(function(res) {
        //         console.log("Group Deleted successfully " + res);
        //       }, function (err) {
        //         console.error("Group Deleted successfully : ",err);
        //       });


        //     }, function (err) {
        //       console.error("Group member not deleted : ",err);
        //     });
        //   }

        // };

      };


      // On hold group event fire on 5sec
      _self.onHoldItem = function(i){
        if(!_self.onHold)
        {
          _self.onHold = true;
          //$cordovaVibration.vibrate(100);
          _self.selected_length++;
          _self.selectedItem[i] = true;
          console.log("If On Hold index : "+i+"and selected Items : ",_self.selectedItem[i]);
        }
        else
        {
         // console.log("Else before : ",_self.selectedItem[i]);
          if(_self.selectedItem[i])
         {
           if(_self.selected_length == 1)
           _self.onHold = false;
           _self.selected_length--;
           _self.selectedItem[i] = false;
         }
         else
         {
           _self.selected_length++;
           _self.selectedItem[i] = true
         }
          //_self.selectedItem[i] = !_self.selectedItem[i];
          //console.log("Else after : ",_self.selectedItem[i]);

        }

      };

        // On tap event call when _self.onHold is true
      _self.onTapItem = function (i) {
        if(_self.onHold)
        {
         //console.log("Else before : ",_self.selectedItem[i]);
         if(_self.selectedItem[i])
         {
           if(_self.selected_length == 1)
           _self.onHold = false;
           _self.selected_length--;
           _self.selectedItem[i] = false;
         }
         else
         {
           _self.selected_length++;
           _self.selectedItem[i] = true
         }
          //_self.selectedItem[i] = !_self.selectedItem[i];
          //console.log("Else after : ",_self.selectedItem[i]);
        }
      };


      // Create New Group Modal shows
      $ionicModal.fromTemplateUrl('./components/create_group_modal/create_group_modal.html', {
        scope:$scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        _self.modal = modal;
      });

      _self.openModal = function () {
        _self.modal.show();
      };

      _self.closeModal =  function () {
        _self.modal.hide();
      };

      _self.uploadToDrive = function () {
        var options = {
          maximumImagesCount: 1
        };
    
        $cordovaImagePicker.getPictures(options)
          .then(function (results) {
            for (var i = 0; i < results.length; i++) {
              console.log("selected Image from Drive",results[i]);
              _self.group.image = results[i];
              _self.selectedImg = results[i];
              dpPic1 = _self.selectedImg.substring(0, _self.selectedImg.lastIndexOf('/') + 1),
              dpPic2 = _self.selectedImg.substring(_self.selectedImg.lastIndexOf('/') + 1, _self.selectedImg.length),
              finalPic = new Date().valueOf() + dpPic2;
            }
          }, function(error) {
            console.log("Error : ",error);
          });

      };



      //For checking its remove   (OKOKOKOKOKOK)
      var drdrd = {
                   name:"Muhammad Saleem",
                   mobileNo:'32224444444',
                   img:''}
      


          // Pull to refres event
         _self.ionRefresh = function () {
           if($ionicTabsDelegate.selectedIndex() == 0){       // 0 is Groups & 1 is Contacts
             console.log("Tab index is 0 Groups");
            }
            else{
              _self.allContactsList = second_dummy_contacts;
              console.log("Tab index is 1 contacts");
            }
             $scope.$broadcast('scroll.refreshComplete');
         };

    })




})();
