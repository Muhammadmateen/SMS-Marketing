/**
 * Created by AQ on 7/27/2016.
 */


(function()
{
  'use strict'

  angular.module('starter')

    .controller("groupsController",function($cordovaSQLite,$ionicTabsDelegate,$scope,$state)
    {
      console.log("group controller initilize");
      /*console.log($ionicTabsDelegate.selectedIndex());*/

      /*var _self = this;

      $scope.fetchGroups = function() {
        console.log("Data in : ",_self.data);
        $scope.$broadcast('scroll.refreshComplete');
      };

      _self.data = [
        {
          name:'Muhammad Mateen',
          img:'./img/venkman.jpg',
          description:'this is hjskds jksd sdjs djsds jk.'
        },
        {
          name:'Muhammad Mateen',
          description:'this is hjskds jksd sdjs djsds jk.'
        },
        {
          name:'Muhammad Mateen',
          description:'this is hjskds jksd sdjs djsds jk.'
        },
        {
          name:'Muhammad Mateen',
          img:'./img/venkman.jpg',
          description:'this is hjskds jksd sdjs djsds jk.'
        }
      ];

      _self.onTapItem = function()
      {
        console.log("Fuction call in group file : ")
        $state.go("groupdetails");
      }
*/
      //var db = $cordovaSQLite.openDB({ name: "sms_marketing" ,location: 'default'});


/*
      _self.fetchGroupList = function()
      {
        var groupList_query = "SELECT * FROM groups;";
        $cordovaSQLite.execute(db, groupList_query).then(function(res) {

        /!*  console.log("Group Names : ",res);*!/
          var alldata = res.rows.item;

          if(res.rows.length)
          {
            console.log("ID Is : "+res.rows.item(0).group_id+" and group Name : "+res.rows.item(1).group_name);
            console.log("ID Is : "+res.rows.item(1).group_id+" and group Name : "+res.rows.item(1).group_name);
            console.log("ID Is : "+res.rows.item(2).group_id+" and group Name : "+res.rows.item(2).group_name);
            console.log(alldata);
          }
          else
          {
            console.log("No record found");
          }


        }, function (err) {

          console.error("Group Names : ",err);

        });

      };





      _self.createGroup = function()
      {
        var query = "CREATE TABLE IF NOT EXISTS groups (group_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, group_name TEXT NOT NULL)";
          $cordovaSQLite.execute(db, query).then(function(res) {

            console.log("Table Created : ",res);
          }, function (err) {

            console.error("Error : ",err);

          });
      };


      _self.createNewGroup = function(groupname)
      {
        var query = "INSERT INTO groups (group_name) VALUES (?)";
        $cordovaSQLite.execute(db, query,[groupname]).then(function(res) {

          console.log("Record Insert  : ",res);

          _self.groupname = "";

        }, function (err) {

          console.error("Record not Insert : ",err);
          _self.groupname = "";

        });
      };*/




    });


})();
