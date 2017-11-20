import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'material-ui';
import Card, { CardContent } from 'material-ui/Card';
import { ListItem, ListItemText, ListItemIcon } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import SkillLevel from '../SkillLevel';

const SkillCard = ({ category }) => (
  <Card>
    <CardContent>
      <Typography type="headline" component="h2">
        {category.name}
      </Typography>
      <Grid container>
        {category.skills ? category.skills.map((skill) => {
          let skillTitle = skill.name;
          if (skill.description) {
            skillTitle += ` | ${skill.description}`;
          }

          const progress = skill.level || 0;

          return (
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              key={skill.name}
            >
              <ListItem key={skill.name}>
                <ListItemIcon>
                  <SkillLevel level={progress} />
                </ListItemIcon>
                <ListItemText primary={skillTitle} style={{ flex: '1 1 0' }} />
              </ListItem>
            </Grid>
          );
        }) : null}
      </Grid>
    </CardContent>
  </Card>
);

SkillCard.propTypes = {
  category: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default SkillCard;
