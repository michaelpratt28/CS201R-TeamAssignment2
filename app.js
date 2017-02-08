var firstApp = angular.module('app', []); 

firstApp.controller('NBAController', function ($scope) { 
    vm = this;
    vm.allTeams = [];

    vm.getAllTeams = function () {
        // FUNCTION TO GET ALL NBA TEAMS ON PAGE LOAD
        // POPULATE vm.allTeams
    }

    vm.getAllTeams();

    vm.teamOne = {};
    vm.selectTeamOne = function () {
        // FUNCTION TO SELECT THE FIRST TEAM FROM allTeams
        // POPULATE vm.teamOne
    }

    vm.teamTwo = {};
    vm.selectTeamTwo = function () {
        // FUNCTION TO SELECTE THE SECOND TEAM FROM allTeams
        // POPULATE vm.teamTwo
    }

});
