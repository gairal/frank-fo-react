import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Card,
  CardContent,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from '@material-ui/core';
import SkillLevel from './SkillLevel';

const SkillCard = ({ category }) => {
  const skillItem = skill => {
    let skillTitle = skill.name;
    if (skill.description) {
      skillTitle += ` | ${skill.description}`;
    }

    const progress = skill.level || 0;

    return (
      <Grid item xs={12} md={6} lg={4} key={skill.name}>
        <ListItem key={skill.name}>
          <ListItemIcon>
            <SkillLevel level={progress} />
          </ListItemIcon>
          <ListItemText
            primary={skillTitle}
            style={{
              flex: '1 1 0',
            }}
          />
        </ListItem>
      </Grid>
    );
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="headline" component="h2">
          {category.name}
        </Typography>
        <Grid container>
          {category.skills ? category.skills.map(skillItem) : null}
        </Grid>
      </CardContent>
    </Card>
  );
};

SkillCard.propTypes = {
  category: PropTypes.shape().isRequired,
};

export default SkillCard;
