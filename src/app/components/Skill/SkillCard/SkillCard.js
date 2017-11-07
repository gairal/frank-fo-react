import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardContent } from 'material-ui/Card';
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import SkillLevel from '../SkillLevel';

const SkillCard = props => (
  <Card>
    <CardContent>
      <Typography type="headline" component="h2">
        {props.category.name}
      </Typography>
      <List>
        {props.category.skills.map((skill) => {
          let skillTitle = skill.name;
          if (skill.description) {
            skillTitle += ` | ${skill.description}`;
          }

          const progress = skill.level || 0;

          return (
            <ListItem key={skill.name}>
              <ListItemIcon>
                <SkillLevel level={progress} />
              </ListItemIcon>
              <ListItemText primary={skillTitle} />
            </ListItem>
          );
        })}
      </List>
    </CardContent>
  </Card>
);

SkillCard.propTypes = {
  category: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default SkillCard;
