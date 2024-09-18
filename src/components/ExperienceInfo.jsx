import React from 'react'
import SkillsPill from './SkillsPill'
import { Box, List, ListItem, Typography } from '@mui/material'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const ExperienceInfo = ({data, key}) => {
  return (
    <AnimationOnScroll animateIn="animate__slideInLeft animate__slow">
    <Box>
      <Typography component='p' variant='subtitle1' sx={{fontWeight: '500'}}>
          {data.years}
      </Typography>
      <Typography variant='body' paragraph sx={{mb: '0', fontStyle: 'italic', fontWeight: '500'}}>
        {data.title}
      </Typography>
        <List>
          {data.description.map((desc, index) =>
            <ListItem key={index}>
              <Typography variant='body' paragraph>
                {desc}
              </Typography>
            </ListItem>
          )}
        </List>
      <Box sx={{marginTop: '0.625rem'}}>
        {data.skills.map((skill, index) =>(
          <React.Fragment key={index}>
            <SkillsPill skill={skill} />
          </React.Fragment>
        ))}
      </Box>
    </Box>
    </AnimationOnScroll>
  )
}

export default ExperienceInfo