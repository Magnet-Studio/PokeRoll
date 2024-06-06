import React, {useState} from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

export function MouseOverPopover({ content, shown }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isPopoverHovered, setIsPopoverHovered] = useState(false);

    const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
      if (!isPopoverHovered) {
        setAnchorEl(null);
      }
    };

    const handlePopoverLeave = () => {
      setIsPopoverHovered(false);
      setAnchorEl(null);
    };

    const handlePopoverEnter = () => {
      setIsPopoverHovered(true);
    };

    const open = Boolean(anchorEl);

    return (
      <div style={{ display: 'inline-block'}}>
        <Typography
          className="Typography-hoverContent infoIcon"
          aria-owns={open ? 'mouse-over-popover' : undefined}
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
            horizontal: 'center'
          }}
          transformOrigin={{
            horizontal: 'center',
            vertical: 'top'
          }}
          onMouseEnter={handlePopoverEnter}
          onMouseLeave={handlePopoverLeave}
          sx={{ maxWidth: "100%" }}
        >
          <Typography sx={{ p: 2 }}>{shown}</Typography>
        </Popover>
      </div>
    );
}