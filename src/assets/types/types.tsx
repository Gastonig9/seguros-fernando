export type Aseguradora = {
    img: string;
  };

export interface FormProps {
  nombre: string
  apellido:string
  correo: string
  mensaje: string
  onSubmit: (event: React.FormEvent) => void
}

export interface CardProps {
  img: string
  title: string
  description: string
}