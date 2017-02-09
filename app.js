var firstApp = angular.module('app', []); 

firstApp.controller('NBAController', function ($scope) { 
    vm = this;
    vm.allTeams = ["team1", "team2", "team3", "team4", "team5", "team1", "team2", "team3", "team4", "team5", "team1", "team2", "team3", "team4", "team5"];

    vm.getAllTeams = function () {
        // FUNCTION TO GET ALL NBA TEAMS ON PAGE LOAD
        // POPULATE vm.allTeams
        //  $.ajax({
        //     url : "http://api.sportradar.us/nba-t3/league/hierarchy.json?api_key=pq4375zt4kscw2ffbyq99rsq",
        //     dataType : "json",
        //     success : function(data) {
        //         console.log("Success!"); 
        //     }
        //   });
    }

    vm.getAllTeams();

    vm.teamOne = {
        
    };
    vm.selectTeamOne = function () {
        // FUNCTION TO SELECT THE FIRST TEAM FROM allTeams
        // POPULATE vm.teamOne
    }

    vm.teamTwo = {};
    vm.selectTeamTwo = function () {
        // FUNCTION TO SELECTE THE SECOND TEAM FROM allTeams
        // POPULATE vm.teamTwo
    }

    vm.getResults = function () {
        
    }

});
