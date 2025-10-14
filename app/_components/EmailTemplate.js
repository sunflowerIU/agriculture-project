import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const EmailTemplate = ({ name, email, message, phone }) => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>{process.env.COMPANY_NAME}</Preview>
      <Container style={container}>
        <Section>
          <Row>
            <Column>
              <Img
                style={sectionLogo}
                src={`${baseUrl}/logo.png`}
                width="155"
                height="31"
                alt={process.env.COMPANY_NAME}
              />
            </Column>
          </Row>
        </Section>

        <Section style={paragraphContent}>
          <Hr style={hr} />
          <Text style={heading}>Message from {name}</Text>
          <Text style={paragraph}>Hello {process.env.COMPANY_NAME},</Text>
          <Text style={paragraph}>{message}</Text>
          <Text style={paragraph}>My Email: {email}</Text>
          <Text style={paragraph}>My Phone Number: {phone}</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;

const main = {
  backgroundColor: "#dbddde",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const sectionLogo = {
  padding: "0 40px",
};

const container = {
  margin: "30px auto",
  backgroundColor: "#fff",
  borderRadius: 5,
  overflow: "hidden",
};

const heading = {
  fontSize: "14px",
  lineHeight: "26px",
  fontWeight: "700",
  color: "#004dcf",
};

const paragraphContent = {
  padding: "0 40px",
};

const paragraph = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#3c4043",
};

// const link = {
//   ...paragraph,
//   color: "#004dcf",
// };

const hr = {
  borderColor: "#e8eaed",
  margin: "20px 0",
};
