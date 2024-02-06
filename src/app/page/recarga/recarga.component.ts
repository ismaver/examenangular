import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecargaService } from 'src/app/services/recarga.service';

@Component({
  selector: 'app-recarga',
  templateUrl: './recarga.component.html',
  styleUrls: ['./recarga.component.scss']
})
export class RecargaComponent {

  recargaForm: FormGroup;
  resultado: string = '';

  constructor(private fb: FormBuilder, private recargaService: RecargaService) {
    this.recargaForm = this.fb.group({
      numeroTelefono: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      operador: ['', [Validators.required]],
      monto: ['', [Validators.required, Validators.min(0.01)]]
    });
  }

  realizarRecarga() {
    if (this.recargaForm.valid) {
      this.recargaService.realizarRecarga(this.recargaForm.value).subscribe({
        next: (res) => this.resultado = 'Transacción correcta',
        error: (err) => this.resultado = 'Transacción incorrecta'
      });
    } else {
      this.resultado = 'Por favor, rellena el formulario correctamente.';
    }
  }
}
