// Подключаем модуль translate
var app = angular.module('app', ['pascalprecht.translate'])

.config(['$translateProvider', function ($translateProvider) {
	// Загружаем переводы в модуль:
	$translateProvider.useStaticFilesLoader({
		prefix: 'data/translation-',
		suffix: '.json'
	});
	$translateProvider.preferredLanguage('ua');
	$translateProvider.useSanitizeValueStrategy('escapeParameters');
}])

// Добавляем ссылку на $translate в контроллер
.controller('mainCtrl', function( $scope, $translate ){
	$scope.changeLng = function (langKey) {
		$translate.use(langKey);
	};
});
