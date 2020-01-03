export class LoggingService {
  log(message: any) {
    console.log('[Logger] ' + JSON.stringify(message));
  }
}
