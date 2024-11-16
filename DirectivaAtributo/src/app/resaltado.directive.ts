import { Directive, ElementRef, Input, SimpleChange } from '@angular/core';

@Directive({
  selector: '[appResaltado]',
  standalone: true
})
export class ResaltadoDirective {

  @Input('appResaltado') colorResaltado!: string;
  @Input('tamano') tam: number = 0;

  
  constructor(private elemento: ElementRef) {
    elemento.nativeElement.style.backgroundColor = 'yellow';
   }

   ngOnInit(): void{
    this.actualizar();
   }

   ngOnchanges(change: SimpleChange){
    this.actualizar();
   }

   actualizar(){
    if(this.colorResaltado != null){
      this.elemento.nativeElement.style.backgroundColor = this.colorResaltado;
    }
    else
      this.elemento.nativeElement.style.backgroundColor = 'yellow';
    if(this.tam > 0)
    {
      console.log(this.elemento.nativeElement);
      this.elemento.nativeElement.style.FontSize = this.tam + 'px';

    }

    
   }

}
