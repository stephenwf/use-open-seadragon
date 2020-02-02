export type UnpackEvent<
  Events extends { type: string; payload: any },
  Type
> = Events extends {
  type: Type;
}
  ? Events['payload']
  : never;

export type PartialOrNull<T> = {
  [P in keyof T]?: T[P] | null;
};

// type ExamplePayload =
//   | {
//       type: 'test-b';
//       payload: {
//         test: string;
//         another: number;
//       };
//     }
//   | {
//       type: 'test-a';
//       payload: {
//         test: number;
//         another2: number;
//       };
//     };
//
// type ExampleUD = PayloadWithUserData<ExamplePayload, { user: number }>;
//
// type ExampleType = PayloadTypes<ExamplePayload>; // 'test-a' | 'test-b'

export type PayloadWithUserData<
  Payloads extends { payload: any },
  UD,
  Source
> = Payloads & {
  payload: Payloads['payload'] & { userData: UD; eventSource: Source };
};

export type PayloadTypes<Payloads extends { type: any }> = Payloads['type'];

export type NonFunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];
export type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;

export type EventHandler<
  Type,
  Events extends { type: string; payload: any },
  Source = any,
  UD = any
> = Events extends { type: Type }
  ? PayloadWithUserData<Events, UD, Source>['payload']
  : never;
