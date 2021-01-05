import { Component, Input, OnInit , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent implements OnInit {

  @Input() dataFromParent : any ;
  @Output() change = new EventEmitter() ;
  @Output() diminue = new EventEmitter() ;
  constructor() { }

  ngOnInit(): void {
  }

  onClickAugmentLike():void{
    // dans cette méthode il va falloir ajouter une fonction qui va être
    // excutée dans le parent 
    // parent.component.html  <app-enfant [dataFromParent]="meta" (change)="changeNbLike()"></app-enfant>
    this.change.emit();
  }
  onClickDiminueLike():void {
    this.diminue.emit();
  }

}
