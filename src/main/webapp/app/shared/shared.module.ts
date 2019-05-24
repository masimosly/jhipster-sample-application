import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MasimosJhipsterSharedLibsModule, MasimosJhipsterSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [MasimosJhipsterSharedLibsModule, MasimosJhipsterSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [MasimosJhipsterSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MasimosJhipsterSharedModule {
  static forRoot() {
    return {
      ngModule: MasimosJhipsterSharedModule
    };
  }
}
