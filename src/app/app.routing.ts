import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./admin/dashboard/dashboard.component";
import { AdminComponent } from "./admin/admin.component";
import { EmployeesComponent } from "./admin/employees/employees.component";
import { AuditComponent } from "./admin/audit/audit.component";
import { EmployeesDetailsComponent } from "./admin/employees/employees-details/employees-details.component";

const appRoutes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "admin", component: AdminComponent },
    { path: "admin/dashboard", component: DashboardComponent },
    { path: "admin/funcionarios", component: EmployeesComponent },
    { path: "admin/funcionarios/:id", component: EmployeesDetailsComponent },
    { path: "admin/auditoria", component: AuditComponent },
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "**", redirectTo: "/login", pathMatch: "full" }
]


const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

export default routing;