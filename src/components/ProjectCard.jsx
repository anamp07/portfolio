import { useTheme } from '@mui/material/styles'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Link from '@mui/material/Link';
import { Box } from '@mui/material';
import { AnimationOnScroll } from 'react-animation-on-scroll'

const ProjectCard = ({project}) => {
    const theme = useTheme()

    return (
        <AnimationOnScroll animateIn="animate__fadeInUp">
        <Card sx={{ 
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%'
        }}>
            <Box>
                <CardMedia
                    sx={{ 
                        height: { xs: '11.56rem', md: '8.125rem'}
                    }}
                    image={`/assets/images/${project.imgName}.png`}
                    title={`${project.title} screenshot`}
                />
                <CardContent>
                    <Typography gutterBottom variant="subtitle1" component="p"
                        sx={{
                            fontWeight: '500'
                    }}>
                        {project.title}
                    </Typography>
                    <Typography variant="body2" sx={{
                        color: theme.palette.primary.contrastText
                    }}>
                        {project.description}
                    </Typography>
                </CardContent>
            </Box>
            <CardActions sx={{ padding: '1rem' }}>
                <Link href={project.url} target='_blank' sx={{
                    color: theme.palette.primary.contrastText,
                    textTransform: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover svg': {
                        marginLeft: '0.25rem',
                        transition: '0.3s ease-in-out',
                    }
                }}>
                    See Project <ArrowOutwardIcon />
                </Link>
            </CardActions>
        </Card>
        </AnimationOnScroll>
    )
}

export default ProjectCard