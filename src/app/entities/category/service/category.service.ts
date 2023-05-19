import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../model/category.mode';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  public getAllCategories(): Observable<Category[]>{
    const urlEndpoint: string = "http://localhost:8080/store/categories";
    return this.http.get<Category[]>(urlEndpoint);
  }
}
