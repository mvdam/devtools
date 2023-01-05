export type Predicate<A> = (a: A) => boolean;

export type None = false;
export const none: None = false;

export const StrictNull = {
  map<A, B>(a: A | None, fn: (a: A) => B): B | None {
    if (a === none) {
      return none;
    }

    return fn(a);
  },
  flatMap<A, B>(a: A | None, fn: (a: A) => B | None): B | None {
    if (a === none) {
      return none;
    }

    return fn(a);
  },
  orElse<A, B>(a: A | None, alternative: B): A | B {
    return a === none ? alternative : a;
  },
  lift<A, B>(fn: (a: A) => B): (a: A | None) => B | None {
    return (a: A | None) => StrictNull.map(a, fn);
  },
  toArray<A>(a: A | None): A[] {
    return a === none ? [] : [a];
  },
  filter<A>(a: A | None, predicate: Predicate<A>): A | None {
    if (a === none) {
      return none;
    }

    return predicate(a) ? a : none;
  },
};
