/**
 * Created by AQ on 7/27/2016.
 */


(function()
{
  angular.module('starter')

    .controller('contactsController',function($rootScope,$scope,$ionicTabsDelegate)
    {
      /*console.log("Data in contacts controller");
      console.log($ionicTabsDelegate.selectedIndex());*/

      var _self = this;
      _self.onHold = false;
      _self.selectedItemClass = "selectedItem";
     // _self.noClass = "noooo";
      _self.selectedItem ={};
      _self.selected_length = 0;
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
      })

      _self.onHoldItem = function(i){
        if(!_self.onHold)
        {
          _self.onHold = true;
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

     _self.deleteGroup = function() {
        console.log("Selected Item : ",_self.selectedItem);
        for(var ab in _self.selectedItem)
        {
            console.log("Key : "+ab+"and value is : ",_self.selectedItem[ab]);
        };
      };



    });

})();

