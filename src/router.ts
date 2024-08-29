import { Routes } from "@angular/router";
import { LayoutComponent } from "./Components/Layout/layout/layout.component";
import { LandingComponent } from "./Components/landing/landing.component";
import { ProjectsComponent } from "./Components/projects/projects.component";
import { DetailComponent } from "./Components/projects/detail/detail.component";
import { AboutComponent } from "./Components/about/about.component";

export const routes: Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [
            {
                path: "",
                component: LandingComponent
            }, {
                path: "projects",
                component: ProjectsComponent,
            }, {
                path: "projects/:id",
                component: DetailComponent
            },{
                path:"about",
                component:AboutComponent
            }        
        ]
    }
]

