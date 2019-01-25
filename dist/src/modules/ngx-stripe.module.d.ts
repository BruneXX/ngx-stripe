import { ModuleWithProviders } from '@angular/core';
import { Options } from '../interfaces/stripe';
import 'rxjs/observable/combineLatest';
import 'rxjs/observable/fromPromise';
import 'rxjs/observable/of';
import 'rxjs/operators/filter';
import 'rxjs/operators/first';
import 'rxjs/operators/map';
export declare class NgxStripeModule {
    static forRoot(publishableKey?: string, options?: Options): ModuleWithProviders;
}
