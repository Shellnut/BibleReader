// Code goes here

const app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $window) {

    $scope.startVerse = 'John 1:1';
    $scope.endVerse = '';
    $scope.range = false;

    $scope.submit = (startVerse, endVerse, range) => {

        console.log('start Verse', startVerse);
        console.log('end Verse', endVerse);

        let url = '';

        if (endVerse && range) {
            url = `http://esvapi.org/v2/rest/passageQuery?key=IP&passage=${startVerse}-${endVerse}&output-format=mp3`;
        }
        else {
            url = `http://esvapi.org/v2/rest/passageQuery?key=IP&passage=${startVerse}&output-format=mp3`
        }

        $window.open(url);
    }


});
