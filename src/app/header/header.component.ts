import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  //si se pone como stylesUrls podes poner mas de un archivo ["file1","file2"]
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
