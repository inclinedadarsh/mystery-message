import {
    Html,
    Head,
    Preview,
    Heading,
    Row,
    Section,
    Text,
} from "@react-email/components";

interface VerificationEmailProps {
    username: string;
    otp: string;
}

export default function VerificationEmail({
    username,
    otp,
}: VerificationEmailProps) {
    return (
        <Html lang='en' dir='ltr'>
            <Head>
                <title>Verification code for Mystery messages</title>
            </Head>
            <Preview>
                Your verification code for Mystery messages is {otp}
            </Preview>
            <Section>
                <Row>
                    <Heading as='h1'>Hello {username},</Heading>
                </Row>
                <Row>
                    <Text>
                        Thank you for registering. Please use the following code
                        for verification:
                    </Text>
                </Row>
                <Row>
                    <Text>{otp}</Text>
                </Row>
                <Row>
                    <Text>Please ignore this email if you didn't signup.</Text>
                </Row>
            </Section>
        </Html>
    );
}
