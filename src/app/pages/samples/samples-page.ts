import { Component, inject, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories-service';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-samples',
  imports: [],
  templateUrl: './samples-page.html',
  styleUrl: './samples-page.scss',
})
export class SamplesPage implements OnInit {
  private authService = inject(AuthService);
  private categoriesService = inject(CategoriesService);

  async ngOnInit() {
    if (this.authService.currentUser()) {
      const res = await this.categoriesService.getCategories(this.authService.currentUser()!.$id);
      console.log(res);
    }
    const resSingle = await this.categoriesService.getCategory('693b08fb002e63137fb4');
    console.log(resSingle);
  }
}
