class Boat {
  color: string = "red";

  get formattedColor(): string {
    return `This boat is ${this.color}`;
  }
  @logError("log Error when boat is sunk.")
  pilot(): void {
    console.log("Swish");
  }
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (error) {
        console.log("Oops, boat not was sunk");
      }
    };
  };
}
