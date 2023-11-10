export type Aseguradora = {
  img: string;
};

export interface FormProps {
  nombre: string;
  apellido: string;
  correo: string;
  mensaje: string;
  onSubmit: (event: React.FormEvent) => void;
}

export interface CardProps {
  cardId: number;
  img: string;
  title: string;
  description: string;
}
