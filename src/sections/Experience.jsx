import ExperienceTimeline from "@/components/ExperienceTimeline"
import { Typography } from "@mui/material"

const Experience = ({ experience }) => {
    return (
        <section id='experience' style={{margin: '2rem 0'}}>
            <Typography variant='h2' 
                sx={{
                    color: '#A59CD1',
                    mb: {xs: '1rem', md: '1.25rem'}
                }}
            >
                Experience
            </Typography>
            <ExperienceTimeline data={experience} />
        </section> 
    )
}

export default Experience