
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = {
  id: number
  username: string
  password: string | null
  displayName: string
  mod: boolean
  subscriber: boolean
  lastSeen: Date
  createdAt: Date
  updatedAt: Date
}

/**
 * Model UserJoined
 * 
 */
export type UserJoined = {
  id: number
  userId: number
  timestamp: Date
  createdAt: Date
  updatedAt: Date
}

/**
 * Model UserLeft
 * 
 */
export type UserLeft = {
  id: number
  userId: number
  timestamp: Date
  createdAt: Date
  updatedAt: Date
}

/**
 * Model UserMessage
 * 
 */
export type UserMessage = {
  id: number
  userId: number
  message: string
  timestamp: Date
  createdAt: Date
  updatedAt: Date
}

/**
 * Model MessageLog
 * 
 */
export type MessageLog = {
  id: number
  message: string
  timestamp: Date
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Note
 * 
 */
export type Note = {
  id: number
  note: string
  userId: number
  createdAt: Date
  updatedAt: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.userJoined`: Exposes CRUD operations for the **UserJoined** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserJoineds
    * const userJoineds = await prisma.userJoined.findMany()
    * ```
    */
  get userJoined(): Prisma.UserJoinedDelegate<GlobalReject>;

  /**
   * `prisma.userLeft`: Exposes CRUD operations for the **UserLeft** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserLefts
    * const userLefts = await prisma.userLeft.findMany()
    * ```
    */
  get userLeft(): Prisma.UserLeftDelegate<GlobalReject>;

  /**
   * `prisma.userMessage`: Exposes CRUD operations for the **UserMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserMessages
    * const userMessages = await prisma.userMessage.findMany()
    * ```
    */
  get userMessage(): Prisma.UserMessageDelegate<GlobalReject>;

  /**
   * `prisma.messageLog`: Exposes CRUD operations for the **MessageLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessageLogs
    * const messageLogs = await prisma.messageLog.findMany()
    * ```
    */
  get messageLog(): Prisma.MessageLogDelegate<GlobalReject>;

  /**
   * `prisma.note`: Exposes CRUD operations for the **Note** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.note.findMany()
    * ```
    */
  get note(): Prisma.NoteDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.12.0
   * Query Engine version: 659ef412370fa3b41cd7bf6e94587c1dfb7f67e7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UserJoined: 'UserJoined',
    UserLeft: 'UserLeft',
    UserMessage: 'UserMessage',
    MessageLog: 'MessageLog',
    Note: 'Note'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    joinedChat: number
    leftChat: number
    messages: number
    notes: number
  }

  export type UserCountOutputTypeSelect = {
    joinedChat?: boolean
    leftChat?: boolean
    messages?: boolean
    notes?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    displayName: string | null
    mod: boolean | null
    subscriber: boolean | null
    lastSeen: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    displayName: string | null
    mod: boolean | null
    subscriber: boolean | null
    lastSeen: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    displayName: number
    mod: number
    subscriber: number
    lastSeen: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    displayName?: true
    mod?: true
    subscriber?: true
    lastSeen?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    displayName?: true
    mod?: true
    subscriber?: true
    lastSeen?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    displayName?: true
    mod?: true
    subscriber?: true
    lastSeen?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string | null
    displayName: string
    mod: boolean
    subscriber: boolean
    lastSeen: Date
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    username?: boolean
    password?: boolean
    displayName?: boolean
    mod?: boolean
    subscriber?: boolean
    lastSeen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    joinedChat?: boolean | User$joinedChatArgs
    leftChat?: boolean | User$leftChatArgs
    messages?: boolean | User$messagesArgs
    notes?: boolean | User$notesArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    joinedChat?: boolean | User$joinedChatArgs
    leftChat?: boolean | User$leftChatArgs
    messages?: boolean | User$messagesArgs
    notes?: boolean | User$notesArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'joinedChat' ? Array < UserJoinedGetPayload<S['include'][P]>>  :
        P extends 'leftChat' ? Array < UserLeftGetPayload<S['include'][P]>>  :
        P extends 'messages' ? Array < UserMessageGetPayload<S['include'][P]>>  :
        P extends 'notes' ? Array < NoteGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'joinedChat' ? Array < UserJoinedGetPayload<S['select'][P]>>  :
        P extends 'leftChat' ? Array < UserLeftGetPayload<S['select'][P]>>  :
        P extends 'messages' ? Array < UserMessageGetPayload<S['select'][P]>>  :
        P extends 'notes' ? Array < NoteGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    joinedChat<T extends User$joinedChatArgs= {}>(args?: Subset<T, User$joinedChatArgs>): Prisma.PrismaPromise<Array<UserJoinedGetPayload<T>>| Null>;

    leftChat<T extends User$leftChatArgs= {}>(args?: Subset<T, User$leftChatArgs>): Prisma.PrismaPromise<Array<UserLeftGetPayload<T>>| Null>;

    messages<T extends User$messagesArgs= {}>(args?: Subset<T, User$messagesArgs>): Prisma.PrismaPromise<Array<UserMessageGetPayload<T>>| Null>;

    notes<T extends User$notesArgs= {}>(args?: Subset<T, User$notesArgs>): Prisma.PrismaPromise<Array<NoteGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.joinedChat
   */
  export type User$joinedChatArgs = {
    /**
     * Select specific fields to fetch from the UserJoined
     */
    select?: UserJoinedSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserJoinedInclude | null
    where?: UserJoinedWhereInput
    orderBy?: Enumerable<UserJoinedOrderByWithRelationInput>
    cursor?: UserJoinedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserJoinedScalarFieldEnum>
  }


  /**
   * User.leftChat
   */
  export type User$leftChatArgs = {
    /**
     * Select specific fields to fetch from the UserLeft
     */
    select?: UserLeftSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserLeftInclude | null
    where?: UserLeftWhereInput
    orderBy?: Enumerable<UserLeftOrderByWithRelationInput>
    cursor?: UserLeftWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserLeftScalarFieldEnum>
  }


  /**
   * User.messages
   */
  export type User$messagesArgs = {
    /**
     * Select specific fields to fetch from the UserMessage
     */
    select?: UserMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMessageInclude | null
    where?: UserMessageWhereInput
    orderBy?: Enumerable<UserMessageOrderByWithRelationInput>
    cursor?: UserMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserMessageScalarFieldEnum>
  }


  /**
   * User.notes
   */
  export type User$notesArgs = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NoteInclude | null
    where?: NoteWhereInput
    orderBy?: Enumerable<NoteOrderByWithRelationInput>
    cursor?: NoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<NoteScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
  }



  /**
   * Model UserJoined
   */


  export type AggregateUserJoined = {
    _count: UserJoinedCountAggregateOutputType | null
    _avg: UserJoinedAvgAggregateOutputType | null
    _sum: UserJoinedSumAggregateOutputType | null
    _min: UserJoinedMinAggregateOutputType | null
    _max: UserJoinedMaxAggregateOutputType | null
  }

  export type UserJoinedAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserJoinedSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserJoinedMinAggregateOutputType = {
    id: number | null
    userId: number | null
    timestamp: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserJoinedMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    timestamp: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserJoinedCountAggregateOutputType = {
    id: number
    userId: number
    timestamp: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserJoinedAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserJoinedSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserJoinedMinAggregateInputType = {
    id?: true
    userId?: true
    timestamp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserJoinedMaxAggregateInputType = {
    id?: true
    userId?: true
    timestamp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserJoinedCountAggregateInputType = {
    id?: true
    userId?: true
    timestamp?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserJoinedAggregateArgs = {
    /**
     * Filter which UserJoined to aggregate.
     */
    where?: UserJoinedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserJoineds to fetch.
     */
    orderBy?: Enumerable<UserJoinedOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserJoinedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserJoineds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserJoineds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserJoineds
    **/
    _count?: true | UserJoinedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserJoinedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserJoinedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserJoinedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserJoinedMaxAggregateInputType
  }

  export type GetUserJoinedAggregateType<T extends UserJoinedAggregateArgs> = {
        [P in keyof T & keyof AggregateUserJoined]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserJoined[P]>
      : GetScalarType<T[P], AggregateUserJoined[P]>
  }




  export type UserJoinedGroupByArgs = {
    where?: UserJoinedWhereInput
    orderBy?: Enumerable<UserJoinedOrderByWithAggregationInput>
    by: UserJoinedScalarFieldEnum[]
    having?: UserJoinedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserJoinedCountAggregateInputType | true
    _avg?: UserJoinedAvgAggregateInputType
    _sum?: UserJoinedSumAggregateInputType
    _min?: UserJoinedMinAggregateInputType
    _max?: UserJoinedMaxAggregateInputType
  }


  export type UserJoinedGroupByOutputType = {
    id: number
    userId: number
    timestamp: Date
    createdAt: Date
    updatedAt: Date
    _count: UserJoinedCountAggregateOutputType | null
    _avg: UserJoinedAvgAggregateOutputType | null
    _sum: UserJoinedSumAggregateOutputType | null
    _min: UserJoinedMinAggregateOutputType | null
    _max: UserJoinedMaxAggregateOutputType | null
  }

  type GetUserJoinedGroupByPayload<T extends UserJoinedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserJoinedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserJoinedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserJoinedGroupByOutputType[P]>
            : GetScalarType<T[P], UserJoinedGroupByOutputType[P]>
        }
      >
    >


  export type UserJoinedSelect = {
    id?: boolean
    userId?: boolean
    timestamp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserArgs
  }


  export type UserJoinedInclude = {
    user?: boolean | UserArgs
  }

  export type UserJoinedGetPayload<S extends boolean | null | undefined | UserJoinedArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserJoined :
    S extends undefined ? never :
    S extends { include: any } & (UserJoinedArgs | UserJoinedFindManyArgs)
    ? UserJoined  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserJoinedArgs | UserJoinedFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof UserJoined ? UserJoined[P] : never
  } 
      : UserJoined


  type UserJoinedCountArgs = 
    Omit<UserJoinedFindManyArgs, 'select' | 'include'> & {
      select?: UserJoinedCountAggregateInputType | true
    }

  export interface UserJoinedDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one UserJoined that matches the filter.
     * @param {UserJoinedFindUniqueArgs} args - Arguments to find a UserJoined
     * @example
     * // Get one UserJoined
     * const userJoined = await prisma.userJoined.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserJoinedFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserJoinedFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserJoined'> extends True ? Prisma__UserJoinedClient<UserJoinedGetPayload<T>> : Prisma__UserJoinedClient<UserJoinedGetPayload<T> | null, null>

    /**
     * Find one UserJoined that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserJoinedFindUniqueOrThrowArgs} args - Arguments to find a UserJoined
     * @example
     * // Get one UserJoined
     * const userJoined = await prisma.userJoined.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserJoinedFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserJoinedFindUniqueOrThrowArgs>
    ): Prisma__UserJoinedClient<UserJoinedGetPayload<T>>

    /**
     * Find the first UserJoined that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserJoinedFindFirstArgs} args - Arguments to find a UserJoined
     * @example
     * // Get one UserJoined
     * const userJoined = await prisma.userJoined.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserJoinedFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserJoinedFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserJoined'> extends True ? Prisma__UserJoinedClient<UserJoinedGetPayload<T>> : Prisma__UserJoinedClient<UserJoinedGetPayload<T> | null, null>

    /**
     * Find the first UserJoined that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserJoinedFindFirstOrThrowArgs} args - Arguments to find a UserJoined
     * @example
     * // Get one UserJoined
     * const userJoined = await prisma.userJoined.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserJoinedFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserJoinedFindFirstOrThrowArgs>
    ): Prisma__UserJoinedClient<UserJoinedGetPayload<T>>

    /**
     * Find zero or more UserJoineds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserJoinedFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserJoineds
     * const userJoineds = await prisma.userJoined.findMany()
     * 
     * // Get first 10 UserJoineds
     * const userJoineds = await prisma.userJoined.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userJoinedWithIdOnly = await prisma.userJoined.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserJoinedFindManyArgs>(
      args?: SelectSubset<T, UserJoinedFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserJoinedGetPayload<T>>>

    /**
     * Create a UserJoined.
     * @param {UserJoinedCreateArgs} args - Arguments to create a UserJoined.
     * @example
     * // Create one UserJoined
     * const UserJoined = await prisma.userJoined.create({
     *   data: {
     *     // ... data to create a UserJoined
     *   }
     * })
     * 
    **/
    create<T extends UserJoinedCreateArgs>(
      args: SelectSubset<T, UserJoinedCreateArgs>
    ): Prisma__UserJoinedClient<UserJoinedGetPayload<T>>

    /**
     * Delete a UserJoined.
     * @param {UserJoinedDeleteArgs} args - Arguments to delete one UserJoined.
     * @example
     * // Delete one UserJoined
     * const UserJoined = await prisma.userJoined.delete({
     *   where: {
     *     // ... filter to delete one UserJoined
     *   }
     * })
     * 
    **/
    delete<T extends UserJoinedDeleteArgs>(
      args: SelectSubset<T, UserJoinedDeleteArgs>
    ): Prisma__UserJoinedClient<UserJoinedGetPayload<T>>

    /**
     * Update one UserJoined.
     * @param {UserJoinedUpdateArgs} args - Arguments to update one UserJoined.
     * @example
     * // Update one UserJoined
     * const userJoined = await prisma.userJoined.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserJoinedUpdateArgs>(
      args: SelectSubset<T, UserJoinedUpdateArgs>
    ): Prisma__UserJoinedClient<UserJoinedGetPayload<T>>

    /**
     * Delete zero or more UserJoineds.
     * @param {UserJoinedDeleteManyArgs} args - Arguments to filter UserJoineds to delete.
     * @example
     * // Delete a few UserJoineds
     * const { count } = await prisma.userJoined.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserJoinedDeleteManyArgs>(
      args?: SelectSubset<T, UserJoinedDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserJoineds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserJoinedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserJoineds
     * const userJoined = await prisma.userJoined.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserJoinedUpdateManyArgs>(
      args: SelectSubset<T, UserJoinedUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserJoined.
     * @param {UserJoinedUpsertArgs} args - Arguments to update or create a UserJoined.
     * @example
     * // Update or create a UserJoined
     * const userJoined = await prisma.userJoined.upsert({
     *   create: {
     *     // ... data to create a UserJoined
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserJoined we want to update
     *   }
     * })
    **/
    upsert<T extends UserJoinedUpsertArgs>(
      args: SelectSubset<T, UserJoinedUpsertArgs>
    ): Prisma__UserJoinedClient<UserJoinedGetPayload<T>>

    /**
     * Count the number of UserJoineds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserJoinedCountArgs} args - Arguments to filter UserJoineds to count.
     * @example
     * // Count the number of UserJoineds
     * const count = await prisma.userJoined.count({
     *   where: {
     *     // ... the filter for the UserJoineds we want to count
     *   }
     * })
    **/
    count<T extends UserJoinedCountArgs>(
      args?: Subset<T, UserJoinedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserJoinedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserJoined.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserJoinedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserJoinedAggregateArgs>(args: Subset<T, UserJoinedAggregateArgs>): Prisma.PrismaPromise<GetUserJoinedAggregateType<T>>

    /**
     * Group by UserJoined.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserJoinedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserJoinedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserJoinedGroupByArgs['orderBy'] }
        : { orderBy?: UserJoinedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserJoinedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserJoinedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for UserJoined.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserJoinedClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * UserJoined base type for findUnique actions
   */
  export type UserJoinedFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserJoined
     */
    select?: UserJoinedSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserJoinedInclude | null
    /**
     * Filter, which UserJoined to fetch.
     */
    where: UserJoinedWhereUniqueInput
  }

  /**
   * UserJoined findUnique
   */
  export interface UserJoinedFindUniqueArgs extends UserJoinedFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserJoined findUniqueOrThrow
   */
  export type UserJoinedFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserJoined
     */
    select?: UserJoinedSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserJoinedInclude | null
    /**
     * Filter, which UserJoined to fetch.
     */
    where: UserJoinedWhereUniqueInput
  }


  /**
   * UserJoined base type for findFirst actions
   */
  export type UserJoinedFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserJoined
     */
    select?: UserJoinedSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserJoinedInclude | null
    /**
     * Filter, which UserJoined to fetch.
     */
    where?: UserJoinedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserJoineds to fetch.
     */
    orderBy?: Enumerable<UserJoinedOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserJoineds.
     */
    cursor?: UserJoinedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserJoineds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserJoineds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserJoineds.
     */
    distinct?: Enumerable<UserJoinedScalarFieldEnum>
  }

  /**
   * UserJoined findFirst
   */
  export interface UserJoinedFindFirstArgs extends UserJoinedFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserJoined findFirstOrThrow
   */
  export type UserJoinedFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserJoined
     */
    select?: UserJoinedSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserJoinedInclude | null
    /**
     * Filter, which UserJoined to fetch.
     */
    where?: UserJoinedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserJoineds to fetch.
     */
    orderBy?: Enumerable<UserJoinedOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserJoineds.
     */
    cursor?: UserJoinedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserJoineds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserJoineds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserJoineds.
     */
    distinct?: Enumerable<UserJoinedScalarFieldEnum>
  }


  /**
   * UserJoined findMany
   */
  export type UserJoinedFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserJoined
     */
    select?: UserJoinedSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserJoinedInclude | null
    /**
     * Filter, which UserJoineds to fetch.
     */
    where?: UserJoinedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserJoineds to fetch.
     */
    orderBy?: Enumerable<UserJoinedOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserJoineds.
     */
    cursor?: UserJoinedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserJoineds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserJoineds.
     */
    skip?: number
    distinct?: Enumerable<UserJoinedScalarFieldEnum>
  }


  /**
   * UserJoined create
   */
  export type UserJoinedCreateArgs = {
    /**
     * Select specific fields to fetch from the UserJoined
     */
    select?: UserJoinedSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserJoinedInclude | null
    /**
     * The data needed to create a UserJoined.
     */
    data: XOR<UserJoinedCreateInput, UserJoinedUncheckedCreateInput>
  }


  /**
   * UserJoined update
   */
  export type UserJoinedUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserJoined
     */
    select?: UserJoinedSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserJoinedInclude | null
    /**
     * The data needed to update a UserJoined.
     */
    data: XOR<UserJoinedUpdateInput, UserJoinedUncheckedUpdateInput>
    /**
     * Choose, which UserJoined to update.
     */
    where: UserJoinedWhereUniqueInput
  }


  /**
   * UserJoined updateMany
   */
  export type UserJoinedUpdateManyArgs = {
    /**
     * The data used to update UserJoineds.
     */
    data: XOR<UserJoinedUpdateManyMutationInput, UserJoinedUncheckedUpdateManyInput>
    /**
     * Filter which UserJoineds to update
     */
    where?: UserJoinedWhereInput
  }


  /**
   * UserJoined upsert
   */
  export type UserJoinedUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserJoined
     */
    select?: UserJoinedSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserJoinedInclude | null
    /**
     * The filter to search for the UserJoined to update in case it exists.
     */
    where: UserJoinedWhereUniqueInput
    /**
     * In case the UserJoined found by the `where` argument doesn't exist, create a new UserJoined with this data.
     */
    create: XOR<UserJoinedCreateInput, UserJoinedUncheckedCreateInput>
    /**
     * In case the UserJoined was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserJoinedUpdateInput, UserJoinedUncheckedUpdateInput>
  }


  /**
   * UserJoined delete
   */
  export type UserJoinedDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserJoined
     */
    select?: UserJoinedSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserJoinedInclude | null
    /**
     * Filter which UserJoined to delete.
     */
    where: UserJoinedWhereUniqueInput
  }


  /**
   * UserJoined deleteMany
   */
  export type UserJoinedDeleteManyArgs = {
    /**
     * Filter which UserJoineds to delete
     */
    where?: UserJoinedWhereInput
  }


  /**
   * UserJoined without action
   */
  export type UserJoinedArgs = {
    /**
     * Select specific fields to fetch from the UserJoined
     */
    select?: UserJoinedSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserJoinedInclude | null
  }



  /**
   * Model UserLeft
   */


  export type AggregateUserLeft = {
    _count: UserLeftCountAggregateOutputType | null
    _avg: UserLeftAvgAggregateOutputType | null
    _sum: UserLeftSumAggregateOutputType | null
    _min: UserLeftMinAggregateOutputType | null
    _max: UserLeftMaxAggregateOutputType | null
  }

  export type UserLeftAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserLeftSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserLeftMinAggregateOutputType = {
    id: number | null
    userId: number | null
    timestamp: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserLeftMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    timestamp: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserLeftCountAggregateOutputType = {
    id: number
    userId: number
    timestamp: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserLeftAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserLeftSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserLeftMinAggregateInputType = {
    id?: true
    userId?: true
    timestamp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserLeftMaxAggregateInputType = {
    id?: true
    userId?: true
    timestamp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserLeftCountAggregateInputType = {
    id?: true
    userId?: true
    timestamp?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserLeftAggregateArgs = {
    /**
     * Filter which UserLeft to aggregate.
     */
    where?: UserLeftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLefts to fetch.
     */
    orderBy?: Enumerable<UserLeftOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserLeftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLefts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLefts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserLefts
    **/
    _count?: true | UserLeftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserLeftAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserLeftSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserLeftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserLeftMaxAggregateInputType
  }

  export type GetUserLeftAggregateType<T extends UserLeftAggregateArgs> = {
        [P in keyof T & keyof AggregateUserLeft]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserLeft[P]>
      : GetScalarType<T[P], AggregateUserLeft[P]>
  }




  export type UserLeftGroupByArgs = {
    where?: UserLeftWhereInput
    orderBy?: Enumerable<UserLeftOrderByWithAggregationInput>
    by: UserLeftScalarFieldEnum[]
    having?: UserLeftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserLeftCountAggregateInputType | true
    _avg?: UserLeftAvgAggregateInputType
    _sum?: UserLeftSumAggregateInputType
    _min?: UserLeftMinAggregateInputType
    _max?: UserLeftMaxAggregateInputType
  }


  export type UserLeftGroupByOutputType = {
    id: number
    userId: number
    timestamp: Date
    createdAt: Date
    updatedAt: Date
    _count: UserLeftCountAggregateOutputType | null
    _avg: UserLeftAvgAggregateOutputType | null
    _sum: UserLeftSumAggregateOutputType | null
    _min: UserLeftMinAggregateOutputType | null
    _max: UserLeftMaxAggregateOutputType | null
  }

  type GetUserLeftGroupByPayload<T extends UserLeftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserLeftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserLeftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserLeftGroupByOutputType[P]>
            : GetScalarType<T[P], UserLeftGroupByOutputType[P]>
        }
      >
    >


  export type UserLeftSelect = {
    id?: boolean
    userId?: boolean
    timestamp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserArgs
  }


  export type UserLeftInclude = {
    user?: boolean | UserArgs
  }

  export type UserLeftGetPayload<S extends boolean | null | undefined | UserLeftArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserLeft :
    S extends undefined ? never :
    S extends { include: any } & (UserLeftArgs | UserLeftFindManyArgs)
    ? UserLeft  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserLeftArgs | UserLeftFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof UserLeft ? UserLeft[P] : never
  } 
      : UserLeft


  type UserLeftCountArgs = 
    Omit<UserLeftFindManyArgs, 'select' | 'include'> & {
      select?: UserLeftCountAggregateInputType | true
    }

  export interface UserLeftDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one UserLeft that matches the filter.
     * @param {UserLeftFindUniqueArgs} args - Arguments to find a UserLeft
     * @example
     * // Get one UserLeft
     * const userLeft = await prisma.userLeft.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserLeftFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserLeftFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserLeft'> extends True ? Prisma__UserLeftClient<UserLeftGetPayload<T>> : Prisma__UserLeftClient<UserLeftGetPayload<T> | null, null>

    /**
     * Find one UserLeft that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserLeftFindUniqueOrThrowArgs} args - Arguments to find a UserLeft
     * @example
     * // Get one UserLeft
     * const userLeft = await prisma.userLeft.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserLeftFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserLeftFindUniqueOrThrowArgs>
    ): Prisma__UserLeftClient<UserLeftGetPayload<T>>

    /**
     * Find the first UserLeft that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLeftFindFirstArgs} args - Arguments to find a UserLeft
     * @example
     * // Get one UserLeft
     * const userLeft = await prisma.userLeft.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserLeftFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserLeftFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserLeft'> extends True ? Prisma__UserLeftClient<UserLeftGetPayload<T>> : Prisma__UserLeftClient<UserLeftGetPayload<T> | null, null>

    /**
     * Find the first UserLeft that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLeftFindFirstOrThrowArgs} args - Arguments to find a UserLeft
     * @example
     * // Get one UserLeft
     * const userLeft = await prisma.userLeft.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserLeftFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserLeftFindFirstOrThrowArgs>
    ): Prisma__UserLeftClient<UserLeftGetPayload<T>>

    /**
     * Find zero or more UserLefts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLeftFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLefts
     * const userLefts = await prisma.userLeft.findMany()
     * 
     * // Get first 10 UserLefts
     * const userLefts = await prisma.userLeft.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userLeftWithIdOnly = await prisma.userLeft.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserLeftFindManyArgs>(
      args?: SelectSubset<T, UserLeftFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserLeftGetPayload<T>>>

    /**
     * Create a UserLeft.
     * @param {UserLeftCreateArgs} args - Arguments to create a UserLeft.
     * @example
     * // Create one UserLeft
     * const UserLeft = await prisma.userLeft.create({
     *   data: {
     *     // ... data to create a UserLeft
     *   }
     * })
     * 
    **/
    create<T extends UserLeftCreateArgs>(
      args: SelectSubset<T, UserLeftCreateArgs>
    ): Prisma__UserLeftClient<UserLeftGetPayload<T>>

    /**
     * Delete a UserLeft.
     * @param {UserLeftDeleteArgs} args - Arguments to delete one UserLeft.
     * @example
     * // Delete one UserLeft
     * const UserLeft = await prisma.userLeft.delete({
     *   where: {
     *     // ... filter to delete one UserLeft
     *   }
     * })
     * 
    **/
    delete<T extends UserLeftDeleteArgs>(
      args: SelectSubset<T, UserLeftDeleteArgs>
    ): Prisma__UserLeftClient<UserLeftGetPayload<T>>

    /**
     * Update one UserLeft.
     * @param {UserLeftUpdateArgs} args - Arguments to update one UserLeft.
     * @example
     * // Update one UserLeft
     * const userLeft = await prisma.userLeft.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserLeftUpdateArgs>(
      args: SelectSubset<T, UserLeftUpdateArgs>
    ): Prisma__UserLeftClient<UserLeftGetPayload<T>>

    /**
     * Delete zero or more UserLefts.
     * @param {UserLeftDeleteManyArgs} args - Arguments to filter UserLefts to delete.
     * @example
     * // Delete a few UserLefts
     * const { count } = await prisma.userLeft.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserLeftDeleteManyArgs>(
      args?: SelectSubset<T, UserLeftDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLefts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLeftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLefts
     * const userLeft = await prisma.userLeft.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserLeftUpdateManyArgs>(
      args: SelectSubset<T, UserLeftUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserLeft.
     * @param {UserLeftUpsertArgs} args - Arguments to update or create a UserLeft.
     * @example
     * // Update or create a UserLeft
     * const userLeft = await prisma.userLeft.upsert({
     *   create: {
     *     // ... data to create a UserLeft
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLeft we want to update
     *   }
     * })
    **/
    upsert<T extends UserLeftUpsertArgs>(
      args: SelectSubset<T, UserLeftUpsertArgs>
    ): Prisma__UserLeftClient<UserLeftGetPayload<T>>

    /**
     * Count the number of UserLefts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLeftCountArgs} args - Arguments to filter UserLefts to count.
     * @example
     * // Count the number of UserLefts
     * const count = await prisma.userLeft.count({
     *   where: {
     *     // ... the filter for the UserLefts we want to count
     *   }
     * })
    **/
    count<T extends UserLeftCountArgs>(
      args?: Subset<T, UserLeftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserLeftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserLeft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLeftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserLeftAggregateArgs>(args: Subset<T, UserLeftAggregateArgs>): Prisma.PrismaPromise<GetUserLeftAggregateType<T>>

    /**
     * Group by UserLeft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLeftGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserLeftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserLeftGroupByArgs['orderBy'] }
        : { orderBy?: UserLeftGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserLeftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLeftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for UserLeft.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserLeftClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * UserLeft base type for findUnique actions
   */
  export type UserLeftFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserLeft
     */
    select?: UserLeftSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserLeftInclude | null
    /**
     * Filter, which UserLeft to fetch.
     */
    where: UserLeftWhereUniqueInput
  }

  /**
   * UserLeft findUnique
   */
  export interface UserLeftFindUniqueArgs extends UserLeftFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserLeft findUniqueOrThrow
   */
  export type UserLeftFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserLeft
     */
    select?: UserLeftSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserLeftInclude | null
    /**
     * Filter, which UserLeft to fetch.
     */
    where: UserLeftWhereUniqueInput
  }


  /**
   * UserLeft base type for findFirst actions
   */
  export type UserLeftFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserLeft
     */
    select?: UserLeftSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserLeftInclude | null
    /**
     * Filter, which UserLeft to fetch.
     */
    where?: UserLeftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLefts to fetch.
     */
    orderBy?: Enumerable<UserLeftOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLefts.
     */
    cursor?: UserLeftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLefts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLefts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLefts.
     */
    distinct?: Enumerable<UserLeftScalarFieldEnum>
  }

  /**
   * UserLeft findFirst
   */
  export interface UserLeftFindFirstArgs extends UserLeftFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserLeft findFirstOrThrow
   */
  export type UserLeftFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserLeft
     */
    select?: UserLeftSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserLeftInclude | null
    /**
     * Filter, which UserLeft to fetch.
     */
    where?: UserLeftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLefts to fetch.
     */
    orderBy?: Enumerable<UserLeftOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLefts.
     */
    cursor?: UserLeftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLefts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLefts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLefts.
     */
    distinct?: Enumerable<UserLeftScalarFieldEnum>
  }


  /**
   * UserLeft findMany
   */
  export type UserLeftFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserLeft
     */
    select?: UserLeftSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserLeftInclude | null
    /**
     * Filter, which UserLefts to fetch.
     */
    where?: UserLeftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLefts to fetch.
     */
    orderBy?: Enumerable<UserLeftOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserLefts.
     */
    cursor?: UserLeftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLefts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLefts.
     */
    skip?: number
    distinct?: Enumerable<UserLeftScalarFieldEnum>
  }


  /**
   * UserLeft create
   */
  export type UserLeftCreateArgs = {
    /**
     * Select specific fields to fetch from the UserLeft
     */
    select?: UserLeftSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserLeftInclude | null
    /**
     * The data needed to create a UserLeft.
     */
    data: XOR<UserLeftCreateInput, UserLeftUncheckedCreateInput>
  }


  /**
   * UserLeft update
   */
  export type UserLeftUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserLeft
     */
    select?: UserLeftSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserLeftInclude | null
    /**
     * The data needed to update a UserLeft.
     */
    data: XOR<UserLeftUpdateInput, UserLeftUncheckedUpdateInput>
    /**
     * Choose, which UserLeft to update.
     */
    where: UserLeftWhereUniqueInput
  }


  /**
   * UserLeft updateMany
   */
  export type UserLeftUpdateManyArgs = {
    /**
     * The data used to update UserLefts.
     */
    data: XOR<UserLeftUpdateManyMutationInput, UserLeftUncheckedUpdateManyInput>
    /**
     * Filter which UserLefts to update
     */
    where?: UserLeftWhereInput
  }


  /**
   * UserLeft upsert
   */
  export type UserLeftUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserLeft
     */
    select?: UserLeftSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserLeftInclude | null
    /**
     * The filter to search for the UserLeft to update in case it exists.
     */
    where: UserLeftWhereUniqueInput
    /**
     * In case the UserLeft found by the `where` argument doesn't exist, create a new UserLeft with this data.
     */
    create: XOR<UserLeftCreateInput, UserLeftUncheckedCreateInput>
    /**
     * In case the UserLeft was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserLeftUpdateInput, UserLeftUncheckedUpdateInput>
  }


  /**
   * UserLeft delete
   */
  export type UserLeftDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserLeft
     */
    select?: UserLeftSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserLeftInclude | null
    /**
     * Filter which UserLeft to delete.
     */
    where: UserLeftWhereUniqueInput
  }


  /**
   * UserLeft deleteMany
   */
  export type UserLeftDeleteManyArgs = {
    /**
     * Filter which UserLefts to delete
     */
    where?: UserLeftWhereInput
  }


  /**
   * UserLeft without action
   */
  export type UserLeftArgs = {
    /**
     * Select specific fields to fetch from the UserLeft
     */
    select?: UserLeftSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserLeftInclude | null
  }



  /**
   * Model UserMessage
   */


  export type AggregateUserMessage = {
    _count: UserMessageCountAggregateOutputType | null
    _avg: UserMessageAvgAggregateOutputType | null
    _sum: UserMessageSumAggregateOutputType | null
    _min: UserMessageMinAggregateOutputType | null
    _max: UserMessageMaxAggregateOutputType | null
  }

  export type UserMessageAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserMessageSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserMessageMinAggregateOutputType = {
    id: number | null
    userId: number | null
    message: string | null
    timestamp: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMessageMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    message: string | null
    timestamp: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMessageCountAggregateOutputType = {
    id: number
    userId: number
    message: number
    timestamp: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMessageAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserMessageSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserMessageMinAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    timestamp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMessageMaxAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    timestamp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMessageCountAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    timestamp?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserMessageAggregateArgs = {
    /**
     * Filter which UserMessage to aggregate.
     */
    where?: UserMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMessages to fetch.
     */
    orderBy?: Enumerable<UserMessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserMessages
    **/
    _count?: true | UserMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserMessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserMessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMessageMaxAggregateInputType
  }

  export type GetUserMessageAggregateType<T extends UserMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateUserMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserMessage[P]>
      : GetScalarType<T[P], AggregateUserMessage[P]>
  }




  export type UserMessageGroupByArgs = {
    where?: UserMessageWhereInput
    orderBy?: Enumerable<UserMessageOrderByWithAggregationInput>
    by: UserMessageScalarFieldEnum[]
    having?: UserMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserMessageCountAggregateInputType | true
    _avg?: UserMessageAvgAggregateInputType
    _sum?: UserMessageSumAggregateInputType
    _min?: UserMessageMinAggregateInputType
    _max?: UserMessageMaxAggregateInputType
  }


  export type UserMessageGroupByOutputType = {
    id: number
    userId: number
    message: string
    timestamp: Date
    createdAt: Date
    updatedAt: Date
    _count: UserMessageCountAggregateOutputType | null
    _avg: UserMessageAvgAggregateOutputType | null
    _sum: UserMessageSumAggregateOutputType | null
    _min: UserMessageMinAggregateOutputType | null
    _max: UserMessageMaxAggregateOutputType | null
  }

  type GetUserMessageGroupByPayload<T extends UserMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserMessageGroupByOutputType[P]>
            : GetScalarType<T[P], UserMessageGroupByOutputType[P]>
        }
      >
    >


  export type UserMessageSelect = {
    id?: boolean
    userId?: boolean
    message?: boolean
    timestamp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserArgs
  }


  export type UserMessageInclude = {
    user?: boolean | UserArgs
  }

  export type UserMessageGetPayload<S extends boolean | null | undefined | UserMessageArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserMessage :
    S extends undefined ? never :
    S extends { include: any } & (UserMessageArgs | UserMessageFindManyArgs)
    ? UserMessage  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserMessageArgs | UserMessageFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof UserMessage ? UserMessage[P] : never
  } 
      : UserMessage


  type UserMessageCountArgs = 
    Omit<UserMessageFindManyArgs, 'select' | 'include'> & {
      select?: UserMessageCountAggregateInputType | true
    }

  export interface UserMessageDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one UserMessage that matches the filter.
     * @param {UserMessageFindUniqueArgs} args - Arguments to find a UserMessage
     * @example
     * // Get one UserMessage
     * const userMessage = await prisma.userMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserMessageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserMessageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserMessage'> extends True ? Prisma__UserMessageClient<UserMessageGetPayload<T>> : Prisma__UserMessageClient<UserMessageGetPayload<T> | null, null>

    /**
     * Find one UserMessage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserMessageFindUniqueOrThrowArgs} args - Arguments to find a UserMessage
     * @example
     * // Get one UserMessage
     * const userMessage = await prisma.userMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserMessageFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserMessageFindUniqueOrThrowArgs>
    ): Prisma__UserMessageClient<UserMessageGetPayload<T>>

    /**
     * Find the first UserMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMessageFindFirstArgs} args - Arguments to find a UserMessage
     * @example
     * // Get one UserMessage
     * const userMessage = await prisma.userMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserMessageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserMessageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserMessage'> extends True ? Prisma__UserMessageClient<UserMessageGetPayload<T>> : Prisma__UserMessageClient<UserMessageGetPayload<T> | null, null>

    /**
     * Find the first UserMessage that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMessageFindFirstOrThrowArgs} args - Arguments to find a UserMessage
     * @example
     * // Get one UserMessage
     * const userMessage = await prisma.userMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserMessageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserMessageFindFirstOrThrowArgs>
    ): Prisma__UserMessageClient<UserMessageGetPayload<T>>

    /**
     * Find zero or more UserMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMessageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserMessages
     * const userMessages = await prisma.userMessage.findMany()
     * 
     * // Get first 10 UserMessages
     * const userMessages = await prisma.userMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userMessageWithIdOnly = await prisma.userMessage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserMessageFindManyArgs>(
      args?: SelectSubset<T, UserMessageFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserMessageGetPayload<T>>>

    /**
     * Create a UserMessage.
     * @param {UserMessageCreateArgs} args - Arguments to create a UserMessage.
     * @example
     * // Create one UserMessage
     * const UserMessage = await prisma.userMessage.create({
     *   data: {
     *     // ... data to create a UserMessage
     *   }
     * })
     * 
    **/
    create<T extends UserMessageCreateArgs>(
      args: SelectSubset<T, UserMessageCreateArgs>
    ): Prisma__UserMessageClient<UserMessageGetPayload<T>>

    /**
     * Delete a UserMessage.
     * @param {UserMessageDeleteArgs} args - Arguments to delete one UserMessage.
     * @example
     * // Delete one UserMessage
     * const UserMessage = await prisma.userMessage.delete({
     *   where: {
     *     // ... filter to delete one UserMessage
     *   }
     * })
     * 
    **/
    delete<T extends UserMessageDeleteArgs>(
      args: SelectSubset<T, UserMessageDeleteArgs>
    ): Prisma__UserMessageClient<UserMessageGetPayload<T>>

    /**
     * Update one UserMessage.
     * @param {UserMessageUpdateArgs} args - Arguments to update one UserMessage.
     * @example
     * // Update one UserMessage
     * const userMessage = await prisma.userMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserMessageUpdateArgs>(
      args: SelectSubset<T, UserMessageUpdateArgs>
    ): Prisma__UserMessageClient<UserMessageGetPayload<T>>

    /**
     * Delete zero or more UserMessages.
     * @param {UserMessageDeleteManyArgs} args - Arguments to filter UserMessages to delete.
     * @example
     * // Delete a few UserMessages
     * const { count } = await prisma.userMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserMessageDeleteManyArgs>(
      args?: SelectSubset<T, UserMessageDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserMessages
     * const userMessage = await prisma.userMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserMessageUpdateManyArgs>(
      args: SelectSubset<T, UserMessageUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserMessage.
     * @param {UserMessageUpsertArgs} args - Arguments to update or create a UserMessage.
     * @example
     * // Update or create a UserMessage
     * const userMessage = await prisma.userMessage.upsert({
     *   create: {
     *     // ... data to create a UserMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserMessage we want to update
     *   }
     * })
    **/
    upsert<T extends UserMessageUpsertArgs>(
      args: SelectSubset<T, UserMessageUpsertArgs>
    ): Prisma__UserMessageClient<UserMessageGetPayload<T>>

    /**
     * Count the number of UserMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMessageCountArgs} args - Arguments to filter UserMessages to count.
     * @example
     * // Count the number of UserMessages
     * const count = await prisma.userMessage.count({
     *   where: {
     *     // ... the filter for the UserMessages we want to count
     *   }
     * })
    **/
    count<T extends UserMessageCountArgs>(
      args?: Subset<T, UserMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserMessageAggregateArgs>(args: Subset<T, UserMessageAggregateArgs>): Prisma.PrismaPromise<GetUserMessageAggregateType<T>>

    /**
     * Group by UserMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserMessageGroupByArgs['orderBy'] }
        : { orderBy?: UserMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for UserMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserMessageClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * UserMessage base type for findUnique actions
   */
  export type UserMessageFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserMessage
     */
    select?: UserMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMessageInclude | null
    /**
     * Filter, which UserMessage to fetch.
     */
    where: UserMessageWhereUniqueInput
  }

  /**
   * UserMessage findUnique
   */
  export interface UserMessageFindUniqueArgs extends UserMessageFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserMessage findUniqueOrThrow
   */
  export type UserMessageFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserMessage
     */
    select?: UserMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMessageInclude | null
    /**
     * Filter, which UserMessage to fetch.
     */
    where: UserMessageWhereUniqueInput
  }


  /**
   * UserMessage base type for findFirst actions
   */
  export type UserMessageFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserMessage
     */
    select?: UserMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMessageInclude | null
    /**
     * Filter, which UserMessage to fetch.
     */
    where?: UserMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMessages to fetch.
     */
    orderBy?: Enumerable<UserMessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMessages.
     */
    cursor?: UserMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMessages.
     */
    distinct?: Enumerable<UserMessageScalarFieldEnum>
  }

  /**
   * UserMessage findFirst
   */
  export interface UserMessageFindFirstArgs extends UserMessageFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserMessage findFirstOrThrow
   */
  export type UserMessageFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserMessage
     */
    select?: UserMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMessageInclude | null
    /**
     * Filter, which UserMessage to fetch.
     */
    where?: UserMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMessages to fetch.
     */
    orderBy?: Enumerable<UserMessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMessages.
     */
    cursor?: UserMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMessages.
     */
    distinct?: Enumerable<UserMessageScalarFieldEnum>
  }


  /**
   * UserMessage findMany
   */
  export type UserMessageFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserMessage
     */
    select?: UserMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMessageInclude | null
    /**
     * Filter, which UserMessages to fetch.
     */
    where?: UserMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMessages to fetch.
     */
    orderBy?: Enumerable<UserMessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserMessages.
     */
    cursor?: UserMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMessages.
     */
    skip?: number
    distinct?: Enumerable<UserMessageScalarFieldEnum>
  }


  /**
   * UserMessage create
   */
  export type UserMessageCreateArgs = {
    /**
     * Select specific fields to fetch from the UserMessage
     */
    select?: UserMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMessageInclude | null
    /**
     * The data needed to create a UserMessage.
     */
    data: XOR<UserMessageCreateInput, UserMessageUncheckedCreateInput>
  }


  /**
   * UserMessage update
   */
  export type UserMessageUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserMessage
     */
    select?: UserMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMessageInclude | null
    /**
     * The data needed to update a UserMessage.
     */
    data: XOR<UserMessageUpdateInput, UserMessageUncheckedUpdateInput>
    /**
     * Choose, which UserMessage to update.
     */
    where: UserMessageWhereUniqueInput
  }


  /**
   * UserMessage updateMany
   */
  export type UserMessageUpdateManyArgs = {
    /**
     * The data used to update UserMessages.
     */
    data: XOR<UserMessageUpdateManyMutationInput, UserMessageUncheckedUpdateManyInput>
    /**
     * Filter which UserMessages to update
     */
    where?: UserMessageWhereInput
  }


  /**
   * UserMessage upsert
   */
  export type UserMessageUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserMessage
     */
    select?: UserMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMessageInclude | null
    /**
     * The filter to search for the UserMessage to update in case it exists.
     */
    where: UserMessageWhereUniqueInput
    /**
     * In case the UserMessage found by the `where` argument doesn't exist, create a new UserMessage with this data.
     */
    create: XOR<UserMessageCreateInput, UserMessageUncheckedCreateInput>
    /**
     * In case the UserMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserMessageUpdateInput, UserMessageUncheckedUpdateInput>
  }


  /**
   * UserMessage delete
   */
  export type UserMessageDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserMessage
     */
    select?: UserMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMessageInclude | null
    /**
     * Filter which UserMessage to delete.
     */
    where: UserMessageWhereUniqueInput
  }


  /**
   * UserMessage deleteMany
   */
  export type UserMessageDeleteManyArgs = {
    /**
     * Filter which UserMessages to delete
     */
    where?: UserMessageWhereInput
  }


  /**
   * UserMessage without action
   */
  export type UserMessageArgs = {
    /**
     * Select specific fields to fetch from the UserMessage
     */
    select?: UserMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMessageInclude | null
  }



  /**
   * Model MessageLog
   */


  export type AggregateMessageLog = {
    _count: MessageLogCountAggregateOutputType | null
    _avg: MessageLogAvgAggregateOutputType | null
    _sum: MessageLogSumAggregateOutputType | null
    _min: MessageLogMinAggregateOutputType | null
    _max: MessageLogMaxAggregateOutputType | null
  }

  export type MessageLogAvgAggregateOutputType = {
    id: number | null
  }

  export type MessageLogSumAggregateOutputType = {
    id: number | null
  }

  export type MessageLogMinAggregateOutputType = {
    id: number | null
    message: string | null
    timestamp: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageLogMaxAggregateOutputType = {
    id: number | null
    message: string | null
    timestamp: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageLogCountAggregateOutputType = {
    id: number
    message: number
    timestamp: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MessageLogAvgAggregateInputType = {
    id?: true
  }

  export type MessageLogSumAggregateInputType = {
    id?: true
  }

  export type MessageLogMinAggregateInputType = {
    id?: true
    message?: true
    timestamp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageLogMaxAggregateInputType = {
    id?: true
    message?: true
    timestamp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageLogCountAggregateInputType = {
    id?: true
    message?: true
    timestamp?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MessageLogAggregateArgs = {
    /**
     * Filter which MessageLog to aggregate.
     */
    where?: MessageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageLogs to fetch.
     */
    orderBy?: Enumerable<MessageLogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MessageLogs
    **/
    _count?: true | MessageLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageLogMaxAggregateInputType
  }

  export type GetMessageLogAggregateType<T extends MessageLogAggregateArgs> = {
        [P in keyof T & keyof AggregateMessageLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessageLog[P]>
      : GetScalarType<T[P], AggregateMessageLog[P]>
  }




  export type MessageLogGroupByArgs = {
    where?: MessageLogWhereInput
    orderBy?: Enumerable<MessageLogOrderByWithAggregationInput>
    by: MessageLogScalarFieldEnum[]
    having?: MessageLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageLogCountAggregateInputType | true
    _avg?: MessageLogAvgAggregateInputType
    _sum?: MessageLogSumAggregateInputType
    _min?: MessageLogMinAggregateInputType
    _max?: MessageLogMaxAggregateInputType
  }


  export type MessageLogGroupByOutputType = {
    id: number
    message: string
    timestamp: Date
    createdAt: Date
    updatedAt: Date
    _count: MessageLogCountAggregateOutputType | null
    _avg: MessageLogAvgAggregateOutputType | null
    _sum: MessageLogSumAggregateOutputType | null
    _min: MessageLogMinAggregateOutputType | null
    _max: MessageLogMaxAggregateOutputType | null
  }

  type GetMessageLogGroupByPayload<T extends MessageLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<MessageLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageLogGroupByOutputType[P]>
            : GetScalarType<T[P], MessageLogGroupByOutputType[P]>
        }
      >
    >


  export type MessageLogSelect = {
    id?: boolean
    message?: boolean
    timestamp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type MessageLogGetPayload<S extends boolean | null | undefined | MessageLogArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? MessageLog :
    S extends undefined ? never :
    S extends { include: any } & (MessageLogArgs | MessageLogFindManyArgs)
    ? MessageLog 
    : S extends { select: any } & (MessageLogArgs | MessageLogFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof MessageLog ? MessageLog[P] : never
  } 
      : MessageLog


  type MessageLogCountArgs = 
    Omit<MessageLogFindManyArgs, 'select' | 'include'> & {
      select?: MessageLogCountAggregateInputType | true
    }

  export interface MessageLogDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one MessageLog that matches the filter.
     * @param {MessageLogFindUniqueArgs} args - Arguments to find a MessageLog
     * @example
     * // Get one MessageLog
     * const messageLog = await prisma.messageLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MessageLogFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MessageLogFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'MessageLog'> extends True ? Prisma__MessageLogClient<MessageLogGetPayload<T>> : Prisma__MessageLogClient<MessageLogGetPayload<T> | null, null>

    /**
     * Find one MessageLog that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MessageLogFindUniqueOrThrowArgs} args - Arguments to find a MessageLog
     * @example
     * // Get one MessageLog
     * const messageLog = await prisma.messageLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MessageLogFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MessageLogFindUniqueOrThrowArgs>
    ): Prisma__MessageLogClient<MessageLogGetPayload<T>>

    /**
     * Find the first MessageLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLogFindFirstArgs} args - Arguments to find a MessageLog
     * @example
     * // Get one MessageLog
     * const messageLog = await prisma.messageLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MessageLogFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MessageLogFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'MessageLog'> extends True ? Prisma__MessageLogClient<MessageLogGetPayload<T>> : Prisma__MessageLogClient<MessageLogGetPayload<T> | null, null>

    /**
     * Find the first MessageLog that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLogFindFirstOrThrowArgs} args - Arguments to find a MessageLog
     * @example
     * // Get one MessageLog
     * const messageLog = await prisma.messageLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MessageLogFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MessageLogFindFirstOrThrowArgs>
    ): Prisma__MessageLogClient<MessageLogGetPayload<T>>

    /**
     * Find zero or more MessageLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLogFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageLogs
     * const messageLogs = await prisma.messageLog.findMany()
     * 
     * // Get first 10 MessageLogs
     * const messageLogs = await prisma.messageLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageLogWithIdOnly = await prisma.messageLog.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MessageLogFindManyArgs>(
      args?: SelectSubset<T, MessageLogFindManyArgs>
    ): Prisma.PrismaPromise<Array<MessageLogGetPayload<T>>>

    /**
     * Create a MessageLog.
     * @param {MessageLogCreateArgs} args - Arguments to create a MessageLog.
     * @example
     * // Create one MessageLog
     * const MessageLog = await prisma.messageLog.create({
     *   data: {
     *     // ... data to create a MessageLog
     *   }
     * })
     * 
    **/
    create<T extends MessageLogCreateArgs>(
      args: SelectSubset<T, MessageLogCreateArgs>
    ): Prisma__MessageLogClient<MessageLogGetPayload<T>>

    /**
     * Delete a MessageLog.
     * @param {MessageLogDeleteArgs} args - Arguments to delete one MessageLog.
     * @example
     * // Delete one MessageLog
     * const MessageLog = await prisma.messageLog.delete({
     *   where: {
     *     // ... filter to delete one MessageLog
     *   }
     * })
     * 
    **/
    delete<T extends MessageLogDeleteArgs>(
      args: SelectSubset<T, MessageLogDeleteArgs>
    ): Prisma__MessageLogClient<MessageLogGetPayload<T>>

    /**
     * Update one MessageLog.
     * @param {MessageLogUpdateArgs} args - Arguments to update one MessageLog.
     * @example
     * // Update one MessageLog
     * const messageLog = await prisma.messageLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MessageLogUpdateArgs>(
      args: SelectSubset<T, MessageLogUpdateArgs>
    ): Prisma__MessageLogClient<MessageLogGetPayload<T>>

    /**
     * Delete zero or more MessageLogs.
     * @param {MessageLogDeleteManyArgs} args - Arguments to filter MessageLogs to delete.
     * @example
     * // Delete a few MessageLogs
     * const { count } = await prisma.messageLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MessageLogDeleteManyArgs>(
      args?: SelectSubset<T, MessageLogDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageLogs
     * const messageLog = await prisma.messageLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MessageLogUpdateManyArgs>(
      args: SelectSubset<T, MessageLogUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MessageLog.
     * @param {MessageLogUpsertArgs} args - Arguments to update or create a MessageLog.
     * @example
     * // Update or create a MessageLog
     * const messageLog = await prisma.messageLog.upsert({
     *   create: {
     *     // ... data to create a MessageLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageLog we want to update
     *   }
     * })
    **/
    upsert<T extends MessageLogUpsertArgs>(
      args: SelectSubset<T, MessageLogUpsertArgs>
    ): Prisma__MessageLogClient<MessageLogGetPayload<T>>

    /**
     * Count the number of MessageLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLogCountArgs} args - Arguments to filter MessageLogs to count.
     * @example
     * // Count the number of MessageLogs
     * const count = await prisma.messageLog.count({
     *   where: {
     *     // ... the filter for the MessageLogs we want to count
     *   }
     * })
    **/
    count<T extends MessageLogCountArgs>(
      args?: Subset<T, MessageLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessageLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageLogAggregateArgs>(args: Subset<T, MessageLogAggregateArgs>): Prisma.PrismaPromise<GetMessageLogAggregateType<T>>

    /**
     * Group by MessageLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageLogGroupByArgs['orderBy'] }
        : { orderBy?: MessageLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for MessageLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MessageLogClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * MessageLog base type for findUnique actions
   */
  export type MessageLogFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect | null
    /**
     * Filter, which MessageLog to fetch.
     */
    where: MessageLogWhereUniqueInput
  }

  /**
   * MessageLog findUnique
   */
  export interface MessageLogFindUniqueArgs extends MessageLogFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MessageLog findUniqueOrThrow
   */
  export type MessageLogFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect | null
    /**
     * Filter, which MessageLog to fetch.
     */
    where: MessageLogWhereUniqueInput
  }


  /**
   * MessageLog base type for findFirst actions
   */
  export type MessageLogFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect | null
    /**
     * Filter, which MessageLog to fetch.
     */
    where?: MessageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageLogs to fetch.
     */
    orderBy?: Enumerable<MessageLogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageLogs.
     */
    cursor?: MessageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageLogs.
     */
    distinct?: Enumerable<MessageLogScalarFieldEnum>
  }

  /**
   * MessageLog findFirst
   */
  export interface MessageLogFindFirstArgs extends MessageLogFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MessageLog findFirstOrThrow
   */
  export type MessageLogFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect | null
    /**
     * Filter, which MessageLog to fetch.
     */
    where?: MessageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageLogs to fetch.
     */
    orderBy?: Enumerable<MessageLogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageLogs.
     */
    cursor?: MessageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageLogs.
     */
    distinct?: Enumerable<MessageLogScalarFieldEnum>
  }


  /**
   * MessageLog findMany
   */
  export type MessageLogFindManyArgs = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect | null
    /**
     * Filter, which MessageLogs to fetch.
     */
    where?: MessageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageLogs to fetch.
     */
    orderBy?: Enumerable<MessageLogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MessageLogs.
     */
    cursor?: MessageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageLogs.
     */
    skip?: number
    distinct?: Enumerable<MessageLogScalarFieldEnum>
  }


  /**
   * MessageLog create
   */
  export type MessageLogCreateArgs = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect | null
    /**
     * The data needed to create a MessageLog.
     */
    data: XOR<MessageLogCreateInput, MessageLogUncheckedCreateInput>
  }


  /**
   * MessageLog update
   */
  export type MessageLogUpdateArgs = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect | null
    /**
     * The data needed to update a MessageLog.
     */
    data: XOR<MessageLogUpdateInput, MessageLogUncheckedUpdateInput>
    /**
     * Choose, which MessageLog to update.
     */
    where: MessageLogWhereUniqueInput
  }


  /**
   * MessageLog updateMany
   */
  export type MessageLogUpdateManyArgs = {
    /**
     * The data used to update MessageLogs.
     */
    data: XOR<MessageLogUpdateManyMutationInput, MessageLogUncheckedUpdateManyInput>
    /**
     * Filter which MessageLogs to update
     */
    where?: MessageLogWhereInput
  }


  /**
   * MessageLog upsert
   */
  export type MessageLogUpsertArgs = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect | null
    /**
     * The filter to search for the MessageLog to update in case it exists.
     */
    where: MessageLogWhereUniqueInput
    /**
     * In case the MessageLog found by the `where` argument doesn't exist, create a new MessageLog with this data.
     */
    create: XOR<MessageLogCreateInput, MessageLogUncheckedCreateInput>
    /**
     * In case the MessageLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageLogUpdateInput, MessageLogUncheckedUpdateInput>
  }


  /**
   * MessageLog delete
   */
  export type MessageLogDeleteArgs = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect | null
    /**
     * Filter which MessageLog to delete.
     */
    where: MessageLogWhereUniqueInput
  }


  /**
   * MessageLog deleteMany
   */
  export type MessageLogDeleteManyArgs = {
    /**
     * Filter which MessageLogs to delete
     */
    where?: MessageLogWhereInput
  }


  /**
   * MessageLog without action
   */
  export type MessageLogArgs = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect | null
  }



  /**
   * Model Note
   */


  export type AggregateNote = {
    _count: NoteCountAggregateOutputType | null
    _avg: NoteAvgAggregateOutputType | null
    _sum: NoteSumAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  export type NoteAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NoteSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NoteMinAggregateOutputType = {
    id: number | null
    note: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NoteMaxAggregateOutputType = {
    id: number | null
    note: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NoteCountAggregateOutputType = {
    id: number
    note: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NoteAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NoteSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NoteMinAggregateInputType = {
    id?: true
    note?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NoteMaxAggregateInputType = {
    id?: true
    note?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NoteCountAggregateInputType = {
    id?: true
    note?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NoteAggregateArgs = {
    /**
     * Filter which Note to aggregate.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: Enumerable<NoteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notes
    **/
    _count?: true | NoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoteMaxAggregateInputType
  }

  export type GetNoteAggregateType<T extends NoteAggregateArgs> = {
        [P in keyof T & keyof AggregateNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNote[P]>
      : GetScalarType<T[P], AggregateNote[P]>
  }




  export type NoteGroupByArgs = {
    where?: NoteWhereInput
    orderBy?: Enumerable<NoteOrderByWithAggregationInput>
    by: NoteScalarFieldEnum[]
    having?: NoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoteCountAggregateInputType | true
    _avg?: NoteAvgAggregateInputType
    _sum?: NoteSumAggregateInputType
    _min?: NoteMinAggregateInputType
    _max?: NoteMaxAggregateInputType
  }


  export type NoteGroupByOutputType = {
    id: number
    note: string
    userId: number
    createdAt: Date
    updatedAt: Date
    _count: NoteCountAggregateOutputType | null
    _avg: NoteAvgAggregateOutputType | null
    _sum: NoteSumAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  type GetNoteGroupByPayload<T extends NoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<NoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteGroupByOutputType[P]>
            : GetScalarType<T[P], NoteGroupByOutputType[P]>
        }
      >
    >


  export type NoteSelect = {
    id?: boolean
    note?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserArgs
  }


  export type NoteInclude = {
    user?: boolean | UserArgs
  }

  export type NoteGetPayload<S extends boolean | null | undefined | NoteArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Note :
    S extends undefined ? never :
    S extends { include: any } & (NoteArgs | NoteFindManyArgs)
    ? Note  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (NoteArgs | NoteFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof Note ? Note[P] : never
  } 
      : Note


  type NoteCountArgs = 
    Omit<NoteFindManyArgs, 'select' | 'include'> & {
      select?: NoteCountAggregateInputType | true
    }

  export interface NoteDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Note that matches the filter.
     * @param {NoteFindUniqueArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NoteFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, NoteFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Note'> extends True ? Prisma__NoteClient<NoteGetPayload<T>> : Prisma__NoteClient<NoteGetPayload<T> | null, null>

    /**
     * Find one Note that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {NoteFindUniqueOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NoteFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, NoteFindUniqueOrThrowArgs>
    ): Prisma__NoteClient<NoteGetPayload<T>>

    /**
     * Find the first Note that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NoteFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, NoteFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Note'> extends True ? Prisma__NoteClient<NoteGetPayload<T>> : Prisma__NoteClient<NoteGetPayload<T> | null, null>

    /**
     * Find the first Note that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NoteFindFirstOrThrowArgs>(
      args?: SelectSubset<T, NoteFindFirstOrThrowArgs>
    ): Prisma__NoteClient<NoteGetPayload<T>>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.note.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.note.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noteWithIdOnly = await prisma.note.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NoteFindManyArgs>(
      args?: SelectSubset<T, NoteFindManyArgs>
    ): Prisma.PrismaPromise<Array<NoteGetPayload<T>>>

    /**
     * Create a Note.
     * @param {NoteCreateArgs} args - Arguments to create a Note.
     * @example
     * // Create one Note
     * const Note = await prisma.note.create({
     *   data: {
     *     // ... data to create a Note
     *   }
     * })
     * 
    **/
    create<T extends NoteCreateArgs>(
      args: SelectSubset<T, NoteCreateArgs>
    ): Prisma__NoteClient<NoteGetPayload<T>>

    /**
     * Delete a Note.
     * @param {NoteDeleteArgs} args - Arguments to delete one Note.
     * @example
     * // Delete one Note
     * const Note = await prisma.note.delete({
     *   where: {
     *     // ... filter to delete one Note
     *   }
     * })
     * 
    **/
    delete<T extends NoteDeleteArgs>(
      args: SelectSubset<T, NoteDeleteArgs>
    ): Prisma__NoteClient<NoteGetPayload<T>>

    /**
     * Update one Note.
     * @param {NoteUpdateArgs} args - Arguments to update one Note.
     * @example
     * // Update one Note
     * const note = await prisma.note.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NoteUpdateArgs>(
      args: SelectSubset<T, NoteUpdateArgs>
    ): Prisma__NoteClient<NoteGetPayload<T>>

    /**
     * Delete zero or more Notes.
     * @param {NoteDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.note.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NoteDeleteManyArgs>(
      args?: SelectSubset<T, NoteDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NoteUpdateManyArgs>(
      args: SelectSubset<T, NoteUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Note.
     * @param {NoteUpsertArgs} args - Arguments to update or create a Note.
     * @example
     * // Update or create a Note
     * const note = await prisma.note.upsert({
     *   create: {
     *     // ... data to create a Note
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Note we want to update
     *   }
     * })
    **/
    upsert<T extends NoteUpsertArgs>(
      args: SelectSubset<T, NoteUpsertArgs>
    ): Prisma__NoteClient<NoteGetPayload<T>>

    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.note.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends NoteCountArgs>(
      args?: Subset<T, NoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NoteAggregateArgs>(args: Subset<T, NoteAggregateArgs>): Prisma.PrismaPromise<GetNoteAggregateType<T>>

    /**
     * Group by Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoteGroupByArgs['orderBy'] }
        : { orderBy?: NoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Note.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__NoteClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Note base type for findUnique actions
   */
  export type NoteFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NoteInclude | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findUnique
   */
  export interface NoteFindUniqueArgs extends NoteFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Note findUniqueOrThrow
   */
  export type NoteFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NoteInclude | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }


  /**
   * Note base type for findFirst actions
   */
  export type NoteFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NoteInclude | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: Enumerable<NoteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: Enumerable<NoteScalarFieldEnum>
  }

  /**
   * Note findFirst
   */
  export interface NoteFindFirstArgs extends NoteFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Note findFirstOrThrow
   */
  export type NoteFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NoteInclude | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: Enumerable<NoteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: Enumerable<NoteScalarFieldEnum>
  }


  /**
   * Note findMany
   */
  export type NoteFindManyArgs = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NoteInclude | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: Enumerable<NoteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    distinct?: Enumerable<NoteScalarFieldEnum>
  }


  /**
   * Note create
   */
  export type NoteCreateArgs = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NoteInclude | null
    /**
     * The data needed to create a Note.
     */
    data: XOR<NoteCreateInput, NoteUncheckedCreateInput>
  }


  /**
   * Note update
   */
  export type NoteUpdateArgs = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NoteInclude | null
    /**
     * The data needed to update a Note.
     */
    data: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
    /**
     * Choose, which Note to update.
     */
    where: NoteWhereUniqueInput
  }


  /**
   * Note updateMany
   */
  export type NoteUpdateManyArgs = {
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
  }


  /**
   * Note upsert
   */
  export type NoteUpsertArgs = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NoteInclude | null
    /**
     * The filter to search for the Note to update in case it exists.
     */
    where: NoteWhereUniqueInput
    /**
     * In case the Note found by the `where` argument doesn't exist, create a new Note with this data.
     */
    create: XOR<NoteCreateInput, NoteUncheckedCreateInput>
    /**
     * In case the Note was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
  }


  /**
   * Note delete
   */
  export type NoteDeleteArgs = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NoteInclude | null
    /**
     * Filter which Note to delete.
     */
    where: NoteWhereUniqueInput
  }


  /**
   * Note deleteMany
   */
  export type NoteDeleteManyArgs = {
    /**
     * Filter which Notes to delete
     */
    where?: NoteWhereInput
  }


  /**
   * Note without action
   */
  export type NoteArgs = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NoteInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const MessageLogScalarFieldEnum: {
    id: 'id',
    message: 'message',
    timestamp: 'timestamp',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MessageLogScalarFieldEnum = (typeof MessageLogScalarFieldEnum)[keyof typeof MessageLogScalarFieldEnum]


  export const NoteScalarFieldEnum: {
    id: 'id',
    note: 'note',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NoteScalarFieldEnum = (typeof NoteScalarFieldEnum)[keyof typeof NoteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserJoinedScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    timestamp: 'timestamp',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserJoinedScalarFieldEnum = (typeof UserJoinedScalarFieldEnum)[keyof typeof UserJoinedScalarFieldEnum]


  export const UserLeftScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    timestamp: 'timestamp',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserLeftScalarFieldEnum = (typeof UserLeftScalarFieldEnum)[keyof typeof UserLeftScalarFieldEnum]


  export const UserMessageScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    message: 'message',
    timestamp: 'timestamp',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserMessageScalarFieldEnum = (typeof UserMessageScalarFieldEnum)[keyof typeof UserMessageScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    displayName: 'displayName',
    mod: 'mod',
    subscriber: 'subscriber',
    lastSeen: 'lastSeen',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    username?: StringFilter | string
    password?: StringNullableFilter | string | null
    displayName?: StringFilter | string
    mod?: BoolFilter | boolean
    subscriber?: BoolFilter | boolean
    lastSeen?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    joinedChat?: UserJoinedListRelationFilter
    leftChat?: UserLeftListRelationFilter
    messages?: UserMessageListRelationFilter
    notes?: NoteListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    mod?: SortOrder
    subscriber?: SortOrder
    lastSeen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    joinedChat?: UserJoinedOrderByRelationAggregateInput
    leftChat?: UserLeftOrderByRelationAggregateInput
    messages?: UserMessageOrderByRelationAggregateInput
    notes?: NoteOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    username?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    mod?: SortOrder
    subscriber?: SortOrder
    lastSeen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    username?: StringWithAggregatesFilter | string
    password?: StringNullableWithAggregatesFilter | string | null
    displayName?: StringWithAggregatesFilter | string
    mod?: BoolWithAggregatesFilter | boolean
    subscriber?: BoolWithAggregatesFilter | boolean
    lastSeen?: DateTimeWithAggregatesFilter | Date | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserJoinedWhereInput = {
    AND?: Enumerable<UserJoinedWhereInput>
    OR?: Enumerable<UserJoinedWhereInput>
    NOT?: Enumerable<UserJoinedWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    timestamp?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserJoinedOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserJoinedWhereUniqueInput = {
    id?: number
  }

  export type UserJoinedOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserJoinedCountOrderByAggregateInput
    _avg?: UserJoinedAvgOrderByAggregateInput
    _max?: UserJoinedMaxOrderByAggregateInput
    _min?: UserJoinedMinOrderByAggregateInput
    _sum?: UserJoinedSumOrderByAggregateInput
  }

  export type UserJoinedScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserJoinedScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserJoinedScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserJoinedScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    timestamp?: DateTimeWithAggregatesFilter | Date | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserLeftWhereInput = {
    AND?: Enumerable<UserLeftWhereInput>
    OR?: Enumerable<UserLeftWhereInput>
    NOT?: Enumerable<UserLeftWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    timestamp?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserLeftOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserLeftWhereUniqueInput = {
    id?: number
  }

  export type UserLeftOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserLeftCountOrderByAggregateInput
    _avg?: UserLeftAvgOrderByAggregateInput
    _max?: UserLeftMaxOrderByAggregateInput
    _min?: UserLeftMinOrderByAggregateInput
    _sum?: UserLeftSumOrderByAggregateInput
  }

  export type UserLeftScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserLeftScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserLeftScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserLeftScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    timestamp?: DateTimeWithAggregatesFilter | Date | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserMessageWhereInput = {
    AND?: Enumerable<UserMessageWhereInput>
    OR?: Enumerable<UserMessageWhereInput>
    NOT?: Enumerable<UserMessageWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    message?: StringFilter | string
    timestamp?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserMessageOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserMessageWhereUniqueInput = {
    id?: number
  }

  export type UserMessageOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserMessageCountOrderByAggregateInput
    _avg?: UserMessageAvgOrderByAggregateInput
    _max?: UserMessageMaxOrderByAggregateInput
    _min?: UserMessageMinOrderByAggregateInput
    _sum?: UserMessageSumOrderByAggregateInput
  }

  export type UserMessageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserMessageScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserMessageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserMessageScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    message?: StringWithAggregatesFilter | string
    timestamp?: DateTimeWithAggregatesFilter | Date | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type MessageLogWhereInput = {
    AND?: Enumerable<MessageLogWhereInput>
    OR?: Enumerable<MessageLogWhereInput>
    NOT?: Enumerable<MessageLogWhereInput>
    id?: IntFilter | number
    message?: StringFilter | string
    timestamp?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type MessageLogOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageLogWhereUniqueInput = {
    id?: number
  }

  export type MessageLogOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MessageLogCountOrderByAggregateInput
    _avg?: MessageLogAvgOrderByAggregateInput
    _max?: MessageLogMaxOrderByAggregateInput
    _min?: MessageLogMinOrderByAggregateInput
    _sum?: MessageLogSumOrderByAggregateInput
  }

  export type MessageLogScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MessageLogScalarWhereWithAggregatesInput>
    OR?: Enumerable<MessageLogScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MessageLogScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    message?: StringWithAggregatesFilter | string
    timestamp?: DateTimeWithAggregatesFilter | Date | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type NoteWhereInput = {
    AND?: Enumerable<NoteWhereInput>
    OR?: Enumerable<NoteWhereInput>
    NOT?: Enumerable<NoteWhereInput>
    id?: IntFilter | number
    note?: StringFilter | string
    userId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type NoteOrderByWithRelationInput = {
    id?: SortOrder
    note?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NoteWhereUniqueInput = {
    id?: number
  }

  export type NoteOrderByWithAggregationInput = {
    id?: SortOrder
    note?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NoteCountOrderByAggregateInput
    _avg?: NoteAvgOrderByAggregateInput
    _max?: NoteMaxOrderByAggregateInput
    _min?: NoteMinOrderByAggregateInput
    _sum?: NoteSumOrderByAggregateInput
  }

  export type NoteScalarWhereWithAggregatesInput = {
    AND?: Enumerable<NoteScalarWhereWithAggregatesInput>
    OR?: Enumerable<NoteScalarWhereWithAggregatesInput>
    NOT?: Enumerable<NoteScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    note?: StringWithAggregatesFilter | string
    userId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserCreateInput = {
    username: string
    password?: string | null
    displayName?: string
    mod?: boolean
    subscriber?: boolean
    lastSeen?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    joinedChat?: UserJoinedCreateNestedManyWithoutUserInput
    leftChat?: UserLeftCreateNestedManyWithoutUserInput
    messages?: UserMessageCreateNestedManyWithoutUserInput
    notes?: NoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password?: string | null
    displayName?: string
    mod?: boolean
    subscriber?: boolean
    lastSeen?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    joinedChat?: UserJoinedUncheckedCreateNestedManyWithoutUserInput
    leftChat?: UserLeftUncheckedCreateNestedManyWithoutUserInput
    messages?: UserMessageUncheckedCreateNestedManyWithoutUserInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    mod?: BoolFieldUpdateOperationsInput | boolean
    subscriber?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    joinedChat?: UserJoinedUpdateManyWithoutUserNestedInput
    leftChat?: UserLeftUpdateManyWithoutUserNestedInput
    messages?: UserMessageUpdateManyWithoutUserNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    mod?: BoolFieldUpdateOperationsInput | boolean
    subscriber?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    joinedChat?: UserJoinedUncheckedUpdateManyWithoutUserNestedInput
    leftChat?: UserLeftUncheckedUpdateManyWithoutUserNestedInput
    messages?: UserMessageUncheckedUpdateManyWithoutUserNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    mod?: BoolFieldUpdateOperationsInput | boolean
    subscriber?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    mod?: BoolFieldUpdateOperationsInput | boolean
    subscriber?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserJoinedCreateInput = {
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutJoinedChatInput
  }

  export type UserJoinedUncheckedCreateInput = {
    id?: number
    userId: number
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserJoinedUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutJoinedChatNestedInput
  }

  export type UserJoinedUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserJoinedUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserJoinedUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLeftCreateInput = {
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLeftChatInput
  }

  export type UserLeftUncheckedCreateInput = {
    id?: number
    userId: number
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserLeftUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLeftChatNestedInput
  }

  export type UserLeftUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLeftUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLeftUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMessageCreateInput = {
    message: string
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMessagesInput
  }

  export type UserMessageUncheckedCreateInput = {
    id?: number
    userId: number
    message: string
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserMessageUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type UserMessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMessageUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageLogCreateInput = {
    message: string
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageLogUncheckedCreateInput = {
    id?: number
    message: string
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageLogUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageLogUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteCreateInput = {
    note: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateInput = {
    id?: number
    note: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteUpdateInput = {
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    note?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUpdateManyMutationInput = {
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    note?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type UserJoinedListRelationFilter = {
    every?: UserJoinedWhereInput
    some?: UserJoinedWhereInput
    none?: UserJoinedWhereInput
  }

  export type UserLeftListRelationFilter = {
    every?: UserLeftWhereInput
    some?: UserLeftWhereInput
    none?: UserLeftWhereInput
  }

  export type UserMessageListRelationFilter = {
    every?: UserMessageWhereInput
    some?: UserMessageWhereInput
    none?: UserMessageWhereInput
  }

  export type NoteListRelationFilter = {
    every?: NoteWhereInput
    some?: NoteWhereInput
    none?: NoteWhereInput
  }

  export type UserJoinedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserLeftOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    mod?: SortOrder
    subscriber?: SortOrder
    lastSeen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    mod?: SortOrder
    subscriber?: SortOrder
    lastSeen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    mod?: SortOrder
    subscriber?: SortOrder
    lastSeen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserJoinedCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserJoinedAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserJoinedMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserJoinedMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserJoinedSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserLeftCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserLeftAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserLeftMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserLeftMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserLeftSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserMessageCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMessageAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMessageMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMessageSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type MessageLogCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageLogAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MessageLogMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageLogMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageLogSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NoteCountOrderByAggregateInput = {
    id?: SortOrder
    note?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoteAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type NoteMaxOrderByAggregateInput = {
    id?: SortOrder
    note?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoteMinOrderByAggregateInput = {
    id?: SortOrder
    note?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoteSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserJoinedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserJoinedCreateWithoutUserInput>, Enumerable<UserJoinedUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserJoinedCreateOrConnectWithoutUserInput>
    connect?: Enumerable<UserJoinedWhereUniqueInput>
  }

  export type UserLeftCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserLeftCreateWithoutUserInput>, Enumerable<UserLeftUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserLeftCreateOrConnectWithoutUserInput>
    connect?: Enumerable<UserLeftWhereUniqueInput>
  }

  export type UserMessageCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserMessageCreateWithoutUserInput>, Enumerable<UserMessageUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserMessageCreateOrConnectWithoutUserInput>
    connect?: Enumerable<UserMessageWhereUniqueInput>
  }

  export type NoteCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<NoteCreateWithoutUserInput>, Enumerable<NoteUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<NoteCreateOrConnectWithoutUserInput>
    connect?: Enumerable<NoteWhereUniqueInput>
  }

  export type UserJoinedUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserJoinedCreateWithoutUserInput>, Enumerable<UserJoinedUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserJoinedCreateOrConnectWithoutUserInput>
    connect?: Enumerable<UserJoinedWhereUniqueInput>
  }

  export type UserLeftUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserLeftCreateWithoutUserInput>, Enumerable<UserLeftUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserLeftCreateOrConnectWithoutUserInput>
    connect?: Enumerable<UserLeftWhereUniqueInput>
  }

  export type UserMessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserMessageCreateWithoutUserInput>, Enumerable<UserMessageUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserMessageCreateOrConnectWithoutUserInput>
    connect?: Enumerable<UserMessageWhereUniqueInput>
  }

  export type NoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<NoteCreateWithoutUserInput>, Enumerable<NoteUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<NoteCreateOrConnectWithoutUserInput>
    connect?: Enumerable<NoteWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserJoinedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<UserJoinedCreateWithoutUserInput>, Enumerable<UserJoinedUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserJoinedCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserJoinedUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<UserJoinedWhereUniqueInput>
    disconnect?: Enumerable<UserJoinedWhereUniqueInput>
    delete?: Enumerable<UserJoinedWhereUniqueInput>
    connect?: Enumerable<UserJoinedWhereUniqueInput>
    update?: Enumerable<UserJoinedUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserJoinedUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserJoinedScalarWhereInput>
  }

  export type UserLeftUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<UserLeftCreateWithoutUserInput>, Enumerable<UserLeftUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserLeftCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserLeftUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<UserLeftWhereUniqueInput>
    disconnect?: Enumerable<UserLeftWhereUniqueInput>
    delete?: Enumerable<UserLeftWhereUniqueInput>
    connect?: Enumerable<UserLeftWhereUniqueInput>
    update?: Enumerable<UserLeftUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserLeftUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserLeftScalarWhereInput>
  }

  export type UserMessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<UserMessageCreateWithoutUserInput>, Enumerable<UserMessageUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserMessageCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserMessageUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<UserMessageWhereUniqueInput>
    disconnect?: Enumerable<UserMessageWhereUniqueInput>
    delete?: Enumerable<UserMessageWhereUniqueInput>
    connect?: Enumerable<UserMessageWhereUniqueInput>
    update?: Enumerable<UserMessageUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserMessageUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserMessageScalarWhereInput>
  }

  export type NoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<NoteCreateWithoutUserInput>, Enumerable<NoteUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<NoteCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<NoteUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<NoteWhereUniqueInput>
    disconnect?: Enumerable<NoteWhereUniqueInput>
    delete?: Enumerable<NoteWhereUniqueInput>
    connect?: Enumerable<NoteWhereUniqueInput>
    update?: Enumerable<NoteUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<NoteUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<NoteScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserJoinedUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<UserJoinedCreateWithoutUserInput>, Enumerable<UserJoinedUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserJoinedCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserJoinedUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<UserJoinedWhereUniqueInput>
    disconnect?: Enumerable<UserJoinedWhereUniqueInput>
    delete?: Enumerable<UserJoinedWhereUniqueInput>
    connect?: Enumerable<UserJoinedWhereUniqueInput>
    update?: Enumerable<UserJoinedUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserJoinedUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserJoinedScalarWhereInput>
  }

  export type UserLeftUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<UserLeftCreateWithoutUserInput>, Enumerable<UserLeftUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserLeftCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserLeftUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<UserLeftWhereUniqueInput>
    disconnect?: Enumerable<UserLeftWhereUniqueInput>
    delete?: Enumerable<UserLeftWhereUniqueInput>
    connect?: Enumerable<UserLeftWhereUniqueInput>
    update?: Enumerable<UserLeftUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserLeftUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserLeftScalarWhereInput>
  }

  export type UserMessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<UserMessageCreateWithoutUserInput>, Enumerable<UserMessageUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserMessageCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserMessageUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<UserMessageWhereUniqueInput>
    disconnect?: Enumerable<UserMessageWhereUniqueInput>
    delete?: Enumerable<UserMessageWhereUniqueInput>
    connect?: Enumerable<UserMessageWhereUniqueInput>
    update?: Enumerable<UserMessageUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserMessageUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserMessageScalarWhereInput>
  }

  export type NoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<NoteCreateWithoutUserInput>, Enumerable<NoteUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<NoteCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<NoteUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<NoteWhereUniqueInput>
    disconnect?: Enumerable<NoteWhereUniqueInput>
    delete?: Enumerable<NoteWhereUniqueInput>
    connect?: Enumerable<NoteWhereUniqueInput>
    update?: Enumerable<NoteUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<NoteUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<NoteScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutJoinedChatInput = {
    create?: XOR<UserCreateWithoutJoinedChatInput, UserUncheckedCreateWithoutJoinedChatInput>
    connectOrCreate?: UserCreateOrConnectWithoutJoinedChatInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutJoinedChatNestedInput = {
    create?: XOR<UserCreateWithoutJoinedChatInput, UserUncheckedCreateWithoutJoinedChatInput>
    connectOrCreate?: UserCreateOrConnectWithoutJoinedChatInput
    upsert?: UserUpsertWithoutJoinedChatInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutJoinedChatInput, UserUncheckedUpdateWithoutJoinedChatInput>
  }

  export type UserCreateNestedOneWithoutLeftChatInput = {
    create?: XOR<UserCreateWithoutLeftChatInput, UserUncheckedCreateWithoutLeftChatInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeftChatInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLeftChatNestedInput = {
    create?: XOR<UserCreateWithoutLeftChatInput, UserUncheckedCreateWithoutLeftChatInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeftChatInput
    upsert?: UserUpsertWithoutLeftChatInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutLeftChatInput, UserUncheckedUpdateWithoutLeftChatInput>
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserCreateNestedOneWithoutNotesInput = {
    create?: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotesInput
    upsert?: UserUpsertWithoutNotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutNotesInput, UserUncheckedUpdateWithoutNotesInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type UserJoinedCreateWithoutUserInput = {
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserJoinedUncheckedCreateWithoutUserInput = {
    id?: number
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserJoinedCreateOrConnectWithoutUserInput = {
    where: UserJoinedWhereUniqueInput
    create: XOR<UserJoinedCreateWithoutUserInput, UserJoinedUncheckedCreateWithoutUserInput>
  }

  export type UserLeftCreateWithoutUserInput = {
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserLeftUncheckedCreateWithoutUserInput = {
    id?: number
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserLeftCreateOrConnectWithoutUserInput = {
    where: UserLeftWhereUniqueInput
    create: XOR<UserLeftCreateWithoutUserInput, UserLeftUncheckedCreateWithoutUserInput>
  }

  export type UserMessageCreateWithoutUserInput = {
    message: string
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserMessageUncheckedCreateWithoutUserInput = {
    id?: number
    message: string
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserMessageCreateOrConnectWithoutUserInput = {
    where: UserMessageWhereUniqueInput
    create: XOR<UserMessageCreateWithoutUserInput, UserMessageUncheckedCreateWithoutUserInput>
  }

  export type NoteCreateWithoutUserInput = {
    note: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteUncheckedCreateWithoutUserInput = {
    id?: number
    note: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteCreateOrConnectWithoutUserInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput>
  }

  export type UserJoinedUpsertWithWhereUniqueWithoutUserInput = {
    where: UserJoinedWhereUniqueInput
    update: XOR<UserJoinedUpdateWithoutUserInput, UserJoinedUncheckedUpdateWithoutUserInput>
    create: XOR<UserJoinedCreateWithoutUserInput, UserJoinedUncheckedCreateWithoutUserInput>
  }

  export type UserJoinedUpdateWithWhereUniqueWithoutUserInput = {
    where: UserJoinedWhereUniqueInput
    data: XOR<UserJoinedUpdateWithoutUserInput, UserJoinedUncheckedUpdateWithoutUserInput>
  }

  export type UserJoinedUpdateManyWithWhereWithoutUserInput = {
    where: UserJoinedScalarWhereInput
    data: XOR<UserJoinedUpdateManyMutationInput, UserJoinedUncheckedUpdateManyWithoutJoinedChatInput>
  }

  export type UserJoinedScalarWhereInput = {
    AND?: Enumerable<UserJoinedScalarWhereInput>
    OR?: Enumerable<UserJoinedScalarWhereInput>
    NOT?: Enumerable<UserJoinedScalarWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    timestamp?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type UserLeftUpsertWithWhereUniqueWithoutUserInput = {
    where: UserLeftWhereUniqueInput
    update: XOR<UserLeftUpdateWithoutUserInput, UserLeftUncheckedUpdateWithoutUserInput>
    create: XOR<UserLeftCreateWithoutUserInput, UserLeftUncheckedCreateWithoutUserInput>
  }

  export type UserLeftUpdateWithWhereUniqueWithoutUserInput = {
    where: UserLeftWhereUniqueInput
    data: XOR<UserLeftUpdateWithoutUserInput, UserLeftUncheckedUpdateWithoutUserInput>
  }

  export type UserLeftUpdateManyWithWhereWithoutUserInput = {
    where: UserLeftScalarWhereInput
    data: XOR<UserLeftUpdateManyMutationInput, UserLeftUncheckedUpdateManyWithoutLeftChatInput>
  }

  export type UserLeftScalarWhereInput = {
    AND?: Enumerable<UserLeftScalarWhereInput>
    OR?: Enumerable<UserLeftScalarWhereInput>
    NOT?: Enumerable<UserLeftScalarWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    timestamp?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type UserMessageUpsertWithWhereUniqueWithoutUserInput = {
    where: UserMessageWhereUniqueInput
    update: XOR<UserMessageUpdateWithoutUserInput, UserMessageUncheckedUpdateWithoutUserInput>
    create: XOR<UserMessageCreateWithoutUserInput, UserMessageUncheckedCreateWithoutUserInput>
  }

  export type UserMessageUpdateWithWhereUniqueWithoutUserInput = {
    where: UserMessageWhereUniqueInput
    data: XOR<UserMessageUpdateWithoutUserInput, UserMessageUncheckedUpdateWithoutUserInput>
  }

  export type UserMessageUpdateManyWithWhereWithoutUserInput = {
    where: UserMessageScalarWhereInput
    data: XOR<UserMessageUpdateManyMutationInput, UserMessageUncheckedUpdateManyWithoutMessagesInput>
  }

  export type UserMessageScalarWhereInput = {
    AND?: Enumerable<UserMessageScalarWhereInput>
    OR?: Enumerable<UserMessageScalarWhereInput>
    NOT?: Enumerable<UserMessageScalarWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    message?: StringFilter | string
    timestamp?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type NoteUpsertWithWhereUniqueWithoutUserInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutUserInput, NoteUncheckedUpdateWithoutUserInput>
    create: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutUserInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutUserInput, NoteUncheckedUpdateWithoutUserInput>
  }

  export type NoteUpdateManyWithWhereWithoutUserInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutNotesInput>
  }

  export type NoteScalarWhereInput = {
    AND?: Enumerable<NoteScalarWhereInput>
    OR?: Enumerable<NoteScalarWhereInput>
    NOT?: Enumerable<NoteScalarWhereInput>
    id?: IntFilter | number
    note?: StringFilter | string
    userId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type UserCreateWithoutJoinedChatInput = {
    username: string
    password?: string | null
    displayName?: string
    mod?: boolean
    subscriber?: boolean
    lastSeen?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    leftChat?: UserLeftCreateNestedManyWithoutUserInput
    messages?: UserMessageCreateNestedManyWithoutUserInput
    notes?: NoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutJoinedChatInput = {
    id?: number
    username: string
    password?: string | null
    displayName?: string
    mod?: boolean
    subscriber?: boolean
    lastSeen?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    leftChat?: UserLeftUncheckedCreateNestedManyWithoutUserInput
    messages?: UserMessageUncheckedCreateNestedManyWithoutUserInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutJoinedChatInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJoinedChatInput, UserUncheckedCreateWithoutJoinedChatInput>
  }

  export type UserUpsertWithoutJoinedChatInput = {
    update: XOR<UserUpdateWithoutJoinedChatInput, UserUncheckedUpdateWithoutJoinedChatInput>
    create: XOR<UserCreateWithoutJoinedChatInput, UserUncheckedCreateWithoutJoinedChatInput>
  }

  export type UserUpdateWithoutJoinedChatInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    mod?: BoolFieldUpdateOperationsInput | boolean
    subscriber?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftChat?: UserLeftUpdateManyWithoutUserNestedInput
    messages?: UserMessageUpdateManyWithoutUserNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutJoinedChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    mod?: BoolFieldUpdateOperationsInput | boolean
    subscriber?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftChat?: UserLeftUncheckedUpdateManyWithoutUserNestedInput
    messages?: UserMessageUncheckedUpdateManyWithoutUserNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutLeftChatInput = {
    username: string
    password?: string | null
    displayName?: string
    mod?: boolean
    subscriber?: boolean
    lastSeen?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    joinedChat?: UserJoinedCreateNestedManyWithoutUserInput
    messages?: UserMessageCreateNestedManyWithoutUserInput
    notes?: NoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLeftChatInput = {
    id?: number
    username: string
    password?: string | null
    displayName?: string
    mod?: boolean
    subscriber?: boolean
    lastSeen?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    joinedChat?: UserJoinedUncheckedCreateNestedManyWithoutUserInput
    messages?: UserMessageUncheckedCreateNestedManyWithoutUserInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLeftChatInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLeftChatInput, UserUncheckedCreateWithoutLeftChatInput>
  }

  export type UserUpsertWithoutLeftChatInput = {
    update: XOR<UserUpdateWithoutLeftChatInput, UserUncheckedUpdateWithoutLeftChatInput>
    create: XOR<UserCreateWithoutLeftChatInput, UserUncheckedCreateWithoutLeftChatInput>
  }

  export type UserUpdateWithoutLeftChatInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    mod?: BoolFieldUpdateOperationsInput | boolean
    subscriber?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    joinedChat?: UserJoinedUpdateManyWithoutUserNestedInput
    messages?: UserMessageUpdateManyWithoutUserNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLeftChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    mod?: BoolFieldUpdateOperationsInput | boolean
    subscriber?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    joinedChat?: UserJoinedUncheckedUpdateManyWithoutUserNestedInput
    messages?: UserMessageUncheckedUpdateManyWithoutUserNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMessagesInput = {
    username: string
    password?: string | null
    displayName?: string
    mod?: boolean
    subscriber?: boolean
    lastSeen?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    joinedChat?: UserJoinedCreateNestedManyWithoutUserInput
    leftChat?: UserLeftCreateNestedManyWithoutUserInput
    notes?: NoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: number
    username: string
    password?: string | null
    displayName?: string
    mod?: boolean
    subscriber?: boolean
    lastSeen?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    joinedChat?: UserJoinedUncheckedCreateNestedManyWithoutUserInput
    leftChat?: UserLeftUncheckedCreateNestedManyWithoutUserInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    mod?: BoolFieldUpdateOperationsInput | boolean
    subscriber?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    joinedChat?: UserJoinedUpdateManyWithoutUserNestedInput
    leftChat?: UserLeftUpdateManyWithoutUserNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    mod?: BoolFieldUpdateOperationsInput | boolean
    subscriber?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    joinedChat?: UserJoinedUncheckedUpdateManyWithoutUserNestedInput
    leftChat?: UserLeftUncheckedUpdateManyWithoutUserNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNotesInput = {
    username: string
    password?: string | null
    displayName?: string
    mod?: boolean
    subscriber?: boolean
    lastSeen?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    joinedChat?: UserJoinedCreateNestedManyWithoutUserInput
    leftChat?: UserLeftCreateNestedManyWithoutUserInput
    messages?: UserMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotesInput = {
    id?: number
    username: string
    password?: string | null
    displayName?: string
    mod?: boolean
    subscriber?: boolean
    lastSeen?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    joinedChat?: UserJoinedUncheckedCreateNestedManyWithoutUserInput
    leftChat?: UserLeftUncheckedCreateNestedManyWithoutUserInput
    messages?: UserMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
  }

  export type UserUpsertWithoutNotesInput = {
    update: XOR<UserUpdateWithoutNotesInput, UserUncheckedUpdateWithoutNotesInput>
    create: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
  }

  export type UserUpdateWithoutNotesInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    mod?: BoolFieldUpdateOperationsInput | boolean
    subscriber?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    joinedChat?: UserJoinedUpdateManyWithoutUserNestedInput
    leftChat?: UserLeftUpdateManyWithoutUserNestedInput
    messages?: UserMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    mod?: BoolFieldUpdateOperationsInput | boolean
    subscriber?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    joinedChat?: UserJoinedUncheckedUpdateManyWithoutUserNestedInput
    leftChat?: UserLeftUncheckedUpdateManyWithoutUserNestedInput
    messages?: UserMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserJoinedUpdateWithoutUserInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserJoinedUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserJoinedUncheckedUpdateManyWithoutJoinedChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLeftUpdateWithoutUserInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLeftUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLeftUncheckedUpdateManyWithoutLeftChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMessageUpdateWithoutUserInput = {
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMessageUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMessageUncheckedUpdateManyWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUpdateWithoutUserInput = {
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateManyWithoutNotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}