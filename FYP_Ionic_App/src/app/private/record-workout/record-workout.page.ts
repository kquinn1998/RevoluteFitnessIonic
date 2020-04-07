import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { Workout } from '../../models/workout.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { take, tap, delay, switchMap, map } from 'rxjs/operators';
import { WorkoutService } from 'src/app/services/workout.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-record-workout',
  templateUrl: './record-workout.page.html',
  styleUrls: ['./record-workout.page.scss'],
})
export class RecordWorkoutPage implements OnInit {

  workout: Workout;
  workoutSub: Subscription;
  isLoading = false;
  editMode = false;
  form: FormGroup;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private workoutServ: WorkoutService,
              private http: HttpClient,
              private fb: FormBuilder,
              private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('workoutId')){
        this.router.navigateByUrl('/view-workouts');
        return;
      }
      this.isLoading = true;
      this.workoutSub = this.workoutServ.getWorkout(paramMap.get('workoutId')).subscribe(workout => {
        this.workout = workout;
        this.setForm();
        this.isLoading = false;
      });
    });
  }

  setForm() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      description: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      exercises: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      sets: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      reps: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    });

    this.form = this.fb.group({
      title: this.workout.title,
      description: this.workout.description,
      exercise: [''],
      exercises: this.fb.array(this.workout.exercises),
      set: [''],
      sets: this.fb.array(this.workout.sets),
      rep: [''],
      reps: this.fb.array(this.workout.reps)
    });
  }

  toggleEdit() {
    if(this.editMode){
      this.editMode=false;
    } else {
      this.editMode=true;
    }
  }


  get exercises() {
    return this.form.get('exercises') as FormArray;
  }

  get sets() {
    return this.form.get('sets') as FormArray;
  }

  get reps() {
    return this.form.get('reps') as FormArray;
  }

  addExercise() {
    this.exercises.push(this.fb.control(''));
    this.sets.push(this.fb.control(''));
    this.reps.push(this.fb.control(''));
  }

  editWorkout() {
    /*const newWorkout = new Workout(
      this.workout.id,
      this.form.value.title,
      this.form.value.description,
      this.form.value.exercises,
      this.form.value.sets,
      this.form.value.reps,
    );
    console.log(newWorkout);
    this.loadingCtrl
        .create({ keyboardClose: true, message: 'Creating Workout...' })
        .then(loadingEl => {
          loadingEl.present();
          this.workoutServ.editWorkout(
            newWorkout
          ).subscribe(() => {
            this.isLoading = false;
            loadingEl.dismiss();
            this.router.navigateByUrl('/view-workouts');
          });
        });
    // this.router.navigateByUrl('');*/
  }

  ngOnDestroy() {
    if(this.workoutSub){
      this.workoutSub.unsubscribe();
    }
  }
}