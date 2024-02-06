import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SvgIconComponent, provideAngularSvgIcon } from 'angular-svg-icon';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [SvgIconComponent, RouterModule],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
})
export class PageNotFoundComponent {

}
