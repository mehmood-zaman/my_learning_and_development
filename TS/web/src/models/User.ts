interface UserProps {
  name?: string;
  age?: number;
}
type CallBack = () => void;
export class User {
  event: { [key: string]: CallBack[] } = {};
  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: CallBack): void {
    const handlers = this.event[eventName] || [];

    handlers.push(callback);
    this.event[eventName] = handlers;
  }

  trigger(eventName): void {
    const handlers = this.event[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach((callback) => {
      callback();
    });
  }
}
