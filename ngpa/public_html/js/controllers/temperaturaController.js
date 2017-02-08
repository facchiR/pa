app.controller('TemperaturaController', ['$scope', 'PaService', function($scope, PaService){
    var vm = $scope;
    vm.pa={};
    vm.mis = {};
    
    vm.init = function(){
        vm.resetTemp();
        vm.mis.date = new Date();
    };
    vm.resetTemp = function(){
        PaService.getTemperatura(null, vm.populateTemp);
    };
    
     vm.delete = function(id){
        PaService.delTemperatura({data:{id:id}}, vm.populateTemp);
    };
    vm.populateTemp = function(response){
        console.log(response);
        console.log("ROZ " + response.data);
        console.log(JSON.stringify(response.data, null, 4));
        var pa = response.data;
        vm.pa = {};
        angular.forEach(pa, function(v,k){this.pa[k] = v;}, vm);
    };
    vm.resetMis = function () {
        vm.newMis = {datamisurazione: null, valore: null};
    }; 
    vm.addMis = function(){
        PaService.newTemperatura(vm.newMis, vm.populateTemp);
        vm.resetMis();
    };
    vm.init(); 
}]);