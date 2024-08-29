import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceInfo from './ExperienceInfo';

const ExperienceTimeline = ({ data }) => {
  return (
    <Timeline sx={{
      [`& .${timelineItemClasses.root}:before`]: {
        flex: 0,
        padding: 0,
      },
    }}>
      {data.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
              <ExperienceInfo data={item} />
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}

export default ExperienceTimeline