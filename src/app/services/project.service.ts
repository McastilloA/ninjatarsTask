import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/internal/Observable";
import { InterfaceProject } from '../models/interfaceProject';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient: HttpClient) { }
  // ------------------ Array of models ------------------ //
    project: Observable<any>;

  // ------------------ Endpoints ------------------ //
    EndpointApi = environment.Endpoint;

  headers : HttpHeaders = new HttpHeaders ({
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImY5NGVkNzA3MTg0MDIwMDIyYzNlZGQxOGQyMTRhOWEyOWM0OWQ4ZDk4Mzk0YzcxNDViYjJjYTdjZTgyMjBhMWY2ZmI4ZTQ5OGZkOTJkOWFhIn0.eyJhdWQiOiIxIiwianRpIjoiZjk0ZWQ3MDcxODQwMjAwMjJjM2VkZDE4ZDIxNGE5YTI5YzQ5ZDhkOTgzOTRjNzE0NWJiMmNhN2NlODIyMGExZjZmYjhlNDk4ZmQ5MmQ5YWEiLCJpYXQiOjE1NjAxODU3NjAsIm5iZiI6MTU2MDE4NTc2MCwiZXhwIjoxNTkxODA4MTYwLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.nT_Br5_rtIqNtXejC9MQDfMNR2owkme9KQDCdoZHsBv2cGXvKNowOudc9TbaKgdbO2VOCmWX3GHdNsEssU4Ig8sANYaSmh7bsHsi6Fy-CfIz9MgL01g9ixCyN-LoAIC7B8kWflZpzewTyCXM52LcIMUrzw_Fn7iu1OQoLDPB2YLeNURRaz02T7dZWfnMTPMJOoBXYC53s4q6_PZXBBvypuSF11ikaVehuUBoXJfTc079wek2l1J3iQyGO25f5p9Ia_nis6cx0S9a9NHedOfVT0ZPMHqICycRtS2BF-fVJ9GdfXZIcJs5spz6XinXc6TLrp36HpBj_pDhgwSjmlnaGpshj1IQpjmOUb64U_fwcvx2f894P8v2BJLZVrmp5Q7L7c4mZ8GCv3iu8o8q8779dNhhBmQqYyTgabo9AKHwc0ROIZKILbR0ZSgZnEXpora4_UhwSHmc9BKZ6zoBpOYlbjsAb2aQOqEw_CrTEepwiPdQH1dSF6GADcFGUmCZNgh55Tccd7Y2kDnymdEw-lJZ0W12MTFPCj0NT4jGG4bx-vOFvBljmrAuMnvyLkRdWP01vccl2jl_Yv1M-4eM6RWe8yCskLcuT9qMP0QSPPaK7Vn1fEszvDNXVHYMMHUf_Se7QNxsDmVS5sKYde2xb1oUAk5k4zDis0aiGcx0_BE422s"
    // Authorization: this.authApiService.getToken()
  });

  getAllProject(){
    return this.httpClient.get(this.EndpointApi + '/projects', {headers: this.headers});
  }

  getProjectId(id: number){
    return (this.project = this.httpClient.get(this.EndpointApi + `/projects/${id}`, { headers: this.headers }));
  }

  saveProject(project:InterfaceProject){
    return this.httpClient.post<InterfaceProject>(this.EndpointApi + '/projects', project, { headers: this.headers})
    .pipe(map(data => data));
  }

  updateProject(project){
    return this.httpClient.put<InterfaceProject>(this.EndpointApi + '/projects', project, { headers: this.headers})
    .pipe(map(data => data));
  }
}
