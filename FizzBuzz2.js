var A = A || {};

$(document).ready(function () {
    "use strict";
 
    A.viewModel = new FizzBuzz2ViewModel();

        try {
            ko.applyBindings(A.viewModel);
        } catch (e) {
            console.error(e);
            alert("�f�[�^�̃o�C���h�Ɏ��s���܂���");
        }
});