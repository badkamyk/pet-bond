import {Footer} from "flowbite-react"

export default function FooterComponent() {
  return (
      <Footer container={true} className="border-t-2">
          <Footer.Copyright
              href="#"
              by="Flowbite™"
              year={2022}
          />
          <Footer.LinkGroup className="flex gap-3">
              <Footer.Link href="#">
                  About
              </Footer.Link>
              <Footer.Link href="#">
                  Privacy Policy
              </Footer.Link>
              <Footer.Link href="#">
                  Licensing
              </Footer.Link>
              <Footer.Link href="#">
                  Contact
              </Footer.Link>
          </Footer.LinkGroup>
      </Footer>
  );
}
