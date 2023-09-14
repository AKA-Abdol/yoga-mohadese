type MongoDoc<T> = import('mongoose').Document<unknown, any, T> &
  T & { _id: import('mongoose').Types.ObjectId };

type PaginatedType<T> = { count?: number; values: T[] };

type RoleType = 'USER' | 'ADMIN';
