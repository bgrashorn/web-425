/**
 * Title: composer-list.component.ts
 * Author: Brett Grashorn
 * Date: June 13 2023
 * Description: Composer list component; displays a list of composers
 */

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';


@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;
  
  constructor(private compsoserService: ComposerService) {
    this.composers = this.compsoserService.getComposers();
  }

  ngOnInit(): void {
  }

}
