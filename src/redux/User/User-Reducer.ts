interface IUser {
  name: string;
  email: string;
}
interface IUserState {
  user: IUser | null;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const initialState: IUserState = {
  user: null,
};

//Reducer: Quarda o estado que desejamos compartilhar na aplicação
// Manipula/Altera o estado por meio de uma função.
interface IUserAction {
  type: string;
  payload?: IUser;
}

//Todo reducer precisar retornar o nosso estado atualizado, ou seja após a aplicação da action
//Com base na action iremos fazer a atualização do nosso estado e com isso precisamos retornar o nosso estado atualizado.
// O reducer vai lidar com as ações (actions) e na aplicações temos duas actions que queremos lider que é a de login e logout.
// O nosso reducer sempre tera uma logica de condicional como um if ou um switch case
export function userReducer(
  state = initialState,
  action: IUserAction
): IUserState {
  if (action.type === "user/login") {
    return {
      ...state,
      user: action.payload as IUser,
    };
  } else if (action.type === "user/logout") {
    return {
      ...state,
      user: null,
    };
  }
  return state;
}
