interface Props {
  link: string;
  text: string;
}

export default function FooterLink(props: Props) {
  return (
    <a
      href={props.link}
      className="text-gray-400 hover:scale-[105%] hover:text-white"
    >
      {props.text}
    </a>
  );
}
