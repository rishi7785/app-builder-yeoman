namespace app-builder {

    export class ThingController {
        public thing;

        static $inject = ['thingService'];

        constructor (private thingService) {
            this.thing = thingService.getAllThings();
        }
    }
}
