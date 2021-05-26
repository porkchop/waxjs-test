export class BandwidthPayer {
  public readonly authorization: { actor: string; permission: string };
  constructor(
    actor: string = "boost.wax",
    permission: string = "paybw",
    public readonly account: string = "boost.wax",
    public readonly name: string = "noop"
  ) {
    this.authorization = { actor, permission };
  }
}
