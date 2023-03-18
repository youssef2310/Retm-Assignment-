import { ChangeDetectorRef, Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-reserve-service',
  templateUrl: './reserve-service.component.html',
  styleUrls: ['./reserve-service.component.css'],
})
export class ReserveServiceComponent {
  serviceCode: string = '';
  message = '';
  success: boolean = false;
  constructor(private apiService: ApiService, private ref: ChangeDetectorRef) {}

  verifyCode() {
    console.log(this.serviceCode);
    if (!this.serviceCode) {
      console.log('fail');
      this.success = false;
      this.message = 'يرجى ملئ البيانات المطلوبة';
      this.ref.markForCheck();
      return;
    }
    this.message = '';
    this.apiService.verifyCode(this.serviceCode).subscribe((res) => {
      if (res['avilable']) {
        this.success = true;
        this.message = 'تمت عملية التأكيد بنجاح';
      } else {
        this.success = false;
        this.message = 'فشل عملية التأكيد هذا الرقم غير موجود';
      }
    });
  }
}
