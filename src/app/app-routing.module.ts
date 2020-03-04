import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./public/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./public/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./private/dashboard/dashboard.module').then( m => m.DashboardPageModule),
    //canLoad: [AuthGuard]
  },
  {
    path: 'view-workouts',
    loadChildren: () => import('./private/view-workouts/view-workouts.module').then( m => m.ViewWorkoutsPageModule),
    //canLoad: [AuthGuard]
  },
  {
    path: 'record-workout',
    loadChildren: () => import('./private/record-workout/record-workout.module').then( m => m.RecordWorkoutPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'create-workout',
    loadChildren: () => import('./private/create-workout/create-workout.module').then( m => m.CreateWorkoutPageModule),
    //canLoad: [AuthGuard]
  },
  {
    path: 'view-workouts/:workoutId',
    loadChildren: () => import('./private/view-workout-details/view-workout-details.module').then( m => m.ViewWorkoutDetailsPageModule)
  },  {
    path: 'manage-clients',
    loadChildren: () => import('./private/manage-clients/manage-clients.module').then( m => m.ManageClientsPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
