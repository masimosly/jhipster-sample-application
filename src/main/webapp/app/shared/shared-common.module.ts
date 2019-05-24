import { NgModule } from '@angular/core';

import { MasimosJhipsterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [MasimosJhipsterSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [MasimosJhipsterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MasimosJhipsterSharedCommonModule {}
