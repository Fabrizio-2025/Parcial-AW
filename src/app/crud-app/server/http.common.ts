import { Observable} from "rxjs";
import { Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class HttpService
{
  private readonly baseUrl = "http://localhost:5000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }
  constructor(private http: HttpClient) {}

  //Muestra todo
  getAll(url: string): Observable<any> {
    return this.http.get<Object>(`${this.baseUrl}/${url}`, this.httpOptions);
  }
  //Para objeto persona
  get(url: string, id: number): Observable<any> {
    return this.http.get<Object>(`${this.baseUrl}/${url}/${id}`, this.httpOptions);
  }
  // Create new person
  post(url: string, body: any): Observable<any> {
    return this.http.post<Object>(`${this.baseUrl}/${url}`, body, this.httpOptions);
  }
  // Update a person
  put(url: string, id: number, body: any): Observable<any> {
    return this.http.put<Object>(`${this.baseUrl}/${url}/${id}`, body, this.httpOptions);
  }
  // Delete a person
  delete(url: string, id: number): Observable<any> {
    return this.http.delete<Object>(`${this.baseUrl}/${url}/${id}`, this.httpOptions);
  }
}
