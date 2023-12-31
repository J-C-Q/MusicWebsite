import FooterLink from "./footerlink";
export default function Footer() {
  return (
    <div className="bg-gray-900 text-center shadow-[inset_0_10px_20px_-10px_rgba(0,0,0,1)] text-sm sm:text-xl">
      <div className="w-full flex flex-row gap-10 justify-around px-10 mt-20 text-left py-10  text-gray-500 flex-wrap">
        <div className="flex flex-col">
          <h3>Lets chat!</h3>
          <FooterLink
            link="mailto:jonathanhenrich.music@gmail.com"
            text="jonathanhenrich.music@gmail.com"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3>For professional inquiries please refer to:</h3>
          Julian Böhm<br></br> Head of Artist Management<br></br>
          <br></br>
          Künstlermanagement Uwe Kanthak
          <FooterLink
            link="https://goo.gl/maps/QcAjPR2yQNbckmhH8"
            text="Hopfenmarkt 31 D-20457 Hamburg"
          />
          <FooterLink
            link="tel:+4940600907669"
            text="T +49 (0)40 - 600 90 76 - 69"
          />
          <FooterLink
            link="tel:+4915122343969"
            text="M +49 (0)151 - 22 3439 69"
          />
          <FooterLink
            link="tel:+4940600907678"
            text="F +49 (0)40 - 600 90 76 - 78"
          />
          <FooterLink
            link="mailto:boehm@kuenstlermanagement.de"
            text="boehm@kuenstlermanagement.de"
          />
          <FooterLink
            link="http://www.kuenstlermanagement.de"
            text="http://www.kuenstlermanagement.de"
          />
        </div>
      </div>
      <h1 className="text-gray-500">© 2024 Jonathan Henrich</h1>
    </div>
  );
}
