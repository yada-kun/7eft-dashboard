import type { ReactNode } from 'react';

const variants = {
  blue: 'bg-blue-400',
  green: 'bg-green-500',
  red: 'bg-red-500',
};

export enum Color {
  red = 'red',
  blue = 'blue',
  green = 'green',
}

type Props = {
  color: Color;
  title: string;
  Icon: ReactNode;
  value: number;
  text: string;
};

const Card = ({ color, title, Icon, text, value }: Props) => (
  <div
    className={`p-6 flex flex-1 flex-col gap-8 text-3xl text-white rounded-xl ${variants[color]}`}
  >
    <div className=" ">
      <h1>{title}</h1>
      <h1 className="mt-4">{value}</h1>
    </div>
    <div className="flex place-content-between items-center gap-1 text-sm lg:text-xl">
      <div className="text-md">{Icon}</div>
      <div>
        <h1>{text}</h1>
      </div>
    </div>
  </div>
);

export default Card;
