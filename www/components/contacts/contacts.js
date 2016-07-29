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

      _self.selectedItem = function(i)
      {
        console.log("Item index : ",i);
      };



    });

})();

