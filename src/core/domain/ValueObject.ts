export interface ValueObjectProps {
  [index: string]: any;
}

export abstract class ValueObject<T extends ValueObjectProps> {
  public readonly props: T;

  constructor(props: T) {
    this.props = Object.freeze(props);
  }

  public equals(vo?: ValueObject<T>): boolean {
    if (vo === null || vo === undefined) {
      return false;
    }

    if (vo.props === undefined) {
      return false;
    }

    return shallowEqual(this.props, vo.props);
  }
}

export function shallowEqual(
  newObj: Record<string, any>,
  prevObj: Record<string, any>,
): boolean {
  if (Object.keys(newObj).length !== Object.keys(prevObj).length) {
    return false;
  }

  for (const key in newObj) {
    if (newObj[key] !== prevObj[key]) {
      return false;
    }
  }

  return true;
}
