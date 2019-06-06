angular
    .module('example')
    .controller('exampleController', exampleController);

exampleController.$inject = ['APIservice'];

function exampleController() {
    var vm = this;
    vm.name = {};
    vm.sendMessage = sendMessage;
    vm.text = 'meh';
}

function sendMessage() {

}