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
      <Preview>
        {process.env.NEXT_PUBLIC_COMPANY_NAME} - New Contact Message
      </Preview>
      <Container style={container}>
        {/* Header */}
        <Section style={headerSection}>
          <Row>
            <Column align="center">
              <Img
                style={logoImg}
                src={`${baseUrl}/logo.png`}
                width="120"
                height="32"
                alt={process.env.NEXT_PUBLIC_COMPANY_NAME}
              />
              <Text style={companyName}>
                {process.env.NEXT_PUBLIC_COMPANY_NAME}
              </Text>
            </Column>
          </Row>
        </Section>
        {/* Card Body */}
        <Section style={cardBody}>
          <Text style={mainHeading}>📩 New Contact Form Submission</Text>
          <Hr style={hr} />
          <Text style={label}>
            <b>From:</b> <span style={value}>{name}</span>
          </Text>
          <Text style={label}>
            <b>Email:</b> <span style={value}>{email}</span>
          </Text>
          {phone && (
            <Text style={label}>
              <b>Phone:</b> <span style={value}>{phone}</span>
            </Text>
          )}
          <Hr style={hr} />
          <Text style={label}>
            <b>Message:</b>
          </Text>
          <Text style={messageBox}>{message}</Text>
        </Section>
        {/* Footer */}
        <Section style={footerSection}>
          <Text style={footerText}>
            This message was sent from the website contact form.
            <br />
            <Link href={baseUrl} style={footerLink}>
              {baseUrl}
            </Link>
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;

const main = {
  backgroundColor: "#f4f6fa",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  padding: 0,
  margin: 0,
};

const container = {
  margin: "32px auto",
  backgroundColor: "#fff",
  borderRadius: 10,
  overflow: "hidden",
  boxShadow: "0 4px 24px 0 rgba(60, 64, 67, 0.10)",
  maxWidth: 480,
};

const headerSection = {
  backgroundColor: "#e6f4ea",
  padding: "32px 0 12px 0",
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
};

const logoImg = {
  margin: "0 auto 8px auto",
  display: "block",
};

const companyName = {
  fontSize: "18px",
  fontWeight: 700,
  color: "#1b5e20",
  textAlign: "center",
  margin: 0,
  letterSpacing: 1,
};

const cardBody = {
  padding: "28px 32px 20px 32px",
};

const mainHeading = {
  fontSize: "18px",
  fontWeight: 700,
  color: "#004dcf",
  marginBottom: 8,
  textAlign: "left",
};

const label = {
  fontSize: "14px",
  color: "#222",
  margin: 0,
  lineHeight: "22px",
};

const value = {
  color: "#004dcf",
  fontWeight: 500,
};

const messageBox = {
  backgroundColor: "#f1f8e9",
  borderRadius: 6,
  padding: "14px 16px",
  fontSize: "15px",
  color: "#333",
  margin: "8px 0 0 0",
  lineHeight: "22px",
  border: "1px solid #c8e6c9",
};

const footerSection = {
  backgroundColor: "#f4f6fa",
  padding: "18px 0 12px 0",
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  textAlign: "center",
};

const footerText = {
  fontSize: "12px",
  color: "#888",
  margin: 0,
  lineHeight: "18px",
};

const footerLink = {
  color: "#004dcf",
  textDecoration: "underline",
};

const hr = {
  borderColor: "#e8eaed",
  margin: "16px 0",
};
