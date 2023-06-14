/**
 * Title: composer-list.component.ts
 * Author: Brett Grashorn
 * Date: June 13 2023
 * Description: Composer list component; displays a list of composers
 */

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;
  txtSearchControl = new FormControl('');
  
  constructor(private compsoserService: ComposerService) {
    this.composers = this.compsoserService.getComposers();

    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val));
  }

  ngOnInit(): void {
  }

  filterComposers(name: string) {
    alert(name);
  }

}
