/**
 * Created by AQ on 7/27/2016.
 */


(function()
{
  angular.module('starter')

    .controller('contactsController',function($rootScope,$scope,$cordovaVibration,$cordovaSQLite)
    {
      /*console.log("Data in contacts controller");
      console.log($ionicTabsDelegate.selectedIndex());*/

     /* var db = $cordovaSQLite.openDB({ name: "sms_marketing" ,location: 'default'});

      var create_groups_table = "CREATE TABLE IF NOT EXISTS groups (group_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, group_name TEXT NOT NULL)";

      $cordovaSQLite.execute(db, create_groups_table).then(function(res) {
        console.log("Table Created : ",res);
      }, function (err) {
          console.error("Error : ",err);
      });*/


      var _self = this;
      _self.onHold = false;
      _self.selectedItemClass = "selectedItem";
     // _self.noClass = "noooo";
      _self.selectedItem ={};
      _self.selected_length = 0;
      _self.groups_details = [];
      _self.default_img_path = "./img/default_avtar.png";

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

      for(var i=0;i<_self.data.length;i++)
      {
          _self.selectedItem[i] = false;
      };

      _self.abc =
      {
        name:'Muhammad Azhar',
        img:'./img/venkman.jpg',
        description:'This is multan.'
      };



      $scope.doRefresh = function() {

        _self.data.push(_self.abc);
        console.log("Data in : ",_self.data);

        $scope.$broadcast('scroll.refreshComplete');

      };

      $scope.$on('scroll.refreshComplete',function(event,args)
      {
        console.log("Pull to refresh complete call");
      });

      _self.onHoldItem = function(i){
        if(!_self.onHold)
        {
          _self.onHold = true;
          $cordovaVibration.vibrate(100);
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


      _self.createNewGroup = function(groupname)
      {
        var new_group = "INSERT INTO groups (group_name) VALUES (?)";
        $cordovaSQLite.execute(db, new_group,[groupname]).then(function(res) {
          console.log("New Group Created  : ",res);
          _self.groupname = "";
        }, function (err) {
          console.error("New Group Created not Created : ",err);
          _self.groupname = "";
        });
      };

      _self.add_contact_in_group = function(data)
      {
        var add_InGroup = "INSERT INTO groups_member (group_id,name,phone_no) VALUES (?,?,?)";
        $cordovaSQLite.execute(db, add_InGroup,[data.group_id,data.name,data.phone_no]).then(function(res) {
          console.log("contact added in group  : ",res);
        }, function (err) {
          console.error("contact not added in group : ",err);
        });
      };


     _self.deleteGroup = function() {

       // console.log("Selected Item : ",_self.selectedItem);

        for(var key in _self.selectedItem)
        {
          if(_self.selectedItem[key])
          {
            var delete_group_member = "DELETE FROM groups_member WHERE group_id = '"+key +"'";
            $cordovaSQLite.execute(db, delete_group_member, []).then(function(res) {
              console.log("Group member deleted " + res);


              var delete_group = "DELETE FROM groups WHERE WHERE group_id = '"+key +"'";
              $cordovaSQLite.execute(db, delete_group, []).then(function(res) {
                console.log("Group Deleted successfully " + res);
              }, function (err) {
                console.error("Group Deleted successfully : ",err);
              });


            }, function (err) {
              console.error("Group member not deleted : ",err);
            });
          }

        };

      };




    });

})();

