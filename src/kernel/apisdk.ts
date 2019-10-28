import { Session } from "./users/session";
import { dotenv } from "../dotenv";

function responseHandler(resp: Response): Promise<any> {
  if (resp.status !== 200) {
    return resp.json().then(error => {
      throw error;
    });
  }

  return resp.json();
}

function makeAuthorizedRequest(
  session: Session,
  method: string,
  path: string,
  body: object
) {
  if (!session.isLoggedIn()) throw new Error("User is not logged in");

  const url = dotenv.api.hostname + path;
  const json = JSON.stringify(body);
  return fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.token}`
    },
    body: json
  }).then(responseHandler);
}

function makeUnauthorizedRequest(method: string, path: string, body: object) {
  const url = dotenv.api.hostname + path;
  const json = JSON.stringify(body);
  return fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body: json
  }).then(responseHandler);
}

function get(session: Session, path: string) {
  return makeAuthorizedRequest(session, "GET", path, {});
}

function post(session: Session, path: string, body: object) {
  return makeAuthorizedRequest(session, "POST", path, body);
}

export function listPoliticians(session: Session) {
  return get(session, "/ranks/politicians");
}

/**
 * Users API.
 */
export async function registerAccount({
  email,
  password,
  firstname,
  lastname
}: {
  email: string;
  password: string;
  firstname: string;
  lastname?: string;
}): Promise<string> {
  const data = await makeUnauthorizedRequest(
    "POST",
    "/api/v1.0/users/register",
    {
      email,
      password,
      firstname,
      lastname
    }
  );

  return data.result;
}
