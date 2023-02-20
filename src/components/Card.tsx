import type { ReactNode } from 'react';

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

const Card = ({ color, title, Icon, text, value }: Props) => {
  return (
    <div className="basis-[33.3%] p-6 flex flex-col gap-8 text-3xl text-white rounded-xl ">
      <div className=" ">
        <h1>{title}</h1>
        <h1 className="mt-4">{value}</h1>
      </div>
      <div className="flex place-content-between items-center text-2xl ">
        <div className="text-4xl mt-1">{Icon}</div>
        <div>
          <h1>{text}</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
