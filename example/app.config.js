export function appConfig ($locationProvider, $urlRouterProvider, $qProvider, $logProvider,colorServiceProvider) {
    $locationProvider.html5Mode(false);
    $urlRouterProvider.otherwise('/app/home');
    $qProvider.errorOnUnhandledRejections(false);
    $logProvider.debugEnabled(true);

    colorServiceProvider.setColor('green');

    console.log('配置块运行完毕');
}

appConfig.$inject = [
    '$locationProvider',
    '$urlRouterProvider',
    '$qProvider',
    '$logProvider',
    'colorServiceProvider'
];