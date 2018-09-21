var A = A || {};

$(document).ready(function () {
    FizzBuzz2ViewModel = (function () {
        var FizzBuzz2ViewModel = function (initData) {
            var self = this;

            self.numberLine = ko.observable(50).extend({
                validation: [{
                    validator: function (value) {
                        if (value !== null && value > 1000 || value <= 0) {
                            return false;
                        } else {
                            return true;
                        }
                    },
                    message: "�s����1����1000�܂ł̒l����͂��Ă�������"
                }]
            });
            self.conditionsList = ko.mapping.fromJS([
                { conditionValue: 3, char: "Fizz" },
                { conditionValue: 5, char: "Buzz" }
            ]);

            self.numberCount = ko.pureComputed(function () {
                var resultList = [];

                if (self.numberLine() > 1000 || self.numberLine() <= 0) {
                    return false;
                }

                for (var i = 1; i <= self.numberLine(); i++) {
                    var result = "";
                    for (var j = 0; j < self.conditionsList().length; j++) {
                        if (i % self.conditionsList()[j].conditionValue() === 0) {
                            result += self.conditionsList()[j].char();
                        }
                    }
                    if (result === "") {
                        result = i ;
                    }
                    resultList.push({ value: result });
                }
                return resultList;
            }, self);
        }

        FizzBuzz2ViewModel.prototype.add�o�͏� = function () {
            var self = this;

            self.conditionsList.push(ko.mapping.fromJS({ conditionValue: null, char: "" }));
        }

        FizzBuzz2ViewModel.prototype.delete�o�͏� = function (target�o�͏�) {
            var self = this;
            
            self.conditionsList.remove(target�o�͏�);
        }

        return FizzBuzz2ViewModel;
    }());
}());