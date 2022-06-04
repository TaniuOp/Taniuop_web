import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardHeader } from '@mui/material';

const ICodeCards = () => {
  const cardsData = [
    {
      title: 'I code',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
    },
    {
      title: 'I Learn',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
    },
    {
      title: 'I Think',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
    },
    {
      title: 'I Create',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
    },
    {
      title: 'I Dream',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
    },
    {
      title: 'I Love',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
    },
    {
      title: 'I Analize',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
    },
    {
      title: 'I Listen',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
    },
    {
      title: 'I Design',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
    },
  ];

  return (
    <>
      <Card sx={{ maxWidth: 95 }}>
        <CardHeader className={''} classes={''} title={cardsData[0].title} />
        <CardActionArea>
          <CardMedia
            component='img'
            height='140'
            image='https://pbs.twimg.com/profile_images/1471137201287307273/pYRu-pbf_400x400.jpg'
            alt='green iguana'
          />
          <CardContent className=''>
            <Typography gutterBottom variant='h6' component='div'>
              {cardsData[0].description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default ICodeCards;
