// initialize the app namespace
// this is the only application variable added to the global object
var MYMP = {
    Config: {},
    Utils: {},
    Models: {},
    Views: {},
    ViewsConfig: {},
    Events: {}
};
(function(app) {
    /**
     * PRODUCTION configuration
     */
    app.Config = {
        host: 'http://localhost:8484',
        appPrefix: 'mymp-',
        authApiUrl: 'https://accounts.spotify.com/authorize',
        apiBaseURL: 'https://api.spotify.com/v1',
        defaultRoute: {page: 'search'},
        clientId: 'c951c431070c4306a8da5fe51d838eb9',
        authCallback: '/auth-callback.html',
        authScopes: [
            'user-read-private',
            'playlist-read-private',
            'playlist-modify-public',
            'playlist-modify-private',
            'user-library-read',
            'user-library-modify'
        ]
    };
})(MYMP);
