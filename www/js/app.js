angular.module('Notes', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('NotesCtrl',function($scope, $ionicModal){
      $scope.tasks = [
        {title: 'Купить суши', description: 'Обязательно с васаби', done: false},
        {title: 'Выучить JavaScript', description: 'Обязательно до сентября', done: false},
        {title: 'Сдать экзамен', description: 'По ТЕРВЕРУ на 7 Молодец)', done: true},
        {title: 'Почистить зубы', description: 'Почистил?', done: false},
        {title: 'Забрать вещи', description: 'Со стиральной машины', done: false}
      ];
        $ionicModal.fromTemplateUrl('views/task.html', function(modal){
        $scope.taskModal = modal;
      },{
        scope:$scope,
        animation: 'slide-on-right'
      });
      $scope.openTask = function(){
        $scope.taskModal.show();
      }
    })
