interface Props {
  link: string;
  text: string;
  target?: string;
}

export default function FooterLink(props: Props) {
  return (
    <a href={props.link} target={props.target}>
      {props.text}
    </a>
  );
}
