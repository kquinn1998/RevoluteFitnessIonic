import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Workout } from '../models/workout.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take, tap, delay, switchMap, map } from 'rxjs/operators';
import { WorkoutService } from '../services/workout.service'
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-record-workout',
  templateUrl: './create-workout.page.html',
  styleUrls: ['./create-workout.page.scss'],
})
export class CreateWorkoutPage implements OnInit {

  form: FormGroup;
  isLoading = false;

  /*private httpOptions = {
    headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json'
    }),
    responseType: 'text'
  };*/

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    public workoutServ: WorkoutService, 
    public router: Router,
    private loadingCtrl: LoadingController
    ) { }

  ngOnInit() {
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
      title: [''],
      description: [''],
      exercise: [''],
      exercises: this.fb.array(['']),
      set: [''],
      sets: this.fb.array(['']),
      rep: [''],
      reps: this.fb.array([''])
    });

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

  createWorkout() {
    const newWorkout = new Workout(
      "123456789",
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
          this.workoutServ.createWorkout(
            newWorkout
          );
          setTimeout(() => {
            this.isLoading = false;
            loadingEl.dismiss();
            this.router.navigateByUrl('/view-workouts');
          }, 2000);
        });
    // this.router.navigateByUrl('');
  }
}
