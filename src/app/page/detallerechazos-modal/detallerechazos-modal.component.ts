import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from "@angular/forms";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AquirerService } from 'src/app/service/aquirer.service';
import { fuentepapelParam } from 'src/app/model/fuentepapelParam.model';
import Swal from 'sweetalert2';
import * as xlsx from 'xlsx';
import * as XLSX from 'xlsx';
import { ModificacionRechazoModalComponent } from 'src/app/page/modificacion-rechazo-modal/modificacion-rechazo-modal.component';
import { rechazonacional } from 'src/app/model/rechazonacional.model';
import { CommonModule, DatePipe } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap, map, catchError } from 'rxjs/operators';
import { detallerechazoNac } from 'src/app/model/detallerechazoNac.model';
@Component({
  selector: 'app-detallerechazos-modal',
  templateUrl: './detallerechazos-modal.component.html',
  styleUrls: ['./detallerechazos-modal.component.css']
})
export class DetallerechazosModalComponent implements OnInit {
  public _fuentepapelParam: fuentepapelParam;
  public breakpoint: number; // Breakpoint observer code
  public addCusForm: FormGroup;
  public rechazoMO: any;
  wasFormChanged = false;

  constructor(
    public AquirerService: AquirerService,
    private route: ActivatedRoute

  ) { }
  archivoftepColumns: string[] = ['codregistro', 'vNoCuenta', 'vNumNeg', 'tipotrans'
    , 'importe', 'referencia'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  public ngOnInit(): void {
    this._fuentepapelParam = new fuentepapelParam('2424223', '42343234', '432424234');
    this.route.params.subscribe(params => this.AquirerService.getRechazoDetalle(params.id)
      .subscribe(
        data => {

          if (!data) {
            Swal.fire({
              icon: 'info',
              text: 'No hay datos!'
            })
          } else {
            this.rechazoMO = data;
          }

        },
        error => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salió mal!'
          })

        }));
    console.info('RECHAZO DTO', this.rechazoMO);
  }


}