import { Box, Link, Typography } from "@mui/material"
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { styled } from '@mui/system';

const ContactBtn = styled(Link)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.contrastText,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  borderRadius: '0.25rem',
  border: '0.125rem solid',
  borderColor: theme.palette.primary.dark,
  padding: '0.5rem',
  marginRight: '0.5rem',
  marginBottom: '0.5rem',
  transition: '0.3s ease-in-out',
  '&:hover': {
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.primary.dark
  },
  [theme.breakpoints.down("md")]: {
    width: '100%'
  }
}))

const Contact = ({contact}) => {
  return (
    <section id='contact' style={{margin: '2rem 0', textAlign: 'center'}}>
      <Typography variant="h1" sx={{ marginBottom: '1rem' }}>
        {contact.description}
      </Typography>
      <Box sx={{
        display: 'flex',
        flexDirection: {xs:'column', md:'row'},
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <ContactBtn href={`mailto:${contact.email}`} target='_blank' rel='noopener'>
          <EmailIcon sx={{ marginRight: '0.25rem'}} />
          email
        </ContactBtn>
        <ContactBtn href={contact.linkedin} target='_blank' rel='noopener'>
          <LinkedInIcon sx={{ marginRight: '0.25rem'}} />
          LinkedIn
        </ContactBtn>
        <ContactBtn href={contact.github} target='_blank' rel='noopener'>
          <GitHubIcon sx={{ marginRight: '0.25rem'}} />
          GitHub
        </ContactBtn>
      </Box>
    </section>
  )
}

export default Contact