app.controller('InventoryController', ['$scope', function($scope) {
    $scope.parts = [];

    $scope.addPart = function() {
        if ($scope.newPart.name && $scope.newPart.quantity) {
            $scope.parts.push({
                name: $scope.newPart.name,
                quantity: $scope.newPart.quantity
            });
            $scope.newPart.name = '';
            $scope.newPart.quantity = '';
        }
    };

    $scope.removePart = function(part) {
        var index = $scope.parts.indexOf(part);
        if (index !== -1) {
            $scope.parts.splice(index, 1);
        }
    };
}]);
