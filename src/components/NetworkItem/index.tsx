import React from 'react';
import {
  FaAmazon,
  FaArtstation,
  FaBandcamp,
  FaBattleNet,
  FaBehance,
  FaBlogger,
  FaDailymotion,
  FaDeviantart,
  FaDiscord,
  FaDropbox,
  FaEnvelope,
  FaFacebookSquare,
  FaFlickr,
  FaGithub,
  FaGoogleDrive,
  FaInstagram,
  FaKickstarter,
  FaLastfmSquare,
  FaLinkedin,
  FaMedium,
  FaPatreon,
  FaPaypal,
  FaPinterest,
  FaPlaystation,
  FaReddit,
  FaSoundcloud,
  FaSpotify,
  FaSteam,
  FaTelegram,
  FaTiktok,
  FaTumblr,
  FaTwitch,
  FaTwitter,
  FaVimeo,
  FaWhatsapp,
  FaWordpress,
  FaXbox,
  FaYoutube,
} from 'react-icons/fa';

import {
  NetworkItemProps,
} from '../../utils/types';

import {
  Container,
  NetworkLink,
  NetworkName,
} from './styles';

const NetworkItem = ({
  name,
  url,
  icon,
  buttonColor,
  textColor,
  textHoverColor,
} : NetworkItemProps) => {
  const getIcon = (icon: string) => {
    switch (icon.toLowerCase()) {
      case 'amazon':
        return (<FaAmazon />);
      case 'artstation':
        return (<FaArtstation />);
      case 'bandcamp':
        return (<FaBandcamp />);
      case 'battlenet':
        return (<FaBattleNet />);
      case 'behance':
        return (<FaBehance />);
      case 'blogger':
        return (<FaBlogger />);
      case 'dailymotion':
        return (<FaDailymotion />);
      case 'deviantart':
        return (<FaDeviantart />);
      case 'discord':
        return (<FaDiscord />);
      case 'dropbox':
        return (<FaDropbox />);
      case 'email':
        return (<FaEnvelope />);
      case 'facebook':
        return (<FaFacebookSquare />);
      case 'flickr':
        return (<FaFlickr />);
      case 'github':
        return (<FaGithub />);
      case 'googledrive':
        return (<FaGoogleDrive />);
      case 'instagram':
        return (<FaInstagram />);
      case 'kickstarter':
        return (<FaKickstarter />);
      case 'lastfm':
        return (<FaLastfmSquare />);
      case 'linkedin':
        return (<FaLinkedin />);
      case 'medium':
        return (<FaMedium />);
      case 'patreon':
        return (<FaPatreon />);
      case 'paypal':
        return (<FaPaypal />);
      case 'pinterest':
        return (<FaPinterest />);
      case 'playstation':
        return (<FaPlaystation />);
      case 'reddit':
        return (<FaReddit />);
      case 'soundcloud':
        return (<FaSoundcloud />);
      case 'spotify':
        return (<FaSpotify />);
      case 'steam':
        return (<FaSteam />);
      case 'telegram':
        return (<FaTelegram />);
      case 'tiktok':
        return (<FaTiktok />);
      case 'tumblr':
        return (<FaTumblr />);
      case 'twitch':
        return (<FaTwitch />);
      case 'twitter':
        return (<FaTwitter />);
      case 'vimeo':
        return (<FaVimeo />);
      case 'whatsapp':
        return (<FaWhatsapp />);
      case 'wordpress':
        return (<FaWordpress />);
      case 'xbox':
        return (<FaXbox />);
      case 'youtube':
        return (<FaYoutube />);
      default:
        return '';
    }
  };

  return (
    <Container
      buttonColor={buttonColor}
      textHoverColor={textHoverColor}
    >
      <NetworkLink
        textColor={textColor}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <NetworkName>
          {getIcon(icon)}<span>{name}</span>
        </NetworkName>
      </NetworkLink>
    </Container>
  );
}

export default NetworkItem;
