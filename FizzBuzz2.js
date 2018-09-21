var AY = AY || {};

$(document).ready(function () {
    "use strict";
 
    AY.viewModel = new FizzBuzz2ViewModel();

        try {
            ko.applyBindings(AY.viewModel);
        } catch (e) {
            console.error(e);
            alert("データのバインドに失敗しました");
        }
});