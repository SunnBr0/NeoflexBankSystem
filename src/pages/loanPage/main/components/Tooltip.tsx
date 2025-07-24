type TTooltip = {
  text: string;
};

export const Tooltip = ({ text }: TTooltip) => {
  return (
    <article className="tooltip">
      <p className="tooltip__title">{text}</p>
    </article>
  );
};
