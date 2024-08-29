import { Box, Grid, Typography } from '@mui/material'

const Hero = ( { data } ) => {
  return (
    <Grid container columnSpacing={4} sx={{
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: { xs: 'column-reverse', md: 'row'}
    }}>
      <Grid item xs={12} md={7}>
        <Typography variant='h1'>
            { data.greeting } <span style={{color: '#ED7895'}}>{ data.name }</span>
        </Typography>
        <Typography variant='body' 
            sx={{ fontSize: {xs: '1.125rem', sm: '1.25rem'}}}
        >
            { data.subtitle }
        </Typography>
      </Grid>
      <Grid item xs={12} md={5}>
        <Box sx={{
          display: 'flex', 
          width: '100%', 
          justifyContent: 'center',
          marginBottom: {xs: '1rem', md:'0'}
        }}>
          <img src='/assets/images/photo.jpg' alt="Personal photo" className='image__personal' />
        </Box>
      </Grid>
    </Grid>
  )
}

export default Hero