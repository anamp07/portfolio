import ProjectCard from "@/components/ProjectCard"
import { Grid, Typography } from "@mui/material"

const Projects = ({ projects }) => {
  return (
    <section id='projects' style={{margin: '2rem 0'}}>
        <Typography variant='h2' 
            sx={{color: '#A59CD1',
                mb: {xs: '1rem', md: '1.25rem'}
            }}>
                Projects
            </Typography>

        <Grid container spacing={2}>
            {projects.map((project, index) => (
                <Grid item xs={12} sm={6} md={4} sx={{display: 'flex'}} key={index}>
                    <ProjectCard project={project} />
                </Grid>
            ))}
        </Grid>
    </section>
  )
}

export default Projects