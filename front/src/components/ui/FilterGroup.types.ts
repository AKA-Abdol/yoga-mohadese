export interface FilterGroupProps<T> {
  filterValues: T[] | readonly T[];
  filterNames: string[] | readonly string[];
  activeFilter: T;
  setFilter: (filter: T) => void;
}
