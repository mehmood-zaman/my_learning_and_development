type CallBack = () => void;
export class Events {
  event: { [key: string]: CallBack[] } = {};

  on(eventName: string, callBack: CallBack): void {
    const handler = this.event[eventName] || [];
    handler.push(callBack);
    this.event[eventName] = handler;
  }

  //Triger event
  triger(eventName: string): void {
    const handler = this.event[eventName];
    if (!handler || handler.length === 0) {
      return;
    }
    handler.forEach((callback) => {
      callback();
    });
  }
}
