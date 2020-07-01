export const extractValueAndSet = (setter: any) => (event: any) =>
  setter(event.target.value);
