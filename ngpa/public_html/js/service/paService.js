app.service('PaService', ['$http', 'URL', function($http, URL){
    
    var onError = function(response){
        console.log("Errore di chiamata: ", response);};
    
    var getPressione = function(request, onReady){
        var data = request? request.data : {};
        $http({
            url : URL.REST + '/elenco.php',
            method : 'GET',
            data: data,
            dataType : 'json'
        }).then(onReady, onError);
    };
    var delPressione = function(request, onReady){
        var data = request? request.data : {};
        $http({
            url : URL.REST + '/elenco.php?act=del&id='+data.id,
            method : 'GET',
            data: {},
            dataType : 'json'
        }).then(onReady, onError);
    };
    var newPressione = function(newMisurazione, onReady){
        //var data = request? request.data : {};
        $http({
            url: URL.REST + '/elenco.php',
            method: 'POST',
            data: newMisurazione
            //dataType: 'json'
        }).then(onReady, onError);
    };
    var getTemperatura = function(request, onReady){
        var data = request? request.data : {};
        $http({
            url : URL.REST + '/febbre.php',
            method : 'GET',
            data: data
//            dataType : 'json'
        }).then(onReady, onError);
    };
    var delTemperatura = function(request, onReady){
        var data = request? request.data : {};
        $http({
            url : URL.REST + '/febbre.php?act=del&id='+data.id,
            method : 'GET',
            data: {},
            dataType : 'json'
        }).then(onReady, onError);
    };
    var newTemperatura = function(newMis, onReady){
        //var data = request? request.data : {};
        $http({
            url: URL.REST + '/febbre.php',
            method: 'POST',
            data: newMis
            //dataType: 'json'
        }).then(onReady, onError);
    };
    return {
        getPressione : getPressione,
        delPressione : delPressione,
        newPressione : newPressione,
        getTemperatura : getTemperatura,
        delTemperatura : delTemperatura,
        newTemperatura : newTemperatura
    };
        
}]);