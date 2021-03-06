import { Component, OnInit, OnDestroy } from '@angular/core';
import { Workout } from '../../models/workout.model';
import { Subscription } from 'rxjs';
import { WorkoutService } from '../../services/workout.service';

@Component({
  selector: 'app-view-workouts',
  templateUrl: './view-workouts.page.html',
  styleUrls: ['./view-workouts.page.scss'],
})
export class ViewWorkoutsPage implements OnInit, OnDestroy{

  private workoutSub: Subscription;

  workouts: Workout[] = [ ];
  isLoading = false;

  constructor(private workoutServ: WorkoutService) { }

  ngOnInit() {
    this.isLoading=true;
    this.workoutSub = this.workoutServ.workouts.subscribe(workouts => {
      this.workouts = workouts;
      this.isLoading=false;
    });
  }

  ionViewWillEnter() {
    this.isLoading=true;
    this.workoutServ.fetchWorkouts().subscribe(() => {
      this.isLoading=false;
    });
  }

  ngOnDestroy(): void {
    if(this.workoutSub){
      this.workoutSub.unsubscribe();
    }
  }

  deleteWorkout(id: string){
    this.workoutServ.deleteWorkout(id).subscribe();
  }

}
