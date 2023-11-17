export type Aseguradora = {
  img: string;
};



export interface FormProps {
  nombre: string;
  correo: string;
  mensaje: string;
  enviado: boolean;
  setEnviado: (enviado: boolean) => void;
  error: boolean
  setError: (error: boolean) => void
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export interface CardProps {
  cardId: number;
  img: string;
  title: string;
  description: string;
}
