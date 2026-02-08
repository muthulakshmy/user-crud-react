export class Validator {
  constructor(value) {
    this.value = value;
  }

  required() {
    return this.value !== "" && this.value !== null && this.value !== undefined;
  }

  email() {
    const regex =
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|in|net|org|us|co)$/;
    return regex.test(this.value);
  }

  phone() {
    const regex = /^\d{10}$/;
    return regex.test(this.value);
  }
}
