import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FillProjectsDataService {

  constructor() { }
  
  projectsData: {projectName: String, description: String, projectImage: String }[] = [
    {projectName: 'simpleWebpage', description : 'Simple webpage made in Angular 2.0' , projectImage: './assets/proj01.jpg' },
    {projectName: 'simpleWebpage01', description: 'Another webpage made in angular', projectImage: './assets/proj02.jpg' }
  ]

  showProjectDataType(){
    console.log(typeof(this.projectsData));
    console.log(this.projectsData);
  }

  addProjectData(ProjectName:string,Description:string,ProjectImage:string){
    this.projectsData.push({"projectName": ProjectName,"description": Description,"projectImage" :ProjectImage});
  }
  
}
