"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var GdesService = (function () {
    function GdesService(http) {
        this.http = http;
    }
    GdesService.prototype.getGdes = function (query) {
        return this.http.get('https://gde-assistant.firebaseio.com/gdes.json')
            .map(function (res) { return res.json(); })
            .map(function (containers) {
            return containers
                .filter(function (obj) { return obj.gde.skills.includes(query); })
                .map(function (obj) { return obj.gde; });
        });
    };
    GdesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], GdesService);
    return GdesService;
}());
exports.GdesService = GdesService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2Rlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2Rlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQXVCeEQ7SUFFRSxxQkFBbUIsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFFN0IsQ0FBQztJQUVELDZCQUFPLEdBQVAsVUFBUSxLQUFhO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsQ0FBQzthQUNuRSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3RCLEdBQUcsQ0FBQyxVQUFDLFVBQTBCO1lBQzlCLE9BQUEsVUFBVTtpQkFDUCxNQUFNLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQTlCLENBQThCLENBQUM7aUJBQzdDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxHQUFHLEVBQVAsQ0FBTyxDQUFDO1FBRnRCLENBRXNCLENBQ3ZCLENBQUE7SUFDTCxDQUFDO0lBZFUsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUdjLFdBQUk7T0FGbEIsV0FBVyxDQWV2QjtJQUFELGtCQUFDO0NBQUEsQUFmRCxJQWVDO0FBZlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2RlIHtcbiAgYXZhdGFyOiBzdHJpbmc7XG4gIGJpbzogc3RyaW5nO1xuICBjYXRlZ29yeTogc3RyaW5nO1xuICBmdWxsbmFtZTogc3RyaW5nO1xuICBsb2NhdGlvbjogc3RyaW5nO1xuICByb2xlczogc3RyaW5nO1xuICBza2lsbHM6IHN0cmluZztcbiAgc29jaWFsOiB7XG4gICAgZ3BsdXM6IHN0cmluZztcbiAgICBsaW5rZWRpbjogc3RyaW5nO1xuICAgIHR3aXR0ZXI6IHN0cmluZztcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZGVDb250YWluZXIge1xuICBnZGU6IEdkZTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdkZXNTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cCkge1xuXG4gIH1cblxuICBnZXRHZGVzKHF1ZXJ5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPEdkZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHBzOi8vZ2RlLWFzc2lzdGFudC5maXJlYmFzZWlvLmNvbS9nZGVzLmpzb24nKVxuICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC5tYXAoKGNvbnRhaW5lcnM6IEdkZUNvbnRhaW5lcltdKSA9PlxuICAgICAgICBjb250YWluZXJzXG4gICAgICAgICAgLmZpbHRlcihvYmogPT4gb2JqLmdkZS5za2lsbHMuaW5jbHVkZXMocXVlcnkpKVxuICAgICAgICAgIC5tYXAob2JqID0+IG9iai5nZGUpXG4gICAgICApXG4gIH1cbn0iXX0=