import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import { RoadmapHead } from './RoadmapHead';
import DiamondIcon from '@mui/icons-material/DiamondOutlined';
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'

  export default function CustomizedTimeline() {
    useEffect(() => {
      AOS.init({ duration: 1000});
      AOS.refresh();
  }, []);


    return (
      <div id='roadmap' className='roadmap'>
      <RoadmapHead/>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="#fff"
            data-aos="zoom-in" data-aos-duration="1500"

          >
            Token Stealth Launch 
            <br></br>
            1000+ Holders
            <br></br>
            2000 Telegram Members
            <br></br>
            Contract Audit
            <br></br>
            Crypto.com Listing
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot data-aos="zoom-in" data-aos-duration="1500">
              <DiamondIcon/>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent data-aos="zoom-in" data-aos-duration="1500" sx={{ py: '12px', px: 2, color: '#fff' }}>
            <Typography variant="h6" component="span">
              Stage 1
            </Typography>
            <Typography sx={{ color:'#fff'}}>Crobnobi&apos;s Birth</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0', color:"#fff" }}
            variant="body2"
            data-aos="zoom-in" data-aos-duration="1500"
            
          >
            6000 Holders
            <br></br>
            10,000 Telegram Members
            <br></br>
            TikTok and Twitter Awareness
            <br></br>
            Donations to Charities (Education)
            <br></br>
            Proprietary NFTs
            <br></br>
            Nobi Swap
            
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot data-aos="zoom-in" data-aos-duration="1500" color="primary">
              <DiamondIcon/>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent data-aos="zoom-in" data-aos-duration="1500" sx={{ py: '12px', px: 2, color: "#fff" }}>
            <Typography variant="h6" component="span" sx={{color: "#fff"}}>
              Stage 2
            </Typography>
            <Typography>Together we stand!</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="#fff"
            data-aos="zoom-in" data-aos-duration="1500"
          >
            40,000 Holders 
            <br></br>
            Listing on Small Exchanges
            <br></br>
            Gaming Partnership
            <br></br>
            Gear up for Major Exchange Listings
            <br></br>
            Nobi Pad
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
            <TimelineDot data-aos="zoom-in" data-aos-duration="1500" sx={{color: '#fff'}} variant="outlined">
              <DiamondIcon/>
            </TimelineDot >
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          </TimelineSeparator >
          <TimelineContent data-aos="zoom-in" data-aos-duration="1500" sx={{ py: '12px', px: 2, color: '#fff' }}>
            <Typography variant="h6" component="span">
              Stage 3
            </Typography>
            <Typography sx={{ color:'#fff'}}>Hold the line!</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0', color:"#fff" }}
            variant="body2"
            data-aos="zoom-in" data-aos-duration="1500"
            
          >
            80,000 Holders
            <br></br>
            Press Interviews (TV, Radio)
            <br></br>
            Play to Earn Games
            <br></br>
            Out of Home Media Placements
            
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot data-aos="zoom-in" data-aos-duration="1500" color="primary">
              <DiamondIcon/>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent data-aos="zoom-in" data-aos-duration="1500" sx={{ py: '12px', px: 2, color: "#fff" }}>
            <Typography variant="h6" component="span" sx={{color: "#fff"}}>
              Stage 4
            </Typography>
            <Typography>Together we stand!</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="#fff"
            data-aos="zoom-in" data-aos-duration="1500"
          >
            Metaverse Tokens
            <br></br>
            200,000 Holders
            <br></br>
            Crinja Fan Token
            <br></br>
            Propprietary NFT Platform
            <br></br>
            New Partnership
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot  data-aos="zoom-in" data-aos-duration="1500" sx={{color: '#fff'}} variant="outlined">
              <DiamondIcon/>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent data-aos="zoom-in" data-aos-duration="1500" sx={{ py: '12px', px: 2, color: '#fff' }}>
            <Typography variant="h6" component="span">
              Stage 5
            </Typography>
            <Typography sx={{ color:'#fff'}}>This is the Last Stand!</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    
    </div>
  );
}
