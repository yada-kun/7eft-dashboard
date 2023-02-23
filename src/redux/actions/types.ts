import type { ProductActions } from './product/types';
import type { ProductsActions } from './products/types';

export type Actions = ProductActions | ProductsActions;
