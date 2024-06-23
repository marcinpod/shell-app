import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserStateService} from "mfcmpteststate";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public user$: Observable<string | null> = inject(UserStateService).user$.pipe(map(x => x === null || x === '' ? '-' : x))
}
