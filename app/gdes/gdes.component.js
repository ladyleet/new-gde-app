"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var gdes_service_1 = require("./gdes.service");
var Subject_1 = require("rxjs/Subject");
var GdesComponent = (function () {
    function GdesComponent(gdesService) {
        var _this = this;
        this.gdesService = gdesService;
        this.findGde$ = new Subject_1.Subject();
        this.searchResults$ = this.findGde$
            .filter(function (searchValue) {
            return searchValue.replace(/\s+/g, '').length > 0;
        })
            .switchMap(function (searchValue) {
            return _this.gdesService.getGdes(searchValue);
        });
    }
    GdesComponent.prototype.ngOnInit = function () {
        //this.gdes = this.gdesService.getGdes(); 
    };
    GdesComponent = __decorate([
        core_1.Component({
            selector: "ns-gdes",
            moduleId: module.id,
            templateUrl: "./gdes.component.html",
        }),
        __metadata("design:paramtypes", [gdes_service_1.GdesService])
    ], GdesComponent);
    return GdesComponent;
}());
exports.GdesComponent = GdesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2Rlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwrQ0FBa0Q7QUFFbEQsd0NBQXVDO0FBT3ZDO0lBYUksdUJBQ1ksV0FBd0I7UUFEcEMsaUJBRUs7UUFETyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQWJwQyxhQUFRLEdBQUcsSUFBSSxpQkFBTyxFQUFVLENBQUM7UUFFakMsbUJBQWMsR0FBRyxJQUFJLENBQUMsUUFBUTthQUN6QixNQUFNLENBQUMsVUFBQSxXQUFXO1lBQ2YsT0FBQSxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQztRQUExQyxDQUEwQyxDQUM3QzthQUNBLFNBQVMsQ0FBQyxVQUFBLFdBQVc7WUFDbEIsT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFBckMsQ0FBcUMsQ0FDeEMsQ0FBQTtJQU1ELENBQUM7SUFFTCxnQ0FBUSxHQUFSO1FBQ0csMENBQTBDO0lBQzdDLENBQUM7SUFuQlEsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzt5Q0FlMkIsMEJBQVc7T0FkM0IsYUFBYSxDQW9CekI7SUFBRCxvQkFBQztDQUFBLEFBcEJELElBb0JDO0FBcEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgR2Rlc1NlcnZpY2UsIEdkZSB9IGZyb20gXCIuL2dkZXMuc2VydmljZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tIFwicnhqcy9TdWJqZWN0XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWdkZXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZ2Rlcy5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBHZGVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBmaW5kR2RlJCA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcblxuICAgIHNlYXJjaFJlc3VsdHMkID0gdGhpcy5maW5kR2RlJFxuICAgICAgICAuZmlsdGVyKHNlYXJjaFZhbHVlID0+XG4gICAgICAgICAgICBzZWFyY2hWYWx1ZS5yZXBsYWNlKC9cXHMrL2csICcnKS5sZW5ndGggPiAwXG4gICAgICAgIClcbiAgICAgICAgLnN3aXRjaE1hcChzZWFyY2hWYWx1ZSA9PlxuICAgICAgICAgICAgdGhpcy5nZGVzU2VydmljZS5nZXRHZGVzKHNlYXJjaFZhbHVlKVxuICAgICAgICApXG5cbiAgICBnZGVzOiBPYnNlcnZhYmxlPEdkZVtdPjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGdkZXNTZXJ2aWNlOiBHZGVzU2VydmljZVxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAvL3RoaXMuZ2RlcyA9IHRoaXMuZ2Rlc1NlcnZpY2UuZ2V0R2RlcygpOyBcbiAgICB9XG59XG4iXX0=