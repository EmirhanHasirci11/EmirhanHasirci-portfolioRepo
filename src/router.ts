import { Routes } from "@angular/router";
import { LayoutComponent } from "./Components/Layout/layout/layout.component";
import { LandingComponent } from "./Components/landing/landing.component";

export const routes: Routes = [
    {
        path: "",
        component: LayoutComponent,
        children:[
            {path:"",
                component:LandingComponent
            }
        ]
    }
]

