export interface CommonState {
  email: string;
  user: string;
  url: string;
}

export interface InitAction {
  email: string;
  user: string;
  url: string;
}

export interface ChangeEmailAction {
  email: string;
}

export interface ChangeUserAction {
  user: string;
}

export interface ChangeUrlAction {
  url: string;
}
