export type Props = {
    children?: React.ReactNode;
    placeholder?: React.ReactNode;
    onClick?: () => void;
  };

export type State = {
  isOpenRequisites?: boolean,
  isOpenMenu?: boolean,
  isOpenModal?: boolean,
  loading?: boolean,
  isOpenModalCallback?: boolean
}

export type DispatchType = {
  type?: string;
  payload: State;
};

export type DispatchForkliftType = {
  type?: string;
  payload: ForkliftState;
};

export type DispatchFormType = {
  type?: string;
  payloadForm: FormParamState;
};

export type DispatchFormCallbackType = {
  type?: string;
  payloadFormCallback: FormCallbackParamState;
};

export type ForkliftState = {
  type: string;
};

export type FormParamState = {
  name?: string;
  phoneNumber?: string;
  email?: string;
  message?: string;
  model?: string;
  errorName?: string;
  errorNumber?: string;
  errorEmail?: string;
  errorMessage?: string;
};

export type FormCallbackParamState = {
  name?: string;
  phoneNumber?: string;
  errorName?: string;
  errorNumber?: string;
};

export type InfoProps = {
  src: string;
  title: string;
  text: string;
};

export type Description = {
  manufacturer: string,
  engine: object
}

export type Page = {
  titleProduct?: string,
  nameLinkProduct?: string,
  imgProduct?: string,
  description?: any,
  url?: string,
  manufacturer?: string
}