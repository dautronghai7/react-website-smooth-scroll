import React from 'react'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text
} from './SigninElements'
const SignIn = () => {
    return (
        <Container>
            <FormWrap>
                <Icon to="/">Dolla</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sigin to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type="email" require />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type="password" require />
                        <FormButton type="submit">Continue</FormButton>
                        <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>   
)
}

export default SignIn
