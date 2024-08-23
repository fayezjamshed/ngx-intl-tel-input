import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NativeElementInjectorDirective } from './directives/native-element-injector.directive';
import { NgxIntlTelInputComponent } from './ngx-intl-tel-input.component';
import { CountryFilterPipe } from './pipe/country-filter.pipe';

export const dropdownModuleForRoot: ModuleWithProviders<BsDropdownModule> = BsDropdownModule.forRoot();

@NgModule({
	declarations: [NgxIntlTelInputComponent, NativeElementInjectorDirective, CountryFilterPipe],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		dropdownModuleForRoot,
  ],
	exports: [NgxIntlTelInputComponent, NativeElementInjectorDirective],
})
export class NgxIntlTelInputModule {

}
