import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public images = [
    {src:"carousel1.jpg"},
    {src:"carousel2.jpg"},
    {src:"carousel3.jpg"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
