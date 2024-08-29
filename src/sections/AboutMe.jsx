import Hero from '@/components/Hero'
import { Typography } from '@mui/material'

const AboutMe = ({ data }) => {
  return (
    <section id='about' style={{margin: '2rem 0'}}>
        <Typography variant='h2' 
                sx={{
                    color: '#A59CD1',
                    mb: {xs: '1rem', md: '1.25rem'}
                }}
            >
                About Me
          </Typography>

          <Typography variant='body' component='p' sx={{mb: '1rem'}}>
                {data.description}
          </Typography>

          <Typography variant='body' cpmponent='p'>
                {data.hobbies}
          </Typography>
    </section>
  )
}

export default AboutMe