export class Session {
  token: string | undefined;

  isLoggedIn() {
    return this.token;
  }

  getUserProfile() {
    return {
      id: 0,
      firstname: "",
      lastname: ""
    };
  }
}

const session = new Session();

export default session;
