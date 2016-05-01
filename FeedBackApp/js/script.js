var app = angular.module('FeedbackForm', [
'ngRoute'
]);

app.config(['$routeProvider', function ($routeProvider) {
$routeProvider

.when("/", {templateUrl: "partials/home.html"})

.otherwise("/404", {templateUrl: "partials/404.html"});
}]);

app.controller('PageCtrl', function () {
console.log("Page Controller reporting for duty.");
});


	app.controller('ContentController', function () {
	this.radioData = [
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 },
      { label: '4', value: 4 },
      { label: '5', value: 5 }
    ]
	this.categories = [
		{
			name: 'option1',
			score:this.radioData.value,
			active:false
		},{
			name: 'option2',
			score:this.radioData.value,
			active:false
		},{
			name: 'option3',
			score:this.radioData.value,
			active:false
		},{
			name: 'option4',
			score:this.radioData.value,
			active:false
		}
	];
		
	this.total = function(){

		var total = 0;
		angular.forEach(this.categories, function(s){
			if (s.score){
				total+= s.score;
			}
		});
		return total;
	};
});

	app.controller('LearningController', function () {
	this.radioData = [
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 },
      { label: '4', value: 4 },
      { label: '5', value: 5 }
    ];
	this.categories = [
		{
			name: 'option11',
			score:radioData,
			active:false
		},{
			name: 'option22',
			score:radioData,
			active:false
		},{
			name: 'option33',
			score:radioData,
			active:false
		},{
			name: 'option44',
			score:radioData,
			active:false
		}
	];

	
	this.total = function(){

		var total = 0;
		angular.forEach(this.categories, function(s){
			if (s.score){
				total+= s.score;
			}
		});
		return total;
	};
});


