export function keys<O extends object>(o: O): Array<keyof O> {
  return Object.keys(o) as Array<keyof O>;
}

export function values<O extends Record<string, any>>(o: O): InferValueOf<O>[] {
  return Object.values(o);
}

export function valuesWithoutNull<O extends Record<string, any>>(
  o: O
): NonNullable<InferValueOf<O>>[] {
  return Object.values(o).filter(filterNotNull);
}

export function entries<K extends string | number | symbol, V>(
  o: Record<K, V>
): Array<[K, V]> {
  return Object.entries(o) as Array<[K, V]>;
}
