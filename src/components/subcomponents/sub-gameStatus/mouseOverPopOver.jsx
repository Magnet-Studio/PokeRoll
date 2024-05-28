import React, {useState} from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

export function MouseOverPopover({ content, shown }) {

    const [anchorEl, setAnchorEl] = useState(null);
  
    const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
  
    return (
      <div style={{ display: 'inline-block'}}>
        <Typography
          className="Typography-hoverContent"
          aria-owns={open ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          {content}
        </Typography>
        <Popover
          id="mouse-over-popover"
          className="TypographyText"
          open={open}
          anchorEl={anchorEl}
          onClose={handlePopoverClose}
          disableRestoreFocus
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            horizontal: 'center',
          }}
          sx={{width: "80%"}}
        >
          <Typography sx={{ p: 2 } } >{shown}</Typography>
        </Popover>
      </div>
    );
}