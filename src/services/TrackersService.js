app.factory('TrackersService', function ($http, mtToastService) {
    return {
        trackers: function () {
            return $http.get('/api/trackers');
        },
        save: function (tracker, data) {
            return $http.put('/api/trackers/' + tracker, data).then(function () {
                mtToastService.show('Credential saved');
            });
        },
        load: function (tracker) {
            return $http.get('/api/trackers/' + tracker);
        },
        check: function (tracker) {
            return $http.get('/api/trackers/' + tracker + '/check').then(function (data) {
                if (data.data.status) {
                    mtToastService.show('Connection successful');
                } else {
                    mtToastService.show('Connection failed');
                }
            }, function () {
                mtToastService.show('Connection failed');
            });
        }
    };
});
