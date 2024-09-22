import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
 protected readonly apiService = inject(ApiService);

 ngOnInit(): void {
   console.log('Home');
   this.apiService.getMangas()
   .subscribe({
    next: (response) => {
      console.log('Response:', response.data.data);
    },
    error: (error) => {
      console.error('Error details:', error); 
    }
  })
 }

}
