export class LogicalError extends Error {
  constructor(message) {
    super(message)
    this.name = "LogicalError"
  }
}
