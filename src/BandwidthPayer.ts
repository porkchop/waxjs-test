export class BandwidthPayer {
  public readonly authorization: { actor: string; permission: string };
  constructor(
    permission: string = "paybw",
    actor: string = "boost.wax",
    public readonly account: string = "boost.wax",
    public readonly name: string = "noop"
  ) {
    this.authorization.actor = actor;
    this.authorization.permission = permission;
  }
}
