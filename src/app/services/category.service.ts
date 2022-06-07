import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../Model/Category';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  private baseURL: string= "http://localhost:8181/api/category";

  constructor(private http: HttpClient) { }

  addCategory(category: Category): Observable<Object>{
    return this.http.post(this.baseURL,category);
  }

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.baseURL);
  }
  
}
