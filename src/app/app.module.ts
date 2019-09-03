// ------------------ Imports of Modules for compilater project ------------------//
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// ------------------ Imports of Services ------------------//
import { AuthApiService } from './services/auth-api.service';
import { ProjectService } from './services/project.service';
import { TaskService } from './services/task.service';
import { UserService } from './services/user.service';
import { InvitationService } from './services/invitation.service';
import { MemberService } from './services/member.service';
import { CommentService } from './services/comment.service';
import { TruncateTextPipe } from './pipe/truncate-text';

// ------------------ Imports of components ------------------//
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/Partitions/navbar/navbar.component';
import { FooterComponent } from './Components/Partitions/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { HometaskComponent } from './Components/hometask/hometask.component';
import { TaskComponent } from './Components/hometask/task/task.component';
import { MemberComponent } from './Components/hometask/member/member.component';
import { ProfileComponent } from './Components/hometask/profile/profile.component';
import { MessageconfirmComponent } from './Components/Partitions/messageconfirm/messageconfirm.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { SettprojectComponent } from './Components/hometask/settproject/settproject.component';
import { MetricComponent } from './Components/hometask/metric/metric.component';
import { ModaltaskComponent } from './Components/modal/modaltask/modaltask.component';
import { ModalmemberComponent } from './Components/modal/modalmember/modalmember.component';
import { ModalprojectComponent } from './Components/modal/modalproject/modalproject.component';
import { SeetaskComponent } from './Components/hometask/seetask/seetask.component';
import { InvitationComponent } from './Components/hometask/invitation/invitation.component';

//----------------------// Imports modules primeNG //----------------------//
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { TabViewModule } from 'primeng/tabview';
import { StepsModule } from 'primeng/steps';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { TooltipModule } from 'primeng/tooltip';
import { PasswordModule } from 'primeng/password';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputMaskModule } from 'primeng/inputmask';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ChipsModule } from 'primeng/chips';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HometaskComponent,
    TaskComponent,
    MemberComponent,
    ProfileComponent,
    MessageconfirmComponent,
    PagenotfoundComponent,
    SettprojectComponent,
    MetricComponent,
    ModaltaskComponent,
    ModalmemberComponent,
    ModalprojectComponent,
    SeetaskComponent,
    InvitationComponent,
    TruncateTextPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AccordionModule,
    ToolbarModule,
    ButtonModule,
    PanelModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    TabViewModule,
    StepsModule,
    CardModule,
    CalendarModule,
    TooltipModule,
    PasswordModule,
    ProgressBarModule,
    InputMaskModule,
    OverlayPanelModule,
    ChipsModule

  ],
  providers: [AuthApiService, ProjectService, TaskService, UserService, InvitationService, MemberService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
