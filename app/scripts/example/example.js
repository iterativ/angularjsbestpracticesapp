'use strict';

angular.module('itApp.article').controller('ExampleController', ExampleController);

ExampleController.$inject = [];

function ExampleController() {
  var vm = this;

  vm.mouseOver = function() {
    console.log('mouseOver in ExampleController');
  };

  activate();

  function activate() {
  }
}