import React from 'react'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin}from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIconLink,
    SocialIcons
} from './FooterElements';
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                About Us
                            </FooterLinkTitle>                            
                            <FooterLink to="/about" >How it works</FooterLink>
                            <FooterLink to="/about" >Testimonials</FooterLink>
                            <FooterLink to="/about" >Careers</FooterLink>
                            <FooterLink to="/about" >Investors</FooterLink>
                            <FooterLink to="/about" >Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Videos
                            </FooterLinkTitle>                            
                            <FooterLink to="/about" >Submit Video</FooterLink>
                            <FooterLink to="/about" >Ambassadors</FooterLink>
                            <FooterLink to="/about" >Agency</FooterLink>
                            <FooterLink to="/about" >Influence</FooterLink>                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Contact Us
                            </FooterLinkTitle>                            
                            <FooterLink to="/about" >Contact</FooterLink>
                            <FooterLink to="/about" >Support</FooterLink>
                            <FooterLink to="/about" >Destinations</FooterLink>
                            <FooterLink to="/about" >Sponsorships</FooterLink>                            
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Social Media
                            </FooterLinkTitle>                            
                            <FooterLink to="/about" >Instagram</FooterLink>
                            <FooterLink to="/about" >Testimonials</FooterLink>
                            <FooterLink to="/about" >Facebook</FooterLink>
                            <FooterLink to="/about" >Youtube</FooterLink>
                            <FooterLink to="/about" >Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">Dolla</SocialLogo>
                    <WebsiteRights>dolla @ {new Date().getFullYear()} All rights reserved</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" taget="_blank" aria-lable="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" taget="_blank" aria-lable="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" taget="_blank" aria-lable="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href="/" taget="_blank" aria-lable="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="/" taget="_blank" aria-lable="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer