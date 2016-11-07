'use strict';

/**
 * @ngdoc function
 * @name cookAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cookAppApp
 */
angular.module('cookAppApp')
  .controller('MainCtrl', function ($scope, firebase, $firebaseObject) {
    $scope.titulo = 'Mi pagineta de cocina';

    var firebaseConfig = {
      apiKey: 'AIzaSyCCYzWGmhDrC9HhlUbFbzYVP25qEA4xo_Y',
      authDomain: 'miblog-6eae5.firebaseapp.com',
      databaseURL: 'https://miblog-6eae5.firebaseio.com',
      storageBucket: 'miblog-6eae5.appspot.com',
      messagingSenderId: '875894884535'
    };
    var firebaseApp = firebase.initializeApp(firebaseConfig);
    var firebaseAuth = firebaseApp.auth();
    var firebaseDb = firebaseApp.database();
    var firebaseST = firebase.storage();

    var todos = firebaseDb.ref('todos');
    $scope.todos = $firebaseObject(todos);

  });
