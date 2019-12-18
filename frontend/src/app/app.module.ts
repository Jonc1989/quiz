import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatFormFieldModule, MatInputModule, MatListModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component';
import { ApiService } from './api.service';
import {QuestionsComponent} from './questions.component';
import {HomeComponent} from './home.component';
import {NavComponent} from './nav.component';
import {QuizComponent} from './quiz.component';
import {QuizzesComponent} from './quizzes.component';
import {RegisterComponent} from './register.component';


const routes = [
    { path: '', component: HomeComponent },
    { path: 'question', component: QuestionComponent },
    { path: 'question/:quizId', component: QuestionComponent },
    //{ path: 'questions', component: QuestionsComponent },
    { path: 'quiz', component: QuizComponent },
    { path: 'quizzes', component: QuizzesComponent },
    { path: 'register', component: RegisterComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionsComponent,
    HomeComponent,
    NavComponent,
    QuizComponent,
    QuizzesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatToolbarModule
  ],
  //exports: []
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
