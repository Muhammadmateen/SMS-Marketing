(function() {
'use strict';

    angular.module('Module')

        .factory('generalDataService', generalDataService);

    generalDataService.$inject = ['$cordovaSQLite'];

    function generalDataService($cordovaSQLite) {
        var obj = {};

        //obj.db = $cordovaSQLite.openDB({ name: "sms_marketing" ,location: 'default'});
        obj.allGroupsList = null;
        obj.allContactsList = null;

        obj.fetchGroups = function () {
        var groupList_query = "SELECT * FROM groups;";
        $cordovaSQLite.execute(obj.db, groupList_query).then(function(res) {
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

        return obj;
    }
})();