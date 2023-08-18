import React from 'react';
import { Drawer, List, ListItem } from '@material-ui/core';

const SideBar = (props) => {
  const links = [
    { where: 'fatured',    value: 'To top' },
    { where: 'venueinfo',  value: 'Venue NFO' },
    { where: 'highlights', value: 'Highlights' },
    { where: 'pricing',    value: 'Pricing' },
    { where: 'location',   value: 'Location' },  
  ];

  const renderItem = (item) => {
    return(
      <ListItem button onClick={ () => alert(item.where) }
      key={item.where}>
        {item.value}
      </ListItem>
    );
  }

  return(
    <Drawer
      anchor='right'
      open={props.open}
      onClose={ () => props.onClose(false) }
    >

      <List component='nav'>
        { links.map((item) => renderItem(item) )}
      </List>
    </Drawer>
  )
};

export default SideBar;