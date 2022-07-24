import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  title: string = "Kategori Listesi";
  categories:Category[]=[
    {id:1,name:"Elektronik"},
    {id:2,name:"Laptop"},
    {id:3,name:"Mause"}
  ];
  ngOnInit(): void {
  }

}
