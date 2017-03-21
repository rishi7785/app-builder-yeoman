namespace app-builder {
  export class ThingService {

    private THING_RESOURCE= this.$resource('/api/thing');

    static $inject = ['$resource'];

    constructor(private $resource) {}

        public showThings {
            return this.THING_RESOURCE.query();
        }
    }
    angular.module('app-builder').service('thingService', thingService);
}
