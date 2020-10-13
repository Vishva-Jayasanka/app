import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) {
  }

  getModules() {
    return this.http.post<any>(`${environment.apiUrl}get-modules`, {});
  }

  getAttendance() {
    return this.http.post<any>(`${environment.apiUrl}get-attendance`, {});
  }

  getDetailedAttendance(moduleCode: string, type: string, batch: number) {
    return this.http.post<any>(`${environment.apiUrl}get-detailed-attendance`, {
      moduleCode,
      type,
      batch
    });
  }

  getLectureHours() {
    return this.http.post<any>(`${environment.apiUrl}get-lecture-hours`, {});
  }

  getLectureHoursOfModule(moduleCode: string) {
    return this.http.post<any>(`${environment.adminUrl}get-module-lecture-hours`, {moduleCode});
  }

  getSessions(lectureHourID) {
    return this.http.post<any>(`${environment.adminUrl}get-sessions`, {lectureHourID});
  }

  getTeachers() {
    return this.http.post<any>(`${environment.adminUrl}get-teachers`, {});
  }

  checkIfModuleExists(value) {
    return this.http.post<any>(`${environment.adminUrl}check-module`, {moduleCode: value}).pipe(map(response => {
      return response.status;
    }));
  }

  editModule(data) {
    return this.http.post<any>(`${environment.adminUrl}add-edit-module`, data);
  }

  deleteModule(data) {
    return this.http.post<any>(`${environment.adminUrl}delete-module`, data);
  }

  uploadAttendance(data) {
    return this.http.post<any>(`${environment.adminUrl}upload-attendance`, data);
  }

}
