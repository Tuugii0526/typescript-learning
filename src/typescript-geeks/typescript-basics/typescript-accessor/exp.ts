class Person {
  private first_name: string;
  private last_name: string;
  constructor(first_name: string, last_name: string) {
    this.first_name = first_name;
    this.last_name = last_name;
  }
  set firstName(name: string) {
    this.firstName = name;
  }
  set lastName(name: string) {
    this.last_name = name;
  }
  protected get fullName(): string {
    return `${this.first_name} ${this.last_name}`;
  }
}
class Teacher extends Person {
  private hobby: string;
  constructor(first_name: string, last_name: string, hobby: string) {
    super(first_name, last_name);
    this.hobby = hobby;
  }
  get introduction(): string {
    return `${super.fullName} 
    hobby:${this.hobby}
    `;
  }
}
