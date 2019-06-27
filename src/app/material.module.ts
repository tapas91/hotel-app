import { NgModule } from '@angular/core';
import {MatBadgeModule} from '@angular/material';
import {MatButtonModule,MatListModule,MatTabsModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
    imports: [MatBadgeModule,MatButtonModule,MatToolbarModule,MatIconModule,MatSidenavModule,MatListModule,MatTabsModule ],
    exports: [MatBadgeModule,MatButtonModule,MatToolbarModule,MatIconModule,MatSidenavModule,MatListModule,MatTabsModule ]
})

export class MaterialModule {

}