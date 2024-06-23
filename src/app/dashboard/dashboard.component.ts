import { Component } from '@angular/core';
import {SkeletonComponent} from "mfcmptestcomponents";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  imports: [
    SkeletonComponent
  ],
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

}
