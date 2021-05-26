export class BandwidthPayer {
  public readonly authorization: Array<any>;
  constructor(
    actor: string = "boost.wax",
    permission: string = "paybw",
    public readonly account: string = "boost.wax",
    public readonly name: string = "noop"
  ) {
    this.authorization = [{ actor, permission }];
  }
}
