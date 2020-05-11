import { NgModule } from '@angular/core';
import { NbSidebarModule, NbButtonModule, NbLayoutModule, NbDialogModule, NbCardModule, NbIconModule, NbInputModule } from '@nebular/theme';

const nebularModules = [
  NbLayoutModule,
  NbSidebarModule,
  NbButtonModule,
  NbDialogModule.forChild({autoFocus: false}),
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbButtonModule
];

@NgModule({
  declarations: [],
  imports: [nebularModules],
  exports: [nebularModules]
})
export class NebularModule {}
