import { OutProduct } from '../shop.entity';

export type OutGetProduct = OutProduct & { hasAccess: boolean };
