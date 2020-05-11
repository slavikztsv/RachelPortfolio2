export default class Utils {
  public static areEqualShallow(a: any, b: any) {
    for (const key in a) {
      if (!(key in b) || a[key] !== b[key]) {
        return false;
      }
    }
    for (const key in b) {
      if (!(key in a)) {
        return false;
      }
    }
    return true;
  }
}
