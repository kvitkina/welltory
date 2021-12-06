import { FacebookIcon } from "../components/icons/FacebookIcon";
import { TwitterIcon } from "../components/icons/TwitterIcon";
import { InstagramIcon } from "../components/icons/InstagramIcon";
import { LinkedinIcon } from "../components/icons/LinkedinIcon";
import { AppStoreIcon } from "../components/icons/AppStoreIcon";
import { GoogleIcon } from "../components/icons/GoogleIcon";

export const cardsInfo = [
    {
        id: '1',
        name: 'Monthly',
        discount: '-15%',
        price: '$ 5.99',
        oldPrice: '$ 7.99',
        details: 'Billed every month',
        color: '#89A3FF',
        textColor: '#FFF'
    },
    {
        id: '2',
        name: 'Annual',
        discount: '-25%',
        price: '$ 4.59',
        oldPrice: '$ 7.99',
        details: '$79 billed once a year',
        color: '#EFDD36',
        textColor: '#000'
    }
];

export const feelBetterComparison= [
    {
        id: '1',
        text: 'Personalized research papers: see how your lifestyle affects your health and what you can do about it',
        free: false,
        pro: true,
    },
    {
        id: '2',
        text: 'Recommendations: get science-backed tips to beat insomnia, cure a hangover, support a panic attack, clear a headache, or get blood pressure under control',
        free: false,
        pro: true,
    },
    {
        id: '3',
        text: 'Personalized move goals: your heartbeat and daily steps data will steer you toward better health — effortlessly',
        free: false,
        pro: true,
    },
    {
        id: '4',
        text: 'Breathing practices: focus or unwind with scientifically-proven guided practices',
        free: true,
        pro: true,
    },
    {
        id: '5',
        text: 'Yesterdays move report: see if you’re doing enough to support your health',
        free: true,
        pro: true,
    }
];

export const insightsComparison = [
    {
        id: '1',
        text: 'Detailed heartbeat analytics: access stress, energy, and focus scores, metrics and charts — check in on how your body is doing and spot any changes',
        free: false,
        pro: true,
    },
    {
        id: '2',
        text: 'In-depth blood pressure analysis: enter your numbers, and we’ll provide five extra indexes, give detailed interpretations, and alert you if something doesn’t look right',
        free: false,
        pro: true,
    },
    {
        id: '3',
        text: 'Blood pressure reports: send your data to your doctor or print out neat reports with all of your readings',
        free: false,
        pro: true,
    },
    {
        id: '4',
        text: 'Basic heartbeat analytics: just your stress, energy, and focus scores — no extra metrics',
        free: true,
        pro: true,
    },
    {
        id: '5',
        text: 'Basic blood pressure analysis: we’ll interpret your top and bottom numbers — without extra indexes ',
        free: true,
        pro: true,
    },
    {
        id: '6',
        text: 'Yesterday’s heart report sent to your feed daily: note the relationship between your activities and any changes to your heart rate',
        free: true,
        pro: true,
    }
];

export const socialIcons = [
    {
      Icon: TwitterIcon,
      link: 'https://twitter.com/welltory',
      id: '0',
    },
    {
      Icon: FacebookIcon,
      link: 'https://www.facebook.com/welltory',
      id: '1',
    },
    {
        Icon: InstagramIcon,
        link: 'https://www.instagram.com/welltory/',
        id: '2',
      },
      {
        Icon: LinkedinIcon,
        link: 'https://www.linkedin.com/company/welltory',
        id: '3',
      },
];

export const appIcons = [
    {
      Icon: AppStoreIcon,
      link: 'https://itunes.apple.com/app/welltory-personal-nyj-analitik/id1074367771?mt=8',
      id: '0',
    },
    {
      Icon: GoogleIcon,
      link: 'https://play.google.com/store/apps/details?id=com.welltory.client.android',
      id: '1',
    },
];
