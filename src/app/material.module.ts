import { NgModule } from '@angular/core';
import {MatBadgeModule} from '@angular/material';
import {MatButtonModule,MatListModule,MatTabsModule,MatCardModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
    imports: [MatBadgeModule,MatButtonModule,MatToolbarModule,MatIconModule,MatSidenavModule,MatListModule,MatTabsModule,MatCardModule ],
    exports: [MatBadgeModule,MatButtonModule,MatToolbarModule,MatIconModule,MatSidenavModule,MatListModule,MatTabsModule,MatCardModule ]
})

export class MaterialModule {

}