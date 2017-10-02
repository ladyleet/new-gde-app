import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { GdesComponent } from "./gdes/gdes.component";

const routes: Routes = [
    { path: "", redirectTo: "/gdes", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "gdes", component: GdesComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }