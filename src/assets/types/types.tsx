export type Aseguradora = {
    img: string;
  };

export interface FormProps {
  nombre: string
  correo: string
  mensaje: string
  onSubmit: (event: React.FormEvent) => void
}