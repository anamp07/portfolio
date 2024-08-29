import { Chip } from "@mui/material"
import { useTheme } from '@mui/material/styles'

const SkillsPill = ({skill}) => {
  const theme = useTheme()

  return (
    <Chip label={skill} 
      sx= {{
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.main,
        fontWeight: '700',
        fontSize: '0.75rem',
        paddingY: '0.3125rem',
        height: 'auto',
        marginRight: '0.5rem',
        marginBottom: '0.5rem',
      }}/>
  )
}

export default SkillsPill