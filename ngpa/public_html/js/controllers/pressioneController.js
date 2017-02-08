app.controller('PressioneController', ['$scope', 'PaService', function($scope, PaService){
    var vm = $scope;
    vm.pa = {};
    vm.mis = {};    
    
    vm.init = function(){
        vm.resetPa();
        vm.mis.date = new Date();
    };
   
    vm.resetPa = function(){
        PaService.getPressione(null, vm.populatePa);
    };
    
    vm.delete = function(id){
        PaService.delPressione({data:{id:id}}, vm.populatePa);
    };
//    vm.add = function(){
//        PaService.newPressione(data, vm.populatePa);
//    };
    vm.populatePa = function(response){
        console.log("ROZ " + response.data);
        console.log(JSON.stringify(response.data, null, 4));
        var pa = response.data;
        vm.pa = {};
        angular.forEach(pa, function(v,k){this.pa[k] = v;}, vm);
    };
    vm.resetMisurazione = function () {
        vm.newMisurazione = {peso: null, datamisurazione: null, sistolica: null, diastolica: null};
    }; 
    
    vm.addMisurazione = function(){
        PaService.newPressione(vm.newMisurazione, vm.populatePa);
        vm.resetMisurazione();
    };
    vm.init(); 
}]);

