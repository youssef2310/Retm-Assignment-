import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  tokenVerified: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    let token = this.route.snapshot.paramMap.get('token');
    this.verifyToken(token);
  }

  verifyToken(token: any) {
    this.apiService.verifyToken(token).subscribe((res: any) => {
      if (res['data']) {
        this.snackBar.open('Welcome Mr' + res['name'], 'OK', {
          duration: 3000,
        });
        this.tokenVerified = true;
      } else {
        this.router.navigate(['/error'], { relativeTo: this.route });
      }
    });
  }
}
